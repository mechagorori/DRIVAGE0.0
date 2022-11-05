/*

基底クラス

*/
export type SeasonArgs = {
  id: string
  title: string
  startDate: Date
  endDate: Date
}

export class SeasonBase {
  // ID
  protected id: string
  // 合計得点
  protected title: string
  // 運転開始時刻
  protected startDate: Date
  // 運転終了時刻
  protected endDate: Date
  constructor(args: SeasonArgs) {
    this.id = args.id
    this.title = args.title
    this.startDate = args.startDate
    this.endDate = args.endDate
  }

  //
  // Getter
  //
  getId = () => this.id
  getTitle = () => this.title
  getStartDate = () => this.startDate
  getEndDate = () => this.endDate
}

/*

イベントクラス


*/
export class Season extends SeasonBase {
  constructor(args: SeasonArgs) {
    super(args)
  }
}

/*

ユーザーが保持するクラス


*/
export type UserSeasonArgs = SeasonArgs & { amount?: number }

export class UserSeason extends SeasonBase {
  private amount: number
  constructor(args: UserSeasonArgs) {
    super(args)
    this.amount = args?.amount ?? 0
  }

  // Getter
  getAmount = () => this.amount

  // Setter
  addAmount = (point: number) => {
    this.amount = this.amount + point
  }
}
