import {Component} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/accounts_list.component.html',
  styleUrls: ['app/account/accounts_list.component.css']
})
export class AccountsList {
  private _selected:Array<boolean> = [false, false];
  private _accounts:Array<Account> = [
    {
      id: 1,
      title: "Bank xyz",
      description: "This is my main bank account",
      balance: 501.2
    },
    new Account(2, "Bank Asd", "My secret account", 1024.10)
  ];

  private removeAcc(index:number) {
    this._accounts.splice(index, 1);
    this._selected.splice(index, 1);
  }


  private select(index:number) {
    this._selected[index] = !this._selected[index];
  }
}
