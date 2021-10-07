import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargalleryComponent } from './cargallery.component';

describe('CargalleryComponent', () => {
  let component: CargalleryComponent;
  let fixture: ComponentFixture<CargalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
