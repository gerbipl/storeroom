import React from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Select from "./FormSelect";

const category = {
  drink: "drink",
  loose: "loose",
};

const countType = {
  [category.drink]: {
    bootle: "bootle",
    can: "can",
    millilitre: "millilitre",
    liter: "liter",
  },
  [category.loose]: {
    kilogram: "kilogram",
    gram: "gram",
  },
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.productEdited !== null) {
      this.state = this.getProductToEdit(this.props);
    } else {
      this.state = {
        name: "",
        count: 0,
        minCount: 0,
        category: category["drink"],
        countType: countType["drink"]["bootle"],
      };
    }
  }

  handleIntpuChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "category") {
      const actualCountType = countType[e.target.value];
      this.setState({
        countType: actualCountType[Object.keys(actualCountType)[0]],
      });
    }
  };

  getProductToEdit = ({ productEdited }) => ({
    id: productEdited.id,
    name: productEdited.name,
    count: productEdited.count,
    minCount: productEdited.minCount,
    category: productEdited.category,
    countType: productEdited.countType,
  });

  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>{context.productEdited ? "Edit" : "Add new"} product</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={
                context.productEdited !== null
                  ? (e) => context.editProduct(e, this.state)
                  : (e) => context.addProduct(e, this.state)
              }
            >
              <Select
                id="category"
                label="Category"
                onChange={this.handleIntpuChange}
                options={category}
                value={this.state.category}
              />
              <Input
                onChange={this.handleIntpuChange}
                value={this.state.name}
                name="name"
                label="Name"
              />
              <Select
                id="countType"
                label="Count type"
                onChange={this.handleIntpuChange}
                options={countType[this.state.category]}
                value={this.state.countType}
              />
              <Input
                onChange={this.handleIntpuChange}
                value={this.state.count}
                name="count"
                label="Count"
                type="number"
              />
              <Input
                onChange={this.handleIntpuChange}
                value={this.state.minCount}
                name="minCount"
                label="Minimal count"
                type="number"
              />
              {context.productEdited ? (
                <Input
                  onChange={this.handleIntpuChange}
                  value={this.state.id}
                  name="id"
                  label="Id"
                  type="hidden"
                />
              ) : null}
              <Button>
                {context.productEdited ? "Edit" : "Add new"} product
              </Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
