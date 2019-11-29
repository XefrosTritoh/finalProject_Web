import Tracker from './Tracker';


export const Profile_Client = {
  Profile: [
    { id: 0, name: 'Xefros', location: 'Alternia' },
    { id: 1, name: 'Joey', location: 'Earth' },
    { id: 2, name: 'Jude', location: 'Earth' },
    { id: 3, name: 'Tetrarch', location: 'Alternia' },

  ],
  Logged_In: -1,
  Recent_Tracks: [],
};

export var Recent_Tracks = [


];


export class Profile {
    id;

    name;

    location;
}
