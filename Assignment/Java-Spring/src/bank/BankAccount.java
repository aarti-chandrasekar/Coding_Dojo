package bank;

public class BankAccount {
    private static int numOfAccounts;
    private static double totalAmt;
    private double checkingBal;
    private double savingBal;
    private final long acNumber;


    BankAccount() {
        numOfAccounts++;
        acNumber = generateAcNumber();
    }

    public static int getNumOfAccounts() {
        return numOfAccounts;
    }

    public static double getTotalAmt() {
        return totalAmt;
    }

    public long getAcNumber() {
        return acNumber;
    }

    private long generateAcNumber() {
        return (long) Math.ceil(Math.random() * 10000000000L);
    }

    public double getCheckingBal() {
        return checkingBal;
    }

    public double getSavingBal() {
        return savingBal;
    }

    public void deposit(AcType acType, double amt) {
        switch (acType) {
            case CHECKING -> checkingBal += amt;
            case SAVING -> savingBal += amt;
        }
        totalAmt += amt;
    }

    public boolean withdraw(AcType acType, double amt) {
        boolean isSuccess = true;
        switch (acType) {
            case CHECKING:
                if (amt > checkingBal) {
                    isSuccess = false;
                } else {
                    checkingBal -= amt;
                }
                break;
            case SAVING:
                if (amt > savingBal) {
                    isSuccess = false;
                } else {
                    savingBal -= amt;
                }
                break;
        }
        if (isSuccess) {
            totalAmt -= amt;
        }
        return isSuccess;
    }

    public void printBalance() {
        System.out.println(String.format("Balance in your A/C is $%.2f",
                checkingBal + savingBal));
    }

    public enum AcType {
        CHECKING, SAVING
    }
}
