import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'admin@gmail.com' && this.password === '1234') {
      localStorage.setItem('login', 'true');  
      alert('Login Successful');

      // redirect to home
      this.router.navigate(['/home']);
    } else {
      alert('Invalid Credentials');
    }
  }

}
