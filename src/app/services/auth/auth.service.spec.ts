import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { MockProviders } from 'ng-mocks';
import { AuthService } from './auth.service';
import { TranslateService } from '@ngx-translate/core';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProviders(Auth, TranslateService)],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
