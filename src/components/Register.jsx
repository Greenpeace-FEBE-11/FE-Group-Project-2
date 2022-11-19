const Register = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col text-center">
            <img src="assets/logo.png" alt="logo" width="400rem" />
          </div>
          <div className="col">
            <form id="form">
              <h1 className="text-center">REGISTER</h1>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" id="Uname-regis" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-regis"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password1-regis"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" onclick="logout()">
                  Re-Enter Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password2-regis"
                />
              </div>
              <div className="text-center d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  style="--bs-bg-opacity: .5;"
                  id="btn-regis"
                >
                  Submit
                </button>
                {/* <a href="login.html" className="text-dark"><p>Sudah  punya akun?</p></a> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
