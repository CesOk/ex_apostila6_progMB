import 'bootstrap/dist/css/bootstrap.min.css'
import "primereact/resources/primereact.min.css";
import React from 'react'
import ReactDOM from 'react-dom'

import {Jogo} from './Jogo'

class App extends React.Component{
    // Math.floor(Math.random() * (4 - 0 + 1)) + 0
    state = {
        numero1: null,
        operacao: null,
        numero2: null,
        numOp: null
    }

    componentDidMount(){
        // this.obterNumero()
        // this.obterSinal()
        this.obterOperacao()
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount")
    }

    obterOperacao = () => { 
        let num1 = Math.floor(Math.random() * (99 - 0 + 1)) + 0
        let num2 = Math.floor(Math.random() * (99 - 0 + 1)) + 0
        let numOp = Math.floor(Math.random() * (4 - 0 + 1)) + 0
        let resp2 = Math.floor(Math.random() * (99 - 0 + 1)) + 0
        let resp3 = Math.floor(Math.random() * (99 - 0 + 1)) + 0


        if (numOp===0){
            console.log(num2)
            return this.setState({numero1: num1, numero2: num2, operacao: '+', numOp: 1, resposta1: (num1)+(num2), resposta2: resp2, resposta3: resp3})
        }
        if (numOp===1){
            console.log(num2)
            return this.setState({numero1: num1, numero2: num2, operacao: '-', numOp: 2, resposta2: (num1)-(num2), resposta1: resp2, resposta3: resp3})
        }
        if (numOp===2){
            console.log(num2)
            return this.setState({numero1: num1, numero2: num2, operacao: '*', numOp: 3, resposta3: (num1)*(num2), resposta2: resp2, resposta1: resp3})
        }
        if (numOp===3){
            console.log(num2)
            return this.setState({numero1: num1, numero2: num2, operacao: '/', numOp: 4, resposta1: (num1)/(num2), resposta2: resp2, resposta3: resp3})
        }
    }

    // obterResposta = () => {
    //     let operacao = this.state.numOp
    //     let resp1 = null
    //     let resp2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0
    //     let resp3 = Math.floor(Math.random() * (100 - 0 + 1)) + 0
        
    //     if(operacao===1)
    //         return this.setState({resposta1: this.state.numero1+this.state.numero2, resposta2: resp2, resposta3: resp3})
    //     if(operacao===2)
    //         return this.setState({resposta2: this.state.numero1-this.state.numero2, resposta1: resp2, resposta3: resp3})
    //     if(operacao===3)
    //         return this.setState({resposta3: this.state.numero1*this.state.numero2,
    //         resposta2: resp2, resposta1: resp3})
    //     if(operacao===4)
    //         return this.setState({resposta1: this.state.numero1%this.state.numero2,
    //         resposta2: resp2, resposta3: resp3})
    // }

    render(){
        return <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">{
                    <Jogo
                        numero1={this.state.numero1}
                        operacao={this.state.operacao}
                        numero2={this.state.numero2}
                        // obterSinal={this.obterSinal}
                        // obterNumero={this.obterNumero}
                        resposta1={this.state.resposta1}
                        resposta2={this.state.resposta2}
                        resposta3={this.state.resposta3}
                        obterOperacao={this.obterOperacao}
                    />
                }
                </div>
            </div>
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)