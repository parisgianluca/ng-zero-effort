import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordLinkSentComponent } from './password-link-sent.component';

describe('PasswordLinkSentComponent', () => {
  let component: PasswordLinkSentComponent;
  let fixture: ComponentFixture<PasswordLinkSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordLinkSentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordLinkSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
