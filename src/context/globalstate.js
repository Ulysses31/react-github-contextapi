import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AppReducer from './reducer';

const initialState = {
  user: {},
  repositories: []
};

export const GlobalContext = createContext(initialState);

export default function GlobalContextProvider({
  children
}) {
  const [state, dispatch] = useReducer(
    AppReducer,
    initialState
  );

  const getUser = async (usr) => {
    console.log(`...fetching user ${usr}`);

    const userUrl = `https://api.github.com/users/${usr}`;
    try {
      const resp = await axios.get(userUrl);
      dispatch({
        type: 'GET_GIT_USER',
        payload: resp.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getRepositories = async (usr) => {
    console.log(`...fetching repositories of ${usr}`);

    const repositoriesUrl = `https://api.github.com/users/${usr}/repos`;
    try {
      const resp = await axios.get(repositoriesUrl);
      dispatch({
        type: 'GET_GIT_REPOS',
        payload: resp.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        repositories: state.repositories,
        getUser,
        getRepositories
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// ****** Props Validations ********
GlobalContextProvider.propTypes = {
  children: PropTypes.object.isRequired
};
