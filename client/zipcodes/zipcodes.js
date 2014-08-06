Session.setDefault('zipCursor', 15000);
Session.setDefault('state', 'PA');
Session.setDefault('zipStart', 15000);
Session.setDefault('zipEnd', 16000);
Template.main.zipcodes = function(){
	var zipList = [];
	 var zips = Zips.find({},{sort:{zip:1}});
	zip = 0;
	zips.forEach(function(i,zip){
		if(i = 0){
			Session.set('zipStart',zip.zip);
		}
	 zip = zip.zip;	
	})
	Session.set('zipEnd',zip);
		return zips ;
}
Template.main.nextText = function(){
	return (Session.get('zipEnd'));
}
Template.main.prevText = function(){
	if(Number(Session.get('zipStart'))){
		return '';
	}
	return (Number(Session.get('zipCursor')) - 20) + " - " + (Number(Session.get('zipCursor'))); 
}
Template.main.events({
	'click .previous':function(evt,tmpl){
		if(Number(Session.get('zipCursor')) > 19){
			Session.set('zipCursor',Number(Session.get('zipCursor')));
		}
	},
	'click .next':function(evt,tmpl){
		Session.set('zipCursor',Number(Session.get('zipEnd')));	
	},
	'change .state':function(evt){
		Session.set('state',evt.target.value);
		Session.set('zipCursor',Number(0));
	}
})
Handlebars.registerHelper('padzip', function(str) {

	    if (str<=99999) { str = ("0000"+str).slice(-5); }
		  return str;
});