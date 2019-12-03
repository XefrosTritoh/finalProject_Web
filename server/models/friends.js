const { Profile } = require('../models/profiles')

module.exports.Friend = {
    friends : [
    {list:  [{ id: 1 , name: "Joey"} ] },
    {list:  [ { id: 0 , name: "Xefros"} ] },
    {list:  [] },
    {list:  [] }
    ],

    getFriends(user){
        return this.friends[user].list
    },
    Find(friendId){
        if(friendId < Profile.profile.length && friendId > -1)
            return Profile.profile[friendId].name; //user exists

        else return -1; //DNE 
    },
    Add(user, friendId){
        if(friendId < Profile.profile.length && friendId > -1 && user != friendId)
            var friendName = Profile.profile[friendId].name
        else return -1; //DNE or adding yourself



        if(this.friends[user].list.find(x => list[x] == friendName ))
        {
            return -1; //already friends
        }
        else{
            this.friends[user].list.push(friendName); //adds from user
            this.friends[friendId].list.push(Profile.profile[user].name) //add from friend
            return 1;
        }

    },
    Delete(user, friendId){
        if(friendId < Profile.profile.length && friendId > -1 && user != friendId)
        var friendName = Profile.profile[friendId].name
        else return -1; //DNE

        const index = -1;
        index = this.friends[user].list.indexOf(friendName)

        if(index != -1)
        {
        this.friends[user].list.splice(index, 1)  //removed from user  

        index = this.friends[friendId].list.indexOf(user) 

        this.friends[friendId].list.splice(index, 1) //removed from friend

        return 1; 
        }
        else
            return -1; //not friends
        },
}
