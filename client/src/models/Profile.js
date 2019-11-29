import api from './my-fetch';

export const ProfileServer = {
  Login() {
    return api('login-profile');
  },
  Tracker() {
    return api('tracker-profile');
  },
  Friend() {
    return api('friend-profile');
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
