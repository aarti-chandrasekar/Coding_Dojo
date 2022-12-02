class Pet:
    def __init__(self, name, type, tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.energy = 50
        self.health = 75

    def eat(self):
        self.energy += 5
        self.health += 10

    def sleep(self):
        self.energy += 25

    def play(self):
        self.health += 5

    def noise(self):
        print("Makes no sound")

class Dog(Pet):
    def __init__(self, name, type, tricks):
        super().__init__(name, type, tricks)
        

    def noise(self):
        print("Bow Wow")

class Cat(Pet):
    def __init__(self, name, type, tricks):
        super().__init__(name, type, tricks)

    def noise(self):
        print("Meow")
