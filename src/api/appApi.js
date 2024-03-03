import { LOCALSTORAGE_KEY } from "@/consts";

export function setLocalStorage(storage) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storage))
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
}