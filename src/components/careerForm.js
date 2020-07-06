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

class CareerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      job: '',
      files: undefined,
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

  handleAttachment = e => this.setState({ [e.target.name]: e.target.files[0] });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, job, message, files } = this.state;
    return (
      <form
        name="Career Form"
        className=""
        data-netlify="true"
        method="post"
        action="/thank-you"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >

        <input type="hidden" className="hidden" name="form-name" value="contact" />
        <p hidden className="hidden"><label>Don’t fill this out:{" "}<input name="bot-field" /></label></p>
        
        <div className="flex flex-wrap md:-mx-5 mb-8">
          <div className="w-full md:w-1/2 md:px-5">
            <label className="w-full block mb-4">
              <span className="sr-only">Name *</span>
              <input type="text" name="name" id="name" placeholder="Name" className="bg-white p-4 px-6 block w-full" value={name} onChange={this.handleChange} />

              <span className="block mt-2 text-primary text-sm">
                {this.validator.message('name', name, 'required')}
              </span>
            </label>
            <label className="w-full block mb-4">
              <span className="sr-only">Phone *</span>
              <input type="phone" name="phone" id="phone" placeholder="Phone" className="bg-white p-4 px-6 block w-full" value={phone} onChange={this.handleChange} />

              <span className="block mt-2 text-primary text-sm">
                {this.validator.message('phone number', phone, 'required|phone')}
              </span>
            </label>
            <label className="w-full block mb-4">
              <span className="sr-only">Email</span>
              <input type="email" name="email" id="email" placeholder="Email" className="bg-white p-4 px-6 block w-full" value={email} onChange={this.handleChange} />

              <span className="block mt-2 text-primary text-sm">
                {this.validator.message('email', email, 'required|email')}
              </span>
            </label>
            </div>
            <div className="w-full md:w-1/2 md:px-5">
            <label className="w-full block mb-4">
              <span className="sr-only">Job Applying For*</span>
              <input type="text" name="job" id="job" placeholder="Job applying for" className="bg-white p-4 px-6 block w-full" value={job} onChange={this.handleChange} />

              <span className="block mt-2 text-primary text-sm">
                {this.validator.message('job', job, 'required')}
              </span>
            </label>
            <label className="w-full block mb-4">
              <span className="sr-only">Message *</span>
              <textarea name="message" id="message" rows="4" placeholder="Message" className="bg-white p-4 px-6 block w-full" value={message} onChange={this.handleChange} />
              <span className="block mt-2 text-primary text-sm">
                {this.validator.message('message', message, 'required')}
              </span>
            </label>
          </div>
        </div>

        <label className="w-full mb-4 md:mb-8 flex fle-wrap justify-center">
          <div className="w-auto text-center">
            <span className="text-white block mb-2 underline">Attach CV File</span>
            <input type="file" name="attachment" id="attachment" className="text-white underline block w-56" placeholder="Attach CV File" accept="image/*,.pdf,.doc" value={files} onChange={this.handleAttachment} />
          </div>
        </label>

        <div className="flex justify-center">
          <button type="submit" disabled={this.state.submitting} className="inline-block p-3 px-12 mx-auto border-2 borde-white uppercase text-white font-semibold">{ this.state.submitting ? 'Sending...' : 'Submit' }</button>
        </div>
      </form>
    )
  }
}

export default CareerForm
