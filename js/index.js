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

// let ctaText = document.getElementsByClassName("cta-text h1")
// ctaText.textContent(siteContent["cta"]["h1"])

// let ctaText = document.getElementsByClassName("cta-text h1")
// ctaText.childNodes[1].textContent(siteContent["cta"]["h1"])

// let ctaText = document.getElementsByClassName("cta-text h1")
// ctaText.childNodes.textContent(siteContent["cta"]["h1"])


// let text = document.getElementsByClassName("cta-text h1").textContent;
// console.log(text);








const nav = document.querySelectorAll("header nav a")
nav.forEach(function(value, i){
  value.textContent = siteContent.nav[`nav-item-${i+1}`]
nav.forEach(value => { 
  value.style.color= '#B0FF92';
})
});

const newContent1 = document.createElement('a');
newContent1.textContent = "Order";
const newA1 = document.querySelector('nav');
newA1.prepend(newContent1);

const newContent = document.createElement('a');
newContent.textContent = "Order Now";
const newA = document.querySelector('nav');
newA.append(newContent);



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