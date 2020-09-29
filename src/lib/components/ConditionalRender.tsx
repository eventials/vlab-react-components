import { PermissionsType } from '../types/permissions';
import { hasPermission } from '../utils/permissions';

export interface IConditionalRender{
    permission?: PermissionsType | Array<PermissionsType>;
    condition?: boolean;
    children: any;
}

const ConditionalRender = ({permission, condition, children}: IConditionalRender) => {

    if(condition || (permission && hasPermission(permission))) return children;
    return null;
}

export default ConditionalRender;