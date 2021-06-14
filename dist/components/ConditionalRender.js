import { hasPermission } from '../utils/permissions';
const ConditionalRender = ({ permission, condition, children }) => {
    if (condition || (permission && hasPermission(permission)))
        return children;
    return null;
};
export default ConditionalRender;
