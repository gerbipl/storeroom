import React from "react";
import styles from "./FormSelect.module.scss";

const Select = ({ id, options, label, ...props }) => (
  <div className={styles.formItem}>
    <select name={id} id={id} {...props}>
      {Object.keys(options).map((key) => (
        <option key={key} value={key}>
          {options[key]}
        </option>
      ))}
    </select>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>
  </div>
);

export default Select;
