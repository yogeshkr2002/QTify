import PropTypes from "prop-types";
import styles from "./Button.module.css";
export default function Button({ children, className="", ...rest }){
  return (<button className={`${styles.btn} ${className}`} {...rest}>{children}</button>);
}
Button.propTypes = { children: PropTypes.node, className: PropTypes.string };
