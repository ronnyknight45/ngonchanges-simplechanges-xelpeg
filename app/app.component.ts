import { Component, Directive, Input } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<button [directiveListen]='counter' (click)='fun()'>ng change</button>`
})
export class AppComponent   {
  counter = 0;
  fun() { 
    this.counter++ 
  }
}

@Directive({
  selector: '[directiveListen]',
})
export class DirectiveListen {
  @Input () directiveListen;
  ngOnChanges(chg) {
    alert('currentValue: '    + chg.directiveListen.currentValue + 
      '\r\n firstChange: '    + chg.directiveListen.firstChange + 
      ' \r\n previousValue: ' + chg.directiveListen.previousValue
    );
  }
}