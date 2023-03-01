import { Form, FloatingLabel, Button } from 'react-bootstrap';
// import { useFormik } from 'formik';

import imgSrc from '../assets/signup.jpg';

const SignupPage = () => (
  <div className="container-fluid h-100">
    <div className="row justify-content-center align-content-center h-100">
      <div className="col-12 col-md-8 col-xxl-6">
        <div className="card shadow-sm">
          <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
            <img src={imgSrc} className="rounded-circle" alt="Регистрация" />
            <Form className="w-50">
              <h1 className="text-center mb-4">Регистрация</h1>
              <Form.Group className="form-floating mb-3">
                <FloatingLabel controlId="floatingUsername" label="Имя пользователя" className="mb-3">
                  <Form.Control type="text" placeholder="username" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Пароль" className="mb-3">
                  <Form.Control type="password" placeholder="password" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Подтвердите пароль" className="mb-3">
                  <Form.Control type="password" placeholder="password" />
                </FloatingLabel>
              </Form.Group>
              <Button variant="outline-primary" type="submit" className="w-100">
                Зарегистрироваться
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default SignupPage;
