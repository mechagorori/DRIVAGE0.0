import { Anzn, AnznArgs } from "./anzn"
import { UserSeason, UserSeasonArgs, Season } from "./season"
import { Car, UserCar, UserCarArgs } from "./car"

export type UserArgs = {
  address: string
  name: string | null
  icon: string | null
  cars: UserCarArgs[]
  seasons: UserSeasonArgs[]
  anzns: AnznArgs[]
}

export class User {
  // アドレス
  private address: string
  // 名前
  private name: string | null
  // アイコン
  private icon: string | null
  // 車
  private cars: UserCar[]
  // シーズンごとの成績
  private seasons: UserSeason[]
  // 評価
  private anzns: Anzn[]

  constructor(args: UserArgs) {
    this.address = args.address
    this.name = args.name
    this.icon = args.icon
    this.cars = args.cars.map((i) => new UserCar(i))
    this.seasons = args.seasons.map((i) => new UserSeason(i))
    this.anzns = args.anzns.map((i) => new Anzn(i))
  }

  //
  // Getter
  //
  getAddress = () => this.address
  getName = () => this.name
  getIcon = () => this.icon
  getCars = () => this.cars
  getSeasons = () => this.seasons
  getAnzns = () => this.anzns
  getTotalAnznPoint = () =>
    this.anzns.map((i) => i.getTotalPoint()).reduce((a, b) => a + b, 0)
  // Setter
  addAnzn = (value: Anzn) => {
    this.anzns.push(value)
  }
  addSeasonPoint = (season: Season, anzen: Anzn) => {
    const index = this.seasons.findIndex((i) => i.getId() === season.getId())
    if (index < 0) {
      this.seasons.push(
        new UserSeason({
          id: season.getId(),
          title: season.getTitle(),
          endDate: season.getEndDate(),
          startDate: season.getStartDate(),
          amount: anzen.getTotalPoint(),
        })
      )
      return
    }
    const _model = this.seasons[index]
    _model?.addAmount(anzen.getTotalPoint())
    this.seasons[index] = _model
  }
  addCar = (model: Car) => {
    this.cars.push(
      new UserCar({
        address: model.getAddress(),
        meta: model.getMeta(),
        isSelected: !this.cars.length ? true : false,
      })
    )
  }
  changeCurrentCar = (model: UserCar) => {
    const index = this.cars.findIndex(
      (i) => i.getAddress() === model.getAddress()
    )
    if (index < 0) throw Error()
    this.cars.map((i) => i.changeStatus(i.getAddress() === model.getAddress()))
  }
  changeName = (name: string | null) => {
    this.name = name
  }
  changeIcon = (icon: string | null) => {
    this.icon = icon
  }
}
