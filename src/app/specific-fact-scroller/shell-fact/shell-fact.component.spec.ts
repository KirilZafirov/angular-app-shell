/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShellFactComponent } from './shell-fact.component';

describe('ShellFactComponent', () => {
  let component: ShellFactComponent;
  let fixture: ComponentFixture<ShellFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
