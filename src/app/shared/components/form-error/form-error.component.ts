import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import * as ɵngcc0 from "@angular/core";
import {
  AsyncValidator,
  AsyncValidatorFn,
  ControlContainer, ControlValueAccessor,
  FormControl,
  NgControl, NgForm, NgModel,
  Validator,
  ValidatorFn
} from "@angular/forms";

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {

  @Input() fieldName: NgModel | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
