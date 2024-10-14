// Stack(Primitive datatype) // Heap(Non Primitive datatype)

let myyoutubename = "Darain shahedi";
let anothername = myyoutubename;
anothername = "code along";

console.log(myyoutubename);
console.log(anothername);

// Stack doesnot give orginal value it gives copy of variable in the memory
// but in Heap we get reference in original copy 

let userone = {
    emailid: "userone@google.com",
    upiid: "userone@axl",
}

let usertwo = userone;

usertwo.emailid = "darain@google.com";

console.log(userone.emailid);
console.log(usertwo.emailid);