var base_url = '//mathematicsnycprod-d43f.kxcdn.com/';
var gsjson = require('google-spreadsheet-to-json');
gsjson({
	spreadsheetId: '1GcTSux8-_UcVEkAOb589wdljCG3oszZL85pf3jLBuE8',
	ignoreRow: 1,
	propertyMode: "nospace",
	beautify: 1
}).then(function(result) {
	result.forEach(function(part, index, theArray) {
  		var t = theArray[index] ;
		if(t['front'] !== undefined)
			t['front'] = base_url + t['front'];
		else
			t['front'] = '';
		if(t['top'] !== undefined)
			t['top'] = base_url + t['top'];
		else
			t['top'] = '';
		if(t['isometric'] !== undefined)
			t['isometric']  = base_url + t['isometric'];
		else
			t['isometric'] = '';
		if(t['frontKerning'] === undefined)
			t['frontKerning'] = '';
		if(t['topKerning'] === undefined)
			t['topKerning'] = '';
		if(t['isometricKerning'] === undefined)
			t['isometricKerning'] = '';
		if(t['name'] !== undefined) // delete unused name column
			delete t['name'];
		theArray[index] = t; 
	});
	result = JSON.stringify(result, null, 4 )  
    console.log("window.productData = " + result);
    
})
.catch(function(err) {
    console.log(err.message);
    console.log(err.stack);
});
