import React from 'react'
import { Trash2, Square, CheckSquare } from 'react-feather'


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
        <p
          className="icon"
          onClick={() => this.props.clickHandler(this.props.id)}
        >
          <Trash2 />
        </p>
        <p className={`bill-name ${this.state.completed?'paid-bill':''}`}>
        {this.props.name}</p>
        <p className={`bill-cost ${this.state.completed?'paid-bill':''}`}>${this.props.cost}</p>
        <input
          type="checkbox"
          id={`bill-${this.props.id}`}
          className="completed-input"
          checked={this.state.completed ? 'checked' : ''}
          onChange={this.toggleComplete}
        />
        <label
          for={`bill-${this.props.id}`}
          className="icon'"
        >
          { this.state.completed ?
              <CheckSquare /> :
              <Square />
          }
        </label>
      </div>
    )
  }
}

export default Bill