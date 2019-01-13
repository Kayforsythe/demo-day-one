import { html } from 'lit-html';

export default function Editorial(state){
return html`

<section class="edit">

<img src="https://lh3.googleusercontent.com/yb5F5Jb1boFa013ZLSB-q3qg9GBg83g3291vrCT6hgerUn8EwivgP0U7ZdoBSoHpvCpFdIhY7eRwPREynWRPGM3nyUqDliV_sDOxwys0RFzzV1QCJqbw9c9IYnsySmy1eQqV7MNVjCPYLCd3kd9-ZP6B0SpaDO8bWPxuH43G1Liqaq6_n2st5VsFdkPhf0GEhVwCcDAfbSVB6QtIiWKbJAR54B6t0I6ZzUBdnPTSraH7z7J8jrAu-_iQ7B7LczwR5mi9dBToBwgo3hxSOvrWLjg336z6hl6OxsB2Dc3aM441nGjcOMnfKCnKENOC0KyS2iWl1NhQLe2t37KboEnK0KhU6Jt_KB1wVJj-RVbnqQ55VcZpiEAimNnmAGqfksLjKt7ln_A_xQrvtzzOshUgVcFoCymIXv-2CS-u_q28oKzdEuNqvEbs9MKT63PCsBo-3_EIC2DjqaeXRRK0GU2uBvuNskzfeisL-tYOpsvLcaAP8joGD2wokC6RQoW3-BGfWchbFXdfSNRP6vw7ybC4J1qUiNTzw9KnSVCduThq9lSrwWhLfCQGKlUJgdth9i52paZ9k9DQ1JSRxuW_OoY7V7qNMhp2HzhfQCOvbIFUtU2uzitkcaQcZRd7jGwLyXB9CPXEDkBokxYbusCETsVESmly3w=w461-h608-no" alt="editor">

      <p>In the space provided, upload your document 
          & leave me a little comment
          mentioning how you would like it reviewed. 
      </p>

      <form action="https://formspree.io/kaylarobideau@gmail.com" method="POST">
          <input type="text" name="firstname" placeholder="What's you're first name?" size="100" required>
          <input type="text" name="lastname" placeholder="How about your last name?" size="100" required>
          <input type="email" name="_replyto" placeholder="your.email@example.com" required>
          
          <textarea name="user_message" placeholder="What can I help you with?" rows="8" cols="40"></textarea>
          <label for="input_file_upload_id">Please upload what the document you would like me to help with</label>
          
          <input type="hidden" role="uploadcare-uploader" name="fileUpload" />

          <input type="submit" value="Send">
        </form>

</section>
`;

}