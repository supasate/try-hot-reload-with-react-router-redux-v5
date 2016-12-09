import React from 'react'
import Counter from './Counter'
import Hello from './Hello'
import { BrowserRouter, Match } from 'react-router'

const App = () => (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={Counter} />
      <Match pattern="/hello" component={Hello} />
    </div>
  </BrowserRouter>
)

export default App
