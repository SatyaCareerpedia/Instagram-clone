// let url = 'https://jsonplaceholder.typicode.com/photos';


// let url = "https://fakestoreapi.com/products";
// fetch(url)
// .then((response)=>{

//    return response.json();

// })

// .then((data)=>{

//    let input=13;

//    for(let item of data){
//     let grid = document.querySelector('.grid');
//     var box = document.createElement('div');
//     box.classList.add('box');
//     grid.appendChild(box);

//     var img = document.createElement('img');
//     img.classList.add('image');
//     img.src = item.image;
//     console.log(item)
//     if(item.id == input){
//       break;
//     }
//     box.appendChild(img);

//    }

// })

// ----------------------------------------------------------------

// function getPhotos() {

//     let photo = document.querySelector("#grid");

//     let Name = [
//       "google",
//       "facebook",
//       "instagram",
//       "gmail",
//       "twitter",
//       "whatsapp",
//       "youtube",
//       "linkedin",
//       "telegram",
//     ];
//     let type = ["png", "jpg"];

//     for (a = 0; a <= Name.length - 1; a++) {
//       console.log(`./assets/${Name[a]}.${type[0]}`);
//     }

//     let url = "https://via.placeholder.com";
//     let color = [
//       "92c952",
//       "771796",
//       "24f355",
//       "d32776",
//       "f66b97",
//       "56a8c2",
//       "b0f7cc",
//       "54176f",
//       "51aa97",
//     ];
//     let boldColor;
//     for (i = 0; i < 9; i++) {
//       for (x = 0; x < 9; x++) {
//         for (s = 0; s < 9; s++) {
//           for (boldColor = 0; boldColor <= 599; boldColor++) {
//             if (boldColor % 100 == 0) {
//             }
//             for (k = 0; k < 9; k++) {}
//           }
//         }
//       }
//       console.log(
//         `<img src="${url}/${boldColor}/${color[i]}" alt="photo" class="image">`
//       );

//     }

// }
// getPhotos();

// ---------------------------------- background change -----------------------------------------------


// let url = "https://fakestoreapi.com/products";
// let grid = document.querySelector('.grid');
// let loadMoreBtn = document.getElementById('loadMoreBtn');
// let page = 1; // Track the current page

// // Function to fetch data and append images to the grid
// function fetchAndAppendData() {
//   fetch(`${url}?_page=${page}&_limit=${page}`)
//     .then((response) => response.json())  
//     .then((data) => {
//       for (let item of data) {
//         var box = document.createElement('div');
//         box.classList.add('box');
//         grid.appendChild(box);

//         var img = document.createElement('img');
//         img.classList.add('image');
//         img.src = item.image;
//         console.log(item)
//         box.appendChild(img);
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error.message);
//     });
// }

// // Load initial data
// fetchAndAppendData();

// // Load More functionality
// loadMoreBtn.addEventListener('click', () => {
//   page++; // Increment the page before fetching more data
//   fetchAndAppendData();
// });



// DOMContentLoaded is a special event in web development that signals
//  when the main content of a webpage has been loaded and is ready for interaction.
//  It's handy because it lets you run your code as soon as the basic structure
//  of the webpage is set up, even before all images and styles are fully loaded.
//  This means you can start doing things with the webpage 
// without waiting for everything else to finish loading. 
// It's a way to kick off your JavaScript code early in the page-loading process.

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById('grid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  let apiUrl = "https://fakestoreapi.com/products";
  let startIndex = 0;
  let itemsPerPage = 6; // You can adjust this based on your layout

  function fetchAndDisplayItems() {
      fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
              for (let i = startIndex; i < startIndex + itemsPerPage; i++) {
                  if (i < data.length) {
                      let item = data[i];
                      let box = document.createElement('div');
                      box.classList.add('box');

                      let img = document.createElement('img');
                      img.classList.add('image');
                      img.src = item.image;

                      box.appendChild(img);
                      grid.appendChild(box);
                  } else {
                      loadMoreBtn.style.display = 'none';
                      break;
                  }
              }

              startIndex += itemsPerPage;
          })
          .catch((error) => console.error('Error fetching data:', error));
  }

  loadMoreBtn.addEventListener('click', fetchAndDisplayItems);

  // Initial load
  fetchAndDisplayItems();
});


fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));



let body = document.getElementById("body");
let box = document.getElementById("box");

body.addEventListener("click", change);

function change() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    let result = Math.floor(Math.random() * 16);
    color = color + letters[result];
  }
  console.log(color);

  const colorCode = document.createElement("h1");
  colorCode.textContent = `Color: ${color}`;

  box.textContent = `${color}`;
  document.body.style.backgroundColor = `${color}`;
  box.style.cssText = `width:100px;\
     height:40px;\
     background-color:white;\
     border:5px solid white;\
     font-weight:600;\
     display:flex;\
     justify-content:center;\
     align-items:center;
     box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, \
     rgba(0, 0, 0, 0.12) 0px -12px 30px,\
      rgba(0, 0, 0, 0.12) 0px 4px 6px,\
       rgba(0, 0, 0, 0.17) 0px 12px 13px,\
        rgba(0, 0, 0, 0.09) 0px -3px 5px;`;
}

change();

// ------------------------------------------------------

// const linkNames = document.querySelector("#linkNames");
// const burger = document.querySelector("#burger");
// const navbar = document.querySelector("#navbar");
// const settings = document.querySelector("#settings");

// burger.addEventListener("click", () => {

//   burger.classList.toggle("toggle");
//   linkNames.classList.toggle("nav-active");

// });
