import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajustes2Page } from './ajustes2.page';

describe('Ajustes2Page', () => {
  let component: Ajustes2Page;
  let fixture: ComponentFixture<Ajustes2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ajustes2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ajustes2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
