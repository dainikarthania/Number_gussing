import React from 'react';
import random from 'random'

class App extends React.Component {
  state = {random_number:0,num:0,diff:0,message:'',win:0,maximum:0,err:``,color:"white",text:''}
 
  componentDidMount(){
    let maximum_num=100 * (this.state.win+1)
    let random_num=random.int(1,maximum_num)
    this.setState({random_number:random_num,message:`please enter number 1 to ${maximum_num}`,maximum:maximum_num})
  }
  
  checkNumber=(e)=>{
    e.preventDefault()
    let number= this.state.num
    let maximum_num=this.state.maximum
    let random_num=this.state.random_number
    let diff=Math.abs(random_num - number)
    console.log(random_num)
    console.log(diff)

    if(number > maximum_num) {this.setState({err:`please enter number between 1 to ${maximum_num}`})}
    else{
      {this.setState({err:``})}
      if(diff==0){
        this.setState({color:'green',text:`Corrent`})

        let win=this.state.win+1
        console.log("win",win)

        let maximum_num=100 * (win+1)
        console.log("maximum_num",maximum_num)

        let random_num=random.int(1,maximum_num)

        this.setState({random_number:random_num,message:`please enter number 1 to ${maximum_num}`,maximum:maximum_num,win:win})
      }
      else if(diff > 1 && diff < 4){
        this.setState({color:'red',text:`Hot`})
      }
      else if(diff > 5 && diff < 15){
        this.setState({color:'yellow',text:`Warm`})
      }
      else{
        this.setState({color:'Aqua',text:`Cold`})
      }

    }
  }

  render(){
      return (
        <div>
          <form onSubmit={this.checkNumber}>
          <input type="number" placeholder={this.state.message} style={{width:"100%"}} onChange={(e)=>{
            let value=e.target.value
            this.setState({num:value})
          }}/>
          </form>
          {this.state.err}
          <section style={{border:"5px solid black",width:"95%",height:"50px",backgroundColor:`${this.state.color}`,margin:"5px",textAlign:"center",paddingTop:'20px'}}>
            {this.state.text}
          </section>

        </div>
      )
    }
}

export default App;
