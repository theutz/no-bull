import React from 'react'
import { Title } from 'no-bull'

const MyTitle = Title.extend`
  color: red;
`

const IndexPage = () => (
  <div>
    <MyTitle size={6}>Hi people</MyTitle>
  </div>
)

export default IndexPage
