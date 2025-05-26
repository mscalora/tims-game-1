// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`200010000502020202020202020202020202020202020202020202020202020202020205050202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020205050202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020205050202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020205050202020202020202020202020202020202020202020202020202020202020505020202020202020202020202020202020202020202020202020202020202050502020202020202020202020202020202020202020202020202020202020205050303030303030303030303030303030303030303030303030303030303030505040404040404040404040404040404040404040404040404040404040404050501010101010101010101010101010101010101010101010101010101010105`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
22222222222222222222222222222222
22222222222222222222222222222222
22222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5,myTiles.tile10,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "Bedrock":
            case "tile1":return tile1;
            case "myTile":
            case "tile7":return tile7;
            case "myTile6":
            case "tile10":return tile10;
            case "myTile4":
            case "tile8":return tile8;
            case "Planks":
            case "tile6":return tile6;
            case "myTile5":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
