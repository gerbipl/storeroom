import React from "react";
import AppContext from "../../context";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Title from "../Title/Title";
import Button from "../Button/Button";

const ListItem = ({ id, name, count, minCount, category, countType }) => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <li className={styles.wrapper}>
          <div className={styles.leftPanel}>
            <Title>{name}</Title>
            <span className={context.blackTheme ? styles.categoryBlack : styles.category}> - {category}</span>
          </div>
          <div className={styles.rightPanel}>
            <span className={context.blackTheme ? styles.countBlack : styles.count}>{count}</span>
            <span className={context.blackTheme ? styles.countBlack : styles.count}>{countType}</span>
            <span className={context.blackTheme ? styles.countBlack : styles.count}>min({minCount})</span>
            <Button onClick={context.createFormToEditProduct} value={id}>Edit</Button>
            <Button secondary onClick={context.deleteProduct} value={id}>Delete</Button>
          </div>
        </li>
      )}
    </AppContext.Consumer>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  minCount: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  countType: PropTypes.string.isRequired,
};

export default ListItem;
