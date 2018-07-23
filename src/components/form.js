import React from 'react';

import './form.css'

export default function Form() {
  return (
    <form>
      <input type="text" placeholder="Enter your Guess" required />
      <input type="submit" value="Guess" /> 
    </form>
  )
}