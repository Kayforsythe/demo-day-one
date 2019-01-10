import { html } from 'lit-html';

export default function(state){
    return html`
<div id = "footer">
    <ul>
    <li>
        <i class="fab fa-instagram">
            <a href="https://www.instagram.com/semianonymouspoet/?hl=en">Insta</a>
        </i>
    </li>
    <li>
        <i class="fas fa-at">
            <a href="">Email</a>
        </i>
    </li>
    <li>
        <i class="fab fa-twitter">
            <a href="">Twitter</a>
        </i>
    </li>
    <li>
        <i class="fas fa-bullseye">
            <a href="">Purchase Here</a>
        </i>

    </li>
</ul>
</div>
    `;
}