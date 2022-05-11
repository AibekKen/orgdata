(function(){"use strict";var e={862:function(e,t,i){var n=i(963),c=i(252);const a=(0,c._)("div",{class:"title"},"ОРГАНИЗАЦИОННАЯ СТРУКТУРА",-1);function o(e,t,i,n,o,l){const r=(0,c.up)("add-dep-modal"),s=(0,c.up)("data-table");return(0,c.wg)(),(0,c.iD)("div",null,[a,(0,c.Wm)(r),(0,c.Wm)(s)])}const l=e=>((0,c.dD)("data-v-2de9b005"),e=e(),(0,c.Cn)(),e),r=l((()=>(0,c._)("h2",{class:"add-dep__title"},"Добавить отдел",-1))),s={class:"add-dep__city"},d=l((()=>(0,c._)("label",{class:"labelInput",for:"inputCity"},"Город:*",-1))),p={class:"add-dep__center"},u=l((()=>(0,c._)("label",{class:"labelInput",for:"inputCenter"},"Центр:*",-1))),m={class:"add-dep__dep"},_=l((()=>(0,c._)("label",{class:"labelInput",for:"inputDep"},"Отдел:*",-1))),y={class:"add__count general"},f=l((()=>(0,c._)("label",{class:"labelInputNum",for:"inputGen"},"Общее количество*:",-1))),v={class:"add__count fact"},g=l((()=>(0,c._)("label",{class:"labelInputNum",required:"",for:"inputFact"},"Фактическое количество:*",-1))),w=l((()=>(0,c._)("button",{class:"add-dep__submit",type:"submit"},"Добавить",-1)));function C(e,t,i,a,o,l){return(0,c.wg)(),(0,c.iD)("div",null,[(0,c._)("button",{onClick:t[0]||(t[0]=(...e)=>l.openModal&&l.openModal(...e)),class:"add-dep"},"+ Добавить"),(0,c._)("form",{onSubmit:t[7]||(t[7]=(...e)=>l.addDep&&l.addDep(...e)),class:"add-dep__modal editName"},[r,(0,c._)("div",s,[d,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>o.city=e),class:"add-dep__input-city input",required:"",type:"text",id:"inputCity"},null,512),[[n.nr,o.city]])]),(0,c._)("div",p,[u,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.center=e),class:"add-dep__input-center input",type:"text",required:"",id:"inputCenter"},null,512),[[n.nr,o.center]])]),(0,c._)("div",m,[_,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.dep=e),class:"add-dep__input-dep input",required:"",type:"text",id:"inputDep"},null,512),[[n.nr,o.dep]])]),(0,c._)("div",y,[f,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>o.genCount=e),class:"add-dep__input-gen",required:"",min:"0",type:"number",id:"inputGen"},null,512),[[n.nr,o.genCount]])]),(0,c._)("div",v,[g,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>o.factCount=e),class:"add-dep__input-fact",min:"0",type:"number",id:"inputFact"},null,512),[[n.nr,o.factCount]])]),w,(0,c._)("button",{onClick:t[6]||(t[6]=(...e)=>l.closeModal&&l.closeModal(...e)),class:"add-dep__close"},"Закрыть")],32)])}var h=i(907),A={data(){return{city:"",center:"",dep:"",genCount:"",factCount:""}},methods:{...(0,h.OI)(["addDeps"]),openModal:()=>{document.querySelectorAll(".editName").forEach((e=>{e.classList.remove("active")}));const e=document.querySelector(".add-dep__modal");e.classList.add("active")},closeModal:()=>{const e=document.querySelector(".add-dep__modal");e.classList.remove("active")},addDep:function(e){e.preventDefault();class t{constructor(e,t,i,n,c){this.id=Date.now(),this.city=e,this.center=t,this.dep=i,this.official=n,this.fact=c}}const i=new t(this.city,this.center,this.dep,this.genCount,this.factCount);this.addDeps(i),this.city="",this.center="",this.dep="",this.genCount="",this.factCount="",this.closeModal()}}},b=i(744);const E=(0,b.Z)(A,[["render",C],["__scopeId","data-v-2de9b005"]]);var D=E,N=i(577),k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADuklEQVR4nO2azWtcVRiHn/dc21RBELVYsDOji4oUFVzYhaAo0ZrcIaKLCu5adKFBZzrpxv+gdNPJVAUrSiuIi1axYjKptYG6UHChoKILLeZjbEFKsSghqJn7umhGJs3M5J575+NePc8qyZ285/ye+55zhzkDDofD4XA4HI7/JzLoCdiQryzeA4xrwE6EOaPyzlQpcy5OzdQIyJfn8yrmJHB9058DRCeqxVwlal0Tf2q9x6/URlTM+6wND2BQmfQrC69ErZ0KAcDNwKa2V1UOjpYX9kcpnGgBY0cv3gBQLWbeE2QvUG/3WhEpR5GQWAH58ny+vrxyfvTI/P0A0/sz74roc0DQ7n9EpOxPLhRsxknkJri64X0ADClc9owZnips/wbAryzuQ3mL9jcvUNWHZ0q5z8OMlbgOaNrwhgAEbgmC4Kx/uHYvQLWYPYbwPO07wYiRZ8OOlygB+fJ8HtVTwJZrLt2K0dnV9wFUi9ljIvoioG1KZcOOmRgBzW3f5iVbVTk7emRhJ8B0MfcmwjgtJCh8G3bcRAgIEb7BbRLI7Nirc3cDVIvZN1BeZq2E3+or3tGwYw9cwLVrPgTb6nXvXKMTqqXs6yL6AlclLKmRp88cuL0WdvyBPgUs7vw6FC56Io9MFTM/AYxO1l4yUv96unjHFzZ1BibAr9RGUP2Q9RueDb/UA3n0k4nM+agFBrIEOuz2tmz3jH6054R6UQtcF3MC1viV2oiq2qz5TiypkfGTz0jbt8gb0dcl0KW2b7CkRvIzhcxncYr0TUASw0OfBCQ1PPRBQJLDQ48FJD089FBAGsJDjwSkJTz0QECawkOXBaQtPHRRQBrDQ5cEpDU8dEFAmsNDTAFpDw8xBPwXwkOczwMC3QZsjj8F/UMk2D2I8BB3CZQX9yK8TXSRA7vzDSJN/Kny3E0A1VL2+AaHFB0Y7J1vYC1gzwn1/jLel2tOapSOZ3YtWFJjxmw/wOwF1gKWL1zYhXIXRmf/lVDKHreQMPC2b8ZaQGB09+qPWyNISFR4iLIHqD7e9JuNhMSFB8unwJOHLt24MrR8mfXf1rhEIMPVicx30PLpkMjwYNkBf29eHqb1V1U6dUJiw4OlADE81uHyOgmK7kvCo64TVkvAn1z8EdixQcHvA/PngzOFHb/HmlmfCN0B/ms/52gdvg58pcihQPShB65k7ktLeLA4GpO690TTIfyvqJwRCT7epMGnp0p3XmlcON3d+fWc0AJU2YJyQD09PVPI/dDLSTkcDofD4XA4HL3nH3492+ULCvXMAAAAAElFTkSuQmCC",O="data:image/png;base64,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";const M=["onSubmit","id"],q=(0,c._)("label",{for:"editName__input",class:"editName__label"},"Новое название",-1),I=(0,c._)("button",{type:"submit",class:"editName__submit"},"Сохранить",-1),R=["onClick"],T={class:"data-tree__city row"},U={class:"city__name row__column row__column_b"},S=(0,c._)("span",null,">",-1),B={class:"city__count row__column"},V={class:"city__count row__column"},j={class:"city__action row__column row__column_s"},L=["onClick"],x=(0,c._)("img",{src:k,alt:""},null,-1),z=[x],J=["onClick"],Q=(0,c._)("img",{src:O,alt:""},null,-1),F=[Q],K=["onSubmit","id"],P=(0,c._)("label",{for:"editName__input",class:"editName__label"},"Новое название",-1),W=(0,c._)("button",{type:"submit",class:"editName__submit"},"Сохранить",-1),G=["onClick"],Z={class:"data-tree__center row"},H={class:"center__name row__column row__column_b"},Y=(0,c._)("span",null,">",-1),X={class:"сenter__count row__column"},$={class:"сenter__count row__column"},ee={class:"сenter__action row__column row__column_s"},te=["onClick"],ie=(0,c._)("img",{src:k,alt:""},null,-1),ne=[ie],ce=["onClick"],ae=(0,c._)("img",{src:O,alt:""},null,-1),oe=[ae],le=["onSubmit","id"],re=(0,c._)("h2",{class:"edit-dep__title"},"Изменить отдел",-1),se={class:"edit-dep__city"},de=(0,c._)("label",{class:"labelInput",for:"inputCity"},"Город:*",-1),pe={class:"edit-dep__center"},ue=(0,c._)("label",{class:"labelInput",for:"inputCenter"},"Центр:*",-1),me={class:"edit-dep__dep"},_e=(0,c._)("label",{class:"labelInput",for:"inputDep"},"Отдел:*",-1),ye={class:"add__count general"},fe=(0,c._)("label",{class:"labelInputNum",for:"inputGen"},"Общее количество*:",-1),ve={class:"add__count fact"},ge=(0,c._)("label",{class:"labelInputNum",required:"",for:"inputFact"},"Фактическое количество:*",-1),we=(0,c._)("button",{class:"edit-dep__submit",type:"submit"},"Сохранить",-1),Ce=["onClick"],he={class:"data-tree__dep row"},Ae={class:"dep__name row__column row__column_b"},be={class:"dep__count row__column"},Ee={class:"dep__count row__column"},De={class:"dep__action row__column row__column_s"},Ne=["onClick"],ke=(0,c._)("img",{src:k,alt:""},null,-1),Oe=[ke],Me=["onClick"],qe=(0,c._)("img",{src:O,alt:""},null,-1),Ie=[qe];function Re(e,t,i,a,o,l){const r=(0,c.up)("table-head");return(0,c.wg)(),(0,c.iD)("div",null,[(0,c.Wm)(r),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.getDataTree,(e=>((0,c.wg)(),(0,c.iD)("div",{onClick:t[8]||(t[8]=(...e)=>l.openCity&&l.openCity(...e)),class:"data-tree__city-block",key:e},[(0,c._)("form",{onSubmit:(0,n.iM)((t=>l.submitEditCity(e.city)),["prevent"]),id:e.city,action:"#",class:"editName"},[q,(0,c.wy)((0,c._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.cityEdit=e),class:"editName__input"},null,512),[[n.nr,o.cityEdit]]),I,(0,c._)("button",{onClick:(0,n.iM)((t=>l.closeEditName(e.city)),["prevent"]),class:"editName__close"}," Закрыть ",8,R)],40,M),(0,c._)("div",T,[(0,c._)("div",U,[S,(0,c.Uk)(" "+(0,N.zw)(e.city),1)]),(0,c._)("div",B,(0,N.zw)(e.fact),1),(0,c._)("div",V,(0,N.zw)(e.official),1),(0,c._)("div",j,[(0,c._)("a",{class:"edit",href:"#",onClick:t=>l.editName(e.city)},z,8,L),(0,c._)("a",{class:"delete",href:"#",onClick:t=>l.removeCities(e.city)},F,8,J)])]),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.centers,(e=>((0,c.wg)(),(0,c.iD)("div",{onClick:t[7]||(t[7]=(...e)=>l.openCenter&&l.openCenter(...e)),class:"data-tree__center-block",key:e.name},[(0,c._)("form",{onSubmit:(0,n.iM)((t=>l.submitEditCenter(e.city,e.name)),["prevent"]),id:e.city+e.name,action:"#",class:"editName"},[P,(0,c.wy)((0,c._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>o.centerEdit=e),class:"editName__input"},null,512),[[n.nr,o.centerEdit]]),W,(0,c._)("button",{onClick:(0,n.iM)((t=>l.closeEditName(`${e.city}${e.name}`)),["prevent"]),class:"editName__close"}," Закрыть ",8,G)],40,K),(0,c._)("div",Z,[(0,c._)("div",H,[Y,(0,c.Uk)(" "+(0,N.zw)(e.name),1)]),(0,c._)("div",X,(0,N.zw)(e.fact),1),(0,c._)("div",$,(0,N.zw)(e.official),1),(0,c._)("div",ee,[(0,c._)("a",{class:"edit",href:"#",onClick:(0,n.iM)((t=>l.editName(`${e.city}${e.name}`)),["prevent"])},ne,8,te),(0,c._)("a",{class:"delete",href:"#",onClick:(0,n.iM)((t=>l.removeCenters(e.city,e.name)),["prevent"])},oe,8,ce)])]),((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.deps,(e=>((0,c.wg)(),(0,c.iD)("div",{class:"data-tree__deps-block",key:e.name},[(0,c._)("form",{onSubmit:(0,n.iM)((t=>l.editDeps(e.id)),["prevent"]),id:e.id,class:"edit-dep__modal editName"},[re,(0,c._)("div",se,[de,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.cityEdit=e),class:"edit-dep__input-city input",required:"",type:"text",id:"inputCity"},null,512),[[n.nr,o.cityEdit]])]),(0,c._)("div",pe,[ue,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.centerEdit=e),class:"edit-dep__input-center input",type:"text",required:"",id:"inputCenter"},null,512),[[n.nr,o.centerEdit]])]),(0,c._)("div",me,[_e,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>o.depEdit=e),class:"edit-dep__input-dep input",required:"",type:"text",id:"inputDep"},null,512),[[n.nr,o.depEdit]])]),(0,c._)("div",ye,[fe,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[5]||(t[5]=e=>o.genCount=e),class:"edit-dep__input-gen",required:"",min:"0",type:"number",id:"inputGen"},null,512),[[n.nr,o.genCount]])]),(0,c._)("div",ve,[ge,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>o.factCount=e),class:"edit-dep__input-fact",min:"0",type:"number",id:"inputFact"},null,512),[[n.nr,o.factCount]])]),we,(0,c._)("button",{onClick:(0,n.iM)((t=>l.closeEditName(e.id)),["prevent"]),class:"edit-dep__close"}," Закрыть ",8,Ce)],40,le),(0,c._)("div",he,[(0,c._)("div",Ae,(0,N.zw)(e.name),1),(0,c._)("div",be,(0,N.zw)(e.fact),1),(0,c._)("div",Ee,(0,N.zw)(e.official),1),(0,c._)("div",De,[(0,c._)("a",{class:"edit",href:"#",onClick:(0,n.iM)((t=>l.editName(e.id)),["prevent"])},Oe,8,Ne),(0,c._)("a",{class:"delete",href:"#",onClick:(0,n.iM)((t=>l.removeDeps(e.id)),["prevent"])},Ie,8,Me)])])])))),128))])))),128))])))),128))])}const Te={class:"data-tree__titles row"},Ue=(0,c._)("div",{class:"titles__name row__column row__column_b"},null,-1),Se=(0,c._)("div",{class:"titles__count row__column row__column"},"Общее количество",-1),Be=(0,c._)("div",{class:"titles__count row__column"},"Фактическое количество",-1),Ve=(0,c._)("div",{class:"titles__action row__column row__column_s"},"Действие",-1),je=[Ue,Se,Be,Ve];function Le(e,t,i,n,a,o){return(0,c.wg)(),(0,c.iD)("div",Te,je)}var xe={};const ze=(0,b.Z)(xe,[["render",Le]]);var Je=ze,Qe={data(){return{cityEdit:"",centerEdit:"",depEdit:"",factCount:0,genCount:0}},components:{TableHead:Je},computed:(0,h.Se)(["getDataTree"]),methods:{...(0,h.OI)(["removeCity","editCityName","removeCenter","editCenterName","editDep","removeDep"]),openCity:e=>{e.currentTarget.classList.toggle("active")},openCenter:e=>{e.stopPropagation(),e.currentTarget.classList.toggle("active")},removeCities:function(e){this.removeCity(e)},removeCenters:function(e,t){const i={city:e,center:t};this.removeCenter(i)},editName:function(e){document.querySelectorAll(".editName").forEach((e=>{e.classList.remove("active")})),document.getElementById(e).classList.add("active")},submitEditCity:function(e){const t={city:e,newCity:this.cityEdit};this.editCityName(t),this.cityEdit=""},closeEditName:function(e){document.getElementById(e).classList.remove("active")},submitEditCenter:function(e,t){const i={city:e,center:t,newCenter:this.centerEdit};this.editCenterName(i),this.centerEdit=""},editDeps:function(e){const t={id:e,city:this.cityEdit,center:this.centerEdit,fact:this.factCount,official:this.genCount,dep:this.depEdit};this.editDep(t),this.cityEdit="",this.centerEdit="",this.depEdit="",this.factCount=0,this.genCount=0},removeDeps:function(e){this.removeDep(e)}}};const Fe=(0,b.Z)(Qe,[["render",Re]]);var Ke=Fe,Pe={components:{AddDepModal:D,DataTable:Ke},name:"App"};const We=(0,b.Z)(Pe,[["render",o]]);var Ge=We;let Ze=[];Ze=localStorage.companyEmployers?JSON.parse(localStorage.companyEmployers):[{id:1,city:"Нур-Султан",center:"Центр 1",dep:"Управление 1",official:46,fact:14},{id:2,city:"Нур-Султан",center:"Центр 1",dep:"Управление 2",official:17,fact:6},{id:3,city:"Нур-Султан",center:"Центр 2",dep:"Управление 1",official:48,fact:13},{id:4,city:"Нур-Султан",center:"Центр 2",dep:"Управление 2",official:18,fact:5},{id:5,city:"Алматы",center:"Центр 1",dep:"Управление 1",official:40,fact:25},{id:6,city:"Алматы",center:"Центр 1",dep:"Управление 2",official:24,fact:13},{id:7,city:"Алматы",center:"Центр 2",dep:"Управление 1",official:50,fact:15},{id:8,city:"Алматы",center:"Центр 2",dep:"Управление 2",official:16,fact:7},{id:9,city:"Атырау",center:"Центр 1",dep:"Управление 1",official:6,fact:4},{id:10,city:"Атырау",center:"Центр 1",dep:"Управление 2",official:40,fact:8},{id:11,city:"Атырау",center:"Центр 2",dep:"Управление 1",official:10,fact:3},{id:12,city:"Атырау",center:"Центр 2",dep:"Управление 2",official:15,fact:5}];const He=(0,h.MT)({state(){return{companyEmployers:Ze}},getters:{getDataTree(e){let t=[],i=e.companyEmployers,n=Array.from(new Set(e.companyEmployers.map((e=>e.city))));n.forEach((e=>t.push({city:e,centers:[]})));for(let c=0;c<i.length;c++)for(let e=0;e<t.length;e++)if(i[c].city===t[e].city)if(0===t[e].centers.length)t[e].centers.push({city:i[c].city,name:i[c].center,deps:[]});else{let n=()=>{for(let n=0;n<t[e].centers.length;n++)if(t[e].centers[n].name===i[c].center)return!1;return!0};n()&&t[e].centers.push({city:i[c].city,name:i[c].center,deps:[]})}for(let c=0;c<i.length;c++)for(let e=0;e<t.length;e++)if(t[e].city===i[c].city)for(let n=0;n<t[e].centers.length;n++)t[e].centers[n].name==i[c].center&&t[e].centers[n].deps.push({name:i[c].dep,id:i[c].id,official:i[c].official,fact:i[c].fact});for(let c=0;c<t.length;c++){t[c].fact=0,t[c].official=0;for(let e=0;e<i.length;e++)t[c].city===i[e].city&&(t[c].fact+=i[e].fact,t[c].official+=i[e].official)}for(let c=0;c<t.length;c++)for(let e=0;e<t[c].centers.length;e++){t[c].centers[e].fact=0,t[c].centers[e].official=0;for(let n=0;n<i.length;n++)i[n].city===t[c].city&&i[n].center===t[c].centers[e].name&&(t[c].centers[e].fact+=i[n].fact,t[c].centers[e].official+=i[n].official)}return t}},mutations:{addDeps(e,t){e.companyEmployers.push(t),localStorage.setItem("companyEmployers",JSON.stringify(e.companyEmployers))},removeCity(e,t){e.companyEmployers=e.companyEmployers.filter((e=>e.city!==t)),localStorage.setItem("companyEmployers",JSON.stringify(e.companyEmployers))},removeCenter(e,t){e.companyEmployers=e.companyEmployers.filter((e=>e.city!==t.city||e.center!==t.center)),localStorage.setItem("companyEmployers",JSON.stringify(e.companyEmployers))},editCityName(e,t){e.companyEmployers.forEach((e=>{e.city===t.city&&(e.city=t.newCity)})),localStorage.setItem("companyEmployers",e.companyEmployers)},editCenterName(e,t){e.companyEmployers.forEach((e=>{e.city===t.city&&e.center===t.center&&(e.center=t.newCenter)})),localStorage.setItem("companyEmployers",JSON.stringify(e.companyEmployers))},editDep(e,t){e.companyEmployers.forEach((e=>{e.id===t.id&&(e.city=t.city,e.center=t.center,e.fact=t.fact,e.official=t.official,e.dep=t.dep)})),localStorage.setItem("companyEmployers",JSON.stringify(e.companyEmployers))},removeDep(e,t){e.companyEmployers=e.companyEmployers.filter((e=>e.id!==t)),localStorage.setItem("companyEmployers",JSON.stringify(e.companyEmployers))}}}),Ye=(0,n.ri)(Ge);Ye.use(He),Ye.mount("#app")}},t={};function i(n){var c=t[n];if(void 0!==c)return c.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,c,a){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],c=e[d][1],a=e[d][2];for(var l=!0,r=0;r<n.length;r++)(!1&a||o>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[r])}))?n.splice(r--,1):(l=!1,a<o&&(o=a));if(l){e.splice(d--,1);var s=c();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,c,a]}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var c,a,o=n[0],l=n[1],r=n[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(c in l)i.o(l,c)&&(i.m[c]=l[c]);if(r)var d=r(i)}for(t&&t(n);s<o.length;s++)a=o[s],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},n=self["webpackChunkorgdata"]=self["webpackChunkorgdata"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(862)}));n=i.O(n)})();
//# sourceMappingURL=app.7fff5fa3.js.map