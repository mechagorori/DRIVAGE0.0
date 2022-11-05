import axios from "axios"

/*

基底クラス

*/
export type CarArgs = {
  address: string
  meta: string
}

class CarBase {
  // アドレス
  private address: string
  // メタデータの保存先
  private meta: string
  constructor(args: CarArgs) {
    this.address = args.address
    this.meta = args.meta
  }

  //
  // Getter
  //
  getAddress = () => this.address
  getMeta = () => this.meta
  getJson = async () => await axios.get(this.meta).then((res) => res.data)
}

/*

車クラス

*/
export class Car extends CarBase {
  constructor(value: CarArgs) {
    super(value)
  }
}

/*

ユーザーが保持する車クラス

*/
export type UserCarArgs = CarArgs & { isSelected?: boolean }

export class UserCar extends CarBase {
  private isSelected: boolean
  constructor(args: UserCarArgs) {
    super(args)
    this.isSelected = !!args?.isSelected
  }

  // Getter
  getIsSelected = () => this.isSelected
  // Setter
  changeStatus = (isSelected: boolean) => (this.isSelected = isSelected)
}
