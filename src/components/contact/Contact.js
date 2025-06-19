import React, { useRef, useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation
    if (!name) return setErrMsg('Name is required!');
    if (!phone) return setErrMsg('Phone number is required!');
    if (!email) return setErrMsg('Email is required!');
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))
      return setErrMsg('Enter a valid email!');
    if (!message) return setErrMsg('Message is required!');

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_7krklvd',    // Replace with your actual service ID
        'template_o0xa3tg',   // Replace with your actual template ID
        formRef.current,
        'eh4XrsUqAaIihWCPR'     // Replace with your actual public key
      )
      .then(
        () => {
          setSuccessMsg(`Thank you ${name}, your message has been sent!`);
          setErrMsg('');
          form.reset();
        },
        () => {
          setErrMsg('Failed to send message. Please try again.');
          setSuccessMsg('');
        }
      );
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              ref={formRef}
              onSubmit={handleSend}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              {/* Display messages */}
              {errMsg && (
                <p className="py-3 text-orange-500 text-center animate-bounce">{errMsg}</p>
              )}
              {successMsg && (
                <p className="py-3 text-green-500 text-center animate-bounce">{successMsg}</p>
              )}

              {/* Hidden time field */}
              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              {/* Name & Phone */}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                  <input name="name" type="text" className="contactInput" />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input name="phone" type="text" className="contactInput" />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input name="email" type="email" className="contactInput" />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea name="message" rows="8" className="contactTextArea"></textarea>
              </div>

              {/* Submit button */}
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

