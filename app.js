const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 4.50,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 3,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 4,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 3,
  quantity: 0
}, {
  name: 'Gummy Worms',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 3,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}, {
  name: 'Dipped Cone',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 5,
  quantity: 0
}]

//!SECTION functions 

// *NOTE -  *add item functions

// function addSprinklesToCart() {
//   //✅get log when button is clicked
//   console.log('I clicked the sprinkles button!');

//   //✅get the sprinkles object out of array
//   let sprinkles = toppings.find(toppingItem => toppingItem.name == 'Sprinkles')

//   //✅make the quantity of the object go up by ones
//   sprinkles.quantity++

//   console.log(sprinkles);

//   drawToppings()
// }

// function addChocolateChipsToCart() {
//   let chocolateChips = toppings.find(toppingItem => toppingItem.name == 'Chocolate Chips')

//   chocolateChips.quantity++

//   console.log(chocolateChips);
//   drawToppings()
// }

// function addToppingToCart(toppingName) {
//   console.log('this is a topping name:', toppingName);

//   let top = toppings.find(toppingItem => toppingItem.name == toppingName)

//   top.quantity++
//   console.log(top);
//   drawToppings()
// }

// function addContainersToCart(containerName) {
//   // console.log('success! this is a container button for,', containerName);

//   let vessel = containers.find(containerItem => containerItem.name == containerName)

//   vessel.quantity++
//   drawContainers()
// }


function addItemsToCart(name, arrayType) {


  if (arrayType == 'toppings') {
    let item = toppings.find(item => item.name == name)
    item.quantity++

  } else if (arrayType == 'containers') {
    let item = containers.find(item => item.name == name)
    item.quantity++

  } else {
    let item = iceCream.find(item => item.name == name)
    item.quantity++

  }

  // drawToppings()
  draw()
}



//*NOTE - draw functions

// function drawToppings() {

//   //setting up placeholder (below) outside of our forEach loop so that we can store string of HTML and it doesn't get blown away on each iteration
//   let stringOfToppingItemHTML = ''

//   toppings.forEach(toppingItem => {

//     // we are making sure that they have the current topping item in their cart before we add the html to string above
//     if (toppingItem.quantity > 0) {

//       //using backticks to get a multi line string easier to read, & so we can interpolate${} the values of each menu item into our string of HTML
//       stringOfToppingItemHTML += `
//       <li>
//       <div class="d-flex fs-3 justify-content-between">
//         <span>${toppingItem.name}</span>
//         <span>${toppingItem.quantity}</span>
//         <span>$${toppingItem.price.toFixed(2)}</span>
//         <span>$${toppingItem.price * toppingItem.quantity}</span>
//       </div>
//     </li>
//       `
//     }
//   }),

//     console.log(stringOfToppingItemHTML);

//   const topCartElement = document.getElementById('topCart')

//   topCartElement.innerHTML = stringOfToppingItemHTML
//   drawTotal()
// }
// function drawContainers() {
//   let stringOfContainerItemHTML = ''

//   containers.forEach(containerItem => {
//     if (containerItem.quantity > 0) {
//       stringOfContainerItemHTML += `
//       <li>
//       <div class="d-flex fs-3 justify-content-between">
//         <span>${containerItem.name}</span>
//         <span>${containerItem.quantity}</span>
//         <span>${containerItem.price.toFixed(2)}</span>
//         <span>$total of said item here</span>
//       </div>
//     </li>
//       `
//       //this console log shows the objects information (selected items)
//       console.log(containerItem);
//     }
//   }),
//     // this console log shows the html of selected items
//     console.log(stringOfContainerItemHTML);

//   const containCartElement = document.getElementById('topCart')

//   containCartElement.innerHTML = stringOfContainerItemHTML


// }


function draw() {
  let templateHtml = ''

  containers.forEach(c => {
    if (c.quantity > 0) {
      templateHtml += `
      <li>
      <div class="d-flex fs-3 justify-content-between">
        <span>${c.name}</span>
        <span>${c.quantity}</span>
        <span>$${c.price.toFixed(2)}</span>
        <span>$${c.price * c.quantity}</span>
      </div>
    </li>
      `
      console.log(c);
    }
  })
  toppings.forEach(t => {
    if (t.quantity > 0) {
      templateHtml += `
      <li>
      <div class="d-flex fs-3 justify-content-between">
        <span>${t.name}</span>
        <span>${t.quantity}</span>
        <span>$${t.price.toFixed(2)}</span>
        <span>$${t.price * t.quantity}</span>
      </div>
    </li>
      `
      console.log(t);
    }
  })
  iceCream.forEach(i => {
    if (i.quantity > 0) {
      templateHtml += `
      <li>
      <div class="d-flex fs-3 justify-content-between">
        <span>${i.name}</span>
        <span>${i.quantity}</span>
        <span>$${i.price.toFixed(2)}</span>
        <span>$${i.price * i.quantity}</span>
      </div>
    </li>
      `
      console.log(i);
    }
  })

  const cartElem = document.getElementById('cart')

  cartElem.innerHTML = templateHtml

  drawTotal()
}


function drawTotal() {

  let cartSum = 0

  toppings.forEach(toppingItem => {
    cartSum += toppingItem.price * toppingItem.quantity
  })
  containers.forEach(c => {
    cartSum += c.price * c.quantity
  })
  iceCream.forEach(i => {
    cartSum += i.price * i.quantity
  })

  let cartTotalElem = document.getElementById('cartTotal')

  cartTotalElem.innerText = cartSum.toFixed(2).toString()


}

// draw objects to page

function drawIceCreamToPage() {
  let arrayHTML = ''


  //we want name, image, and price
  iceCream.forEach(i => {
    arrayHTML += /*html*/ `
   <div class="col-4 p-4  ">
            <div onclick="addItemsToCart('${i.name}', 'iceCream')" class="card bg-white p-4">
              <img src="${i.image}" class="menu-img" alt="sprinkles">
              <p class="fs-4 text-center">${i.name} $${i.price}</p>
            </div>
          </div>
   `
  })
  console.log(arrayHTML);

  document.getElementById('iceCream').innerHTML = arrayHTML
}

drawIceCreamToPage()