import { Icon, Marker, icon, marker } from "leaflet";
import { IGeo } from "../interfaces/i-geo";

export class MarkerUtils {


	/**
	 *
	 * create markers based upon lon/lat
	 *
	 * @example
	 * ```
		this.layers = [];
		for (let i = 0; i < this.locationsArr.length; i++) {
			let geo: IGeo = LatLngUtils.getRandomLatLng();
			let mark = MarkerUtils.create(geo));
			this.layers.push(mark);
		}
	 * ```
	 *
	 * @returns
	 */
	static create(geo: IGeo): Marker {
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
