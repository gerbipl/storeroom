import React from "react";
import AppContext from "../../context";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";
import SettingsForm from "../SettingsForm/SettingsForm";

const Modal = ({ closeModalFn }) => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={context.blackTheme ? styles.wrapperBlack : styles.wrapper}>
          <button className={styles.closeButton} onClick={closeModalFn} />
          {context.modalType === "form" ? (
            <Form productEdited={context.productEdited} />
          ) : (
            <SettingsForm />
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Modal;
