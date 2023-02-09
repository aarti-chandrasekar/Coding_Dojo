package zookeeper;

public class Mammal {
    protected int energyLevel = 100;

    public int displayEnergy() {
        System.out.println("The current energy level is " + energyLevel);
        return energyLevel;
    }

}
