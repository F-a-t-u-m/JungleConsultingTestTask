import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReposService } from 'src/app/services/repos.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  login: any;
  repos: any[] = [];
  selectedRepo: any = {};
  bsModalRef: BsModalRef | undefined;

  constructor(
    private route: ActivatedRoute,
    private reposService: ReposService,
    private usersService: UsersService,
    private modal: BsModalService
  ) { }

  ngOnInit(): void {
    this.login = this.route.snapshot.paramMap.get('login');
    this.loadRepos();
  }

  loadRepos() {
    this.reposService.getRepos(this.login).subscribe({
      next: (data) => {
        this.repos = data;
        console.log(this.repos);
      }
    })
  }

  showModal(repo: any) {
    this.selectedRepo = repo;
    this.bsModalRef = this.modal.show(ModalComponent, { initialState: { repo: this.selectedRepo } });
  }
}
