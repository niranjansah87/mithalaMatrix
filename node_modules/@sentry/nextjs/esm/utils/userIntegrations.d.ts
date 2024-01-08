import { Integration } from '@sentry/types';
export declare type UserFunctionIntegrations = (integrations: Integration[]) => Integration[];
export declare type UserIntegrations = Integration[] | UserFunctionIntegrations;
declare type Options = {
    [integrationName: string]: {
        keyPath: string;
        value: unknown;
    } | undefined;
};
/**
 * Retrieves the patched integrations with the provided integration.
 *
 * The integration must be present in the final user integrations, and they are compared
 * by integration name. If the user has defined one, there's nothing to patch; if not,
 * the provided integration is added.
 *
 * @param integration The integration to patch, if necessary.
 * @param userIntegrations Integrations defined by the user.
 * @param options options to update for a particular integration
 * @returns Final integrations, patched if necessary.
 */
export declare function addIntegration(integration: Integration, userIntegrations: UserIntegrations, options?: Options): UserIntegrations;
export {};
//# sourceMappingURL=userIntegrations.d.ts.map