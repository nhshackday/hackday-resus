import DS from 'ember-data';

var Record = DS.Model.extend({
	time: DS.attr('date'),
	button: DS.belongsTo('button'),
	member: DS.belongsTo('member'),
	userText: DS.attr('string'),
	textSaved: DS.attr('boolean'),
	editingText: DS.attr('boolean'),
	userDeleted: DS.attr('boolean'),
	text: DS.attr('string')
	
	// text: function(){
	// 	return this.get('button.title');
	// }.property('button')
});

Record.reopenClass({
	FIXTURES: []
});

export default Record;