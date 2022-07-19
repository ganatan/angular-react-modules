import React from 'react';

import './example-components.css';

import cinemax from '../../../../assets/params/images/channels/cinemax.jpg';
import Channel from './channel';

class ExampleBootstrap extends React.Component {
  render() {
    const channels =
      [
        { title: 'Disney Channel', name: 'disney-channel', releaseDate: '22/03/1997' },
        { title: 'FOX', name: 'fox', releaseDate: '09/10/1986' },
        { title: 'Discovery Channel', name: 'discovery-channel', releaseDate: '17/06/1985' },
        { title: 'HBO', name: 'hbo', releaseDate: '08/11/1972' },
        { title: 'History', name: 'history', releaseDate: '01/01/1995' },
        { title: 'Hulu', name: 'hulu', releaseDate: '29/03/2007' },
        { title: 'MTV', name: 'mtv', releaseDate: '01/08/1981' },
        { title: 'NBC', name: 'nbc', releaseDate: '01/07/1941' },
        { title: 'Netflix', name: 'netflix', releaseDate: '29/08/1997' },
        { title: 'Showtime', name: 'showtime', releaseDate: '09/05/1976' },
        { title: 'USA Nnetwork', name: 'usa-network', releaseDate: '22/09/1977' },
      ];

    function Item(props) {
      return <Channel releaseDate={props.channel.releaseDate} name={props["channel"].name}></Channel>;
    }


    return (

      <div className="container pt-5">
        <div className="row">
          <div className="text-center">
            <h1 className="h5">Components Features</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-4">
            <div className="row">
              <div className="nga-card-component text-center">
                <h5 className="card-title text-primary p-2">AMC</h5>
                <img src={cinemax} className="img-thumbnail" alt="channel.name" />
                <div className="card-body text-center mt-2">
                  <h6 className="card-subtitle mb-2 text-dark">01/03/1966</h6>
                  <button type="button" className="btn btn-info btn-sm">n° index Reset</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <div className="row">
              {channels.map((channel) => <Item key={channel.title} channel={channel} />)}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ExampleBootstrap;
