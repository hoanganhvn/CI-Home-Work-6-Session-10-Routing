import { Outlet } from 'react-router-dom';

function Products() {

    return (
        <div className="container" >
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 justify-content-center flex-column">
                    <iframe title="a girl" src="https://assets.pinterest.com/ext/embed.html?id=519602875769873655" height="530" allow="autoplay; encrypted-media" preload="auto" width="300" frameBorder="0" scrolling="no" ></iframe>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top" src="https://www.tomoproject.com/wp-content/uploads/2017/12/TOMOPortfolio1600_PackshotStills_003.jpg" alt="Card imge cap" />
                        <div className="card-body">
                            <h5 className="card-title">Products</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Products;