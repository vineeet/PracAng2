import {Component} from '@angular/core' ;


@Component({
  selector:"user",
  templateUrl:`./user.component.html`
 
})
export class UserComponent
{
name:string;
EmailAddress:string;
UserAddress:Address;
Hobbies:string[];

constructor()
{
this.name='Vineet';
this.EmailAddress='v-vikum2@microsoft.com';
this.UserAddress={
HouseNo:'B-187/1',
Street:'21',
City:'New Delhi',
Pin:110096
};
this.Hobbies=['Music','Movies','Sports']

}

pushHobbies(Hobbie:string)
{
  (this.Hobbies.indexOf(Hobbie)==-1)?this.Hobbies.push(Hobbie):alert('already exists!');
    
    
}
removeHobbies(i:number)
{
  
this.Hobbies.splice(i,1);

}

}
interface Address{
HouseNo:string;
Street:string;
City:string;
Pin:number;

}