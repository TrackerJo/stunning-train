import{j as r,a as e,t as G,g as R,u as U,v as Q,w as I,r as A,x as C,c as P,R as Y,F as J,y as S,z as k,A as N,B as b,C as H}from"./index-ccd12c49.js";import{x as h,c as T}from"./x_circle_white-9ec70077.js";import{x as D}from"./x_circle_fill-2634a9f7.js";import{b as j}from"./white_back_arrow-1296b56c.js";function z({friend:n,updateFriends:s}){async function i(){await G(n.uid),s()}function t(){window.location.href=R()+"viewUserProfile/?user="+n.uid}return r("div",{className:"FriendLabel",onClick:t,children:[e("label",{children:n.Name}),e("img",{src:h,alt:"remove friend",className:"remove",onClick:i})]})}function M({friends:n,updateFriends:s}){return r("div",{className:"Friends",children:[e("br",{}),e("div",{className:"friendList",children:n.map(i=>e(z,{friend:i,updateFriends:s},i.uid))})]})}function X({friend:n,updateFriendRequests:s,updateFriends:i}){async function t(){await U(n.uid),s(),i()}async function d(){await Q(n.uid),s()}return r("div",{className:"FriendRequestLabel",children:[e("label",{children:n.Name}),e("img",{src:h,alt:"reject request",className:"reject",onClick:d}),e("img",{src:T,alt:"accept request",className:"accept",onClick:t})]})}function K({friendRequests:n,updateFriendRequests:s,updateFriends:i}){return r("div",{className:"FriendRequests",children:[e("br",{}),e("div",{className:"friendRequestsList",children:n.map(t=>e(X,{friend:t,updateFriendRequests:s,updateFriends:i},t.uid))})]})}function Z({request:n,updateSentRequests:s}){function i(){I(n.uid),s()}return r("div",{className:"SentRequestLabel",children:[e("label",{children:n.Name}),e("img",{src:h,alt:"remove request",className:"remove",onClick:i})]})}function O({sentRequests:n,updateSentRequests:s}){return r("div",{className:"SentFriendRequests",children:[e("br",{}),e("div",{className:"sentRequestsList",children:n.map(i=>e(Z,{request:i,updateSentRequests:s},i.uid))})]})}function W({isShown:n,setIsShown:s,updateSentRequests:i}){const[t,d]=A.exports.useState("");function c(l){document.getElementById("name").value="",s("hidden")}function m(l){d(l.target.value)}async function o(l){await C(t),i(),c()}return r("div",{className:"Prompt",id:n,children:[e("img",{src:D,alt:"exit prompt",className:"exit",onClick:c}),e("h1",{children:"Send Friend Request"}),r("div",{className:"PromptInfo",children:[e("label",{children:"Friend's Name"}),e("br",{}),e("input",{type:"text",id:"name",onChange:m}),e("br",{}),e("button",{onClick:o,children:"Send Friend Request"})]})]})}function $({suggestedFriend:n,updateSuggestedFriends:s,updateSentRequests:i}){async function t(){await C(n.Name),i(),s()}function d(){window.location.href=R()+"viewUserProfile/?user="+n.uid}return r("div",{className:"FriendLabel",onClick:d,children:[e("label",{className:"name",children:n.Name}),e("label",{className:"similarity",children:n.Similarity}),e("button",{className:"addFriend",onClick:t,children:"Add Friend"})]})}function _({suggestedFriends:n,updateSuggestedFriends:s,updateSentRequests:i}){return r("div",{className:"SuggestedFriends",children:[e("br",{}),e("div",{className:"friendList",children:n.map(t=>e($,{suggestedFriend:t,updateSuggestedFriends:s,updateSentRequests:i},t.uid))})]})}const ee="data:image/png;base64,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",ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAyCAYAAADFhCKTAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAK6ADAAQAAAABAAAAMgAAAAADLLILAAAEMklEQVRoBe2Ya4hNURTH547BjInIYBhDeSalPMoXFBkiihRpoiHyzQeSSMijJo+PIhE+SFJCEzJoCh8GY6RRSom835H36/r9xzmnfWfOufvcuXt8uqv+d+291t5r/e86++yzz8nLy0muArkK5CqQq0BYBZLJZCEoA13C/HFtibgDMx0HsU7MqQRzwXBj/kPaNeBQIpH4ZNitzXYhC9EhZN4LBqRh8AbfSgg3pBmT4nJOFqKDyXAcdE3JFN75ibkKwjfD3alWp2Qh2pHwp4EIxxVVeAaEP9om5NsGZOifx/hMiCp8CViqhk1ck51vSxjh15+0ijOyLIEeZBtpzRg+oLd3U4Z7PaszssTrmzaT3dnPNsQl2WJbMou/yOLPc0n2nS2Zxf/W4ndK9jHJvtgSRvj/YL8f4QvMzirLPvmDqNeCyJk1Gpn/wTbFGVkv0QFbwgh/rHlOyVKd25A5GUEoylzHvMtRTtPu9HGrwOyXhaiDYJz6FrmHf3GcJaA4TiurgCT+hloCjoEkiBIdEyvjElUQ55U1mVHlYfTngNGgJ3gPmsBpSN5B5yRXgUwr0C5rlrWqQ/hQoDVbDvTWoJdFPTg+gSfgAWjybkiadnFGFoIdSDcFzAITQZyDzS/G3QDnQA3EP6MjJZIsyUcwayoYA0qAtqEX4DqoJfAjdLMwVnH2g0n/LG36FdEj4CCxVf1W0oosiXWAXgvGtxqdajhPdxeBdYDRw0CH76Mg09caTTflFZ3NxL1kGtVOIUvCBdg2ggI5Y4iqsYrAdRrL/DLUKdBN/SxF5wUVI3iwBE8wEi3CuQWEERWp76ClaF3uY+5kOQj8FLVNbQeyjBjVxA4K2kwWwzgc6yMSPMM+AUwFYYQVbDcxBqIlZ0BTcyv7Hz39Vvth8j3mGzAEVfadnn5Ixb4AraXXLXx+VxVeo4532Q6r7UiWw1G7SzNB3cG687OVCoL6N9dFgmlPdSWbiF2gak5zFZE4Wiqq7leUzraupJxA00W25RalRNpPfZgvgloKvv0lbX2rMsWMZX2nMifGaM8sYFCpMfAJ7dlao4YtaGJfGHRocGn6oGpBZ89uxjL/pOfOSo1SZYOtgbaqKsQVfUz7ZQw2Y/0x7C6axaqsvuL5FdHh4ywV06X25S4V3aUO9h2oXp5DxLRdaSfwxdwtuvtGR7pBZBvBDCPgINpCmIzF2D/M4dkUyxf9kZZr2vfF0XpyaUfRvXEV7BFZrTmTLN02ywV/Jldjhd92pbVmRVaPyWylHoJ3sw2Sbn4+CVTqnWkGlbJWE6CIMTpZhYkud3WYw6UtuHshs47AVRHB72MX2aj1uoE/fSJirjOzSVZLYi2oyiD6b8Zuhai+EbS7BGT9TFRYN5sOJWW+LULrZLUdorci/M7NrcgqA4Q7oSo86ANFiczgOagHuuuvQFS2/yZ/ATRPC0YL0VXiAAAAAElFTkSuQmCC";P.createRoot(document.getElementById("root")).render(e(Y.StrictMode,{children:e(ie,{})}));function ie(){const[n,s]=A.exports.useState("Friends"),[i,t]=A.exports.useState([]),[d,c]=A.exports.useState([]),[m,o]=A.exports.useState([]),[l,f]=A.exports.useState("hidden"),[w,q]=A.exports.useState([]);A.exports.useEffect(()=>{async function a(){let F=await S();t(F);let y=await k();c(y);let V=await N();o(V);let x=await b();q(x)}setTimeout(()=>{a()},500)},[]);function B(a){window.location.href=R()}function u(a){s(a.target.innerText),document.querySelector(".active").className="",a.target.className="active"}async function g(){let a=await N();o(a)}async function p(){let a=await b();q(a)}async function v(){let a=await S();t(a)}async function L(){let a=await k();c(a)}async function E(a){let F=await H();await navigator.clipboard.writeText(F),alert("Friend link copied to clipboard!")}return r(J,{children:[r("div",{className:"ManageFriends",children:[e("img",{src:j,alt:"back arrow",className:"back",onClick:B}),e("h1",{children:"Manage Friends"}),e("br",{}),e("img",{src:ne,alt:"add friend",className:"addFriend",onClick:()=>f("visible")}),e("img",{src:ee,alt:"generate friend link",className:"friendLink",onClick:E}),r("ul",{children:[e("li",{children:e("a",{className:"active",onClick:u,children:"Friends"})}),e("li",{children:e("a",{onClick:u,children:"Friend Requests"})}),e("li",{children:e("a",{onClick:u,children:"Sent Friend Requests"})}),e("li",{children:e("a",{onClick:u,children:"Suggested Friends"})})]}),n=="Friends"?e(M,{friends:i,updateFriends:v}):n=="Friend Requests"?e(K,{friendRequests:d,updateFriends:v,updateFriendRequests:L}):n=="Suggested Friends"?e(_,{SuggestedFriends:w,updateSuggestedFriends:p,updateSentRequests:g}):e(O,{sentRequests:m,updateSentRequests:g})]}),e(W,{isShown:l,setIsShown:f,updateSentRequests:g})]})}
