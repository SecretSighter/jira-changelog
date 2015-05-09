/**
 * IssueController
 *
 * @description :: Server-side logic for managing issues
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	testing : function(req, res){
   if (!req.param('id')) {
		res.ok('Sorry, you need to tell us the ID of the FOO you want!');
   }
	}
};
