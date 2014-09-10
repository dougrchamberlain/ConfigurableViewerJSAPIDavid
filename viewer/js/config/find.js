define({
	map: true,
	queries: [
		{
			description: 'Find Account Number or Name',
			url: 'https://ags2.scgov.net/arcgis/rest/services/ScpaInternal/AppraiserWM/MapServer',
			layerIds: [0],
			searchFields: ['ACCOUNT', 'NAME1'],
			minChars: 2
		},
		{
			description: 'Find Subdivision by Name or ID',
			url: 'https://ags2.scgov.net/arcgis/rest/services/ScpaInternal/scpaSubsCondosWM/MapServer',
			layerIds: [0],
			searchFields: ['SUB_NAME', 'MAX_SUB_ID'],
			minChars: 2
		},
		{
			description: 'Find by STCD ',
			url: 'https://ags2.scgov.net/arcgis/rest/services/ScpaInternal/AppraiserWM/MapServer',
			layerIds: [0],
			searchFields: ['Stcd'],
			minChars: 4
		}
	]
});