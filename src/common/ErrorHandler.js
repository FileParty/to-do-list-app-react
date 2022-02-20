import { useLocation  } from "react-router-dom";
import { get } from 'lodash';
import ErrorPage from "../views/ErrorPage";

const ErrorHandler = ({ children }) => {
    const location = useLocation();
    console.log(location);
    let errorCode = get(location.state, "errorStatusCode");
    if(errorCode > 400) {
        console.log(errorCode);
        return <ErrorPage errorCode={errorCode} />
    }
    return children;
};

export default ErrorHandler;