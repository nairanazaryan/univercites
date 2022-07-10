import  React,  { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      univers: []
    }
    this.myRef = React.createRef('')
  }
  findeUniverse = () => {
    fetch(`http://universities.hipolabs.com/search?country=${this.myRef.current.value}`)
    .then(data => data.json())
    // .then(res => console.log(res))
    .then(res => this.setState({
      univers: res
    }))
  }
  render(){
    return(
      <section>
        <input ref= {this.myRef}/>
        <button onClick={this.findeUniverse}>Finde univers</button>
        {
          <ul>
            {this.state.univers.map(univer =>{
              return <li key={Math.random()} className='item'>
                {univer.alpha_two_code}
                <br />
                {univer.country}
                <br />
                {univer.name}
                <br />
               {univer.web_pages}
              </li>
            })}
          </ul>
        }
      </section>
    )
  }
}

export default App