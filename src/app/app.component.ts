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

  private changeMail(newMail:string) {
    this.currentUser.email = newMail;
  }

  private keyPress(event:KeyboardEvent) {
    if(event.keyCode == 13) {
      var inputElement = <HTMLInputElement>event.target;
      this.changeMail(inputElement.value);
    }
  }

}

interface User {
  username:string,
  email:string
}
