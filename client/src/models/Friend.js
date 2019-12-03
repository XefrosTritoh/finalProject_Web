import { api }  from './my-fetchFriend';

export const FriendServer = {
  
Get(id){
    return api('' , { id })
},
Find(idf){
    return api('/find' , { idf })
},
Add(id,idf){
    return api('/add', { id , idf })
},
Delete(id,idf){
    return api('/delete', { id , idf } )
},
}; 


export class Friend {
    id;
    friendId = [];
    friendName;
}
