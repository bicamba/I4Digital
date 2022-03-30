import { Injectable } from '@angular/core';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';


/* import Swal from 'sweetalert2'; */
// ES6 Modules or TypeScript 
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() {
 
  }


  successAlert(msj: string) {
  Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msj,
      showConfirmButton: false,
      timer: 1500
    });  
  }

  dangerAlert(title: string, msj: string) {
     Swal.fire({
      icon: "error",
      title: title,
      text: msj,
      showDenyButton: false,
      showCancelButton: false
    }); 
  }

}
