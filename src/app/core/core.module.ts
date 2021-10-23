import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AutenticationButtonComponent } from './components/login-logout-signup-button/autentication-button.component';
import { StoreDirective } from './directives/store.directive';



@NgModule({
    declarations: [
        NavbarComponent,
        AutenticationButtonComponent,
        StoreDirective
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CoreModule { }
