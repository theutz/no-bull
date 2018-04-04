import styled from "styled-components";
import classNames from "classnames";

const Container = styled.div.attrs({
  className: ({ className }) => classNames("container", className)
})``;

export default Container;
