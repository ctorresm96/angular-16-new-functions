import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDataComponent } from './private-data.component';

describe('PrivateDataComponent', () => {
  let component: PrivateDataComponent;
  let fixture: ComponentFixture<PrivateDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateDataComponent]
    });
    fixture = TestBed.createComponent(PrivateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
