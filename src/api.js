const BASE_URL = 'https://thinkful-list-api.herokuapp.com/brahyt';

const apiFetcher = function(url, method, data ){
  let error = false
  return fetch(url, {
    method,
    headers: {'Content-Type': 'application/json'},
    body: data
  })
    .then(res => {
      if(!res.ok) { 
        error = {code: res.status};
    }
    return res.json()
    })
    .then(json => {
      if (error) {
        error.message = json.message;
        return Promise.reject(error);
      }
      return json
    })
}

const getItems = function () {
  return apiFetcher(`${BASE_URL}/items`)
};

const createItem = function(name) {
  const newItem = JSON.stringify({
    name,
  })
  console.log(newItem)
  return apiFetcher(`${BASE_URL}/items`, 'POST', newItem)
}

const updateItem = function(id, updateData) {
  return apiFetcher(`${BASE_URL}/items/${id}`, 'PATCH', JSON.stringify(updateData))
}

const deleteItem = function (id){
  return apiFetcher(`${BASE_URL}/items/${id}`, 'DELETE')
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};
