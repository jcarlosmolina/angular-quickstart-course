import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent     } from './app.component';
import { HomeComponent    } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AccountForm      } from './account/account_form.component';
import { AccountsList     } from './account/accounts_list.component';
import { AccountService   } from './account/account.services';
import { APP_ROUTER_PROVIDERS } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, APP_ROUTER_PROVIDERS ],
  declarations: [ AppComponent, HomeComponent, AccountComponent, AccountForm, AccountsList ],
  bootstrap:    [ AppComponent ],
  providers:    [ AccountService ]
})
export class AppModule { }
