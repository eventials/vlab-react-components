import { PermissionsType } from '../types/permissions';
export interface IConditionalRender {
    permission?: PermissionsType | Array<PermissionsType>;
    condition?: boolean;
    children: any;
}
declare const ConditionalRender: ({ permission, condition, children }: IConditionalRender) => any;
export default ConditionalRender;
