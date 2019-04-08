import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit {

  @Input() editMode: boolean;
  @Input() value: any;

  @Output() editEnd = new EventEmitter();

  cellClick(event){
    this.editMode = !this.editMode;
  }

  onBlur(event){
    event.target.blur();
    this.editMode=false;
    this.editEnd.emit();
  }
  constructor() { }

  ngOnChanges(){
    console.log('onCnange');
  }

  ngOnInit() {
  }

}
