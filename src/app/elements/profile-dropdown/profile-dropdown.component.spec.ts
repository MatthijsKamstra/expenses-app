

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { SecurityService } from 'src/app/services/security.service';
import { IUser } from 'src/app/shared/interfaces/i-user';
import { IUSER, SPEC_CONST } from 'src/app/shared/test/spec-helpers/constants.spec-helper';
import { ProfileDropdownComponent } from './profile-dropdown.component';

describe('ProfileDropdownComponent (Generated)', () => {

	let component: ProfileDropdownComponent;
	let fixture: ComponentFixture<ProfileDropdownComponent>;

	let securityService: SecurityService;
	let securityServiceSpy: jasmine.SpyObj<SecurityService>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
			],
			declarations: [ProfileDropdownComponent],
			providers: [
				SecurityService,
				{
					provide: SecurityService,
					useValue: jasmine.createSpyObj('SecurityService', ['navigateToLogoutPage', 'checkNetManagementOrganisation', 'getUser'])
				}
			],
		}).compileComponents();
		//
		securityService = TestBed.inject(SecurityService);
		securityServiceSpy = TestBed.inject(SecurityService) as jasmine.SpyObj<SecurityService>;
		securityServiceSpy.checkNetManagementOrganisation.and.returnValue(of(false));

		let user: IUser = SPEC_CONST.getValue(IUSER);
		securityServiceSpy.getUser.and.returnValue(user);

		fixture = TestBed.createComponent(ProfileDropdownComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('ngOnInit', () => {
		it('should call checkNetManagement()', () => {
			const spy = spyOn(component, 'checkNetManagementOrganisation');

			component.ngOnInit();

			expect(spy).toHaveBeenCalledOnceWith();
		})
	})

	describe('checkNetManagementOrganisation', () => {
		it('should set isNetManagementOrganisation as true is securityService.checkNetManagementOrganisation() returns true', () => {
			securityServiceSpy.checkNetManagementOrganisation.and.returnValue(of(true));
			fixture.detectChanges();

			component.checkNetManagementOrganisation();

			expect(securityServiceSpy.checkNetManagementOrganisation).toHaveBeenCalled();
			expect(component.isNetManagementOrganisation).toBeTrue();
		})

		it('should set isNetManagementOrganisation as true is securityService.checkNetManagementOrganisation() returns true', () => {
			component.checkNetManagementOrganisation();

			expect(securityServiceSpy.checkNetManagementOrganisation).toHaveBeenCalled();
			expect(component.isNetManagementOrganisation).toBeFalse();
		})
	})

	// ----------------- ProfileDropdownComponent tests html template ----------------

	describe('ProfileDropdownComponent default html test', () => {

		it('#should be create with correct `data-testid="app-profile-dropdown"`', () => {
			// Arrange
			const _el: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-profile-dropdown"]')).nativeElement;
			// Act
			fixture.detectChanges();
			// Assert
			expect(_el).toBeTruthy();
		});

		it('should show the about link if isNetManagementOrganisation is true', () => {
			component.isNetManagementOrganisation = true;
			fixture.detectChanges();

			const about = fixture.debugElement.query(By.css('[data-testid="app-profile-dropdown-about"]'));

			expect(about).toBeTruthy();
		})

		it('should not show the about link if isNetManagementOrganisation is false', () => {
			component.isNetManagementOrganisation = false;
			fixture.detectChanges();

			const about = fixture.debugElement.query(By.css('[data-testid="app-profile-dropdown-about"]'));

			expect(about).toBeNull();
		})
	});

	// Test for interpolation {{  }}
	describe('ProfileDropdownComponent html {{  }}', () => {

		it('#should use `data-testid="app-profile-dropdown"` and change "Profile"', () => {
			// Arrange
			component.title = 'Profile';
			const _el: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-profile-dropdown"]')).nativeElement;
			// Act
			fixture.detectChanges();
			// Assert
			expect(_el.innerText.trim()).toBe('Profile');
		});

	});

});
