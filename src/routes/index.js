
// title of the page
const urlPageTitle = "Alex turnwall";


// event listener for nav links
document.addEventListener("click",(e)=>{
    if(!e.target.matches("li a")){
        return;
    }
    e.preventDefault();
    urlRoute(e);
})


// create a function that watches the url and calls the urlLocationHandler
const urlRoute=(event)=>{
    
    event =event || window.event;
  
    event.preventDefault();

    window.history.pushState(null,null,event.target.href);
    urlLocationHandler();

}


// Routes
const urlRoutes={
    404:{
        page: "./src/pages/404.html",
        title:"404 | "+urlPageTitle
    },
    "/":{
        page: "./src/pages/home.html",
        title:"Home | "+urlPageTitle
    },
    "/work":{
        page: "./src/pages/work.html",
        title:"Work | "+urlPageTitle
    },
    "/about":{
        page: "./src/pages/about.html",
        title:"about | "+urlPageTitle
    },
    "/blog":{
        page: "./src/pages/blog.html",
        title:"blog | "+urlPageTitle
    },
    "/images":{
        page: "./src/pages/images.html",
        title:"images | "+urlPageTitle
    }
}

// change content according location path
const urlLocationHandler=async()=>{
    const location=window.location.pathname;

    if(location.length==0){
        location="/";
    }
    
    console.log(location.length);
console.log(window.location.pathname);

    const route=urlRoutes[location] || urlRoutes[404];
console.log(route);
    // html content of file
    const html=await fetch(route.page).then((Response)=> Response.text());
    // change middle content of main file
    document.getElementById("content").innerHTML=html;
    // change title
    document.title = route.title;

};


// add an event listener to the window that watches for url changes
window.onpopstate=urlLocationHandler();
// window.route=urlRoute();
// call the urlLocationHandler function to handle the initial url
urlLocationHandler();