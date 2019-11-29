const apiroot = 'http://localhost:3000/game/';

export default async function api(url) {
  const response = await fetch(apiroot + url);
  if (!response.ok) {
    throw response.json();
  } else {
    return response.json();
  }
}
