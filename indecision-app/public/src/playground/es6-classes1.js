class Person{
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi. I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name,age,major = 'undecided'){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor){
            description+= ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation = 'Korea'){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += `. I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const me = new Student();
const traveler = new Traveler();
console.log(me.hasMajor());
console.log(me.getDescription());
console.log(traveler.getGreeting());
