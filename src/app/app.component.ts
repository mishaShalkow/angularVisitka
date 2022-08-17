import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Userservice } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Userservice]
})
export class AppComponent {
  constructor(private userService: Userservice) {}
}
