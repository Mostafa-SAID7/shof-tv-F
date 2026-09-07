import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SelectOption {
  value: string;
  label: string;
}

let nextSelectId = 0;

@Component({
  selector: 'app-select-control',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <div class="relative w-full">
      <button
        type="button"
        class="flex min-h-10 w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-card px-4 py-2.5 text-left text-sm text-foreground shadow-sm transition focus:outline-none focus:ring-2 focus:ring-primary/30"
        [class.border-primary]="open"
        [attr.aria-expanded]="open"
        [attr.aria-haspopup]="'listbox'"
        [attr.aria-controls]="listId"
        [attr.aria-label]="ariaLabel"
        (click)="toggle()"
        (keydown)="onTriggerKeydown($event)"
      >
        <span class="truncate">{{ selectedLabel }}</span>
        <svg
          class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
          [class.rotate-180]="open"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      @if (open) {
        <div
          [id]="listId"
          role="listbox"
          class="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-xl border border-white/15 bg-[#1a181e]/[.98] p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl"
        >
          @for (option of options; track option.value; let i = $index) {
            <button
              #optionButton
              type="button"
              role="option"
              class="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-foreground focus:bg-primary/10 focus:text-foreground focus:outline-none"
              [class.bg-primary]="option.value === value"
              [class.text-primary-foreground]="option.value === value"
              [attr.aria-selected]="option.value === value"
              (click)="choose(option.value)"
              (keydown)="onOptionKeydown($event, i)"
            >
              <span>{{ option.label }}</span>
              @if (option.value === value) {
                <svg class="h-4 w-4 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m5 12 4 4L19 6" />
                </svg>
              }
            </button>
          }
        </div>
      }
    </div>
  `,
})
export class SelectControlComponent implements AfterViewInit {
  @Input() options: readonly SelectOption[] = [];
  @Input() value = '';
  @Input() ariaLabel = 'Select an option';
  @Output() readonly valueChange = new EventEmitter<string>();

  @ViewChildren('optionButton') optionButtons!: QueryList<ElementRef<HTMLButtonElement>>;

  readonly listId = `select-options-${++nextSelectId}`;
  open = false;

  get selectedLabel(): string {
    return this.options.find((option) => option.value === this.value)?.label ?? this.options[0]?.label ?? 'Select an option';
  }

  ngAfterViewInit(): void {}

  toggle(): void {
    this.open = !this.open;
    if (this.open) this.focusSelectedOption();
  }

  choose(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
    this.open = false;
  }

  onTriggerKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!this.open) {
        this.open = true;
        this.focusSelectedOption();
      }
    } else if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      this.open = false;
    }
  }

  onOptionKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusOption(Math.min(index + 1, this.options.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusOption(Math.max(index - 1, 0));
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const option = this.options[index];
      if (option) this.choose(option.value);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.open = false;
    }
  }

  @HostListener('document:click', ['$event'])
  closeWhenClickingOutside(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) this.open = false;
  }

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  private focusSelectedOption(): void {
    const index = Math.max(this.options.findIndex((option) => option.value === this.value), 0);
    setTimeout(() => this.focusOption(index));
  }

  private focusOption(index: number): void {
    this.optionButtons?.get(index)?.nativeElement.focus();
  }
}