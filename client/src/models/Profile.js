import api from './my-fetchProfile';

export const ProfileServer = {
  Login(id) {
    api('login-profile', id);
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
