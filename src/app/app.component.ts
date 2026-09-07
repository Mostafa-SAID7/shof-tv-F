import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CookiePreferencesComponent } from './shared/cookie-preferences/cookie-preferences.component';
import { LiveChatComponent } from './shared/live-chat/live-chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CookiePreferencesComponent,
    LiveChatComponent,
  ],
  template: `
    <main class="min-h-screen">
      <router-outlet />
    </main>
    <app-cookie-preferences 
      *ngIf="showCookiePreferences()"
      (close)="closeCookiePreferences()"
      (savePreferences)="saveCookiePreferences($event)"
      (acceptAll)="acceptAllCookies()"
    />
    <app-live-chat />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ShofTV - The Future of Cinema';
  showCookiePreferences = signal(false);

  closeCookiePreferences() {
    this.showCookiePreferences.set(false);
  }

  saveCookiePreferences(categories: any[]) {
    console.log('Saved preferences:', categories);
    this.showCookiePreferences.set(false);
  }

  acceptAllCookies() {
    console.log('Accepted all cookies');
    this.showCookiePreferences.set(false);
  }
}
