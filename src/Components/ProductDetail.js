import { useParams } from 'react-router-dom';

function ProductDetail() {
    const params = useParams();

    return (
        <div className="container" >
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="display-4 text-center">Product Number: {params.productId}</h1>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;