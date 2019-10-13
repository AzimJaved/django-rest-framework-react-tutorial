import React, { Component } from 'react';

// const list = [
//   {
//     id: 1,
//     title: '1st Item',
//     description: 'Description here.'
//   },
//   {
//     id: 2,
//     title: '2nd Item',
//     description: 'Another description here.'
//   },
//   {
//     id: 3,
//     title: '3rd Item',
//     description: 'Third description here.'
//   }
// ];

class App extends Component {
  state = {
    list : []
  }
  constructor(props) {
    super(props);
    // this.state = { list };
  }

  componentDidMount(){
    const axios = require('axios');
    axios.get('http://localhost:8000/api/').then((response)=>{
      console.log("HAAAAA")
      console.log(response.data)
      this.setState({list : response.data})
    }).catch((error) =>{
      console.log(error)
    })
    // const request = new XMLHttpRequest()
    // request.onreadystatechange = () =>{
    //   if(this.readyState ==4 && this.status==200){
    //     this.setState({list: request.response})
    //   }
    // }
    // request.open('GET', 'localhost:8000/api/', true)
    // request.responseType='json'
    // request.send();
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
