import { html } from 'lit-html';

export default function CreativeContent(state) {
    return html `
    
    <div id="navigation">
    <section class = "poemOne">
    <div class="pages">            
    <ul>
    <li> <a href="../">There's no place like home</a>
            <li>
            <a href="././Editorial/">Editorial Services</a>  
            </li>
            </ul>
        </div>
        </div>
        
        <div id="header"></div>
        </section>
        
<section class="poemTwo">

<div id="content"></div>

</section>

<div id="footer"></div>
`;
}