import './App.css';
import React from 'react';
import axios from 'axios';
const URL = "https://api.flickr.com/services/rest?method=flickr.photos.search&user_id=8588867@N03&format=json&nojsoncallback=1&api_key=e2a8cdf1a07cb3632a92f022e1db5a77&extras=url_sq,url_q,url_m,url_l,url_h&tags=eugenioiglesiasdotcom";

const divStyle = {
    color:'white'
};

export default class Photos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    var _this = this;
    axios.get(URL)
    .then(function(res){
      _this.setState({
        photos: res.data.photos.photo
      });
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }

  render() {
    const renderItems = this.state.photos.map(function(photo, i) {
      return <img key={photo.id} src={photo.url_q} alt={photo.title} width={photo.width_q} height={photo.height_q} />;
    });
  
    return (
      <div style={divStyle}>
        {renderItems}
      </div>
    );
  }

}
