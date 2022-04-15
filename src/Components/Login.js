
function Login() {

    return (
        <div className="container" >
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 justify-content-center flex-column">
                    <iframe title="a girl" src="https://assets.pinterest.com/ext/embed.html?id=519602875769910288" height="530" allow="autoplay; encrypted-media" preload="auto" width="300" frameBorder="0" scrolling="no" ></iframe>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <form action="/action_page.php" className="needs-validation border border-dark rounded" noValidate>
                        <h1 className="display-4 text-center">Login</h1>
                        <div className="form-group">
                            <label htmlFor="uname">Username:</label>
                            <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                            <div className="valid-feedback">Valid.</div>
                            <div className="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;