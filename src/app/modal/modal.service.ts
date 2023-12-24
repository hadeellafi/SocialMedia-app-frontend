import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal.component';
import { BasicUserData } from '../Shared/BasicUserData.model';

@Injectable({ providedIn: 'root' })
export class ModalService {
    constructor(private modalService: NgbModal) { }

    openUserModal(currentId:string,users: BasicUserData[], title: string) {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.currentId=currentId;
        modalRef.componentInstance.users = users;
        modalRef.componentInstance.title = title;
    }
}
