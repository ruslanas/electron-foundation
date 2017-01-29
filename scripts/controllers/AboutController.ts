const electron = require('electron');

export class AboutController {

    private name: string = null;
    private version: string = null;
    private locale: string = null;
    private path: string = null;
    private app: Electron.App = null;

    constructor(
        private $log: ng.ILogService
    ) {
        this.app = electron.remote.app;
        this.name = this.app.getName();
        this.path = this.app.getPath('temp');
        this.version = this.app.getVersion();
        this.locale = this.app.getLocale();
        this.$log.debug('AboutController initialized');
    }
}
