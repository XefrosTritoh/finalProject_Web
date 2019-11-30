const apiroot = 'http://localhost:3000/track/';

export default async function api(url, data) {
  let response;
  if (data) {
    response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  } else {
    response = await fetch(apiroot + url);
  }

  if (!response.ok) {
    throw response.json();
  } else {
    return response.json();
  }
}

export const User = {
  User_id: null,
};
