import { Component } from '@angular/core';
import { Account } from './account.model';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent  {

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
