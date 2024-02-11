import { CreditCardPaymentStrategy, VisaCardPaymentStrategy} from './cardPayment/CardPaymentStrategy.js'
import { PaypalPaymentStrategy } from './nonCardPayment/NonCardPaymentStrategy.js';


class ShoppingCart {
    setPaymentStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    checkout(amount) {
        this.paymentStrategy.pay(amount);
    }
}


const cart = new ShoppingCart();

// Customer 1 paying
console.log("Customer 1")
cart.setPaymentStrategy(new CreditCardPaymentStrategy("1234-5678-9012-3456", "123", "12/23"));
cart.checkout(100);

// Customer 2 paying
console.log("Customer 2")
cart.setPaymentStrategy(new VisaCardPaymentStrategy("1234-6643-9012-2353", "156", "14/27"));
cart.checkout(200);

// Customer 3 paying
console.log("Customer 3")
cart.setPaymentStrategy(new PaypalPaymentStrategy("ahmad@gmail.com", "password123"));
cart.checkout(400);
    
