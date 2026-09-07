import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageShellComponent } from '../../core/layout/page-shell.component';

@Component({
  selector: 'app-gift-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, PageShellComponent],
  templateUrl: './gift-cards.component.html',
})
export class GiftCardsComponent {
  amounts = [
    { value: 25, label: '$25', popular: false },
    { value: 50, label: '$50', popular: true },
    { value: 100, label: '$100', popular: false },
    { value: 0, label: 'Custom', sub: 'Amount', popular: false },
  ];

  cardTypes = [
    {
      value: 'digital',
      label: 'Digital Card',
      description: 'Delivered instantly via email',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      value: 'physical',
      label: 'Physical Card',
      description: 'Mailed in premium packaging',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    },
  ];

  selectedAmount = signal(50);
  selectedCardType = signal('digital');
  customAmount = '';
  recipientName = '';
  recipientEmail = '';
  personalMessage = '';
  purchaseMessage = '';

  totalDisplay = computed(() => {
    const amt = this.selectedAmount();
    return amt === 0 ? '$0.00' : `$${amt.toFixed(2)}`;
  });

  selectAmount(value: number) {
    this.selectedAmount.set(value);
  }

  purchase() {
    if (this.selectedAmount() === 0 && (!this.customAmount || Number(this.customAmount) <= 0)) {
      this.purchaseMessage = 'Enter a custom amount greater than $0 to continue.';
      return;
    }
    if (!this.recipientName.trim() || !this.recipientEmail.trim()) {
      this.purchaseMessage = 'Add the recipient name and email to continue.';
      return;
    }
    this.purchaseMessage = `Your ${this.selectedCardType()} gift card is ready for checkout.`;
  }
}
