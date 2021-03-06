/**
 * [description]
 *
 * @function Phaser.Math.Angle.BetweenY
 * @since 3.0.0
 *
 * @param {number} x1 - [description]
 * @param {number} y1 - [description]
 * @param {number} x2 - [description]
 * @param {number} y2 - [description]
 *
 * @return {number} [description]
 */
var BetweenY = function (x1, y1, x2, y2)
{
    return Math.atan2(x2 - x1, y2 - y1);
};

module.exports = BetweenY;
