const url = 'http://localhost:5000/api/topics';

export const fetchAllTopics = () => {
  return fetch(url).then(resp => resp.json());
};
export const postTopic = topic => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(topic)
  });
};

export const deleteTopicWithId = id => {
  return fetch(`${url}/${id}`, {
    method: 'DELETE'
  });
};
