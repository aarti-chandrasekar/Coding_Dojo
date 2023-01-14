const Ninja = require("./Ninja").Ninja;

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Loka Samastha Sukino Bhavanthu");
    }
}

// const teacher = new Sensei("Guru");
// teacher.showStats();
// teacher.speakWisdom();
// teacher.showStats();