import type { DialogOptions } from '@swimlane/ngx-ui/dialog';
import type { AlertStyle, AlertType } from '@swimlane/ngx-ui/types';

export interface AlertOptions extends DialogOptions {
  readonly type?: AlertType;
  readonly style?: AlertStyle;
  readonly inputs?: DialogOptions['inputs'] & {
    type?: AlertType;
    style?: AlertStyle;
  };
}