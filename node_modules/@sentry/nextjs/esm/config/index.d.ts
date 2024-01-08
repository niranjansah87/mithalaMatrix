import { ExportedNextConfig, NextConfigFunction, NextConfigObject, SentryWebpackPluginOptions } from './types';
/**
 * Add Sentry options to the config to be exported from the user's `next.config.js` file.
 *
 * @param userNextConfig The existing config to be exported prior to adding Sentry
 * @param userSentryWebpackPluginOptions Configuration for SentryWebpackPlugin
 * @returns The modified config to be exported
 */
export declare function withSentryConfig(userNextConfig?: ExportedNextConfig, userSentryWebpackPluginOptions?: Partial<SentryWebpackPluginOptions>): NextConfigFunction | Partial<NextConfigObject>;
//# sourceMappingURL=index.d.ts.map