import api from './my-fetch';

export const FriendServer = {
  
Find(){
    return api('/find')
},
Add(){
    return api('/add')
},
Delete(){
    return api('/delete')
},
}; 


export class Friend {
    id;

    friendId = [];

    friendName;
}
