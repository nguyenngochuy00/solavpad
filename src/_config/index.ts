import * as solanaWeb3 from '@solana/web3.js';

 const dev_config = {
    MODE:  solanaWeb3.clusterApiUrl('devnet'),
    SOLANA_RPC:'https://api.devnet.solana.com',
    SOLANA_EXPLORER:'https://explorer.solana.com',
} 
const prod_config = {
    MODE:  solanaWeb3.clusterApiUrl('mainnet-beta'),
    SOLANA_RPC:'https://api.mainnet-beta.solana.com',
    SOLANA_EXPLORER:'https://explorer.solana.com',
}
export const config = process.env.NODE_ENV === 'production' ? prod_config : dev_config;