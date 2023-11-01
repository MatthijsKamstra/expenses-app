
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { GuardTestComponent } from 'src/app/elements/test/guard-test/guard-test.component';
import { TranslationDropdownComponent } from 'src/app/elements/translation-dropdown/translation-dropdown.component';
import { SecurityService } from 'src/app/services/security.service';
import { Environment } from 'src/app/shared/interfaces/i-environment';
import { environment } from 'src/environments/environment';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent (Generated)', () => {

	let component: LoginPageComponent;
	let fixture: ComponentFixture<LoginPageComponent>;

	const environmentCopy: Environment = Object.assign({}, environment);

	let securityServiceSpy: jasmine.SpyObj<SecurityService>;
	//
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				TranslateModule.forRoot(),
			],
			declarations: [
				LoginPageComponent
			],
			providers: [
				{
					provide: SecurityService,
					useValue: jasmine.createSpyObj('SecurityService', ['usesExternalAuthentication'])
				}
			],
		}).compileComponents();

		securityServiceSpy = TestBed.inject(SecurityService) as jasmine.SpyObj<SecurityService>;

		securityServiceSpy.usesExternalAuthentication.and.returnValue(of(true));

		fixture = TestBed.createComponent(LoginPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterAll(() => {
		environment.apiEnabled = environmentCopy.apiEnabled;
		environment.production = environmentCopy.production;
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('ngOnInit', () => {
		it('should set usesExternalAuthentication to true', () => {
			securityServiceSpy.usesExternalAuthentication.and.returnValue(of(true));

			component.ngOnInit();

			expect(securityServiceSpy.usesExternalAuthentication).toHaveBeenCalled();
			expect(component.usesExternalAuthentication).toBeTrue();
		})

		it('should set usesExternalAuthentication to false', () => {
			securityServiceSpy.usesExternalAuthentication.and.returnValue(of(false));

			component.ngOnInit();

			expect(securityServiceSpy.usesExternalAuthentication).toHaveBeenCalled();
			expect(component.usesExternalAuthentication).toBeFalse();
		})
	})

	describe('login component', () => {
		it('should not be external if usesExternalAuthentication is false', () => {
			component.usesExternalAuthentication = false;
			fixture.detectChanges();

			const login = fixture.debugElement.query(By.css('[data-testid="login"]'));
			const loginExternal = fixture.debugElement.query(By.css('[data-testid="loginExternal"]'));

			expect(login).toBeTruthy();
			expect(loginExternal).toBeNull();
		});

	});

	it('should be external if usesExternalAuthentication is true', () => {
		component.usesExternalAuthentication = true;
		fixture.detectChanges();

		const login = fixture.debugElement.query(By.css('[data-testid="login"]'));
		const loginExternal = fixture.debugElement.query(By.css('[data-testid="loginExternal"]'));

		expect(login).toBeNull();
		expect(loginExternal).toBeTruthy();
	});

	// ----------------- LoginPageComponent tests html template ----------------

	describe('LoginPageComponent default html test', () => {

		it('#should be created with correct `data-testid="app-login-page"`', () => {
			// Arrange
			const _el: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-login-page"]')).nativeElement;
			// Act
			fixture.detectChanges();
			// Assert
			expect(_el).toBeTruthy();
		});

		it('#should be created with correct `data-testid="app-login-page-translation-dropdown"`', () => {
			// Arrange
			const _el: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-login-page-translation-dropdown"]')).nativeElement;
			// Act
			fixture.detectChanges();
			// Assert
			expect(_el).toBeTruthy();
		});

		it('#should be created with correct `data-testid="app-login-page-footer"`', () => {
			// Arrange
			const _el: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-login-page-footer"]')).nativeElement;
			// Act
			fixture.detectChanges();
			// Assert
			expect(_el).toBeTruthy();
		});
	});


	// add test from input/output/interpolation


	// Test for interpolation {{  }}
	describe('LoginPageComponent html {{  }}', () => {

		it('#should use `data-testid="app-login-page-h1"` and change "HOME_TITLE', () => {
			// Arrange
			const _el: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-login-page-h1"]')).nativeElement;
			// Act
			fixture.detectChanges();
			// Assert
			expect(_el).toBeTruthy();
			expect(_el.innerHTML).toBe('HOME_TITLE');
		});

		it('#should use `data-testid="app-login-page-p"` and change "HOME_P_ONE"', () => {
			// Arrange
			const _el: HTMLElement = fixture.debugElement.query(By.css('[data-testid="app-login-page-p"]')).nativeElement;
			// Act
			fixture.detectChanges();
			// Assert
			expect(_el).toBeTruthy();
			expect(_el.innerHTML).toBe('HOME_P_ONE');
		});

	});

	// Test for components
	describe('LoginPageComponent html components', () => {

		it('#should check for "app-login-page-translation-dropdown" (TranslationDropdown>/translationDropdown>Component) and additional inputs', () => {
			// Arrange
			const _TranslationDropdownComponent: TranslationDropdownComponent = fixture.debugElement.query(By.css('[data-testid="app-login-page-translation-dropdown"]')).nativeElement;
			// Act
			fixture.detectChanges();
			// Assert
			expect(_TranslationDropdownComponent).toBeTruthy();

		});

		it('#should check for "app-login-page-guardtest" (GuardTest>/guardTest>Component) and additional inputs', () => {
			// Arrange
			environment.production = false;
			// Act
			fixture.detectChanges();
			const _guardTestComponent: GuardTestComponent = fixture.debugElement.query(By.css('[data-testid="app-login-page-guardtest"]')).nativeElement;
			// Assert
			expect(_guardTestComponent).toBeTruthy();
		});

		it('#should check for "app-login-page-footer" (Footer>/footer>Component) and additional inputs', () => {
			// Arrange
			const _footerComponent: FooterComponent = fixture.debugElement.query(By.css('[data-testid="app-login-page-footer"]')).nativeElement;
			// Act
			fixture.detectChanges();
			// Assert
			expect(_footerComponent).toBeTruthy();
		});

	});
});
