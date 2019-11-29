const apiroot = 'http://localhost:3000/game/';

export default function api(url) {
  return fetch(apiroot + url).then(x => x.json());
}
