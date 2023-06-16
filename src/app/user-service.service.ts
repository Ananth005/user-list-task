import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private users: any[] = [
    {
      email: 'jha_somnath@romaguera-stanton.test',
      gender: 'male',
      id: 2918271,
      name: 'Somnath Jha',
      status: 'active'
    },
    {
      email: 'rev_mahajan_dharmaketu@kulas-stroman.example',
      gender: 'female',
      id: 2918268,
      name: 'Rev. Dharmaketu Mahajan',
      status: 'inactive'
    },
    {
      email:"chopra_kanishka@damore.example",
      gender: 'female',
      id:2918267,
      name:"Kanishka Chopra",
      status: "inactive"
    },
    {
      email: "malik_dhruv@denesik.test",
      gender: "female",
      id: 2918266,
      name: "Dhruv Malik",
      status: "inactive"
    },
    {
      email: "amarnath_gandhi@bradtke.example",
      gender: "male",
      id: 2918265,
      name: "Amarnath Gandhi",
      status: "active"
    },
    {
      email: "sushma_achari@barrows-purdy.example",
      gender: "male",
      id: 2918264,
      name: "Sushma Achari",
      status: "active"
    },
    {
      email: "ii_verma_ganaka@hermann.example",
      gender: "male",
      id: 2918263,
      name: "Ganaka Verma II",
      status: "inactive"
    },
    {
      email: "abbott_ambar@heaney-cummerata.example",
      gender: "female",
      id: 2918261,
      name: "Ambar Abbott",
      status: "inactive"
    },
    {
      email: "chopra_agrata_prof@witting-macgyver.example",
      gender: "female",
      id: 2918260,
      name: "Prof. Agrata Chopra",
      status: "inactive"
    },
    {
      email: "achari_bhanumati@oberbrunner-mcclure.test",
      gender: "female",
      id: 2918259,
      name: "Bhanumati Achari",
      status: "active"
    }

  ];



  constructor(private http: HttpClient) { }

  DeleteUser(element: any) {
    // const url = 'https://gorest.co.in/public/v2/users/' + element.id;
    // this.http.delete(url)
    //   .subscribe(
    //     (response: any) => {
    //       console.log(response);
    //       // console.log(url)
    //     },
    //     (error) => {
    //       // Handle any errors
    //       console.error(error);
    //     }
    //   );
    // // console.log(element.id);
    alert("the user " + element.name + " has been deleted from the table")
    const id=element.id
    const index = this.users.findIndex(obj => obj.id === id);
    if (index !== -1) {
      this.users = this.users.filter(obj => obj.id !== id);



    }
    console.log(this.users);
    return this.users

  }
  editUser(newUser: any) {
    // const url = 'https://gorest.co.in/public/v2/users/' + element.id;
    // this.http.put(url, element)
    //   .subscribe(
    //     (response: any) => {
    //       // Handle the API response
    //       console.log(response);

    //     },
    //     (error) => {
    //       // Handle any errors
    //       console.error(error);
    //     }
    //   );
    // console.log(url);
    // alert("you can edit the details of the user " + element.name)
    
    this.users.push(newUser.value);
 }
 show(){
  // console.log(this.users)
  return this.users
 }
 addUser(addUser: any) {
  this.users.push(addUser.value);
  console.log(this.users)
}
}
