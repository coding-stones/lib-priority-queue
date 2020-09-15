import baretest from "baretest"
import assert from "assert"

import PQ from "../src/index.js"

const test = baretest("PQ using array")

test('New queue is empty', () => {
  const pq = new PQ()
  assert.equal(0, pq.size())
})

test('add then take returns the added element', () => {
  const pq = new PQ()
  pq.add(1234, 99)
  assert.equal(1, pq.size())
  assert.equal(1234, pq.take())
  assert.equal(0, pq.size())
})

test('adding multiple returns them in insert order', () => {
  const pq = new PQ()
  const data = [ 
    [ "ant", 3 ],
    [ "bee", 0 ],
    [ "cat", 1 ],
    [ "dog", 5 ],
    [ "elk", 4 ],
  ]

  const result  = [ "dog", "elk", "ant", "cat", "bee" ]


  data.forEach(([ animal, priority ]) => pq.add(animal, priority))
  assert.equal(data.length, pq.size())
  result.forEach(animal => 
    assert.equal(animal, pq.take())
  )
  assert.equal(0, pq.size())

})


test.run()
