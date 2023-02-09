package zookeeper;

public class Gorilla extends  Mammal{

    public void throwSomething(){
        System.out.println("The gorilla has thrown an object. Energy Level is going down by 5");
        energyLevel -= 5;
    }

    public void eatBananas(){
        System.out.println("The gorilla had a yummy meal. Energy Level is going up by 10");
        energyLevel += 10;
    }

    public void climb(){
        System.out.println("The gorilla has climbed a tree. Energy Level is going down by 10");
        energyLevel -= 10;
    }
}
