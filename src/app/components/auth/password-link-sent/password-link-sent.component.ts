import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from '../../shared/language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-password-link-sent',
  standalone: true,
  imports: [RouterModule, LanguageSelectorComponent, TranslateModule],
  templateUrl: './password-link-sent.component.html',
  styleUrl: './password-link-sent.component.scss',
})
export class PasswordLinkSentComponent {}
