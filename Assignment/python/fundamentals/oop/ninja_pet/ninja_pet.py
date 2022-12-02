from ninja import Ninja
from pet import Dog

oreo = Dog("Oreo", "Golden Retriever", "Jump")
ninja1 = Ninja("ABC", "DEF", "Chewy", "", oreo)

ninja1.feed()
ninja1.walk()
print(f"{ninja1.pet.name} has {ninja1.pet.energy}% energy and health is {ninja1.pet.health}%")
ninja1.bathe()