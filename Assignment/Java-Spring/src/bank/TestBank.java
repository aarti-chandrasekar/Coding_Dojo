package bank;

public class TestBank {
    public static void main(String[] args) {
        BankAccount ac1 = new BankAccount();
        BankAccount ac2 = new BankAccount();
        BankAccount ac3 = new BankAccount();

        ac1.deposit(BankAccount.AcType.CHECKING, 5000);
        ac2.deposit(BankAccount.AcType.CHECKING, 10000);
        ac3.deposit(BankAccount.AcType.CHECKING, 15000);
        ac1.deposit(BankAccount.AcType.SAVING, 500);
        ac2.deposit(BankAccount.AcType.SAVING, 1000);
        ac3.deposit(BankAccount.AcType.SAVING, 1500);

        System.out.println(String.format(" A/C # %d - After Deposit", ac1.getAcNumber()));
        ac1.printBalance();

        System.out.println(String.format(" A/C # %d - After Deposit", ac2.getAcNumber()));
        ac2.printBalance();

        System.out.println(String.format(" A/C # %d - After Deposit", ac3.getAcNumber()));
        ac3.printBalance();

        System.out.println(ac1.withdraw(BankAccount.AcType.SAVING, 1500) ?  "Withdraw Successful" :
            "Insufficient Balance");
        System.out.println(ac3.withdraw(BankAccount.AcType.CHECKING, 5000) ?  "Withdraw Successful" :
            "Insufficient Balance");

        System.out.println(String.format("Total Amount in the Bank - $%.2f", BankAccount.getTotalAmt()));
    }
    
}
