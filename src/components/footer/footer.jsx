import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <a target="_blank" href="https://github.com/aliGIThaider">
            Github
          </a>
           /
          <a target="_blank" href="https://twitter.com/alee5386">
            Twitter
          </a>
           /
          <a target="_blank" href="https://www.facebook.com/ali.haider55">
            Facebook
          </a>
           /
          <a target="_blank" href="https://www.linkedin.com/in/ali-haider-53240b133/">
            LinkedIn
          </a>
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="Back to top" onClick={this.onScrollToTop}/>
      </div>
    );
  }
}

export default FooterComponent;
