/**
* Releasedoc.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    issues: {
      collection: 'issue',
      via: 'releasedoc'
    },

    systems: {
      collection: 'system',
      via: 'releasedocs'
    }
  }
};
