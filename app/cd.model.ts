export class CD {
  public soldOut: boolean = false;
  public quantity: number = 20;
  constructor(public name: string, public artist: string, public genre: string, public price: number, public id: number) {}
}
