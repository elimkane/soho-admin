import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersinitComponent } from './users.component';

describe('UsersinitComponent', () => {
  let component: UsersinitComponent;
  let fixture: ComponentFixture<UsersinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersinitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
