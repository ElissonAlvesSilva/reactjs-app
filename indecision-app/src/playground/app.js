

const user = {
    name: 'Elisson',
    cities: ['Manaus', 'Florianopolis', 'New York'],
    printPlacesLived() {

        return this.cities.map(( city ) => this.name + ' has lived in ' + city);


        // this.cities.forEach(city => {
        //     console.log(this.name + 'has lived in ' + city)
        // });

    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [ 10, 20, 30 ],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map(( number ) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());