import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageSelectorComponent } from '../../shared/language-selector/language-selector.component';

@Component({
  selector: 'app-confirmation-required',
  standalone: true,
  imports: [RouterModule, LanguageSelectorComponent],
  templateUrl: './confirmation-required.component.html',
  styleUrl: './confirmation-required.component.scss',
})
export class ConfirmationRequiredComponent {}
