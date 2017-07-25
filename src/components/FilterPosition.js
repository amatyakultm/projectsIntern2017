import React, { Component } from 'react';
import '../styles/Style.css';

class Filterposition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAll: '',
      inputFrontend: '',
      inputProject: '',
      inputBackend: '',
      inputBa: '',
      inputDesign: '',
      inputQa: '',
      inputMobile: '',
      inputHr: '',
      inputTech: '',
      inputCofound: '',
      selectedValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeAll = this.onChangeAll.bind(this);
    this.onChangeFrontend = this.onChangeFrontend.bind(this);
    this.onChangeBackend = this.onChangeBackend.bind(this);
    this.onChangeBa = this.onChangeBa.bind(this);
    this.onChangeDesign = this.onChangeDesign.bind(this);
    this.onChangeQa = this.onChangeQa.bind(this);
    this.onChangeProject = this.onChangeProject.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangeHr = this.onChangeHr.bind(this);
    this.onChangeTech = this.onChangeTech.bind(this);
    this.onChangeCofound = this.onChangeCofound.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getJobData(this.state);
  }

  onChangeAll(e) {
    this.setState({
      inputAll: !this.state.inputAll
    });
    this.state.inputAll === false
      ? this.setState({ inputAll: e.target.value })
      : this.setState({ inputAll: '' });
  }

  onChangeFrontend(e) {
    this.setState({
      inputFrontend: !this.state.inputFrontend
    });
    this.state.inputFrontend === false
      ? this.setState({ inputFrontend: e.target.value })
      : this.setState({ inputFrontend: '' });
  }

  onChangeBa(e) {
    this.setState({
      inputBa: !this.state.inputBa
    });
    this.state.inputBa === false
      ? this.setState({ inputBa: e.target.value })
      : this.setState({ inputBa: '' });
  }

  onChangeMobile(e) {
    this.setState({
      inputMobile: !this.state.inputMobile
    });
    this.state.inputMobile === false
      ? this.setState({ inputMobile: e.target.value })
      : this.setState({ inputMobile: '' });
  }

  onChangeHr(e) {
    this.setState({
      inputHr: !this.state.inputHr
    });
    this.state.inputHr === false
      ? this.setState({ inputHr: e.target.value })
      : this.setState({ inputHr: '' });
  }

  onChangeTech(e) {
    this.setState({
      inputTech: !this.state.inputTech
    });
    this.state.inputTech === false
      ? this.setState({ inputTech: e.target.value })
      : this.setState({ inputTech: '' });
  }

  onChangeCofound(e) {
    this.setState({
      inputCofound: !this.state.inputCofound
    });
    this.state.inputCofound === false
      ? this.setState({ inputCofound: e.target.value })
      : this.setState({ inputCofound: '' });
  }

  onChangeDesign(e) {
    this.setState({
      inputDesign: !this.state.inputDesign
    });
    this.state.inputDesign === false
      ? this.setState({ inputDesign: e.target.value })
      : this.setState({ inputDesign: '' });
  }

  onChangeQa(e) {
    this.setState({
      inputQa: !this.state.inputQa
    });
    this.state.inputQa === false
      ? this.setState({ inputQa: e.target.value })
      : this.setState({ inputQa: '' });
  }

  onChangeBackend(e) {
    this.setState({
      inputFrontend: !this.state.inputBackend
    });
    this.state.inputFrontend === false
      ? this.setState({ inputFrontend: e.target.value })
      : this.setState({ inputFrontend: '' });
  }

  onChangeProject(e) {
    this.setState({
      inputProject: !this.state.inputProject
    });
    this.state.inputProject === false
      ? this.setState({ inputProject: e.target.value })
      : this.setState({ inputProject: '' });
  }

  onChangeSupport(e) {
    this.setState({
      inputSupport: !this.state.inputSupport
    });
    this.state.inputSupport === false
      ? this.setState({ inputSupport: e.target.value })
      : this.setState({ inputSupport: '' });
  }

  async changeValue(newValue) {
    await this.setState({ selectedValue: newValue.target.value });
    await this.props.onChange(this.state.selectedValue);
  }

  render() {
    return (
      <div>
        <div className="dropdown">
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="All"
              value="All"
              refs="v1"
              checked={this.state.selectedValue === 'All'}
              onChange={e => this.changeValue(e)}
            />{' '}
            All <br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="Frontend"
              value="Frontend"
              refs="v1"
              checked={this.state.selectedValue === 'Frontend'}
              onChange={e => this.changeValue(e)}
            />{' '}
            Frontend <br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="QA"
              value="QA"
              refs="v2"
              checked={this.state.selectedValue === 'QA'}
              onChange={e => this.changeValue(e)}
            />{' '}
            QA <br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="Backend"
              value="Backend"
              refs="v3"
              checked={this.state.selectedValue === 'Backend'}
              onChange={e => this.changeValue(e)}
            />{' '}
            Backend <br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="Project"
              value="Project"
              refs="v4"
              checked={this.state.selectedValue === 'Project'}
              onChange={e => this.changeValue(e)}
            />{' '}
            PMO <br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="BA"
              value="BA"
              refs="v5"
              checked={this.state.selectedValue === 'BA'}
              onChange={e => this.changeValue(e)}
            />{' '}
            BA<br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="Design"
              value="Design"
              refs="v6"
              checked={this.state.selectedValue === 'Design'}
              onChange={e => this.changeValue(e)}
            />{' '}
            Design <br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="Mobile"
              value="Mobile"
              refs="v7"
              checked={this.state.selectedValue === 'Mobile'}
              onChange={e => this.changeValue(e)}
            />{' '}
            Mobile <br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="HR"
              value="HR"
              refs="v8"
              checked={this.state.selectedValue === 'HR'}
              onChange={e => this.changeValue(e)}
            />{' '}
            HR <br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="Tech"
              value="Tech"
              refs="v9"
              checked={this.state.selectedValue === 'Tech'}
              onChange={e => this.changeValue(e)}
            />{' '}
            Tech <br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="Cofound"
              value="Cofound"
              refs="v10"
              checked={this.state.selectedValue === 'Cofound'}
              onChange={e => this.changeValue(e)}
            />{' '}
            Co-Found <br />
            <input
              type="radio"
              style={{ marginLeft: '10px' }}
              name="myGroupName1"
              id="Support"
              value="Support"
              refs="v10"
              checked={this.state.selectedValue === 'Support'}
              onChange={e => this.changeValue(e)}
            />{' '}
            App-Support <br />
          </div>
        </div>
      </div>
    );
  }
}
export default Filterposition;
