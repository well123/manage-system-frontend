export default {
  getItem (key) {
    return localStorage.getItem(key)
  },
  setItem (key, item) {
    localStorage.setItem(key, item)
  }
}
