
class Truck
{
    loading () :void{
        console.log('Truck loading');
    }
}



class car
{
    start():void
    {
console.log('car --start');
    }

    stop():void{
        console.log('stop car');
    }

    refuel() :void
    {
        console.log('Refuel method');
    }
    
}

class BMW extends car
{
    override start():void{
        console.log('BMW start');
    }

    autoparking()
    {
        console.log('bwm -auto parking');
    }
}

let bwm :BMW =new BMW();
bwm.start();
bwm.stop();
bwm.refuel();
bwm.autoparking();

let car1:car =new car();
car1.start();
car1.stop();
car1.refuel();

//top casting
//child class object can be referred by parent class ref variable

let c: car =new BMW();
c.stop();
c.start();
c.refuel();

////
