import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/accounts_list.component.html',
  styleUrls: ['app/account/accounts_list.component.css']
})
export class AccountsList {

  @Input('accounts')
  private _accounts:Array<Account>;

  @Output('delete')
  private delete = new EventEmitter<Number>();

  private _remove(index:number) {
    this.delete.emit(index);
  }
}
