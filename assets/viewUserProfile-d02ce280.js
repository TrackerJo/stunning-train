import{c as u,a as e,R as f,r,j as s,l as g,S as w,H as b,T as p}from"./index-5ef40ff5.js";import{R as N}from"./restaurantLabel-25bb5e7c.js";import{b as P}from"./white_back_arrow-1296b56c.js";u.createRoot(document.getElementById("root")).render(e(f.StrictMode,{children:e(U,{})}));function U(){const[n,c]=r.exports.useState([]),[l,o]=r.exports.useState(0),[d,m]=r.exports.useState([]),[h,v]=r.exports.useState([]),i=new URLSearchParams(window.location.search).get("user");r.exports.useEffect(()=>{function a(){g(i).then(t=>{c(t)}),w(i).then(t=>{o(t)}),b().then(t=>{v(t)}),p(i).then(t=>{m(t)})}setTimeout(a,1e3)},[]);function R(a){window.location.href="/friends-and-family-reviews/"}return e("div",{className:"UserProfile",children:s("div",{className:"Info",children:[e("img",{src:P,alt:"back arrow",className:"back",onClick:R}),s("h1",{className:"name",children:[n.Name,"'s Profile"]}),s("label",{children:[n.ReviewsWritten," Reviews Written"]}),e("br",{}),s("label",{children:["Average Rating: ",l]}),s("div",{className:"RestaurantInfo",children:[s("div",{className:"FavoriteRestaurants",children:[e("h1",{children:"Favorite Restaurants"}),e("div",{className:"restaurants",children:h.map(a=>e(N,{restaurant:a},a.id))})]}),s("div",{className:"ReviewsGiven",children:[e("h1",{children:"Reviews Given"}),e("div",{className:"reviews",children:d.map(a=>(console.log(a),s("div",{className:"review",children:[e("label",{children:a.Name}),e("br",{}),s("label",{children:["★".repeat(a.Rating),"☆".repeat(5-a.Rating)]}),e("br",{}),e("label",{children:a.Description})]},a.RestaurantID)))})]})]})]})})}
