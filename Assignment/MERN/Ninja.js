class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("Name :" + this.name);
    }

    showStats(){
        console.log(" Name :" + this.name + " strength :" + this.strength + " speed :" + this.speed + " health :" + this.health);
    }

    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("User1", 90);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake()
ninja1.showStats();

module.exports = {Ninja};

// console.log(module)