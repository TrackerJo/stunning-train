import{c,a as n,R as r,r as s,j as t,b as a}from"./index-e37b9d79.js";import{S as l}from"./signUp-94f8cabb.js";import{S}from"./signIn-03b8f5d3.js";c.createRoot(document.getElementById("root")).render(n(r.StrictMode,{children:n(d,{})}));function d(){const[e,i]=s.exports.useState("None");function o(){window.location.href=a}return t("div",{className:"Login b1",children:[n("h1",{children:"Friends&Family Reviews"}),e=="None"?t("div",{className:"Selections",children:[n("button",{onClick:()=>{i("Sign In")},children:"Sign In"}),n("button",{onClick:()=>{i("Sign Up")},children:"Sign Up"})]}):e=="Sign In"?n(S,{onLogin:o}):n(l,{onLogin:o})]})}
