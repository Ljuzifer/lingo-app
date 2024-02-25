"use strict";(self.webpackChunklingo_app=self.webpackChunklingo_app||[]).push([[426],{8516:(e,s,a)=>{a.d(s,{A:()=>n});const r="Container_container__VVOCq";var t=a(579);const n=e=>{let{children:s}=e;return(0,t.jsx)("div",{className:r,children:s})}},898:(e,s,a)=>{a.d(s,{A:()=>n});const r="Section_section__Z2PLw";var t=a(579);const n=e=>{let{children:s}=e;return(0,t.jsx)("div",{className:r,children:s})}},2463:(e,s,a)=>{a.d(s,{A:()=>ae});var r=a(5043);const t="TeacherCard_wrap_teacher__iqhbe",n="TeacherCard_teacher_info__vfhom",i="TeacherCard_favorit_position__t60X4",l="TeacherAvatar_avatar__B8jUV";var c=a(579);const o=e=>{let{teacher:s}=e;return(0,c.jsxs)("div",{className:l,children:[(0,c.jsx)("span",{}),(0,c.jsx)("img",{src:s.avatar_url,alt:"Avatar_teacher"})]})},d="FavoriteButton_btn_heart__2ssfe",_="FavoriteButton_icon_heart__3Bau9";var h=a(6286);const v=e=>{let{isFavorite:s,randomStyle:a,handleAddToFavorites:r}=e;return(0,c.jsx)("button",{className:d,type:"button",onClick:r,children:(0,c.jsx)("svg",{className:_,style:s?{fill:a.btn,stroke:a.btn}:{},children:(0,c.jsx)("use",{xlinkHref:"".concat(h.A,"#heart")})})})},x={teacher_wrap:"TeacherStats_teacher_wrap__dFjj1",servis_span:"TeacherStats_servis_span__Y5My-",teacher_statics:"TeacherStats_teacher_statics__TW+L8",static_after:"TeacherStats_static_after__rat2F",rating:"TeacherStats_rating__YdJIS",icon:"TeacherStats_icon__FavWJ",price:"TeacherStats_price__EpnQS",icon_heart:"TeacherStats_icon_heart__ygbiC",active:"TeacherStats_active__st5kr",icon_book:"TeacherStats_icon_book__xh2i5",favorit_position:"TeacherStats_favorit_position__m1Jj0"},m=e=>{let{teacher:s,isFavoriteBtn:a,randomStyle:r,handleAddToFavorites:t}=e;return(0,c.jsx)("div",{className:x.teacher_info,children:(0,c.jsxs)("div",{className:x.teacher_wrap,children:[(0,c.jsx)("span",{className:x.servis_span,children:"Languages"}),(0,c.jsxs)("ul",{className:x.teacher_statics,children:[(0,c.jsxs)("li",{className:x.static_after,children:[(0,c.jsx)("svg",{className:x.icon_book,children:(0,c.jsx)("use",{xlinkHref:"".concat(h.A,"#book")})}),(0,c.jsx)("p",{children:"Lessons online"})]}),(0,c.jsx)("li",{className:x.static_after,children:(0,c.jsxs)("p",{children:["Lessons done: ",s.lessons_done]})}),(0,c.jsxs)("li",{className:"".concat(x.rating," ").concat(x.static_after),children:[(0,c.jsx)("svg",{className:x.icon,children:(0,c.jsx)("use",{xlinkHref:"".concat(h.A,"#star")})}),(0,c.jsxs)("p",{children:["Rating: ",s.rating]})]}),(0,c.jsxs)("li",{children:[" ",(0,c.jsxs)("p",{children:["Price / 1 hour:"," ",(0,c.jsxs)("span",{className:x.price,children:[s.price_per_hour,"$"]})]})]})]}),(0,c.jsx)("span",{className:x.favorit_position,children:(0,c.jsx)(v,{isFavorite:a(s),randomStyle:r,handleAddToFavorites:t})})]})})},j="TeacherLevels_level_wrap__j1arT",p="TeacherLevels_level__CLsJx",u=e=>{let{teacher:s,selectedLevel:a,randomStyle:r}=e;return(0,c.jsx)("div",{className:j,children:s.levels.map(((e,s)=>(0,c.jsxs)("h3",{className:p,type:e,style:e.toLowerCase()===a.toLowerCase()?{backgroundColor:r.btn,borderColor:r.btn}:{},children:["#",e]},s)))})},f="BookTrialLessonButton_btn__K94Hw",N=e=>{let{expanded:s,randomStyle:a,openModal:r}=e;return s&&(0,c.jsx)("button",{className:f,type:"button",style:{"--color-btn":a.btn,"--active-color-btn":a.background},onClick:r,children:"Book trial lesson"})},T="Reviews_review__sHbuN",b="Reviews_btn_read__aKEuL",g="Reviews_name__kx3f+",F="Reviews_rating__tKq58",y="Reviews_text__EqLvx",A="Reviews_icon__6Roml";function w(e){let{id:s,reviews:a,expandedReviews:r,setExpandedReviews:t}=e;return(0,c.jsx)(c.Fragment,{children:r[s]?(0,c.jsx)("div",{className:T,children:a.map(((e,s)=>(0,c.jsxs)("div",{className:T,children:[(0,c.jsx)("h3",{className:g,children:e.reviewer_name}),(0,c.jsxs)("div",{className:F,children:[(0,c.jsx)("svg",{className:A,children:(0,c.jsx)("use",{xlinkHref:"".concat(h.A,"#star")})}),(0,c.jsxs)("p",{children:[e.reviewer_rating,".0"]})]}),(0,c.jsx)("p",{className:y,children:e.comment})]},s)))}):(0,c.jsx)("button",{className:b,type:"button",onClick:()=>{return e=s,void t((s=>({...s,[e]:!s[e]})));var e},children:"Read more"})})}const k="TeacherInfo_name__J62Qd",S="TeacherInfo_teacher_info_text__qlQ1+",L="TeacherInfo_speaks__8eJHW",C="TeacherInfo_servis_span__RP6UR";function B(e){let{teacher:s}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("h2",{className:k,children:[s.name," ",s.surname]}),(0,c.jsxs)("div",{className:S,children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("span",{className:C,children:"Speaks:"})," ",(0,c.jsx)("span",{className:L,children:s.languages.join(", ")})]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("span",{className:C,children:"Lesson Info:"})," ",s.lesson_info]}),(0,c.jsxs)("p",{children:[(0,c.jsx)("span",{className:C,children:"Conditions:"})," ",s.conditions.join(", ")]})]})]})}var R=a(342),I=a(9294),E=a(5663),M=a(6555),H=a(3003),J=a(1128),K=a(3892);const q="TrialLessonForm_form__ahn1Q",Q="TrialLessonForm_title_wrap__DGvg-",U="TrialLessonForm_input_wrap__6gt-x";var V=a(9750),Y=a(2185),P=a(7825),W=a(6495);const D="TeacherInfoTrialLesson_avatar__42BIi",O="TeacherInfoTrialLesson_wrap_teacher__67v5F",z=e=>{let{teacher:s}=e;return(0,c.jsxs)("div",{className:O,children:[(0,c.jsx)("img",{className:D,src:s.avatar_url,alt:"Avatar_teacher"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:"Your teacher"}),(0,c.jsxs)("h3",{children:[s.name," ",s.surname]})]})]})},G="Topics_ask__NzTAq",Z="Topics_radio_wrap__zYQaZ",X="Topics_radio_btn__3KUso";var $=a(9356);const ee=e=>{let{type:s,name:a}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h3",{className:G,children:"What is your main reason for learning English?"}),$.A.map(((e,r)=>(0,c.jsxs)("label",{className:Z,children:[(0,c.jsx)(K.D0,{className:X,type:s,name:a,value:e}),(0,c.jsx)("span",{children:e})]},r)))]})},se=e=>{let{teacher:s}=e;return(0,c.jsx)(K.l1,{initialValues:{fullName:"",email:"",phoneNumber:"",topic:""},validationSchema:Y.EB,onSubmit:e=>{console.log("values: ",e)},children:(0,c.jsxs)(K.lV,{className:q,children:[(0,c.jsxs)("div",{className:Q,children:[(0,c.jsx)(P.A,{title:"Book Trial Lesson",text:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),(0,c.jsx)(z,{teacher:s})]}),(0,c.jsx)(ee,{type:"radio",name:"topic"}),(0,c.jsx)(K.Kw,{name:"topic",component:"div"}),(0,c.jsxs)("div",{className:U,children:[(0,c.jsx)(V.A,{type:"text",name:"fullName",placeholder:"Full Name"}),(0,c.jsx)(V.A,{type:"text",name:"email",placeholder:"Email"}),(0,c.jsx)(V.A,{type:"text",name:"phoneNumber",placeholder:"Phone Number"})]}),(0,c.jsx)(W.A,{btnTitle:"Book"})]})})},ae=e=>{let{teacher:s,isFavoriteBtn:a,updateFavorites:l,selectedLevel:d=s.levels[0]}=e;const{user:_}=(0,R.A)(),[h,x]=(0,r.useState)({}),{modalContent:j,isModalOpen:p,openModal:f,closeModal:T}=(0,M.A)(),b=(0,H.d4)(J.r6),g=()=>{_.email?l(s):f("registration")};return(0,c.jsxs)("article",{className:t,children:[(0,c.jsx)(o,{teacher:s}),(0,c.jsx)("span",{className:i,children:(0,c.jsx)(v,{isFavorite:a(s),randomStyle:b,handleAddToFavorites:g})}),(0,c.jsxs)("div",{className:n,children:[(0,c.jsx)(m,{teacher:s,isFavoriteBtn:a,randomStyle:b,handleAddToFavorites:g}),(0,c.jsx)(B,{teacher:s}),(0,c.jsx)(w,{reviews:s.reviews,id:s.id,expandedReviews:h,setExpandedReviews:x}),(0,c.jsx)(u,{teacher:s,selectedLevel:d,randomStyle:b}),(0,c.jsx)(N,{expanded:h[s.id],randomStyle:b,openModal:()=>f("Book trial lesson")})]}),p&&(0,c.jsxs)(I.A,{isModal:T,children:["registration"===j&&(0,c.jsx)(E.A,{modalContent:"registration",isModal:T}),"Book trial lesson"===j&&(0,c.jsx)(se,{closeModal:T,teacher:s})]})]},s.id)}},1372:(e,s,a)=>{a.d(s,{A:()=>c});var r=a(3003);const t=e=>e.favorites.favorites,n=e=>e.favorites.isLoading,i=e=>e.favorites.status,l=e=>e.favorites.error,c=()=>({favorites:(0,r.d4)(t),isLoading:(0,r.d4)(n),status:(0,r.d4)(i),error:(0,r.d4)(l)})},5036:(e,s,a)=>{a.d(s,{A:()=>o});var r=a(5043),t=a(3611),n=a(7464),i=a(3003),l=a(6645),c=a(1372);function o(){const e=(0,i.wA)(),{favorites:s}=(0,c.A)(),a=n.j2.currentUser,o=(0,r.useCallback)((e=>s.some((s=>s.id===e.id))),[s]);return{updateFavorites:(0,r.useCallback)((s=>{if(!a)return;if(o(s))(0,t.TF)((0,t.KR)(n.db,"favorites/"+a.uid+"/"+s.id)),e((0,l.Fy)(s.id));else{const r=(0,t.KR)(n.db,"favorites/"+a.uid);(0,t.yo)(r,{[s.id]:s}),e((0,l.Gm)(s))}}),[a,o,e]),isFavoriteBtn:o}}},5426:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var r=a(2463),t=a(898),n=a(8516),i=a(5043),l=a(7464),c=a(3003),o=a(5171),d=a(1372),_=a(5036);const h={title:"Favorites_title__tT54b",empty:"Favorites_empty__785LJ",fully:"Favorites_fully__+D0CA"};var v=a(579);function x(){const{updateFavorites:e,isFavoriteBtn:s}=(0,_.A)(),{favorites:a}=(0,d.A)(),x=l.j2.currentUser,m=(0,c.wA)();return(0,i.useEffect)((()=>{x&&m((0,o.I)(x))}),[x,m]),(0,v.jsx)(t.A,{children:(0,v.jsx)(n.A,{children:(0,v.jsxs)("div",{className:h.fully,children:[(0,v.jsx)("h1",{className:h.title,children:"Favorites"}),0===a.length&&(0,v.jsx)("p",{className:h.empty,children:"Your Favorites list is empty"}),a.map((a=>(0,v.jsx)(r.A,{teacher:a,isFavoriteBtn:s,updateFavorites:e},a.id)))]})})})}}}]);
//# sourceMappingURL=426.872dd0e4.chunk.js.map