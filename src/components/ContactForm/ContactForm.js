import React, { useState } from 'react';
import { send } from 'emailjs-com';
import runtimeEnv from '@mars/heroku-js-runtime-env';

import styles from './ContactForm.module.css';

const App = () => {
  const env = runtimeEnv();

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'rutwikhdev@gmail.com',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    
    send(
      env.REACT_APP_SERVICE_ID,
      env.REACT_APP_TEMPLATE_ID,
      toSend,
      env.REACT_APP_USER_ID
    ).then((response) => {
        alert("Mail sent successfully!");
    }).catch((err) => {
        alert("Unable to send, something went wrong!");
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <h2 className={styles.CFormTitle}>Contact Me.</h2>
        <div className={styles.centerForm}>
        <form onSubmit={onSubmit}>
            <input
                className={styles.textField}
                type='text'
                name='from_name'
                placeholder='Your Name'
                value={toSend.from_name}
                onChange={handleChange}
            />
            <input
                className={styles.textField}
                type='text'
                name='reply_to'
                placeholder='Your Email'
                value={toSend.reply_to}
                onChange={handleChange}
            />
            <textarea rows="10"
                className={styles.msgField}
                type='text'
                name='message'
                placeholder='Message'
                value={toSend.message}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
  );
}

export default App;