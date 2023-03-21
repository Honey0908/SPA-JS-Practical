


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
        title:"404 | "
    },
    "/":{
        page: "/pages/home.html",
        title:"404 | "
    },
    "/work":{
        page: "/pages/work.html",
        title:"404 | "
    },
    "/about":{
        page: "/pages/about.html",
        title:"404 | "
    },
    "/blog":{
        page: "/pages/blog.html",
        title:"404 | "
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



};

window.onpopstate=urlLocationHandler();
// window.route=urlRoute();

urlLocationHandler();