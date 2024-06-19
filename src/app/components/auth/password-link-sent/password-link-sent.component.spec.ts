import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordLinkSentComponent } from './password-link-sent.component';
import { TranslateModule } from '@ngx-translate/core';
import { MockModule, MockProviders } from 'ng-mocks';
import { ActivatedRoute } from '@angular/router';

describe('PasswordLinkSentComponent', () => {
  let component: PasswordLinkSentComponent;
  let fixture: ComponentFixture<PasswordLinkSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordLinkSentComponent, TranslateModule.forRoot()],
      providers: [MockProviders(ActivatedRoute)],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordLinkSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
