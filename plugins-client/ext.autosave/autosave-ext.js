module.exports = function setup(options, imports, register) {
    imports["client-plugins"].register("autosave", __dirname);
    register(null, {
        "ext.autosave": {}
    })
};