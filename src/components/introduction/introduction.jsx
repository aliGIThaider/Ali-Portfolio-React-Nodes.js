import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar1.JPG" size={195}/>
            <p className="introduction-text">
              Android, UI/UX Developer.
              Professional App Developer
              Love DIY projects, currently living in Karachi, Pakistan.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
