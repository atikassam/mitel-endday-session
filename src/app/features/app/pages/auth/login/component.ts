import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {select, Store} from "@ngrx/store";
// import {AuthAction} from "../../../reducers/auth/actions";
import {Router} from "@angular/router";
import {AuthAction} from "../../../reducers/auth/actions";
import * as _ from 'lodash'
import {map} from "rxjs/operators";

@Component({
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class LoginComponent implements OnInit {
  credential: any = {}

  constructor(public store: Store<any>, public router: Router) {}

  ngOnInit(): void {
    this.store.subscribe(console.log)
    this.store.select('application')
      .pipe(map((state) => _.get(state, 'auth.is_loggedin')))
      .subscribe((is_loggedin) => {
        if (is_loggedin) {
          this.router.navigate([''])
        }
      })
  }

  onSubmit() {
    // console.log(this.credential, 'com')
    this.store.dispatch(AuthAction.Login({ credentials: this.credential }))
    // // this.store.dispatch(AuthAction.StartSession({ token: this.credential }))
  }
}
