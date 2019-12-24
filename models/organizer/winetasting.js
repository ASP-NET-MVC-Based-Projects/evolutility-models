/*
  Evolutility Model for Wine Tasting
*/

module.exports = {
	"id": "winetasting",
	"oid": 6,
	"world": "organizer",
	"active": true,
	position: 55,
	"table": "wine_tasting",
	"title": "Wine tastings",
	"name": "wine tasting",
	"namePlural": "wine tastings",
	"label": "Wine Tasting",
	"icon": "wine.gif",
	"titleField": "drink_date",
	noStats: true,
	"fields": [
		{
			"id": "drink_date",
			"column": "drink_date",
			"type": "date",
			"label": "Date",
			"inMany": true,
			"width": 38,
			"required": true
		},
		{
			"id": "wine",
			"object": "winecellar",
			"column": "wine_id",
			"type": "lov",
			"label": "Wine",
			"inMany": true,
			"width": 62,
			"required": true,
			"lovTable": "wine",
			deleteTrigger: true,
		},
		{
			"id": "taste",
			"column": "taste",
			"type": "text",
			"label": "Taste",
			"maxLength": 100,
			"inMany": true,
			"width": 100,
			"inSearch": true,
		},
		{
			"id": "robe",
			"column": "robe",
			"type": "text",
			"label": "Robe",
			"maxLength": 100,
			"inMany": true,
			"width": 100,
			"inSearch": true,
		},
		{
			"id": "nose",
			"column": "nose",
			"type": "text",
			"label": "Nose",
			"maxLength": 100,
			"inMany": true,
			"width": 100,
			"inSearch": true,
		},
		{
			"id": "notes",
			"column": "notes",
			"type": "textmultiline",
			"label": "Note",
			"inMany": true,
			"height": 5,
			"width": 100,
			"inSearch": true,
		}
	],
	"groups": [
		{
			"id": "p1",
			"type": "panel",
			"label": "Degustation",
			"width": 62,
			"fields": [
				"drink_date",
				"wine",
				"notes"
			]
		},
		{
			"id": "p2",
			"type": "panel",
			"label": "Evaluation",
			"width": 38,
			"fields": [
				"taste",
				"robe",
				"nose"
			]
		}
	]
}