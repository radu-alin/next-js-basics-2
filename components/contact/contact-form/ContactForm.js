import { useRef } from 'react';

import classes from './ContactForm.module.css';

function ContactForm() {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  function sendMessageHandler(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const name = nameInputRef.current.value;
    const message = messageInputRef.current.value;

    const formData = { email, name, message };

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} required />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" ref={messageInputRef} rows="5" />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
