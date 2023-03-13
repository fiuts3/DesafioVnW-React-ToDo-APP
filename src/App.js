
import React, {Component} from "react";
import styled from "styled-components";
document.body.style.backgroundColor = "Black";

const Title = styled.h1`
  color: Black;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-arround;
`;

const Contador = styled.section`
  background-image: url("https://www.seekpng.com/png/detail/736-7368080_espiral-caderno-png.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 20%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: Grey;
  justify-content: space-evenly;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 5vw;
  height: 4vh;
  color: white;
  font-size: 1rem;
  background-color: Green;
  border-radius: 5%;
`;
const Button2 = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10%;
  width: 2vw;
  height: 3vh;
  color: white;
  font-size: 1rem;
  background-color: red;
  border-radius: 20%;
`;
const Lista = styled.li`
  color: black;
  font-size: 1.3rem;

 
`;


class App extends Component{

  state = {
    tarefa: "", 
    lista: []
  };



  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value 
    });
  };

  adicionar = () => {
    

    if(this.state.tarefa === ""){
      return
    } 


    this.setState({
        

      lista: this.state.lista.concat({
        tarefa:this.state.tarefa, 
        id: Math.random() 
      }),
      tarefa :""     
    });
  };
 


apagar = (id) => {
  this.setState({
    lista: this.state.lista.filter((item) => {
      return item.id !== id; 
    })
  });
};

  render(){
    return(
      <Contador>
        <Title>Desafio ToDO App</Title>
        
        <input value={this.state.tarefa} onChange={this.handleChange}/>

        <Button onClick={this.adicionar}> Add </Button>

        <ul>{this.state.lista.map((item) =>(
          <Lista>{item.tarefa}
           <Button2 onClick={() =>{
              this.apagar(item.id);
           }}
           > 
           X 
           </Button2> </Lista> 
        ))}
        </ul>
      </Contador>
    );
  }

}

export default App;
