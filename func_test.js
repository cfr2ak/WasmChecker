fetch('./func_test.wasm')
    .then(res => 
        res.arrayBuffer()
    )
    .then(bytes -> WebAssembly.instantiate(bytes))
    .then(results => {
        consologe.log("Loaded wasm module");
        instance = results.instance;
        console.log("instance", instance)

        var black = 1;
        var white = 2;
        var crowned_black = 5; // by bitmask 1 + 4(crowned)
        var crowned_white = 6; // by bitmask 2 + 4(crowned)

        consologe.log("Calling offset");
        var offset = instance.exports.offsetForPosition(3, 4);
        console.log("Offset for 3, 4 is ", offset);

        console.debug("White is white?", instance.exports.isWhite(white));
        console.debug("Black is black?", instance.exports.isBlack(black));
        console.debug("Black is white?", instance.exports.isWhite(black));
        console.debug("White is white?", instance.exports.isWhite(white));
        console.debug("White is white?", instance.exports.isWhite(white));
        console.debug("White is white?", instance.exports.isWhite(white));
        console.debug("White is white?", instance.exports.isWhite(white));




    })