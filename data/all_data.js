/*
  ___         _      _   _ _ _ _         
 | __|_ _____| |_  _| |_(_) (_) |_ _  _  
 | _|\ V / _ \ | || |  _| | | |  _| || | 
 |___|\_/\___/_|\_,_|\__|_|_|_|\__|\_, | 
                                   |__/  
https://github.com/evoluteur/evolutility-models
*/

module.exports = {

	// - Personal Organizer
	todo: require('./organizer/todo-data'),
	contact: require('./organizer/contact-data'),
	comics: require('./organizer/comics-data'),
	winecellar: require('./organizer/winecellar-data'),
	winetasting: require('./organizer/winetasting-data'),
	restaurant: require('./organizer/restaurant-data'),
	
	// - Music
	album: require('./music/album-data'),
	artist: require('./music/artist-data'),
	track: require('./music/track-data'),

	// - Test
	test: require('./tests/test-data'),

	// - Designer
	world: require('./designer/world-data'),
	object: require('./designer/object-data'),
	field: require('./designer/field-data'),
	group: require('./designer/group-data'),
	collection: require('./designer/collection-data'),
}