import * as solanaWeb3 from '@solana/web3.js';

 const dev_config = {
    SOLANA_RPC:solanaWeb3.clusterApiUrl('devnet'),
    SOLANA_EXPLORER:'https://explorer.solana.com',
} 
const prod_config = {
    SOLANA_RPC: solanaWeb3.clusterApiUrl('mainnet-beta'),
    SOLANA_EXPLORER:'https://explorer.solana.com',
}
export const config = process.env.NODE_ENV === 'production' ? prod_config : dev_config;