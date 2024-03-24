import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('blur') onBlur() {
    if (this.el.nativeElement.value) {
      const arr: string[] = this.el.nativeElement.value;
      for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].toUpperCase();
      }
      this.el.nativeElement.value = arr.join('');
   }
  }
}