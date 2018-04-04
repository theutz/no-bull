import React from 'react'
import { Title, Subtitle, Content, Column, Columns } from 'no-bull'

const TitlePage = () => {
  return (
    <div>
      <Title>Title</Title>
      <Subtitle>
        Simple <strong>headings</strong> to add depth to your page
      </Subtitle>
      <hr />
      <Columns>
        <Column>
          <Content>
            <p>There are two types of heading:</p>
            <ul>
              <li>
                <code>.title</code>
              </li>
              <li>
                <code>.subtitle</code>
              </li>
            </ul>
          </Content>
        </Column>
        <Column>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Column>
        <Column>
          <Content>
            <pre>{`
<Title>Title</Title>
<Subtitle>Subtitle</Subtitle>
          `}</pre>
          </Content>
        </Column>
      </Columns>
      <hr />
    </div>
  )
}

export default TitlePage
