const chai = require("chai")
chai.should()
const expect = chai.expect
const paginate = require("./index")

describe("Primitives", () => {
  describe("numbers", () => {
    it("should return an array with arrays of length 3", () => {
      paginate(new Array(9).fill(1), 3).every(a => a.should.be.an("array").with.lengthOf(3))
    })
  })

  describe("strings", () => {
    it("should return an array with arrays of length 5", () => {
      paginate(new Array(20).fill("a"), 5).every(a => a.should.be.an("array").with.lengthOf(5))
    })
  })

  describe("bigints", () => {
    it("should return an array with arrays of length 2", () => {
      paginate(new Array(14).fill(236726n), 2).every(a => a.should.be.an("array").with.lengthOf(2))
    })
  })

  describe("booleans", () => {
    it("should return an array with arrays of length 1", () => {
      paginate(new Array(5).fill(false), 1).every(a => a.should.be.an("array").with.lengthOf(1))
    })
  })

  describe("undefined", () => {
    it("should return an array with arrays of length 6", () => {
      paginate(new Array(18).fill(undefined), 6).every(a => a.should.be.an("array").with.lengthOf(6))
    })
  })

  describe("symbols", () => {
    it("should return an array with arrays of length 8", () => {
      paginate(new Array(32).fill(Symbol("f")), 8).every(a => a.should.be.an("array").with.lengthOf(8))
    })
  })
})

describe("Non-primitive types not including custom classes", () => {
  describe("objects", () => {
    it("should return an array with arrays of length 4", () => {
      paginate(new Array(16).fill({t:1}), 4).every(a => a.should.be.an("array").with.lengthOf(4))
    })
  })

  describe("arrays", () => {
    it("should return an array with arrays of length 10", () => {
      paginate(new Array(40).fill([1]), 10).every(a => a.should.be.an("array").with.lengthOf(10))
    })
  })

  describe("dates", () => {
    it("should return an array with arrays of length 2", () => {
      paginate(new Array(8).fill(new Date()), 2).every(a => a.should.be.an("array").with.lengthOf(2))
    })
  })
})

describe("custom classes", () => {
  it("should return an array with arrays of length 7", () => {
    paginate(new Array(21).fill(new TestClass()), 7).every(a => a.should.be.an("array").with.lengthOf(7))
  })
})

describe("errors", () => {
  it("should ask for an array input (throw a TypeError)", () => {
    expect(paginate.bind(null, {}, 2)).to.throw(TypeError, "Input should be an array.")
  })
  it("should ask for a number input for items per chunk (throw a TypeError)", () => {
    expect(paginate.bind(null, [1,2,3], "a")).to.throw(TypeError, "Number of items per chunk should be an integer.")
  })
})

class TestClass {
  constructor() {
    this.x = 1
  }
}