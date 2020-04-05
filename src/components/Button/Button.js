import React from "react";
import AppContext from "../../context";
import styles from "./Button.module.scss";

const Button = ({ children, href, secondary, ...props }) => {
  const getClass = (blackTheme) => {
    return blackTheme
      ? secondary
        ? styles.secondaryBlack
        : styles.buttonBlack
      : secondary
      ? styles.secondary
      : styles.button;
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <>
          {href ? (
            <a
              href={href}
              target="_blank"
              className={getClass(context.blackTheme)}
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ) : (
            <button className={getClass(context.blackTheme)} {...props}>
              {children}
            </button>
          )}
        </>
      )}
    </AppContext.Consumer>
  );
};

export default Button;
