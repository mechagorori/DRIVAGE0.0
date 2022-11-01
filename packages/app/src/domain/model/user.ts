export type UserArgs = {
  address: string;
  name: string | null;
  icon: string | null;
  cars: {}[];
  parts: {}[];
  seasons: {}[];
  anzns: {}[];
};

export class User {
  // アドレス
  private address: string;
  // 名前
  private name: string | null;
  // アイコン
  private icon: string | null;
  // 車
  private cars: {}[];
  // 部品
  private parts: {}[];
  // シーズンごとの成績
  private seasons: {}[];
  // 評価
  private anzns: {}[];

  constructor(args: UserArgs) {
    this.address = args.address;
    this.name = args.name;
    this.icon = args.icon;
    this.cars = args.cars;
    this.parts = args.parts;
    this.seasons = args.seasons;
    this.anzns = args.anzns;
  }

  //
  // Getter
  //
  getAddress = () => this.address;
  getName = () => this.name;
  getIcon = () => this.icon;
  getCars = () => this.cars;
  getParts = () => this.parts;
  getSeasons = () => this.seasons;
  getAnzns = () => this.anzns;
}
