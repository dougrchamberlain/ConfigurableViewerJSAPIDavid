define([
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin',
	'dojo/text!./InfoPage/templates/InfoPage.html'
	
], 

function(declare, _WidgetBase, _TemplatedMixin, template) {

	return declare([_WidgetBase, _TemplatedMixin], {
		templateString: template,
		//widgetInTemplate: true,
		//postCreate: function(){}
		//this.startup(); 
		}
	});
});