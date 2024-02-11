
class NonCardPaymentStrategy {
    pay(amount) {

    }
}

export class PaypalPaymentStrategy extends NonCardPaymentStrategy {
    constructor(email, password) {
        super();
        this.email = email;
        this.password = password;
    }
    
    pay(amount) {
        console.log(`Paying ${amount} using Paypal.`);
    }
}