import { createStore } from 'redux';
import root from './reducers';

export default function configureStore() {
  const store = createStore(
    root,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
