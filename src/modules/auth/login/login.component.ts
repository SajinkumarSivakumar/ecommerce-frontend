import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['login.component.scss'],
})

export class LoginComponent implements OnInit {
    showPassword: boolean;
    loginForm!: FormGroup;
    isLoading = false;


    constructor(private authService: AuthService,private fb: FormBuilder,private route: Router) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }
        this.isLoading = true;

        this.authService.login(this.loginForm.value).subscribe({
            next:(res: any)=>{
                localStorage.setItem('token', res.access_token);
                 Swal.fire({
                    title: 'Login Successful',
                    text: 'Welcome back!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result)=>{
                     if(result.isConfirmed){
                         this.route.navigateByUrl('product');
                     }
                 })

                this.isLoading = false;

            },
            error: () => {
                alert('Invalid Email or Password ');
                this.isLoading = false;
            }
        });
    }

    togglePassword(): void {
        this.showPassword = !this.showPassword;
    }



}
