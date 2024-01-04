class Mode {
    constructor(title, items = []) {
        this.title = title;
        this.id = title.replace(/\s+/g, '-').replace(/,/g, '').toLowerCase();
        this.route = "/" + this.id;
        this.items = items;
    }
}

module.exports = Mode;