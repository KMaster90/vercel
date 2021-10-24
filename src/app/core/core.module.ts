import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { NgrxDirective } from './directives/ngrx.directive';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        NavbarComponent,
        AuthenticationButtonComponent,
        NgrxDirective
    ],
    exports: [
        NavbarComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
