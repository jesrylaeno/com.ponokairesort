import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './features/footer/footer.component';
import { HeaderComponent } from './features/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'com.ponokairesort';
}
