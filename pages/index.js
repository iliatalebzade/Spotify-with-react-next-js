import React, {Component} from 'react';
import { Provider } from 'react-redux';
import EnreringPagePresentor from '../Components/EnreringPagePresentor';
import store from '../Redux/store'

class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <EnreringPagePresentor />
            </Provider>
        );
    }
}

export default Index;