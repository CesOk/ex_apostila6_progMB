import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class Jogo extends Component {
  timer = null

  state = {
    data: null
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      console.log("timer executando...")
      this.setState({data: new Date().toLocaleTimeString()})
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
        return (
          <div className="card">
            <div className="card-body">
              {/* .d-flex.align-items-center.border.rounded.mb-2 */}
              <div 
                className="d-flex justify-content-center border rounded mb-2"
                style={{height: '6rem', backgroundColor: 'rgba(197, 142, 32, 0.49)'}}>
                  <div 
                    className="d-flex align-items-center border rounded mb-2"
                    style={{height: '5rem', width:'4rem'}}>
                      <p className="w-75 ms-3 align-items-center fs-1">{this.props.numero1}</p>
                  </div>
                  <div 
                    className="d-flex align-items-center border rounded mb-2"
                    style={{height: '5rem', width:'4rem'}}>
                      <p className="w-75 ms-3 align-items-center fs-1">{this.props.operacao}</p>
                  </div>
                  <div 
                    className="d-flex align-items-center border rounded mb-2"
                    style={{height: '5rem', width:'4rem'}}>
                      <p className="w-75 ms-3 align-items-center fs-1">{this.props.numero2}</p>
                  </div>
              </div>
              
              <div>
                <p className="text-center">
                  {/* renderização condicional */}
                  {
                    this.props.latitude ?
                      `Coordenadas: ${this.props.latitude}, ${this.props.longitude}. Data: ${this.state.data}`
                    :
                    this.props.mensagemDeErro ?
                    `${this.props.mensagemDeErro}`
                    :
                    `Clique no botão para receber uma nova pergunta`  
                  }
                </p>
              </div>
              <div class="flex flex-wrap justify-content-center">
                <button 
                  className="btn btn-outline-primary w-50 mt-2"
                  onClick={this.props.obterOperacao}
                  style={{backgroundColor: 'rgba(155, 192, 140, 1)', color:'black'}}>
                  Próxima Pergunta
                </button>
                <button 
                  className="btn btn-outline-primary w-50 mt-2"
                  onClick={() => ReactDOM.unmountComponentAtNode(document.querySelector('#root'))}
                  style={{backgroundColor: 'rgba(224, 0, 0, 0.67)', color:'black'}}>
                  Encerrar Jogo
                </button>
              </div>
              <div class="d-flex flex-wrap justify-content-center">
                <button 
                  className="btn btn-outline-primary align-items-center w-30 mt-2"
                  // onClick={this.props.resposta1}
                  style={{backgroundColor: 'rgba(140, 179, 192, 1)', color:'black'}}>
                  {this.props.resposta1}
                </button>
                <button 
                  className="btn btn-outline-primary align-items-center w-30 mt-2"
                  // onClick={this.props.resposta2}
                  style={{backgroundColor: 'rgba(140, 179, 192, 1)', color:'black'}}>
                  {this.props.resposta2}
                </button>
                <button 
                  className="btn btn-outline-primary align-items-center w-30 mt-2"
                  // onClick={this.props.resposta3}
                  style={{backgroundColor: 'rgba(140, 179, 192, 1)', color:'black'}}>
                  {this.props.resposta3}
                </button>
              </div>
            </div>
          </div>
        )
  }
}

export default Jogo