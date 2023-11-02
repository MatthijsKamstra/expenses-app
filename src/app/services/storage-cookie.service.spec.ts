import { TestBed } from '@angular/core/testing';

import { StorageCookieService } from './storage-cookie.service';

describe('StorageCookieService', () => {
	let service: StorageCookieService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(StorageCookieService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
