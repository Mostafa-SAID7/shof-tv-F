import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-page-shell',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <ng-content />
    <app-footer />
  `,
})
export class PageShellComponent {}