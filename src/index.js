import { createHeader, renderHomePage } from './homePage';
import renderMenuPage from './menuPage'
import renderContactPage from './contactPage'
import './style.css';

const contentDiv = document.querySelector('#content');

function clearContent(){
    while (contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild);
    }
};

createHeader(contentDiv);

contentDiv.addEventListener('click', e => {
    // edge case 
    if (e.target.id === 'home-btn' || e.target.className === 'logo' || e.target.id === 'menu-btn' || e.target.id === 'contact-btn'){
        clearContent();
        createHeader(contentDiv);
    }
    if (e.target.id === 'home-btn' || e.target.className === 'logo') {
        renderHomePage(contentDiv);
    } else if (e.target.id === 'menu-btn') {
        renderMenuPage(contentDiv);
    } else if (e.target.id === 'contact-btn') {
        renderContactPage(contentDiv);
    } else {
        return;
    }
});

renderHomePage(contentDiv);







