function getNumber() :number
{
    return 100;
}
function getTrainerName() : string
{
return 'preethi'
}


function getNumbers(): (string | number)[]
{
    return [100,200,300];

}

let addNum = (x:number,y: number): number =>x +y;
let r1 = addNum(100,200);
console.log(r1);

function getUserDate (): Promise<number | string> 
{
   return new Promise((resolve, reject) =>
    {
        let flag : boolean =true;
        if(true)
        {
            resolve(100);
        }
        else
        {
            reject('400 error');
        }

    } );
}

let res = await getUserDate();
console.log(res);

let num:number = 100;
console.log(num);

let data: any = 'hello world'
console.log(data);
data =300;
console.log(data);

function clickElement(element:string):void
{
    console.log('click on ' , element);

}

clickElement('loginbutton');

///function throwError(msg:string):never
//{
 //   throw new Error(msg);
//}
//throwError('400 error');

let result =(x:number, y:number) :number=> x+y;


let score: number[] = [20,30,40];
console.log(score);

let browser : string[] =['edge','chrome','safari'];


let empIDs : (Array<string | number> ) = ['rest101',100]
console.log(empIDs.length);

let empNames : (string | number)[] =['megha',23];
console.log(empNames);

let user : [string ,number,boolean] =['megha',45, true];

let userObj : {name:string|number,age:number,salary:number,isActive:boolean} =
{
    name: 'sini',
    age: 35,
    salary: 45.5,
    isActive : true,
}
console.log(userObj);