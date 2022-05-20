import React from 'react';
import brandon from '../images/brandon.png';
import Figure from 'react-bootstrap/Figure';
import headerTeam from '../images/header-team.png';
import wenhao from '../images/wenhao.png';
import david from '../images/david.png';
import arthur from '../images/arthur.png';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <div
          className="columns is-centered"
          style={{ width: '60%', height: '250px', margin: 'auto' }}
        >
          <Figure.Image
            width="100%"
            max-height="100px"
            src={headerTeam}
            alt="product-header"
          />
        </div>

        <br></br>
        <div
          className="columns is-fluid is-size-4"
          style={{ width: '70%', margin: 'auto' }}
        >
          <div className="column is-half">
            <div
              className="card is-half ml-2"
              style={{ height: '600px', overflow: 'auto' }}
            >
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <Figure.Image
                      width={300}
                      height={250}
                      src={wenhao}
                      alt="wenhaoImage"
                    />
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Wenhao Piao</p>
                    <p className="subtitle is-6">
                      <a href="https://www.linkedin.com/in/wenhaopiao/">
                        https://www.linkedin.com/in/wenhaopiao/
                      </a>
                    </p>
                  </div>
                </div>

                <div className="content">
                  <ul>
                    <li>SDE @ AWS</li>
                    <li>Army Veteran</li>
                    <li>Interested in AI, ML</li>
                    <li>Passionate about new technologies</li>
                    <li>Like hiking, biking</li>
                  </ul>
                  <br></br>
                </div>
              </div>
            </div>

            <br></br>

            <div
              className="card is-half ml-2"
              style={{ height: '600px', overflow: 'auto' }}
            >
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <Figure.Image
                      width={300}
                      height={250}
                      src={david}
                      alt="davidImage"
                    />
                  </div>
                  <div className="media-content">
                    <p className="title is-4">David Waiganjo</p>
                    <p className="subtitle is-6">
                      <a href="https://www.linkedin.com/in/david-waiganjo-8185aa80/">
                        https://www.linkedin.com/in/david-waiganjo-8185aa80/
                      </a>
                    </p>
                  </div>
                </div>

                <div className="content">
                  <ul>
                    <li>Software Developer</li>
                    <li>Lakewood, WA - Kenya</li>
                    <li>US Air Force Veteran</li>
                    <li>Background in Geospatial Science, Radiology</li>
                    <li>Interested in Geospatial Software Development</li>
                  </ul>
                  <br></br>
                </div>
              </div>
            </div>
          </div>

          <div className="column is-half">
            <div
              className="card is-half ml-2"
              style={{ height: '600px', overflow: 'auto' }}
            >
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <Figure.Image
                      width={300}
                      height={250}
                      src={arthur}
                      alt="arthurImage"
                    />
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Arthur Lozano Jr</p>
                    <p className="subtitle is-6">
                      <a href="https://www.linkedin.com/in/arthur-lozano/">
                        https://www.linkedin.com/in/arthur-lozano/
                      </a>
                    </p>
                  </div>
                </div>

                <div className="content">
                  <ul>
                    <li>US Air Force Veteran</li>
                    <li>Software/Data engineer@Pagerduty</li>
                    <li>Currently living in Seattle</li>
                    <li>Excited for my journey ahead in tech</li>
                  </ul>
                  <br></br>
                </div>
              </div>
            </div>

            <br></br>

            <div
              className="card is-half ml-2"
              style={{ height: '600px', overflow: 'auto' }}
            >
              <div className="card-image"></div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <Figure.Image
                      width={300}
                      height={250}
                      src={brandon}
                      alt="brandonImage"
                    />
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Brandon Mizutani</p>
                    <p className="subtitle is-6">
                      <a href="https://www.linkedin.com/in/brandon-mizutani-273757213/">
                        https://www.linkedin.com/in/brandon-mizutani-273757213/
                      </a>
                    </p>
                  </div>
                </div>

                <div className="content has-text-justified">
                  <ul>
                    <li>Software Developer</li>
                    <li>Post Production</li>
                    <li>Prior Experience to Coding</li>
                    <li>Ultimate Goal at Code Fellows</li>
                  </ul>
                  <br></br>
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
