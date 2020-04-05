import React from "react";
import AppContext from "../../context";
import Title from "../Title/Title";
import styles from "./SettingsForm.module.scss";
import Input from "../Input/Input";

const SettingsForm = () => (
  <AppContext.Consumer>
    {(context) => (
      <div className={styles.wrapper}>
        <Title>Settings</Title>
        <Input
          type="checkbox"
          name="blackTheme"
          label="Black theme"
          onChange={context.changeTheme}
          defaultChecked={context.blackTheme}
        />
      </div>
    )}
  </AppContext.Consumer>
);

export default SettingsForm;
