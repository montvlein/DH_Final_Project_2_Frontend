export interface User {
  id: number
  firstName: string
  lastName: string
  email: string // mail
  rol?: string // role
  birthdate?: Date // string
  phone?: string
  documentType?: string
  documentNumber?: string
  password?: string
}
