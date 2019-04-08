import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appKeyLisn]'
})
export class KeyLisnDirective {

  @Output() goAwayTo=new EventEmitter();
  @Output() dataValueChanged=new EventEmitter();

  @HostListener('keydown', ['$event']) onKeyDown(e) {
    
      //console.log(`FROM DIRECTIVE : keyCode(${e.keyCode}) selectionEnd-(${e.target.selectionEnd}) `,e.target.prevSelectionEnd,e.target.value,e.type);
                  
      e.target.prevSelectionEnd = e.target.selectionEnd;
      
      if( this.rightGoAwayCondition(e) || this.leftGoAwayCondition(e) || e.keyCode === 9 || e.keyCode === 38 || e.keyCode === 40 ){

        this.goAwayTo.emit(e);
        e.preventDefault();
        e.stopPropagation();
      }
      
  }

  leftGoAwayCondition(event){
    if( event.keyCode==37 && (event.target.selectionEnd)===0 && ((event.target.selectionEnd) === event.target.prevSelectionEnd) ){
      return true;
    }
    return false;
  }
  rightGoAwayCondition(event){
    if( event.keyCode==39 && (event.target.selectionEnd)===event.target.value.length && ((event.target.selectionEnd) === event.target.prevSelectionEnd || !event.target.prevSelectionEnd ) ){
      return true;
    }
    return false;
  }
  

}
