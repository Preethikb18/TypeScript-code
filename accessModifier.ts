class car{
    public name: string ='Honda';  // by default it is public
    protected model : string ='Honda civic';
    private license : number = 9090;
    readonly logo:string = 'my logo';

    getCarDetails(): void
    {
        console.log(this.name);
        console.log(this.model);
        console.log(this.license);
    }

}

class Audi extends car
{
    getAudiDetails ():void
    {
        console.log(this.model);
        console.log(this.name);
    }
}




let c1 :Audi =new Audi();
console.log(c1.name);
c1.getCarDetails();
c1.getAudiDetails();
