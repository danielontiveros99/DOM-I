const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src',siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"])

let ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent["cta"]["button"];

let textH4 = document.querySelectorAll(".text-content h4");
textH4[0].textContent = siteContent["main-content"]["features-h4"];
textH4[1].textContent = siteContent["main-content"]["about-h4"];
textH4[2].textContent = siteContent["main-content"]["services-h4"];
textH4[3].textContent = siteContent["main-content"]["product-h4"];
textH4[4].textContent = siteContent["main-content"]["vision-h4"];

let textP = document.querySelectorAll(".text-content p");
textP[0].textContent = siteContent["main-content"]["features-content"];
textP[1].textContent = siteContent["main-content"]["about-content"];
textP[2].textContent = siteContent["main-content"]["services-content"];
textP[3].textContent = siteContent["main-content"]["product-content"];
textP[4].textContent = siteContent["main-content"]["vision-content"];

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];

let nav = document.querySelectorAll("nav a");
nav.forEach(function(value, i){
  value.textContent = siteContent.nav[`nav-item-${i+1}`];
});

let navNew = document.createElement('a');
let navNew1 = document.createElement('a');
let navANew = document.querySelector('nav')
navNew.textContent = "Order";
navNew1.textContent = "Order Now";
navANew.prepend(navNew);
navANew.append(navNew1);

nav.forEach(value => { 
  value.style.color= '#B0FF92';
});
navNew.style.color= '#B0FF92';
navNew1.style.color= '#B0FF92';



// const nav = document.querySelectorAll("header nav a")
// nav.forEach(function(value, i){
//   value.textContent = siteContent.nav[`nav-item-${i+1}`]
// nav.forEach(value => { 
//   value.style.color= '#B0FF92';
// })
// });


// const newContent1 = document.createElement('a');
// newContent1.textContent = "Order";
// const newA1 = document.querySelector('nav');
// newA1.prepend(newContent1);

// const newContent = document.createElement('a');
// newContent.textContent = "Order Now";
// const newA = document.querySelector('nav');
// newA.append(newContent);



// let topTextP = document.querySelector("p");
// topTextP.textContent = siteContent["main-content"]["features-content"];

// let topContH4 = document.querySelectorAll("h4.top-content")
// topContH4.forEach(function(value, i){
//   value.textContent = siteContent.main-content[`${i+1}-h4`]
// });
// console.log(topContH4)



// let ctaText = document.getElementsByClassName("cta-text").h1;
// ctaText.textContext = siteContent["cta"]["h1"];

// let ctaText = document.getElementsByClassName("cta-text").h1;
// ctaText.textContext(siteContent["cta"]["h1"]);

// let ctaText = document.getElementsByClassName("cta-text h1")
// ctaText.childNodes[1].textContent(siteContent["cta"]["h1"])

// let ctaText = document.getElementsByClassName("cta-text h1")
// ctaText.childNodes.textContent(siteContent["cta"]["h1"])


// let text = document.getElementsByClassName("cta-text h1").textContent;
// console.log(text);






// const cta = document.getElementsByClassName("cta");
// textContent = siteContent.cta('h1');
// console.log(cta);



// const attributeTag = document.querySelectorAll('a')
// let i = 0;
// attributeTag.forEach(a => {
//  a.textContent = siteContent.nav[`nav-item-${i}`]
//  attributeTag[i].style.color= '#B0FF92';
//  i++
// });

console.log(document);