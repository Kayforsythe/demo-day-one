import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import Navigo from 'navigo';
import Store from './src/Store';
import { html, render } from 'lit-html';

var router = new Navigo(window.location.origin);

var root = document.querySelector('#root');

var State = {
    'active': 'Home',
    'Home': {
        'links': [ 'Creative Content', 'Editorial' ]
    },
    'Creative Content': {
        'links': [ 'Home', 'EDitorial' ]
    },
    'Editorial': {
        'links': [ 'Home', 'Creative Content' ]
    },

};

var store = new Store(State);


function handleNavigation(params){
    state.dispath((state) => {
        state.active = params.page;
        
        return state;
    });
} 


function App(state){
    return html `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `;    
}

function start(state){
    render(App(state), root);
}

store.addListener(start);
store.addListener(() => router.UpdatePageLinks());

router
.on('/:page', handleNavigation)
.on('/', () => handleNavigation({ 'page': 'Home' }))
.resolve();

