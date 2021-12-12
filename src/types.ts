//PalaceType
export type EmbededPins = {
  number: number
  x: number
  y: number
  word: string
  place: string
  do: string
}

export type PalaceType = {
  id: string
  name: string
  image: string
  embededPins: EmbededPins[]
  share: boolean
}
//TemplateType
type Pin = {
  number: number
  x: number
  y: number
}
export type PinContent = {
  word: string
  place: string
  condition: string
}

export type TemplateType = {
  id: string
  name: string
  image: string
  pins: Pin[]
}
//SharedPalaceType
export type SharedPalaceType = {
  id: string
  name: string
  image: string
  embededPins: EmbededPins[]
  savedCount: number
  createrName: string
}
//SharedTemplateType
export type SharedTemplateType = {
  id: string
  name: string
  image: string
  pins: Pin[]
  savedCount: number
  createrName: string
}
//login周り
export type UserRegistration = {
  name: string
  password: string
}
export type RegistrationResponse = {
  id: string
  name: string
}
