import { Component, OnInit } from '@angular/core';
import { MainMenuService } from "../../../services/dynamic-menu/main-menu.service";
 
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  myFunc() {
    $(this).toggleClass("active");
  }
  dynamic_menu:any[]=[];
  optionAdm:number;


  constructor(private menu: MainMenuService) {
    this.dynamic_menu = this.menu.getDynamicMenu();     
    this.optionAdm =  parseInt(sessionStorage.getItem('noPage')||'0');
  }

  ngOnInit(): void {
    this.Script(); 
  } 
  
  colorOption(item: number) {
    sessionStorage.setItem('noPage', item.toString()); 
    this.optionAdm =  parseInt(sessionStorage.getItem('noPage')||'0');
    console.log(this.optionAdm);
  }
 
  Script() {
    $(function () {
      // Sidebar toggle behavior
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active'); 
      });
    });
    
 
  }
}
