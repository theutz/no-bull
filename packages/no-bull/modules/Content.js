import styled from "styled-components";
import classNames from "classnames";

const Content = styled.div.attrs({
  className: ({ className }) => classNames("content", {}, className)
})``;

Content.propTypes = {};

Content.defaultProps = {};

export default Content;
