import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";


@Component({
    selector:'app-registration',
    templateUrl:'registration.component.html',
    styleUrls:['registartion.component.scss']
})
export class RegistrationComponent implements OnInit {

    registerForm: any;
    showPassword: boolean;
    showConfirmPassword: boolean;


    constructor(private authService: AuthService,private formBuilder: FormBuilder,private route:Router) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            first_name:['', Validators.required],
            last_name:['', Validators.required],
            email:['', Validators.required],
            password:['',Validators.required],
            confirmPassword:['', Validators.required]

        });
    }

    register(){
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }
        const formValue = this.registerForm.getRawValue();
        this.authService.createUserRegister(formValue).subscribe((res:any)=>{

            if(res.status){
             alert(res.msg)
                this.route.navigateByUrl('')

            }

        })
    }

    togglePassword(){
        this.showPassword = !this.showPassword;
    }
    toggleConfirmPassword(){
        this.showConfirmPassword = !this.showConfirmPassword;
    }
}
