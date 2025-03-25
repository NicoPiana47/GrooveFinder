import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, CommonModule, ButtonModule, InputGroupModule, InputGroupAddonModule, InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  protected menuItems: MenuItem[] = [];
  protected darkMode = false;

  ngOnInit() {
    this.menuItems = [
      {
          label: 'Mural',
          icon: 'pi pi-objects-column',
          routerLink: 'groove-finder/dashboard',
          styleClass: 'flex self-center'
      },
      {
        label: 'Crear Groove',
        icon: 'pi pi-plus',
        routerLink: 'create',
      },
    ];
  }

  public toggleTheme(){
    const element = document.querySelector('html');
    this.darkMode = element?.classList?.toggle('dark-groove-finder') ?? false;
  }
}
