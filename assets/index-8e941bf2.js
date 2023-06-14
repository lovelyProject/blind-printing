import{e as o,o as c,c as n,f as R,n as z,p as w,g as C,a as t,t as i,b as f,w as p,u as S,F as M,h as B,i as m,d as I,T as V,j as D,k as G,l as U,m as $,q as k,s as H,v as a,A as J,S as K}from"./index-abd9cbbb.js";import{_ as g,T as j}from"./PrimaryButton-a3c0090e.js";const P={__name:"TheLetter",props:{status:{type:String,required:!0}},setup(s){const e=s,_=o(()=>({letter_correct:e.status==="correct",letter_error:e.status==="error"}));return(h,x)=>(c(),n("span",{class:z(["letter",_.value])},[R(h.$slots,"default",{},void 0,!0)],2))}},Q=g(P,[["__scopeId","data-v-9955f405"]]);const W={},X=s=>(w("data-v-0307e79c"),s=s(),C(),s),Y={class:"loadingio-spinner-eclipse-dnymn4sgsj8"},Z=X(()=>t("div",{class:"ldio-2hwih29r73o"},[t("div")],-1)),ee=[Z];function te(s,e){return c(),n("div",Y,ee)}const se=g(W,[["render",te],["__scopeId","data-v-0307e79c"]]);const ae={class:"card"},ce={class:"card__item"},oe=["src","alt"],re={class:"color-black card__title"},ne={class:"card__item"},ie={class:"color-black card__text"},_e={class:"color-black card__text"},le={__name:"TheCard",props:{card:{type:Object,required:!0}},setup(s){return(e,_)=>(c(),n("div",ae,[t("div",ce,[t("img",{class:"card__icon",src:s.card.icon,alt:s.card.alt},null,8,oe),t("h3",re,i(s.card.title),1)]),t("div",ne,[t("span",ie,i(s.card.value),1),t("span",_e,i(s.card.measure),1)])]))}},de=g(le,[["__scopeId","data-v-a3be21a8"]]),ue="/blind-printing/assets/firework-31d4e099.svg";const me=s=>(w("data-v-cc38877d"),s=s(),C(),s),pe={class:"modal"},he={class:"modal__box"},ve=["src"],fe=me(()=>t("h2",{class:"color-black modal__title"},"Поздравляем!",-1)),ge=`Вы успешно перепечатали текст.
Вот ваши результаты:`,xe={__name:"TheModal",props:{cards:{type:Object,required:!0}},emits:["reset"],setup(s,{emit:e}){function _(){e("reset")}return(h,x)=>(c(),n("div",pe,[f(V,{name:"modal"},{default:p(()=>[t("div",he,[t("img",{class:"modal__icon",src:S(ue)},null,8,ve),fe,t("p",{class:"color-black modal__text"},i(ge)),(c(!0),n(M,null,B(s.cards,v=>(c(),m(de,{key:v.id,card:v},null,8,["card"]))),128)),f(j,{onReset:_},{default:p(()=>[I("Начать заново")]),_:1})])]),_:1})]))}},ye=g(xe,[["__scopeId","data-v-cc38877d"]]);const Te={class:"trainer"},$e={key:0,class:"trainer__hero"},ke={class:"trainer__text"},Se=["value"],Ie={class:"stats"},be={class:"stats__item"},Le={class:"item__header"},Ae=["src"],Ee=t("h4",{class:"item-title"},"Точность",-1),Ne={class:"item-text"},we={class:"stats__item"},Ce={class:"item__header"},Me=["src"],Be=t("h4",{class:"item-title"},"Скорость",-1),Ve={class:"item-text"},Fe={__name:"index",setup(s){const e=D(),_=o(()=>e.state.trainer.cards),h=o(()=>e.state.trainer.isError),x=o(()=>e.state.trainer.isModal),v=o(()=>e.state.trainer.isLoading),y=o(()=>{var r;return(r=e.state.trainer)==null?void 0:r.letters}),b=o(()=>{var r;return(r=e.state.trainer)==null?void 0:r.lettersArray}),L=o(()=>(e.state.trainer.countErrors*100/b.value.length).toFixed(2)),A=o(()=>isNaN(Number(L.value))?100:100-L.value),T=o(()=>e.state.trainer.input),E=o(()=>e.state.trainer.speed),l=G(null);function N(){e.commit(a.resetTimer),e.commit(a.setInput,""),e.commit(a.setSpeed,"0"),e.commit(a.toggleModal,!1),e.dispatch($.getText),l.value.focus()}U(()=>{e.dispatch($.getText),l.value.focus()});function q(r){const d=r.target.value;if(b.value.length-1===T.value.length&&(e.commit(a.resetTimer),e.commit(a.setTime),e.commit(a.setAccuracy,A.value),e.commit(a.setSpeed,E.value),e.commit(a.toggleModal,!0)),d===""){e.commit(a.setInput,""),e.commit(a.clearAllStatuses),l.value.focus();return}const u=d.length-1;if(e.commit(a.setInput,d),y.value[u].value!==d[u]){if(e.commit(a.setInput,d.slice(0,-1)),!h.value){e.commit(a.isErrorToggle,!0),e.commit(a.changeLetterStatus,{index:u,status:"error"}),e.commit(a.incrementErrors);return}return l.value.focus(),null}T.value.length===1&&e.dispatch($.setTimer),e.commit(a.isErrorToggle,!1),e.commit(a.changeLetterStatus,{index:u,status:"correct"}),l.value.focus()}return(r,d)=>(c(),n("main",Te,[y.value?(c(),n("section",$e,[t("main",ke,[(c(!0),n(M,null,B(y.value,({status:u,value:F},O)=>(c(),m(Q,{key:O,status:u},{default:p(()=>[I(i(F),1)]),_:2},1032,["status"]))),128)),t("input",{class:"trainer__target",type:"text",value:T.value,ref_key:"inputElement",ref:l,onInput:q},null,40,Se),v.value?(c(),m(se,{key:0})):k("",!0)]),t("aside",Ie,[t("div",be,[t("div",Le,[t("img",{class:"stats__icon",src:S(J),alt:"Точность"},null,8,Ae),Ee]),t("span",Ne,i(A.value)+"%",1)]),t("div",we,[t("div",Ce,[t("img",{class:"stats__icon",src:S(K),alt:"Скорость"},null,8,Me),Be]),t("span",Ve,i(E.value)+" зн/мин",1)]),f(j,{onReset:N},{default:p(()=>[I("Заново")]),_:1}),(c(),m(H,{to:"body"},[f(V,null,{default:p(()=>[x.value?(c(),m(ye,{key:0,cards:_.value,onReset:N},null,8,["cards"])):k("",!0)]),_:1})]))])])):k("",!0)]))}};export{Fe as default};
