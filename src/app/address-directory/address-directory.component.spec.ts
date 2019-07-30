import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDirectoryComponent } from './address-directory.component';

describe('AddressDirectoryComponent', () => {
  let component: AddressDirectoryComponent;
  let fixture: ComponentFixture<AddressDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
