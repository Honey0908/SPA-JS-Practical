


const urlPageTitle = "Alex turnwall";

document.addEventListener("click",(e)=>{
    if(!e.target.matches("li a")){
        return;
    }
    e.preventDefault();
    urlRoute(e);
})


const urlRoute=(event)=>{
    event =event || window.event;
  
    event.preventDefault();

    window.history.pushState(null,null,event.target.href);
    urlLocationHandler();

}


const urlRoutes={
    404:{
        page: "/pages/404.html",
        title:"404 | "+urlPageTitle
    },
    "/":{
        page: "/pages/home.html",
        title:"Home | "+urlPageTitle
    },
    "/work":{
        page: "/pages/work.html",
        title:"Work | "+urlPageTitle
    },
    "/about":{
        page: "/pages/about.html",
        title:"about | "+urlPageTitle
    },
    "/blog":{
        page: "/pages/blog.html",
        title:"blog | "+urlPageTitle
    },
    "/images":{
        page: "/pages/images.html",
        title:"images | "+urlPageTitle
    }
}


const urlLocationHandler=async()=>{
    const location=window.location.pathname;

    if(location.length==0){
        location="/";
    }


    const route=urlRoutes[location] || urlRoutes[404];

    const html=await fetch(route.page).then((Response)=> Response.text());

    document.getElementById("content").innerHTML=html;

    document.title = route.title;



};

window.onpopstate=urlLocationHandler();
// window.route=urlRoute();

urlLocationHandler();