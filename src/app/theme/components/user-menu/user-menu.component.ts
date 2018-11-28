import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserMenuComponent implements OnInit {
  public userImage = '../assets/img/users/nm.jpg';

  @ViewChild('changepasswordModal') public changepasswordModal: ModalDirective;
  @ViewChild('profileModal') public profileModal: ModalDirective;

  changepasswordModalToggle(e)
  {
    if(e==1){
      this.changepasswordModal.show();
    }
    else{
      this.changepasswordModal.hide();
    }
  }

  profileModalToggle(e)
  {
    if(e==1){
      this.profileModal.show();
    }
    else{
      this.profileModal.hide();
    }
  }

  
  constructor() { }

  ngOnInit() {

    
  }

}
