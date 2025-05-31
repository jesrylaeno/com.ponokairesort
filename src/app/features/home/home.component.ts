// src/app/features/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { PageIconsComponent } from './page-icons/page-icons.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroImageComponent, PageIconsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
