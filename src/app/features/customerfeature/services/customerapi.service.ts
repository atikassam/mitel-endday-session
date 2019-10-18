import {Injectable} from "@angular/core";
import {Observable, Subject, Subscription } from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map, mergeMap} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CustomerApiService {
  static readonly _BASE_ = 'http://localhost:3000'

  constructor(private http: HttpClient) {}
  getCustomers() {
    console.log("From API Service getCustomers");
    return this.http.get(`${CustomerApiService._BASE_}/customers`, {
    
    })
  }

  getCustomer(id) {
    console.log("From API Service getCustomers");
    return this.http.get(`${CustomerApiService._BASE_}/customers/${id}`, {
    
    })
  }
  addCustomer(customer) {
    console.log("From API Service addCustomer");
    return this.http.post(`${CustomerApiService._BASE_}/customers`, customer)
  }
  
  getCustomersOrders(customerid) {
    console.log("From API Service getOrders of customer : "+customerid);
    return this.http.get(`${CustomerApiService._BASE_}/customer/${customerid}/orders`, {
    })
  }
}
  

