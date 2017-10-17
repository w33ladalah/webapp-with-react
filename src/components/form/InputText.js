import React from 'react'
import ReactDOM from 'react-dom'
import { toCamelCase, hasClass, addClass, removeClass } from '../../libs/helpers'

export class InputText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let messageContainer = <span>&nbsp;</span>

    const { input, label, type, meta } = this.props
    const { touched, error, warning } = meta

    if (error) {
      messageContainer = <span className="text-danger">
        <i className="glyphicon glyphicon-info-sign"/>{error}
      </span>
    }

    return <div>
      <label className="form-control-label">
        {label}
      </label>
      <div>
        <input {...input}
           className="form-control"
           placeholder={label}
           type={type}
           ref={toCamelCase(label)}
           onFocus={function (e) {
             const fieldContainer = ReactDOM.findDOMNode(e.target)
               .parentNode.parentNode.parentNode.parentNode
             if (!hasClass(fieldContainer, 'fill') && !hasClass(fieldContainer, 'focus')) {
               addClass(fieldContainer, 'fill')
               addClass(fieldContainer, 'focus')
             }
           }}
           onBlur={function (e) {
             const fieldContainer = ReactDOM.findDOMNode(e.target)
               .parentNode.parentNode.parentNode.parentNode
             if (e.target.value === '') {
               removeClass(fieldContainer, 'fill')
               removeClass(fieldContainer, 'focus')
             }
           }}
        />
        {touched && error && messageContainer}
      </div>
    </div>
  }
}

export default InputText
