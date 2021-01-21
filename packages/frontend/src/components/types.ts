import { SerializedStyles } from '@emotion/react';

export type ExtendStyle = {
	styl?: SerializedStyles;
};

export interface IStyleGroup {
	[key: string]: SerializedStyles;
}
