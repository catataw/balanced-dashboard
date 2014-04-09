Balanced.FundingInstrumentsIndexController = Balanced.ObjectController.extend(Ember.Evented, Balanced.ResultsTable, {
	needs: ['marketplace', 'activity'],

	sortField: 'created_at',
	sortOrder: 'desc',

	baseClassSelector: "#funding-instruments",
	noDownloadsUri: true,

	type: 'funding_instrument',

	results_base_uri: function() {
		return Balanced.FundingInstrument.create().get('uri');
	}.property(),
});

Balanced.FundingInstrumentsController = Balanced.ObjectController.extend(Ember.Evented, Balanced.ResultsTable, {});