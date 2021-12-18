const BasePage = require ('./basePage');

class CheckOut extends BasePage {
    get email() {
        return this.ph.page.$('#checkout_email_or_phone');
    }
    get country() {
        return this.ph.page.$('.field__input--select');
    }
    get firstName() {
       // return this.ph.page.$('#checkout_shipping_address_first_name');
       return this.ph.page.$(`div[data-address-field*='first_name'] input`);
    }
    get lastName() {
        //return this.ph.page.$('#checkout_shipping_address_last_name');
        return this.ph.page.$(`div[data-address-field*='last_name'] input`);
    }
    get company() {
        return this.ph.page.$('#checkout_shipping_address_company');
    }
    get address() {
        //return this.ph.page.$('#checkout_shipping_address_address1');
        return this.ph.page.$(`div[data-address-field*='address1'] input`);
    }
    get appartment() {
        return this.ph.page.$('#checkout_shipping_address_address2');
    }
    get postCode() {
        return this.ph.page.$('#checkout_shipping_address_zip');
    }
    get city() {
        return this.ph.page.$('#checkout_shipping_address_city');
    }
    get continueShipButton() {
        return this.ph.page.$('#continue_button');
    }
    get continuePaymentButton(){
       return this.ph.page.$('#continue_button');
    }
    get returnToCart() {
        return this.ph.page.$('.previous-link__icon');
    }
    get shipTo(){
        return this.ph.page.$('.address--tight');
    }
    get contact(){
        return this.ph.page.$('.review-block__content');
    }

    get method(){
        return this.ph.page.$(`div[data-review-section*="shipping-cost"]`);
    }
    /*get cardNumber() {
        return this.ph.page.$(`input[placeholder*="Card number"]`);
    }
    get expiryDate(){
        return this.ph.page.$(`input[placeholder*="Expiration date"]`);
    }
    get cardHolder(){
        return this.ph.page.$(`input[placeholder*="Name on card"]`)
    }
    get cVV(){
        return this.ph.page.$(`input[placeholder*="Security code"]`);
    }*/
    get rememberDetails(){
        return this.ph.page.$('.input-checkbox');
    }
    get returnToCartlink(){
        return this.ph.page.$(`.breadcrumb a[href*='cart']`);
    }
    get invalidEmailMessage(){
        return this.ph.page.$('#error-for-email_or_phone');
    }
    get invalidSurnameMessage(){
        return this.ph.page.$('#error-for-last_name');
    }
    get invalidCityMessage(){
        return this.ph.page.$('#error-for-city');
    }
    get invalidAddress1Message(){
        return this.ph.page.$('#error-for-address1');
    }

}

module.exports = CheckOut;