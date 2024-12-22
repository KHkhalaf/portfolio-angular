import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
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
