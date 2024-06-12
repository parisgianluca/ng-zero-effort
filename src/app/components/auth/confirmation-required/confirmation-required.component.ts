import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from '../../shared/language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation-required',
  standalone: true,
  imports: [RouterModule, LanguageSelectorComponent, TranslateModule],
  templateUrl: './confirmation-required.component.html',
  styleUrl: './confirmation-required.component.scss',
})
export class ConfirmationRequiredComponent {}
