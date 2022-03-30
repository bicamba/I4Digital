import { Component, OnInit } from '@angular/core';
import { RunServeService } from 'src/app/services/services/run-serve.service';
import { RunEnumService } from "src/app/enum/run-enum.service";
import { AlertsService } from "src/app/services/sweet-alert/alerts.service";
// Declaro las variables de jQuery
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  listUsers: any[] = [];

  public currentPage = 1;
  public currentPage2 = 1;
  public paginateData2: any = [];
  filterData2: any;
  public labelFilter2 = [
    'name',
    'username',
    'email',
    'address',
    'phone',
    'website',
    'company'
  ];
 
  constructor(private runServe: RunServeService, private alertsService: AlertsService) {
    this.getUser();
  }

  ngOnInit(): void {  

  }

 
  async getUser() {
    let data;
    fetch(RunEnumService.get_users)
      .then(async response => {
        data = await response.json();
        this.listUsers=data;
        this.resetPaginator2();
        console.log(this.listUsers)
      })
      .then(json => console.log(json));
  }

  public resetPaginator2() {
    this.paginateData2 = [];
    for (let i = 1; i <= Math.ceil(this.listUsers.length / 5); i++) {
      this.paginateData2.push(i);
    }
  }

  public currentPaginator2(pagina: number) {
    console.log(pagina);
    this.currentPage2 = pagina;
  }

  public nextPaginator2() {
    if (this.currentPage2 < this.paginateData2.length) {
      this.currentPage2++;
    }
  }

  public previousPaginator2() {
    if (this.currentPage2 > 1) {
      this.currentPage2--;
    }
  }
Delete(obj:any){
  console.log(obj);
  this.listUsers=this.listUsers.filter(data1=>data1.id!=obj.id)
}
}
