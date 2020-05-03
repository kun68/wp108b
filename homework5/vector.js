class Complex {
    constructor (r, i,z) {
      this.r = r
      this.i = i
      this.z = z
    }
  
    add (c2) {
      return new Complex(this.r + c2.r, this.i + c2.i, this.z+c2.z)
    }
  
    sub (c2) {
      return new Complex(this.r - c2.r, this.i - c2.i, this.z-c2.z)
    }
  
    mul (c2) {
      return new Complex(this.r * c2.r - this.i * c2.i,
                         this.r * c2.i + this.i * c2.r,
                         this.z * c2.r - this.z * c2.i)
    }
    
    neg () {
      return new Complex(this.r )
    }
    toString () {
      return this.r + '+' + this.i + 'i'
    }
  }

  var a = new Complex(1, 2, 4)
  var b = new Complex(2, 1, 5)
  
  var x = a.add(b).sub(b).mul(b)
  
  console.log('a=%s', a)
  console.log('b=%s', b)
  console.log('a.add(b)=%s', a.add(b))
  console.log('a.sub(b)=%s', a.sub(b))
  console.log('a.mul(b)=%s', a.mul(b))
  console.log('a.neg(a)=%s', a.neg(a))
  console.log('x=%s', x)
  