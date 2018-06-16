import React from 'react'

export default (data) => (
  <div className="bill-item">
    <p className="bill-name">{data.name}</p>
    <p className="bill-cost">${data.cost.toFixed(2)}</p>
    <input
      type="checkbox"
      checked={data.completed ? 'checked' : ''}
    />
  </div>
)