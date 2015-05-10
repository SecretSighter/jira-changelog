/**
* Issue.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name : 'string',
    description: 'string',

    signers: {
      collection: 'signer',
      via: 'issues'
    },

    releasedoc: {
      model: 'releasedoc'
    },

    comments: {
      collection: 'comment',
      via: 'issue'
    },

    attachments: {
      collection: 'attachment',
      via: 'issue'
    },

    jiraid: {
      type: 'STRING',
      required: true,
      primaryKey: true
    }
  }
};
