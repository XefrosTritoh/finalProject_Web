module.exports.Profile = {
    profile: [
    { id: 0, name: 'Xefros', location: 'Alternia' },
    { id: 1, name: 'Joey', location: 'Earth' },
    { id: 2, name: 'Jude', location: 'Earth' },
    { id: 3, name: 'Tetrarch', location: 'Alternia' },
  ],
  Login(ID) {
    if (ID < 0 || ID > this.profile.length ) {
      return -1;
    }
    return ID;
  },
  getProfile(id) {
    return this.profile[id];
  },
};
