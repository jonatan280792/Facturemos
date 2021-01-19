import {
  Component,
  Input,
} from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ThemeService } from '@services/theme-service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SessionService } from '@services/session-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigator-header',
  templateUrl: './navigator-header.html',
})
export class NavigatorHeaderComponent {
  @Input() sidenav: MatSidenav;
  public language: string;
  public setTheme: string;
  public themeList = [
    { businessCode: '1', description: 'logged-user.themes.theme1', icon: 'blueWhite', status: false },
    { businessCode: '2', description: 'logged-user.themes.theme2', icon: 'pinkBlack', status: true },
    { businessCode: '3', description: 'logged-user.themes.theme3', icon: 'blueBlack', status: false }
  ];

  languages: any = [
    { value: 'es', description: 'Español', icon: 'spanish' },
    { value: 'en', description: 'Ingles', icon: 'english' },
  ];

  constructor(
    private sessionService: SessionService,
    private themeService: ThemeService,
    private translate: TranslateService,
    private overlayContainer: OverlayContainer
  ) {
    this.changeTheme(this.sessionService.getSessionLTheme());
   }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkBlue(checked);
  }

  changeTheme(theme: string) {
    this.setTheme = theme;
    const checked = true;
    this.sessionService.saveSessionTheme(theme);
    if (theme === '2') {
      this.themeService.setDarkPink(checked);
      this.themeService.setDarkBlue(false);
      this.themeService.setColorTheme('pinkDark');
      this.overlayContainer.getContainerElement().classList.add('blue-dark');
    } else if (theme === '3') {
      this.themeService.setDarkBlue(checked);
      this.themeService.setDarkPink(false);
      this.themeService.setColorTheme('blueDark');
    } else {
      this.themeService.setDarkBlue(false);
      this.themeService.setDarkPink(false);
      this.overlayContainer.getContainerElement().classList.remove('blue-dark');
    }
  }

  useLanguage(language: string) {
    this.language = language;

    this.sessionService.saveSessionLanguage(language);
    this.translate.use(this.language);
  }
}
