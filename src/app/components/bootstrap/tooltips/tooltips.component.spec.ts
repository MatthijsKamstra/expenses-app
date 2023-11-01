import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipsComponent } from './tooltips.component';

xdescribe('TooltipsComponent', () => {
	let component: TooltipsComponent;
	let fixture: ComponentFixture<TooltipsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TooltipsComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(TooltipsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
