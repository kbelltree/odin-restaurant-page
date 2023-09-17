import * as pageComponents from './components.js';
import mapImage from './assets/images/location-map-no-title-kbelltree-min.jpg';

const imageData = {
   
    map: {
        src: mapImage, 
        alt: 'Street map of the restaurant location',
        width: '1080',
        height: '863'
    }

}

const textData = {
    
    phone: {
        heading: 'Phone',
        info: '123-456-7890'
    }, 

    email: {
        heading: 'Email', 
        info: 'hello@mockcafenicoli.com'
    }, 

    address: { 
        heading: 'Address', 
        info: '123 Lorem St., Ipsum, ZZ 99999' 
    }, 
    
    hours: {
        heading: 'Hours', 
        info: 'Tue - Sun: 11am - 3pm / 5pm - 10pm'
    }
    
}

function createHeading() {
    const contactHeading = pageComponents.createDivWrapper('contact-heading');
    const contactTitle = pageComponents.createTextElement('h1', 'Contact');
    contactHeading.appendChild(contactTitle);
    
    return contactHeading; 
}

function createContactDetails(textObject) {
    const contactWrapper = pageComponents.createDivWrapper('contact-wrapper');
   
    for (const key in textObject) {
        const heading = pageComponents.createTextElement('h2', textObject[key].heading); 
        const info = pageComponents.createTextElement('p', textObject[key].info); 
        contactWrapper.append(heading, info);
    }
    
    return contactWrapper; 
}

function createMap(){
    const imageHolder = pageComponents.createDivWrapper('map-holder')
    const map = pageComponents.createImage(imageData.map.src, imageData.map.alt, imageData.map.width, imageData.map.height, 'map');

    imageHolder.appendChild(map);

    return imageHolder;
}

export default function renderContactSection(parentElement){
    const contactSection = pageComponents.createDivWrapper('contact-section');
     
    contactSection.append(createHeading(), createContactDetails(textData), createMap());
    
    parentElement.appendChild(contactSection);
}