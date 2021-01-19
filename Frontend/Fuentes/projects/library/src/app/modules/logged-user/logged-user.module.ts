import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule,
} from '@angular/material';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomIconService } from '@common/library/custom-icons/custom-icon.service';
import { LoggedUserComponent } from '@modules/library/logged-user/logged-user.component';
import { NavigatorMenuComponent } from '@modules/library/logged-user/navigator-menu/nagivator-menu.component';
import { NavigatorHeaderComponent } from '@modules/library/logged-user/navigator-header/navigator-header.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Config } from '@config/index';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import {
  TranslateLoader, TranslateModule
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '@services/session-service';

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {
      prefix: Config.appParams.translatesPathlibrary,
      suffix: '.json'
    }
  ]);
}

const component = [
  LoggedUserComponent,
  NavigatorHeaderComponent,
  NavigatorMenuComponent,
];

const imports = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  FormsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatRadioModule,
  MatSlideToggleModule,
  ChartsModule,
  RouterModule,
  TranslateModule.forRoot({ loader: {
    deps: [HttpClient],
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory
  }})
];

const providers = [
  CustomIconService,
  SessionService,
  ThemeService,
];

@NgModule({
  declarations: component,
  imports: imports,
  providers: providers,
  schemas: [NO_ERRORS_SCHEMA],
})

export class LoggedUserModule { }
