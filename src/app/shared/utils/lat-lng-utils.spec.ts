import { LatLngUtils } from './lat-lng-utils';

describe('LatLngUtils', () => {
	it('should generate a random latitude between 52.0 and 52.4999999', () => {
		const randomLatLng = LatLngUtils.getRandomLatLng();
		expect(randomLatLng.lat).toBeGreaterThanOrEqual(52.0);
		expect(randomLatLng.lat).toBeLessThanOrEqual(52.4999999);
	});

	it('should generate a random longitude between 3.6 and 2.4999999', () => {
		const randomLatLng = LatLngUtils.getRandomLatLng();
		expect(randomLatLng.lng).toBeGreaterThanOrEqual(2.4999999);
		expect(randomLatLng.lng).toBeLessThanOrEqual(3.6);
	});
});
