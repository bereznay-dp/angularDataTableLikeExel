import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']

})
export class TableComponent {

  editing = {};
  rows = [];
  updatedRows = [];
  selected: any[] = [];
  pageSize = 10;
  editionMode = false;

  columns: any[] = [
    { name: 'name',type:'text'} , 
    { name: 'gender',type:'text' },
    { name: 'company',type:'text' }, 
    { name: 'age',type:'text'},
    { name: 'age2',type:'text' },
    { name: 'typehead',type:'typehead' },
    { name: 'test',type:'text' },
      
  ];

  constructor() {
    console.log(this.columns);

    this.fetch((data) => {
      this.rows = data;
    });
  }
     

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateValue(event, cell, rowIndex) {
    
    if( this.rows[rowIndex][cell] == event.target.value){
      console.log('DATA SAME!'+'updateValue : ', event.target.value);
    }
    else{
      this.rows[rowIndex][cell] = event.target.value;
      this.updatedRows[rowIndex]= this.rows[rowIndex];
      this.rows = [...this.rows];
      console.log('UPDATED!'+'updateValue : ', event.target.value,this.updatedRows );
    }
    
  }

  dataCellClick(event,rowIndex,cell){
    this.editing = [];
    this.editing[rowIndex + '-' + cell] = true;

  }

  onBlurHandler(event,cell,rowIndex){
    this.updateValue(event, cell, rowIndex);
    this.editing[rowIndex+'-' + cell] = false;
  }     
  editDoneHandler(event,rowIndex,name,prevColumn,nextColumn){
    console.log('editDoneHandler',event);
    this.updateValue(event,name,rowIndex);
    this.onCellEditorKeyUp(event,rowIndex, name,prevColumn,nextColumn);
  }

  onCellEditorKeyUp(event, rowIndex, name,prevColumn,nextColumn) {
  
    console.log('onCellEditorKeyUp',event.target.value);
    
    this.updateValue(event,name,rowIndex);
    
    switch (event.keyCode) {
      case 37:
        console.log('left');
        if(prevColumn !== 'null' ){
          this.editing[rowIndex+'-' + name] = false;
          this.editing[rowIndex+'-' + prevColumn] = true;
          event.preventDefault();
        }
                
        break;
      case 39:
        console.log('right');
        if(nextColumn !== 'null' ){
          this.editing[rowIndex+'-' + name] = false;
          this.editing[rowIndex+'-' + nextColumn] = true;
          event.preventDefault();
        }
        break;
      case 38:
        console.log('top');
        let topRowIndex = ((rowIndex - 1) < 0) ? 0 : rowIndex - 1;     
        this.editing[rowIndex+'-' + name] = false;
        this.editing[topRowIndex + '-' + name] = true;
        event.preventDefault();
        
        break;
      case 40:
        console.log('down');
        let downRowIndex = ((rowIndex + 1) >= this.pageSize ) ? rowIndex : rowIndex + 1;     
        this.editing[rowIndex+'-' + name] = false;
        this.editing[downRowIndex + '-' + name] = true;
        event.preventDefault();
        
        break;
      case 9:
        console.log('tab');
        if(nextColumn !== 'null' ){
          this.editing[rowIndex+'-' + name] = false;
          this.editing[rowIndex+'-' + nextColumn] = true;
          event.preventDefault();
        }

        if( nextColumn == 'null'){
          this.editing[rowIndex+'-' + name] = false;
          let downRowIndex = ((rowIndex + 1) >= this.pageSize ) ? rowIndex : rowIndex + 1;
          let firstColumn = this.columns[0].name;
          this.editing[downRowIndex+'-' + firstColumn] = true;
          event.preventDefault();
        }
        break;
        

    }
    
    event.stopPropagation();

  }

}

