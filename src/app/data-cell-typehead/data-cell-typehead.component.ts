import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-data-cell-typehead',
  templateUrl: './data-cell-typehead.component.html',
  styleUrls: ['./data-cell-typehead.component.scss']
})
export class DataCellTypeheadComponent implements OnInit {
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Dakota',
    'North Carolina',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
  @Input() value:string;
  @Output() editDataDone = new EventEmitter();

  
  typeheadShowing = false;

  handleStaticResultSelected(result){
    console.log('handleStaticResultSelected : ' + result);
    this.value = result;
    this.typeheadShowing = false;
    
  }
 
  blurHandler(event){
    event.target.value = this.value;
    this.editDataDone.emit(event);
  }

  keyup(event){
    console.log('keyup datacell typeheadmode : '+this.typeheadShowing);
    if(event.target.value != this.value){
      this.value = event.target.value;
      this.typeheadShowing = true;
    }
  }

  keyHandler(event){
    console.log('keyHandler datacell');
      
    if(!this.typeheadShowing){
      this.editDataDone.emit(event);
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}
