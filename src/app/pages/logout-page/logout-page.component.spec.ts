import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { NgxTranslateModule } from 'src/app/module/translate/translate.module';
import { SecurityService } from 'src/app/services/security.service';
import { Redirects } from 'src/app/shared/constants/redirects';

import { LogoutPageComponent } from './logout-page.component';

describe('LogoutPageComponent', () => {
  let component: LogoutPageComponent;
  let fixture: ComponentFixture<LogoutPageComponent>;

  let httpTestingController: HttpTestingController;
  let routerSpy: jasmine.SpyObj<Router>;
  let securityServiceSpy: jasmine.SpyObj<SecurityService>;;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        NgxTranslateModule
      ],
      declarations: [ LogoutPageComponent ],
      providers: [
        {
					provide: Router,
					useValue: jasmine.createSpyObj('Router', ['navigate'])
				},
				{
					provide: SecurityService,
					useValue: jasmine.createSpyObj('SecurityService', ['clearLocalSession', 'usesExternalAuthentication', 'externalAuthenticationLogoutUrl', 'logout'])
				}
      ]
    })
    .compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
		securityServiceSpy = TestBed.inject(SecurityService) as jasmine.SpyObj<SecurityService>;

    securityServiceSpy.usesExternalAuthentication.and.returnValue(of(true));
    securityServiceSpy.logout.and.returnValue(of({}));

    fixture = TestBed.createComponent(LogoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear session and check for use of external authentication', () => {
    expect(securityServiceSpy.clearLocalSession).toHaveBeenCalledOnceWith();
    expect(securityServiceSpy.usesExternalAuthentication).toHaveBeenCalledOnceWith();
  })

  it('should navigate to external logout url if using external authentication', () => {
    securityServiceSpy.externalAuthenticationLogoutUrl.and.returnValue(of('/web-net-management/logout'));
    fixture.detectChanges();

    component.ngOnInit();

    expect(securityServiceSpy.externalAuthenticationLogoutUrl).toHaveBeenCalledWith();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/logout']);
  })

  it('should call logout and navigate to logout page if not using external authentication', () => {
    securityServiceSpy.usesExternalAuthentication.and.returnValue(of(false));
    fixture.detectChanges();

    component.ngOnInit();

    expect(securityServiceSpy.logout).toHaveBeenCalledWith();
    expect(routerSpy.navigate).toHaveBeenCalledWith([Redirects.REDIRECT_LOGIN]);
  })
});
