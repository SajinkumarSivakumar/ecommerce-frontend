import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'app/app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AgGridModule} from 'ag-grid-angular';
import {LoginComponent} from '../modules/auth/login/login.component';
import {RegistrationComponent} from '../modules/auth/registration/registartion.component';
import {CategoriesComponent} from '../modules/categories/categories.component';
import {AuthGuard} from '../modules/auth/auth.guard';
import {AuthInterceptor} from "../modules/auth/auth.interceptor";
import {CommonComponent} from "../modules/common/common.component";


const routes: Routes = [

    {
        path:'',
        component: LoginComponent,
    },
    {
        path:'register',
        component:RegistrationComponent
    },

    {
        path:'product',
        component:CategoriesComponent,
        canActivate: [AuthGuard]
    }



];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        CategoriesComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
            enableTracing: false
        }),
        HttpClientModule,
        MatIconModule,
        MatTableModule,

        ReactiveFormsModule,
        MatDatepickerModule,
        AgGridModule,
        CommonComponent,
    ],
    providers: [
        {
            provide:HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
