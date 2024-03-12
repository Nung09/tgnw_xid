const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('t1Frarps3J', uuidlib.v4());
	}

module.exports = generateId
