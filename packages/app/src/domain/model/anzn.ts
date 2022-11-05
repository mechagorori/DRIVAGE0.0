export type AnznArgs = {
  address: string
  details: AnznDetailArgs[]
  startDate: Date
  endDate: Date
}

export class Anzn {
  // アドレス
  private address: string
  // 合計得点
  private totalPoint: number
  // 評価詳細
  private details: AnznDetail[]
  // 運転開始時刻
  private startDate: Date
  // 運転終了時刻
  private endDate: Date
  constructor(args: AnznArgs) {
    this.address = args.address
    this.startDate = args.startDate
    this.endDate = args.endDate
    this.details = args.details.map((i) => new AnznDetail(i))
    this.totalPoint = this.details
      .map((i) => i.getPoint())
      .reduce((a, b) => a + b, 0)
  }

  //
  // Getter
  //
  getAddress = () => this.address
  getStartDate = () => this.startDate
  getEndDate = () => this.endDate
  getTotalPoint = () => this.totalPoint
  getDetails = () => this.details
}

export type AnznDetailArgs = {
  id: string
  title: string
  isSuccess: boolean
}

class AnznDetail {
  // ID
  private id: string
  // タイトル
  private title: string
  // 点数
  private point: number
  constructor(args: AnznDetailArgs) {
    this.id = args.id
    this.title = args.title
    this.point = args?.isSuccess ? 1 : 0
  }

  // Getter
  getId = () => this.id
  getTitle = () => this.title
  getPoint = () => this.point
}
