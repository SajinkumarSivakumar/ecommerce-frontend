import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment as env} from '../environments/environment';

@Injectable({
  providedIn:'root'
})

export class MasterService {

    constructor(private http: HttpClient) {
    }

    getProductUpload(data: any): Observable<any> {
        return this.http.post(env.apiUrl + 'master/fileUpload', data);
    }

    getCategoryItems(){
        return this.http.get(env.apiUrl + 'master/getCategories');
    }
}
