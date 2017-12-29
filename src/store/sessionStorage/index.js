export default {
  getItem (key) {
    return sessionStorage.getItem(key)
  },
  setItem (key, item) {
    sessionStorage.setItem(key, item)
  }
}
