class animal{
    constructor(name,legCount,speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks; 
    }
    static myType(){
        console.log("xxx");
    }
    speak(){
        console.log("hi there " + this.speaks);
    }
}

let dog = new animal("doggy",4,"bhow bhow");
let cat = new animal("catty",4,"meaw meaw");
function printstr(animal){
    console.log("animal " + animal["name"] + " "+ animal["speaks"] );
}
printstr(dog);
printstr(cat);
cat.speak();
console.log(animal.myType());
