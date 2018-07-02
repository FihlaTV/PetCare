var uri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/minderzDB";

module.exports = {
	uri : uri
};
