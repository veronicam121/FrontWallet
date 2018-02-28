import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Address } from '../../app/models/address';
import { Validator } from '@angular/forms/src/directives/validators';

@IonicPage()
@Component({
  selector: 'page-edit-address',
  templateUrl: 'edit-address.html',
})
export class EditAddressPage {

  private address: Address;
  private action: string;
  private addressForm: FormGroup;
  private inputs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public event: Events,
              public formBuilder: FormBuilder) {
    this.address = this.navParams.data;
    this.inputs = [
      {name: 'Address', value: this.address.address, type: 'text',
      validators: [Validators.minLength(10), Validators.required]},
      {name: 'Alias', value: this.address.alias, type: 'text',
      validators: [Validators.required]},
      {name: 'Id', value: this.address.id, type: 'text', validators: ''},
    ];
    this.addressForm = formBuilder.group({});
    this.inputs.forEach((control) => {
      this.addressForm.addControl(control.name, new FormControl(control.value));
      this.addressForm.controls[control.name].setValidators(control.validators);
    });
  }

  private onSubmit(form) {
      form.value.id = this.navParams.data;
      this.event.publish('edited:address', form.value);
      this.navCtrl.pop();
  }

  private backButtonAction() {
    this.navCtrl.pop();
  }
}
