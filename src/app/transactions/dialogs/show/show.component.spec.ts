import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDialogComponent } from './show.component';

describe('DeleteComponent', () => {
  let component: ShowDialogComponent;
  let fixture: ComponentFixture<ShowDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ShowDialogComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
