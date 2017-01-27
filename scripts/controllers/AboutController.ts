const electron = require('electron');

export class AboutController {

    private name: string = null;
    private version: string = null;
    private locale: string = null;
    private path: string = null;

    constructor(
        private $log: ng.ILogService
    ) {
        let app = electron.remote.app;
        this.name = app.getName();
        this.path = app.getPath('temp');
        this.version = app.getVersion();
        this.locale = app.getLocale();
        this.$log.debug('AboutController initialized');
    }
}
