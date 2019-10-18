import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class getItemListService {

    constructor(private _http: HttpClient, private router: Router) {

    }
    getitemList() {
        console.log("Loaded");
        return this._http.get(`http://localhost:3000/items`, {

            // withCredentials: true
        })
    }

    postOrderDetails(item): any {
        console.log("Item", item);
        // debugger;
        return this._http.get(`http://localhost:3000/customer/${item.customerid}`)
            .pipe(
                map((d: any) => this._http.post(`http://localhost:3000/orders`, {
                    "customer": {
                        "id": d.id,
                        "name": d.name,
                        "address": d.address
                    },
                    "items": d.items,
                    "total": "100",
                    "date": 123456789
                }).pipe(map((data: any) => {
                    console.log("data", data);
                    this.router.navigate(['/sales/invoice', data.id])
                    return data;
                }))))

    }
}


