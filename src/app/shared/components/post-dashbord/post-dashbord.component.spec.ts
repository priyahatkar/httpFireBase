import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDashbordComponent } from './post-dashbord.component';

describe('PostDashbordComponent', () => {
  let component: PostDashbordComponent;
  let fixture: ComponentFixture<PostDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
