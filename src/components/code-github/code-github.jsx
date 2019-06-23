import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Look at my code, on Github</p>
                <Card>
                  <CardHeader
                    subtitle="Github Profile"
                    title="https://github.com/aliGIThaider"
                    avatar="github.png"
                  />
                <CardText>
                        This Portfolio is made with React and Material UI. Check out my other Projects..
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/aliGIThaider" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
