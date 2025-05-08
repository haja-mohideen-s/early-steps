import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from "./layout/layout.module";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SGPreschools.com - A comprehensive preschool finder for Singapore';
}
