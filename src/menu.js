
function menu(){

    const contentDOM = document.getElementById("content")
    
    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menuContainer")
    contentDOM.appendChild(menuContainer)
    
    //daBox is the grey box
    const daBox = document.createElement("div")
    daBox.classList.add("menuCenterBox")
    menuContainer.appendChild(daBox)
    
    
    //Add Menu title text
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menuTitle");
    menuTitle.textContent = "MENU"
    daBox.appendChild(menuTitle)
    
    //Add Drink Section Container
    const drinkSection = document.createElement("div");
    drinkSection.classList.add("sectionContainer");
    drinkSection.setAttribute('id', "drinkSection")
    daBox.appendChild(drinkSection)
    
    const drinkTitle = document.createElement("div");
    drinkTitle.classList.add("sectionTitle")
    drinkTitle.textContent = "DRINKS";
    drinkSection.appendChild(drinkTitle)
    
    //Add Food Section Container
    const foodSection = document.createElement("div");
    foodSection.classList.add("sectionContainer");
    daBox.appendChild(foodSection)
    
    const foodTitle = document.createElement("div");
    foodTitle.classList.add("sectionTitle")
    foodTitle.textContent = "MAIN COURSE";
    foodSection.appendChild(foodTitle)
    
    //Add Dessert Section Container
    const dessertSection = document.createElement("div");
    dessertSection.classList.add("sectionContainer");
    daBox.appendChild(dessertSection)
    
    const dessertTitle = document.createElement("div");
    dessertTitle.classList.add("sectionTitle")
    dessertTitle.textContent = "DESSERT";
    dessertSection.appendChild(dessertTitle)
    
    
    //create Item 
    
    const createItem= (menuObj)=>{
        const newItem = document.createElement("div");
        newItem.classList.add("menuItem")
    
        const menuItemName = document.createElement("div");
        menuItemName.classList.add("menuItemName");
        menuItemName.textContent = menuObj.name
        newItem.appendChild(menuItemName)
    
        const menuItemPrice = document.createElement("div");
        menuItemPrice.classList.add("menuItemPrice");
        menuItemPrice.textContent = menuObj.price;
    
        const menuItemDescription = document.createElement("div");
        menuItemDescription.classList.add("menuItemDescription");
        menuItemDescription.textContent = `${menuObj.description} -${menuItemPrice.textContent}`;
    
    
        // newItem.textContent=`${menuObj.name}  ${menuObj.description}    -${menuObj.price}`
    
    
        if (menuObj.section == 'drink'){
        drinkSection.appendChild(newItem)
        newItem.appendChild(menuItemName)
        newItem.appendChild(menuItemDescription)
    
    
        }
        if (menuObj.section ==  'food'){
            foodSection.appendChild(newItem)
            newItem.appendChild(menuItemName)
            newItem.appendChild(menuItemDescription)
        }
        if (menuObj.section == 'dessert'){
            dessertSection.appendChild(newItem)
            newItem.appendChild(menuItemName)
            newItem.appendChild(menuItemDescription)
        }
    }
    
    //put menu Items here
    const drinkOne= new menuItem (`Lavender Lemon Drop`, `butterfly pea blossom vodka · lemon · lavender simple syrup`,    '15.5', 'drink')
    createItem(drinkOne)
    const drinkTwo= new menuItem (`Cuffs & Buttons`, `citrus & spice bourbon · clover honey`,    '16.5', 'drink')
    createItem(drinkTwo)
    const drinkThree= new menuItem (`Big Protien Martini`, `vodka or gin · dry vermouth · bleu cheese olives `,    '14.5', 'drink')
    createItem(drinkThree)
    
    const foodOne = new menuItem(`Tagliatelle`, `lamb ragu · snap peas · castelvetrano olive · mint · pecorino brodo`, `28`, `food`)
    createItem(foodOne)
    const foodTwo = new menuItem(`Pan Roasted California Halibut`, `twin peaks summer squash · cherry tomato · kalmata olive vinaigrette · basil `, `40`, `food`)
    createItem(foodTwo)
    const foodThree = new menuItem(`Wood Grilled Wagyu Bavette Steak`, `heirloom tomato · jimmy nardellos · fingerling potato · salmoriglio `, `41`, `food`)
    createItem(foodThree)
    
    const dessertOne = new menuItem(`Chocolate Nemesis Sunday`, `flourless chocolate cake ·  mascarpone cream ·  espresso ice cream · crunchy meringue`, `12`, `dessert`)
    createItem(dessertOne)
    const dessertTwo = new menuItem(`Sticky Toffee Cake`, `tofee sauce · sweet cream ice cream · pecan tuile`, `12`, `dessert`)
    createItem(dessertTwo)
    const dessertThree = new menuItem(`Basque Cheesecake`, `spiced pumpkin caramel · candied pepitas`, `12`, `dessert`)
    createItem(dessertThree)
    
    };
    
    function menuItem(name, description, price, section){
        this.name = name
        this.description = description; 
        this.price = price; 
        this.section=section;
    }
    
    export {menu}