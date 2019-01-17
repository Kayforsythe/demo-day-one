import { html } from 'lit-html';

export default function(state){
    return html`
<div id = "footer">
    <ul>
    <li>
    Follow Me on 
        <i class="fab fa-instagram">
            <a href="https://www.instagram.com/semianonymouspoet/?hl=en" target="_blank">Instagram</a>
        </i>
    </li>
    <li>
    <a href="https://github.com/Kayforsythe/demo-day-one" target="_blank"><i class="fab fa-github"></i></a>
    </li>
 </ul>
</div>
    `;
}