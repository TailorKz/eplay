class Game {
  category: string
  descricption: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.id = id
    this.category = category
    this.descricption = description
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game
