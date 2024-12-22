import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  constructor(private snackBar: MatSnackBar) {}

  sendMessage(event: Event): void {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_o9q968c',
        'template_tjok7ab',
        event.target as HTMLFormElement,
        {
          publicKey: 'WTVYmCtP956b7TbS8',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          this.snackBar.open(
            'Ihre Nachricht wurde erfolgreich gesendet!',
            'Close',
            {
              duration: 3000,
            }
          );
          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: '',
          };
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
