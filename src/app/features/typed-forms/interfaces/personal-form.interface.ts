import { FormControl, FormGroup } from '@angular/forms';

export interface IPersonalFormGroup {
  name: FormControl<string | null>;
  lastName: FormControl<string>;
  address: FormGroup<IAddressFormGroup>;
  age?: FormControl<number | null>;
}

export interface IAddressFormGroup {
  country: FormControl<string>;
  state?: FormControl<string | null>;
  street?: FormControl<number | null>;
}
