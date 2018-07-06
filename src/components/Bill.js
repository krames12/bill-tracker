import React from 'react'


class Bill extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 'completed': this.props.completed }
  }

  toggleComplete = () => {
    this.setState({ 'completed': !this.state.completed })
  }

  render() {
    return (
      <div className="bill-item">
        <p className="bill-name">{this.props.name}</p>
        <p className="bill-cost">${this.props.cost}</p>
        <input
          type="checkbox"
          checked={this.state.completed ? 'checked' : ''}
          onChange={this.toggleComplete}
        />
      </div>
    )
  }
}

export default Bill