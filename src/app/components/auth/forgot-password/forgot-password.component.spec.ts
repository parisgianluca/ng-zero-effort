import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockProviders } from 'ng-mocks';
import { AuthService } from '../../../services/auth/auth.service';
import { AuthRepository } from '../../../state/auth.repository';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ActivatedRoute } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ForgotPasswordComponent,
        TranslateModule.forRoot(),
        NoopAnimationsModule,
      ],
      providers: [MockProviders(AuthService, AuthRepository, ActivatedRoute)],
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
