import {BehaviorSubject, Observable} from "rxjs";
import {Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, switchMap, tap} from "rxjs/operators";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Directive({
  selector: '[securedSrc]'
})
export class SecuredSrcDirective implements OnChanges  {
  @Input() securedSrc: string = '';
  @Output() safeUrl$ = new EventEmitter<Observable<SafeUrl>>();

  constructor(private httpClient: HttpClient, private domSanitizer:DomSanitizer) {}

  ngOnChanges(changes:SimpleChanges): void {
    if (changes.securedSrc) this.safeUrl$.emit(this.loadImage(this.securedSrc))
  }


  private loadImage = (url: string): Observable<SafeUrl> =>
    this.httpClient.get(url, {responseType: 'blob'})
      .pipe(
        map(e => this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e))),
        );

}

