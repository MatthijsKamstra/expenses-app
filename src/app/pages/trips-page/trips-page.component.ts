import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Layer, MapOptions, latLng, tileLayer } from 'leaflet';
import { LocationsService } from 'src/app/services/locations.service';
import { SecurityService } from 'src/app/services/security.service';
import { StorageLocalService } from 'src/app/services/storage-local.service';
import { TripsService } from 'src/app/services/trips.service';
import { IGeo } from 'src/app/shared/interfaces/i-geo';
import { ITrip } from 'src/app/shared/interfaces/i-trips';
import { LatLngUtils } from 'src/app/shared/utils/lat-lng-utils';
import { MarkerUtils } from 'src/app/shared/utils/marker-utils';

@Component({
	selector: 'app-trips-page',
	templateUrl: './trips-page.component.html',
	styleUrls: ['./trips-page.component.scss']
})
export class TripsPageComponent implements OnInit {

	title: string = 'Trips';

	options: MapOptions = {
		layers: [
			tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; <a href="https://www.alliander">Alliander</a>' })
		],
		zoom: 8,
		center: latLng(52.297, 5.251)
	};
	layers: Layer[] = [];

	tripsArr!: ITrip[];

	constructor(
		private storageLocalService: StorageLocalService,
		private locationsService: LocationsService,
		private securityService: SecurityService,
		private router: Router,
		private tripsService: TripsService,
	) { }


	ngOnInit(): void {
		this.tripsService.getTrips().subscribe({
			next: (data: any) => {
				console.log(data);
				this.tripsArr = data.content;
				// // console.log(this.locationsArr);
				this.addMarkers();
			},
			error: (error: HttpErrorResponse) => {
				console.warn(error);
			},
			complete: () => {
				// console.info('done');
			}
		});
	}

	addMarkers() {
		this.layers = [];
		for (let i = 0; i < this.tripsArr.length; i++) {
			let t = this.tripsArr[i];
			let geo: IGeo = {
				lat: t.latitude,
				lng: t.longitude
			};
			let mark = MarkerUtils.create(geo);
			this.layers.push(mark);
		}
	}
}
