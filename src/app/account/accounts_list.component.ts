import {Component, Input} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/accounts_list.component.html',
  styleUrls: ['app/account/accounts_list.component.css']
})
export class AccountsList {

  @Input('accounts')
  private _accounts:Array<Account>;

  private removeAcc(index:number) {
    this._accounts.splice(index, 1);
  }

}
