import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MySightingsPage } from './my-sightings.page';

describe('MySightingsPage', () => {
  let component: MySightingsPage;
  let fixture: ComponentFixture<MySightingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MySightingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
