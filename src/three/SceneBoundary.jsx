import { Component } from 'react'

class SceneBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.warn('Cena 3D desativada por erro:', error)
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

export default SceneBoundary
