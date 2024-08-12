import React from "react";
import styles from "./styles.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const goTolist = () => {
    navigate('/list');
  };
  return (
    <div className={styles.LoginPage}>
      <div className={styles.Bgcolor}>
        <div className={styles.InnerCeneter}>
          <div className="container">
            <div className="row m-4 no-gutters ">
              <div className="col-md-6 d-none d-md-block p-0">
                <img src="images/login-images.png"  className={ `img-fluid ${styles.ImagesRadious}`} />
              </div>
              <div className="col-md-6 bg-white p-5 m-auto">
                <h3 className={`pb-5 ${styles.LoginText}`}>Login </h3>
                <div className="form-style">
                  <form>
                    <div className="form-group pb-3">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group pb-3">
                    <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        
                      </div>
                      <div className={styles.ForgetPassword}> 
                        <a href="#">Forget Password?</a>
                      </div>
                    </div>
                   
                  </form> 
                  
                  <div >
                    <button onClick={goTolist}
                      type="submit" href="list"
                      className={`btn btn-primary w-100 font-weight-bold mt-2 ${styles.LoginBtn}`}
                    >                     
                     Log In 
                    </button>
                  </div>
                  <div className={styles.sideline} >or Continue With</div>
                  <div className={` text-center  ${styles.DontAccount}`}>
                    <div className={styles.SocialIcon}>
                    <FaGoogle />
                    <FaFacebook />
                    <FaApple />

                    </div>
                    Don't have an account? <a href="#">Sign Up here</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
