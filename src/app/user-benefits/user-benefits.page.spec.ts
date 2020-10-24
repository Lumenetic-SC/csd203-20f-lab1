import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserBenefitsPage } from './user-benefits.page';

describe('UserBenefitsPage', () => {
  let component: UserBenefitsPage;
  let fixture: ComponentFixture<UserBenefitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBenefitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserBenefitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
