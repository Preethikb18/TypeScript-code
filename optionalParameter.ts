//not manadatory to pass the value for optional parameter
//optional parameter should be written at the last after the required params
//it should be written with ?

function getBilling(foodBill : number, tax?: number,vat?:number):void
{
    if(tax &&vat)
    {
        console.log(foodBill+tax+vat);
    }
    else if(tax)
    {
        console.log(foodBill+tax);
    }
    else
    {
        console.log(foodBill);
    }
}

getBilling(100,20,50);
getBilling(200,80);
getBilling(35);


function calcPrice(amount: number,discount:number = 0):number
{
  return amount-(amount*discount)/100;
}
console.log(calcPrice(1000));