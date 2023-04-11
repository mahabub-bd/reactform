
function validateForm(formData) {
    let errors = {};


    // Check if email is valid
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    // Check if message is empty
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  }


  export default validateForm;