import React from 'react'
import styled from 'styled-components'
import { Title, Subtitle, Content, Column, Columns, Tag } from 'no-bull'

const TitleP = Title.withComponent('p')
const SubtitleP = Subtitle.withComponent('p')
const Pre = styled.pre`
  white-space: pre-wrap;
`
const Code = ({ children, ...props }) => (
  <code {...props}>{String.prototype.trim.call(children)}</code>
)

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
                <code>{`<Title/>`}</code>
              </li>
              <li>
                <code>{`<Subtitle/>`}</code>
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
            <Pre>
              <Code className="language-jsx">
                {`
<Title>Title</Title>
<Subtitle>Subtitle</Subtitle>
`}
              </Code>
            </Pre>
          </Content>
        </Column>
      </Columns>
      <hr />
      <Title size={4} spaced>
        Sizes
      </Title>
      <Columns>
        <Column>
          <p>
            There are <strong>6 sizes</strong> available:
          </p>
        </Column>
        <Column>
          <TitleP size={1}>Title 1</TitleP>
          <TitleP size={2}>Title 2</TitleP>
          <TitleP size={3}>Title 3 (default size)</TitleP>
          <TitleP size={4}>Title 4</TitleP>
          <TitleP size={5}>Title 5</TitleP>
          <TitleP size={6}>Title 6</TitleP>
        </Column>
        <Column>
          <Pre>
            <Code>
              {`
<Title size={1}>Title 1</Title>
<Title size={2}>Title 2</Title>
<Title size={3}>Title 3</Title>
<Title size={4}>Title 4</Title>
<Title size={5}>Title 5</Title>
<Title size={6}>Title 6</Title>
`}
            </Code>
          </Pre>
        </Column>
      </Columns>
      <Columns>
        <Column />
        <Column>
          <SubtitleP size={1}>Subtitle 1</SubtitleP>
          <SubtitleP size={2}>Subtitle 2</SubtitleP>
          <SubtitleP size={3}>Subtitle 3</SubtitleP>
          <SubtitleP size={4}>Subtitle 4</SubtitleP>
          <SubtitleP size={5}>Subtitle 5 (default size)</SubtitleP>
          <SubtitleP size={6}>Subtitle 6</SubtitleP>
        </Column>
        <Column>
          <Pre>
            <Code>
              {`
<Subtitle size={1}>Subtitle 1</Subtitle>
<Subtitle size={2}>Subtitle 2</Subtitle>
<Subtitle size={3}>Subtitle 3</Subtitle>
<Subtitle size={4}>Subtitle 4</Subtitle>
<Subtitle size={5}>Subtitle 5</Subtitle>
<Subtitle size={6}>Subtitle 6</Subtitle>
`}
            </Code>
          </Pre>
        </Column>
      </Columns>
      <hr />
      <Columns>
        <Column>
          <Content>
            <p>
              When you <strong>combine</strong> a title and a subtitle, they
              move closer together.
            </p>
            <p>
              As a rule of thumb, it is recommended to use a size difference of{' '}
              <strong>two</strong>. So if you use a{' '}
              <code>{`<Title size={1}/>`}</code>, combine it with a{' '}
              <code>{`<Subtitle size={3}/>`}</code>.
            </p>
          </Content>
        </Column>
        <Column>
          <div className="block">
            <TitleP size={1}>Title 1</TitleP>
            <SubtitleP size={3}>Subtitle 3</SubtitleP>
          </div>
          <div className="block">
            <TitleP size={2}>Title 2</TitleP>
            <SubtitleP size={4}>Subtitle 4</SubtitleP>
          </div>
          <div className="block">
            <TitleP size={3}>Title 3</TitleP>
            <SubtitleP size={5}>Subtitle 5</SubtitleP>
          </div>
        </Column>
        <Column>
          <Pre>
            <Code>
              {`
<Title size={1}>Title 1</Title>
<Subtitle size={3}>Subtitle 3</Subtitle>

<Title size={2}>Title 2</Title>
<Subtitle size={4}>Subtitle 4</Subtitle>

<Title size={3}>Title 3</Title>
<Subtitle size={5}>Subtitle 5</Subtitle>
`}
            </Code>
          </Pre>
        </Column>
      </Columns>
      <hr />
      <Columns>
        <Column>
          <Content>
            <p>
              <Tag success>New!</Tag>
            </p>
            <p>
              You can maintain the normal spacing between titles and subtitles
              if you use the <code>spaced</code> prop on the first element.
            </p>
          </Content>
        </Column>
        <Column>
          <div className="block">
            <TitleP size={1} spaced>
              Title 1
            </TitleP>
            <SubtitleP size={3}>Subtitle 3</SubtitleP>
          </div>
          <div className="block">
            <TitleP size={2} spaced>
              Title 2
            </TitleP>
            <SubtitleP size={4}>Subtitle 4</SubtitleP>
          </div>
          <div className="block">
            <TitleP size={3} spaced>
              Title 3
            </TitleP>
            <SubtitleP size={5}>Subtitle 5</SubtitleP>
          </div>
        </Column>
        <Column>
          <Pre>
            <Code>
              {`
<Title size={1} spaced>Title 1</Title>
<Subtitle size={3}>Subtitle 3</Subtitle>

<Title size={2} spaced>Title 2</Title>
<Subtitle size={4}>Subtitle 4</Subtitle>

<Title size={3} spaced>Title 3</Title>
<Subtitle size={5}>Subtitle 5</Subtitle>
`}
            </Code>
          </Pre>
        </Column>
      </Columns>
    </div>
  )
}

export default TitlePage
