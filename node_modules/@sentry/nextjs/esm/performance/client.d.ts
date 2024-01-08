import { Transaction, TransactionContext } from '@sentry/types';
declare type StartTransactionCb = (context: TransactionContext) => Transaction | undefined;
/**
 * Creates routing instrumention for Next Router. Only supported for
 * client side routing. Works for Next >= 10.
 *
 * Leverages the SingletonRouter from the `next/router` to
 * generate pageload/navigation transactions and parameterize
 * transaction names.
 */
export declare function nextRouterInstrumentation(startTransactionCb: StartTransactionCb, startTransactionOnPageLoad?: boolean, startTransactionOnLocationChange?: boolean): void;
export {};
//# sourceMappingURL=client.d.ts.map