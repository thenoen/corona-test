import { Pipe, PipeTransform } from '@angular/core';
import { Drivein } from './model/Drivein';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(driveIns: Drivein[], searchInput: string): any[] {
        if (!searchInput || searchInput.length < 3) {
            return [];
        }
        // console.log(searchInput.length);
        searchInput = searchInput.toLowerCase();
        return driveIns.filter(
            x => {
                // console.log(x.street_name);
                let street = x.street_name == null ? "" : x.street_name;
                return x.city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchInput) ||
                street.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchInput)
            }
        )
    }
}