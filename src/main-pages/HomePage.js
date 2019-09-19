import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = props => {
  return <div>
    <Link to='/create'><button>Create Ads</button></Link>
  </div>
}

export default HomePage