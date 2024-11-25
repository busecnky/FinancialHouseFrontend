import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }
    PrivateRoute.propTypes = {
        children: PropTypes.node.isRequired,
    };
    return children;
};
export default PrivateRoute;
