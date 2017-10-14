import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
  private currentUser:User = { username: "JC", email: "jc@example.com" };

  private hideEmail:boolean = false;

  private toggle() {
    this.hideEmail = !this.hideEmail;
  }

}

interface User {
  username:string,
  email:string
}
