import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";

const Column = styled.div.attrs({
  className: ({ className, narrow }) =>
    classNames("column", { "is-narrow": narrow }, className)
})``;

Column.propTypes = {
  narrow: PropTypes.bool
};

Column.defaultProps = {
  narrow: false
};

export default Column;
