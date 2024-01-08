import { default as SentryWebpackPlugin } from '@sentry/webpack-plugin';
import { BuildContext, NextConfigObject, SentryWebpackPluginOptions, WebpackConfigFunction } from './types';
export { SentryWebpackPlugin };
/**
 * Construct the function which will be used as the nextjs config's `webpack` value.
 *
 * Sets:
 *   - `devtool`, to ensure high-quality sourcemaps are generated
 *   - `entry`, to include user's sentry config files (where `Sentry.init` is called) in the build
 *   - `plugins`, to add SentryWebpackPlugin (TODO: optional)
 *
 * @param userNextConfig The user's existing nextjs config, as passed to `withSentryConfig`
 * @param userSentryWebpackPluginOptions The user's SentryWebpackPlugin config, as passed to `withSentryConfig`
 * @returns The function to set as the nextjs config's `webpack` value
 */
export declare function constructWebpackConfigFunction(userNextConfig?: Partial<NextConfigObject>, userSentryWebpackPluginOptions?: Partial<SentryWebpackPluginOptions>): WebpackConfigFunction;
/**
 * Search the project directory for a valid user config file for the given platform, allowing for it to be either a
 * TypeScript or JavaScript file.
 *
 * @param projectDir The root directory of the project, where the file should be located
 * @param platform Either "server" or "client", so that we know which file to look for
 * @returns The name of the relevant file. If no file is found, this method throws an error.
 */
export declare function getUserConfigFile(projectDir: string, platform: 'server' | 'client'): string;
/**
 * Combine default and user-provided SentryWebpackPlugin options, accounting for whether we're building server files or
 * client files.
 *
 * @param buildContext Nexjs-provided data about the current build
 * @param userPluginOptions User-provided SentryWebpackPlugin options
 * @returns Final set of combined options
 */
export declare function getWebpackPluginOptions(buildContext: BuildContext, userPluginOptions: Partial<SentryWebpackPluginOptions>): SentryWebpackPluginOptions;
//# sourceMappingURL=webpack.d.ts.map