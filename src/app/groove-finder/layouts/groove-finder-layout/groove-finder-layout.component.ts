import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-groove-finder-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './groove-finder-layout.component.html',
  styleUrl: './groove-finder-layout.component.css'
})
export class GrooveFinderLayoutComponent {
  
}
