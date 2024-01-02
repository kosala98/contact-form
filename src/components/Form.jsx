import "./form.css";
import image1 from "../assets/arrow_icon.png";
import image2 from "../assets/right_img.png";

const Form = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div>
      <div className="contact-container">
        <form onSubmit={onSubmit} className="contact-left">
          <div className="contact-left-title">
            <h2>Get in touch</h2>
            <hr />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact-inputs"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="contact-inputs"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-inputs"
            required
          ></textarea>
          <button type="submit">
            Submit <img src={image1} alt="" />
          </button>
        </form>
        <div className="contact-right">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Form;
