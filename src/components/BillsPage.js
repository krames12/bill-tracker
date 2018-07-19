import React, { Component } from 'react'

import BillContainer from './BillContainer'
import BillEdit from './BillEdit'
import BillsProvider from './BillsContext'

export default () =>
  <div id="container">
    <BillsProvider>
      <BillContainer />
      <BillEdit />
    </BillsProvider>
  </div>