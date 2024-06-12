import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from '../../shared/language-selector/language-selector.component';

@Component({
  selector: 'app-email-confirmed',
  standalone: true,
  imports: [RouterModule, TranslateModule, LanguageSelectorComponent],
  templateUrl: './email-confirmed.component.html',
  styleUrl: './email-confirmed.component.scss',
})
export class EmailConfirmedComponent {}
