import { Injectable } from '@angular/core';

export interface CheckoutRequest {
  plan: 'Premium' | 'Sports+';
}

@Injectable({ providedIn: 'root' })
export class BillingService {
  /**
   * The UI intentionally routes billing through this boundary. A server endpoint
   * will create the Whop checkout session once the product IDs are configured;
   * the browser must never claim payment success locally.
   */
  async startCheckout(request: CheckoutRequest): Promise<{ ok: boolean; message: string }> {
    try {
      const response = await fetch('/api/billing/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });
      const result = await response.json() as { checkoutUrl?: string; error?: string };
      if (!response.ok || !result.checkoutUrl) {
        return { ok: false, message: result.error ?? 'Checkout is being connected. Please try again soon.' };
      }
      window.location.assign(result.checkoutUrl);
      return { ok: true, message: 'Redirecting to secure checkout…' };
    } catch {
      return { ok: false, message: 'We could not reach secure checkout. Please try again.' };
    }
  }
}