class BankAccount:
    ac_list = []

    def __init__(self, int_rate, balance=0): 
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.ac_list.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print(f"Balance is ${self.balance}")

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        return self

    @classmethod
    def display_all_accounts(cls):
        print("Total # of accounts :", len(cls.ac_list) )
        for acc in cls.ac_list:
            acc.display_account_info()

# Account Instances
ac1 = BankAccount(.05, 500)
ac2 = BankAccount(.1)

ac1.deposit(100).deposit(1000).deposit(500).withdraw(5000).yield_interest().display_account_info()

ac2.deposit(2000).deposit(1000).withdraw(500).withdraw(50).withdraw(100).withdraw(1000).yield_interest().display_account_info()

print("All Accounts")
print("************")
BankAccount.display_all_accounts()