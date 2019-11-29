export const TrackServer = {
  Tracker: [],
  Logged_In: -1,
};

export const TrackClient = {
  Tracker: [
    { name: 'Xefros', msg: 'Doing Web programming' },
    { name: 'Joey', msg: 'Watching Xefros' },
  ],
  addToTracker(input) {
    this.Tracker.push({ name: input.name, msg: input.msg });
  },
};

export class Tracker {
  name;

  msg;
}
