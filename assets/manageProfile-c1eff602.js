import{c as L,a as e,R,r as i,j as n,F as A,C as H,D,E as I,G as B,H as U,I as W}from"./index-e37b9d79.js";import{S as j}from"./signIn-03b8f5d3.js";import{b as G}from"./white_back_arrow-1296b56c.js";L.createRoot(document.getElementById("root")).render(e(R.StrictMode,{children:e(O,{})}));function O(){const[l,o]=i.exports.useState([]),[q,u]=i.exports.useState(!1),[h,m]=i.exports.useState(!1),[p,g]=i.exports.useState(!1),[f,b]=i.exports.useState(!1),[S,P]=i.exports.useState(!1),[v,c]=i.exports.useState(!1),[y,d]=i.exports.useState(!1),[C,w]=i.exports.useState(!1);document.onkeydown=function(t){t=t||window.event,t.keyCode==27&&(d(!1),c(!1))},i.exports.useEffect(()=>{async function t(){let a=await H();o(a),console.log(a),console.log(a.Preferences.Coffee.roastingStyle),w(!0)}setTimeout(()=>{t()},600)},[]);function F(t){window.location.href="/friends-and-family-reviews/"}function r(t){let a=t.target.nextElementSibling;if(t.target.parentElement.className=="content"){parent=t.target.parentElement;let s=parent.scrollHeight+a.scrollHeight;parent.style.maxHeight=s+"px",console.log("parent is also collapsible",parent,s)}t.target.classList.toggle("active"),a.style.maxHeight?a.style.maxHeight=null:a.style.maxHeight=a.scrollHeight+"px"}function k(t){if(console.log(t.target),t.target.name=="Email"&&u(!0),t.target.classList.contains("ProfileSettings")){let a={...l};t.target.name=="Name"?a[t.target.name]=t.target.value:a.ProfileSettings[t.target.name]=t.target.value,o(a),m(!0)}if(t.target.classList.contains("PreferenceSettings")){let a={...l};console.log(a.Preferences[t.target.parentElement.id]),console.log(t.target.parentElement.id),a.Preferences[t.target.parentElement.id][t.target.name]=t.target.value,o(a),console.log(l),g(!0)}if(t.target.classList.contains("FriendSettings")){let a={...l};t.target.name=="allowSuggestedFriends"?a.FriendSettings[t.target.name]=t.target.checked:a.FriendSettings[t.target.name]=t.target.value,o(a),b(!0)}t.target.classList.contains("AccountSettings")&&(o({...l,[t.target.name]:t.target.value}),P(!0))}function N(t){console.log("update account settings")}function T(t){console.log("update friend settings"),D(l.FriendSettings)}async function M(t){await I(l),console.log("update profile settings")}async function z(t,a){c(!1),await B(t,a),d(!0)}async function V(t){c(!0),console.log("update password")}async function x(t){let a=document.getElementById("password"),s=document.getElementById("confirmedPassword");if(a.value.length<6){alert("Password must be at least 6 characters"),a.value="",s.value="";return}if(a.value!=s.value){alert("Passwords do not match"),a.value="",s.value="";return}await U(a.value),d(!1),console.log("updated password")}async function E(t){await W(l.Preferences),console.log("update preferences")}return C?n(A,{children:[n("div",{className:"ManageProfile",children:[e("img",{src:G,alt:"back arrow",className:"back",onClick:F}),e("h1",{children:"Manage Profile"}),n("div",{className:"Settings",onChange:k,children:[e("button",{className:"collapsible",onClick:r,children:"Profile Settings"}),n("div",{className:"content",children:[e("br",{}),e("label",{htmlFor:"Name",children:"Display Name: "}),e("input",{type:"text",id:"Name",name:"Name",className:"ProfileSettings",defaultValue:l.Name}),e("br",{}),e("label",{htmlFor:"favoritedRestaurantsVisibility",children:"Favorited Restaurants Visibility: "}),n("select",{name:"favoritedRestaurantsVisibility",id:"favoritedRestaurantsVisibility",className:"ProfileSettings",defaultValue:l.ProfileSettings.favoritedRestaurantsVisibility,children:[e("option",{value:"Public",children:"Public"}),e("option",{value:"Friends",children:"Friends"}),e("option",{value:"Private",children:"Private"})]}),e("br",{}),h?e("button",{onClick:M,children:"Save Changes"}):null,e("br",{}),e("br",{})]}),e("button",{className:"collapsible",onClick:r,children:"Preference Settings"}),n("div",{className:"content",children:[e("br",{}),e("button",{className:"collapsible",onClick:r,children:"Coffee Preferences"}),n("div",{className:"content",id:"Coffee",children:[e("br",{}),e("label",{htmlFor:"roastingStyle",children:"Roasting Styles: "}),n("select",{name:"roastingStyle",id:"roastingStyle",className:"PreferenceSettings",defaultValue:l.Preferences.Coffee.roastingStyle,children:[e("option",{value:"Light",children:"Light"}),e("option",{value:"Medium",children:"Medium"}),e("option",{value:"Dark",children:"Dark"})]}),e("br",{}),e("label",{htmlFor:"syrupType",children:"Syrup Types: "}),n("select",{name:"syrupType",id:"syrupType",className:"PreferenceSettings",defaultValue:l.Preferences.Coffee.syrupType,children:[e("option",{value:"Homemade",children:"Homemade"}),e("option",{value:"Premade",children:"Premade"})]}),e("br",{}),e("label",{htmlFor:"milkType",children:"Milk Types: "}),n("select",{name:"milkType",id:"milkType",className:"PreferenceSettings",defaultValue:l.Preferences.Coffee.milkType,children:[e("option",{value:"Whole",children:"Whole Milk"}),e("option",{value:"Almond",children:"Almond"}),e("option",{value:"Oat",children:"Oat"}),e("option",{value:"Soy",children:"Soy"})]}),e("br",{}),e("label",{htmlFor:"coffeeType",children:"Coffee Types: "}),n("select",{name:"coffeeType",id:"coffeeType",className:"PreferenceSettings",defaultValue:l.Preferences.Coffee.coffeeType,children:[e("option",{value:"Espresso",children:"Espresso"}),e("option",{value:"Americano",children:"Americano"}),e("option",{value:"Latte",children:"Latte"}),e("option",{value:"Cappuccino",children:"Cappuccino"}),e("option",{value:"Mocha",children:"Mocha"}),e("option",{value:"Macchiato",children:"Macchiato"}),e("option",{value:"Frappuccino",children:"Frappuccino"}),e("option",{value:"Iced Coffee",children:"Iced Coffee"})]}),e("br",{}),e("br",{})]}),e("br",{}),e("button",{className:"collapsible",onClick:r,children:"Meat Preferences"}),n("div",{className:"content",id:"Meat",children:[e("br",{}),e("label",{htmlFor:"meatType",children:"Meat Types: "}),n("select",{name:"meatType",id:"meatType",className:"PreferenceSettings",defaultValue:l.Preferences.Meat.meatType,children:[e("option",{value:"Beef",children:"Beef"}),e("option",{value:"Pork",children:"Pork"}),e("option",{value:"Chicken",children:"Chicken"}),e("option",{value:"Fish",children:"Fish"}),e("option",{value:"Vegan",children:"Vegan"})]}),e("br",{}),e("label",{htmlFor:"meatStyle",children:"Meat Styles: "}),n("select",{name:"meatStyle",id:"meatStyle",className:"PreferenceSettings",defaultValue:l.Preferences.Meat.meatStyle,children:[e("option",{value:"Grilled",children:"Grilled"}),e("option",{value:"Fried",children:"Fried"}),e("option",{value:"Baked",children:"Baked"}),e("option",{value:"Steamed",children:"Steamed"})]}),e("br",{}),e("label",{htmlFor:"meatCook",children:"Meat Cook: "}),n("select",{name:"meatCook",id:"meatCook",className:"PreferenceSettings",defaultValue:l.Preferences.Meat.meatCook,children:[e("option",{value:"Rare",children:"Rare"}),e("option",{value:"Medium Rare",children:"Medium Rare"}),e("option",{value:"Medium",children:"Medium"}),e("option",{value:"Medium Well",children:"Medium Well"}),e("option",{value:"Well Done",children:"Well Done"})]}),e("br",{}),e("br",{})]}),e("br",{}),e("button",{className:"collapsible",onClick:r,children:"Pizza Preferences"}),n("div",{className:"content",id:"Pizza",children:[e("br",{}),e("label",{htmlFor:"pizzaType",children:"Pizza Types: "}),n("select",{name:"pizzaType",id:"pizzaType",className:"PreferenceSettings",defaultValue:l.Preferences.Pizza.pizzaType,children:[e("option",{value:"Pepperoni",children:"Pepperoni"}),e("option",{value:"Cheese",children:"Cheese"}),e("option",{value:"Veggie",children:"Veggie"}),e("option",{value:"Meat Lovers",children:"Meat Lovers"}),e("option",{value:"Vegan",children:"Vegan"})]}),e("br",{}),e("label",{htmlFor:"pizzaStyle",children:"Pizza Style: "}),n("select",{name:"pizzaStyle",id:"pizzaStyle",className:"PreferenceSettings",defaultValue:l.Preferences.Pizza.pizzaStyle,children:[e("option",{value:"Thin Crust",children:"Thin Crust"}),e("option",{value:"Thick Crust",children:"Thick Crust"}),e("option",{value:"Deep Dish",children:"Deep Dish"})]}),e("br",{}),e("br",{})]}),e("br",{}),p?e("button",{onClick:E,children:"Save Changes"}):null,e("br",{}),e("br",{})]}),e("button",{className:"collapsible",onClick:r,children:"Friend Settings"}),n("div",{className:"content",children:[e("br",{}),e("label",{htmlFor:"allowSuggestedFriends",children:"Allow Suggested Friends: "}),e("input",{type:"checkbox",id:"allowSuggestedFriends",name:"allowSuggestedFriends",className:"FriendSettings",defaultChecked:l.FriendSettings.allowSuggestedFriends}),e("br",{}),n("p",{htmlFor:"minSimilarities",children:["Minimum number of similarites ",e("br",{})," for suggested friends and reviews: "]}),e("input",{type:"number",id:"minSimilarities",name:"minSimilarities",className:"FriendSettings",defaultValue:l.FriendSettings.minSimilarities}),e("br",{}),e("br",{}),e("br",{}),f?e("button",{onClick:T,children:"Save Changes"}):null,e("br",{}),e("br",{})]}),e("button",{className:"collapsible",onClick:r,children:"Account Settings"}),n("div",{className:"content",children:[e("br",{}),e("label",{htmlFor:"changePassword",id:"changePasswordLabel",children:"Password: "}),e("button",{id:"changePassword",onClick:V,children:"Change Password"}),e("br",{}),e("label",{htmlFor:"Email",children:"Email: "}),e("input",{type:"text",id:"Email",name:"Email",defaultValue:l.Email,className:"AccountSettings"}),e("br",{}),S?e("button",{onClick:N,children:"Save Changes"}):null,e("br",{}),e("br",{})]})]})]}),v?n("div",{className:"Login",children:[e("h1",{children:"ReLogin"}),e(j,{returnCredentials:z})]}):null,y?n("div",{className:"Login",children:[e("h1",{children:"Change Password"}),e("label",{htmlFor:"password",children:"New Passowrd: "}),e("input",{type:"password",name:"password",id:"password"}),e("br",{}),e("label",{htmlFor:"confirmPassword",children:"Confirm Password: "}),e("input",{type:"password",name:"confirmPassword",id:"confirmedPassword"}),e("br",{}),e("button",{onClick:x,children:"Change Password"})]}):null]}):e("div",{})}
