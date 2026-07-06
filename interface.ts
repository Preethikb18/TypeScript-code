//can not have a method body :abstract methods
//prototype method: method declaration
//no business logic
class BankPolicy
{
    creditPolicy (): void{
        console.log('bank credit policy');
    }
}


interface worldBank
{
    recoveryloan ():void;
}

interface Bank
{
    credit():void;
    debit():void;
    transfer():void;
    fee:number;
}

class HDFC extends BankPolicy implements Bank,worldBank
{
    fee: number=100;
    
    credit(): void {
        console.log('hdfc credit')
    }
    debit(): void {
       console.log('debit --hdfc')
    }
    transfer(): void {
       console.log('transfer--logic')
    }

    homeloan():void{
        console.log('homeloan ---hdfc logic')
    }

    recoveryloan(): void {
        console.log('recoery loan --hdfc');
    }
   
    override creditPolicy(): void {
        console.log('override ---hdfc')
    }
}

class ICICI implements Bank
{
    fee: number =200;
    credit(): void {
        console.log('icici credit');
    }
    debit(): void {
        console.log('icici debit');
    }
    transfer(): void {
       console.log('icici transfer');
    }
    
}

//top casting --child class can be created
let  hd : HDFC =new HDFC();
hd.credit();
hd.debit();
hd.homeloan();
hd.transfer();


//C-C : extends
//C-I : implements
// I-I : implements
