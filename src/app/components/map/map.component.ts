import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Layer, MapOptions, latLng, tileLayer } from 'leaflet';
import { environment } from 'src/environments/environment';


@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

	@Input() layers: Layer[] = [];

	isHidden: boolean = false;
	height: number = 300;

	options: MapOptions = {
		layers: [
			tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '&copy; <a href="https://www.alliander">Alliander</a>' })
		],
		zoom: 8,
		center: latLng(52.297, 5.251)
	};


	DEFAULT_OFFSET: number = 100;
	MAX_HEIGHT: number = 300; //600;
	MIN_HEIGHT: number = 0;

	isFeatureMap: boolean = false;

	protected readonly environment = environment;

	constructor() { }

	ngOnInit(): void {
		this.isFeatureMap = this.environment.feature.map;
	}

	getHeightComponent() {
		return `height: ${this.height}px`
	}

	onViewPortBigger() {
		this.height += this.DEFAULT_OFFSET;
		this.isHidden = false;
		if (this.height >= this.MAX_HEIGHT) {
			this.height = this.MAX_HEIGHT;
		}
	}

	onViewPortSmaller() {
		this.height -= this.DEFAULT_OFFSET;
		if (this.height <= this.MIN_HEIGHT) {
			this.height = this.MIN_HEIGHT;
			this.isHidden = true;
		}
	}

	onViewPortOpen() {
		this.height = this.MAX_HEIGHT;
		this.isHidden = false;
	}
	onViewPortClose() {
		this.height = this.MIN_HEIGHT;
		this.isHidden = true;
	}

}
