import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name: 'paginatorPipe'
/* pure: false */
})
export class PaginatorPipe implements PipeTransform {
transform(value: any, posicion: any): any {
    const fin = posicion * 5;
    const inicio = (posicion * 5) - 5;
    return value.slice(inicio, fin);
}

}
