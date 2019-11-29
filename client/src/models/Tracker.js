import api from './my-fetch';

export const TrackServer = {
  addToTracker() {
    return api('/addtracker');
  },
  removeFromTracker() {
    return api('/removetracker');
  },
};
export class Tracker {
  name;

  msg;
}
