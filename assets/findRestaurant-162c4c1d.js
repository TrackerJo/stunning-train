import{a as e,F as l,j as o,c as p,R as v,r,f as m,d as y,e as f,h as S,i as g}from"./index-5ef40ff5.js";import{R as C}from"./restaurantLabel-25bb5e7c.js";import{b as N}from"./white_back_arrow-1296b56c.js";function B({searchType:n}){if(n=="name")return e(l,{children:e("input",{type:"text",id:"search",class:"name"})});if(n=="city")return e(l,{children:e("input",{type:"text",id:"search",class:"city"})});if(n=="state")return e(l,{children:o("select",{id:"search",children:[e("option",{value:"AL",children:"Alabama"}),e("option",{value:"AK",children:"Alaska"}),e("option",{value:"AZ",children:"Arizona"}),e("option",{value:"AR",children:"Arkansas"}),e("option",{value:"CA",children:"California"}),e("option",{value:"CO",children:"Colorado"}),e("option",{value:"CT",children:"Connecticut"}),e("option",{value:"DE",children:"Delaware"}),e("option",{value:"DC",children:"District Of Columbia"}),e("option",{value:"FL",children:"Florida"}),e("option",{value:"GA",children:"Georgia"}),e("option",{value:"HI",children:"Hawaii"}),e("option",{value:"ID",children:"Idaho"}),e("option",{value:"IL",children:"Illinois"}),e("option",{value:"IN",children:"Indiana"}),e("option",{value:"IA",children:"Iowa"}),e("option",{value:"KS",children:"Kansas"}),e("option",{value:"KY",children:"Kentucky"}),e("option",{value:"LA",children:"Louisiana"}),e("option",{value:"ME",children:"Maine"}),e("option",{value:"MD",children:"Maryland"}),e("option",{value:"MA",children:"Massachusetts"}),e("option",{value:"MI",children:"Michigan"}),e("option",{value:"MN",children:"Minnesota"}),e("option",{value:"MS",children:"Mississippi"}),e("option",{value:"MO",children:"Missouri"}),e("option",{value:"MT",children:"Montana"}),e("option",{value:"NE",children:"Nebraska"}),e("option",{value:"NV",children:"Nevada"}),e("option",{value:"NH",children:"New Hampshire"}),e("option",{value:"NJ",children:"New Jersey"}),e("option",{value:"NM",children:"New Mexico"}),e("option",{value:"NY",children:"New York"}),e("option",{value:"NC",children:"North Carolina"}),e("option",{value:"ND",children:"North Dakota"}),e("option",{value:"OH",children:"Ohio"}),e("option",{value:"OK",children:"Oklahoma"}),e("option",{value:"OR",children:"Oregon"}),e("option",{value:"PA",children:"Pennsylvania"}),e("option",{value:"RI",children:"Rhode Island"}),e("option",{value:"SC",children:"South Carolina"}),e("option",{value:"SD",children:"South Dakota"}),e("option",{value:"TN",children:"Tennessee"}),e("option",{value:"TX",children:"Texas"}),e("option",{value:"UT",children:"Utah"}),e("option",{value:"VT",children:"Vermont"}),e("option",{value:"VA",children:"Virginia"}),e("option",{value:"WA",children:"Washington"}),e("option",{value:"WV",children:"West Virginia"}),e("option",{value:"WI",children:"Wisconsin"}),e("option",{value:"WY",children:"Wyoming"})]})});if(n=="category")return e(l,{children:o("select",{id:"search",children:[e("option",{value:"American",children:"American"}),e("option",{value:"Asian",children:"Asian"}),e("option",{value:"Barbecue",children:"Barbecue"}),e("option",{value:"Bakery",children:"Bakery"}),e("option",{value:"Breakfast",children:"Breakfast"}),e("option",{value:"Cafe",children:"Cafe"}),e("option",{value:"Chinese",children:"Chinese"}),e("option",{value:"Fast Food",children:"Fast Food"}),e("option",{value:"French",children:"French"}),e("option",{value:"Greek",children:"Greek"}),e("option",{value:"Indian",children:"Indian"}),e("option",{value:"Italian",children:"Italian"}),e("option",{value:"Japanese",children:"Japanese"}),e("option",{value:"Mexican",children:"Mexican"}),e("option",{value:"Pizza",children:"Pizza"}),e("option",{value:"Seafood",children:"Seafood"}),e("option",{value:"Southern",children:"Southern"}),e("option",{value:"Spanish",children:"Spanish"}),e("option",{value:"Thai",children:"Thai"}),e("option",{value:"Vietnamese",children:"Vietnamese"})]})});if(n=="price")return e(l,{children:o("select",{id:"search",children:[e("option",{value:"1",children:"$"}),e("option",{value:"2",children:"$$"}),e("option",{value:"3",children:"$$$"}),e("option",{value:"4",children:"$$$$"})]})})}p.createRoot(document.getElementById("root")).render(e(v.StrictMode,{children:e(I,{})}));function I(){const[n,c]=r.exports.useState("name"),[d,t]=r.exports.useState([]);function h(a){c(a.target.value)}function s(a){document.querySelector(".FindRestaurants").style.display="none",document.querySelector(".Results").style.display="flex",n=="name"?m(document.getElementById("search").value).then(i=>{t(i)}):n=="city"?y(document.getElementById("search").value).then(i=>{t(i)}):n=="state"?f(document.getElementById("search").value).then(i=>{t(i)}):n=="category"?S(document.getElementById("search").value).then(i=>{t(i)}):n=="price"&&g(document.getElementById("search").value).then(i=>{t(i)})}function u(a){window.location.href="/friends-and-family-reviews/"}return o(l,{children:[o("div",{className:"FindRestaurants",children:[e("img",{src:N,alt:"back arrow",className:"back",onClick:u}),e("h1",{children:"Search for Restaurants"}),e("label",{htmlFor:"searchBy",children:"Search By: "}),o("select",{id:"searchBy",onChange:h,children:[e("option",{value:"name",children:"Name"}),e("option",{value:"city",children:"City"}),e("option",{value:"state",children:"State"}),e("option",{value:"category",children:"Category"}),e("option",{value:"price",children:"Price"})]}),e(B,{searchType:n}),e("button",{onClick:s,children:"Search"})]}),o("div",{className:"Results",style:{display:"none"},children:[e("h1",{children:"Search Results"}),d.map(a=>(console.log(a),e(C,{restaurant:a},a.id)))]})]})}