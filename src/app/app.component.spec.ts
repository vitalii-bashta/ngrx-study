import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
	TestBed.configureTestingModule({
		imports: [
		RouterTestingModule
		],
		declarations: [
		AppComponent
		],
	}).compileComponents();
  }));

  it('should create the app', () => {
	const fixture: any = TestBed.createComponent(AppComponent);
	const app: any = fixture.debugElement.componentInstance;
	expect(app).toBeTruthy();
  });

  it(`should have as title 'ngrx-test'`, () => {
	const fixture: any = TestBed.createComponent(AppComponent);
	const app: any = fixture.debugElement.componentInstance;
	expect(app.title).toEqual('ngrx-test');
  });

  it('should render title', () => {
	const fixture: any = TestBed.createComponent(AppComponent);
	fixture.detectChanges();
	const compiled: any = fixture.debugElement.nativeElement;
	expect(compiled.querySelector('.content span').textContent).toContain('ngrx-test app is running!');
  });
});
