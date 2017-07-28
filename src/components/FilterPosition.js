import React, { Component } from 'react';
import '../styles/Style.css';

class Filterposition extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            <div>
              <input
                className="checkbox-custom input"
                name="myGroupName1"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                type="checkbox"
                id="All"
                value="All"
                checked={
                  this.state.selectedValue === '' ||
                  this.state.selectedValue === 'All'
                }
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                All
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                type="checkbox"
                id="Frontend"
                value="Frontend"
                checked={this.state.selectedValue === 'Frontend'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                Frontend
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                type="checkbox"
                name="myGroupName1"
                value="QA"
                refs="v2"
                checked={this.state.selectedValue === 'QA'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                QA
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                type="checkbox"
                name="myGroupName1"
                value="Backend"
                refs="v3"
                checked={this.state.selectedValue === 'Backend'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                Backend
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                name="myGroupName1"
                value="Project"
                refs="v4"
                type="checkbox"
                checked={this.state.selectedValue === 'Project'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                PMO
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                name="myGroupName1"
                type="checkbox"
                value="BA"
                refs="v5"
                checked={this.state.selectedValue === 'BA'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                BA
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                name="myGroupName1"
                value="Design"
                refs="v6"
                type="checkbox"
                checked={this.state.selectedValue === 'Design'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                Design
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                name="myGroupName1"
                value="Mobile"
                refs="v7"
                type="checkbox"
                checked={this.state.selectedValue === 'Mobile'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                Mobile
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                name="myGroupName1"
                value="HR"
                type="checkbox"
                refs="v8"
                checked={this.state.selectedValue === 'HR'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                HR
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                name="myGroupName1"
                value="Tech"
                refs="v9"
                type="checkbox"
                checked={this.state.selectedValue === 'Tech'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                Tech
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                name="myGroupName1"
                value="Cofound"
                refs="v10"
                type="checkbox"
                checked={this.state.selectedValue === 'Cofound'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                Co-Found
              </label>
            </div>
            <div>
              <input
                className="checkbox-custom input"
                style={{
                  marginLeft: '20px',
                  width: '19px',
                  height: '19px',
                  backgroundColor: 'white'
                }}
                name="myGroupName1"
                id="Support"
                value="Support"
                refs="v10"
                type="checkbox"
                checked={this.state.selectedValue === 'Support'}
                onChange={e => this.changeValue(e)}
              />
              <label for="checkbox-1" className="checkbox-custom-label">
                App-Support
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Filterposition;
