 

 type cardNumber = {
    cardnumber : number
 }

 type cardDate = { 
    carddate: string
 }

 type cardDetails = cardDate & cardNumber & {
cvv :number
 }

 