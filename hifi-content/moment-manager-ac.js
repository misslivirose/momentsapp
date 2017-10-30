//
// Moment Manager Assignment Client Script
// Run on domain server to check periodically for new moments
// 
var REQUEST_URL = process.env.AZURE_FUNCTIONS_URL;
var ORIGIN_POINT = { x: 0, y: -10, z: 0 };
var UPDATE_TIMES = { 0:00, 6:00, 12:00, 18:00 } // Check for updates 4x per day

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


