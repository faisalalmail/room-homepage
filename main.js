const hero = [
    {no:0, imgl:"images/desktop-image-hero-1.jpg", imgs:"images/mobile-image-hero-1.jpg", title:"Discover innovative ways to decorate", paragraph:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."},
    {no:1, imgl:"images/desktop-image-hero-2.jpg", imgs:"images/mobile-image-hero-2.jpg", title:"We are available all across the globe", paragraph:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."},
    {no:2, imgl:"images/desktop-image-hero-3.jpg", imgs:"images/mobile-image-hero-3.jpg", title:"Manufactured with the best materials", paragraph:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."}
]
let heroNo = 2;
const heroImg = document.getElementById("heroImg");
const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const heroD = document.getElementById("heroD");




    console.log(hero[heroNo].title);

function timer(){
    //count 5 seconds

    //call function "next" to switch the hero view to the next item of the category
}

function next(){
    
    let nextNo;
if(heroNo < 2){
    heroNo = heroNo +1;
    load(heroNo);
    
}else{
    heroNo = 0;
    load(heroNo);
}


}


function prev(){
if(heroNo > 0){
    heroNo = heroNo -1;
    load(heroNo);
}else{
    heroNo = 2;
    load(heroNo);
}

}

function load(no) {
    heroText.style.opacity = "0";
    heroTitle.style.opacity = "0";
    heroImg.style.opacity = "0";
    setTimeout(() => {
        heroTitle.innerText = hero[no].title;
        heroText.innerText = hero[no].paragraph;
        const screenWidth = screen.width;
        /* heroImg.src = screenWidth > 425 ? hero[no].imgl : hero[no].imgs; */
        heroImg.src = hero[no].imgs;
        heroD.srcset = hero[no].imgl;
        console.log(heroImg.srcset);
        heroText.style.opacity = "1";
        heroTitle.style.opacity = "1";
    heroImg.style.opacity = "1";
    }, 100); // match your duration-500
}
/*     const slideNav = document.getElementById("slide-nav");
function displayNav(){

    slideNav.style.display = 'flex';
}

function hideNav(){
slideNav.style.display = 'none';
} */

function displayNav() {
  const nav = document.getElementById('slide-nav');
  nav.style.display = 'flex';
  nav.classList.remove('-translate-y-full', 'opacity-0');
  nav.classList.add('translate-y-0', 'opacity-100');
}

function hideNav() {
  const nav = document.getElementById('slide-nav');
  nav.classList.add('-translate-y-full', 'opacity-0');
  nav.classList.remove('translate-y-0', 'opacity-100');
}