import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSubjectModalPage } from './add-subject-modal.page';

describe('AddSubjectModalPage', () => {
  let component: AddSubjectModalPage;
  let fixture: ComponentFixture<AddSubjectModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubjectModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSubjectModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
