import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { NgrxDirective } from './directives/ngrx.directive';
import {RouterModule} from "@angular/router";
import {CoreRoutingModule} from "./core-routing.module";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import {SecuredSrcDirective} from "./directives/secured-src.directive";

const coreComponents = [ NavbarComponent, AuthenticationButtonComponent, WelcomePageComponent, NgrxDirective];
const coreDirectives = [SecuredSrcDirective];

@NgModule({
    declarations: [ ...coreComponents, ...coreDirectives ],
    exports: [NavbarComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        CoreRoutingModule,
        SharedModule,
        FontAwesomeModule
    ]
})
export class CoreModule { }
