import React from 'react';

const LocalStore = (name) => {

  const addToDb = id => {
    const exists = getDb();
    name = {};
    if (!exists) {
      name[id] = 1;
    }
    else {
      name = JSON.parse(exists);
      if (name[id]) {
        const newCount = name[id] + 1;
        name[id] = newCount;
      }
      else {
        name[id] = 1;
      }
    }
    updateDb(name);
  }

  const getDb = () => localStorage.getItem(name);

  const updateDb = cart => {
    localStorage.setItem(name, JSON.stringify(cart));
  }

  const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
      const name = JSON.parse(exists);
      delete name[id];
      updateDb(name);
    }
  }

  const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }

  const clearTheCart = () => {
    localStorage.removeItem(name);
  }

  return (
    {
      addToDb,
      getDb,
      updateDb,
      removeFromDb,
      getStoredCart,
      clearTheCart
    }
  );
};

export default LocalStore;