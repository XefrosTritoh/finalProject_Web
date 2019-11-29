import Profile from './Profile';

export const Friend_Server = {

    Friend: [
    { id: 0, friendId: [1, 2] },
    { id: 1, friendId: [0] },
    { id: 2, friendId: [0] } 
],
  

  Get_Friend()
};

export const Friend_Client = {
    Friend: [
    { id: 0, friendName: [Profile[1].name, Profile[2].name] },
    { id: 1, friendName: [Profile[0].name] },
    { id: 2, friendName: [Profile[0].name] }
]

};

export var My_Friends = {

};

export class Friend {
    id;

    friendId = [];

    friendName;
}
