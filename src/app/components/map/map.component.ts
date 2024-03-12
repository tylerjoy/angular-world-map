import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  countryData: any = {};

  constructor(private apiService: ApiService) {}

  handlePathClick(event: MouseEvent) {
    const clickedPathId = (event.target as HTMLElement).getAttribute('id');
    console.log('Path Clicked:', clickedPathId);
    if (clickedPathId) {
      this.apiService.getApiData(clickedPathId).subscribe((data) => {
        this.countryData = data;
        console.log(data);
      });
    } else {
      console.log('error');
    }
  }
}
