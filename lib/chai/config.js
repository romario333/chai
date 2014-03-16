module.exports = {

  assertion: {
    /*!
     * ### assertion.truncateThreshold
     *
     * User configurable property, sets length threshold for actual and
     * expected values in assertion errors. If this threshold is exceeded,
     * the value is truncated.
     *
     * Set it to zero if you want to disable truncating altogether.
     *
     *     chai.config.assertion.truncateThreshold = 0;  // disable truncating
     *
     * @api public
     */
    truncateThreshold: 40
  }

};