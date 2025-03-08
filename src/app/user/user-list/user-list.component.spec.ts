import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    }).compileComponents();
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' }
    ]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsers', () => {
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  });

  it('should retrieve users from service when the refresh button is clicked', () => {
    fixture.detectChanges();
    userServiceSpy.calls.reset();
    const refreshButton = fixture.nativeElement.querySelector('button');
    refreshButton.triggerEventHandler('click', null);

    expect(userServiceSpy).toHaveBeenCalled();
  })


});
