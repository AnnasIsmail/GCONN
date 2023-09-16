import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Context } from "../Function/Context";
import getAllSkins from "../Function/getAllSkins";

let value = [];

export default class DropdownSkins extends Component {
  state = { value };

  constructor(props) {
    super(props);

    this.state = {
      skins: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      this.props.sendData(this.state.value);
    }
  }

  componentDidMount() {
    const { context, updateContextValue } = this.context;
    this.fetchDataSkins(context, updateContextValue);
    // fetch(`https://valorant-api.com/v1/weapons/skins`)
    //   .then((response) => response.json())
    //   .then((res) => {
    //     let addArray = [];
    //     res.data.map((data, index) => {
    //       if (data.displayName !== "Random Favorite Skin") {
    //         let dataPush = {
    //           key: data.uuid,
    //           text: data.displayName,
    //           value: data.uuid,
    //         };
    //         addArray.push(dataPush);
    //       }
    //     });
    //     options = addArray;
    //     this.setState({
    //       options: addArray,
    //     });
    //   });
  }

  fetchDataSkins = async (context, updateContextValue) => {
    const response = await getAllSkins(context, updateContextValue);
    const result = response.map((obj) => ({
      text: obj.displayName,
      key: obj.uuid,
      value: obj.uuid,
    }));
    this.setState({ skins: result });
  };

  handleAddition = (e, { value }) => {
    this.setState((prevState) => ({
      skins: [{ text: value, value }, ...prevState.options],
    }));
  };

  handleChange = (e, { value }) => this.setState({ value });
  // sendData = (e, { value }) => {
  //   this.setState({
  //     value,
  //   });
  //   this.props.dataSelect(value, "skin");
  // };

  // componentWillReceiveProps = () => {
  //   if (this.props.checkUpdate) {
  //     fetch(
  //       `https://gconn-api-node-js.vercel.app/accountDetail/${this.props.checkUpdate._id}`
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         this.setState({
  //           value: json.data.skin,
  //         });
  //       });
  //   }

  //   if (this.props.advanceFilter) {
  //     this.setState({
  //       value: this.props.advanceFilter,
  //     });
  //   }
  // };

  render() {
    return (
      <Dropdown
        options={this.state.skins}
        placeholder="Choose Skins"
        search
        selection
        fluid
        multiple={true}
        value={this.state.value}
        onAddItem={this.handleAddition}
        onChange={(e, { value }) => {
          this.handleChange(e, { value });
        }}
      />
    );
  }
}

DropdownSkins.contextType = Context;
