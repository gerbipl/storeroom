import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";
import Title from "../Title/Title";

const List = ({items}) => (
  <>
  {items.length ? (
    <ul className={styles.wrapper}>
    {items.map(item => (
      <ListItem key={item.id} {...item} />
    ))}
  </ul>
  ) : (
    <Title>There`s nothing here jet, please add some item!</Title>
  )}
  </>
);

export default List;
