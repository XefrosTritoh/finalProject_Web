import api from './my-fetchTracker';

export const TrackServer = {
  getTracks() {
    return api('');
  },
  addToTracker(message) {
    api('add', { message });
  },
};
export class Tracker {
  name;

  msg;
}
