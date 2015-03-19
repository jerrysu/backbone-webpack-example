import React from 'React';

var README = require('readme.md');

require('./styles/Demo.scss');

var Demo = React.createClass({
  getInitialState() {
    return {
      showReadme: false
    };
  },

  toggleReadme(event) {
    event.preventDefault();
    this.setState({showReadme: !this.state.showReadme});
  },
  render() {
    var readme = null;
    if (this.state.showReadme) {
      readme = <div dangerouslySetInnerHTML={{__html: README}} />;
    }

    return (
      <div className="Demo">
        <button className="Demo-button" onClick={this.toggleReadme}>
          {this.state.showReadme ? 'Hide README' : 'Show README'}
        </button>
        {readme}
      </div>
    );
  }
});

export default Demo;
