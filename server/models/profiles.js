module.exports.Profile = {
    profile: [
    { id: 1, name: 'Xefros', location: 'Alternia' },
    { id: 2, name: 'Joey', location: 'Earth' },
    { id: 3, name: 'Jude', location: 'Earth' },
    { id: 4, name: 'Tetrarch', location: 'Alternia' },
  ],
  Login(id) {
    this.Logged_In = this.profile.findIndex(i => i.profile == id)
    if (this.Logged_In < 0) {
      return 0;
    }
    return this.Logged_In;
  },
  Tracker() {},
  Friend() {},

  Logged_In: 0,
  Recent_Tracks: [],
};
