import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Icon, Layer, MapOptions, Marker, icon, latLng, marker, tileLayer } from 'leaflet';
import { LocationsService } from 'src/app/services/locations.service';
import { SecurityService } from 'src/app/services/security.service';
import { StorageLocalService } from 'src/app/services/storage-local.service';
import { IGeo, IGeoPlus } from 'src/app/shared/interfaces/i-geo';
import { ILocations } from 'src/app/shared/interfaces/i-locations';
import { LatLngUtils } from 'src/app/shared/utils/lat-lng-utils';

@Component({
	selector: 'app-locations-page',
	templateUrl: './locations-page.component.html',
	styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {

	title: string = 'Locations';

	options: MapOptions = {
		layers: [
			tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; <a href="https://www.alliander">Alliander</a>' })
		],
		zoom: 8,
		center: latLng(52.297, 5.251)
	};
	layers: Layer[] = [];

	mapLink: string = '';
	mapFeedback: string = '';
	isSubmitDisabled: boolean = true;

	geo!: IGeoPlus | any;
	locationsArr: ILocations[] = [];

	constructor(
		private locationsService: LocationsService,
		private securityService: SecurityService
	) { }

	ngOnInit(): void {
		let token = this.securityService.currentToken();

		this.locationsService.getLocations(token).subscribe({
			next: (data: any) => {
				// console.log(data);
				this.locationsArr = data.content;
				// console.log(this.locationsArr);
				this.addMarkers();
			},
			error: (error: HttpErrorResponse) => {
				console.warn(error);
			},
			complete: () => {
				console.info('done');
			}
		});
	}


	addMarkers() {
		this.layers = [];
		for (let i = 0; i < this.locationsArr.length; i++) {
			const location: ILocations = this.locationsArr[i];
			// voorlopig even in de zee gooien
			// { "lat": 52.442929071469806, "lng": 4.256211746387448 }
			// let geo: IGeo = LatLngUtils.getRandomLatLng();
			let mark = marker([location.latitude, location.longitude], {
				icon: icon({
					...Icon.Default.prototype.options,
					iconUrl: 'assets/marker-icon.png',
					iconRetinaUrl: 'assets/marker-icon-2x.png',
					shadowUrl: 'assets/marker-shadow.png'
				})
			});
			// mark.bindPopup(`${iDevice.container.street} ${iDevice.container.number}<br/>${iDevice.container.city}`);
			mark.bindPopup(`hi<br/>foo`);
			mark.openPopup();
			this.layers.push(mark);
		}
	}

	// createMarker(geo: IGeo): Marker {
	// 	let mark = marker([geo.lat, geo.lng], {
	// 		icon: icon({
	// 			...Icon.Default.prototype.options,
	// 			iconUrl: 'assets/marker-icon.png',
	// 			iconRetinaUrl: 'assets/marker-icon-2x.png',
	// 			shadowUrl: 'assets/marker-shadow.png'
	// 		})
	// 	});
	// 	// mark.bindPopup(`${iDevice.container.street} ${iDevice.container.number}<br/>${iDevice.container.city}`);
	// 	mark.bindPopup(`hi<br/>foo`);
	// 	mark.openPopup();
	// 	return mark;
	// }
}
