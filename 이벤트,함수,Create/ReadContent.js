import React, { Component } from 'react';

class Content extends Component{
    render(){
      console.log('App render');
      return (
        <article> 
          <h2>{this.props.title}</h2>
          {this.props.sub}
       </article>
      );
    }
  }

  export default Content;