var appModel = {

	locationModel: [

		// angrignon 
		{
			placeId: 'ChIJ1dO3t-MQyUwRfxroO7oF_Gk'
		},
		// monk
		{
			placeId: 'ChIJnakMhfoQyUwRuLJieS3YZw4'
		},
		// jolicoeur
		{
			placeId: 'ChIJlfO3rvUQyUwRELV-FnFwuB4'
		}
	]
};

var geoResultAddress = [];

var ViewModel = function() {
	var self = this;

	var Place = function(data){
    this.name = data.name;
	};
    

	self.stationList = ko.observableArray([]);
	geoResultAddress.forEach(function(placeitem){
      self.stationList.push(new Place(placeitem));
    });
	
	
	
};
window.onload = function(){
	ko.applyBindings(new ViewModel());
};