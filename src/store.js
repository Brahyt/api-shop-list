import api from './api'

const items = [];
let hideCheckeditems = false;

const findAndUpdate = function(id, newDataObj) {
  const foundItem = this.findById(id)
  Object.assign(foundItem, newDataObj)
}

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function(item) {
  this.items.push(item)
//  try {
//    item.validateName(name);
//    this.items.push(item.create(name));
//  } catch (e) {
//    console.log(e.message);
//  }
};

//const findAndToggleChecked = function (id) {
//  const currentItem = this.findById(id);
//  currentItem.checked = !currentItem.checked;
//};

//const findAndUpdateName = function (id, name) {
//  try {
//    item.validateName(name);
//    const currentItem = this.findById(id);
//    currentItem.name = name;
//  } catch (e) {
//    console.log('Cannot update name: ' + e.message);
//  }
//};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
//  findAndToggleChecked,
//  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate
};
