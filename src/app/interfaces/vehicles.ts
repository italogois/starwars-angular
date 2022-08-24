export interface VehiclesResults {
  id?: number
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  vehicle_class: string
  pilots: any[]
  films: string[]
  created: Date
  edited: Date
  url: string
}

export interface Vehicles {
  count: number
  next: string
  previous: string
  results: VehiclesResults[]
}
