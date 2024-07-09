// classes

class Animal{
    constructor(name,legCount){
        this.name=name;
        this.legCount=legCount
    }
    static speak(){
        console.log("Animal")
    }
    desrcibe(){
        return `${this.name} has ${this.legCount} legs`;
    }
}

const dog = new Animal("dog",4); 
Animal.speak()
console.log(dog.desrcibe());