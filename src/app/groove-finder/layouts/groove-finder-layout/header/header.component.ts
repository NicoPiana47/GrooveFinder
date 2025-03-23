import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  protected menuItems: MenuItem[] = [];

  
  ngOnInit() {
    this.menuItems = [
      {
          label: 'Mural',
          icon: 'pi pi-objects-column',
          routerLink: 'groove-finder/dashboard'
      },
      {
        label: 'Crear nuevo Groove',
        icon: 'pi pi-plus',
        routerLink: 'create',
      },
    ];
  }
}
