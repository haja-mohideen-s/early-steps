import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFrameworkModule } from "./site-framework/site-framework.module";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteFrameworkModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Early Steps - Preschool finder - Singapore';
}
