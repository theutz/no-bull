import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";

const Subtitle = styled.h3.attrs({
  className: ({ className, size }) => classNames("subtitle", {}, className)
})``;

Subtitle.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

export default Subtitle;
