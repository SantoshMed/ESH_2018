import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidations } from '../custom/custom-validation';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../Services/country.service';

@Component({
  selector: 'app-reser-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  pwdEyeOpen: boolean;
  conPwdEyeOpen: boolean;
  form: FormGroup;
  validToken: boolean;
  token: string;
  content = 'Loading...';
  isSuccess: boolean;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: CountryService) {
    this.pwdEyeOpen = false;
    this.conPwdEyeOpen = false;
    this.validToken = false;
    this.isSuccess = false;

    this.form = fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      conPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
        validator: CustomValidations.passwordsShouldMatch
      });
  }

  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('refToken');
    this.validateToken(this.token);
  }

  resetPwd(form) {
    // tslint:disable-next-line:max-line-length
    const queryData = { 'command': 'SetPassword', 'data': { 'token': this.token, 'password': form.value.password }, 'service': 'UserService' };
    this.service.resetPassword(queryData)
      .subscribe(response => {
        // console.log(response);
        this.isSuccess = true;
      });
  }

  validateToken(id) {
    if (id) {
      const queryData = { 'command': 'ValidateToken', 'data': { 'token': id }, 'service': 'UserService' };
      this.service.validateToken(queryData)
        .subscribe(response => {
          if (response.result) {
            this.validToken = true;
          } else {
            this.content = 'Reset Password Link Expired.';
          }
        });
    }
  }
  get password() { return this.form.get('password'); }
  get conPassword() { return this.form.get('conPassword'); }

}
