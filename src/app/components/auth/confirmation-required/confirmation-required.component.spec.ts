import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MockProviders } from 'ng-mocks';
import { ConfirmationRequiredComponent } from './confirmation-required.component';

describe('ConfirmationRequiredComponent', () => {
  let component: ConfirmationRequiredComponent;
  let fixture: ComponentFixture<ConfirmationRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationRequiredComponent, TranslateModule.forRoot()],
      providers: [MockProviders(ActivatedRoute)],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
