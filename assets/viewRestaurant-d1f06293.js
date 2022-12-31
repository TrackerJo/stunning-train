import{r,j as A,a as e,I as k,g as y,F as f,J as Q,K as D,c as L,R as P,L as H,M as p,N as b,O as T,P as U,Q as F}from"./index-5ef40ff5.js";import{x as C}from"./x_circle_fill-2634a9f7.js";import{b as K}from"./white_back_arrow-1296b56c.js";function W({isShown:t,setIsShown:l,restaurant:d,updateReviews:h,oldReview:w,reviewsSeen:v}){const[s,o]=r.exports.useState(w);function g(m){l("hidden")}function c(m){o({...s,Rating:m.target.value})}function R(m){o({...s,Description:m.target.value})}async function u(m){await k(d,w.Owner,s),h(v),l("hidden")}return A("div",{className:"Prompt",id:t,children:[e("img",{src:C,alt:"exit prompt",className:"exit",onClick:g}),e("h1",{children:"Edit Review"}),e("label",{children:"Rating"}),e("br",{}),e("input",{type:"number",min:"1",max:"5",onChange:c,value:s.Rating}),e("br",{}),e("label",{children:"Review"}),e("br",{}),e("textarea",{rows:"4",cols:"30",onChange:R,value:s.Description}),e("br",{}),e("button",{onClick:u,children:"Submit"})]})}const I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAYAAADqgqNBAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAH6ADAAQAAAABAAAAIAAAAABT9vqhAAABlUlEQVRIDeWWu0rEQBSGE1nQtfAp7AQbL6i1L2Anola+ga0Psrhg4z6A/foAgjbaWaiN2HjpBCvjdyQnxNlsMklOpnHgZy5Jzjf/zMkwUfQfSpIks+gEXaJjNBOHMA5oDs4AbeZ4o87h4hDgmQP+nYM86LTEcfwNYFwAeS4YsxnCcR8tazTae+g+1Q31kj4zrQks4HN0h7J9pr2LrlDnYHV5C2xD3dFe0LZpwhG4T+BTtK6AtP6iPmL/r/PjZglXAhbeJ/rIg6Vt4rwC/A7nANcPLry18wrw2zSwTKSVcw/wYZFjXYHGcMDzBJHkWtNguVocl4Ll3UZwC3AjuBW4NtwSXAtuDfaGdwH2gqfgIS+vygdO8cpq55usW5rtHmA5uR6zaDUbU0+4CvArnFZgmWehcw+wHCCNHesCTcBDgSechwT/gYcGZ3DAcq+W6+2KDDpFkstkj524kWb7Dg+CgmUiCt93Z0W/M8fK6rHkW3QWdSCt9T9+csZNuz2i5V3LfesCjfiPX0xJRcFwPkYDtI1kMsHKD4rB8bMhcv/9AAAAAElFTkSuQmCC";function O({review:t,updateReviews:l,restaurant:d,reviewsSeen:h}){const[w,v]=r.exports.useState(!1),[s,o]=r.exports.useState("hidden");return r.exports.useEffect(()=>{y().then(g=>{g==t.Owner&&v(!0)})},[]),A(f,{children:[A("div",{className:"reviewBox",children:[w?e("img",{src:I,alt:"edit review",className:"edit",onClick:()=>o("visible")}):null,e("label",{className:"rName",children:t.Name}),A("label",{className:"rRating",children:["★".repeat(t.Rating),"☆".repeat(5-t.Rating)]}),e("div",{className:"review",children:e("p",{children:t.Description})})]}),Q.exports.createPortal(e(W,{isShown:s,setIsShown:o,restaurant:d,updateReviews:l,oldReview:t,reviewsSeen:h}),document.querySelector(".Reviews"))]})}function j({isShown:t,setIsShown:l,restaurant:d,updateReviews:h,reviewsSeen:w}){const[v,s]=r.exports.useState(0),[o,g]=r.exports.useState("");function c(n){l("hidden")}function R(n){s(n.target.value)}function u(n){g(n.target.value)}async function m(n){await D(d,v,o),h(w),l("hidden")}return A("div",{className:"Prompt",id:t,children:[e("img",{src:C,alt:"exit prompt",className:"exit",onClick:c}),e("h1",{children:"Add Review"}),e("label",{children:"Rating"}),e("br",{}),e("input",{type:"number",min:"1",max:"5",onChange:R}),e("br",{}),e("label",{children:"Review"}),e("br",{}),e("textarea",{rows:"4",cols:"30",onChange:u}),e("br",{}),e("button",{onClick:m,children:"Submit"})]})}const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAJKADAAQAAAABAAAAJAAAAAAqDuP8AAACaUlEQVRYCe2YvWsUQRjG3TXGC4mgKAgSJVekCEHtxK8/QLjOyibYHFoE/wADptEypEgaCwu7CGqRQtIGhCi2WqiFd6AInrHTRE/j5vcct8fO7h47t7vJXnEvPLsz77wfz72zMze7zoEY8TzvKOopUAbHQQkMAwekkX84NcEv8Bl8Ah8dx/nP3RAjAUTOMXoHXAWuYZl/5wchV8AjiG374TuEIHMT5V3Q0flGe3yvEb8KqS/K00oOmQrtRSkKEpG6DqktFzJ6Pu4VRMRPW6ZRVUfPyTVwTJ2C5QbFcUXocsFE/PRazZMipHL1i5RF6HRGNtpjXoJ6xjhyHx/iMpIx0ByrY5X5V6wn4GyGeCOq0OEMAeT6WhdIqVJv1M4gJRHKuhHuBAgE2wG1dfOgCPWVDAglTUffVUhLNUn+YrAKvnUx7BwdGH8FZB8W5bkIzocHwn0bQgss6cdhx7g+dhvohYi096k1Bs5EBgMKmynTCS+ztPepr0mBbCo0y6/7TqBGl2ANkrWOotgdwWY0xk55LoELMWOGyobQNB5PDS+zc4XuZlt1i7uQWmymLHXwNI4DQklVG1QooUKeKhS3syb4GcMnA71gO6C2bja17P+AQ9YuUcP77D8PUU+ASnS4J81vEdKGN9aTm2msfWrZVKXubWrK6qnd83esidC7/OOmiqgz+XsRepHKPX+ndf4Tf7pc6sR+nn/8niLq5WBJHqqQ5AF422rt/8Uj5TyF+aDULUJ0tmjPAL3oRb5qodsr0fnoNvmf+Qki72TsKacY1BcRvYFOgBOgBIZBxB6djeiBDX/S20Cn50ZjHdkF1g94rAPOlb0AAAAASUVORK5CYII=";function V({reviews:t,restaurant:l,updateReviews:d,reviewsSeen:h,setReviewsSeen:w}){const[v,s]=r.exports.useState("hidden");function o(c){s("visible")}async function g(c){d(c.target.value)}return A(f,{children:[e("br",{}),e("label",{className:"title",children:"Reviews"})," ",e("img",{className:"add",src:G,alt:"add review",onClick:o}),e("br",{}),e("label",{htmlFor:"reviewsSeen",children:"Reviews Shown: "}),A("select",{name:"reviewsSeen",id:"reviewsSeen",onChange:g,children:[e("option",{value:"everyone",children:"Everyone"}),e("option",{value:"friends",children:"Friends"}),e("option",{value:"similar preferences",children:"People with similar preferences"})]}),e("br",{}),e("br",{}),e("div",{className:"reviewsBox",children:e("div",{className:"reviews",children:t.map(c=>e(O,{review:c,updateReviews:d,restaurant:l,reviewsSeen:h},c.id))})}),e(j,{isShown:v,setIsShown:s,restaurant:l,updateReviews:d,reviewsSeen:h})]})}L.createRoot(document.getElementById("root")).render(e(P.StrictMode,{children:e(Y,{})}));function Y(){const[t,l]=r.exports.useState([]),[d,h]=r.exports.useState([]),[w,v]=r.exports.useState(0);r.exports.useState("hidden");const[s,o]=r.exports.useState("everyone"),[g,c]=r.exports.useState(!1),[R,u]=r.exports.useState("/assets/white_star_empty.png"),n=new URLSearchParams(window.location.search).get("restaurant");r.exports.useEffect(()=>{H(n).then(a=>{l(a),p(n,s,a.Category).then(i=>{h(i),console.log(i)}),b(n,s,a.Category).then(i=>{v(i)}),T(n).then(i=>{i&&(c(!0),u("/assets/white_star_fill.png"))})})},[]);async function S(a){console.log("updating reviews"),o(a),console.log(s),p(n,a,t.Category).then(i=>{h(i)}),b(n,a,t.Category).then(i=>{v(i)})}function N(a){const i=document.querySelector(".Reviews");i.classList.contains("hideReviews")?(i.classList.remove("hideReviews"),i.classList.add("showAnimReviews"),a.target.innerText="Hide Reviews"):i.classList.contains("showAnimReviews")?(i.classList.add("hideAnimReviews"),i.classList.remove("showAnimReviews"),a.target.innerText="View Reviews"):i.classList.contains("hiddenReviews")&&(i.classList.remove("hiddenReviews"),i.classList.add("showAnimReviews"),a.target.innerText="Hide Reviews")}function x(){const a=document.querySelector(".Reviews");a.classList.contains("hideAnimReviews")&&(a.classList.add("hideReviews"),a.classList.remove("hideAnimReviews"))}function B(a){window.location.href="/friends-and-family-reviews/"}async function E(a){g?(c(!1),u("/assets/white_star_empty.png"),await U(n)):(c(!0),u("/assets/white_star_fill.png"),await F(n))}return A("div",{className:"Restaurant",children:[A("div",{className:"Info",children:[e("br",{}),e("img",{src:K,alt:"back arrow",className:"back",onClick:B}),e("label",{className:"name",children:t.Name}),e("img",{src:R,alt:"favorite restaurant",id:"favorite",onClick:E})," ",e("label",{className:"price",children:"$".repeat(t.Price)}),e("table",{className:"photoLoc",children:A("tr",{children:[A("th",{children:[e("p",{children:t.Description}),A("a",{href:t.Website,children:[t.Name,"'s Website"]}),e("br",{}),e("label",{children:t.Address}),e("br",{}),e("label",{children:t.City}),e("br",{}),e("label",{children:t.State})]}),e("th",{children:e("img",{src:t.Photo,className:"photo"})})]})}),A("label",{children:["Category: ",t.Category]}),e("br",{}),A("label",{children:["Rating (",s,")"]}),e("br",{}),A("label",{className:"aRating",children:["★".repeat(w),"☆".repeat(5-w)]}),e("br",{}),e("button",{onClick:N,children:"View Reviews"})]}),e("div",{className:"Reviews hiddenReviews",onAnimationEnd:x,children:e(V,{reviews:d,restaurant:n,updateReviews:S,reviewsSeen:s,setReviewsSeen:o})})]})}
