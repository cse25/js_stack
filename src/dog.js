// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `woof, my name is ${this.name}`
  }
}

export default Dog
