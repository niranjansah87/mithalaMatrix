Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var webpack_1 = require("./webpack");
/**
 * Add Sentry options to the config to be exported from the user's `next.config.js` file.
 *
 * @param userNextConfig The existing config to be exported prior to adding Sentry
 * @param userSentryWebpackPluginOptions Configuration for SentryWebpackPlugin
 * @returns The modified config to be exported
 */
function withSentryConfig(userNextConfig, userSentryWebpackPluginOptions) {
    if (userNextConfig === void 0) { userNextConfig = {}; }
    if (userSentryWebpackPluginOptions === void 0) { userSentryWebpackPluginOptions = {}; }
    // If the user has passed us a function, we need to return a function, so that we have access to `phase` and
    // `defaults` in order to pass them along to the user's function
    if (typeof userNextConfig === 'function') {
        return function (phase, defaults) {
            var materializedUserNextConfig = userNextConfig(phase, defaults);
            return tslib_1.__assign(tslib_1.__assign({}, materializedUserNextConfig), { webpack: webpack_1.constructWebpackConfigFunction(materializedUserNextConfig, userSentryWebpackPluginOptions) });
        };
    }
    // Otherwise, we can just merge their config with ours and return an object.
    return tslib_1.__assign(tslib_1.__assign({}, userNextConfig), { webpack: webpack_1.constructWebpackConfigFunction(userNextConfig, userSentryWebpackPluginOptions) });
}
exports.withSentryConfig = withSentryConfig;
//# sourceMappingURL=index.js.map