class BankAccount:
    ac_list = []

    def __init__(self, int_rate, balance=0, account_type="Savings"): 
        self.int_rate = int_rate
        self.balance = balance
        self.account_type = account_type
        BankAccount.ac_list.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount
            return True
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
            return False

    def display_account_info(self):
        print(f"{self.account_type} Account Balance is ${self.balance}")

    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        return self

    @classmethod
    def display_all_accounts(cls):
        print("Total # of accounts :", len(cls.ac_list) )
        for acc in cls.ac_list:
            acc.display_account_info()

# USER CLASS
class User:
    def __init__(self, name, email, account_dict={"Current" : BankAccount(int_rate=0.02, account_type="Current")}):
        self.name = name
        self.email = email
        self.account_dict = account_dict

    def make_deposit(self, amount, account_type="Current"):
        if (account_type in self.account_dict):
            self.account_dict[account_type].deposit(amount)
        return self

    def make_withdrawal(self, amount, account_type="Current"):
        if (account_type in self.account_dict):
            self.account_dict[account_type].withdraw(amount)
        return self

    def transfer_money(self, amount, to_user, from_ac_type="Current", to_user_ac_type="Current"):
        if (from_ac_type in self.account_dict and to_user_ac_type in to_user.account_dict):
            if (self.account_dict[from_ac_type].withdraw(amount)):
                to_user.account_dict[to_user_ac_type].deposit(amount)
                print("Money Transfer SUCCESS")
                return True
        print("Money Transfer FAIL")
        return False

    def display_user_balance(self):
        print("Name :", self.name)
        print("# of accounts:", len(self.account_dict))
        for acc in self.account_dict.values():
            acc.display_account_info()



# User Account Instances

# User with default Current A/C and balance= 0, interest rate= 2% 
user1 = User("Obama", "obama@xyz.com") 
user1.display_user_balance()
print("*********************************************")
print("After Deposit")
user1.make_deposit(5000).display_user_balance()
print("*********************************************")

# User with 2 accounts - Savings (balance= 500, interest rate= 5%) & Fixed (balance= 0, interest rate= 10%)
ac1 = BankAccount(.05, 500, "Savings")
ac2 = BankAccount(.1, 0, "Fixed")
user2 = User("Trump", "trump@xyz.com", {"Savings" : ac1, "Fixed" : ac2}) 
user2.display_user_balance()
print("*********************************************")
print("After Fixed Deposit & Savings Withdrawal")
user2.make_deposit(500, "Fixed").make_withdrawal(25, "Savings").display_user_balance()
print("**********************************************")

print("After Transfer from Trump Fixed to Obama Current - $10000")
print("**************")
user2.transfer_money(10000, user1, "Fixed")
user1.display_user_balance()
user2.display_user_balance()
print("**********************************************")

print("After Transfer from Obama Current to Trump Savings - $100")
print("**************")
user1.transfer_money(100, user2, "Current", "Savings")
user1.display_user_balance()
user2.display_user_balance()