module.exports = {
    _config: {
        chainId: "",
        privateKey: "",
        httpEndpoint: ""
    },
    create: function(config = {}) {
        config = Object.assign(this._config, config);
        return FIBOS({
            chainId: config.chainId,
            keyProvider: config.privateKey,
            httpEndpoint: config.httpEndpoint,
            expireInSeconds: 60,
            broadcast: true,
            verbose: false,
            sign: true
        });
    }
};