import { LoginComponent } from './../login/login.component';
import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ToastrService} from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private builder: FormBuilder, private toastr:ToastrService,
    private service:AuthService, private router:Router){



  }

  registrationform=this.builder.group({

    id:this.builder.control('', Validators.compose([Validators.required,Validators.maxLength(5)])),
    name: this.builder.control('',Validators.required),
    password: this.builder.control('',Validators.compose([Validators.required,Validators.pattern(' ')])),
    email: this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isactive: this.builder.control(false),
  });

  proceedregister(){
    if(this.registrationform.valid){

      this.service.ProceedRegistration(this.registrationform.value).subscribe(res => {

        this.toastr.success('Please contact admin to enable access' ,'Registered Successfully');
        this.router.navigate(['/login'])
      })

    }
  else{

    this.toastr.warning('Please enter valid')

  }
  }

}
