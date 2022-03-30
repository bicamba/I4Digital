import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor() { }

  getDynamicMenu() {
    let menu = [
      {
        'title': 'Inicio',
        'url': '/acceso/home/menu-home',
        'icon': 'fas fa-home mr-3'
      },
      {
        'title': 'Lista Usuarios',
        'url': '/acceso/home/users',
        'icon': 'fas fa-user mr-3'
      },
      {
        'title': 'Lista publicaciones',
        'url': '/acceso/home/publications',
        'icon': 'fab fa-usps mr-3'
      },
      {
        'title': 'Fotos usuarios',
        'url': '/acceso/home/albums',
        'icon': 'fas fa-images mr-3'
      }
    ];
    return menu;
  }

}
