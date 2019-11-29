import api from './my-fetch';

export const ProfileServer = {
  Login() {
    return api('login');
  },
  Tracker() {
    return api('tracker');
  },
  Friend() {
    return api('friend');
  },
  Logged_In: -1,
  Recent_Tracks: [],
};


//  Shape of a Profile
export class Profile {
    id;

    name;

    location;
}
