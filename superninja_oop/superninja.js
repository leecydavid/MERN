class Ninja {
    constructor(name) {
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(this.name, this.health, this.speed, this.strength)
    }
    drinkSake() {
        this.health += 10
        console.log(this.health)
        // adds 10 health 
    }
}


class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.health = 200
        this.speed = 10
        this.stregnth = 10
        this.wisdom = 10
    }
    speakWisdom() {
        super.drinkSake();
        // we can also use super to inherit methods from the parent class
        // adds 10 health to sensei
        console.log("If you ain't got the sauce, you lost but you can also get lost in the sauce");
    }
    showStats() {
        console.log(`${this.name}, ${this.health}, ${this.speed}, ${this.strength}, ${this.wisdom}`);
        // `${}` syntax to retrieve method showStats in parent class without having to write all this extra shit 
        // console.log(this.name + "," + this.health + "," + this.speed + "," + this.strength + "," + this.wisdom)
    }
}

const ninja1 = new Ninja("Naruto");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const supersensei = new Sensei("Kakashi")
supersensei.speakWisdom();
supersensei.showStats();
