import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent   }  from './app.component';
import { AccountForm    }  from './account/account_form.component';
import { AccountsList   }  from './account/accounts_list.component';
import { AccountService }  from './account/account.services';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AccountForm, AccountsList ],
  bootstrap:    [ AppComponent ],
  providers:    [ AccountService ]
})
export class AppModule { }
