//
// Moment Manager Assignment Client Script
// Run on domain server to check periodically for new moments
// 
var REQUEST_URL = process.env.AZURE_FUNCTIONS_URL;
var ORIGIN_POINT = { x: 0, y: -10, z: 0 };

var COLORS = {
    DEEP_BLUE: { r: 17, g: 6, b: 89 },
    MID_BLUE: { r: 90, g: 84, b: 132 },
    MID_GREEN: { r: 39, g: 117, b: 84 },
    DEEP_GREEN: { r: 0, g: 88, b: 50 },
    MID_PINK: { r: 126, g: 45, b: 96 },
    DEEP_PINK: { r: 103, g: 0, b: 58 }
};

var ratingMap = {
    1: DEEP_BLUE,
    2: MID_BLUE,
    3: MID_GREEN,
    4: DEEP_GREEN,
    5: DEEP_PINK,
    6: MID_PINK
};

var BASE_PROPERTIES = {
    type: "text",
    text: "placeholder",
    clientOnly: false,
    visible: true,
};

var MOMENTS_BASE_PROPERTIES = {
    type: "text"
};

function getNumberOfMoments() {
    // TODO: Not yet implemented
}

function findPlacementPosition() {
    // TODO: Not yet implemented
    // Starting from the origin point, calculate the number of existing moments and remaining ones to add
    // When a circle is full, create a new concentric circle around the existing moments and structure new moments there
}


