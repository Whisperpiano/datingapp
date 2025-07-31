import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCredentials } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private accountService = inject(AccountService);
  protected creds = {} as RegisterCredentials;
  cancelRegister = output<boolean>();

  register() {
    this.accountService.register(this.creds).subscribe({
      next: (response) => {
        console.log(response);
        this.cancel();
      },
      error: (error) => {
        console.error('Registration failed', error);
      },
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
