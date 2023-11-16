import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Icon, Layer, MapOptions, Marker, icon, latLng, marker, tileLayer } from 'leaflet';
import { pagesRoutes } from 'src/app/routes/pages.route';
import { LocationsService } from 'src/app/services/locations.service';
import { SecurityService } from 'src/app/services/security.service';
import { StorageLocalService } from 'src/app/services/storage-local.service';
import { Constants } from 'src/app/shared/constants/constants';
import { IGeo, IGeoPlus } from 'src/app/shared/interfaces/i-geo';
import { ILocation } from 'src/app/shared/interfaces/i-location';
import { LatLngUtils } from 'src/app/shared/utils/lat-lng-utils';

@Component({
	selector: 'app-dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {


	title: string = 'DashBoard';

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
	geo!: IGeoPlus | any;
	latitude!: number;
	longitude!: number;

	isSubmitDisabled: boolean = true;
	isPermission: boolean = false;


	constructor(
		private storageLocalService: StorageLocalService,
		private locationsService: LocationsService,
		private securityService: SecurityService,
	) { }

	ngOnInit(): void {
		var json = this.storageLocalService.getObject(Constants.LOCATION_CURRENT);
		if (json != null) {
			this.geo = json;
			var marker: Marker = this.createMarker(JSON.parse(this.geo));
			this.layers = [];
			this.layers.push(marker);
		} else {
			this.addMarkers();
		}
		this.initGeo();
	}

	initGeo() {
		// console.log('initGeo');
		navigator.permissions &&
			navigator.permissions.query({ name: 'geolocation' }).then((PermissionStatus) => {
				// console.log('xx');
				// console.log(PermissionStatus);

				if ('granted' === PermissionStatus.state) {
					// console.log('yes possible');



					// navigator.geolocation.getCurrentPosition(function (geoposition) {
					// 	console.log(geoposition) /* You can use this position without prompting the user if the permission had already been granted */
					// })
					this.geoFindMe();
				}
			})

	}

	openLink() {
		// 	mapLink.href = 'https://www.openstreetmap.org/#map=18/${latitude}/${longitude}';
		// 	mapLink.textContent = 'Latitude: ${latitude} °, Longitude: ${longitude} °';
		return 'https://www.ah.nl';
	}

	openMap() {
		window.open(`https://www.openstreetmap.org/#map=18/${this.latitude}/${this.longitude}`, "_blank");
	}

	getIcon(): string {
		return 'marker';
	}

	geoFindMe() {
		// console.log('geoFindMe()');
		if (navigator.geolocation == null) {
			this.mapFeedback = "Geolocation is not supported by your browser";
		} else {
			this.mapFeedback = "Locating...";
			navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
				this.isPermission = true;
				// console.log('success');
				this.latitude = position.coords.latitude;
				this.longitude = position.coords.longitude;
				this.mapFeedback = "";
				this.isSubmitDisabled = false;
				this.mapLink = `Latitude: ${this.latitude}°, Longitude: ${this.longitude}°`;
				// 	mapLink.href = 'https://www.openstreetmap.org/#map=18/${latitude}/${longitude}';
				// 	mapLink.textContent = 'Latitude: ${latitude} °, Longitude: ${longitude} °';

				var geo: IGeoPlus = {
					lat: this.latitude,
					lng: this.longitude,
					zoom: 1,
					coords: position.coords,
					position: position
				}
				var marker: Marker = this.createMarker(geo);
				this.layers = [];
				this.layers.push(marker);

				this.storageLocalService.setObject(Constants.LOCATION_CURRENT, geo);

				// this.geo = JSON.stringify(geo);

			}, (e: GeolocationPositionError) => {
				console.log('error');
				this.mapFeedback = "Unable to retrieve your location";
			});
		}
	}

	submit() {
		let obj: ILocation = {
			date: new Date(),
			latitude: this.latitude,
			longitude: this.longitude,
		}
		this.locationsService.setLocation(obj).subscribe({
			next: (data: any) => {
				console.log(data);
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
		for (let i = 0; i < 10; i++) {
			// voorlopig even in de zee gooien
			// { "lat": 52.442929071469806, "lng": 4.256211746387448 }
			let geo: IGeo = LatLngUtils.getRandomLatLng();
			let mark = marker([geo.lat, geo.lng], {
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

	createMarker(geo: IGeo): Marker {
		let mark = marker([geo.lat, geo.lng], {
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
		return mark;
	}
}
