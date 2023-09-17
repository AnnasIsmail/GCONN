import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Context } from "../Function/Context";
import getAllRanks from "../Function/getAllRanks";

let value = [];

export default class DropdownRanks extends Component {
  state = { value };
  constructor(props) {
    super(props);

    this.state = {
      ranks: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      this.props.sendData(this.state.value);
    }
  }

  componentDidMount() {
    const { context, updateContextValue } = this.context;
    this.fetchDataAgents(context, updateContextValue);
    // fetch(`https://valorant-api.com/v1/agents`)
    //   .then((response) => response.json())
    //   .then((res) => {
    //     let addArray = [];
    //     res.data.map((data, index) => {
    //       if (data.isPlayableCharacter === true) {
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

  fetchDataAgents = async (context, updateContextValue) => {
    const response = await getAllRanks(context, updateContextValue);
    const result = response.map((obj) => ({
      text: obj.tierName,
      key: obj.tier,
      value: obj.tierName,
    }));
    this.setState({ ranks: result });
  };

  handleAddition = (e, { value }) => {
    this.setState((prevState) => ({
      ranks: [{ text: value, value }, ...prevState.options],
    }));
  };

  handleChange = (e, { value }) => this.setState({ value });

  // sendData = (e, { value }) => {
  //   this.setState({
  //     value,
  //   });
  //   this.props.dataSelect(value, "agent");
  // };

  // componentWillReceiveProps = () => {
  //   if (this.props.checkUpdate) {
  //     fetch(
  //       `https://gconn-api-node-js.vercel.app/accountDetail/${this.props.checkUpdate._id}`
  //     )
  //       .then((response) => response.json())
  //       .then((json) => {
  //         this.setState({
  //           value: json.data.agent,
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
        options={this.state.ranks}
        placeholder="Choose Ranks"
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
DropdownRanks.contextType = Context;
