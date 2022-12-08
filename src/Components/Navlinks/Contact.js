import React, { useRef } from "react";
import "./Contact.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";
import Heading from "../Heading/Heading";
import Footer from "../Footer/footer";
import { HiMail } from "react-icons/hi";

    const Contact = () => {
  const ResetFields = () => {
    const nfield = document.getElementById("in_name");
    nfield.value = "";
    const efield = document.getElementById("in_email");
    efield.value = "";
    const tfield = document.getElementById("in_ta");
    tfield.value = "";
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("in_button").value = "Sending...";
    emailjs
      .sendForm(
        "hamza1011",
        "template_iu8gqna",
        form.current,
        "6FeCUDTG2LgwXgS98"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Message Has Been Sent Successfully!");
          document.getElementById("in_button").value = "Send";
        },
        (error) => {
          window.alert(
            "Message Not Sent! Kindly Check Your Network Connection And Try Again."
          );
          document.getElementById("in_button").value = "Send";
        }
      );
    ResetFields();
  };
  return (
    <>
      <Navbar/>
      <div className="Contact_heading">
        <Heading text="I will love to hear what you want" />
      </div>
      <div className="Main_Contactform">
     
        <section className="contact_form_container">
          <form ref={form} onSubmit={sendEmail}>
            <input
              id="in_name"
              placeholder="Your Name"
              type="text"
              name="user_name"
              required
            />
            <input
              id="in_email"
              placeholder="example@gmail.com"
              type="email"
              name="user_email"
              required
            />
            <textarea
              id="in_ta"
              className="input_field"
              placeholder="What You Want To Say..."
              name="message"
              required
            />
            <input
              onClick={() => {
                document.getElementById("in_button").style.border =
                  "0.1rem solid var(--r-c)";
                document.getElementById("in_button").style.borderBottom =
                  "0.45rem solid var(--t-c)";
                setTimeout(()=>{
                  document.getElementById("in_button").style.border =
                  "0.1rem solid var(--r-c)";
                document.getElementById("in_button").style.borderBottom =
                  "0.2rem solid var(--r-c)";
                },200)
              }}
              id="in_button"
              type="submit"
              value="Send"
            />
          </form>
        </section>
        <section className="social_contact">
        <a href="https://wa.me/923207038759" target="_blank" >
          <div className="con_icon_child">
            <FaWhatsapp className="social_contact_icon" />  
          </div>
          </a>
          <a href="mailto:contacthamza91@gmail.com?body=Hi,%20kindly share detailed information%20 about the project.%20Also add attachements(if possible) to help us out in understanding the project more deeply. Thank You!" target="_blank">
          <div className="con_icon_child">
             <HiMail className="social_contact_icon" /> 
          </div>
          </a>
          <a href="tel:+923214321008" target="_blank" >
          <div className="con_icon_child">
            <FaPhoneAlt className="social_contact_icon" />
          </div>
          </a>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Contact;
