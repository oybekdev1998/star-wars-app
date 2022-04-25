export const getLocalStore = key => {
  const data = localStorage.getItem(key)
  if(data !== null) {
    return JSON.parse(data)
  }

  return {}
}

export const setLocalStore = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}