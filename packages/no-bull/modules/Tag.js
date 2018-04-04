import styled from "styled-components";
import classNames from "classnames";

const Tag = styled.span.attrs({
  className: ({ className, primary, success }) =>
    classNames(
      "tag",
      { "is-primary": primary, "is-success": success },
      className
    )
})``;

export default Tag;
