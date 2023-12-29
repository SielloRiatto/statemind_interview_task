import { NextApiRequest, NextApiResponse } from 'next'


const projectsData = [
    {
      "client": "Lido Finance",
      "tvl": 15029000000,
      "img": "Lido_44.svg",
      "loc": 12899,
      "audits": [
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2023-08-31T00:00:00+07:00",
          "end_date": "2023-09-04T00:00:00+07:00",
          "details": {
            "loc": 140,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 0
          }
        },
        {
          "private": false,
          "audit_name": "V2 deployment validation",
          "start_date": "2023-05-05T00:00:00+07:00",
          "end_date": "2023-05-10T00:00:00+07:00",
          "details": {
            "loc": 0,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 0
          },
          "desc": "Lido has requested Statemind to validate the deployment of their V2 contracts. \n\nThe purpose of the validation is to ensure that the deployed contracts' sources match the audited commit and that the contracts are configured correctly according to the reference docs.\n\nThe deployment consists of three main parts:\n\nLido's main contracts: lidofinance/lido-dao.\nGateSeals contracts: lidofinance/gate-seals.\nShapellaUpgradeTemplate contract: lidofinance/scripts.\n\nReference commits and audit reports\n\nRepository Commit Audit Report\nlido-dao e45c4d6fb8120fd29426b8d969c19d8a798ca974 2023-04-28\ngate-seals 7e9704d9f40cd17652480a15f2ca9519d6b532d2 2023-04-20\nShapellaUpgradeTemplate a19c6b7e2d661de12e2ba585c251c8d70a1da230 2023-05-10",
          "initial_commit": "e45c4d6fb8120fd29426b8d969c19d8a798ca974, 7e9704d9f40cd17652480a15f2ca9519d6b532d2, a19c6b7e2d661de12e2ba585c251c8d70a1da230",
          "conclusion": "All deployments have been successfully validated, meaning that:\n\nAll audited commits match the deployed contracts fully.\nAll default configurations are correct.\nThe contracts are ready for upgrade.\n\nValidated commits and audit reports\n\nRepository Final validated commit Audit Report\nlido-dao e45c4d6fb8120fd29426b8d969c19d8a798ca974 2023-04-28\ngate-seals 7e9704d9f40cd17652480a15f2ca9519d6b532d2 2023-04-20\nShapellaUpgradeTemplate a19c6b7e2d661de12e2ba585c251c8d70a1da230 2023-05-10",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Lido%20Finance/2023-05-10_Lido_V2_deployment_validation.pdf"
        },
        {
          "private": false,
          "audit_name": "Lido V2 upgrade template",
          "start_date": "2023-04-13T00:00:00+07:00",
          "end_date": "2023-05-10T00:00:00+07:00",
          "details": {
            "loc": 772,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 0
          },
          "desc": "Lido V2 upgrade changes almost every previously deployed contract and adds new ones. From the prospects of the governance process, an on-chain vote for the upgrade should perform an atomic (all or nothing) transition. The upgrade template encompasses migrations, permissions granting procedures, and overall protocol integrity checks.",
          "initial_commit": "8f9bfb2f0616fec031d382c4ec5e3455e7ebcd07",
          "conclusion": "",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Lido%20Finance/2023-05-10_Lido_ShapellaUpgradeTemplate.pdf"
        },
        {
          "private": false,
          "audit_name": "GateSeals",
          "start_date": "2023-03-20T00:00:00+07:00",
          "end_date": "2023-04-20T00:00:00+07:00",
          "details": {
            "loc": 124,
            "critical_cnt": 0,
            "high_cnt": 1,
            "medium_cnt": 0
          },
          "desc": "A GateSeal is a contract that allows the designated account to instantly put a set of contracts on pause for a limited duration. GateSeals are meant to be used as a panic button for crucial contracts in case of an emergency.",
          "initial_commit": "08a57c242f902a8a3bc526a851afc32e3f6b6275",
          "conclusion": "",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Lido%20Finance/2023-04-20_Lido_GateSeals.pdf"
        },
        {
          "private": false,
          "audit_name": "Lido on Polygon v2",
          "start_date": "2023-03-20T00:00:00+07:00",
          "end_date": "2023-05-17T00:00:00+07:00",
          "details": {
            "loc": 1860,
            "critical_cnt": 0,
            "high_cnt": 1,
            "medium_cnt": 5
          },
          "desc": "Overview\n\nThe LIDO contracts on the Polygon blockchain are for liquid staking. Because the Polygon's consensus layer works in the Ethereum network, the central LIDO contracts are located in it too.\n\nUsers can stake their ERC20 Matic tokens in the Ethereum network to receive stMatic tokens.",
          "initial_commit": "da2e7ee19ab8552ed278f9e3a3a25be57b8068cc",
          "conclusion": "",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Lido%20Finance/2023-05-17_Lido_Polygon_v2.pdf"
        },
        {
          "private": false,
          "audit_name": "Lido V2",
          "start_date": "2023-02-13T00:00:00+07:00",
          "end_date": "2023-04-28T00:00:00+07:00",
          "details": {
            "loc": 7542,
            "critical_cnt": 2,
            "high_cnt": 8,
            "medium_cnt": 17
          },
          "desc": "The Lido V2 protocol upgrade for Lido on Ethereum allows stETH token redemptions to native ether using Ethereum withdrawals introduced with the Shanghai/Capella hardfork.\n\nThe major features of the protocol upgrade beyond withdrawals support:\n\nA modular smart contracts architecture that unlocks the heterogenous Lido validators subsets onboarding represented as independent staking modules (e.g., community-driven validators or committees of DVT-enabled validators) for the StakingRouter contract. \nAn updated oracle contract consensus mechanics that allows delivering huge data chunks (virtually unbounded) via a two-step procedure: reach a consensus about the data hash, and provide the data itself in a batched manner.",
          "initial_commit": "89ad4cc35407609081afb94df535d71b27bb44b7",
          "conclusion": "During the audit of Lido V2 codebase, 120 issues were found in total:\n\n2 critical severity issues (1 fixed, 1 acknowledged)\n8 high severity issues (6 fixed, 2 acknowledged)\n17 medium severity issues (9 fixed, 8 acknowledged)\n93 informational severity issues (59 fixed, 34 acknowledged)\n\n&nbsp;\n\n The final reviewed commit is e45c4d6fb8120fd29426b8d969c19d8a798ca974",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Lido%20Finance/2023-04-28_Lido_V2.pdf"
        },
        {
          "private": false,
          "audit_name": "TRP vesting escrow",
          "start_date": "2023-01-24T00:00:00+07:00",
          "end_date": "2023-01-31T00:00:00+07:00",
          "details": {
            "loc": 460,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 0
          },
          "desc": "Token reward program (TRP) escrow contracts should allow transparent on-chain distribution and vesting of the token rewards for the Lido DAO contributors.",
          "initial_commit": "dfe7bde8911382525819048b3beda524b2c3a3bf",
          "conclusion": "Commit with all fixes: 69dd13adcd9c5a88da8c134b221209ccded04121\n\nNo critical, high or medium severity issues were found.\n\n5 informational severity issue were found, 4 out of 5 issues were fixed, 1 acknowledged.",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Lido%20Finance/2023-01-27_Lido_TRP_vesting_escrow.pdf"
        },
        {
          "private": false,
          "audit_name": "Easy Track",
          "start_date": "2022-09-19T00:00:00+07:00",
          "end_date": "2022-11-30T00:00:00+07:00",
          "details": {
            "loc": 1621,
            "critical_cnt": 0,
            "high_cnt": 1,
            "medium_cnt": 0
          },
          "desc": "Easy Track motion is a lightweight voting considered to have passed if the minimum objections threshold hasn’t been reached. EasyTrack contract uses standalone EVMScript factory contracts to create EVMScripts which are executed if the motion passes.\n\nContext\n\nAs opposed to regular Aragon votings, Easy Track motions are cheaper (no need to vote ‘pro’, token holders only have to vote ‘contra’ if they have objections) and easier to manage (no need to ask broad DAO community vote on proposals that spark no debate).\n\nUsage and purpose\n\nThere are three types of votings run periodically by the Lido DAO wrapped into the Easy Track motions:\n\nNode Operators increasing staking limits\nFunds being allocated to LEGO program\nFunds being allocated to allowed recipients",
          "initial_commit": "22c955540e6b9fb5cb46b2ea40bebf367d38eb24",
          "conclusion": "Commit with all fixes: cf5e7887b60a3043f92f6cc0c25b5b4034431556\n\n1 high and 8 informational severity issue was found, 9 out of 9 issues were acknowledged.",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Lido%20Finance/2022-09-30_Lido_Easy_Track.pdf"
        },
        {
          "private": false,
          "audit_name": "Insurance Fund",
          "start_date": "2022-09-12T00:00:00+07:00",
          "end_date": "2022-09-29T00:00:00+07:00",
          "details": {
            "loc": 86,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 0
          },
          "desc": "The Lido Insurance Fund is a contract that serves as a store for funds allocated for self-insurance purposes. This contract must securely store funds and allow the owner to have full access to the funds (transfer ERC20, ERC721, ERC1155 tokens, and ether).",
          "initial_commit": "e2aadf7b548a69860a3f535faaf7170712466463",
          "conclusion": "Commit with all fixes: 625d384f12c3df791085ecc2d15535e2121224d5\n\nNo critical, high or medium severity issues were found, fixed 1 out of 4 issues, 3 acknowledged.",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Lido%20Finance/2022-08-15_Lido_Insurance_Fund.pdf"
        },
        {
          "private": false,
          "audit_name": "MEV-Boost relay allowlist",
          "start_date": "2022-09-05T00:00:00+07:00",
          "end_date": "2022-09-16T00:00:00+07:00",
          "details": {
            "loc": 161,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 0
          },
          "desc": "The on-chain relays allowed list is planned to be used by Node Operators participating in the Lido protocol after the Merge to extract MEV according to the expected Lido policies.\n\nContext\n\nLido needs to adopt a clear and public strategy with regards to MEV extraction on Ethereum. From a rewards perspective, Lido has already outlined a plan and technical approach on how both priority fees as well as possible MEV rewards can be (re)-distributed between stakers, node operators, and the protocol. \n\nIt's proposed that Node Operators should use MEV-Boost infrastructure developed by Flashbots to support MEV extraction through the open market mechanics as a current PBS solution that has a market fit.\n\nUsage and purpose\n\nThe proposed allowed list is intended to be a source of truth for the set of possible relays allowed to be used by Node Operators. In particular, Node Operators would use the contract to keep their software configuration up-to-date (setting the necessary relays once Lido DAO updates the set).",
          "initial_commit": "26ec6791c2466e784a894b8867db71d8de620745",
          "conclusion": "Commit with all fixes: 912f4143387ab04a7042b4887df67d3eecc97179\n\nNo critical or high severity issues were found, fixed 5 out of 7 issues, 2 acknowledged.",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Lido%20Finance/2022-09-09_Lido_MEV-Boost_relay_allowlist.pdf"
        },
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2022-08-08T00:00:00+07:00",
          "end_date": "2022-08-11T00:00:00+07:00",
          "details": {
            "loc": 133,
            "critical_cnt": 1,
            "high_cnt": 0,
            "medium_cnt": 0
          }
        }
      ],
      "reports": 11
    },
    {
      "client": "Instadapp",
      "tvl": 2129000000,
      "img": "Instadapp_44.svg",
      "loc": 3926,
      "audits": [
        {
          "private": false,
          "audit_name": "Instadapp Avocado v3",
          "start_date": "2023-07-20T00:00:00+07:00",
          "end_date": "2023-08-28T00:00:00+07:00",
          "details": {
            "loc": 3926,
            "critical_cnt": 1,
            "high_cnt": 2,
            "medium_cnt": 6
          },
          "desc": "The audit covers the core contracts for Instadapp Avocado.\n\nThere are 5 main parts to the Avocado architecture:\n\nAvocadoMultisig: logic contract that executes multiple actions for owner based on auth logic such as EIP712 signature\nAvocado: minimalistic simple proxy that falls back to AvocadoMultisig\nAvoFactory: deploys Avocado contracts with implementation set to AvocadoMultisig logic contract deterministcally if necessary and computes deterministic address\nAvoForwarder: main interaction point, especially for relayers. Forwards transactions with signature and list of actions to Avocado of a user.\nAvoRegistry: holds valid implementation versions for Avocados and AvoForwarder & sets fee config for gas cost markup for direct owner transactions. Configurable by owner\n\nHelpers:\n\nAvoDepositManager: Handles USDC deposits to pay for multichain gas fees\nAvoSignersList: tracks the mappings of Avocado <> allowed signers",
          "initial_commit": "0eec33a45784e5f4b3b45ac2c9dfefc5225bda0a",
          "conclusion": "During the audit of Avocado v3 codebase, 36 issues were found in total:\n\n1 critical severity issue (1 fixed)\n2 high severity issues (2 fixed)\n6 medium severity issues (3 fixed, 3 acknowledged)\n27 informational severity issues (22 fixed, 5 acknowledged)\n\n&nbsp;\n\nThe final reviewed commit is dbe165d01994b496acdbaa9523460e1596de066d",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Instadapp/2023-08-28_Instadapp_Avocado_v3.pdf"
        }
      ],
      "reports": 1
    },
    {
      "client": "Buttonwood",
      "tvl": 0,
      "img": "Buttonwood_44.svg",
      "loc": 1105,
      "audits": [
        {
          "private": false,
          "audit_name": "Buttonswap core",
          "start_date": "2023-07-05T00:00:00+07:00",
          "end_date": "2023-08-11T00:00:00+07:00",
          "details": {
            "loc": 1105,
            "critical_cnt": 0,
            "high_cnt": 3,
            "medium_cnt": 6
          },
          "desc": "",
          "initial_commit": "7b4a64319b8232237f7682ef9773ed2dcd94ceb1",
          "conclusion": "During the audit of Buttonswap core codebase, 22 issues were found in total:\n\n3 high severity issues (3 acknowledged)\n6 medium severity issues (3 fixed, 3 acknowledged)\n13 informational severity issues (8 fixed, 5 acknowledged)\n\n&nbsp;\n\nThe final reviewed commit is 807b6d73cb1e97d5776aa1dbdecb96754d72f98e",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Buttonwood/2023-08-11_Buttonwood_Buttonswap-core.pdf"
        }
      ],
      "reports": 1
    },
    {
      "client": "Myso finance",
      "tvl": 297683,
      "img": "myso_44.svg",
      "loc": 4680,
      "audits": [
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2023-05-22T00:00:00+07:00",
          "end_date": "2023-06-16T00:00:00+07:00",
          "details": {
            "loc": 4680,
            "critical_cnt": 0,
            "high_cnt": 5,
            "medium_cnt": 24
          }
        }
      ],
      "reports": 1
    },
    {
      "client": "Arrakis Finance",
      "tvl": 449053412,
      "img": "Arrakis_44.svg",
      "loc": 5160,
      "audits": [
        {
          "private": false,
          "audit_name": "Arrakis v2 manager templates",
          "start_date": "2023-05-17T00:00:00+07:00",
          "end_date": "2023-08-31T00:00:00+07:00",
          "details": {
            "loc": 721,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 3
          },
          "desc": "",
          "initial_commit": "1d507a2beaa9c0e785bac7dd943c77964fedaef3",
          "conclusion": "During the audit of Arrakis v2 manager templates codebase, 11 issues were found in total:\n\n3 medium severity issues (3 fixed)\n8 informational severity issues (5 fixed, 3 acknowledged)\n\n&nbsp;\n\nThe final reviewed commit is 273a0b4f263f7737e1bbae647cbc4840fd90d5e9.\n\nContracts are deployed on ethereum, arbitrum, base, bsc, optimism, polygon networks under the same addresses.",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Arrakis%20Finance/2023-08-31_Arrakis_V2_manager_templates.pdf"
        },
        {
          "private": false,
          "audit_name": "Arrakis v2 core (rev. 2)",
          "start_date": "2023-04-06T00:00:00+07:00",
          "end_date": "2023-08-29T00:00:00+07:00",
          "details": {
            "loc": 311,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 2
          },
          "desc": "Arrakis is web3’s liquidity layer, which at its core acts as a decentralized market-making platform enabling projects to create deep liquidity for their tokens on decentralized exchanges.\n\nThe core contracts allow users to: \n\nCreate an ArrakisV2 vault instance that manages holdings of a given token pair\nDispatch and collect these holdings to/from Uniswap V3 Liquidity Positions (for the defined token pair) via a settable manager smart contract\nConfigure important vault setup parameters (manager, restrictedMint, pools) via the vault owner role",
          "initial_commit": "a9759d1a45bc3a9dc9a378cbff3588e76a5083f5",
          "conclusion": "During the audit of Arrakis v2 core codebase, 9 issues were found in total:\n\n2 medium severity issues (2 fixed)\n7 informational severity issues (6 fixed, 1 acknowledged)\n\n&nbsp;\n\nThe final reviewed commit is f0200abcd73ce994b0641b7cd0e8bc4e2fbcb818.\n\nContracts are deployed on ethereum, arbitrum, base, bsc, optimism, polygon networks under the same addresses.",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Arrakis%20Finance/2023-08-29_Arrakis_V2_core_rev2.pdf"
        },
        {
          "private": false,
          "audit_name": "Arrakis v2 periphery",
          "start_date": "2023-04-06T00:00:00+07:00",
          "end_date": "2023-08-31T00:00:00+07:00",
          "details": {
            "loc": 1211,
            "critical_cnt": 0,
            "high_cnt": 1,
            "medium_cnt": 6
          },
          "desc": "ArrakisV2Router receives the approval from the users, transfers funds from users to itself, validate input data, wrap/unwrap eth, deposit/withdraw, stake/unstake, returns funds to users.\n\nRouterSwapExecutor is responsible for executing swap payloads (prepared off-chain) passed to Router's swapAndAddLiquidity methods. This separation of contracts allows swap payloads to tap \"arbitrary\" liquidity sources and still be safe.\n\nArrakisV2GaugeFactory is the entry-point for deploying GaugeV4 for Arrakis vaults.\n\nArrakisV2StaticDeployer is a contract for auto-deploying vaults with static manager and renounced owner.\n\nArrakisV2Staticmanager is a contract for static managing ArrakisV2 vaults, using several functions.",
          "initial_commit": "cab630396506aad825d838f98d60d287ed49c0b9",
          "conclusion": "During the audit of Arrakis v2 periphery codebase, 44 issues were found in total:\n\n1 high severity issue (1 fixed)\n6 medium severity issues (6 fixed)\n37 informational severity issues (9 fixed, 28 acknowledged)\n\n&nbsp;\n\nThe final reviewed commit is fdf8899b1feb8e5708695a67ae609b137b752933.\n\nContracts are deployed on ethereum, arbitrum, base, bsc, optimism, polygon networks under the same addresses.",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Arrakis%20Finance/2023-08-31_Arrakis_V2_periphery.pdf"
        },
        {
          "private": false,
          "audit_name": "Arrakis v2 core and palm",
          "start_date": "2022-11-01T00:00:00+07:00",
          "end_date": "2023-02-06T00:00:00+07:00",
          "details": {
            "loc": 2917,
            "critical_cnt": 0,
            "high_cnt": 8,
            "medium_cnt": 3
          },
          "desc": "Arrakis is web3’s liquidity layer, which at its core acts as a decentralized market-making platform enabling projects to create deep liquidity for their tokens on decentralized exchanges.\n\nThe core contracts allow users to: \n\ncreate an ArrakisV2 vault instance that manages holdings of a given token pair\ndispatch and collect these holdings to/from Uniswap V3 Liquidity Positions (for the defined token pair) via a settable manager smart contract\nconfigure important vault setup parameters (manager, restrictedMint, pools) via the vault owner role\n\nPALM is the first application built on top of the flexible ArrakisV2 core system, optimized for automated management of protocol owned liquidity (thus, Protocol Automated Liquidity Management).\n\nPALM allows users to:\n\nCreate a \"private\" vault that is managed by PALMManager who will run automated strategies on behalf of the vault creator. Only vault creators can add and remove liquidity from their private vault\nVault creators have the ability to pick from a list of whitelisted strategy templates, and further configure the strategy with custom parameters\nVault creators can increase or decrease liquidity deposited in the vault at any time, as well as change the strategy configuration (or delegate this strategy configuration ability to a third party)\nFinally vault creators can remove all of their liquidity and close the vault at any time",
          "initial_commit": "376bfcec803f0644fdc601db3a5772d2179c13a0, 06f8439430e3b0af9cbbf887926ff93844c28a7d",
          "conclusion": "Commits with all fixes: 683a355de3317278f5f09dcd8aa136e1a8f80639, 0d09e21c818542d6705b8a84a3233a473ac5fff3\n\n6 high and 3 medium and 42 informational severity issue was found, 5 out of 6 high, 2 out of 3 medium and 26 out of 42 informational severity issues were fixed.",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Arrakis%20Finance/2022-11-25_Arrakis_V2_core_and_palm.pdf"
        }
      ],
      "reports": 4
    },
    {
      "client": "Keep3r Network",
      "tvl": 23721491,
      "img": "K_44.svg",
      "loc": 3365,
      "audits": [
        {
          "private": false,
          "audit_name": "Sidechain oracles",
          "start_date": "2022-11-30T00:00:00+07:00",
          "end_date": "2023-03-02T00:00:00+07:00",
          "details": {
            "loc": 838,
            "critical_cnt": 0,
            "high_cnt": 1,
            "medium_cnt": 2
          },
          "desc": "The Keep3r Sidechain Oracles project is a set of contracts that provide UniswapV3's price history to chains where Uniswap pools are unavailable or don't have healthy liquidity to rely on.",
          "initial_commit": "da7cf7d15fca848828f3a2c6e0e8c55e0dd76841",
          "conclusion": "Commit with all fixes: 477bb912bd2245d17d37f25f2434315a01483d74\n\n1 high, 2 medium and 19 informational severity issue was found, 12 out of 22 issues were acknowledged.",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Keep3r%20Network/2023-02-03_Keep3r_Sidechain_oracles.pdf"
        },
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2022-10-17T00:00:00+07:00",
          "end_date": "2022-10-26T00:00:00+07:00",
          "details": {
            "loc": 455,
            "critical_cnt": 1,
            "high_cnt": 0,
            "medium_cnt": 3
          }
        },
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2022-09-19T00:00:00+07:00",
          "end_date": "2022-09-30T00:00:00+07:00",
          "details": {
            "loc": 1702,
            "critical_cnt": 0,
            "high_cnt": 2,
            "medium_cnt": 2
          }
        },
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2022-07-13T00:00:00+07:00",
          "end_date": "2022-07-15T00:00:00+07:00",
          "details": {
            "loc": 245,
            "critical_cnt": 1,
            "high_cnt": 2,
            "medium_cnt": 2
          }
        },
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2022-07-11T00:00:00+07:00",
          "end_date": "2022-07-20T00:00:00+07:00",
          "details": {
            "loc": 125,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 1
          }
        }
      ],
      "reports": 5
    },
    {
      "client": "Yearn Finance",
      "tvl": 444539377,
      "img": "Yearn_44.svg",
      "loc": 4352,
      "audits": [
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2022-10-06T00:00:00+07:00",
          "end_date": "2022-10-14T00:00:00+07:00",
          "details": {
            "loc": 553,
            "critical_cnt": 0,
            "high_cnt": 1,
            "medium_cnt": 1
          }
        },
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2022-08-15T00:00:00+07:00",
          "end_date": "2022-08-19T00:00:00+07:00",
          "details": {
            "loc": 1412,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 1
          }
        },
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2022-08-02T00:00:00+07:00",
          "end_date": "2022-08-12T00:00:00+07:00",
          "details": {
            "loc": 1432,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 2
          }
        },
        {
          "private": true,
          "audit_name": "Private",
          "start_date": "2022-08-02T00:00:00+07:00",
          "end_date": "2022-08-12T00:00:00+07:00",
          "details": {
            "loc": 389,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 5
          }
        },
        {
          "private": false,
          "audit_name": "veYFI (Voting and Reward pool)",
          "start_date": "2022-07-04T00:00:00+07:00",
          "end_date": "2022-10-15T00:00:00+07:00",
          "details": {
            "loc": 566,
            "critical_cnt": 2,
            "high_cnt": 2,
            "medium_cnt": 2
          },
          "desc": "veYFI is the token locking mechanic similar to the ve-style program of Curve.\nYFI tokens can be locked for any time, but the max reward generates when locking time is more or equal than 4 years.\nThere are several contracts is the auditing scope:\n\nVotingYFI contract is intended to calculate voting power at any time point based on the locked YFI amount.\nRewardPool contract performs the distribution of YFI rewards based on voting power\nThe time axis is divided into weeks, i.e any changes apply once per week (e.g locked amount changes, top-up tokens for rewards).",
          "initial_commit": "696bb76be86a601f25cda577bfb9dc14daa91079",
          "conclusion": "2 critical, 2 high, 2 medium and 10 informational severity issues were found, fixed all critical, high, medium and 4 informational issues were acknowledged.\n\nDeployment commit: bb9d8ac9dd90a9a9772b9663ce4fa232fda7bce2",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/Yearn%20Finance/2022-07-08_Yearn_veYFI(Voting_and_RewardPool).pdf"
        }
      ],
      "reports": 5
    },
    {
      "client": "1inch Network",
      "tvl": 7004370,
      "img": "1inch_44.svg",
      "loc": 2863,
      "audits": [
        {
          "private": false,
          "audit_name": "Aggregation Router v5",
          "start_date": "2022-07-18T00:00:00+07:00",
          "end_date": "2022-10-09T00:00:00+07:00",
          "details": {
            "loc": 2863,
            "critical_cnt": 0,
            "high_cnt": 0,
            "medium_cnt": 0
          },
          "desc": "The 1inch Aggregation Router is a decentralized exchanger with a cost-efficient router algorithm. The protocol aggregates multiple sources of liquidity to find a route with the best token swap rate and minimal slippage.",
          "initial_commit": "47f1bc6b5d715efc2d9a8af2d20987ed71722d02",
          "conclusion": "",
          "report_link": "https://github.com/statemindio/public-audits/blob/main/1inch%20Network/2022-07-29_1inch_Aggregation_Router_v5.pdf"
        }
      ],
      "reports": 1
    }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(projectsData)
}