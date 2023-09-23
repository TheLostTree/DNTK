//in game map
// positive x is north
// positive z (y) is west


//interactive map
//positive x is east
//positive y is south
let inGamePoint1 = {
    "x": 2663.832,
    "y": -2360.061,
}

let interactivePoint1 = {
    "x": 1610.06103515625,
    "y": -333.83203125,
}
// let inGamePoint2 = {
//     "x": -2395.1575,
//     "y": -4308.702,
// }

// let interactivePoint2 = {
//     "x": 3558.7021484375,
//     "y": 4725.157470703125,
// }

// let [xScale, yScale] = [-0.9999999418665402, -0.9999999996139297 ];
let [xScale, yScale] = [-1, -1];


function transposeInGameToInteractiveMapCoordinates(realX, realY){

    let mapY = (realX - inGamePoint1.x)/xScale + interactivePoint1.y
    let mapX = (realY - inGamePoint1.y)/yScale + interactivePoint1.x
    return {
        "x": mapX,
        "y": mapY
    }

}


function transposeInteractiveMapToInGameCoordinates(mapX, mapY){
    let realY = (mapX - interactivePoint1.x)*xScale + inGamePoint1.y
    let realX = (mapY - interactivePoint1.y)*yScale + inGamePoint1.x

    return {
        x : realX,
        y : realY
    }

}


// let res = transposeInGameToInteractiveMapCoordinates(201.305, 6746.225);

let res = transposeInGameToInteractiveMapCoordinates(-4450.1543, -4162.0215);

//x = -7506.008443545505
//y = 2123.4625753193977


let res2 = transposeInteractiveMapToInGameCoordinates(3412.021484375,
    6780.154296875);
/**
 * x_pos
: 
-759
y_pos
: 
2317
 */

console.log([xScale, yScale]);
/*

{
    "id": 46577,
    "label_id": 388,
    "x_pos": -7506.008443545505,
    "y_pos": 2123.4625753193977,
    "author_name": "抓马特鸡",
    "ctime": "2023-04-12 02:12:22",
    "display_state": 1,
    "area_id": 4,
    "ext_attrs": "{\"2\":48}",
    "z_level": 0,
    "icon_sign": 0
},

46576
maps to 
{
    "motionInfo": {
    "pos": {
        "x": 201.305,
        "y": 253.599,
        "z": 6746.225
    },
    "rot": {
        "y": 327.894
    },
    "speed": {}
},
 */