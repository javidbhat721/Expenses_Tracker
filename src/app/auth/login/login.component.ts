import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  private tokenKey = 'auth_token';
  onSubmit(): void {
    if (this.loginForm.valid) {
      // simulate login or call service
      localStorage.setItem(this.tokenKey, 'dummy-token');

      // Redirect to dashboard after short delay (optional)
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1000); // 1 second delay for UX (optional)
    } else {
      this.loginForm.markAllAsTouched();

      if (this.loginForm.get('email')?.invalid) {
        if (this.loginForm.get('email')?.errors?.['required']) {
          this.toastr.error('Email is required.', 'Validation Error');
        } else if (this.loginForm.get('email')?.errors?.['email']) {
          this.toastr.error('Please enter a valid email.', 'Validation Error');
        }
      }

      if (this.loginForm.get('password')?.invalid) {
        this.toastr.error('Password is required.', 'Validation Error');
      }
    }
  }


}
