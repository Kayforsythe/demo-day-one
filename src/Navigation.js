import { html } from 'lit-html';
import { capitalize } from 'lodash';

function buildLink(link) {
        var href = '';

        if(link !== 'Home'){
                href = link;
        }

return html `
<li>
        <a href="/${href}" data-navigo>
        ${capitalize(link)}
        </a>
</li>
`;
}


export default function Navigation(state){
return `
<div id="navigation">
 <ul class = "container">
    ${state[state.active].links.map(buildLink).join('')}
    
 </ul>
</div>  
`;
}