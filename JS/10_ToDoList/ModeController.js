class ModeController {
    constructor(modes = []) {
        this.modes = modes;
    }

    getRoutes() {
        return this.modes.map(mode => mode.route);
    }
    getTitles() {
        return this.modes.map(mode => mode.title);
    }

    getModesIds() {
        return this.modes.map(mode => mode.id);
    }

    getMode(title) {
        return this.modes.find(mode => mode.title === title) || [];
    }

    addMode(mode) {
        this.modes.push(mode);
    }
}

module.exports = ModeController;