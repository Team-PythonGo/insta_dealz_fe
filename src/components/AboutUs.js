import React from 'react';
import brandon from '../images/brandon.png'
import Figure from 'react-bootstrap/Figure';
import headerTeam from '../images/header-team.png';


class AboutUs extends React.Component {
  

  render() {
    return(
      <>
      <div className="columns is-centered">
      <Figure.Image width="1300px"
        max-height="50%"
        src={headerTeam}
        alt="product-header"
      />
      </div>
      

      <br></br>
      <div className='container'>
      <div className='columns is-fluid is-size-4'>
        <div className='column is-half'>
      <div class="card is-half ml-2">
  <div class="card-image">
    <figure class="image">
      <img src="https://bulma.io/images/placeholders/100x100.png" alt="Placeholder"></img>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"></img>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Wenhao Piao</p>
        <p class="subtitle is-6"><a href="https://www.linkedin.com/in/wenhaopiao/">https://www.linkedin.com/in/wenhaopiao/</a></p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br></br>
      
    </div>
  </div>
</div>

<br></br>

<div class="card is-half ml-2">
  <div class="card-image">
    <figure class="image">
      <img src="https://bulma.io/images/placeholders/100x100.png" alt="Placeholder"></img>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image ">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"></img>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">David Waiganjo</p>
        <p class="subtitle is-6"><a href="https://www.linkedin.com/in/david-waiganjo-8185aa80/">https://www.linkedin.com/in/david-waiganjo-8185aa80/</a></p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br></br>
    </div>
  </div>
</div>


</div>

<div className="column is-half">
<div class="card is-half ml-0 mr-3">
  <div class="card-image">
    <figure class="image">
      <img src="https://bulma.io/images/placeholders/100x100.png" alt="Placeholder"></img>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image ">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder"></img>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Arthur Lozano Jr</p>
        <p class="subtitle is-6"><a href="https://www.linkedin.com/in/arthur-lozano/">https://www.linkedin.com/in/arthur-lozano/</a></p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br></br>
    </div>
  </div>
</div>

<br></br>

<div class="card is-half ml-0 mr-3">
  <div class="card-image">
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
          <Figure.Image width={300}
        height={250}
        src={brandon}
        alt="brandonImage"
      />

      </div>
      <div class="media-content">
        <p class="title is-3">Brandon Mizutani</p>
        <p class="subtitle is-5"><a href="https://www.linkedin.com/in/brandon-mizutani-273757213/">https://www.linkedin.com/in/brandon-mizutani-273757213/</a></p>
      </div>
    </div>

    <div class="content has-text-justified">
    <p>I am a student at Code Fellows. I recently moved from Los Angeles to Seattle, Washington. I went to school for and worked in T.V. post-production. I decided to change my career after having time to reflect what would challenge and motivate me. I had prior experience in HTML & CSS. While I did learn a few JavaScript functions in college, it has only been through Code Fellows that I have gained a greater understanding of it and so much more. Upon completing Code Fellows, I hope to attain a career as a software developer, working with like-minded individuals who have the same passion for coding.</p>
      <br></br>
    </div>
  </div>
</div>

</div>






</div>
</div>
      </>

    );
  }
}

export default AboutUs;