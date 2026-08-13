import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Erro na aplicação:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: 'sans-serif', color: '#f5f5f5' }}>
          <h1>Algo deu errado.</h1>
          <p>Recarregue a página. Se o problema continuar, veja o console do navegador.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
