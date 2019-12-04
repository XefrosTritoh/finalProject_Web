const { Friend } = require('../models/friends')

module.exports.Profile = {
    profile: [
      { id: 0, name: 'Xefros', location: 'Alternia' },
      { id: 1, name: 'Joey', location: 'Earth' },
      { id: 2, name: 'Jude', location: 'Earth' },
      { id: 3, name: 'Tetrarch', location: 'Alternia' },
  ],
  SignUp(name){ //works
    this.profile.push({id: this.profile.length , name: name, location: 'N/A'}); //makigng new profile
    Friend.friends.push({list: []} ) //empty friends list
    return (this.profile.length -1);
  },
  Login(ID) { //works
    if (ID < 0 || ID > this.profile.length ) {
      return -1;
    }
    return ID;
  },
  getProfile(id) { //works
    if(id > this.profile.length)
    { return -1 }
    else
    return this.profile[id];
  },
};
