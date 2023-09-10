function createAccount(pin, amount = 0) {
    return {
        checkBalance(enteredPin) {
            if (enteredPin === pin) {
                return `$${amount}`;
            } else {
                return "Invalid PIN.";
            }
        },
        deposit(enteredPin, depositAmount) {
            if (enteredPin === pin) {
                amount += depositAmount;
                return `Successfully deposited $${depositAmount}. Current balance: $${amount}.`;
            } else {
                return "Invalid PIN.";
            }
        },
        withdraw(enteredPin, withdrawalAmount) {
            if (enteredPin === pin) {
                if (withdrawalAmount > amount)
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                amount -= withdrawalAmount;
                return `Successfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
            } else {
                return "Invalid PIN.";
            }
        },
        changePin(oldPin, newPin) {
            if (oldPin === pin) {
                pin = newPin;
                return "PIN successfully changed!";
            } else {
                return "Invalid PIN."
            }
        }
    };
}

module.exports = { createAccount };
