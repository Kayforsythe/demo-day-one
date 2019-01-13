import { html } from 'lit-html';


function buildLink(link) {
        var href = '';

        if(link !== 'Home'){
                href = link;
        }

return html `
<li>
        <a href="/${href}" data-navigo>
        ${(link.replace(/([A-Z])/g, ' $1'))}
        </a>
</li>
`;
}


export default function Navigation(state) {
return html`
<div id="navigation">
 <ul class = "container">
 <li>
${state[state.active].links.map(buildLink)} 
  </li>
 </ul>
 </div> 
 `;
}