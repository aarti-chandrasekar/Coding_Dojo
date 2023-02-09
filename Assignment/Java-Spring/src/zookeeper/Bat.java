package zookeeper;

public class Bat extends Mammal {
    Bat() {
        energyLevel = 300;
    }

    public void fly() {
        System.out.println("The bat is flying. Energy Level is going down by 50");
        energyLevel -= 50;
    }

    public void eatHumans() {
        System.out.println("Well...Never mind. Energy Level is going up by 25");
        energyLevel += 25;
    }

    public void attackTown() {
        System.out.println("The bat is attacking the town. Energy Level is going down by 100");
        energyLevel -= 100;
    }

}
