
module.exports = function alias (object, aliases) {
    // For each of our aliases, rename our object's keys.
    for (var oldKey in aliases) {
        var newKey = aliases[oldKey];
        if (object[oldKey] !== undefined) {
            object[newKey] = object[oldKey];
            delete object[oldKey];
        }
    }
};