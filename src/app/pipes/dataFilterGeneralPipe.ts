import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dataFilterGeneral'
})
export class DataFilterGeneralPipe implements PipeTransform {
    arrayInfo = [];

    transform(array: any[], query: string, columna: any[]): any {

        if (this.arrayInfo.length === 0) {
            this.arrayInfo = JSON.parse(JSON.stringify(array));
        }
        let valorFinal:any = [];
        if (query && columna) {
            for (const col of columna) {
                _.filter(array, (row: any) => {
                    if (row[col]) {
                        if (row[col].toString().toUpperCase().startsWith(query.toUpperCase())) {
                            if (this.validaArray(valorFinal, row)) {
                                valorFinal.push(row);
                            }
                        }
                    }
                });
            }
        } else {
            this.arrayInfo = [];
            valorFinal = array;
        }

        return valorFinal;
    }


    public validaArray(array: any, row: any): boolean {
        let valido = true;
        for (const col of array) {
            if (JSON.stringify(row) === JSON.stringify(col)) {
                valido = false;
                break;
            }
        }
        return valido;
    }
}