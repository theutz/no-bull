import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";

const Subtitle = styled.h3.attrs({
  className: ({ className, size, spaced }) =>
    classNames(
      "subtitle",
      {
        "is-1": size === 1,
        "is-2": size === 2,
        "is-3": size === 3,
        "is-4": size === 4,
        "is-5": size === 5,
        "is-6": size === 6
      },
      {
        "is-spaced": spaced
      },
      className
    )
})``;

Subtitle.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  spaced: PropTypes.bool
};

export default Subtitle;
