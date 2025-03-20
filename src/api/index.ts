import { DEFAULT_LOCAL_STORAGE_VALUES } from '@/consts/defaultDataLocalStorage'
import type { IResult } from '@/types/result.interface'

export function setDataToLocalStorage(data: IResult[]) {
  localStorage.setItem(process.env.LOCALSTORAGE_KEY || '', JSON.stringify(data))
}

export function getDataFromLocalStorage(): IResult[] {
  return JSON.parse(localStorage.getItem(process.env.LOCALSTORAGE_KEY || '') || 'null') || []
}

export function setDefaultDataToLocalStorage() {
  if (localStorage.getItem(process.env.LOCALSTORAGE_KEY || '') === null) {
    localStorage.setItem(
      process.env.LOCALSTORAGE_KEY || '',
      JSON.stringify(DEFAULT_LOCAL_STORAGE_VALUES)
    )
  }
}
