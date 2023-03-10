import { ReactNode } from 'react';

declare function Map({ step, paddingRight, paddingLeft, background, fontColor, children }: {
    step?: number;
    paddingRight?: number;
    paddingLeft?: number;
    background?: string;
    fontColor?: string;
    children: ReactNode[];
}): JSX.Element;

export { Map };
