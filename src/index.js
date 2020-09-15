// compare two objectws based on their `priority`
const byPriority = (a, b) => a.priority - b.priority

export default class PriorityQueueArray {

  constructor() {
    this.queue = []
  }

  add(item, priority) {
    this.queue.push({ item, priority })
  }

  take() {
    this.queue.sort(byPriority)
    const result = this.queue.pop()
    return result && result.item
  }

  size() {
    return this.queue.length
  }
}
