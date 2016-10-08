import React, {Component} from 'react';
import List from '../List';
class Home extends Component{
  render(){
    return(
      <div>
        <List lazyLoad={true} />
      </div>
    );
  }
}
export default Home;
