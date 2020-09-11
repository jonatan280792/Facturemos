import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ThemingService } from '@services/theming-service';
import { Router } from '@angular/router';
import { SessionService } from '@services/session-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  userData = [{ user: 'admin', password: 'admin123'}]
  errorLogin: boolean;

  constructor(
    // private sidenavService: SidenavService,
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService,
    private theming: ThemingService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {    
    this.formLogin = this.fb.group({
      user: [null, Validators.required],      
      password: [null, Validators.required]      
    });
  }

  doLogin(form) {
    const find = this.userData.find(x=> x.user === form.user && x.password === form.password);
    if (find) {
      this.sessionService.saveSessionToken(form.user)
      this.router.navigate(['/sales']);
    } else {
      this.errorLogin = true;
      return;
    }
  }

  theme(theme: string) {
    this.theming.theme.next(theme);
  }
}
