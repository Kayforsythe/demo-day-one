import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import Navigo from 'navigo';

var router = new Navigo(window.location.origin);

var State = {
    'active': 'Home',
    'Home': {
        'links': [ 'Insta', 'Email', 'Twitter', 'Purchase Here', 'aboutMe', 'Editorial' ]
    },
    'aboutMe': {
        'links': [ 'Insta', 'Email', 'Twitter', 'Purchase Here', 'Editorial' ]
    },
    'Editorial': {
        'links': [ 'Insta', 'Email', 'Twitter', 'Purchase Here', 'aboutMe' ]
    },

};

var root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}
    `;

    router.UpdatePageLinks();
}

function handleNavigation(params){
    State.active = params.page;

    render(State);
} 


router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'Home' }))
    .resolve();
