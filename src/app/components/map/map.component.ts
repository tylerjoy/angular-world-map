import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  constructor(private apiService: ApiServiceService) {}

  handlePathClick(event: MouseEvent) {
    const clickedPathId = (event.target as HTMLElement).getAttribute('id');
    console.log('Path Clicked:', clickedPathId);
    if (clickedPathId) {
      this.apiService
        .getApiData(clickedPathId)
        .subscribe((data) => console.log(data));
    } else {
      console.log('error');
    }
  }
}
