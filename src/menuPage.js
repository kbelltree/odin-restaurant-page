import * as pageComponents from './components.js';

const textData = {
 snacks: [
    { 
        name: 'Avocado Kushiyaki - 6', 
        description: '4 pcs of quartered grilled avocado skewers' 
    }, 
    { 
        name: 'Daikon Mochi - 7.5', 
        description: 'Daikon radish based chewy cake' 
    }, 
    { 
        name:'Tofu Gyoza - 8', 
        description: 'Tofu based vegetable dumplings'
    }, 
    { 
        name: 'Lotus Root Chips - 6', 
        description: 'Crispy fried lotus root slices'
    }, 
    { 
        name: 'Eggplant Steaks - 7.5', 
        description: 'Eggplant slices pan-fried with garlic butter and soy sauce' 
    },
    { 
        name: 'Grilled Onigiri - 6', 
        description: '2 pcs of sprouted rice balls dipped in our special sauce and grilled'
    }, 
    { 
        name: 'Kenchin Miso Soup - 5.5', 
        description: 'Miso soup filled with chunky vegetables and crispy tofu' 
    }
], 

mains: [
    { 
        name: 'Tofu Okonomiyaki - 14', 
        description: 'Tofu based Japanese pancake topped with aonori seaweed, mayo, and sauce'
    },
    { 
        name: 'Vegetable Curry and Rice - 15', 
        description: 'Japanese style curry filled with seasonal vegetables over steamed sprouted rice topped with boiled egg' 
    },
    { 
        name: 'Vegetable Nabeyaki Udon - 15', 
        description: 'Thick Udon noodles in miso based soup with seasonal vegetables and mushrooms'
    },
    { 
        name: 'Tofu Katsu and Fried Vegetables - 16', 
        description: 'Tofu cutlet with fried vegetables, side with steamed sprouted rice' 
    },
    { 
        name: 'Potato croquet sandwich - 14', 
        description: 'Vegetable and mashed potato croquette in bran bread' 
    },
    { 
        name: 'Shirataki Noodle Yakisoba - 15.5', 
        description: 'Fried shirataki noodle with vegetables, eggs, and mushrooms'
    }
],

salads: [
    { 
        name: 'Tofu and Avocado Salad - 8', 
        description: 'Soft tofu, avocado, mixed greens drizzled over with sesame based dressing'
    },
    { 
        name: 'Sauteed Mushrooms Salad - 7', 
        description: 'Mixed greens with sauteed mushrooms'
    },
    { 
        name: 'Potato Salad - 7', 
        description: 'Mashed potato salad mixed with vegetables'
    },
], 

drinks: [
    { 
        name: 'Barley Tea - 3', 
        description: 'Iced or Hot'
    },
    { 
        name: 'Ume Kombucha - 4', 
        description: 'Hot kelp tea with plum'
    },
    { 
        name: 'Black Bean Tea - 4', 
        description: 'Iced or Hot'
    },
    { 
        name: 'Matcha Tea - 3.5', 
        description: 'Iced or Hot'
    },
]

};

function createHeading() {
    const menuHeading = pageComponents.createDivWrapper('menu-heading');
    const menuTitle = pageComponents.createTextElement('h1', 'Menu');
    menuHeading.appendChild(menuTitle);
    
    return menuHeading; 
}

function createMenuGroup(itemArray, parentElement) {

    itemArray.forEach(item => {
        const menuItem = pageComponents.createDivWrapper('menu-item');
        const itemName = pageComponents.createTextElement('h3', item.name);
        const itemDescription = pageComponents.createTextElement('p', item.description);
        
        menuItem.append(itemName, itemDescription);
        parentElement.appendChild(menuItem);
    })   
}

function createMenuContent() {
    const menuWrapper = pageComponents.createDivWrapper('menu-wrapper');
    const snacksHeading = pageComponents.createTextElement('h2', 'Snacks');
    const mealsHeading = pageComponents.createTextElement('h2', 'Meals');
    const saladsHeading = pageComponents.createTextElement('h2', 'Salads');
    const drinksHeading = pageComponents.createTextElement('h2', 'Drinks');
    
    menuWrapper.appendChild(snacksHeading);
    createMenuGroup(textData.snacks, menuWrapper);
    menuWrapper.appendChild(mealsHeading);
    createMenuGroup(textData.mains, menuWrapper);
    menuWrapper.appendChild(saladsHeading);
    createMenuGroup(textData.salads, menuWrapper);
    menuWrapper.appendChild(drinksHeading);
    createMenuGroup(textData.drinks, menuWrapper);

    return menuWrapper;
}


export default function renderMenuSection(parentElement){
    const menuSection = pageComponents.createDivWrapper('menu-section');
    
    menuSection.append(createHeading(), createMenuContent());

    parentElement.appendChild(menuSection);
}

