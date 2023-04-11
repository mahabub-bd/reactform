import { Colum, Container, Row } from '@/styles/Global.styled';
import { Btn, Input, Label, LoginForm } from './Form.styled';

import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
    console.log(formData);
    // handle form submission logic here
  };

  return (
    <div>
      <Container>
        <Row>
          <Colum>
            <LoginForm onSubmit={handleSubmit}>
              <Label>
                Email Address:
                <Input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange} />
              </Label>
              <br />
              <Label>
                Password:
                <Input name="password" type='password' placeholder='Enter an password' value={formData.password} onChange={handleChange} />
              </Label>
              <br />
              <Btn type="submit">Submit</Btn>
              {message && <h3>Data Sucessfully Send</h3>}
            </LoginForm>
          </Colum>
        </Row>
      </Container>
    </div>
  )
}

export default Form;
