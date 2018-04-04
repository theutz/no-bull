import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";

const Title = styled.h2.attrs({
  className: ({ className, size }) =>
    classNames(
      "title",
      {
        "is-1": size === 1,
        "is-2": size === 2,
        "is-3": size === 3,
        "is-4": size === 4,
        "is-5": size === 5,
        "is-6": size === 6
      },
      className
    )
})``;

Title.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  is: PropTypes.element
};

export default Title;
