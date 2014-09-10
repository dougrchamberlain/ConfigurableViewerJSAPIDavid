define({
	map: true,
	mapClickMode: true,
	mapRightClickMenu: true,
	identifyLayerInfos: true,
	identifyTolerance: 5,

	// config object definition:
	//	{<layer id>:{
	//		<sub layer number>:{
	//			<pop-up definition, see link below>
	//			}
	//		},
	//	<layer id>:{
	//		<sub layer number>:{
	//			<pop-up definition, see link below>
	//			}
	//		}
	//	}

	// for details on pop-up definition see: https://developers.arcgis.com/javascript/jshelp/intro_popuptemplate.html

	identifies: {
		// appraiser: {
		// 	0: {
		// 		title: 'parcels',
		// 		fieldInfos: [{
		// 			fieldName: 'ACCOUNT',
		// 			visible: true
		// 		}]
		// 	}
		// },
		parcels: {
			0: {
				title: 'Appraiser Info',
				fieldInfos: [{
					fieldName: 'ID',
					label: 'Account Number',
					visible: true
				}, {
					fieldName: 'Dept',
					label: 'Department',
					visible: true
				}, {
					fieldName: 'Mkt_Area',
					label: 'Market Area',
					visible: true
				}, {
					fieldName: 'Zone',
					label: 'Appraiser Zone',
					visible: true
				}, {
					fieldName: 'Nghb',
					label: 'Neighborhood',
					visible: true
				}, {
					fieldName: 'Land_Val',
					format: { places: 0, digitSeparator: true },
					label: 'Land Value',
					visible: true
				}, {
					fieldName: 'Improvemt',
					format: { places: 0, digitSeparator: true },
					label: 'Improvement Value',
					visible: true
				}, {
					fieldName: 'Just',
					format: { places: 0, digitSeparator: true },
					label: 'Just Value',
					visible: true
				}, {
					fieldName: 'Assessed',
					format: { places: 0, digitSeparator: true },
					label: 'Assessed Value',
					visible: true
				}, {
					fieldName: 'Taxable',
					format: { places: 0, digitSeparator: true },
					label: 'Taxable Value',
					visible: true
				}, {
					fieldName: 'Lsqft',
					label: 'Land SqFt',
					visible: true
				}, {
					fieldName: 'TotalAdjustment',
					label: 'Total Adjustment',
					visible: true
				}, {
					fieldName: 'Sale_Amt',
					label: 'Sales Amount',
					format: { places: 0, digitSeparator: true },
					visible: true
				}, {
					fieldName: 'Sale_Date',
					label: 'Sale Date',
					format: { dateFormat: 'shortDateShortTime' },
					visible: true
				}, {
					fieldName: 'Qual_Code',
					label: 'Qual Code',
					visible: true

				}]
			}//,
			// 8: {
			// 	title: 'Traffic Camera',
			// 	description: '{Description} lasted updated: {Last Update Date}',
			// 	mediaInfos: [{
			// 		title: '',
			// 		caption: '',
			// 		type: 'image',
			// 		value: {
			// 			sourceURL: '{Location URL}',
			// 			linkURL: '{Location URL}'
			// 		}
			// 	}]
			// }
		}
	}
});