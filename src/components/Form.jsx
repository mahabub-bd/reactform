import { Colum, Container, Row } from '@/styles/Global.styled';

import { Btn, ErrorMessage, FormContainer, Input, Label, LoginForm } from './Form.styled';

import { useEffect, useRef, useState } from 'react';

import validateForm from './validateForm';

function Form() {

  //Form Data State
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  //Form Error State

  const [formErrors, setFormErrors] = useState({});

  // Form Submit message
  const [message, setMessage] = useState(false);


  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setFormErrors(validateForm({ ...formData, [name]: value }));
  };

  // Submit Form
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      setMessage(true);
      setFormData({
        email: '',
        password: ''
      });
      setFormErrors({});
      console.log(formData);
      event.target.reset();
    }

    else {
      setFormErrors(errors)
    }

    // handle form submission logic here
  };




  return (
    <div>
      <Container>
        <Row>
          <Colum>
            <FormContainer>

              <LoginForm onSubmit={handleSubmit}>
                <h4>Sign in with your credential</h4>
                <Label>
                  Email Address:
                  <Input ref={inputRef} type="email" name="email" placeholder='Enter An Email Address' value={formData.email} onChange={handleChange} />
                </Label>
                {formErrors.email && <ErrorMessage className="error">{formErrors.email}</ErrorMessage>}
                <br />
                <Label>
                  Password:
                  <Input name="password" type='password' placeholder='Enter Password' value={formData.password} onChange={handleChange} />
                </Label>
                {formErrors.password && <ErrorMessage className="error">{formErrors.password}</ErrorMessage>}
                <br />
                <Btn type="submit">Submit</Btn>
                {message && <h3>Data Sucessfully Send</h3>}
              </LoginForm>
            </FormContainer>
          </Colum>
        </Row>
      </Container>
    </div>
  )
}

export default Form;
