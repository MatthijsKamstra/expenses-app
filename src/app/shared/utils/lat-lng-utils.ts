export class LatLngUtils {

	/**
	 *
	 * local test data has some null values, so this is a fix to place the items in de sea
	 *
	 * @example
	 * ```
	 * 		const randomLatLng = LatLngUtils.getRandomLatLng();
	 *  	console.log(randomLatLng);
	 * ```
	 *
	 * @returns
	 */
	static getRandomLatLng(): { lat: number, lng: number } {
		// Generate a random latitude between
		const minLat = 52.0;
		const maxLat = 52.4999999;
		const randomLat = Math.random() * (maxLat - minLat) + minLat;

		// Generate a random longitude between
		const minLng = 2.4999999;
		const maxLng = 3.6;
		const randomLng = Math.random() * (maxLng - minLng) + minLng;

		return {
			lat: randomLat,
			lng: randomLng
		};
	}


}
