// Interface for the BlockCypher Block Object
// https://www.blockcypher.com/dev/bitcoin/?javascript#block

export interface IBlock {
    hash: string;
    height: number;
    depth: number;
    chain: string;
    total: number;
    fees: number;
    size: number;
    ver: number;
    time: string;
    received_time: string;
    n_tx: number;
    nonce: number;
    prev_block: string;
    txids: string[];
    bits: number;
}
