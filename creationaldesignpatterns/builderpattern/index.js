class User {
    constructor(name, email, age, phone) {
      this.name = name
      this.email = email
      this.age = age
      this.phone = phone
    }
  }
  
  class UserBuilder {
    constructor() {
      this.name = ""
      this.email = ""
      this.age = null
      this.phone = ""
    }
  
    setName(name) {
      this.name = name
      return this
    }
  
    setEmail(email) {
      this.email = email
      return this
    }
  
    setAge(age) {
      this.age = age
      return this
    }
  
    setPhone(phone) {
      this.phone = phone
      return this
    }
  
    build() {
      return new User(this.name, this.email, this.age, this.phone)
    }
  }
  
  // Client Code
  const user1 = new UserBuilder()
    .setName("Zahid")
    .setEmail("zahid@example.com")
    .setAge(25)
    .setPhone("123-456-7890")
    .build()
  
  console.log(user1)
  