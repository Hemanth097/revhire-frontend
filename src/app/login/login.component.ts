import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  attemptedLogin = false;
  message: any;

  formData: any = {
    email: "",
    password: ""
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = 'password123';

    if (this.formData.email === hardcodedEmail && this.formData.password === hardcodedPassword) {
      console.log('Login successful');
      this.attemptedLogin = true;
      this.message = "Login Successful";

      // Mock user data
      const userData = {
        id: '1',
        firstName: 'John',
        role: 'Admin'
      };

      sessionStorage.setItem('userId', userData.id);
      sessionStorage.setItem('userName', userData.firstName);
      sessionStorage.setItem('role', userData.role);

      this.router.navigateByUrl("/dashboard");
    } else {
      this.message = "Email or Password is wrong";
      console.log('Login failed');
      this.attemptedLogin = true;
    }

    console.log(this.formData);
  }
}
