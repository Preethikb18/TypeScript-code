abstract class Page{
    abstract title():void;

    loading():void{
        console.log('Page will be loaded in sometime');
    }

    showHeader():void
    {
        console.log('Page header');
    }
}

class LoginPage extends Page
{
    title(): void {
        console.log('title loading');
    }

    override loading(): void {
        console.log('Login page loading overriding method')
    }
    override showHeader(): void {
        console.log('show header override method');
    }
    doLogin(): void
    {
        console.log('Login to App');
    }
}

let lp :LoginPage =new LoginPage();
lp.loading();
lp.showHeader();
lp.title();
lp.doLogin();