import{A as s}from"./UIcon.dad4679b.js";const g=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function m(e,...n){const a=Object.assign({},e);return Object.keys(a).forEach(o=>{n.includes(o)&&delete a[o]}),a}const t=e=>e,d=[t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Frameworks",slug:"framework"}),t({name:"Libraries",slug:"library"}),t({name:"Langauges",slug:"lang"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"test"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Markup & Style",slug:"markup-style"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft"})],r=e=>{const n=m(e,"category");return e.category&&(n.category=d.find(a=>a.slug===e.category)),n},c=[r({slug:"js",color:"yellow",description:"JavaScript",logo:s.JavaScript,name:"Javascript",category:"pro-lang"}),r({slug:"ts",color:"blue",description:"TypeScript",logo:s.TypeScript,name:"Typescript",category:"pro-lang"}),r({slug:"css",color:"blue",description:"CSS",logo:s.CSS,name:"CSS",category:"markup-style"}),r({slug:"html",color:"orange",description:"HTML",logo:s.HTML,name:"HTML",category:"markup-style"}),r({slug:"sass",color:"pink",description:"SASS",logo:s.Sass,name:"Sass",category:"markup-style"}),r({slug:"reactjs",color:"cyan",description:"React JS",logo:s.ReactJs,name:"React Js",category:"library"}),r({slug:"svelte",color:"orange",description:g,logo:s.Svelte,name:"Svelte",category:"library"})],y="Skills",h=(...e)=>c.filter(n=>e.includes(n.slug)),f=e=>{const n=[],a=[];return c.forEach(o=>{if(e.trim()&&!o.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!o.category){a.push(o);return}let i=n.find(u=>{var l;return u.category.slug===((l=o.category)==null?void 0:l.slug)});i||(i={items:[],category:o.category},n.push(i)),i.items.push(o)}),a.length!==0&&n.push({category:{name:"Others",slug:"others"},items:a}),n};export{f as a,h as g,c as i,y as t};
