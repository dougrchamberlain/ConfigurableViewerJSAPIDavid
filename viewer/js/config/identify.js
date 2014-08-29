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
					fieldName: 'Account',
					visible: true
				}, {
					fieldName: 'Dept',
					visible: true
				}, {
					fieldName: 'Mkt_Area',
					visible: true
				}, {
					fieldName: 'Zone',
					visible: true
				}, {
					fieldName: 'Nghb',
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