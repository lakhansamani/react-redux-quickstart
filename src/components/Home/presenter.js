import React, {Component} from 'react';
import {List} from '../List';
import {Loading} from '../Loading';

class Home extends Component{
  constructor(props){
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount(){
    if(this.needToFetch()){
      this.props.getData(0);
    }

    window.addEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }
  onScroll() {
    const {offset,limit} = this.props.list;
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
      if(this.needToFetch() && this.canFetch()){
        this.props.getData(offset);
      }
    }
  }

  needToFetch(){
    const {total, list, offset, limit, shouldFetch} = this.props.list;
    if(list.length === 0){
      return true;
    }

    if(total === list.length){
      return false;
    }
    if(list.length<12){
      return false;
    }
    if(offset > total){
      return false;
    }
    return true;
  }
  canFetch(){
    const {loading} = this.props.list;
    if(loading){
      return false;
    }
    return true;
  }
  render(){
    const { list, loading, err, limit, offset } = this.props.list;
		if(err){
			return(
				<div><h1>{err}</h1></div>
			);
		}
    return(
      <div>
        <List list={list} />
        <Loading isLoading={loading} />
      </div>
    );
  }
}
export default Home;
