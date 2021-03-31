type AlertMode = 'success' | 'info' | 'danger' | 'warn' | 'default';

export class AlertConfig<D = any> {
    data?: D;
    css?: D;
    mode?: AlertMode
}