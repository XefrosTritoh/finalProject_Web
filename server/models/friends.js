const { Profile } = require('../models/profiles')

module.exports.Friend = {
    friends : [
    {list:  [{ id: 1 , name: "Joey"} ] },
    {list:  [{ id: 0 , name: "Xefros"} ] },
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
        if( (friendId < Profile.profile.length && friendId > -1) && user != friendId)
            var friendName = Profile.profile[friendId].name
        else return -1; //DNE or yourself



        if(this.friends[user].list.length > 0 && this.friends[user].list.find(x => x.name == friendName ))
        {
            return -1; //already friends
        }
        else{
            this.friends[user].list.push({id: friendId, name:friendName}); //adds from user
            this.friends[friendId].list.push({ id: user, name: Profile.profile[user].name}) //add from friend
            return 1;
        }

    },
    Delete(user, friendId){
        if( (friendId < Profile.profile.length && friendId > -1) && user != friendId)
        var friendName = Profile.profile[friendId].name
        else return -1; //DNE or yourself


        if(this.friends[user].list.length > 0 && this.friends[user].list.find(x => x.name == friendName ))
        {
            var index = this.friends[user].list.indexOf(friendName)
            this.friends[user].list.splice(index, 1); //removes from user
        }
        else{
         return -1;
        }

        this.friends[friendId].list.find(x => x.name == Profile.profile[user].name )
            var index = this.friends[friendId].list.indexOf(Profile.profile[user].name)
            this.friends[friendId].list.splice(index, 1); //removes from friend
            return 1;
        

}
}

