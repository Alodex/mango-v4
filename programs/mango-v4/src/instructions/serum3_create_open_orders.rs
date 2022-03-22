use anchor_lang::prelude::*;

use crate::state::*;

#[derive(Accounts)]
pub struct Serum3CreateOpenOrders<'info> {
    // TODO: do we even need the group?
    pub group: AccountLoader<'info, Group>,

    #[account(
        mut,
        has_one = group,
        has_one = owner,
    )]
    pub account: AccountLoader<'info, MangoAccount>,

    #[account(
        has_one = group,
        has_one = serum_program,
        has_one = serum_market_external,
    )]
    pub serum_market: AccountLoader<'info, Serum3Market>,

    // TODO: limit?
    pub serum_program: UncheckedAccount<'info>,
    pub serum_market_external: UncheckedAccount<'info>,

    // initialized by this instruction via cpi to serum
    #[account(
        init,
        seeds = [account.key().as_ref(), b"Serum3OO".as_ref(), serum_market.key().as_ref()],
        bump,
        payer = payer,
        owner = serum_program.key(),
        // 12 is the padding serum uses for accounts ("serum" prefix, "padding" postfix)
        space = 12 + std::mem::size_of::<serum_dex::state::OpenOrders>(),
    )]
    pub open_orders: UncheckedAccount<'info>,

    pub owner: Signer<'info>,

    #[account(mut)]
    pub payer: Signer<'info>,

    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

pub fn serum3_create_open_orders(ctx: Context<Serum3CreateOpenOrders>) -> Result<()> {
    cpi_init_open_orders(&ctx.accounts)?;

    let serum_market = ctx.accounts.serum_market.load()?;
    let mut account = ctx.accounts.account.load_mut()?;
    let serum_account = account
        .serum3_account_map
        .create(serum_market.market_index)?;
    serum_account.open_orders = ctx.accounts.open_orders.key();
    serum_account.base_token_index = serum_market.base_token_index;
    serum_account.quote_token_index = serum_market.quote_token_index;

    // Make it so that the token_account_map for the base and quote currency
    // stay permanently blocked. Otherwise users may end up in situations where
    // they can't settle a market because they don't have free token_account_map!
    let (quote_position, _) = account
        .token_account_map
        .get_mut_or_create(serum_market.quote_token_index)?;
    quote_position.in_use_count += 1;
    let (base_position, _) = account
        .token_account_map
        .get_mut_or_create(serum_market.base_token_index)?;
    base_position.in_use_count += 1;

    Ok(())
}

fn cpi_init_open_orders(ctx: &Serum3CreateOpenOrders) -> Result<()> {
    use crate::serum3_cpi;
    let group = ctx.group.load()?;
    serum3_cpi::InitOpenOrders {
        program: ctx.serum_program.to_account_info(),
        market: ctx.serum_market_external.to_account_info(),
        open_orders: ctx.open_orders.to_account_info(),
        open_orders_authority: ctx.group.to_account_info(),
        rent: ctx.rent.to_account_info(),
    }
    .call(&group)
}