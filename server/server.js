Meteor.publish("cities",function(zipstart,zipend,zipstate){
	return Zips.find({state:zipstate,zip:{$gt:zipstart,$lte:zipend}},{sort:{zip:1}});
})