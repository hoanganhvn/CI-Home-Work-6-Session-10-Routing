
function About() {

    return (
        <div className="container" >
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 justify-content-center flex-column">
                    <iframe title="a girl" src="https://assets.pinterest.com/ext/embed.html?id=519602875769838298" height="530" allow="autoplay; encrypted-media" preload="auto" width="300" frameBorder="0" scrolling="no" ></iframe>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="jumbotron">
                        <h1 className="display-4">About</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;