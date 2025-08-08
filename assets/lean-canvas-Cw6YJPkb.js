var Q=Object.defineProperty;var Z=(s,t,n)=>t in s?Q(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var b=(s,t,n)=>Z(s,typeof t!="symbol"?t+"":t,n);import{j as e,r as u}from"./index-BEYrb-F6.js";import{c as p,a as ee,h as se,C as g,d as j,e as f,B as v,f as N,g as k}from"./card-DcuBIylQ.js";import{e as O,d as re,c as te,P as G,C as ae,a as U,A as T,b as z,E as ne}from"./index-DVe_E5BV.js";import{F as _}from"./file-text-rSY_3rhX.js";/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],S=p("circle-check",ie);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],le=p("download",oe);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],de=p("eye-off",ce);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ue=p("eye",me);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],xe=p("key",he);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],C=p("loader-circle",pe);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],V=p("search",ge);function K({className:s,type:t,...n}){return e.jsx("input",{type:t,"data-slot":"input",className:ee("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",s),...n})}const je=se("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function m({className:s,variant:t,...n}){return e.jsx("div",{className:O(je({variant:t}),s),...n})}class fe{constructor(t){b(this,"config");b(this,"researchProgress",[]);b(this,"onProgressUpdate");this.config=t}setProgressCallback(t){this.onProgressUpdate=t}updateProgress(t,n,a){var l;const r=this.researchProgress.findIndex(i=>i.step===t),d={step:t,status:n,details:a};r>=0?this.researchProgress[r]=d:this.researchProgress.push(d),(l=this.onProgressUpdate)==null||l.call(this,this.researchProgress)}async callGeminiAPI(t,n){var d,l,i,o,h;const a=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${this.config.model}:generateContent?key=${this.config.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:n?`${n}

User: ${t}`:t}]}],generationConfig:{temperature:this.config.temperature,maxOutputTokens:this.config.maxTokens}})});if(!a.ok)throw new Error(`Gemini API error: ${a.statusText}`);return((h=(o=(i=(l=(d=(await a.json()).candidates)==null?void 0:d[0])==null?void 0:l.content)==null?void 0:i.parts)==null?void 0:o[0])==null?void 0:h.text)||""}async researchProduct(t){this.researchProgress=[],this.updateProgress("analyze","in-progress","Analyzing product concept...");const n=`
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
`;try{const a=await this.callGeminiAPI(n),r=JSON.parse(this.extractJSON(a));this.updateProgress("analyze","completed",`Identified: ${r.productName} in ${r.industry}`),this.updateProgress("research","in-progress","Conducting market research...");const d=`
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
`,l=await this.callGeminiAPI(d),i=JSON.parse(this.extractJSON(l));return this.updateProgress("research","completed",`Found ${i.competitors.length} competitors, analyzed market opportunities`),{productName:r.productName,industry:r.industry,targetMarket:r.targetMarket,competitors:i.competitors,marketSize:i.marketSize,pricingModel:i.pricingModel,keyFeatures:i.keyFeatures,challenges:i.challenges,opportunities:i.opportunities,sources:i.sources}}catch(a){throw this.updateProgress("analyze","error",`Research failed: ${a instanceof Error?a.message:"Unknown error"}`),a}}async generateLeanCanvas(t){this.updateProgress("canvas","in-progress","Generating lean canvas...");const n=`
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
`;try{const a=await this.callGeminiAPI(n),r=JSON.parse(this.extractJSON(a));return this.updateProgress("canvas","completed","Lean canvas generated successfully"),r}catch(a){throw this.updateProgress("canvas","error",`Canvas generation failed: ${a instanceof Error?a.message:"Unknown error"}`),a}}async generateFullLeanCanvas(t){const n=await this.researchProduct(t),a=await this.generateLeanCanvas(n);return{research:n,canvas:a}}extractJSON(t){const n=t.match(/\{[\s\S]*\}/);if(n)return n[0];const a=t.match(/```(?:json)?\s*(\{[\s\S]*?\})\s*```/);return a?a[1]:t}getProgress(){return this.researchProgress}}function ve({canvas:s}){const t=async()=>{const a=`
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
    `.trim();await navigator.clipboard.writeText(a)},n=()=>{const a=`
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
${s.customerSegments.map((i,o)=>`${o+1}. ${i}`).join(`
`)}

KEY METRICS
${s.keyMetrics.map((i,o)=>`${o+1}. ${i}`).join(`
`)}

CHANNELS
${s.channels.map((i,o)=>`${o+1}. ${i}`).join(`
`)}

COST STRUCTURE
${s.costStructure.map((i,o)=>`${o+1}. ${i}`).join(`
`)}

REVENUE STREAMS
${s.revenueStreams.map((i,o)=>`${o+1}. ${i}`).join(`
`)}

---
Generated by AI-Powered Lean Canvas Generator
    `.trim(),r=new Blob([a],{type:"text/plain"}),d=URL.createObjectURL(r),l=document.createElement("a");l.href=d,l.download="lean-canvas.txt",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(d)};return e.jsxs(g,{children:[e.jsx(j,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs(f,{className:"flex items-center gap-2",children:[e.jsx(_,{className:"h-5 w-5"}),"Lean Business Model Canvas"]}),e.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:"AI-generated lean canvas based on comprehensive market research"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs(v,{variant:"outline",size:"sm",onClick:t,children:[e.jsx(re,{className:"h-4 w-4 mr-2"}),"Copy"]}),e.jsxs(v,{variant:"outline",size:"sm",onClick:n,children:[e.jsx(le,{className:"h-4 w-4 mr-2"}),"Download"]})]})]})}),e.jsxs(N,{children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-5 gap-4 min-h-[600px]",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-red-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-red-100 text-red-800",children:"1"}),"Problem"]}),e.jsx("p",{className:"text-sm text-red-700",children:s.problemStatement})]}),e.jsxs("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-yellow-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-yellow-100 text-yellow-800",children:"4"}),"Customer Segments"]}),e.jsx("div",{className:"space-y-1",children:s.customerSegments.map((a,r)=>e.jsxs("div",{className:"text-sm text-yellow-700 flex items-start gap-2",children:[e.jsx("span",{className:"text-yellow-500 mt-1",children:"•"}),e.jsx("span",{children:a})]},r))})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-green-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-green-100 text-green-800",children:"2"}),"Solution"]}),e.jsx("p",{className:"text-sm text-green-700",children:s.solution})]}),e.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-purple-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-purple-100 text-purple-800",children:"5"}),"Key Metrics"]}),e.jsx("div",{className:"space-y-1",children:s.keyMetrics.map((a,r)=>e.jsxs("div",{className:"text-sm text-purple-700 flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500 mt-1",children:"•"}),e.jsx("span",{children:a})]},r))})]})]}),e.jsx("div",{className:"lg:flex lg:items-center",children:e.jsxs("div",{className:"bg-blue-50 border-2 border-blue-300 rounded-lg p-6 h-full lg:h-96 flex flex-col justify-center",children:[e.jsxs("h3",{className:"font-semibold text-blue-800 mb-4 flex items-center gap-2 text-center",children:[e.jsx(m,{variant:"outline",className:"bg-blue-100 text-blue-800",children:"3"}),"Unique Value Proposition"]}),e.jsx("p",{className:"text-sm text-blue-700 text-center font-medium leading-relaxed",children:s.uniqueValueProposition})]})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-indigo-50 border border-indigo-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-indigo-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-indigo-100 text-indigo-800",children:"6"}),"Unfair Advantage"]}),e.jsx("p",{className:"text-sm text-indigo-700",children:s.unfairAdvantage})]}),e.jsxs("div",{className:"bg-teal-50 border border-teal-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-teal-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-teal-100 text-teal-800",children:"7"}),"Channels"]}),e.jsx("div",{className:"space-y-1",children:s.channels.map((a,r)=>e.jsxs("div",{className:"text-sm text-teal-700 flex items-start gap-2",children:[e.jsx("span",{className:"text-teal-500 mt-1",children:"•"}),e.jsx("span",{children:a})]},r))})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-orange-50 border border-orange-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-orange-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-orange-100 text-orange-800",children:"8"}),"Cost Structure"]}),e.jsx("div",{className:"space-y-1",children:s.costStructure.map((a,r)=>e.jsxs("div",{className:"text-sm text-orange-700 flex items-start gap-2",children:[e.jsx("span",{className:"text-orange-500 mt-1",children:"•"}),e.jsx("span",{children:a})]},r))})]}),e.jsxs("div",{className:"bg-emerald-50 border border-emerald-200 rounded-lg p-4 h-48",children:[e.jsxs("h3",{className:"font-semibold text-emerald-800 mb-2 flex items-center gap-2",children:[e.jsx(m,{variant:"outline",className:"bg-emerald-100 text-emerald-800",children:"9"}),"Revenue Streams"]}),e.jsx("div",{className:"space-y-1",children:s.revenueStreams.map((a,r)=>e.jsxs("div",{className:"text-sm text-emerald-700 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-500 mt-1",children:"•"}),e.jsx("span",{children:a})]},r))})]})]})]}),e.jsxs("div",{className:"mt-6 p-4 bg-muted/50 rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2 text-sm",children:"Lean Canvas Guide:"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-muted-foreground",children:[e.jsx("div",{children:"1. Problem - Key issues to solve"}),e.jsx("div",{children:"2. Solution - Your approach"}),e.jsx("div",{children:"3. UVP - Why you're different"}),e.jsx("div",{children:"4. Customers - Who will pay"}),e.jsx("div",{children:"5. Metrics - Success measures"}),e.jsx("div",{children:"6. Advantage - Hard to copy"}),e.jsx("div",{children:"7. Channels - How to reach customers"}),e.jsx("div",{children:"8. Costs - Key expenses"}),e.jsx("div",{children:"9. Revenue - Income sources"})]})]})]})]})}var $="Progress",A=100,[Ne,Oe]=te($),[ye,be]=Ne($),F=u.forwardRef((s,t)=>{const{__scopeProgress:n,value:a=null,max:r,getValueLabel:d=ke,...l}=s;(r||r===0)&&!R(r)&&console.error(Pe(`${r}`,"Progress"));const i=R(r)?r:A;a!==null&&!L(a,i)&&console.error(we(`${a}`,"Progress"));const o=L(a,i)?a:null,h=P(o)?d(o,i):void 0;return e.jsx(ye,{scope:n,value:o,max:i,children:e.jsx(G.div,{"aria-valuemax":i,"aria-valuemin":0,"aria-valuenow":P(o)?o:void 0,"aria-valuetext":h,role:"progressbar","data-state":B(o,i),"data-value":o??void 0,"data-max":i,...l,ref:t})})});F.displayName=$;var D="ProgressIndicator",J=u.forwardRef((s,t)=>{const{__scopeProgress:n,...a}=s,r=be(D,n);return e.jsx(G.div,{"data-state":B(r.value,r.max),"data-value":r.value??void 0,"data-max":r.max,...a,ref:t})});J.displayName=D;function ke(s,t){return`${Math.round(s/t*100)}%`}function B(s,t){return s==null?"indeterminate":s===t?"complete":"loading"}function P(s){return typeof s=="number"}function R(s){return P(s)&&!isNaN(s)&&s>0}function L(s,t){return P(s)&&!isNaN(s)&&s<=t&&s>=0}function Pe(s,t){return`Invalid prop \`max\` of value \`${s}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${A}\`.`}function we(s,t){return`Invalid prop \`value\` of value \`${s}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${A} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var q=F,Se=J;const H=u.forwardRef(({className:s,value:t,...n},a)=>e.jsx(q,{ref:a,className:O("relative h-4 w-full overflow-hidden rounded-full bg-secondary",s),...n,children:e.jsx(Se,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})}));H.displayName=q.displayName;function Ce({progress:s}){const t=l=>{switch(l){case"completed":return e.jsx(S,{className:"h-4 w-4 text-green-600"});case"in-progress":return e.jsx(C,{className:"h-4 w-4 animate-spin text-blue-600"});case"error":return e.jsx(U,{className:"h-4 w-4 text-red-600"});default:return e.jsx(ae,{className:"h-4 w-4 text-muted-foreground"})}},n=l=>{switch(l){case"completed":return e.jsx(m,{variant:"secondary",className:"bg-green-100 text-green-800",children:"Completed"});case"in-progress":return e.jsx(m,{variant:"secondary",className:"bg-blue-100 text-blue-800",children:"In Progress"});case"error":return e.jsx(m,{variant:"destructive",children:"Error"});default:return e.jsx(m,{variant:"outline",children:"Pending"})}},a=s.filter(l=>l.status==="completed").length,r=3,d=a/r*100;return e.jsxs(g,{children:[e.jsxs(j,{children:[e.jsxs(f,{className:"flex items-center gap-2",children:[e.jsx(V,{className:"h-5 w-5"}),"Research Progress"]}),e.jsx(k,{children:"AI agent is researching and analyzing your product concept"})]}),e.jsxs(N,{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Overall Progress"}),e.jsxs("span",{children:[a,"/",r," steps completed"]})]}),e.jsx(H,{value:d,className:"h-2"})]}),e.jsx("div",{className:"space-y-4",children:[{key:"analyze",title:"Product Analysis",description:"Understanding your product concept and market fit"},{key:"research",title:"Market Research",description:"Analyzing competitors, pricing, and opportunities"},{key:"canvas",title:"Canvas Generation",description:"Creating comprehensive lean canvas based on research"}].map(l=>{const i=s.find(h=>h.step===l.key),o=(i==null?void 0:i.status)||"pending";return e.jsxs("div",{className:"flex items-start gap-4 p-4 border rounded-lg",children:[e.jsx("div",{className:"flex-shrink-0 mt-1",children:t(o)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("h4",{className:"font-medium text-sm",children:l.title}),n(o)]}),e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:l.description}),(i==null?void 0:i.details)&&e.jsx("p",{className:"text-xs text-foreground bg-muted/50 rounded px-2 py-1",children:i.details})]})]},l.key)})}),s.some(l=>l.status==="in-progress")&&e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx(C,{className:"h-4 w-4 animate-spin text-blue-600"}),e.jsx("span",{className:"text-sm text-blue-800",children:"AI agent is actively researching your product..."})]})]})]})}function $e({apiKey:s,onApiKeyChange:t,isConfigured:n}){const[a,r]=u.useState(!1);return e.jsxs(g,{className:n?"border-green-200 bg-green-50/50":"",children:[e.jsxs(j,{children:[e.jsxs(f,{className:"flex items-center gap-2",children:[e.jsx(xe,{className:"h-5 w-5"}),"Gemini API Configuration",n&&e.jsx(S,{className:"h-4 w-4 text-green-600"})]}),e.jsx(k,{children:"Configure your Google Gemini API key to enable AI-powered research and canvas generation."})]}),e.jsxs(N,{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(K,{type:a?"text":"password",placeholder:"Enter your Gemini API key (AIza...)",value:s,onChange:d=>t(d.target.value),className:"pr-10"}),e.jsx(v,{type:"button",variant:"ghost",size:"sm",className:"absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0",onClick:()=>r(!a),children:a?e.jsx(de,{className:"h-3 w-3"}):e.jsx(ue,{className:"h-3 w-3"})})]}),n&&e.jsxs(m,{variant:"secondary",className:"self-center",children:[e.jsx(S,{className:"h-3 w-3 mr-1"}),"Connected"]})]}),e.jsx(T,{children:e.jsx(z,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm",children:"Your API key is stored locally in your browser and never sent to our servers. It's only used to make direct requests to Google's Gemini API."}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm",children:"Need an API key?"}),e.jsxs(v,{variant:"link",size:"sm",className:"h-auto p-0 text-sm",onClick:()=>window.open("https://aistudio.google.com/app/apikey","_blank"),children:["Get one free from Google AI Studio",e.jsx(ne,{className:"h-3 w-3 ml-1"})]})]})]})})}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"text-center p-3 border rounded-lg",children:[e.jsx("div",{className:"text-sm font-medium",children:"Free Tier"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"15 requests/minute"})]}),e.jsxs("div",{className:"text-center p-3 border rounded-lg",children:[e.jsx("div",{className:"text-sm font-medium",children:"Advanced Model"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Gemini 1.5 Pro"})]}),e.jsxs("div",{className:"text-center p-3 border rounded-lg",children:[e.jsx("div",{className:"text-sm font-medium",children:"Web Research"}),e.jsx("div",{className:"text-xs text-muted-foreground",children:"Real-time analysis"})]})]})]})]})}function Ae(){const[s,t]=u.useState(""),[n,a]=u.useState(""),[r,d]=u.useState(!1),[l,i]=u.useState([]),[o,h]=u.useState(null),[w,I]=u.useState(null),[M,y]=u.useState(null),W=u.useCallback(c=>{i(c)},[]),E=async()=>{if(!s.trim()){y("Please enter your Gemini API key");return}if(!n.trim()){y("Please enter a product name or business idea");return}y(null),d(!0),i([]),h(null),I(null);try{const c=new fe({apiKey:s.trim(),model:"gemini-1.5-pro",temperature:.7,maxTokens:4e3});c.setProgressCallback(W);const{research:x,canvas:X}=await c.generateFullLeanCanvas(n.trim());h(x),I(X)}catch(c){y(c instanceof Error?c.message:"An error occurred during generation")}finally{d(!1)}},Y=c=>{c.key==="Enter"&&!r&&E()};return e.jsxs("div",{className:"space-y-8",children:[e.jsx($e,{apiKey:s,onApiKeyChange:t,isConfigured:!!s.trim()}),e.jsxs(g,{children:[e.jsxs(j,{children:[e.jsxs(f,{className:"flex items-center gap-2",children:[e.jsx(V,{className:"h-5 w-5"}),"Product Research & Canvas Generation"]}),e.jsx(k,{children:"Enter any product name or business idea. Our AI agent will research the market, analyze competitors, and generate a comprehensive lean canvas."})]}),e.jsxs(N,{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(K,{placeholder:"e.g., 'Notion for developers', 'AI-powered fitness app', 'Sustainable packaging startup'...",value:n,onChange:c=>a(c.target.value),onKeyPress:Y,disabled:r,className:"flex-1"}),e.jsx(v,{onClick:E,disabled:r||!s.trim()||!n.trim(),className:"min-w-[120px]",children:r?e.jsxs(e.Fragment,{children:[e.jsx(C,{className:"h-4 w-4 animate-spin mr-2"}),"Researching..."]}):e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"h-4 w-4 mr-2"}),"Generate Canvas"]})})]}),M&&e.jsxs(T,{variant:"destructive",children:[e.jsx(U,{className:"h-4 w-4"}),e.jsx(z,{children:M})]}),e.jsxs("div",{className:"pt-2",children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"Try these examples:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:["AI-powered meal planning app","Remote work collaboration tool","Sustainable fashion marketplace","Developer productivity platform","Mental health support chatbot"].map(c=>e.jsx(m,{variant:"secondary",className:"cursor-pointer hover:bg-secondary/80",onClick:()=>!r&&a(c),children:c},c))})]})]})]}),l.length>0&&e.jsx(Ce,{progress:l}),(o||w)&&e.jsxs("div",{className:"grid gap-8",children:[o&&e.jsxs(g,{children:[e.jsxs(j,{children:[e.jsx(f,{children:"Market Research Results"}),e.jsxs(k,{children:["Comprehensive analysis of ",o.productName]})]}),e.jsx(N,{children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Industry & Market"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:o.industry}),e.jsx("p",{className:"text-sm",children:o.marketSize})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Target Market"}),e.jsx("p",{className:"text-sm",children:o.targetMarket})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Pricing Model"}),e.jsx("p",{className:"text-sm",children:o.pricingModel})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Key Competitors"}),e.jsx("div",{className:"flex flex-wrap gap-1",children:o.competitors.map((c,x)=>e.jsx(m,{variant:"outline",children:c},x))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Key Features"}),e.jsx("ul",{className:"text-sm space-y-1",children:o.keyFeatures.map((c,x)=>e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-muted-foreground",children:"•"}),c]},x))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium mb-2",children:"Market Opportunities"}),e.jsx("ul",{className:"text-sm space-y-1",children:o.opportunities.map((c,x)=>e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500",children:"+"}),c]},x))})]})]})]})})]}),w&&e.jsx(ve,{canvas:w})]})]})}const Ge=function(){return e.jsx("div",{className:"container mx-auto py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"AI-Powered Lean Canvas Generator"}),e.jsx("p",{className:"text-muted-foreground text-lg",children:"Research any product or business idea and automatically generate a comprehensive lean canvas using AI-powered web research."})]}),e.jsx(Ae,{})]})})};export{Ge as component};
