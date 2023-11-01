import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  misDatos = {
    email: 'coti17ro@gmail.com',
    password: '1234',
  }
 
constructor (private formBuilder: FormBuilder) {
  
}

LoginFormGroup: FormGroup = this.formBuilder.group({
email: ['', [Validators.email, Validators.required]],
password: ['',[Validators.minLength(4), Validators.maxLength(6)]],

})

leerDatos() {
  console.log (this.LoginFormGroup);
  if (this.LoginFormGroup.value.email === this.misDatos.email  && this.LoginFormGroup.value.password===this.misDatos)
  {alert ('coincide')}

  else {
    alert ('no coincide')
  }

}

// setLocalStorage() {
//   localStorage.setItem('Usuario', JSON.stringify(this.formBuilder));
// }

// getLocalStorage() {
//   this.LoginFormGroup= JSON.parse(localStorage.getItem('Usuario'));
// }

}



