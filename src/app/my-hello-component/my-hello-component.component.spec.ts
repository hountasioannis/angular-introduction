import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHelloComponentComponent } from './my-hello-component.component';

describe('MyHelloComponentComponent', () => {
  let component: MyHelloComponentComponent;
  let fixture: ComponentFixture<MyHelloComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHelloComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHelloComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
