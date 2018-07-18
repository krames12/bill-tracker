import React from 'react'
import {
  Trash2,
  Square,
  CheckSquare,
  MoreVertical,
} from 'react-feather'


class Bill extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="bill-item">
        <p
          className="icon"
          onClick={() => this.props.deleteHandler(this.props.id)}
        >
          <Trash2 />
        </p>
        <p className={`bill-name ${this.props.completed?'paid-bill':''}`}>
        {this.props.name}</p>
        <p className={`bill-cost ${this.props.completed?'paid-bill':''}`}>${this.props.cost}</p>
        <div className="completed-container">
          <input
            type="checkbox"
            id={`bill-${this.props.id}`}
            className="completed-input"
            checked={this.props.completed ? 'checked' : ''}
            onChange={
              () => this.props.completeHandler({
                ...this.props
               })
            }
          />
          <label
            htmlFor={`bill-${this.props.id}`}
            className="completed-icon"
          >
            { this.props.completed ?
                <CheckSquare /> :
                <Square />
            }
          </label>
        </div>
      </div>
    )
  }
}

export default Bill