import { useParams } from 'react-router-dom';

function InvoicesDetail() {
    const params = useParams();

    return (
        <div className="container" >
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="display-4 text-center">Invoices Number: {params.invoicesId}</h1>
                </div>
            </div>
        </div>
    );
}

export default InvoicesDetail;