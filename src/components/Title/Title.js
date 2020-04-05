import React from "react";
import AppContext from "../../context";
import styles from "./Title.module.scss";

const Title = ({ children }) => {
  return (
    <AppContext.Consumer>
      {(context) => <h2 className={context.blackTheme ? styles.titleBlack : styles.title}>{children}</h2>}
    </AppContext.Consumer>
  );
};

export default Title;
