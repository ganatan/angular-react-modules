import React from 'react';

class Channel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const imagesrc = require('../../../../assets/params/images/channels/' + this.props.name + '.jpg');

    return (
      <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="nga-card-component p-2 mb-2 text-center">
          <img src={imagesrc} className="img-thumbnail" alt="name" />
          <div className="card-body">
            <p className="card-text">{this.props.releaseDate}</p>
            <button type="button" className="btn btn-primary btn-sm">n° 2</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Channel;
