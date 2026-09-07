import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageShellComponent } from '../../core/layout/page-shell.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PageShellComponent],
  template: `
    <app-page-shell>
    <div class="min-h-screen bg-background text-foreground">

      <!-- Hero -->
      <section class="relative text-center py-24 lg:py-36 px-6 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none"></div>
        <div class="relative z-10 max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-6xl font-display font-bold leading-tight mb-4">
            The Future of Cinema
            <br />
            <span class="text-primary">ShofTV</span>
          </h1>
          <p class="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Unleashing the magic of the silver screen directly to your living room.
            Experience stories that move you.
          </p>
        </div>
      </section>

      <!-- Mission -->
      <section class="section-padding text-center max-w-3xl mx-auto">
        <div class="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
        </div>
        <p class="text-xs font-medium tracking-[0.25em] uppercase text-primary mb-6">Our Mission</p>
        <p class="text-xl md:text-2xl font-display font-medium text-foreground leading-relaxed">
          To revolutionize the way you experience cinema by providing unparalleled access
          to the greatest films ever made, meticulously curated and delivered right at your fingertips.
        </p>
      </section>

      <!-- Journey Timeline -->
      <section class="section-padding max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Journey</h2>
          <p class="text-muted-foreground">
            From a small idea to a cinematic revolution, trace the steps that built ShofTV.
          </p>
        </div>

        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>

          @for (event of timeline; track event.year; let i = $index; let isEven = $even) {
            <div class="relative flex flex-col md:flex-row items-center mb-16 last:mb-0" [ngClass]="{ 'md:flex-row-reverse': !isEven }">
              <!-- Content -->
              <div class="md:w-5/12 text-center" [ngClass]="{ 'md:text-right': isEven, 'md:text-left': !isEven }">
                <span class="text-lg font-bold" [class.text-foreground]="isEven" [class.text-primary]="!isEven">{{ event.year }}</span>
                <h3 class="text-base font-semibold text-foreground mt-1">{{ event.title }}</h3>
                <p class="text-sm text-muted-foreground mt-2 leading-relaxed">{{ event.description }}</p>
              </div>
              <!-- Dot -->
              <div class="md:w-2/12 flex justify-center my-4 md:my-0">
                <div
                  class="w-3 h-3 rounded-full z-10"
                  [class.bg-muted-foreground]="isEven"
                  [class.bg-primary]="!isEven"
                ></div>
              </div>
              <!-- Spacer -->
              <div class="md:w-5/12"></div>
            </div>
          }
        </div>
      </section>

      <!-- Team -->
      <section class="section-padding max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-foreground mb-3">Meet the Visionaries</h2>
          <p class="text-muted-foreground max-w-lg mx-auto">
            The passionate minds working tirelessly to bring the magic of movies to your screen.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          @for (member of team; track member.name) {
            <div class="text-center">
              <div class="w-full aspect-square rounded-xl bg-secondary border border-border overflow-hidden mb-4">
                <div class="w-full h-full bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
              </div>
              <h3 class="text-sm font-semibold text-foreground">{{ member.name }}</h3>
              <p class="text-xs text-muted-foreground uppercase tracking-wider mt-1">{{ member.role }}</p>
            </div>
          }
        </div>
      </section>

    </div>
    </app-page-shell>
  `,
})
export class AboutComponent {
  timeline = [
    {
      year: '2018',
      title: 'The Inception',
      description: 'A group of cinephiles realized that finding classic and indie films was too hard. The idea for ShofTV was born in a small garage.',
    },
    {
      year: '2020',
      title: 'First Beta Launch',
      description: 'Launched to a closed group of 1,000 users. The feedback was overwhelmingly positive, validating our mission to curate the best.',
    },
    {
      year: '2022',
      title: 'Going Global',
      description: 'Expanded our streaming rights internationally, bringing diverse cinema to over 50 countries worldwide.',
    },
    {
      year: '2024',
      title: 'The Future is Here',
      description: 'Introducing 4K remasters of classic films and exclusive partnerships with independent studios.',
    },
  ];

  team = [
    { name: 'Alex Vance', role: 'Founder & CEO' },
    { name: 'Sarah Jenkins', role: 'Chief Technology Officer' },
    { name: 'David Chen', role: 'Head of Curation' },
    { name: 'Maya Patel', role: 'Lead Designer' },
  ];

}
