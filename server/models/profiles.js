module.exports.Profile = {
    profile: [
    { id: 0, name: 'Xefros', location: 'Alternia' },
    { id: 1, name: 'Joey', location: 'Earth' },
    { id: 2, name: 'Jude', location: 'Earth' },
    { id: 3, name: 'Tetrarch', location: 'Alternia' },
  ],
  Login(id) {
    this.Logged_In = this.Profile.indexOf(id).id;
    if (this.Logged_In === -1) {
      return -1;
    }
    return this.Logged_In;
  },
  Tracker() {},
  Friend() {},

  Logged_In: -1,
  Recent_Tracks: [],
};
