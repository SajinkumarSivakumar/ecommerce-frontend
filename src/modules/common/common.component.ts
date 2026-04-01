import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {MasterService} from "../master.service";

@Component({
    selector: 'app-common',
    templateUrl: './common.component.html',
    styleUrls: ['common.component.scss'],
    imports: [
        NgIf
    ],
    standalone: true
})

export class CommonComponent implements OnInit {

    isSidebarOpen: boolean = false;

    constructor(private route: Router,private ms:MasterService) {
    }
    ngOnInit() {
    }


    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    navigateToHome(){
        this.route.navigateByUrl('/category');

    }

    navigateToCategories(){
        this.route.navigateByUrl('/product');

    }

    navigateToOrders(){

    }

    navigateToWishlist(){

    }

    navigateToSettings(){

    }
}
