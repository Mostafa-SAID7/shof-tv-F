import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageShellComponent } from '../../core/layout/page-shell.component';

interface ConcessionItem {
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface CartItem {
  item: ConcessionItem;
  qty: number;
}

@Component({
  selector: 'app-concessions',
  standalone: true,
  imports: [CommonModule, PageShellComponent],
  template: `
    <app-page-shell>
    <div class="min-h-screen bg-background text-foreground">

      <div class="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <section class="relative mb-10 overflow-hidden rounded-3xl border border-white/10 p-8 md:p-10">
          <img src="/assets/img/pages/concessions/concessions.jpg" alt="Fresh cinema concessions ready for pickup" class="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div class="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-transparent"></div>
          <div class="relative max-w-xl">
            <p class="eyebrow">Make it a night</p>
            <h1 class="mt-3 text-4xl font-extrabold tracking-tight">The good stuff, ready when you arrive.</h1>
            <p class="mt-3 text-sm leading-relaxed text-secondary-foreground">Choose your favourites, pre-order in a few taps, and skip the concession stand queue.</p>
          </div>
        </section>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <!-- Left: Items -->
          <div class="lg:col-span-2">
            <h1 class="text-3xl font-bold text-foreground mb-2">Pre-order Concessions</h1>
            <p class="text-muted-foreground mb-8">Skip the line and enjoy your movie. Have it ready when you arrive.</p>

            <!-- Category Tabs -->
            <div class="flex items-center gap-6 border-b border-border mb-8">
              @for (tab of tabs; track tab.key) {
                <button
                  (click)="activeTab.set(tab.key)"
                  class="flex flex-col items-center gap-2 pb-3 border-b-2 transition-colors"
                  [class.border-primary]="activeTab() === tab.key"
                  [class.text-primary]="activeTab() === tab.key"
                  [class.border-transparent]="activeTab() !== tab.key"
                  [class.text-muted-foreground]="activeTab() !== tab.key"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="tab.icon"/>
                  </svg>
                  <span class="text-xs font-semibold">{{ tab.label }}</span>
                </button>
              }
            </div>

            <!-- Items Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              @for (item of filteredItems(); track item.name) {
                <div class="flex flex-col">
                  <div class="relative w-full aspect-square rounded-2xl bg-secondary border border-white/10 mb-3 overflow-hidden group">
                    <img [src]="item.image" [alt]="item.name" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div class="flex items-start justify-between mb-1">
                    <h3 class="text-sm font-semibold text-foreground">{{ item.name }}</h3>
                    <span class="text-sm font-bold text-primary">{{ '$' + item.price.toFixed(2) }}</span>
                  </div>
                  <p class="text-xs text-muted-foreground mb-3">{{ item.description }}</p>
                  <button
                    (click)="addToCart(item)"
                    class="mt-auto text-xs font-medium border border-border text-foreground py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
                  >
                    Add to Order
                  </button>
                </div>
              }
            </div>
          </div>

          <!-- Right: Cart Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-6 bg-card border border-border rounded-xl p-6">
              <h2 class="flex items-center gap-2 text-lg font-semibold text-foreground mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                Your Order
              </h2>

              @if (cart().length === 0) {
                <p class="text-sm text-muted-foreground text-center py-8">Your cart is empty</p>
              } @else {
                <div class="flex flex-col gap-4 mb-6">
                  @for (entry of cart(); track entry.item.name) {
                    <div class="flex items-start justify-between">
                      <div class="flex items-start gap-3">
                        <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                          </svg>
                        </div>
                        <div>
                          <p class="text-sm font-medium text-foreground">{{ entry.item.name }}</p>
                          <p class="text-xs text-muted-foreground">Qty: {{ entry.qty }}</p>
                        </div>
                      </div>
                      <div class="text-right">
                        <p class="text-sm font-medium text-foreground">{{ '$' + (entry.item.price * entry.qty).toFixed(2) }}</p>
                        <button
                          (click)="removeFromCart(entry.item.name)"
                          class="text-xs text-primary hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  }
                </div>

                <!-- Totals -->
                <div class="border-t border-border pt-4 flex flex-col gap-2">
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">Subtotal</span>
                    <span class="text-foreground">{{ '$' + subtotal().toFixed(2) }}</span>
                  </div>
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-muted-foreground">Tax</span>
                    <span class="text-foreground">{{ '$' + tax().toFixed(2) }}</span>
                  </div>
                  <div class="flex items-center justify-between text-base font-bold mt-2">
                    <span class="text-foreground">Total</span>
                    <span class="text-primary">{{ '$' + total().toFixed(2) }}</span>
                  </div>
                </div>

                <button type="button" (click)="checkout()" class="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg mt-6 hover:brightness-110 transition-all">
                  Checkout Concessions
                </button>
                @if (checkoutMessage) {
                  <p class="mt-3 text-center text-sm text-primary" role="status">{{ checkoutMessage }}</p>
                }
              }
            </div>
          </div>
        </div>
      </div>

    </div>
    </app-page-shell>
  `,
})
export class ConcessionsComponent {
  tabs = [
    { key: 'popcorn', label: 'Popcorn', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
    { key: 'drinks', label: 'Drinks', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { key: 'snacks', label: 'Snacks', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { key: 'combos', label: 'Combos', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  ];

  activeTab = signal('popcorn');

  items: ConcessionItem[] = [
    { name: 'Large Popcorn', price: 8.00, description: 'Classic buttery goodness, big enough to share.', category: 'popcorn', image: '/assets/img/pages/concessions/popcorn.jpg' },
    { name: 'Medium Popcorn', price: 6.00, description: 'Perfectly portioned for one hungry moviegoer.', category: 'popcorn', image: '/assets/img/pages/concessions/popcorn.jpg' },
    { name: 'Small Popcorn', price: 4.50, description: 'A quick snack to satisfy the craving.', category: 'popcorn', image: '/assets/img/pages/concessions/popcorn.jpg' },
    { name: 'Caramel Corn', price: 7.50, description: 'Sweet and crunchy caramel-coated delight.', category: 'popcorn', image: '/assets/img/pages/concessions/popcorn.jpg' },
    { name: 'Large Soda', price: 5.00, description: 'Choose from Coke, Sprite, or Fanta.', category: 'drinks', image: '/assets/img/pages/concessions/drinks.jpg' },
    { name: 'Medium Soda', price: 4.00, description: 'The perfect companion to your popcorn.', category: 'drinks', image: '/assets/img/pages/concessions/drinks.jpg' },
    { name: 'Water Bottle', price: 3.00, description: 'Pure spring water in a recyclable bottle.', category: 'drinks', image: '/assets/img/pages/concessions/drinks.jpg' },
    { name: 'Nachos', price: 6.50, description: 'Crunchy tortilla chips with warm cheese sauce.', category: 'snacks', image: '/assets/img/pages/concessions/snacks.jpg' },
    { name: 'Candy Bar', price: 4.00, description: 'Choose from M&Ms, Snickers, or Reeses.', category: 'snacks', image: '/assets/img/pages/concessions/snacks.jpg' },
    { name: 'Movie Night Combo', price: 15.00, description: 'Large popcorn + 2 large sodas + candy.', category: 'combos', image: '/assets/img/pages/concessions/combos.jpg' },
    { name: 'Date Night Combo', price: 22.00, description: '2 large popcorns + 2 drinks + nachos.', category: 'combos', image: '/assets/img/pages/concessions/combos.jpg' },
  ];

  filteredItems = computed(() =>
    this.items.filter(item => item.category === this.activeTab())
  );

  cartItems = signal<CartItem[]>([
    { item: { name: 'Large Popcorn', price: 8.00, description: '', category: 'popcorn', image: '/assets/img/pages/concessions/popcorn.jpg' }, qty: 1 },
    { item: { name: 'Large Soda', price: 5.00, description: '', category: 'drinks', image: '/assets/img/pages/concessions/drinks.jpg' }, qty: 1 },
  ]);

  cart = computed(() => this.cartItems());
  subtotal = computed(() => this.cart().reduce((sum, entry) => sum + entry.item.price * entry.qty, 0));
  tax = computed(() => this.subtotal() * 0.08);
  total = computed(() => this.subtotal() + this.tax());
  checkoutMessage = '';

  addToCart(item: ConcessionItem) {
    const current = this.cartItems();
    const existing = current.find(c => c.item.name === item.name);
    if (existing) {
      this.cartItems.set(current.map(c =>
        c.item.name === item.name ? { ...c, qty: c.qty + 1 } : c
      ));
    } else {
      this.cartItems.set([...current, { item, qty: 1 }]);
    }
  }

  removeFromCart(name: string) {
    this.cartItems.set(this.cartItems().filter(c => c.item.name !== name));
  }

  checkout() {
    this.checkoutMessage = `Your ${this.cart().length} item${this.cart().length === 1 ? '' : 's'} are ready for checkout.`;
  }
}
