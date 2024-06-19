import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarComponent } from './topbar.component';
import { AuthService } from '../../../../services/auth/auth.service';
import { AuthRepository } from '../../../../state/auth.repository';
import { Auth } from '@angular/fire/auth';
import { MockProviders } from 'ng-mocks';
import { TranslateModule } from '@ngx-translate/core';

describe('TopbarComponent', () => {
  let component: TopbarComponent;
  let fixture: ComponentFixture<TopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopbarComponent, TranslateModule.forRoot()],
      providers: [MockProviders(AuthService, AuthRepository, Auth)],
    }).compileComponents();

    fixture = TestBed.createComponent(TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
