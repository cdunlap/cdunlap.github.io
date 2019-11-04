export default {
  created () {
    if (typeof this.getContent !== 'function') {
      throw new Error('Component does not implement getContent()')
    } else {
      this.getContent()
    }
  }
}
