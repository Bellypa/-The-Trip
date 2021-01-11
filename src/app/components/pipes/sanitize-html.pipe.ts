import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import DOMPurify from 'dompurify';
@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //   return null;
  // }

  constructor(private _sanitizer: DomSanitizer){}  

  transform(v: string) : SafeHtml {
     return this._sanitizer.bypassSecurityTrustHtml(v); 
    // return this._sanitizer.bypassSecurityTrustStyle(v); 
  } 

}
