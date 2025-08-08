var X=Object.defineProperty;var Q=(s,t,i)=>t in s?X(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var y=(s,t,i)=>Q(s,typeof t!="symbol"?t+"":t,i);import{j as e,r as u}from"./index-CKB-v0eF.js";import{c as C,C as p,d as g,e as j,B as N,f as v,g as b}from"./card-CdOATahm.js";import{B as m,L as w,K as Z,I as O,E as ee,a as se}from"./badge-DHuywlE1.js";import{c as re,C as ae,a as G,A as U,b as T}from"./alert-DYhajS-c.js";import{F as z}from"./file-text-1y_M2mYw.js";import{c as te,P as K,a as ne,E as ie}from"./index-4CZqBsOn.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],k=C("circle-check",le);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],oe=C("download",ce);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],V=C("search",de);class me{constructor(t){y(this,"config");y(this,"researchProgress",[]);y(this,"onProgressUpdate");this.config=t}setProgressCallback(t){this.onProgressUpdate=t}updateProgress(t,i,a){var c;const r=this.researchProgress.findIndex(n=>n.step===t),d={step:t,status:i,details:a};r>=0?this.researchProgress[r]=d:this.researchProgress.push(d),(c=this.onProgressUpdate)==null||c.call(this,this.researchProgress)}async callGeminiAPI(t,i){var d,c,n,l,h;const a=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${this.config.model}:generateContent?key=${this.config.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:i?`${i}

User: ${t}`:t}]}],generationConfig:{temperature:this.config.temperature,maxOutputTokens:this.config.maxTokens}})});if(!a.ok)throw new Error(`Gemini API error: ${a.statusText}`);return((h=(l=(n=(c=(d=(await a.json()).candidates)==null?void 0:d[0])==null?void 0:c.content)==null?void 0:n.parts)==null?void 0:l[0])==null?void 0:h.text)||""}async researchProduct(t){this.researchProgress=[],this.updateProgress("analyze","in-progress","Analyzing product concept...");const i=`
Analyze this product or business idea: "${t}"

Provide a structured analysis in JSON format with:
{
  "productName": "Clear product name",
  "industry": "Primary industry/sector",
  "targetMarket": "Primary target market description",
  "isExistingProduct": true/false,
  "needsResearch": true/false,
  "keySearchTerms": ["term1", "term2", "term3"]
}

Focus on understanding what this product is and how to research it effectively.
`;try{const a=await this.callGeminiAPI(i),r=JSON.parse(this.extractJSON(a));this.updateProgress("analyze","completed",`Identified: ${r.productName} in ${r.industry}`),this.updateProgress("research","in-progress","Conducting market research...");const d=`
Based on this product analysis: ${JSON.stringify(r)}

Research and provide comprehensive market information in JSON format:
{
  "competitors": ["competitor1", "competitor2", "competitor3"],
  "marketSize": "Market size estimate with reasoning",
  "pricingModel": "Common pricing models in this space",
  "keyFeatures": ["feature1", "feature2", "feature3"],
  "challenges": ["challenge1", "challenge2"],
  "opportunities": ["opportunity1", "opportunity2"],
  "sources": ["Source of information used for research"]
}

Use your knowledge to provide realistic market insights for ${r.productName} in the ${r.industry} industry.
`,c=await this.callGeminiAPI(d),n=JSON.parse(this.extractJSON(c));return this.updateProgress("research","completed",`Found ${n.competitors.length} competitors, analyzed market opportunities`),{productName:r.productName,industry:r.industry,targetMarket:r.targetMarket,competitors:n.competitors,marketSize:n.marketSize,pricingModel:n.pricingModel,keyFeatures:n.keyFeatures,challenges:n.challenges,opportunities:n.opportunities,sources:n.sources}}catch(a){throw this.updateProgress("analyze","error",`Research failed: ${a instanceof Error?a.message:"Unknown error"}`),a}}async generateLeanCanvas(t){this.updateProgress("canvas","in-progress","Generating lean canvas...");const i=`
Based on this comprehensive product research:
${JSON.stringify(t,null,2)}

Generate a detailed Lean Canvas in JSON format:
{
  "problemStatement": "Clear problem statement the product solves",
  "solution": "How the product solves the problem",
  "keyMetrics": ["metric1", "metric2", "metric3"],
  "uniqueValueProposition": "What makes this product unique",
  "unfairAdvantage": "Hard to copy advantage or secret sauce",
  "channels": ["channel1", "channel2", "channel3"],
  "customerSegments": ["segment1", "segment2"],
  "costStructure": ["cost1", "cost2", "cost3"],
  "revenueStreams": ["stream1", "stream2"]
}

Make each section detailed and specific to ${t.productName}. 
Use the research data to make realistic, data-driven assumptions.
Focus on creating a practical, implementable business model.
`;try{const a=await this.callGeminiAPI(i),r=JSON.parse(this.extractJSON(a));return this.updateProgress("canvas","completed","Lean canvas generated successfully"),r}catch(a){throw this.updateProgress("canvas","error",`Canvas generation failed: ${a instanceof Error?a.message:"Unknown error"}`),a}}async generateFullLeanCanvas(t){const i=await this.researchProduct(t),a=await this.generateLeanCanvas(i);return{research:i,canvas:a}}extractJSON(t){const i=t.match(/\{[\s\S]*\}/);if(i)return i[0];const a=t.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/);return a?a[1]:t}getProgress(){return this.researchProgress}}function ue({canvas:s}){const t=async()=>{const a=`
LEAN BUSINESS MODEL CANVAS

Problem:
${s.problemStatement}

Solution:
${s.solution}

Unique Value Proposition:
${s.uniqueValueProposition}

Unfair Advantage:
${s.unfairAdvantage}

Customer Segments:
${s.customerSegments.map(r=>`• ${r}`).join(`
`)}

Key Metrics:
${s.keyMetrics.map(r=>`• ${r}`).join(`
`)}

Channels:
${s.channels.map(r=>`• ${r}`).join(`
`)}

Cost Structure:
${s.costStructure.map(r=>`• ${r}`).join(`
`)}

Revenue Streams:
${s.revenueStreams.map(r=>`• ${r}`).join(`
`)}
    `.trim();await navigator.clipboard.writeText(a)},i=()=>{const a=`
LEAN BUSINESS MODEL CANVAS
Generated on ${new Date().toLocaleDateString()}

PROBLEM STATEMENT
${s.problemStatement}

SOLUTION
${s.solution}

UNIQUE VALUE PROPOSITION
${s.uniqueValueProposition}

UNFAIR ADVANTAGE
${s.unfairAdvantage}

CUSTOMER SEGMENTS
${s.customerSegments.map((n,l)=>`${l+1}. ${n}`).join(`
`)}

KEY METRICS
${s.keyMetrics.map((n,l)=>`${l+1}. ${n}`).join(`
`)}

CHANNELS
${s.channels.map((n,l)=>`${l+1}. ${n}`).join(`
`)}

COST STRUCTURE
${s.costStructure.map((n,l)=>`${l+1}. ${n}`).join(`
`)}

REVENUE STREAMS
${s.revenueStreams.map((n,l)=>`${l+1}. ${n}`).join(`
`)}

---
Generated by AI-Powered Lean Canvas Generator
    `.trim(),r=new Blob([a],{type:"text/plain"}),d=URL.createObjectURL(r),c=document.createElement("a");c.href=d,c.download="lean-canvas.txt",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(d)};return e.jsxs(p,{children:[e.jsx(g,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs(j,{className:"flex items-center gap-2",children:[e.jsx(z,{className:"h-5 w-5"}),"Lean Business Model Canvas"]}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"AI-generated lean canvas based on comprehensive market research"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(N,{variant:"outline",size:"sm",onClick:t,children:[e.jsx(re,{className:"h-4 w-4 mr-2"}),"Copy"]}),e.jsxs(N,{variant:"outline",size:"sm",onClick:i,children:[e.jsx(oe,{className:"h-4 w-4 mr-2"}),"Download"]})]})]})}),e.jsxs(v,{children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-4 min-h-[600px]",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-red-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-red-100 text-red-800",children:"1"}),"Problem"]}),e.jsx("p",{className:"text-sm text-red-700",children:s.problemStatement})]}),e.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-yellow-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-yellow-100 text-yellow-800",children:"4"}),"Customer Segments"]}),e.jsx("div",{className:"space-y-1",children:s.customerSegments.map((a,r)=>e.jsxs("div",{className:"text-sm text-yellow-700 flex items-start gap-2",children:[e.jsx("span",{className:"text-yellow-500 mt-1",children:"•"}),e.jsx("span",{children:a})]},r))})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-green-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-green-100 text-green-800",children:"2"}),"Solution"]}),e.jsx("p",{className:"text-sm text-green-700",children:s.solution})]}),e.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-purple-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-purple-100 text-purple-800",children:"5"}),"Key Metrics"]}),e.jsx("div",{className:"space-y-1",children:s.keyMetrics.map((a,r)=>e.jsxs("div",{className:"text-sm text-purple-700 flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500 mt-1",children:"•"}),e.jsx("span",{children:a})]},r))})]})]}),e.jsx("div",{className:"lg:flex lg:items-center",children:e.jsxs("div",{className:"bg-blue-50 border-2 border-blue-300 rounded-lg p-6 h-full lg:h-96 flex flex-col justify-center",children:[e.jsxs("h3",{className:"font-semibold text-blue-800 mb-4 flex items-center gap-2 text-center",children:[e.jsx(m,{variant:"outline",className:"bg-blue-100 text-blue-800",children:"3"}),"Unique Value Proposition"]}),e.jsx("p",{className:"text-sm text-blue-700 text-center font-medium leading-relaxed",children:s.uniqueValueProposition})]})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-indigo-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-indigo-100 text-indigo-800",children:"6"}),"Unfair Advantage"]}),e.jsx("p",{className:"text-sm text-indigo-700",children:s.unfairAdvantage})]}),e.jsxs("div",{className:"bg-teal-50 border border-teal-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-teal-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-teal-100 text-teal-800",children:"7"}),"Channels"]}),e.jsx("div",{className:"space-y-1",children:s.channels.map((a,r)=>e.jsxs("div",{className:"text-sm text-teal-700 flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-500 mt-1",children:"•"}),e.jsx("span",{children:a})]},r))})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-orange-50 border border-orange-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-orange-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-orange-100 text-orange-800",children:"8"}),"Cost Structure"]}),e.jsx("div",{className:"space-y-1",children:s.costStructure.map((a,r)=>e.jsxs("div",{className:"text-sm text-orange-700 flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:a})]},r))})]}),e.jsxs("div",{className:"bg-emerald-50 border border-emerald-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-emerald-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-emerald-100 text-emerald-800",children:"9"}),"Revenue Streams"]}),e.jsx("div",{className:"space-y-1",children:s.revenueStreams.map((a,r)=>e.jsxs("div",{className:"text-sm text-emerald-700 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"•"}),e.jsx("span",{children:a})]},r))})]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-muted/50 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2 text-sm",children:"Lean Canvas Guide:"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-muted-foreground",children:[e.jsx("div",{children:"1. Problem - Key issues to solve"}),e.jsx("div",{children:"2. Solution - Your approach"}),e.jsx("div",{children:"3. UVP - Why you're different"}),e.jsx("div",{children:"4. Customers - Who will pay"}),e.jsx("div",{children:"5. Metrics - Success measures"}),e.jsx("div",{children:"6. Advantage - Hard to copy"}),e.jsx("div",{children:"7. Channels - How to reach customers"}),e.jsx("div",{children:"8. Costs - Key expenses"}),e.jsx("div",{children:"9. Revenue - Income sources"})]})]})]})]})}var A="Progress",$=100,[he,Ie]=te(A),[xe,pe]=he(A),F=u.forwardRef((s,t)=>{const{__scopeProgress:i,value:a=null,max:r,getValueLabel:d=ge,...c}=s;(r||r===0)&&!R(r)&&console.error(je(`${r}`,"Progress"));const n=R(r)?r:$;a!==null&&!L(a,n)&&console.error(Ne(`${a}`,"Progress"));const l=L(a,n)?a:null,h=P(l)?d(l,n):void 0;return e.jsx(xe,{scope:i,value:l,max:n,children:e.jsx(K.div,{"aria-valuemax":n,"aria-valuemin":0,"aria-valuenow":P(l)?l:void 0,"aria-valuetext":h,role:"progressbar","data-state":B(l,n),"data-value":l??void 0,"data-max":n,...c,ref:t})})});F.displayName=A;var D="ProgressIndicator",_=u.forwardRef((s,t)=>{const{__scopeProgress:i,...a}=s,r=pe(D,i);return e.jsx(K.div,{"data-state":B(r.value,r.max),"data-value":r.value??void 0,"data-max":r.max,...a,ref:t})});_.displayName=D;function ge(s,t){return`${Math.round(s/t*100)}%`}function B(s,t){return s==null?"indeterminate":s===t?"complete":"loading"}function P(s){return typeof s=="number"}function R(s){return P(s)&&!isNaN(s)&&s>0}function L(s,t){return P(s)&&!isNaN(s)&&s<=t&&s>=0}function je(s,t){return`Invalid prop \`max\` of value \`${s}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$}\`.`}function Ne(s,t){return`Invalid prop \`value\` of value \`${s}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var J=F,ve=_;const q=u.forwardRef(({className:s,value:t,...i},a)=>e.jsx(J,{ref:a,className:ne("relative h-4 w-full overflow-hidden rounded-full bg-secondary",s),...i,children:e.jsx(ve,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})}));q.displayName=J.displayName;function fe({progress:s}){const t=c=>{switch(c){case"completed":return e.jsx(k,{className:"h-4 w-4 text-green-600"});case"in-progress":return e.jsx(w,{className:"h-4 w-4 animate-spin text-blue-600"});case"error":return e.jsx(G,{className:"h-4 w-4 text-red-600"});default:return e.jsx(ae,{className:"h-4 w-4 text-muted-foreground"})}},i=c=>{switch(c){case"completed":return e.jsx(m,{variant:"secondary",className:"bg-green-100 text-green-800",children:"Completed"});case"in-progress":return e.jsx(m,{variant:"secondary",className:"bg-blue-100 text-blue-800",children:"In Progress"});case"error":return e.jsx(m,{variant:"destructive",children:"Error"});default:return e.jsx(m,{variant:"outline",children:"Pending"})}},a=s.filter(c=>c.status==="completed").length,r=3,d=a/r*100;return e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsxs(j,{className:"flex items-center gap-2",children:[e.jsx(V,{className:"h-5 w-5"}),"Research Progress"]}),e.jsx(b,{children:"AI agent is researching and analyzing your product concept"})]}),e.jsxs(v,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Overall Progress"}),e.jsxs("span",{children:[a,"/",r," steps completed"]})]}),e.jsx(q,{value:d,className:"h-2"})]}),e.jsx("div",{className:"space-y-4",children:[{key:"analyze",title:"Product Analysis",description:"Understanding your product concept and market fit"},{key:"research",title:"Market Research",description:"Analyzing competitors, pricing, and opportunities"},{key:"canvas",title:"Canvas Generation",description:"Creating comprehensive lean canvas based on research"}].map(c=>{const n=s.find(h=>h.step===c.key),l=(n==null?void 0:n.status)||"pending";return e.jsxs("div",{className:"flex items-start gap-4 p-4 border rounded-lg",children:[e.jsx("div",{className:"flex-shrink-0 mt-1",children:t(l)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("h4",{className:"font-medium text-sm",children:c.title}),i(l)]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:c.description}),(n==null?void 0:n.details)&&e.jsx("p",{className:"text-xs text-foreground bg-muted/50 rounded px-2 py-1",children:n.details})]})]},c.key)})}),s.some(c=>c.status==="in-progress")&&e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx(w,{className:"h-4 w-4 animate-spin text-blue-600"}),e.jsx("span",{className:"text-sm text-blue-800",children:"AI agent is actively researching your product..."})]})]})]})}function ye({apiKey:s,onApiKeyChange:t,isConfigured:i}){const[a,r]=u.useState(!1);return e.jsxs(p,{className:i?"border-green-200 bg-green-50/50":"",children:[e.jsxs(g,{children:[e.jsxs(j,{className:"flex items-center gap-2",children:[e.jsx(Z,{className:"h-5 w-5"}),"Gemini API Configuration",i&&e.jsx(k,{className:"h-4 w-4 text-green-600"})]}),e.jsx(b,{children:"Configure your Google Gemini API key to enable AI-powered research and canvas generation."})]}),e.jsxs(v,{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(O,{type:a?"text":"password",placeholder:"Enter your Gemini API key (AIza...)",value:s,onChange:d=>t(d.target.value),className:"pr-10"}),e.jsx(N,{type:"button",variant:"ghost",size:"sm",className:"absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0",onClick:()=>r(!a),children:a?e.jsx(ee,{className:"h-3 w-3"}):e.jsx(se,{className:"h-3 w-3"})})]}),i&&e.jsxs(m,{variant:"secondary",className:"self-center",children:[e.jsx(k,{className:"h-3 w-3 mr-1"}),"Connected"]})]}),e.jsx(U,{children:e.jsx(T,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm",children:"Your API key is stored locally in your browser and never sent to our servers. It's only used to make direct requests to Google's Gemini API."}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"Need an API key?"}),e.jsxs(N,{variant:"link",size:"sm",className:"h-auto p-0 text-sm",onClick:()=>window.open("https://aistudio.google.com/app/apikey","_blank"),children:["Get one free from Google AI Studio",e.jsx(ie,{className:"h-3 w-3 ml-1"})]})]})]})})}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"text-center p-3 border rounded-lg",children:[e.jsx("div",{className:"text-sm font-medium",children:"Free Tier"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"15 requests/minute"})]}),e.jsxs("div",{className:"text-center p-3 border rounded-lg",children:[e.jsx("div",{className:"text-sm font-medium",children:"Advanced Model"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Gemini 1.5 Pro"})]}),e.jsxs("div",{className:"text-center p-3 border rounded-lg",children:[e.jsx("div",{className:"text-sm font-medium",children:"Web Research"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Real-time analysis"})]})]})]})]})}function be(){const[s,t]=u.useState(""),[i,a]=u.useState(""),[r,d]=u.useState(!1),[c,n]=u.useState([]),[l,h]=u.useState(null),[S,I]=u.useState(null),[E,f]=u.useState(null),H=u.useCallback(o=>{n(o)},[]),M=async()=>{if(!s.trim()){f("Please enter your Gemini API key");return}if(!i.trim()){f("Please enter a product name or business idea");return}f(null),d(!0),n([]),h(null),I(null);try{const o=new me({apiKey:s.trim(),model:"gemini-1.5-pro",temperature:.7,maxTokens:4e3});o.setProgressCallback(H);const{research:x,canvas:Y}=await o.generateFullLeanCanvas(i.trim());h(x),I(Y)}catch(o){f(o instanceof Error?o.message:"An error occurred during generation")}finally{d(!1)}},W=o=>{o.key==="Enter"&&!r&&M()};return e.jsxs("div",{className:"space-y-8",children:[e.jsx(ye,{apiKey:s,onApiKeyChange:t,isConfigured:!!s.trim()}),e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsxs(j,{className:"flex items-center gap-2",children:[e.jsx(V,{className:"h-5 w-5"}),"Product Research & Canvas Generation"]}),e.jsx(b,{children:"Enter any product name or business idea. Our AI agent will research the market, analyze competitors, and generate a comprehensive lean canvas."})]}),e.jsxs(v,{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(O,{placeholder:"e.g., 'Notion for developers', 'AI-powered fitness app', 'Sustainable packaging startup'...",value:i,onChange:o=>a(o.target.value),onKeyPress:W,disabled:r,className:"flex-1"}),e.jsx(N,{onClick:M,disabled:r||!s.trim()||!i.trim(),className:"min-w-[120px]",children:r?e.jsxs(e.Fragment,{children:[e.jsx(w,{className:"h-4 w-4 animate-spin mr-2"}),"Researching..."]}):e.jsxs(e.Fragment,{children:[e.jsx(z,{className:"h-4 w-4 mr-2"}),"Generate Canvas"]})})]}),E&&e.jsxs(U,{variant:"destructive",children:[e.jsx(G,{className:"h-4 w-4"}),e.jsx(T,{children:E})]}),e.jsxs("div",{className:"pt-2",children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Try these examples:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["AI-powered meal planning app","Remote work collaboration tool","Sustainable fashion marketplace","Developer productivity platform","Mental health support chatbot"].map(o=>e.jsx(m,{variant:"secondary",className:"cursor-pointer hover:bg-secondary/80",onClick:()=>!r&&a(o),children:o},o))})]})]})]}),c.length>0&&e.jsx(fe,{progress:c}),(l||S)&&e.jsxs("div",{className:"grid gap-8",children:[l&&e.jsxs(p,{children:[e.jsxs(g,{children:[e.jsx(j,{children:"Market Research Results"}),e.jsxs(b,{children:["Comprehensive analysis of ",l.productName]})]}),e.jsx(v,{children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Industry & Market"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:l.industry}),e.jsx("p",{className:"text-sm",children:l.marketSize})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Target Market"}),e.jsx("p",{className:"text-sm",children:l.targetMarket})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Pricing Model"}),e.jsx("p",{className:"text-sm",children:l.pricingModel})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Key Competitors"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:l.competitors.map((o,x)=>e.jsx(m,{variant:"outline",children:o},x))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Key Features"}),e.jsx("ul",{className:"text-sm space-y-1",children:l.keyFeatures.map((o,x)=>e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-muted-foreground",children:"•"}),o]},x))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Market Opportunities"}),e.jsx("ul",{className:"text-sm space-y-1",children:l.opportunities.map((o,x)=>e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500",children:"+"}),o]},x))})]})]})]})})]}),S&&e.jsx(ue,{canvas:S})]})]})}const Ee=function(){return e.jsx("div",{className:"container mx-auto py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"AI-Powered Lean Canvas Generator"}),e.jsx("p",{className:"text-muted-foreground text-lg",children:"Research any product or business idea and automatically generate a comprehensive lean canvas using AI-powered web research."})]}),e.jsx(be,{})]})})};export{Ee as component};
