"use strict";(self.webpackChunkcharacterstudio_docs=self.webpackChunkcharacterstudio_docs||[]).push([[3725],{3633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(4848),s=t(8453);const a={},o="Change animations",r={id:"Modders/change-animations",title:"Change animations",description:"The animation files are referenced via animationPath in the manifest.json file, here's an example (source):",source:"@site/docs/Modders/change-animations.md",sourceDirName:"Modders",slug:"/Modders/change-animations",permalink:"/characterstudio-docs/docs/Modders/change-animations",draft:!1,unlisted:!1,editUrl:"https://github.com/m3-org/characterstudio-docs/tree/main/docs/Modders/change-animations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Useful Scripts",permalink:"/characterstudio-docs/docs/Modders/manifest-files/generate-manifest-files"},next:{title:"Processing Assets",permalink:"/characterstudio-docs/docs/Modders/process-avatars"}},c={},l=[];function h(e){const n={a:"a",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"change-animations",children:"Change animations"}),"\n",(0,i.jsxs)(n.p,{children:["The animation files are referenced via ",(0,i.jsx)(n.code,{children:"animationPath"})," in the manifest.json file, here's an example (",(0,i.jsx)(n.a,{href:"https://github.com/M3-org/loot-assets/blob/main/loot/models/manifest.json",children:"source"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json!",children:'{\n  "assetsLocation": "./loot-assets/",\n  "format": "vrm",\n  "traitsDirectory": "./models/",\n  "thumbnailsDirectory": "./models/",\n  "exportScale": 1,\n  "animationPath": [\n    "./animations/1_T-Pose.fbx",\n    "./animations/2_Idle.fbx",\n    "./animations/3_Walking.fbx",\n    "./animations/4_Waving.fbx"\n  ],\n  "traitIconsDirectorySvg": "./icons/",\n  "defaultCullingLayer": -1,\n  "defaultCullingDistance": [\n    0.1,\n    0.01\n  ],\n...\n'})}),"\n",(0,i.jsx)(n.p,{children:"Pro tip: The first animation file in the list is really important for batch processing manifest.json files when using Character Studio as a way to assemble many VRMs."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The first animation file is used when taking screenshots of VRMs so you can get a preview of what the collection looks like before exporting the actual files (which can take much longer)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Here the avatars are being overrided with an a-pose.fbx animation for previews:\n",(0,i.jsx)(n.img,{src:"https://i.imgur.com/5erJutX.gif",alt:""})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"They're also useful during batch processing since you can load many manifest.json files and then scroll through them while it's playing the default animation. You can use this to catch clipping / weight issues faster:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/LbTte4L.gif",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["We're currently using mixamo rigged animations ",(0,i.jsx)(n.strong,{children:"without skin"})," to retarget the VRM avatars with. You will want to check the box for ",(0,i.jsx)(n.code,{children:"In place"})," whenever, otherwise your avatar will walk off screen ","\ud83d\ude02",". Check out the useful links below."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.mixamo.com/",children:"https://www.mixamo.com/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/M3-org/CharacterStudio/tree/main/public/3d/animations",children:"https://github.com/M3-org/CharacterStudio/tree/main/public/3d/animations"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://hackmd.io/_uploads/HJMapKb36.jpg",alt:"Screenshot_2024-02-19_21-25-22"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);