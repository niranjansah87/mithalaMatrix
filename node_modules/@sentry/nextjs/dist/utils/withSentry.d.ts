import { Transaction } from '@sentry/types';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
export declare type WrappedNextApiHandler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
export declare type AugmentedNextApiResponse = NextApiResponse & {
    __sentryTransaction?: Transaction;
};
export declare const withSentry: (origHandler: NextApiHandler<any>) => WrappedNextApiHandler;
//# sourceMappingURL=withSentry.d.ts.map