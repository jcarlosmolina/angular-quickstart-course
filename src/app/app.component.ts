import { Component }   from '@angular/core';
import { Account }     from './account/account.model';
import { AccountsList } from './account/accounts_list.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent  {

  private _accounts:Array<Account> = [
    {
      id: 1,
      title: "Bank xyz",
      description: "This is my main bank account",
      balance: 501.2
    },
    {
      id: 2,
      title: "Bank asd",
      description: "My secret bank account",
      balance: 1024.10
    }
    // new Account(2, "Bank Asd", "My secret account", 1024.10)
  ];

  private _nextId = 3;

  private createAcc(titleEl:any, descEl:any, balEl:any){

    alert('Not yet implemented');

    // this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value));
    // this._selected.push(false);
    // this._nextId++;

    titleEl.value = "";
    descEl.value = "";
    balEl.value = 0;
  }

}
