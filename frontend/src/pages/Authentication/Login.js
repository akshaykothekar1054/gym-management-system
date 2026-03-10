import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, Label, Form, Input } from 'reactstrap';
import logoDark from "../../assets/images/logo/light.png";
import logoLight from "../../assets/images/logo/dark.png";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";
import withRouter from 'components/Common/withRouter';

const Login = props => {

  document.title = "Login | SpartanX";

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string(),
      password: Yup.string(),
    }),

    onSubmit: () => {

      // Fake login for now
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          email: "admin@spartanx.com",
          name: "Admin"
        })
      );

      // Redirect to dashboard
      props.router.navigate("/dashboard");
    }
  });

  return (
    <React.Fragment>

      <div className="account-pages my-5 pt-sm-5">

        <Container>

          <Row className="justify-content-center">

            <Col md={8} lg={6} xl={5}>

              <Card className="overflow-hidden">

                <CardBody className="pt-0">

                  <h3 className="text-center mt-5 mb-4">

                    <Link to="/" className="d-block auth-logo">

                      <img src={logoDark} alt="" height="120" className="auth-logo-dark" />

                      <img src={logoLight} alt="" height="30" className="auth-logo-light" />

                    </Link>

                  </h3>

                  <div className="p-3">

                    <h4 className="text-muted font-size-18 mb-1 text-center">
                      Welcome Back !
                    </h4>

                    <p className="text-muted text-center">
                      Sign in to continue to SpartanX.
                    </p>

                    <Form
                      className="form-horizontal mt-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >

                      <div className="mb-3">

                        <Label>Email</Label>

                        <Input
                          name="email"
                          type="email"
                          placeholder="Enter email"
                          onChange={validation.handleChange}
                          value={validation.values.email}
                        />

                      </div>

                      <div className="mb-3">

                        <Label>Password</Label>

                        <Input
                          name="password"
                          type="password"
                          placeholder="Enter password"
                          onChange={validation.handleChange}
                          value={validation.values.password}
                        />

                      </div>

                      <Row className="mb-3 mt-4">

                        <div className="col-6">

                          <div className="form-check">

                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="remember"
                            />

                            <label
                              className="form-check-label"
                              htmlFor="remember"
                            >
                              Remember me
                            </label>

                          </div>

                        </div>

                        <div className="col-6 text-end">

                          <button
                            className="btn w-md"
                            type="submit"
                            style={{
                              backgroundColor: '#b54243',
                              color: 'white'
                            }}
                          >
                            Log In
                          </button>

                        </div>

                      </Row>
<Row className="form-group mb-0">
                <Link to="/forgot-password" className="text-muted"><i className="mdi mdi-lock"></i> Forgot your password?</Link>
                
              </Row>
                    </Form>

                  </div>

                </CardBody>

              </Card>
              

              <div className="mt-5 text-center">

                <p>
                  Don't have an account ?
                  <Link to="/register" className="text-primary">
                    Signup Now
                  </Link>
                </p>

                © {new Date().getFullYear()} SpartanX

              </div>

            </Col>

          </Row>

        </Container>

      </div>

    </React.Fragment>
  )
}

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};