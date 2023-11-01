import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  IAddressFormGroup,
  IPersonalFormGroup,
} from './interfaces/personal-form.interface';

@Component({
  selector: 'app-typed-forms',
  templateUrl: './typed-forms.component.html',
  styleUrls: ['./typed-forms.component.scss'],
})
export class TypedFormsComponent {
  form: FormGroup<IPersonalFormGroup>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      name: this.fb.control(''),
      lastName: this.fb.nonNullable.control(''),
      address: this.fb.group<IAddressFormGroup>({
        country: this.fb.nonNullable.control('Perú'),
      }),
    });

    this.form.addControl('age', this.fb.control(12));
  }

  resetForm(): void {
    this.form.reset();
  }
}
