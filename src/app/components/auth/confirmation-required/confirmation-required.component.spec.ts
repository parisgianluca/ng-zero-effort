import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationRequiredComponent } from './confirmation-required.component';

describe('ConfirmationRequiredComponent', () => {
  let component: ConfirmationRequiredComponent;
  let fixture: ComponentFixture<ConfirmationRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationRequiredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
