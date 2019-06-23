import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';
import { RadioButton } from 'material-ui';
import { ToggleRadioButtonChecked, ToggleRadioButtonUnchecked } from 'material-ui/svg-icons';


class DesignComponent extends Component {

    render() {
        return (
          <div className="design">
            <p className="headline">User Experience and Design</p>
            <p className="text-justify">
              Through my Love for CS i became part of Bahria University

              Ever since, I tried to make things right.

              Nowadays, with a user-centered mindset, I try to develop intuitive, mobile and content first applications.

            </p>

              <div className="design-checkbox">
                <Checkbox
                    checkedIcon={<ToggleRadioButtonChecked />}
                    uncheckedIcon={<ToggleRadioButtonUnchecked />}
                  iconStyle={{"fill":"#A80202"}}
                  label="UX-Consulting"
                />
              </div>
              <div className="design-checkbox">
              <Checkbox
                 checkedIcon={<ToggleRadioButtonChecked />}
                 uncheckedIcon={<ToggleRadioButtonUnchecked />}
                iconStyle={{"fill":"#A80202"}}
                label="Adobe Photoshop"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                  checkedIcon={<ToggleRadioButtonChecked />}
                  uncheckedIcon={<ToggleRadioButtonUnchecked />}
                iconStyle={{"fill":"#A80202"}}
                label="C# Desktop Native"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                  checkedIcon={<ToggleRadioButtonChecked />}
                  uncheckedIcon={<ToggleRadioButtonUnchecked />}
                iconStyle={{"fill":"#A80202"}}
                label="Android Native"
              />
          </div>
          <div className="design-checkbox">
            <Checkbox
             checkedIcon={<ToggleRadioButtonChecked />}
             uncheckedIcon={<ToggleRadioButtonUnchecked />}
              iconStyle={{"fill":"#A80202"}}
              label="UI-UX"
            />
        </div>

          </div>
        );
    }
}

export default DesignComponent;
