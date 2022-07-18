import React from 'react';
import './Contact.scss';

import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [state, handleSubmit] = useForm("xlezqedg");
    if (state.succeeded) {
        return <h1 style={{color: '#fff', display:'flex', justifyContent:'center', alignItems:'center'}}>Merci pour votre message!</h1>;
    }

  return (
    <div className='contact__form-wrapper'>
        <form onSubmit={handleSubmit}>
          <input 
            id='name'
            type='text'
            name='name'
            placeholder='Votre nom'
            required    
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          <input
            id="email"
            type="email" 
            name="email"
            placeholder='Votre adresse mail'
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
            placeholder='Votre message ici'
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Envoyer
          </button>
    </form>
    </div>
  )
}

export default Contact