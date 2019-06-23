import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
              Android is the kind of runaway smash hit that techies spend their careers dreaming about. 

              </span>
              <span className="quote-author">- Daniel Lyons</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
