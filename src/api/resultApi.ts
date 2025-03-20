import type { IResult } from '@/types/result.interface'
import { getDataFromLocalStorage, setDataToLocalStorage } from '.'

export function getSortedResults(): IResult[] {
  const results = getDataFromLocalStorage()
  return results
}

export function saveNewResult(result: IResult) {
  const results = getDataFromLocalStorage()
  results.push(result)
  setDataToLocalStorage(results)
}
