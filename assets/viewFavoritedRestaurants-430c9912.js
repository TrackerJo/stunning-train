import{c as i,a,R as c,r as t,j as l,H as d}from"./index-5ef40ff5.js";import{R as m}from"./restaurantLabel-25bb5e7c.js";import{b as u}from"./white_back_arrow-1296b56c.js";i.createRoot(document.getElementById("root")).render(a(c.StrictMode,{children:a(f,{})}));function f(){const[s,r]=t.exports.useState([]);t.exports.useEffect(()=>{function e(){d().then(n=>{r(n)})}setTimeout(e,1e3)},[]);function o(e){window.location.href="/friends-and-family-reviews/"}return l("div",{className:"FavoriteRestaurants",children:[a("img",{src:u,alt:"back arrow",className:"back",onClick:o}),a("h1",{className:"name",children:"Favorite Restaurants"}),a("div",{className:"restaurants",children:s.map(e=>(console.log(e),a(m,{restaurant:e},e.id)))})]})}
