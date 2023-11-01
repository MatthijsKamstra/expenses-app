import { environment } from 'src/environments/environment';
import { Environment } from '../shared/interfaces/i-environment';
import { Api } from './api';

describe('Api', () => {
	let environmentCopy: Environment = Object.assign({}, environment);

	afterAll(() => {
		environment.apiEnabled = environmentCopy.apiEnabled;
		environment.apiUrl = environmentCopy.apiUrl;
	})

	it('should create an instance', () => {
		expect(new Api()).toBeTruthy();
	});

	describe('deviceTariffstatus', () => {
		it('should return url with encoded correlationUid if apiEnabled and has correlationUid', () => {
			environment.apiEnabled = true;
			const id = '1';
			const correlationUid = 'LianderNetManagement|||202306010914';

			const url = Api.getUrl().deviceTariffstatus(id, correlationUid);

			expect(url).toEqual(environment.apiUrl + '/devices/1/tariffstatus/LianderNetManagement%7C%7C%7C202306010914');
		})
	})

	describe('deviceStatus', () => {
		it('should return url with encoded correlationUid if apiEnabled and has correlationUid', () => {
			environment.apiEnabled = true;
			const id = '1';
			const correlationUid = 'LianderNetManagement|||202306010914';

			const url = Api.getUrl().deviceStatus(id, correlationUid);

			expect(url).toEqual(environment.apiUrl + '/devices/1/status/LianderNetManagement%7C%7C%7C202306010914');
		})
	})

	describe('deviceHistoryBurninghours', () => {
		it('should return url with encoded correlationUid if apiEnabled and has correlationUid', () => {
			environment.apiEnabled = true;
			const id = '1';
			const correlationUid = 'LianderNetManagement|||202306010914';

			const url = Api.getUrl().deviceHistoryBurninghours(id, correlationUid);

			expect(url).toEqual(environment.apiUrl + '/devices/1/burninghours/LianderNetManagement%7C%7C%7C202306010914');
		})
	})

	describe('deviceHistory', () => {
		it('should return url with encoded correlationUid if apiEnabled and has correlationUid', () => {
			environment.apiEnabled = true;
			const id = '1';
			const correlationUid = 'LianderNetManagement|||202306010914';

			const url = Api.getUrl().deviceHistory(id, correlationUid);

			expect(url).toEqual(environment.apiUrl + '/devices/1/history/LianderNetManagement%7C%7C%7C202306010914');
		})
	})
});
