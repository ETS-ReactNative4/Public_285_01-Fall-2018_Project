import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './components/Header';
import {Home} from './components/Home';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render() {
        return (
            <div>
               <Header />
                <Home />
            </div>
        );
    }
}

ReactDOM.render(<div>
    <App />
</div>, document.getElementById('root'));
registerServiceWorker();




