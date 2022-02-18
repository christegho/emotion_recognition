import React from 'react'

import Emoji from './Emoji'

const Header = ({ children }) => (
  <header className="my2">
    <h2 className="m0 h3">
      ~~~
    </h2>
    <h1 className="my1 h2">Emotion Detector</h1>
    <p className="m0">
      Detect your emotion.
    </p>
  </header>
)

export default Header
