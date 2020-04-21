//import { api } from './my-fetchTracker';

export const TrackServer = {
  getTracks() {
    return api('');
  },
  getTracksDy(input) {
    return api('dy', {input});
  },
  addToTracker(message) {
    return api('add', message );
  },
  
};
export class Tracker {
  name;
  msg;
}
