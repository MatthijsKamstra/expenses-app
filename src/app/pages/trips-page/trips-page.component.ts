import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Layer, MapOptions, latLng, tileLayer } from 'leaflet';
import { LocationsService } from 'src/app/services/locations.service';
import { SecurityService } from 'src/app/services/security.service';
import { StorageLocalService } from 'src/app/services/storage-local.service';

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

	constructor(
		private storageLocalService: StorageLocalService,
		private locationsService: LocationsService,
		private securityService: SecurityService,
		private router: Router,
	) { }


	ngOnInit(): void {

	}
}
