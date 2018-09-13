import {Component} from '@angular/core';
import {Angulartics2GoogleAnalytics} from "angulartics2/ga";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
 constructor(private analytics: Angulartics2GoogleAnalytics) { }
}
