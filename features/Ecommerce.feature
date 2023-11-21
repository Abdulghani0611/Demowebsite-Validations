Feature: Ecommerce Validations

  Scenario: Order Conformation
    Given Register to Ecommerce Website using "firstName" and 'lastName' and 'email' and 'emailPassword' and 'conformEmailPassword'
    When check  "\nCora Parachute Pant " in homepage
    Then  add product to cart and  displayed in cart
    When  Enter valid details and place the order
    Then verify the order Conformation


  Scenario: Register to website

  Given Register to Ecommerce Website using "firstName" and 'lastName' and 'email' and 'emailPassword' and 'conformEmailPassword'
  Then Verify the Register thanking message