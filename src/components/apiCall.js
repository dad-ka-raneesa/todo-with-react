const optionsForGet = () => {
  return {
    headers: { 'Content-Type': 'application/json' },
  };
};

const optionsForPost = (body) => {
  return {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    method: 'POST',
  };
};

const getOptions = (body, method) => {
  if (method === 'GET') return optionsForGet();
  return optionsForPost(body);
};

const fetchReq = async (url, body, method = 'GET') => {
  const res = await fetch(url, getOptions(body, method));
  return await res.json();
};

const apiCall = (action) => {
  switch (action.type) {
    case 'REMOVE_ALL':
      return fetchReq('/api/removeAll');
    case 'UPDATE_STATUS':
      return fetchReq(`/api/updateStatus/${action.id}`);
    case 'REMOVE_TASK':
      return fetchReq(`/api/removeTask/${action.id}`);
    case 'UPDATE_TITLE':
      return fetchReq('/api/updateTitle', { title: action.title }, 'POST');
    case 'ADD_TASK':
      return fetchReq('/api/addTask', { task: action.task }, 'POST');
    default:
      return fetchReq('/api/initiateState');
  }
};

export default apiCall;