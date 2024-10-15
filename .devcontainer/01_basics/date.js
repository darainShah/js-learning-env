// Date

const mydate = new Date()

// mostly used for data and time 

let mycreatedDate = new Date(2023, 0, 27, 5, 4, 53)
console.log(mycreatedDate.toLocaleString)

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreatedDate.getTime())

let newdate = new Date()
console.log(newdate)
console.log(newdate.getTimezoneOffset())
console.log(newdate.getMonth())