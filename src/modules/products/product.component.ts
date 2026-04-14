import {Component, OnInit} from '@angular/core';
import {MasterService} from '../master.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.scss']
})
export class ProductComponent implements OnInit {

    selectedFile: File | null = null;
    selectedType: string = '';
    inputValue: string = '';

    constructor(private ms: MasterService) {
    }

    ngOnInit() {

        const token = localStorage.getItem('token');
        console.log('tokenLogic',token)

    }

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
    }


    onDragOver(event: DragEvent) {
        event.preventDefault();
    }

    onDrop(event: DragEvent) {
        event.preventDefault();
        if (event.dataTransfer?.files.length) {
            this.selectedFile = event.dataTransfer.files[0];
        }
    }

    removeFile() {
        this.selectedFile = null;
    }

    uploadFile() {
        if (!this.selectedFile) {return;}
        const formData = new FormData();
        formData.append('fileUpload', this.selectedFile);
        formData.append('type', this.selectedType);
        formData.append('text', this.inputValue);


      this.ms.getProductUpload(formData).subscribe((res: any)=>{
          if(res.status){
              Swal.fire({
                    title:'success',
                  text: res.msg,
                  icon: 'success',
              });
          } else {
              Swal.fire({
                  title:'error',
                  text: 'Something Error, Please try Some Times',
                  icon: 'error',
              });
          }
      });


    }

}
