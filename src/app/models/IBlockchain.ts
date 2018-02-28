// Interface for the Blockchain Object
// Info on https://www.blockcypher.com/dev/bitcoin/?javascript#blockchain

export interface IBlockchain {
    name: string;
    hash: string;
    time: number;
    height: number;
}
