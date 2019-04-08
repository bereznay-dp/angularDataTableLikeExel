import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCellTypeheadComponent } from './data-cell-typehead.component';

describe('DataCellTypeheadComponent', () => {
  let component: DataCellTypeheadComponent;
  let fixture: ComponentFixture<DataCellTypeheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCellTypeheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCellTypeheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
