Deps.autorun(function(){
	Meteor.subscribe("cities",Session.get('zipStart'),Session.get('zipEnd'),Session.get('state'));
})