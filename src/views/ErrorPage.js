import { Link } from 'react-router-dom';
import '../css/error.scss';

function ErrorPage(props) {

    let errorCode = props.errorCode == null ? 404 : props.errorCode;
    /* If the error code is null, set this value to a 404 error code */

    return(
        <div className="error_page">
            <h1>Sorry... An error occurred on page <br/> Error code is {errorCode}</h1>
            <Link to="/">Back Home</Link>
        </div>
    )
}

export default ErrorPage;