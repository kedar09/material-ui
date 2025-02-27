import * as React from 'react';
import { OverrideProps } from '@mui/types';
import { SxProps } from '../styles/defaultTheme';

export type CardContentSlot = 'root';

export interface CardContentTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * Used to render icon or text elements inside the CardContent if `src` is not set.
     * This can be an element, or just a string.
     */
    children?: React.ReactNode;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps;
  };
  defaultComponent: D;
}

export type CardContentProps<
  D extends React.ElementType = CardContentTypeMap['defaultComponent'],
  P = { component?: React.ElementType },
> = OverrideProps<CardContentTypeMap<P, D>, D>;
