import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiveChatComponent } from './shared/live-chat/live-chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LiveChatComponent,
  ],
  template: `
    <main class="min-h-screen">
      <router-outlet />
    </main>
    <app-live-chat />
  `,
  styles: [],
})
export class AppComponent {
  title = 'ShofTV - The Future of Cinema';
}
