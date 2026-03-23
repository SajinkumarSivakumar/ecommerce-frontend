import {Component, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

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

    constructor() {
    }
    ngOnInit() {
    }


    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    navigateToHome(){

    }

    navigateToOrders(){

    }

    navigateToWishlist(){

    }

    navigateToSettings(){

    }
}
