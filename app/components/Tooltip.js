import React from "react";
import PropTypes from "prop-types";
import withHover from "./withHover";

const styles = {
  container: {
    position: "relative",
    display: "flex"
  },
  tooltip: {
    boxSizing: "border-box",
    position: "absolute",
    width: "160px",
    bottom: "100%",
    left: "50%",
    marginLeft: "-80px",
    borderRadius: "3px",
    backgroundColor: "hsla(0, 0%, 20%, 0.9)",
    padding: "7px",
    marginBottom: "5px",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px"
  }
};

// export default class Tooltip extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hovering: false
//     };

//     this.mouseOver = this.mouseOver.bind(this);
//     this.mouseOut = this.mouseOut.bind(this);
//   }
//   mouseOver() {
//     this.setState({
//       hovering: true
//     });
//   }
//   mouseOut() {
//     this.setState({
//       hovering: false
//     });
//   }
//   render() {
//     const { text, children } = this.props;
//     const { hovering } = this.state;

//   }
// }

function Tooltip({ text, children, hovering }) {
  return (
    <div style={styles.container}>
      {hovering === true && <div style={styles.tooltip}>{text}</div>}
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  hovering: PropTypes.bool.isRequired
};

// Higher order component (withHover) takes in another component as an argument (Tooltip)
// && returns a new component

export default withHover(Tooltip);
