export type MangoV4 = {
  "version": "0.1.0",
  "name": "mango_v4",
  "instructions": [
    {
      "name": "createGroup",
      "accounts": [
        {
          "name": "group",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "Group"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "admin"
              }
            ]
          }
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "registerToken",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "Bank"
              },
              {
                "kind": "arg",
                "type": {
                  "defined": "TokenIndex"
                },
                "path": "token_index"
              }
            ]
          }
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "Vault"
              },
              {
                "kind": "arg",
                "type": {
                  "defined": "TokenIndex"
                },
                "path": "token_index"
              }
            ]
          }
        },
        {
          "name": "mintInfo",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "MintInfo"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "oracle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "addressLookupTable",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "addressLookupTableProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenIndex",
          "type": {
            "defined": "TokenIndex"
          }
        },
        {
          "name": "maintAssetWeight",
          "type": "f32"
        },
        {
          "name": "initAssetWeight",
          "type": "f32"
        },
        {
          "name": "maintLiabWeight",
          "type": "f32"
        },
        {
          "name": "initLiabWeight",
          "type": "f32"
        }
      ]
    },
    {
      "name": "createAccount",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "MangoAccount"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "owner"
              },
              {
                "kind": "arg",
                "type": "u8",
                "path": "account_num"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "accountNum",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createStubOracle",
      "accounts": [
        {
          "name": "oracle",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "StubOracle"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "token_mint"
              }
            ]
          }
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": {
            "defined": "I80F48"
          }
        }
      ]
    },
    {
      "name": "setStubOracle",
      "accounts": [
        {
          "name": "oracle",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": {
            "defined": "I80F48"
          }
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "allowBorrow",
          "type": "bool"
        }
      ]
    },
    {
      "name": "marginTrade",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "banksLen",
          "type": {
            "defined": "usize"
          }
        },
        {
          "name": "cpiData",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "serum3RegisterMarket",
      "accounts": [
        {
          "name": "group",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "Serum3Market"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "serum_market_external"
              }
            ]
          }
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "marketIndex",
          "type": {
            "defined": "Serum3MarketIndex"
          }
        },
        {
          "name": "baseTokenIndex",
          "type": {
            "defined": "TokenIndex"
          }
        },
        {
          "name": "quoteTokenIndex",
          "type": {
            "defined": "TokenIndex"
          }
        }
      ]
    },
    {
      "name": "serum3CreateOpenOrders",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "account"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "Serum3OO"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "serum_market"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "serum3PlaceOrder",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketRequestQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBaseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketQuoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "order",
          "type": {
            "defined": "instructions::NewOrderInstructionData"
          }
        }
      ]
    },
    {
      "name": "serum3CancelOrder",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "order",
          "type": {
            "defined": "instructions::CancelOrderInstructionData"
          }
        }
      ]
    },
    {
      "name": "serum3SettleFunds",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBaseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketQuoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "serum3LiqForceCancelOrders",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBaseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketQuoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createPerpMarket",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "oracle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "perpMarket",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "PerpMarket"
              },
              {
                "kind": "arg",
                "type": {
                  "defined": "PerpMarketIndex"
                },
                "path": "perp_market_index"
              }
            ]
          }
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "perpMarketIndex",
          "type": {
            "defined": "PerpMarketIndex"
          }
        },
        {
          "name": "baseTokenIndexOpt",
          "type": {
            "option": {
              "defined": "TokenIndex"
            }
          }
        },
        {
          "name": "quoteTokenIndex",
          "type": {
            "defined": "TokenIndex"
          }
        },
        {
          "name": "quoteLotSize",
          "type": "i64"
        },
        {
          "name": "baseLotSize",
          "type": "i64"
        }
      ]
    },
    {
      "name": "placePerpOrder",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "perpMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "i64"
        },
        {
          "name": "maxBaseQuantity",
          "type": "i64"
        },
        {
          "name": "maxQuoteQuantity",
          "type": "i64"
        },
        {
          "name": "clientOrderId",
          "type": "u64"
        },
        {
          "name": "orderType",
          "type": {
            "defined": "OrderType"
          }
        },
        {
          "name": "expiryTimestamp",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "bank",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "oracle",
            "type": "publicKey"
          },
          {
            "name": "depositIndex",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "borrowIndex",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "indexedTotalDeposits",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "indexedTotalBorrows",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "maintAssetWeight",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "initAssetWeight",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "maintLiabWeight",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "initLiabWeight",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "dust",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "tokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          }
        ]
      }
    },
    {
      "name": "bookSide",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bookSideType",
            "type": {
              "defined": "BookSideType"
            }
          },
          {
            "name": "bumpIndex",
            "type": {
              "defined": "usize"
            }
          },
          {
            "name": "freeListLen",
            "type": {
              "defined": "usize"
            }
          },
          {
            "name": "freeListHead",
            "type": {
              "defined": "NodeHandle"
            }
          },
          {
            "name": "rootNode",
            "type": {
              "defined": "NodeHandle"
            }
          },
          {
            "name": "leafCount",
            "type": {
              "defined": "usize"
            }
          },
          {
            "name": "nodes",
            "type": {
              "array": [
                {
                  "defined": "AnyNode"
                },
                1024
              ]
            }
          }
        ]
      }
    },
    {
      "name": "group",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "mangoAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "delegate",
            "type": "publicKey"
          },
          {
            "name": "tokenAccountMap",
            "type": {
              "defined": "TokenAccountMap"
            }
          },
          {
            "name": "serum3AccountMap",
            "type": {
              "defined": "Serum3AccountMap"
            }
          },
          {
            "name": "beingLiquidated",
            "type": "bool"
          },
          {
            "name": "isBankrupt",
            "type": "bool"
          },
          {
            "name": "accountNum",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "mintInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "bank",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "oracle",
            "type": "publicKey"
          },
          {
            "name": "tokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "addressLookupTable",
            "type": "publicKey"
          },
          {
            "name": "addressLookupTableBankIndex",
            "type": "u8"
          },
          {
            "name": "addressLookupTableOracleIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "stubOracle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "lastUpdated",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "perpMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "publicKey"
          },
          {
            "name": "oracle",
            "type": "publicKey"
          },
          {
            "name": "bids",
            "type": "publicKey"
          },
          {
            "name": "asks",
            "type": "publicKey"
          },
          {
            "name": "eventQueue",
            "type": "publicKey"
          },
          {
            "name": "quoteLotSize",
            "type": "i64"
          },
          {
            "name": "baseLotSize",
            "type": "i64"
          },
          {
            "name": "seqNum",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "perpMarketIndex",
            "type": {
              "defined": "PerpMarketIndex"
            }
          },
          {
            "name": "baseTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "quoteTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          }
        ]
      }
    },
    {
      "name": "eventQueueHeader",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metaData",
            "type": {
              "defined": "MetaData"
            }
          },
          {
            "name": "head",
            "type": {
              "defined": "usize"
            }
          },
          {
            "name": "count",
            "type": {
              "defined": "usize"
            }
          },
          {
            "name": "seqNum",
            "type": {
              "defined": "usize"
            }
          }
        ]
      }
    },
    {
      "name": "serum3Market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "publicKey"
          },
          {
            "name": "serumProgram",
            "type": "publicKey"
          },
          {
            "name": "serumMarketExternal",
            "type": "publicKey"
          },
          {
            "name": "marketIndex",
            "type": {
              "defined": "Serum3MarketIndex"
            }
          },
          {
            "name": "baseTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "quoteTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "TokenAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indexedValue",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "tokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "inUseCount",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "TokenAccountMap",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "values",
            "type": {
              "array": [
                {
                  "defined": "TokenAccount"
                },
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "Serum3Account",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "openOrders",
            "type": "publicKey"
          },
          {
            "name": "marketIndex",
            "type": {
              "defined": "Serum3MarketIndex"
            }
          },
          {
            "name": "baseTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "quoteTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          }
        ]
      }
    },
    {
      "name": "Serum3AccountMap",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "values",
            "type": {
              "array": [
                {
                  "defined": "Serum3Account"
                },
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "BookSideType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bids"
          },
          {
            "name": "Asks"
          }
        ]
      }
    },
    {
      "name": "DataType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "MangoGroup"
          },
          {
            "name": "MangoAccount"
          },
          {
            "name": "RootBank"
          },
          {
            "name": "NodeBank"
          },
          {
            "name": "PerpMarket"
          },
          {
            "name": "Bids"
          },
          {
            "name": "Asks"
          },
          {
            "name": "MangoCache"
          },
          {
            "name": "EventQueue"
          },
          {
            "name": "AdvancedOrders"
          },
          {
            "name": "ReferrerMemory"
          },
          {
            "name": "ReferrerIdRecord"
          }
        ]
      }
    },
    {
      "name": "NodeTag",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Uninitialized"
          },
          {
            "name": "InnerNode"
          },
          {
            "name": "LeafNode"
          },
          {
            "name": "FreeNode"
          },
          {
            "name": "LastFreeNode"
          }
        ]
      }
    },
    {
      "name": "NodeRef",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Inner",
            "fields": [
              {
                "defined": "&'aInnerNode"
              }
            ]
          },
          {
            "name": "Leaf",
            "fields": [
              {
                "defined": "&'aLeafNode"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "NodeRefMut",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Inner",
            "fields": [
              {
                "defined": "&'amutInnerNode"
              }
            ]
          },
          {
            "name": "Leaf",
            "fields": [
              {
                "defined": "&'amutLeafNode"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "OracleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Stub"
          },
          {
            "name": "Pyth"
          }
        ]
      }
    },
    {
      "name": "OrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Limit"
          },
          {
            "name": "ImmediateOrCancel"
          },
          {
            "name": "PostOnly"
          },
          {
            "name": "Market"
          },
          {
            "name": "PostOnlySlide"
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    },
    {
      "name": "EventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Fill"
          },
          {
            "name": "Out"
          },
          {
            "name": "Liquidate"
          }
        ]
      }
    },
    {
      "name": "ProgramInstruction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "CreateLookupTable",
            "fields": [
              {
                "name": "recent_slot",
                "type": {
                  "defined": "Slot"
                }
              },
              {
                "name": "bump_seed",
                "type": "u8"
              }
            ]
          },
          {
            "name": "FreezeLookupTable"
          },
          {
            "name": "ExtendLookupTable",
            "fields": [
              {
                "name": "new_addresses",
                "type": {
                  "vec": "publicKey"
                }
              }
            ]
          },
          {
            "name": "DeactivateLookupTable"
          },
          {
            "name": "CloseLookupTable"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "SomeError",
      "msg": ""
    },
    {
      "code": 6001,
      "name": "MathError",
      "msg": ""
    },
    {
      "code": 6002,
      "name": "UnexpectedOracle",
      "msg": ""
    },
    {
      "code": 6003,
      "name": "UnknownOracleType",
      "msg": ""
    },
    {
      "code": 6004,
      "name": "InvalidMarginTradeTargetCpiProgram",
      "msg": ""
    },
    {
      "code": 6005,
      "name": "HealthMustBePositive",
      "msg": ""
    }
  ]
};

