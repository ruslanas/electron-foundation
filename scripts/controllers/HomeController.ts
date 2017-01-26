const electron = require('electron');

export class HomeController {
    private title: string = null;
    constructor(
        private $log: ng.ILogService
    ) {
        let app = electron.remote.app;
        this.title = `${app.getName()} ${app.getVersion()}`;
        this.$log.debug('HomeController initialized');
    }
}
