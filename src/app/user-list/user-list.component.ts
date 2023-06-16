import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserServiceService } from '../user-service.service';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [ 'name','gender','email','status', 'actions'];
  id!: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selectedUser: any;
  view: boolean=false;
  newUser: any = {
    name: '',
    email: '',
    id:'',
    gender: '',
    status: ''
  };
 addUser:any=[];


  constructor(private http: HttpClient,private userservice: UserServiceService) {}
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<any>();
    this.getData();
    
  }
  
//  https://jsonplaceholder.typicode.com/users
  
  getData() {
    // this.http.get(' https://gorest.co.in/public/v2/users ')
    //   .subscribe(
    //     (response: any) => {
    //       console.log(response);
          this.dataSource = new MatTableDataSource<any>(this.userservice.show());
          this.dataSource.paginator = this.paginator;
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );
  }
  
  DeleteUser(element:any){
    this.userservice.DeleteUser(element);
    this.getData();
  }
  editUser(element:any){
    
    this.newUser=element;
    // this.userservice.DeleteUser(element);
    this.userservice.editUser(this.newUser);
  }
  viewUser(element:any){
    this.selectedUser = element;
    // console.log(this.selectedUser)
    this.view=true;


  }
  
  onsubmit(addUser:NgForm) {
    // console.log(addUser)
    // console.log(this.addUser)
    this.userservice.addUser(addUser);
    
    this.getData();
  }
  
  

}
