import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {BehaviorSubject, interval, Observable, of} from "rxjs";
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class HomeComponent {}
