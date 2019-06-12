import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @Input() messageSent = false;
  @Input() showErrorMessage = false;
  @Output() sendMessage = new EventEmitter();
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required, Validators.minLength(30), Validators.maxLength(100)])
      }
    );
  }

  submit() {
    if (this.form.valid) {
      this.sendMessage.emit(this.form.value);
    }
  }

  getFieldValidation(fieldName) {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).dirty;
  }

}
