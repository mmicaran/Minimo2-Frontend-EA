import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddStudentModalPage } from './add-student-modal.page';

describe('AddStudentModalPage', () => {
  let component: AddStudentModalPage;
  let fixture: ComponentFixture<AddStudentModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStudentModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
