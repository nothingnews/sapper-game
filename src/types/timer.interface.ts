export interface ITimer {
  value: number
  interval: NodeJS.Timeout | null
  stop: () => void
  init: () => void
  reset: () => void
}
