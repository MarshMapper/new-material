import { ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(defaultPageName) %>Component } from './<%= dasherize(defaultPageName.toLowerCase()) %>.component';
import { HttpClientModule } from '@angular/common/http';

describe('<%= classify(defaultPageName) %>Component', () => {
  let component: <%= classify(defaultPageName) %>Component;
  let fixture: ComponentFixture<<%= classify(defaultPageName) %>Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [<%= classify(defaultPageName) %>Component, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(<%= classify(defaultPageName) %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