export const IDL: MangoV4 = {
  "version": "0.1.0",
  "name": "mango_v4",
  "instructions": [
    {
      "name": "createGroup",
      "accounts": [
        {
          "name": "group",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "Group"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "admin"
              }
            ]
          }
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "registerToken",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "Bank"
              },
              {
                "kind": "arg",
                "type": {
                  "defined": "TokenIndex"
                },
                "path": "token_index"
              }
            ]
          }
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "Vault"
              },
              {
                "kind": "arg",
                "type": {
                  "defined": "TokenIndex"
                },
                "path": "token_index"
              }
            ]
          }
        },
        {
          "name": "mintInfo",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "MintInfo"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "oracle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "addressLookupTable",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "addressLookupTableProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenIndex",
          "type": {
            "defined": "TokenIndex"
          }
        },
        {
          "name": "maintAssetWeight",
          "type": "f32"
        },
        {
          "name": "initAssetWeight",
          "type": "f32"
        },
        {
          "name": "maintLiabWeight",
          "type": "f32"
        },
        {
          "name": "initLiabWeight",
          "type": "f32"
        }
      ]
    },
    {
      "name": "createAccount",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "MangoAccount"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "owner"
              },
              {
                "kind": "arg",
                "type": "u8",
                "path": "account_num"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "accountNum",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createStubOracle",
      "accounts": [
        {
          "name": "oracle",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "StubOracle"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Mint",
                "path": "token_mint"
              }
            ]
          }
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": {
            "defined": "I80F48"
          }
        }
      ]
    },
    {
      "name": "setStubOracle",
      "accounts": [
        {
          "name": "oracle",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "price",
          "type": {
            "defined": "I80F48"
          }
        }
      ]
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "bank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "allowBorrow",
          "type": "bool"
        }
      ]
    },
    {
      "name": "marginTrade",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "banksLen",
          "type": {
            "defined": "usize"
          }
        },
        {
          "name": "cpiData",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "serum3RegisterMarket",
      "accounts": [
        {
          "name": "group",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "Serum3Market"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "serum_market_external"
              }
            ]
          }
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "marketIndex",
          "type": {
            "defined": "Serum3MarketIndex"
          }
        },
        {
          "name": "baseTokenIndex",
          "type": {
            "defined": "TokenIndex"
          }
        },
        {
          "name": "quoteTokenIndex",
          "type": {
            "defined": "TokenIndex"
          }
        }
      ]
    },
    {
      "name": "serum3CreateOpenOrders",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "account"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "Serum3OO"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "serum_market"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "serum3PlaceOrder",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketRequestQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBaseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketQuoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "order",
          "type": {
            "defined": "instructions::NewOrderInstructionData"
          }
        }
      ]
    },
    {
      "name": "serum3CancelOrder",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "order",
          "type": {
            "defined": "instructions::CancelOrderInstructionData"
          }
        }
      ]
    },
    {
      "name": "serum3SettleFunds",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBaseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketQuoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "serum3LiqForceCancelOrders",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "openOrders",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "serumMarket",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "serumMarketExternal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAsks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketEventQueue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketBaseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketQuoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketVaultSigner",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseBank",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "baseVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createPerpMarket",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "oracle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "perpMarket",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "type": "publicKey",
                "path": "group"
              },
              {
                "kind": "const",
                "type": "string",
                "value": "PerpMarket"
              },
              {
                "kind": "arg",
                "type": {
                  "defined": "PerpMarketIndex"
                },
                "path": "perp_market_index"
              }
            ]
          }
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "perpMarketIndex",
          "type": {
            "defined": "PerpMarketIndex"
          }
        },
        {
          "name": "baseTokenIndexOpt",
          "type": {
            "option": {
              "defined": "TokenIndex"
            }
          }
        },
        {
          "name": "quoteTokenIndex",
          "type": {
            "defined": "TokenIndex"
          }
        },
        {
          "name": "quoteLotSize",
          "type": "i64"
        },
        {
          "name": "baseLotSize",
          "type": "i64"
        }
      ]
    },
    {
      "name": "placePerpOrder",
      "accounts": [
        {
          "name": "group",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "account",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "perpMarket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "asks",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bids",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "eventQueue",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "oracle",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "price",
          "type": "i64"
        },
        {
          "name": "maxBaseQuantity",
          "type": "i64"
        },
        {
          "name": "maxQuoteQuantity",
          "type": "i64"
        },
        {
          "name": "clientOrderId",
          "type": "u64"
        },
        {
          "name": "orderType",
          "type": {
            "defined": "OrderType"
          }
        },
        {
          "name": "expiryTimestamp",
          "type": "u64"
        },
        {
          "name": "limit",
          "type": "u8"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "bank",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "oracle",
            "type": "publicKey"
          },
          {
            "name": "depositIndex",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "borrowIndex",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "indexedTotalDeposits",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "indexedTotalBorrows",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "maintAssetWeight",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "initAssetWeight",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "maintLiabWeight",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "initLiabWeight",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "dust",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "tokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          }
        ]
      }
    },
    {
      "name": "bookSide",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bookSideType",
            "type": {
              "defined": "BookSideType"
            }
          },
          {
            "name": "bumpIndex",
            "type": {
              "defined": "usize"
            }
          },
          {
            "name": "freeListLen",
            "type": {
              "defined": "usize"
            }
          },
          {
            "name": "freeListHead",
            "type": {
              "defined": "NodeHandle"
            }
          },
          {
            "name": "rootNode",
            "type": {
              "defined": "NodeHandle"
            }
          },
          {
            "name": "leafCount",
            "type": {
              "defined": "usize"
            }
          },
          {
            "name": "nodes",
            "type": {
              "array": [
                {
                  "defined": "AnyNode"
                },
                1024
              ]
            }
          }
        ]
      }
    },
    {
      "name": "group",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "mangoAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "delegate",
            "type": "publicKey"
          },
          {
            "name": "tokenAccountMap",
            "type": {
              "defined": "TokenAccountMap"
            }
          },
          {
            "name": "serum3AccountMap",
            "type": {
              "defined": "Serum3AccountMap"
            }
          },
          {
            "name": "beingLiquidated",
            "type": "bool"
          },
          {
            "name": "isBankrupt",
            "type": "bool"
          },
          {
            "name": "accountNum",
            "type": "u8"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                5
              ]
            }
          }
        ]
      }
    },
    {
      "name": "mintInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "bank",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "oracle",
            "type": "publicKey"
          },
          {
            "name": "tokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "addressLookupTable",
            "type": "publicKey"
          },
          {
            "name": "addressLookupTableBankIndex",
            "type": "u8"
          },
          {
            "name": "addressLookupTableOracleIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "stubOracle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "lastUpdated",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "perpMarket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "publicKey"
          },
          {
            "name": "oracle",
            "type": "publicKey"
          },
          {
            "name": "bids",
            "type": "publicKey"
          },
          {
            "name": "asks",
            "type": "publicKey"
          },
          {
            "name": "eventQueue",
            "type": "publicKey"
          },
          {
            "name": "quoteLotSize",
            "type": "i64"
          },
          {
            "name": "baseLotSize",
            "type": "i64"
          },
          {
            "name": "seqNum",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "perpMarketIndex",
            "type": {
              "defined": "PerpMarketIndex"
            }
          },
          {
            "name": "baseTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "quoteTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          }
        ]
      }
    },
    {
      "name": "eventQueueHeader",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "metaData",
            "type": {
              "defined": "MetaData"
            }
          },
          {
            "name": "head",
            "type": {
              "defined": "usize"
            }
          },
          {
            "name": "count",
            "type": {
              "defined": "usize"
            }
          },
          {
            "name": "seqNum",
            "type": {
              "defined": "usize"
            }
          }
        ]
      }
    },
    {
      "name": "serum3Market",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "group",
            "type": "publicKey"
          },
          {
            "name": "serumProgram",
            "type": "publicKey"
          },
          {
            "name": "serumMarketExternal",
            "type": "publicKey"
          },
          {
            "name": "marketIndex",
            "type": {
              "defined": "Serum3MarketIndex"
            }
          },
          {
            "name": "baseTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "quoteTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "TokenAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "indexedValue",
            "type": {
              "defined": "I80F48"
            }
          },
          {
            "name": "tokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "inUseCount",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "TokenAccountMap",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "values",
            "type": {
              "array": [
                {
                  "defined": "TokenAccount"
                },
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "Serum3Account",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "openOrders",
            "type": "publicKey"
          },
          {
            "name": "marketIndex",
            "type": {
              "defined": "Serum3MarketIndex"
            }
          },
          {
            "name": "baseTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          },
          {
            "name": "quoteTokenIndex",
            "type": {
              "defined": "TokenIndex"
            }
          }
        ]
      }
    },
    {
      "name": "Serum3AccountMap",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "values",
            "type": {
              "array": [
                {
                  "defined": "Serum3Account"
                },
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "BookSideType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bids"
          },
          {
            "name": "Asks"
          }
        ]
      }
    },
    {
      "name": "DataType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "MangoGroup"
          },
          {
            "name": "MangoAccount"
          },
          {
            "name": "RootBank"
          },
          {
            "name": "NodeBank"
          },
          {
            "name": "PerpMarket"
          },
          {
            "name": "Bids"
          },
          {
            "name": "Asks"
          },
          {
            "name": "MangoCache"
          },
          {
            "name": "EventQueue"
          },
          {
            "name": "AdvancedOrders"
          },
          {
            "name": "ReferrerMemory"
          },
          {
            "name": "ReferrerIdRecord"
          }
        ]
      }
    },
    {
      "name": "NodeTag",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Uninitialized"
          },
          {
            "name": "InnerNode"
          },
          {
            "name": "LeafNode"
          },
          {
            "name": "FreeNode"
          },
          {
            "name": "LastFreeNode"
          }
        ]
      }
    },
    {
      "name": "NodeRef",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Inner",
            "fields": [
              {
                "defined": "&'aInnerNode"
              }
            ]
          },
          {
            "name": "Leaf",
            "fields": [
              {
                "defined": "&'aLeafNode"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "NodeRefMut",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Inner",
            "fields": [
              {
                "defined": "&'amutInnerNode"
              }
            ]
          },
          {
            "name": "Leaf",
            "fields": [
              {
                "defined": "&'amutLeafNode"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "OracleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Stub"
          },
          {
            "name": "Pyth"
          }
        ]
      }
    },
    {
      "name": "OrderType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Limit"
          },
          {
            "name": "ImmediateOrCancel"
          },
          {
            "name": "PostOnly"
          },
          {
            "name": "Market"
          },
          {
            "name": "PostOnlySlide"
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    },
    {
      "name": "EventType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Fill"
          },
          {
            "name": "Out"
          },
          {
            "name": "Liquidate"
          }
        ]
      }
    },
    {
      "name": "ProgramInstruction",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "CreateLookupTable",
            "fields": [
              {
                "name": "recent_slot",
                "type": {
                  "defined": "Slot"
                }
              },
              {
                "name": "bump_seed",
                "type": "u8"
              }
            ]
          },
          {
            "name": "FreezeLookupTable"
          },
          {
            "name": "ExtendLookupTable",
            "fields": [
              {
                "name": "new_addresses",
                "type": {
                  "vec": "publicKey"
                }
              }
            ]
          },
          {
            "name": "DeactivateLookupTable"
          },
          {
            "name": "CloseLookupTable"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "SomeError",
      "msg": ""
    },
    {
      "code": 6001,
      "name": "MathError",
      "msg": ""
    },
    {
      "code": 6002,
      "name": "UnexpectedOracle",
      "msg": ""
    },
    {
      "code": 6003,
      "name": "UnknownOracleType",
      "msg": ""
    },
    {
      "code": 6004,
      "name": "InvalidMarginTradeTargetCpiProgram",
      "msg": ""
    },
    {
      "code": 6005,
      "name": "HealthMustBePositive",
      "msg": ""
    }
  ]
};
