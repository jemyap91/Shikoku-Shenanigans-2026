/* Rendering and behaviour for the Shikoku road trip page. Data lives in data.js. */

/* ---------- Storage (per device) ---------- */
const KEY="shikoku26:";
function load(k,def){try{const v=localStorage.getItem(KEY+k);return v?JSON.parse(v):def}catch(e){return def}}
function save(k,v){try{localStorage.setItem(KEY+k,JSON.stringify(v))}catch(e){}}

/* ---------- Helpers ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function weatherBlock(d){
  const live=liveWx&&liveWx.days[d];
  const btn=`<button class="copy wxbtn" type="button"${wxBusy?" disabled":""}>${wxBusy?"Updating…":"Refresh"}</button>`;
  const err=wxErr?`<p class="err">${esc(wxErr)}</p>`:"";
  if(live){
    const wet=Math.max(...live.map(w=>w.r||0))>=70, tip=wxTip(d,live);
    return `<div class="wx${wet?" wet":""}">${live.map(w=>{const [i,c]=wmo(w.code);
      return `<div class="wxmain"><span class="wxi" aria-hidden="true">${i}</span>
      <div><b>${esc(w.n)}: ${esc(c)}</b><span class="wxs">${w.hi}° / ${w.lo}° · ${w.r==null?"?":w.r}% rain</span></div></div>`}).join("")}
      ${tip?`<p class="wxn">${esc(tip)}</p>`:""}
      <p class="wxsrc">Live forecast from Open-Meteo, updated ${ago(liveWx.at)}. ${btn}</p>${err}</div>`;
  }
  const w=WEATHER[d]; if(!w) return "";
  return `<div class="wx${w.r>=70?" wet":""}"><div class="wxmain"><span class="wxi" aria-hidden="true">${w.i}</span>
    <div><b>${esc(w.c)}</b><span class="wxs">${w.hi}° / ${w.lo}° · ${w.r}% rain · ${esc(w.w)}</span></div></div>
    ${w.n?`<p class="wxn">${esc(w.n)}</p>`:""}
    <p class="wxsrc">tenki.jp forecast, issued 30 Sep 15:00 JST. ${btn}</p>${err}</div>`;
}
function picksBlock(d,t){
  const ps=[...(MEALS[d+"|"+t]||[]),...(SHOPS[d+"|"+t]||[])]; if(!ps.length) return "";
  return `<ul class="picks">${ps.map(p=>{
    const shut=/closed|not found/i.test(p.h);
    const url=p.id?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.n)}&query_place_id=${p.id}`:"";
    return `<li><div class="prow"><span>${p.tag?`<span class="stag">${esc(p.tag)}</span>`:""}${url?`<a href="${url}" target="_blank" rel="noopener">${esc(p.n)}</a>`:`<b>${esc(p.n)}</b>`}</span><span class="hrs${shut?" shut":""}">${esc(p.h)}</span></div>${p.note?`<span class="pnote">${esc(p.note)}</span>`:""}</li>`}).join("")}</ul>`;
}
function mapUrl(a){return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(a)}
function addrBlock(s){
  if(!s.addr) return `<p class="addr">${esc(s.verify)}</p>`;
  return `<p class="addr">${esc(s.addr)}</p>
    <div class="addrbtns"><a class="copy" href="${mapUrl(s.addr)}" target="_blank" rel="noopener">Open in Maps</a>
    <button class="copy cp" data-t="${esc(s.addr)}">Copy address</button>
    ${s.tel?`<a class="copy" href="tel:${s.tel.replace(/\s/g,"")}">Call ${esc(s.tel)}</a>`:""}</div>
    ${s.verify?`<p class="verify">${esc(s.verify)}</p>`:""}`;
}
function wireCopy(root){root.querySelectorAll(".cp").forEach(b=>b.onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(b.dataset.t).then(()=>{b.textContent="Copied"},()=>{})})}
function jstNow(){const n=new Date();return new Date(n.getTime()+n.getTimezoneOffset()*60000+9*3600000)}

/* ---------- Live weather (Open-Meteo, free, no key) ---------- */
const WMO={0:["☀️","Clear"],1:["🌤","Mostly clear"],2:["⛅","Partly cloudy"],3:["☁️","Overcast"],45:["🌫","Fog"],48:["🌫","Fog"],
 51:["🌦","Light drizzle"],53:["🌦","Drizzle"],55:["🌧","Heavy drizzle"],56:["🌧","Freezing drizzle"],57:["🌧","Freezing drizzle"],
 61:["🌦","Light rain"],63:["🌧","Rain"],65:["🌧","Heavy rain"],66:["🌧","Freezing rain"],67:["🌧","Freezing rain"],
 71:["🌨","Light snow"],73:["🌨","Snow"],75:["🌨","Heavy snow"],77:["🌨","Snow grains"],
 80:["🌦","Showers"],81:["🌧","Heavy showers"],82:["⛈","Violent showers"],85:["🌨","Snow showers"],86:["🌨","Snow showers"],
 95:["⛈","Thunderstorms"],96:["⛈","Thunderstorms, hail"],99:["⛈","Thunderstorms, hail"]};
