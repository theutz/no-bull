import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";

const Columns = styled.div.attrs({
  className: ({ className, multiline }) =>
    classNames("columns", { "is-multiline": multiline }, className)
})``;

Columns.propTypes = {
  multiline: PropTypes.bool
};

Columns.defaultProps = {
  multiline: false
};

export default Columns;
