
function saymyname (){
    console.log("D")
    console.log("a")
    console.log("r")
    console.log("a")
    console.log("i")
    console.log("n")
}

//saymyname();

//function addtwonum(num1, num2){

    //console.log( num1 + num2);

//}

//const result = addtwonum(3,7);
//console.log("result", result);    this will give error and doesnot print reuslt value bcs of const result

function addtwonum(num1, num2){
    let result = num1 + num2;
    return result;
}

const result = addtwonum(3,7);
//console.log("result", result);   // this will give result


//function loginusermessage(username){
   // if(username ===username) {                         (//username === undefined){
      //  console.log("please enter a username")
   // }
    //return `${username} just logged in`
//}

//console.log(loginusermessage("Darain"))

//console.log(loginusermessage());


//function totalcartprice(...num1){
  //  return num1;
//}

//console.log(totalcartprice(200,400,600,300,100));  // [200,400,600,300,100]

function totalcartprice(val1, val2, ...num1){
    return num1
}
//console.log(totalcartprice(200,300,400,500)) // it will skip the val1 and val2 and give [400, 500]

const user = {
    username: "Darain",
    price: 299
}

function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
}
handleObject(user)