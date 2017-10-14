import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
  private currentUser:User = { username: "JC", email: "jc@example.com" }

  private hideEmail:boolean = false

  private toggle() {
    this.hideEmail = !this.hideEmail;
  }

  private users:Array<User> = [
    { username: "User1", email: "user1@example.com" },
    { username: "User2", email: "user2@example.com" },
    { username: "User3", email: "user3@example.com" },
    { username: "User4", email: "user4@example.com" },
    { username: "User5", email: "user5@example.com" }
  ]

}

interface User {
  username:string,
  email:string
}
