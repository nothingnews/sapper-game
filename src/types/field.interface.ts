import type { FieldStatuses } from './field-statuses.type'

export interface IField {
  value: number
  isOpen: boolean
  status: FieldStatuses | null
}