const wmo=c=>WMO[c]||["🌡","Forecast"];
function ago(t){const m=Math.round((Date.now()-t)/60000);
  return m<1?"just now":m<60?`${m} min ago`:m<1440?`${Math.round(m/60)} h ago`:new Date(t).toLocaleString([], {day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}
function wxTip(d,live){
  const r=Math.max(...live.map(w=>w.r||0));
  if(d===3)return "The summit is often windy and cold even on a warm day: bring the fleece.";
  if(d===9)return "Recheck the night before. Skip the chains and Tengudake if it's wet."+(r>=50?" Rain looks likely.":"");
  if(r>=60)return d===4?"Rain likely. Vine-bridge planks get slippery, so do Kazurabashi early and wear grippy shoes.":"Rain likely. Pack the shell.";
  return "";
}
let liveWx=load("liveWx",null), wxBusy=false, wxErr="";
async function refreshWeather(){
  if(wxBusy)return; wxBusy=true; wxErr=""; renderRoute(); renderDay();
  try{
    const spots=[...new Map(Object.values(WX_SPOTS).flat().map(x=>[x[0],x])).values()];
    const idx=Object.fromEntries(spots.map((x,k)=>[x[0],k]));
    const q=new URLSearchParams({latitude:spots.map(x=>x[1]).join(","),longitude:spots.map(x=>x[2]).join(","),
      daily:"weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",timezone:"Asia/Tokyo",forecast_days:"16"});
    const r=await fetch("https://api.open-meteo.com/v1/forecast?"+q); if(!r.ok)throw new Error("HTTP "+r.status);
    let j=await r.json(); if(!Array.isArray(j))j=[j];
    const days={};
    for(const [d,list] of Object.entries(WX_SPOTS)){
      const date="2026-10-"+String(d).padStart(2,"0");
      const rows=list.map(x=>{const dl=j[idx[x[0]]]&&j[idx[x[0]]].daily; if(!dl)return null; const k=dl.time.indexOf(date); if(k<0)return null;
        return {n:x[0],code:dl.weather_code[k],hi:Math.round(dl.temperature_2m_max[k]),lo:Math.round(dl.temperature_2m_min[k]),r:dl.precipitation_probability_max[k]}}).filter(Boolean);
      if(rows.length)days[d]=rows;
    }
    liveWx={at:Date.now(),days}; save("liveWx",liveWx);
  }catch(e){wxErr="Couldn't reach the weather service"+(liveWx?", showing the last update.":", showing the 30 Sep forecast.")}
  finally{wxBusy=false; renderRoute(); renderDay()}
}
document.addEventListener("click",e=>{if(e.target.closest(".wxbtn"))refreshWeather()});

/* ---------- Countdown ---------- */
(function(){
  const now=jstNow(); const start=new Date(2026,9,2); const end=new Date(2026,9,11);
  const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const diff=Math.round((start-today)/86400000);
  let t;
  if(diff>1) t=diff+" days to go";
  else if(diff===1) t="Fly tomorrow";
  else if(today<=end) t="Day "+(Math.round((today-start)/86400000)+1)+" of 10";
  else t="Trip complete";
  $("#countdown").textContent=t;
})();

/* ---------- Days ---------- */
let done=load("done",{});
function currentDayIndex(){
  const n=jstNow();
  if(n.getFullYear()===2026&&n.getMonth()===9){const i=DAYS.findIndex(x=>x.d===n.getDate());if(i>=0)return i}
  return -1;
}
const todayIdx=currentDayIndex();
let sel=todayIdx>=0?todayIdx:0;

function renderRoute(){
  $("#routeList").innerHTML=DAYS.map((x,i)=>`<li><button aria-current="${i===sel}" data-i="${i}" aria-label="${x.dow} ${x.d} October, ${x.town}">
    ${i===todayIdx?'<span class="today-dot" title="Today"></span>':''}
    <span class="stop">${x.d}</span><span class="dow">${x.dow} ${liveWx&&liveWx.days[x.d]?wmo(liveWx.days[x.d][0].code)[0]:WEATHER[x.d]?WEATHER[x.d].i:""}</span><span class="town">${x.town}</span></button></li>`).join("");
  document.querySelectorAll("#routeList button").forEach(b=>b.onclick=()=>{sel=+b.dataset.i;renderRoute();renderDay()});
}
function renderDay(){
  const x=DAYS[sel]; const s=x.stay?STAYS[x.stay]:null;
  const kinds={see:"",opt:'<span class="tag opt">Optional</span>',eat:'<span class="tag">Food</span>',do:'<span class="tag">Logistics</span>',drive:""};
  const items=x.items.map((it,j)=>{
    const [a,b,title,kind,detail,flag]=it; const id=x.d+"-"+j; const isDone=!!done[id];
    const cls=(kind==="drive"?"drive":kind==="eat"?"eat":"")+(isDone?" done":"");
    return `<li class="${cls}"><div class="time">${a}${b?`<span>${b}</span>`:""}</div>
      <div class="body"><p class="title">${esc(title)} ${kinds[kind]||""}</p>
      <p class="detail">${esc(detail)}</p>${flag?`<div class="flag">${esc(flag)}</div>`:""}${picksBlock(x.d,title)}
      ${kind!=="drive"?`<button class="tick" data-id="${id}">${isDone?"Undo":"Mark done"}</button>`:""}</div></li>`;
  }).join("");
  const food=x.food.length?`<div class="food"><h3>Food picks from your notes</h3><ul>${x.food.map(f=>`<li><a href="${f[1]}" target="_blank" rel="noopener">${esc(f[0])}</a></li>`).join("")}</ul></div>`:"";
  $("#dayView").innerHTML=`<div class="dayhead"><h2>${x.dow} ${x.d} Oct · ${esc(x.title)}</h2>
    <p class="path">${esc(x.path)}</p>
    <div class="facts"><span class="fact"><b>${x.km}</b> driving</span><span class="fact"><b>${x.drive}</b> behind the wheel</span></div>${weatherBlock(x.d)}</div>
    <ol class="tl">${items}</ol>
    ${s?`<div class="stay"><h3>Tonight: ${esc(s.name)}</h3><p>${esc(s.place)} · ${esc(s.style)}</p>${addrBlock(s)}</div>`:`<div class="stay"><h3>Tonight: in the air</h3><p>KIX 18:25 → home 00:05</p></div>`}
    ${food}`;
  wireCopy($("#dayView"));
  document.querySelectorAll(".tick").forEach(b=>b.onclick=()=>{const id=b.dataset.id;done[id]=!done[id];save("done",done);renderDay()});
}

/* ---------- Bookings ---------- */
function renderBookings(){
  const stayCards=Object.values(STAYS).map(s=>`<div class="card"><div class="row"><h3>${esc(s.name)}</h3>
    ${s.status==="todo"?'<span class="pill warn">Add 4th room</span>':s.status==="check"?'<span class="pill warn">Check guest count</span>':'<span class="pill">Booked</span>'}</div>
    <p class="meta">${esc(s.nights)} · ${esc(s.place)}</p><p>${esc(s.style)} · ${esc(s.pax)}</p>
    <p class="meta">Paid by ${esc(s.payer)}: S$${s.sgd.toFixed(2)}${s.jpy?` (${s.jpy})`:""}</p>${addrBlock(s)}</div>`).join("");
  $("#tab-bookings").innerHTML=`<h2 class="sec">Car</h2>
  <div class="card"><div class="row"><h3>Toyota Rent a Car · C2 class</h3><span class="pill">Paid by Jem</span></div>
    <p class="meta">Reservation number</p>
    <div class="row"><span class="big">99909430100</span><button class="copy" id="copyRes">Copy</button></div>
    <p style="margin-top:10px"><b>Pick up</b> Fri 2 Oct, 16:30</p>
    <p><b>Return</b> Sat 10 Oct, 17:30</p>
    <p class="meta">Both at Rinku Town Station Shop, Rinku Pleasure Town Seacle 1F, 3 Rinkuoraiminami, Izumisano-shi, Osaka 598-0047</p>
    <p class="meta">Shop 072-463-0100 · Reservation centre 0800-7000-815 (08:00–20:00)</p>
    <p class="meta">¥99,110 total, S$831.89</p>
    <p class="meta" style="margin-top:8px">Tip: Japanese car navs can usually find a place by its phone number. Use the Call numbers below.</p>
    <p style="margin-top:8px">Bring: passport, physical licence, IDP, physical credit card in the primary driver's name.</p>
    <h3 style="margin-top:14px">Getting there from Kansai Airport</h3>
    <ol class="steps">${CAR_DIRECTIONS.map(s=>`<li><b>${esc(s[0])}</b><span class="meta">${esc(s[1])}</span></li>`).join("")}</ol>
    <p class="meta">${esc(CAR_TIMING)}</p>
    <p style="margin-top:8px"><a class="copy" href="${mapUrl("Toyota Rent a Car Rinku Town Station, Rinku Pleasure Town Seacle, Izumisano")}" target="_blank" rel="noopener">Open in Maps</a></p></div>
  <h2 class="sec" style="margin-top:22px">Stays</h2>${stayCards}`;
  wireCopy($("#tab-bookings"));
  $("#copyRes").onclick=e=>{navigator.clipboard&&navigator.clipboard.writeText("99909430100").then(()=>{e.target.textContent="Copied"},()=>{})};
}

/* ---------- Money (live from Google Sheets) ---------- */
const SHEET_URL=`https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit`;
let money=load("money",null), moneyBusy=false, moneyErr="";
function parseCSV(t){
  const rows=[];let row=[],f="",q=false;
  for(let i=0;i<t.length;i++){const c=t[i];
    if(q){if(c==='"'){if(t[i+1]==='"'){f+='"';i++}else q=false}else f+=c}
    else if(c==='"')q=true; else if(c===","){row.push(f);f=""}
    else if(c==="\n"||c==="\r"){if(c==="\r"&&t[i+1]==="\n")i++;row.push(f);rows.push(row);row=[];f=""}
    else f+=c}
  if(f||row.length){row.push(f);rows.push(row)}
  return rows;
}
const num=v=>{const n=parseFloat(String(v).replace(/[^0-9.\-]/g,""));return isNaN(n)?0:n};
async function sheetCSV(sheet,range){
  const q=new URLSearchParams({tqx:"out:csv",sheet,range,headers:"0"});
  const r=await fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?${q}`);
  if(!r.ok)throw new Error("HTTP "+r.status);
  const t=await r.text(); if(/^\s*</.test(t))throw new Error("not shared");
  return parseCSV(t);
}
async function refreshMoney(){
  if(moneyBusy)return; moneyBusy=true; moneyErr=""; renderMoney();
  try{
    const [ex,sum]=await Promise.all([sheetCSV("Expenses","A6:L500"),sheetCSV("Summary","A4:D20")]);
    const people=[];
    for(const r of sum){const p=(r[0]||"").trim(); if(p==="Total")break; if(!p||p==="Person")continue;
      people.push({p,paid:num(r[1]),share:num(r[2]),net:num(r[3])})}
    const exps=ex.filter(r=>(r[1]||"").trim()).map(r=>({date:r[0],item:r[1],cat:r[2],who:r[3],sgd:num(r[6]),
      split:people.filter((x,k)=>String(r[7+k]).toLowerCase()==="true").map(x=>x.p)}));
    if(!people.length)throw new Error("empty");
    money={at:Date.now(),people,exps}; save("money",money);
  }catch(e){moneyErr="Couldn't load the sheet"+(money?", showing the last copy.":".")+
    " Check it's shared as “Anyone with the link can view”."}
  finally{moneyBusy=false; renderMoney()}
}
function renderMoney(){
  const btn=`<button class="copy" id="moneyRefresh" type="button"${moneyBusy?" disabled":""}>${moneyBusy?"Updating…":"Refresh"}</button>`;
  const head=`<h2 class="sec">Who's paid what</h2>
  <p class="note">Live from the <a href="${SHEET_URL}" target="_blank" rel="noopener">Shikoku 2026 Expenses</a> sheet. Add or edit expenses there, then refresh here.
  ${money?`Updated ${ago(money.at)}.`:""} ${btn}</p>${moneyErr?`<p class="err">${esc(moneyErr)}</p>`:""}`;
  if(!money){$("#tab-money").innerHTML=head+(moneyBusy?`<p class="note">Loading…</p>`:"");wireMoney();return}
  const {people,exps}=money, n=people.length;
  const total=exps.reduce((a,e)=>a+e.sgd,0);
  const cred=people.filter(b=>b.net>0.005).map(b=>({p:b.p,v:b.net})).sort((a,b)=>b.v-a.v);
  const debt=people.filter(b=>b.net<-0.005).map(b=>({p:b.p,v:-b.net})).sort((a,b)=>b.v-a.v);
  const moves=[]; let i=0,j=0;
  while(i<debt.length&&j<cred.length){const m=Math.min(debt[i].v,cred[j].v);moves.push(`${esc(debt[i].p)} pays ${esc(cred[j].p)} <b>S$${m.toFixed(2)}</b>`);debt[i].v-=m;cred[j].v-=m;if(debt[i].v<0.005)i++;if(cred[j].v<0.005)j++}
  $("#tab-money").innerHTML=head+`
  <div class="tablewrap"><table><thead><tr><th>Date</th><th>Item</th><th>Paid by</th><th class="num">S$</th></tr></thead><tbody>
  ${exps.map(e=>`<tr><td>${esc(e.date)}</td><td>${esc(e.item)}${e.split.length&&e.split.length<n?`<br><span class="note">Split: ${esc(e.split.join(", "))}</span>`:""}</td><td>${esc(e.who)}</td><td class="num">${e.sgd.toFixed(2)}</td></tr>`).join("")}
  <tr><td></td><td><b>Total</b></td><td></td><td class="num"><b>${total.toFixed(2)}</b></td></tr></tbody></table></div>
  <h2 class="sec" style="margin-top:22px">Balances</h2>
  <p class="note">From the sheet's Summary tab. Plus means the group owes them.</p>
  <div class="bal">${people.map(b=>`<div>${esc(b.p)}<b class="${b.net>=0?"pos":"neg"}">${b.net>=0?"+":"−"}S$${Math.abs(b.net).toFixed(2)}</b><span class="note">Paid ${b.paid.toFixed(2)} · share ${b.share.toFixed(2)}</span></div>`).join("")}</div>
  <div class="card"><h3>To settle up</h3>${moves.length?moves.map(m=>`<p>${m}</p>`).join(""):"<p>All square.</p>"}</div>`;
  wireMoney();
}
function wireMoney(){$("#moneyRefresh").onclick=refreshMoney}

/* ---------- Packing ---------- */
let packState=load("pack",{}); let packCustom=load("packCustom",[]);
function renderPack(){
  const all=PACK_DEFAULT.map(g=>[g[0],g[1].map(i=>({t:i[0],n:i[1]}))]);
  if(packCustom.length) all.push(["Added by you",packCustom.map((c,k)=>({t:c,n:"",k}))]);
  const total=all.reduce((a,g)=>a+g[1].length,0), done=all.reduce((a,g)=>a+g[1].filter(i=>packState[i.t]).length,0);
  $("#tab-pack").innerHTML=`<h2 class="sec">Packing list</h2><p class="note">${done} of ${total} packed. Ticks are saved on this device.</p>`+
   all.map(g=>`<div class="card"><h3>${esc(g[0])}</h3>${g[1].map(i=>{const id="pk"+btoa(unescape(encodeURIComponent(i.t))).replace(/[^a-z0-9]/gi,"");
     return `<div class="check ${packState[i.t]?"checked":""}"><input type="checkbox" id="${id}" data-t="${esc(i.t)}" ${packState[i.t]?"checked":""}>
     <label for="${id}">${esc(i.t)}${i.n?`<span class="who">${esc(i.n)}</span>`:""}</label>${i.k!==undefined?`<button class="del pdel" data-k="${i.k}" aria-label="Remove">×</button>`:""}</div>`}).join("")}</div>`).join("")+
   `<div class="addrow"><input id="pkNew" placeholder="Add an item"><button class="btn" id="pkAdd">Add</button><button class="btn ghost" id="pkReset">Untick all</button></div>`;
  document.querySelectorAll("#tab-pack input[type=checkbox]").forEach(c=>c.onchange=()=>{packState[c.dataset.t]=c.checked;save("pack",packState);renderPack()});
  document.querySelectorAll("#tab-pack .pdel").forEach(b=>b.onclick=()=>{packCustom.splice(+b.dataset.k,1);save("packCustom",packCustom);renderPack()});
  $("#pkAdd").onclick=()=>{const v=$("#pkNew").value.trim();if(!v)return;packCustom.push(v);save("packCustom",packCustom);renderPack()};
  $("#pkReset").onclick=()=>{packState={};save("pack",packState);renderPack()};
}

/* ---------- Shopping ---------- */
function renderShop(){
  $("#tab-shop").innerHTML=`<h2 class="sec">Shopping list</h2>`+SHOP_GROUPS.map(g=>`<div class="card"><h3>${esc(g[0])}</h3><p class="meta">${esc(g[1])}</p>
    ${g[2].map(r=>`<div class="check" style="border-bottom:1px solid var(--line)"><div><b>${esc(r[1])}</b><span class="who">${esc(r[0])} · ${esc(r[2])}</span></div></div>`).join("")}</div>`).join("")+
    `<p class="note">Each stop is also tagged on its day in the Days tab. Hours from Google Maps, checked 30 Sep 2026.</p>`;
}

/* ---------- To-do ---------- */
let todos=load("todos",DEFAULT_TODO.map(t=>({t:t[0],who:t[1],on:false})));
function renderTodo(){
  const left=todos.filter(t=>!t.on).length;
  $("#tab-todo").innerHTML=`<h2 class="sec">Before you go</h2><p class="note">${left} of ${todos.length} left. Ticks are saved on this device.</p>
  ${todos.map((t,k)=>`<div class="check ${t.on?"checked":""}"><input type="checkbox" id="td${k}" ${t.on?"checked":""} data-k="${k}">
    <label for="td${k}">${esc(t.t)}<span class="who">${esc(t.who)}</span></label>
    <button class="del" data-k="${k}" aria-label="Remove">×</button></div>`).join("")}
  <div class="addrow"><input id="tdNew" placeholder="Add a to-do"><input id="tdWho" placeholder="Who?"><button class="btn" id="tdAdd">Add</button></div>`;
  document.querySelectorAll("#tab-todo input[type=checkbox]").forEach(c=>c.onchange=()=>{todos[+c.dataset.k].on=c.checked;save("todos",todos);renderTodo()});
  document.querySelectorAll("#tab-todo .del").forEach(b=>b.onclick=()=>{todos.splice(+b.dataset.k,1);save("todos",todos);renderTodo()});
  $("#tdAdd").onclick=()=>{const v=$("#tdNew").value.trim();if(!v)return;todos.push({t:v,who:$("#tdWho").value.trim()||"Group",on:false});save("todos",todos);renderTodo()};
}

/* ---------- Heads-up ---------- */
function renderHeads(){
  $("#tab-heads").innerHTML=`<h2 class="sec">Things I spotted in the doc</h2>`+HEADS_UP.map(l=>`<div class="card"><h3>${esc(l[0])}</h3><p>${esc(l[1])}</p></div>`).join("");
}

/* ---------- Tabs ---------- */
document.querySelectorAll("nav.tabs button").forEach(b=>b.onclick=()=>{
  document.querySelectorAll("nav.tabs button").forEach(x=>x.setAttribute("aria-selected",x===b));
  document.querySelectorAll("section[id^=tab-]").forEach(s=>s.hidden=s.id!=="tab-"+b.dataset.tab);
  window.scrollTo({top:0});
});

renderRoute(); renderDay(); renderBookings(); renderMoney(); renderPack(); renderShop(); renderTodo(); renderHeads();
function autoRefresh(){
  if(!liveWx||Date.now()-liveWx.at>30*60000)refreshWeather();
  if(!money||Date.now()-money.at>5*60000)refreshMoney();
}
autoRefresh();
document.addEventListener("visibilitychange",()=>{if(!document.hidden)autoRefresh()});
