import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom';
import mobx from 'mobx';
import { Provider } from 'mobx-react';

// Import Components
import App from './containers/app';

// Enable MobX Strict Functionality
mobx.useStrict(true);

// Import our Stores Here
import UserStore from './stores/user';
import LanguageStore from './stores/language';
import UIStore from './stores/ui';
import GithubStore from './stores/github';
// Because they're classes, we have to instantiate them here :)
const userStore = UserStore.create({
  id: '1',
  name: 'Alex',
  lastName: 'Casillas',
  age: 27,
  xp: 0
});
const languageStore = LanguageStore.create({ language: 'en' });
const uiStore = UIStore.create({ borderRadius: 3, textColor: 'white' });
const githubStore = new GithubStore();

const store = {
  user: userStore,
  language: languageStore,
  ui: uiStore,
  github: githubStore
};

const router = (
  <Provider {...store}>
    <Router history={browserHistory}>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));