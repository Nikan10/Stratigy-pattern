
class CardPaymentStrategy {
    pay(amount) {
        
    }
}

export class CreditCardPaymentStrategy extends CardPaymentStrategy {
    constructor(cardNumber, cvv, expiryDate) {
        super();
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
    }

    pay(amount) {
        console.log(`Paying ${amount} using Credit card.`);
    }
}

export class VisaCardPaymentStrategy extends CardPaymentStrategy {
    constructor(cardNumber, cvv, expiryDate) {
        super();
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryDate = expiryDate;
    }

    pay(amount) {
        console.log(`Paying ${amount} using Visa card.`);
    }
}