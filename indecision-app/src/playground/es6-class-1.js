class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi, I'm ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }

};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
};

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGretting() {
        let gretting = super.getGretting();
        if(this.homeLocation){
            gretting += ` I'm Visiting from ${this.homeLocation}. `;
        }
        return gretting;
    }
};

const me = new Student('Elisson Alves', 23, 'Computer Science');
console.log(me.getDescription());

const other = new Traveler('Elisson Alves', 23, 'Manaus');
console.log(other.getGretting());

