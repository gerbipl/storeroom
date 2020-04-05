import React from "react";
import AppContext from "../../context";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import ProductsView from "../ProductsView/ProductsView";
import { v4 as uuidv4 } from "uuid";
import ShoppingListView from "../ShoppingListView/ShoppingListView";

class Root extends React.Component {
  state = {
    products: [
      {
        id: "324",
        name: "Water",
        count: "2",
        minCount: "3",
        category: "drink",
        countType: "bootle",
      },
      {
        id: "54654",
        name: "Pepsi",
        count: "5",
        minCount: "2",
        category: "loose",
        countType: "kilogram",
      },
    ],
    isModalOpen: false,
    modalType: "form",
    productEdited: null,
    blackTheme: false,
  };

  addProduct = (e, newProduct) => {
    e.preventDefault();
    newProduct.id = uuidv4();

    this.setState((prevState) => ({
      products: [...prevState.products, newProduct],
    }));

    this.closeModal();
  };

  saveSettings = (e) => {
    e.preventDefault();

    const value = e.target["blackTheme"].value;

    this.setState({
      blackTheme: value,
    });

    if (value) {
      document.body.classList.add("blackBody");
    } else {
      document.body.classList.remove("blackBody");
    }
  };

  createFormToAddProduct = () => {
    this.setState({
      productEdited: null,
      modalType: "form",
    });
    this.openModal();
  };

  deleteProduct = (e) => {
    if (window.confirm("Czy napewno chcesz usunąć wybrany produkt?")) {
      const id = e.target.value;

      this.setState((prevState) => ({
        products: prevState.products.filter((product) => {
          return product.id !== id;
        }),
      }));
    }
  };

  createFormToEditProduct = (e) => {
    const id = e.target.value;

    const product = this.state.products.filter((product) => {
      return product.id === id;
    });

    if (product[0]) {
      this.openModal();
      this.setState({
        productEdited: product[0],
        modalType: "form",
      });
    }
  };

  editProduct = (e, editedProduct) => {
    e.preventDefault();

    this.setState((prevState) => ({
      products: [
        ...prevState.products.filter((product) => {
          return product.id !== editedProduct.id;
        }),
        editedProduct,
      ],
    }));

    this.closeModal();
  };

  disabledEditing = () => {
    this.setState({
      productEdited: false,
    });
  };

  getProductsToShoppingList = (e) =>
    this.state.products.filter((product) => {
      return product.count < product.minCount;
    });

  openSetting = () => {
    this.setState({
      modalType: "settings",
    });
    this.openModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  changeTheme = () => {
    this.setState((prevState) => ({
      blackTheme: !prevState.blackTheme,
    }));

    if (!this.state.blackTheme) {
      document.body.classList.add("blackBody");
    } else {
      document.body.classList.remove("blackBody");
    }
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElemensts = {
      ...this.state,
      getProductsToShoppingList: this.getProductsToShoppingList,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      createFormToEditProduct: this.createFormToEditProduct,
      editProduct: this.editProduct,
      disabledEditing: this.disabledEditing,
      changeTheme: this.changeTheme,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElemensts}>
          <Header
            createFormToAddProductFn={this.createFormToAddProduct}
            openSettingFn={this.openSetting}
          />
          <Switch>
            <Route exact path="/" component={ProductsView} />
            <Route exact path="/shopping-list" component={ShoppingListView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
