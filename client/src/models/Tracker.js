import { api } from './my-fetchTracker';

export const TrackServer = {
  getTracks() {
    return api('');
  },
  addToTracker(message) {
    return api('add', message );
  },
};
export class Tracker {
  name;
  msg;
}
