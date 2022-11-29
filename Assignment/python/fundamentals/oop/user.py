class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member  = False
        self.gold_card_points  = 0

    def display_info(self):
        print("USER INFO")
        print("*********")
        print("First Name:", self.first_name)
        print("Last Name:", self.last_name)
        print("Email:", self.email)
        print("Age:", self.age)
        print("Rewards Member:", "Yes" if self.is_rewards_member else "No")
        print("Gold Card Points:", self.gold_card_points)

    def enroll(self):
        if self.is_rewards_member:
            print(f"User {self.first_name} {self.last_name} already a member.")
            return False
        self.is_rewards_member  = True
        self.gold_card_points  = 200
        return True

    def spend_points(self, amount):
        if self.gold_card_points >= amount:
            self.gold_card_points  -= amount
            print(f"{amount} points deducted from User {self.first_name} {self.last_name}. Balance points - {self.gold_card_points}")
            return True
        else:
            print(f"User {self.first_name} {self.last_name} does not have enough points to spend. Available points - {self.gold_card_points}")
            return False

# Create User instances
user1 = User("Ayrton", "Senna", "senna@efg.com", 95)
user1.display_info()
user1.enroll()
user1.display_info()

user2 = User("Ussain", "Bolt", "ussain@efg.com", 35)
user3 = User("Rafael", "Nadal", "nadal@efg.com", 38)

user1.spend_points(50)

user2.enroll()
user2.spend_points(80)

user1.display_info()
user2.display_info()
user3.display_info()

user1.enroll()

user3.spend_points(40)




