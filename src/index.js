import $ from 'jquery';
import store from './store'

import 'normalize.css';
import './index.css';
import api from './api';

import shoppingList from './shopping-list';

const main = function () {
  api.getItems()
    .then(res => {
      res.forEach(x => {
        store.items.push(x)
      }) 
      shoppingList.render();
    })
  shoppingList.bindEventListeners();
//TESTING

//TESTING DONE
};

$(main);
