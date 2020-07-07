import React from "react"
import SimpleReactValidator from "simple-react-validator"
import { navigateTo } from "gatsby"

function encode(data) {
  const formData = new FormData();
  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }
  return formData;
}

class ContactFormBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      submitting: false
    };
  }

  componentWillMount() {
    this.validator = new SimpleReactValidator();
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.validator.allValid()) {
      this.setState({
        submitting: true
      })
      const form = e.target;
      fetch("/", {
        method: "POST",
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, subject, message } = this.state;
    return (
      <form
        name={this.props.netlifyName}
        className=""
        data-netlify="true"
        method="post"
        action="/thank-you"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >

        <input type="hidden" className="hidden" name="form-name" value="contact" />
        <p hidden className="hidden"><label>Don’t fill this out:{" "}<input name="bot-field" /></label></p>
        
        <label className="w-full block mb-4">
          <span className="sr-only">Name *</span>
          <input type="text" name="name" id="name" placeholder="Name" className="border-b-2 py-3 block w-full border-pink" value={name} onChange={this.handleChange} />

          <span className="block mt-2 text-primary text-sm">
          {this.validator.message('name', name, 'required')}
          </span>
        </label>
        <label className="w-full block mb-4">
          <span className="sr-only">Phone *</span>
          <input type="phone" name="phone" id="phone" placeholder="Phone" className="border-b-2 py-3 block w-full border-pink" value={phone} onChange={this.handleChange} />

          <span className="block mt-2 text-primary text-sm">
          {this.validator.message('phone number', phone, 'required|phone')}
          </span>
        </label>
        <label className="w-full block mb-4">
          <span className="sr-only">Email *</span>
          <input type="email" name="email" id="email" placeholder="Email" className="border-b-2 py-3 block w-full border-pink" value={email} onChange={this.handleChange} />

          <span className="block mt-2 text-primary text-sm">
          {this.validator.message('email', email, 'required|email')}
          </span>
        </label>

        <label className="w-full block mb-4">
          <span className="sr-only">Subject *</span>
          <input type="subject" name="subject" id="subject" placeholder="Subject" className="border-b-2 py-3 block w-full border-pink" value={subject} onChange={this.handleChange} />

          <span className="block mt-2 text-primary text-sm">
          {this.validator.message('subject', subject, 'required')}
          </span>
        </label>

        <label className="w-full block mb-8 md:mb-12">
          <span className="sr-only">Message *</span>
          <textarea name="message" id="message" rows="4" placeholder="Message" className="border-b-2 py-3 block w-full border-pink" value={message} onChange={this.handleChange} />
          <span className="block mt-2 text-primary text-sm">
          {this.validator.message('message', message, 'required')}
          </span>
        </label>

        <div className="flex justify-center">
          <button type="submit" disabled={this.state.submitting} className="inline-block p-3 px-12 mx-auto border-2 border-purple uppercase text-purple font-semibold">{ this.state.submitting ? 'Sending...' : 'Submit' }</button>
        </div>
      </form>
    )
  }
}

export default ContactFormBasic
