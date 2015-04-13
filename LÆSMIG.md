Projektet indeholder ikke min MongoDb database (milkDb), da den ligger lokalt på min computer. Der
vil derfor hverken være produkter, kategorier eller ordrer at vise (som udgangspunkt).

Opdatering (13/04/2015)
Jeg har nedenfor indsat de data der lå i min MongoDb på afleveringsdagen

Kategorier:

[
	{
		"category":"Økologisk"
	},
	{
		"category":"24"
	},
	{
		"category":"Laktosefri"
	}
]

Produkter:

[
	{
		"id": "SkuM",
		"name": "Skummetmælk",
		"price": 6,
		"img":"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-skummetmaelk-large.png",
		"category":"Økologisk",
		"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
	},
	{
		"id": "MinM",
		"name": "Minimælk",
		"price": 6.50,
		"img":"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-minimaelk-large.png",
		"category":"24",
		"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
	},
	{
		"id": "LetM",
		"name": "Letmælk",
		"price": 6,
		"img":"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-letmaelk-large.png",
		"category":"24",
		"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
	},
	{
		"id": "SodM",
		"name": "Sødmælk",
		"price": 7,
		"img":"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-soedmaelk-large.png",
		"category":"Laktosefri",
		"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
	},
	{
		"id": "KerM",
		"name": "Kernemælk",
		"price": 8.5,
		"img":"http://www.arla.dk/Global/arladk/produkter/brands/Arla-24/produkter/arla-24-kernemaelk-large.png",
		"category":"Laktosefri",
		"description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
	}
]

Ordre:

[
  {
    "firstname":"Jonas",
    "lastname":"Søballe",
    "address":"Gudrunsvej 99",
    "zip": 8220,
    "city":"Aarhus",
    "email":"Jonas@Søballe.com"
  },
  {
    "firstname":"Klaus",
    "lastname":"Pagh",
    "address":"Damevej 69",
    "zip": 6666,
    "city":"Ungmøborg",
    "email":"Klaus@pagh.com"
  },
  {
    "firstname":"Hussein",
    "lastname":"Obama",
    "address":"Præsidentvej 50",
    "zip": 1000,
    "city":"Washington D.C",
    "email":"Democracy@healthcare.com"
  },
  
]
