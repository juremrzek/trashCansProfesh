export class Trash {
  static categories = ["paper", "plastic", "mixed"]
  category: string
  image: string
  correctCan: string

  constructor(category: string, correctCan: string, image: string) {
    this.category = category
    this.image = image
    this.correctCan = correctCan
  }
}
