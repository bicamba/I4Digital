import { Component, OnInit } from '@angular/core';
import { RunEnumService } from 'src/app/enum/run-enum.service';
import { RunServeService } from 'src/app/services/services/run-serve.service';
import { AlertsService } from 'src/app/services/sweet-alert/alerts.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  listPublications: any[] = [];

  public currentPage = 1;
  public currentPage2 = 1;
  public paginateData2: any = [];
  filterData2: any;
  public labelFilter2 = [
    'id',
    'title',
    'body',
  ];

  id: number = 0;
  title: string = '';
  body: string = '';

  constructor(private runServe: RunServeService, private alertsService: AlertsService) {
    this.getPublications();
  }


  ngOnInit(): void {
  }

  async getPublications() {
    let data;
    fetch(RunEnumService.get_posts)
      .then(async response => {
        data = await response.json();
        this.listPublications = data; 
        this.resetPaginator2();
      })
      .then(json => console.log(json));
  }

  async addPublications() {

    if ((this.title.length > 0 && this.title != undefined && this.title != null) &&
      (this.body.length > 0 && this.body != undefined && this.body != null)) {
      const data = {
        id: 1,
        title: this.title,
        body: this.body
      };
      let data2;
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          id: 1,
          title: this.title,
          body: this.body,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(async response => {
        data2 = await response.json();
        this.resetPaginator2();
        this.getPublications();
        if (data2.title && data2.body) {
          this.alertsService.successAlert("Creación exitosa.");
          this.title = '';
          this.body = '';
          console.log(data2);
        } else {
          this.alertsService.dangerAlert('Error.', "Error al crear.");
        }
      })
        .then(json => console.log(json));


    } else {
      this.alertsService.dangerAlert('Error.', 'Todos los campos son obligatorios.');
    }
  }

  public resetPaginator2() {
    this.paginateData2 = [];
    for (let i = 1; i <= Math.ceil(this.listPublications.length / 5); i++) {
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
  public Update(obj: any) {
    this.id = obj.id;
    this.title = obj.title;
    this.body = obj.body;
  }

  cleanUpdate() {
    this.id = 0;
    this.title = '';
    this.body = '';
  }
  updateArray() {
    this.listPublications = this.listPublications.filter(publication => publication.id != this.id);
    this.listPublications.push({ id: this.id, title: this.title, body: this.body });
    this.cleanUpdate();
  }
}
