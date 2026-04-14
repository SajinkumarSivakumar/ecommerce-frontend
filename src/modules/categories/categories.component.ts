import {Component, OnInit} from '@angular/core';
import {MasterService} from '../master.service';

@Component({
    selector:'app-product',
    templateUrl:'./categories.component.html',
    styleUrls:['categories.component.scss'],
})


export class CategoriesComponent implements OnInit {

    categories: any =[];

    constructor(private ms: MasterService) {
    }
    ngOnInit(): void {
        this.ms.getCategoryItems().subscribe((res: any) =>{

            this.categories = res.data;
        });




    }
}
