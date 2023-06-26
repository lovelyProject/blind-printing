import{e as c,o as r,c as o,f as R,n as z,p as C,g as M,a as s,t as _,b as f,w as g,u as D,F as S,h as I,i as v,d as k,T as q,j as G,k as U,l as H,m as $,q as b,s as J,v as a,A as K,S as P}from"./index-393ab292.js";import{_ as y,T as B}from"./PrimaryButton-fc20e7f5.js";const Q={__name:"TheLetter",props:{status:{type:String,required:!0}},setup(t){const e=t,i=c(()=>({letter_correct:e.status==="correct",letter_error:e.status==="error"}));return(l,u)=>(r(),o("span",{class:z(["letter",i.value])},[R(l.$slots,"default",{},void 0,!0)],2))}},W=y(Q,[["__scopeId","data-v-fcd6eb6a"]]);const X={},Y=t=>(C("data-v-0307e79c"),t=t(),M(),t),Z={class:"loadingio-spinner-eclipse-dnymn4sgsj8"},ee=Y(()=>s("div",{class:"ldio-2hwih29r73o"},[s("div")],-1)),te=[ee];function se(t,e){return r(),o("div",Z,te)}const ae=y(X,[["render",se],["__scopeId","data-v-0307e79c"]]);const re={class:"card"},ce={class:"card__item"},oe=["src","alt"],ne={class:"color-black card__title"},ie={class:"card__item"},_e={class:"color-black card__text"},le={class:"color-black card__text"},ue={__name:"TheCard",props:{card:{type:Object,required:!0}},setup(t){return(e,i)=>(r(),o("div",re,[s("div",ce,[s("img",{class:"card__icon",src:t.card.icon,alt:t.card.alt},null,8,oe),s("h3",ne,_(t.card.title),1)]),s("div",ie,[s("span",_e,_(t.card.value),1),s("span",le,_(t.card.measure),1)])]))}},de=y(ue,[["__scopeId","data-v-7cebb53c"]]),me="/blind-printing/assets/firework-31d4e099.svg";const pe=t=>(C("data-v-461e1a66"),t=t(),M(),t),he={class:"modal"},ve={class:"modal__box"},fe=["src"],ge=pe(()=>s("h2",{class:"color-black modal__title"},"Поздравляем!",-1)),ye=`Вы успешно перепечатали текст.
Вот ваши результаты:`,xe={__name:"TheModal",props:{cards:{type:Object,required:!0}},emits:["reset"],setup(t,{emit:e}){function i(){e("reset")}return(l,u)=>(r(),o("div",he,[f(q,{name:"modal",appear:""},{default:g(()=>[s("div",ve,[s("img",{class:"modal__icon",src:D(me)},null,8,fe),ge,s("p",{class:"color-black modal__text"},_(ye)),(r(!0),o(S,null,I(t.cards,d=>(r(),v(de,{key:d.id,card:d},null,8,["card"]))),128)),f(B,{onReset:i},{default:g(()=>[k("Начать заново")]),_:1})])]),_:1})]))}},Te=y(xe,[["__scopeId","data-v-461e1a66"]]),$e={class:"stats__item"},be={class:"item__header"},ke=["src","alt"],Se={class:"item-title"},Ie={class:"item-text"},Ae={__name:"TheStats",props:{state:{type:Array,required:!0}},setup(t){return(e,i)=>(r(!0),o(S,null,I(t.state,({icon:l,alt:u,value:d})=>(r(),o("div",$e,[s("div",be,[s("img",{class:"stats__icon",src:l,alt:u},null,8,ke),s("h4",Se,_(u),1)]),s("span",Ie,_(d),1)]))),256))}};const Le={class:"trainer"},Ee={key:0,class:"trainer__hero"},Ne={class:"trainer__text"},we=["value"],Ce={class:"stats"},Be={__name:"index",setup(t){const e=G(),i=c(()=>e.state.trainer.cards),l=c(()=>e.state.trainer.isError),u=c(()=>e.state.trainer.isModal),d=c(()=>e.state.trainer.isLoading),x=c(()=>{var n;return(n=e.state.trainer)==null?void 0:n.letters}),A=c(()=>{var n;return(n=e.state.trainer)==null?void 0:n.lettersArray}),L=c(()=>(e.state.trainer.countErrors*100/A.value.length).toFixed(2)),E=c(()=>isNaN(Number(L.value))?100:100-L.value),T=c(()=>e.state.trainer.input),N=c(()=>e.state.trainer.speed),m=U(null),V=[{icon:K,alt:"Точность",get value(){return`${E.value} %`}},{icon:P,alt:"Скорость",get value(){return`${N.value} зн/мин`}}];function w(){e.commit(a.resetTimer),e.commit(a.setInput,""),e.commit(a.setSpeed,"0"),e.commit(a.toggleModal,!1),e.dispatch($.getText),m.value.focus()}H(()=>{e.dispatch($.getText),m.value.focus()});function j(n){const p=n.target.value;if(A.value.length-1===T.value.length&&(e.commit(a.resetTimer),e.commit(a.setTime),e.commit(a.setAccuracy,E.value),e.commit(a.setSpeed,N.value),e.commit(a.toggleModal,!0)),p===""){e.commit(a.setInput,""),e.commit(a.clearAllStatuses),m.value.focus();return}const h=p.length-1;if(e.commit(a.setInput,p),x.value[h].value!==p[h]){if(e.commit(a.setInput,p.slice(0,-1)),!l.value){e.commit(a.isErrorToggle,!0),e.commit(a.changeLetterStatus,{index:h,status:"error"}),e.commit(a.incrementErrors);return}return m.value.focus(),null}T.value.length===1&&e.dispatch($.setTimer),e.commit(a.isErrorToggle,!1),e.commit(a.changeLetterStatus,{index:h,status:"correct"}),m.value.focus()}return(n,p)=>(r(),o("main",Le,[x.value?(r(),o("section",Ee,[s("main",Ne,[(r(!0),o(S,null,I(x.value,({status:h,value:F},O)=>(r(),v(W,{key:O,status:h},{default:g(()=>[k(_(F),1)]),_:2},1032,["status"]))),128)),s("input",{class:"trainer__target",type:"text",value:T.value,ref_key:"inputElement",ref:m,onInput:j},null,40,we),d.value?(r(),v(ae,{key:0})):b("",!0)]),s("aside",Ce,[f(Ae,{state:V}),f(B,{onReset:w},{default:g(()=>[k("Заново")]),_:1}),(r(),v(J,{to:"body"},[f(q,null,{default:g(()=>[u.value?(r(),v(Te,{key:0,cards:i.value,onReset:w},null,8,["cards"])):b("",!0)]),_:1})]))])])):b("",!0)]))}};export{Be as default};
