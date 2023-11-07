let name="somiya";
let name2=name;
console.log(name);
console.log(name2);
name2="jayant";
console.log(name2);//changes the copy(stack)
let data1={
    name:"Somiya",
    work:"Student"
}
let data2=data1;
data2.name="Amisha"
console.log(data1);//changes data 1 also coz this works on original value(heap)
console.log(data2);