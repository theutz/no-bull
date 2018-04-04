import React from 'react'
import { Title } from 'no-bull'

const MyTitle = Title.extend`
  color: red;
`

const IndexPage = () => (
  <div>
    <MyTitle>Hi people</MyTitle>
  </div>
)

export default IndexPage
