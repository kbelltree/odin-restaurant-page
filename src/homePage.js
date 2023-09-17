import * as pageComponents from './components.js';
import interiorImage from './assets/images/ogasuta458A7749-3840x2160-zoomed-min.jpg'
import logoImage from './assets/images/Mock-Restaurant-NiCoLi-Logo-KBelltree.png'
import avocadoImage from './assets/images/1236289_s-avocado.jpg'
import udonImage from './assets/images/2800580_s-udon.jpg'
import okonomiyakiImage from './assets/images/3551850_m-okonomiyaki.jpg'
import curryImage from './assets/images/4306992_s-curry.jpg'

const textData = {

    slogan: `Eating Well Feels Good!`,

    intro:  ` Welcome to NiCoLi, inspired by the Japanese word for 'smile' (ニコリ[nɪˈkoʊli]). Our menu, created with organic vegetables, mushrooms, tofu, and pasture-raised eggs, reflects our commitment to serving meals that nourish both the body and soul. At NiCoLi, we believe in the joy of eating well and feeling good. 
     
    Join us for a meal that delights your taste buds and leaves you smiling and satisfied!`

}

const imageData = {

    logo: {
        src: logoImage, 
        alt: 'NiCoLi Restaurant Logo',
        width: '397',
        height: '204'
    },
    
    hero: {
        src: interiorImage,
        alt: 'The interior of NiCoLi(Mock Restaurant)', 
        width: '3840', 
        height: '2160', 
    }, 

    foods: [
        { 
            src: curryImage, 
            alt: 'vegetable filled Japanese curry and rice', 
            width: '480', 
            height: '480', 
        }, 
        { 
            src: okonomiyakiImage, 
            alt: 'tofu and cabbage based Japanese pancake', 
            width: '480', 
            height: '480',
        }, 
        { 
            src: avocadoImage, 
            alt: 'quartered avocado with skin skewed and roasted topped with soy sauce', 
            width: '480', 
            height: '480',
        }, 
        { 
            src: udonImage, 
            alt: 'vegetable filled miso and soy milk based Udon noodle hotpot noodle', 
            width: '480', 
            height: '480', 
        }
    ]

}

function createHeader(parentElement) {
    const headerWrapper = pageComponents.createDivWrapper('header');
    const logo = pageComponents.createImage(imageData.logo.src, imageData.logo.alt, imageData.logo.width, imageData.logo.height, 'logo'); 
    const btnWrapper = pageComponents.createDivWrapper('button-wrapper');
    const homeBtn = pageComponents.createButton('HOME', 'home-btn');
    const menuBtn = pageComponents.createButton('MENU', 'menu-btn');
    const contactBtn = pageComponents.createButton('CONTACT', 'contact-btn');

    btnWrapper.append(homeBtn, menuBtn, contactBtn);
    headerWrapper.append(logo, btnWrapper);
    
    parentElement.appendChild(headerWrapper);
}

function createHeroSection() {
    const heroSection = pageComponents.createDivWrapper('hero-section');
    const backgroundImg = pageComponents.createImage(imageData.hero.src, imageData.hero.alt, imageData.hero.width, imageData.hero.height, 'hero-image');
    const slogan = pageComponents.createTextElement('h1', textData.slogan, 'slogan');
    
    heroSection.append(backgroundImg, slogan);

    return heroSection; 
}

function createPhotoGallery(imageArray, parentElement) {

    imageArray.forEach(image => {
        const imageHolder = pageComponents.createDivWrapper('image-holder');
        const foodImage = pageComponents.createImage(image.src, image.alt, image.width, image.height);
        
        imageHolder.appendChild(foodImage);
        parentElement.appendChild(imageHolder);
    })   
}

function createAboutSection() {
    const aboutSection = pageComponents.createDivWrapper('about-section')
    const introWrapper = pageComponents.createDivWrapper('intro-wrapper');
    const introContent = pageComponents.createTextElement('p', textData.intro, 'intro-content');
    const albumWrapper = pageComponents.createDivWrapper('album-wrapper');

    createPhotoGallery(imageData.foods, albumWrapper);

    introWrapper.appendChild(introContent);
    aboutSection.append(introWrapper, albumWrapper);

    return aboutSection;
}

function renderHomePage(parentElement) {
        parentElement.append(createHeroSection(), createAboutSection());
}


export { createHeader, renderHomePage };