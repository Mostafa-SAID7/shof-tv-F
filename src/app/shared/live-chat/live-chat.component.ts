import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  sender: 'agent' | 'user';
  text: string;
  time: string;
}

@Component({
  selector: 'app-live-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- FAB Button -->
    @if (!isOpen()) {
      <button
        (click)="isOpen.set(true)"
        class="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:brightness-110 transition-all z-50"
        aria-label="Open chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      </button>
    }

    <!-- Chat Window -->
    @if (isOpen()) {
      <div class="fixed bottom-6 right-6 w-[360px] max-h-[540px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col z-50 animate-scale-in overflow-hidden">
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-4 border-b border-border bg-card">
          <div class="flex items-center gap-3">
            <span class="text-lg font-black">
              <span class="text-primary">SHOF</span><span class="text-foreground">TV</span>
            </span>
            <span class="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
              <span class="w-2 h-2 rounded-full bg-success"></span>
              Online
            </span>
          </div>
          <div class="flex items-center gap-2">
            <button
              (click)="isOpen.set(false)"
              class="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Minimize"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Messages -->
        <div class="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4 min-h-[300px]">
          <!-- Timestamp -->
          <div class="text-center">
            <span class="text-[10px] text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              Today, 2:30 PM
            </span>
          </div>

          @for (msg of messages; track $index) {
            <div>
              @if (msg.sender === 'agent') {
                <p class="text-[10px] text-muted-foreground mb-1">Support Agent</p>
                <div class="flex items-end gap-2">
                  <div class="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                  </div>
                  <div class="bg-primary text-primary-foreground rounded-2xl rounded-bl-sm px-4 py-3 max-w-[250px]">
                    <p class="text-sm leading-relaxed">{{ msg.text }}</p>
                  </div>
                </div>
              } @else {
                <p class="text-[10px] text-muted-foreground mb-1 text-right">You</p>
                <div class="flex justify-end">
                  <div class="bg-secondary border border-border rounded-2xl rounded-br-sm px-4 py-3 max-w-[250px]">
                    <p class="text-sm leading-relaxed text-foreground">{{ msg.text }}</p>
                  </div>
                </div>
              }
            </div>
          }
        </div>

        <!-- Input -->
        <div class="px-4 py-3 border-t border-border bg-card">
          <div class="flex items-center gap-2 bg-secondary border border-border rounded-full px-3">
            <input
              type="text"
              [(ngModel)]="newMessage"
              (keydown.enter)="sendMessage()"
              placeholder="Type your message..."
              class="flex-1 bg-transparent py-2.5 text-sm text-foreground placeholder-muted-foreground focus:outline-none"
            />
            <button
              (click)="sendMessage()"
              class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:brightness-110 transition-all shrink-0"
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </div>
          <p class="text-[10px] text-muted-foreground text-center mt-2">Powered by ShofTV Support</p>
        </div>
      </div>
    }
  `,
})
export class LiveChatComponent {
  isOpen = signal(false);
  newMessage = '';

  messages: ChatMessage[] = [
    {
      sender: 'agent',
      text: 'Hello! Welcome to ShofTV support. How can I assist you with your subscription today?',
      time: '2:30 PM',
    },
    {
      sender: 'user',
      text: "Hi, I'm trying to upgrade my plan to 4K streaming, but I'm getting an error on checkout.",
      time: '2:31 PM',
    },
    {
      sender: 'agent',
      text: 'I can certainly help you with that. Could you please provide the email associated with your account?',
      time: '2:32 PM',
    },
  ];

  @HostListener('window:shof:open-chat')
  openFromHelp() {
    this.isOpen.set(true);
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;
    this.messages.push({
      sender: 'user',
      text: this.newMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    this.newMessage = '';
  }
}
