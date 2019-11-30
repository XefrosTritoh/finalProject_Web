const { profile } = require('./profiles');

module.exports.Track = {
    Tracker: [
      { name: 'Xefros', msg: 'Doing Web programming' },
      { name: 'Joey', msg: 'Watching Xefros' },
    ],
    addToTracker(input) {
        this.Tracker.push({ name: input.name, msg: input.msg });
    },
    getTracks(){
      return this.Tracker;
    },
}
