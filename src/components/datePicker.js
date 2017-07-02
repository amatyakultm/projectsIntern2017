// import React from 'react'
// import DatePicker from 'react-bootstrap-date-picker'

// const DatePicker = (props) => {
//     getInitialState() {
//     return {
//       date: new Date().toISOString(),
//       previousDate: null,
//       minDate: null,
//       maxDate: null,
//       focused: false,
//       invalid: false
//     }
//   }

//   handleChange(value) {
//     this.setState({
//       date: value
//     })
//   }

//     componentDidUpdate () {
//     // Access ISO String and formatted values from the DOM.
//     var hiddenInputElement = document.getElementById("example-datepicker");
//     console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
//     console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
//   }

//   handleValidationCheck(e) {
//     e.preventDefault()
//     this.setState(() => ({
//       invalid: false
//     }))
//   }

//   handleInvalidDate(e) {
//     e.preventDefault();
//     this.setState(() => ({
//       invalid: true
//     }))
//   }

//   handleResetValidation(e) {
//     e.preventDefault();
//     this.setState(() => ({
//       invalid: false
//     }))
//   }

// render() {
//     const LabelISOString = new Date().toISOString();
//     return(
//     <FormGroup>
//       <ControlLabel>Label</ControlLabel>
//       <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
//       <HelpBlock>Help</HelpBlock>
//     </FormGroup>
//     )
// }
// }
// export default DatePicker
