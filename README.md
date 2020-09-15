# Priority Queue

~~~ session
$ ( npm import | yarn add ) https://github.com/coding-stones/lib-priority-queue
~~~

~~~ javascript
import PQ from "lib-priority-queue"
const queue = new PQ()

console.log(queue.size())   // => 0

queue.add("ant", 3)         // item, priority
queue.add("bee", 1)
quewue.add("cat", 100)

console.log(queue.size())   // => 3

queue.take()                // => "cat"
console.log(queue.size())   // => 2
queue.take()                // => "ant"
console.log(queue.size())   // => 1
~~~

### Context

This code is part of the Coding Stones _Level Up_ course, and is written 
as a simple illustration. It is not indended to be used in other projects.

### License

See [license.md](./license.md)`
