import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSuccessComponent } from './insert-success.component';

describe('InsertSuccessComponent', () => {
  let component: InsertSuccessComponent;
  let fixture: ComponentFixture<InsertSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
