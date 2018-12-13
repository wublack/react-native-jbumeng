import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store/ConfigureStore'

import App from './navigators/AppNavigator'

const store = configureStore();

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}