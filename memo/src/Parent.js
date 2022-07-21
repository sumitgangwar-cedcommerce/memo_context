import React, { Component } from 'react'
import Child from './Child';

export class Parent extends Component {
    state = {
        name:'Parent'
      }
    
      componentDidMount() {
        setInterval(()=>{
          this.setState({name:'Parent'})
        },1000)
      }
    
      render() {
        return (
          <div>
            {console.log(this.state.name)}
            <Child />
          </div>
        );
      }
}

export default Parent