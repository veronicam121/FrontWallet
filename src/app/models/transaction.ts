// Placeholder Class/Interface for the log of the user's transactions
// Related to Receveing and Sending BTC or CC

export class Transaction {
    public id: number;
    public date: string;
    public alias: string;
    public amount: number;
    public img: string;

    constructor(id: number, date: string, address: string, amount: number, picture: string) {
      this.id = id;
      this.date = date;
      this.alias = address;
      this.amount = amount;
      this.img = picture;
    }
}
