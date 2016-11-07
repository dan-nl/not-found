'use strict';

/**
 * this middleware needs to be the last “non-error” middleware in the application; it assumes that
 * if the application got here, the requested uri does not exist and generates an error.
 *
 * based on the express application generator
 * @link http://expressjs.com/en/starter/generator.html
 *
 * @param {IncomingMessage} req
 * @param {string} req.path
 *
 * @param {ServerResponse} res
 * @param {Function} next
 *
 * @returns {undefined}
 */
function notFound( req, res, next ) {
  var err = new Error(
    'Not Found. Path, %path, does not exist.'
      .replace( '%path', req.path )
  );

  err.status = 404;
  next( err );
}

module.exports = notFound;
