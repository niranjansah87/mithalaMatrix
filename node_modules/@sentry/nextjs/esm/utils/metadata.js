import { SDK_VERSION } from '@sentry/core';
var PACKAGE_NAME_PREFIX = 'npm:@sentry/';
/**
 * A builder for the SDK metadata in the options for the SDK initialization.
 * @param options sdk options object that gets mutated
 * @param names list of package names
 */
export function buildMetadata(options, names) {
    options._metadata = options._metadata || {};
    options._metadata.sdk =
        options._metadata.sdk ||
            {
                name: 'sentry.javascript.nextjs',
                packages: names.map(function (name) { return ({
                    name: "" + PACKAGE_NAME_PREFIX + name,
                    version: SDK_VERSION,
                }); }),
                version: SDK_VERSION,
            };
}
//# sourceMappingURL=metadata.js.map