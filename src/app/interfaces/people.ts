export interface PeopleResults {
  id?: number
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: any[]
  vehicles: string[]
  starships: string[]
  created: Date
  edited: Date
  url: string
}

export interface People {
  count: number
  next: string
  previous: string
  results: PeopleResults[]
}
