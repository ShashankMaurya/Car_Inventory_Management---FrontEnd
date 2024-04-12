import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterUpdateIDComponent } from './enter-update-id.component';

describe('EnterUpdateIDComponent', () => {
  let component: EnterUpdateIDComponent;
  let fixture: ComponentFixture<EnterUpdateIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterUpdateIDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterUpdateIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
