import imgSrc from '../assets/signup.jpg';
import { SignupForm } from '../components/SignupForm/index';

const SignupPage = () => (
  <div className="container-fluid h-100">
    <div className="row justify-content-center align-content-center h-100">
      <div className="col-12 col-md-8 col-xxl-6">
        <div className="card shadow-sm">
          <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
            <img src={imgSrc} className="rounded-circle" alt="Регистрация" />
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SignupPage;