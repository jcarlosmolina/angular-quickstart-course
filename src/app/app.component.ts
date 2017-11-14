import { Component }   from '@angular/core';
import { Account }     from './account/account.model';
import { AccountsList } from './account/accounts_list.component';
import { AccountForm } from './account/account_form.component';

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

  private createAcc(newAccount: Account) {
    newAccount.id = this._nextId++;
    this._accounts.push(newAccount);
  }

  private removeAcc(index:number) {
    this._accounts.splice(index, 1);
  }
}
