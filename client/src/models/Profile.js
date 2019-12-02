import { api, User } from './my-fetchProfile';
import $router from "../router/index"

export const ProfileServer = {
  login(id) {
    api('login', { id } );

    //User.User_Id = id;
    //$router.push( {name: 'profile'})
    //this.Logged_In = id;
  },
  Tracker() {
    return api('tracker');
  },
  Friend() {
    return api('friend');
  },
  Logged_In: 0,
  Recent_Tracks: [],
};


//  Shape of a Profile
export class Profile {
    id;
    name;
    location;
}
