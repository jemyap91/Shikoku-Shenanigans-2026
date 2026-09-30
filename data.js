/* Trip data for the Shikoku road trip page.
   Edit this file to change the plan; app.js renders it. */

const DAYS = [
 {d:2, dow:"Fri", town:"Tokushima", title:"Land at KIX, cross to Shikoku",
  path:"Kansai Airport → Naruto Strait → Tokushima City", km:"~190 km", drive:"~2 h 45", stay:"tokushima",
  items:[
   ["14:35","16:15","Land at KIX, pick up the car","do","Clear customs, grab lunch in the terminal, collect the Toyota at Rinku Town Station Shop. Ask for an ETC card.","Your pickup is booked for 16:30, but the plan has you driving off at 16:15. Either nudge the plan 15 min later or call the shop (072-463-0100) to ask about an early pickup."],
   ["16:15","18:15","Drive to Naruto Strait","drive","~165 km, 2 h. Hanshin Expwy → Kobe-Awaji-Naruto Expwy over Awaji Island and the Onaruto Bridge."],
   ["18:15","19:00","Naruto Park & Senjojiki Observatory","see","Park at Naruto Park Lot No. 1 (~¥420), short walk to the cliffside viewpoint. Skipping Uzu-no-Michi walkway.","Sunset in early October is around 17:45, so you'll arrive after dark. Worth it only if you're fine with night views, otherwise go straight to Tokushima."],
   ["19:00","19:30","Drive to Tokushima City","drive","~25 km, 30 min via Tokushima Expwy."],
   ["19:30","20:00","Mont-bell Tokushima","opt","Quick look at Japan-only outdoor gear. Closes 20:00."],
   ["20:00","","Check in, Tokushima ramen","eat","Dark pork-bone soy broth, stir-fried pork belly, raw egg on top."]
  ],
  food:[["Tokushima food list","https://maps.app.goo.gl/rbgEUXggMoNC4fTh8"]]},

 {d:3, dow:"Sat", town:"Iya Valley", title:"Into the mountains",
  path:"Mt Bizan → Mt Tsurugi → Oku-Iya Vine Bridges → Nagoro → Iya Valley", km:"~110 km", drive:"~3 h 10", stay:"iya",
  items:[
   ["07:45","08:15","Breakfast in Tokushima","eat","At the house or a café downtown."],
   ["08:15","08:35","Drive up Bizan Parkway","drive","~8 km, 20 min. Sharp switchbacks, watch for hikers."],
   ["08:35","09:15","Mt Bizan summit","see","Free summit parking. Observation deck over the city, Yoshino River and Naruto. Shops open 09:00."],
   ["09:15","11:20","Drive to Minokoshi (Tsurugi base)","drive","~76 km, 2 h 05 on Route 438. Narrow and winding near the end."],
   ["11:20","13:45","Mt Tsurugi summit & hut lunch","see","Chairlift to Nishijima (15 min), then 30–45 min boardwalk to the 1,955 m summit. Soba or udon at Chojo Hutte. Chairlift back down.","Buy dinner supplies before you leave Tokushima or at the last shop on Route 438. There's nothing open late in the inner valley."],
   ["13:45","14:15","Drive to Oku-Iya Double Vine Bridges","drive","~17 km, 30 min on Route 439."],
   ["14:15","15:15","Husband & Wife vine bridges","see","¥550 per adult. Loop under 1 km, 30–45 min. Optional riverside trail adds another 30–45 min."],
   ["15:15","15:20","Drive to Nagoro","drive","~3 km, 5 min."],
   ["15:20","16:15","Nagoro Scarecrow Village","see","Free parking. Don't miss the scarecrow classrooms in the old elementary school."],
   ["16:15","17:00","Drive to the valley house","drive","~40 km, 45 min."],
   ["17:00","","Check in, dinner, rest","eat","Eat what you brought in, or a local spot if you arrive early enough."]
  ],
  food:[["Onomiya dinner, Nishi-Iya (Sat 17:00–21:00, call +81 883-87-2013)","https://maps.google.com/?cid=17047889143403398966"],["Udon near Mt Tsurugi","https://maps.app.goo.gl/6UAvXZ3nEZzfkmdq5"],["Filter (Iya Valley)","https://maps.app.goo.gl/gMJsKpWL8BEG98Wx9"],["Near scarecrow village","https://maps.app.goo.gl/KeEfm6vRSwfSwBxLA"],["Possible udon dinner","https://maps.app.goo.gl/z6riFoGFipLYT8eJ7"]]},

 {d:4, dow:"Sun", town:"Kochi", title:"Iya Gorge to the coast",
  path:"Ochiai → Kazurabashi & Biwa Falls → Hinoji → Peeing Boy → Iyaonsen → Oboke → Kochi", km:"~110 km", drive:"~2 h 30", stay:"kochi",
  items:[
   ["08:00","08:30","Breakfast at the house","eat","Bought the day before."],
   ["08:30","09:00","Drive to Ochiai Village Observatory","drive","~15–20 km, 30 min on Route 439."],
   ["09:00","09:20","Ochiai Village viewpoint","see","Free roadside parking with restrooms (80 Higashiiyanakaue, Miyoshi). Stepped hamlet with a 390 m height spread."],
   ["09:20","09:50","Drive to Iya Kazurabashi","drive","~22 km, 30 min toward Nishi-Iya."],
   ["09:50","11:00","Kazurabashi vine bridge, Biwa Falls, early lunch","see","Parking ~¥500 at Yumebutai. Bridge ~¥550, one-way crossing. Grilled ayu or deko-mawashi at the stalls."],
   ["11:00","11:15","Drive to Hinoji Valley","drive","~8 km, 15 min."],
   ["11:15","11:30","Hinoji Valley river bend","see","Viewpoint over the ひ-shaped loop of the Iya River."],
   ["11:30","11:35","Drive to Peeing Boy statue","drive","~2 km, 5 min."],
   ["11:35","11:50","Peeing Boy statue","see","Room for only 1–2 cars. Park down the shoulder if full."],
   ["11:55","13:45","Hotel Iyaonsen day bath","opt","Cable car down 170 m to open-air riverside baths. Pay at the front desk."],
   ["13:45","14:10","Drive to Oboke","drive","~15 km, 25 min."],
   ["14:10","15:45","Oboke & Koboke gorge walks","see","Park at Riverstation West-West, walk the Route 32 concourse (20–30 min). Then drive 5 min to Koboke and walk onto the bridge over the rapids."],
   ["15:45","17:00","Drive to Kochi City","drive","~63 km, 1 h 15 via Kochi Expwy."],
   ["17:00","","Check in, Hirome Market dinner","eat","Katsuo no tataki seared over straw. Grab a table first, then shop the stalls."]
  ],
  food:[["Buckwheat noodles near the Iya house","https://maps.app.goo.gl/harjQ5XY7DQnKXr68"],["Suehiro Otoyo supermarket","https://maps.app.goo.gl/DQZivZBhQJh1NXuw5"],["Kochi food map","https://maps.app.goo.gl/2FeEWTGrEbdZnqFv9"],["Kochi convenience stores","https://maps.app.goo.gl/S9ff3iaT65J5zCAn7"]]},

 {d:5, dow:"Mon", town:"Kochi", title:"Kochi City day",
  path:"Kochi Castle → Hirome Market → Mt Godaisan & Chikurin-ji", km:"~15 km", drive:"~40 min", stay:"kochi",
  items:[
   ["08:30","09:15","Breakfast","eat","Toyoko Inn includes breakfast. Or try a local 'morning service' set at a café."],
   ["09:15","09:30","To Kochi Castle","drive","5–10 min, or walk. Paid parking at the castle park."],
   ["09:30","11:45","Kochi Castle","see","Original keep and palace both survive. Shoes off inside; climb to the top floor."],
   ["11:45","11:50","Walk to Hirome Market","drive","5 min on foot, leave the car at the castle."],
   ["11:50","13:15","Lunch at Hirome Market","eat","Order the tataki shio-style: coarse salt, garlic, green onion."],
   ["13:15","13:30","Drive up Mt Godaisan","drive","~6 km, 15 min. Free summit parking."],
   ["13:30","15:45","Godaisan Park & Chikurin-ji","see","Bay views, then Temple 31 of the 88-temple pilgrimage, its five-story pagoda, treasure hall and garden."],
   ["15:45","16:00","Back downtown","drive","~6 km, 15 min."],
   ["18:30","","Izakaya night","eat","Obiyamachi or Harimayabashi. Try fried utsubo (moray eel) and dry Tosa sake."]
  ],
  food:[["Kochi food map","https://maps.app.goo.gl/2FeEWTGrEbdZnqFv9"],["Convenience stores","https://maps.app.goo.gl/S9ff3iaT65J5zCAn7"]]},

 {d:6, dow:"Tue", town:"Ozu", title:"Niyodo Blue and Uchiko",
  path:"Nikobuchi → Nakatsu Gorge → Uchiko → Ozu", km:"~170 km", drive:"~3 h 15", stay:"ozu",
  items:[
   ["07:15","08:00","Breakfast at Toyoko Inn","eat","Included with your stay."],
   ["08:00","09:15","Drive to Nikobuchi","drive","~55 km, 1 h 15. Route 33 west, then north on Route 194."],
   ["09:15","09:45","Nikobuchi pool","see","Steep metal ladders and ropes down the ravine. Wear proper shoes."],
   ["09:45","10:30","Drive to Nakatsu Gorge","drive","~37 km, 45 min."],
   ["10:30","12:30","Nakatsu Gorge hike","see","2.3 km round trip to Uryu Falls. Free parking by Yuunomori."],
   ["12:30","13:00","Blue Brews taproom","opt","Craft beer brewed with Niyodo spring water.","Google Maps lists Blue Brew as closed on Tuesdays. Use this slot for lunch at CAFE and BEEF karu instead (open until 14:00)."],
   ["13:00","14:30","Drive to Uchiko","drive","~70 km, 1 h 30 via Routes 33 and 379."],
   ["14:30","15:30","Late lunch in Uchiko","eat","Southern-style taimeshi (raw sea bream over rice).","Several Uchiko lunch spots in your notes stop serving at 14:00–14:15. Pick one that runs to 15:00, or eat at a Nakatsu café around 12:30 instead."],
   ["15:30","17:30","Uchiko old town","see","Walk Yokaichi downhill from Kosho-ji, watch candle-making at Omori Warosoku, tour Uchiko-za theatre."],
   ["17:30","17:50","Drive to Ozu","drive","~18 km, 20 min on Route 56."],
   ["17:50","","Check in, imotaki hot pot","eat","Taro, chicken and mountain veg. Ozu's autumn classic."]
  ],
  food:[["Cafe Mephistopheles (Kochi, opens 8)","https://maps.app.goo.gl/gv58RJGiusiSihFE9"],["Echigoya (Nakatsu)","https://maps.app.goo.gl/1uqqeTRJZps3Yn8S8"],["Soba (Uchiko)","https://maps.app.goo.gl/S5uZjWn63bsaift79"],["Bento-style sets 11–15","https://maps.app.goo.gl/pHdYWJiev95q3Qmr9"],["Izakaya (Ozu)","https://maps.app.goo.gl/W8pNRZmnh8VAJyPX9"]]},

 {d:7, dow:"Wed", town:"Matsuyama", title:"Ozu, then the coast road",
  path:"Garyu Sanso → Ozu Castle → Pokopen Yokocho → Shimonada → Matsuyama", km:"~65 km", drive:"~1 h 50", stay:"matsuyama",
  items:[
   ["08:00","08:45","Breakfast in Ozu","eat","Coffee and bread before sightseeing."],
   ["08:45","10:00","Garyu Sanso villa","see","Cliffside villa and garden over the Hiji River. See the Furo-an tea house ceiling."],
   ["10:00","11:30","Ozu Castle","see","Wooden keep rebuilt in 2004 with traditional joinery. Steep ladders inside."],
   ["11:30","12:45","Pokopen Yokocho & Tokyo Love Story postbox","see","Showa-era alley and Omoide Soko, then the red postbox in Hanamachi."],
   ["12:45","13:30","Kira Bakery","eat","Pastries for a light lunch on the go."],
   ["13:30","13:50","Drive to Hijikawa Arashi overlook","drive","~15 km, 20 min toward Nagahama."],
   ["13:50","14:15","Hijikawa Arashi Observation Park","see","View of the Nagahama bascule bridge and the Seto Inland Sea."],
   ["14:15","14:35","Coast road to Shimonada","drive","~17 km on Route 378 (the Yuyake Kobore Line). Pull over at Goshikihama if you like."],
   ["14:35","15:15","Shimonada Station","see","Seaside platform. Iced citrus drink from the coffee trailer, wait for a train."],
   ["15:15","16:00","Drive to Matsuyama","drive","~30 km, 45 min."],
   ["16:00","","Check in, evening in Matsuyama","eat","Keep the car (it's due back 10 Oct). Sort out hotel parking."]
  ],
  food:[["Spot coffee stand","https://maps.app.goo.gl/vEbVNqeMpBR6fsiK8"],["Ozurobata Aburaya","https://maps.app.goo.gl/pjMY1EQRbmbzZLAw7"],["Unagi","https://maps.app.goo.gl/hZBhtZT1aDrruTi26"],["Old confectionery","https://maps.app.goo.gl/AxEvbw7QNpu5voVA6"],["Sushi (dinner)","https://maps.app.goo.gl/u4qPY1XC94ng4By98"],["Katsu","https://maps.app.goo.gl/nvMRi3URgD61Rud19"],["Nabe","https://maps.app.goo.gl/pZtqLfDWfDaJNLkL9"]]},

 {d:8, dow:"Thu", town:"Matsuyama", title:"Castle and Dogo Onsen",
  path:"Matsuyama Castle → Okaido → Dogo Onsen", km:"minimal", drive:"~20 min", stay:"matsuyama",
  items:[
   ["08:15","09:00","Breakfast","eat","Hotel Vista has no breakfast."],
   ["09:00","09:30","To the castle ropeway","drive","Paid parking below the hill, or walk."],
   ["09:30","12:00","Matsuyama Castle","see","Chairlift or ropeway up. Keep, armour exhibits, ramparts with sea views."],
   ["12:00","13:30","Lunch on Okaido arcade","eat","Matsuyama-style taimeshi: whole sea bream cooked with the rice."],
   ["13:30","13:45","To Dogo Onsen","drive","Tram to Dogo Onsen Station is easiest."],
   ["13:45","17:00","Dogo: clock, arcade, bath","see","Botchan Karakuri Clock on the hour, free footbath, Haikara Street, then a soak at Dogo Onsen Honkan."],
   ["17:00","","Early dinner, early night","eat","07:30 start tomorrow for Ishizuchi."]
  ],
  food:[]},

 {d:9, dow:"Fri", town:"Kotohira", title:"Climb Mt Ishizuchi",
  path:"Tsuchigoya trailhead → Misen & Tengudake → Kotohira", km:"~250 km", drive:"~4 h 50", stay:"kotohira",
  items:[
   ["07:30","09:30","Drive to Tsuchigoya","drive","~85 km up the Ishizuchi Skyline.","The Skyline climbs from Omogo Gorge on the Kumakogen side (Route 33 south, then 494), not from Saijo. Also check the Skyline's gate hours, since it closes overnight."],
   ["09:30","","Trailhead prep","do","Free lot by Tsuchigoya Shirasa. Layers, water, snacks, packed lunch."],
   ["09:30","13:30","Ascent to Misen (1,974 m)","see","9.2 km round trip, ~500 m gain. At the junction pick the chains (kusari) or the wooden stair bypass. Lunch at the summit shrine.","Only cross to Tengudake (1,982 m) if it's dry and calm. Skip it in wind or wet."],
   ["13:30","15:30","Descent","see","Back the same way, at the car by 15:30."],
   ["15:30","18:30","Drive to Kotohira","drive","~141 km, 3 h. Down the mountain, then Matsuyama Expwy east."],
   ["18:30","","Check in, Sanuki udon","eat","Try kamaage udon. Then the bath."]
  ],
  food:[]},

 {d:10, dow:"Sat", town:"Rinku", title:"Konpirasan and back to Kansai",
  path:"Kotohira-gu → car return → Rinku Town", km:"~270 km", drive:"~3 h 45", stay:"rinku",
  items:[
   ["07:45","08:30","Breakfast in Kotohira","eat","A local morning set near the station."],
   ["08:30","09:00","Check out, park near the shrine","do","Bags stay in the boot."],
   ["09:00","12:00","Climb Kotohira-gu (Konpirasan)","see","785 steps to the main shrine. Okusha is another 583 if legs allow."],
   ["12:00","13:00","Lunch at the base","eat","Udon or soft-serve with oiri rice puffs."],
   ["13:00","16:30","Drive to Rinku Town","drive","~261 km, 3 h 30.","Your notes say Seto Ohashi Bridge but your map shows the Awaji/Naruto route. Both work. Pick one before you set off."],
   ["16:30","17:30","Refuel and return the car","do","Fill up near the shop, keep the receipt. Return at Rinku Town Station Shop (Seacle 1F).","Return is booked for 17:30 today, leaving just an hour of buffer after a Saturday drive through Kobe. If traffic looks bad, call the shop early."],
   ["17:30","20:00","Rinku Premium Outlets","see","Open until 20:00."],
   ["20:00","","Check in, bayside dinner","eat","Seafood or yakiniku."]
  ],
  food:[]},

 {d:11, dow:"Sun", town:"Home", title:"Last shop, fly home",
  path:"Rinku Premium Outlets → Kansai Airport", km:"no driving", drive:"train", stay:null,
  items:[
   ["10:00","14:30","Outlets & lunch","see","Tax-free shopping, lunch at the food court or Seacle."],
   ["15:45","16:30","Train to KIX","drive","2 min walk to Izumisano Station, 2 stops on the Nankai Airport Line (¥520, ~10 min). The car is already returned."],
   ["16:30","","Check in at KIX","do","Bag drop, security, dinner airside."],
   ["18:25","","Flight home","do","Arrives 00:05 on Mon 12 Oct."]
  ],
  food:[]}
];

const MEALS = {"2|Check in, Tokushima ramen": [{"n": "Menoh, Tokushima Ekimae", "h": "Fri 10:00–24:00", "note": "3 min from the station. Buy tickets at the machine outside.", "id": "ChIJZ77hSGBtUzURgkC5iQyo4wo"}, {"n": "Ramen Todai, Omichi", "h": "Fri 11:00–04:00", "note": "Rich, heavy bowl. Free raw egg and rice.", "id": "ChIJC9-ISaZyUzURQgOGYw7wi6I"}, {"n": "Donoura, Ekimae", "h": "Fri 18:00–22:30", "note": "Sea bream salt ramen, a lighter option.", "id": "ChIJY3zeoqdyUzURFfAtSKSOyRo"}], "3|Breakfast in Tokushima": [{"n": "Coffee-an", "h": "Sat 07:00–16:00", "note": "Old-style kissaten, ¥500 toast sets. Same street as EarthVelo (Saiwaichō).", "id": "ChIJDc0ZomBtUzURHNsMWGAAba4"}, {"n": "O-ba'sh cafe.", "h": "Sat 07:30–17:00", "note": "Brunch plates. Near the station.", "id": "ChIJuykuVKByUzURLcK7TCxPNuU"}], "3|Mt Tsurugi summit & hut lunch": [{"n": "Tsurugisan Chojo Hütte", "h": "Hours not listed on Maps", "note": "Staffed summit lodge; reviewers had quick, cheap lunches.", "id": "ChIJb-Z0-SdIUjURKmU83sFAnxI"}, {"n": "Kasumi no Mine", "h": "Hours not listed on Maps", "note": "Soba near the Minokoshi base, backup if the hut is busy.", "id": "ChIJJQc5DdI3UjURvGHji1Z5Vow"}, {"n": "Kouzanka", "h": "Sat 11:00–15:00", "note": "Soba and set meals on the way to the vine bridges, a late-lunch backup.", "id": "ChIJx6XIQwAxUjUR2XtEaTU4sho"}], "3|Check in, dinner, rest": [{"n": "Onomiya (おのみ家)", "h": "Sat 17:00–21:00", "note": "Best bet. Call ahead for 4: +81 883-87-2013. ~20–25 min drive.", "id": "ChIJAUpVuwUnUjURNkfMMtpEluw"}, {"n": "Yamaya Café & Bar", "h": "Sat 18:00–22:30", "note": "Pizza, karaage. ~40–45 min each way.", "id": "ChIJw0Ranl-IUTURuPUB8fsC2E4"}, {"n": "Taniguchi Shoten (grocery)", "h": "Sat 09:00–19:30", "note": "5 min from the house. Also buy tomorrow's breakfast.", "id": "ChIJT9kLWlgkUjURPlHPMzAhpa4"}, {"n": "Okazaki Shoten (grocery)", "h": "Sat 09:00–19:30", "note": "Near Onomiya.", "id": "ChIJs3lsedMmUjUR8zYRbg1AOfc"}], "4|Breakfast at the house": [{"n": "Taniguchi Shoten (grocery)", "h": "Buy on Sat, until 19:30", "note": "No cafés open early nearby.", "id": "ChIJT9kLWlgkUjURPlHPMzAhpa4"}], "4|Kazurabashi vine bridge, Biwa Falls, early lunch": [{"n": "Yamazato (やま里)", "h": "Hours not listed on Maps", "note": "Roadside stall: salted ayu and deko-mawashi off the charcoal.", "id": "ChIJqTSoXtMmUjURJNhRxE7Sp_I"}, {"n": "Kazurabashitei", "h": "Sun 11:00–15:00", "note": "Soba, udon, curry. Ticket machine has English.", "id": "ChIJObc6JhknUjURYmn5q3NKG4c"}], "4|Check in, Hirome Market dinner": [{"n": "Hirome Market", "h": "Sun 09:00–23:00", "note": "Grab a table first. Busy at dinner.", "id": "ChIJ1w_oDToZTjUR3QutG7QRnZk"}, {"n": "Myojinmaru (in Hirome)", "h": "Sun 11:00–20:00", "note": "The straw-seared tataki stall. Closes earlier on Sundays.", "id": "ChIJ1w_oDToZTjUR80sK_Yxpgwk"}], "5|Breakfast": [{"n": "Toyoko Inn Kochi", "h": "Included", "note": "Free breakfast with your booking.", "id": "ChIJN9olGwAZTjUR0TdrLPw7wY4"}, {"n": "Mephistopheles", "h": "Mon 09:00–21:00", "note": "Beautiful old café, breakfast sets ~¥620.", "id": "ChIJ-4iONzoZTjURtCOyuknMyrY"}], "5|Lunch at Hirome Market": [{"n": "Myojinmaru (in Hirome)", "h": "Mon 11:00–21:00", "note": "Order tataki shio-style.", "id": "ChIJ1w_oDToZTjUR80sK_Yxpgwk"}, {"n": "Hirome Market", "h": "Mon 10:00–23:00", "note": "", "id": "ChIJ1w_oDToZTjUR3QutG7QRnZk"}], "5|Izakaya night": [{"n": "Myojinmaru Hanare", "h": "Mon 17:00–23:00", "note": "Sit-down sister of the Hirome stall; you can sear your own katsuo. Closed Tue/Wed, so Monday works.", "id": "ChIJ3Qow1AgZTjURhk24HOAhI7g"}, {"n": "Hanasa", "h": "Mon 18:00–22:30", "note": "Top-rated, 20 seats. Book now; same-day is near impossible.", "id": "ChIJFY4WGTcZTjURwPLmbY8rjnA"}, {"n": "Sake to Sakana Zakuro (座くろ)", "h": "Mon 17:30–23:30", "note": "Local fish, all-you-can-drink course. Reserve.", "id": "ChIJy3QVGTcZTjURfUCdQD-0lDk"}, {"n": "Imoya (いも家)", "h": "Mon 18:00–23:00", "note": "Tiny local spot, may turn away first-timers when full.", "id": "ChIJjSOvGzcZTjURjODA1sdIO5U"}], "6|Breakfast at Toyoko Inn": [{"n": "Toyoko Inn Kochi", "h": "Included", "note": "Your 08:00 start is too early for Mephistopheles: it opens 09:00 on weekdays (08:00 only Sat/Sun).", "id": "ChIJN9olGwAZTjUR0TdrLPw7wY4"}], "6|Blue Brews taproom": [{"n": "Blue Brew by Mukai Craft Brewing", "h": "Closed Tuesdays", "note": "Open Mon, Thu, Fri, Sun 12:00–18:00 only.", "id": "ChIJQfwNYaHLTzURD52FDhk4wMk"}, {"n": "CAFE and BEEF karu", "h": "Tue 11:00–14:00", "note": "Riverside Tosa wagyu bowls on Route 33, near Nakatsu. Good lunch instead of waiting until Uchiko.", "id": "ChIJFcxBJrrNTzUR8jbyeaKz_NU"}, {"n": "Ponte (Yunomori)", "h": "Closed Tuesdays", "note": "The restaurant at the gorge entrance.", "id": "ChIJgzkkkVPKTzURU7w6j7-p-ws"}], "6|Late lunch in Uchiko": [{"n": "Restaurant KaRaRi", "h": "Tue 11:00–15:00", "note": "At Uchiko Fresh Park Karari. Salad buffet, udon, pasta.", "id": "ChIJ1_1lIrCFTzUREgf2Mwn0GNk"}, {"n": "Kinmokuse.Naze Cafe", "h": "Tue 10:00–18:00", "note": "Curry sets, in the town centre by Machi no Eki Naze.", "id": "ChIJuU-mpv-FTzURsIdsj58mjeE"}, {"n": "Yamachaka (山茶花)", "h": "Tue 11:00–15:00", "note": "Thick udon and big tempura, in Ikazaki (south of town).", "id": "ChIJBUVEQQ2FTzURoIfNhsoxXos"}, {"n": "Yoshoku Mother", "h": "Tue 11:30–14:00", "note": "Great hamburg steak, but last lunch is 14:00.", "id": "ChIJx_zDDbSFTzURfJOaIFCSmXQ"}], "6|Check in, imotaki hot pot": [{"n": "Tarui", "h": "Tue 17:00–20:30", "note": "Serves imotaki. Near the castle.", "id": "ChIJpyT8Ndp_RTURoI_piMXhlZ8"}, {"n": "Amimoto", "h": "Tue 17:00–22:00", "note": "Family-run, rated 4.8. Taimeshi and fish sets.", "id": "ChIJp2mJtd5_RTURFgWvWJBpzto"}, {"n": "Ozurobata Aburaya", "h": "Tue 17:30–22:00", "note": "Robatayaki, food passed on a wooden paddle.", "id": "ChIJjY8jXNl_RTURhiY2z6hQALA"}], "7|Breakfast in Ozu": [{"n": "Pan Kojo Kisa (bakery)", "h": "Wed 08:00–19:30", "note": "Cheap, excellent small breads by Iyo-Ozu Station.", "id": "ChIJVVWIk9N_RTURQc3H6_Q-jaM"}], "7|Kira Bakery": [{"n": "Kira Bakery", "h": "Not found on Google Maps", "note": "Couldn't match this name in Ozu. Double-check the link in your notes.", "id": ""}, {"n": "Pan Kojo Kisa", "h": "Wed 08:00–19:30", "note": "Backup bakery by the station.", "id": "ChIJVVWIk9N_RTURQc3H6_Q-jaM"}, {"n": "Ozurobata Aburaya", "h": "Wed 11:30–14:00", "note": "Sit-down lunch option (in your notes).", "id": "ChIJjY8jXNl_RTURhiY2z6hQALA"}, {"n": "Amimoto", "h": "Wed 11:00–13:30", "note": "Taimeshi lunch.", "id": "ChIJp2mJtd5_RTURFgWvWJBpzto"}], "7|Shimonada Station": [{"n": "Shimonada Coffee", "h": "Wed 12:00–18:00", "note": "Mikan juice and hand-drip coffee by the platform.", "id": "ChIJz_sw3amJTzURR59Riveg5DY"}], "7|Check in, evening in Matsuyama": [{"n": "Taimeshi Motoyama 3rd store", "h": "Wed 11:00–21:00", "note": "Uwajima-style (raw) taimeshi, usually shorter queue.", "id": "ChIJy8bwAo3lTzURV0Enmfs_gis"}, {"n": "Kadoya (ANA Crowne Plaza)", "h": "Wed 17:00–21:30", "note": "Classic taimeshi, next to your hotel.", "id": "ChIJjcXPFuzlTzURhZUDTAZnmLI"}, {"n": "Toriichizu Okaido", "h": "Wed 17:00–05:00", "note": "Cheap, lively chicken izakaya.", "id": "ChIJWQWzOQDlTzURVSmWkpEc0AE"}], "8|Breakfast": [{"n": "More", "h": "Thu 08:00–20:00", "note": "Toasted sandwiches, good coffee.", "id": "ChIJFSyNhYXlTzURX_CEGj0Gkpw"}, {"n": "Coffee Stand Solashito", "h": "Thu 08:00–19:00", "note": "Near Matsuyama Station.", "id": "ChIJV_VCx1jlTzUR_NN65z16MHE"}, {"n": "Biltmore Coffee", "h": "Closed Thursdays", "note": "From your notes; only open Mon, Sat, Sun.", "id": "ChIJbU_a6f3lTzURD-vVgAR3iBU"}], "8|Lunch on Okaido arcade": [{"n": "Akiyoshi Main Store", "h": "Thu 11:00–14:30", "note": "Matsuyama-style (cooked) taimeshi, the one this plan describes. Expect a queue.", "id": "ChIJ1by04-vlTzURGKVnBOtDYso"}, {"n": "Aigoya (愛ご屋)", "h": "Thu 11:00–15:00", "note": "13 seats, rated 4.9. Taimeshi and rare aigo fish.", "id": "ChIJp2XVawDlTzUR1dcuwqC-qVA"}, {"n": "Motoyama", "h": "Thu 11:00–19:30", "note": "Popular taimeshi; adds a 10% service fee on holidays.", "id": "ChIJUUjToGXlTzURCrztMUDPwX4"}], "8|Early dinner, early night": [{"n": "Dogo Tempura Goten", "h": "Thu 11:00–21:00", "note": "Rated 4.9, next to the bathhouse.", "id": "ChIJJfP_a4bnTzURNsuTNIydDzo"}, {"n": "Dogo Uotake", "h": "Thu 17:00–22:00", "note": "Affordable local seafood.", "id": "ChIJk3Gvg3jmTzURGiYi87PaQrk"}, {"n": "Doramomiji Red", "h": "Thu 18:00–22:00", "note": "Set menus, imotaki. Reserve.", "id": "ChIJldngDRvnTzUR3Eu4tPtoSMs"}], "9|Trailhead prep": [{"n": "Convenience store in Matsuyama", "h": "Before 07:30", "note": "Hotel has no breakfast and cafés open ~08:00. Buy breakfast and a packed lunch the night before.", "id": ""}], "9|Check in, Sanuki udon": [{"n": "Musashi", "h": "Fri 17:00–20:00", "note": "Curry udon. Stops taking orders ~50 min before closing, so aim to arrive by 19:00.", "id": "ChIJDb5QcVjWUzURL56CfiTR894"}, {"n": "Hidamari Shokudo", "h": "Fri 18:00–23:00", "note": "New set-meal izakaya, only 6 tables/seats. Local seafood.", "id": "ChIJsVbiH_vXUzURJnmLLSe4MzE"}, {"n": "Cafe Mori to Yama", "h": "Fri 08:00–22:00", "note": "Pizza, steak; the late-night fallback.", "id": "ChIJnTzpquvXUzURGmG15uCIQfs"}, {"n": "Hemp Heart", "h": "Fri 12:00–20:00", "note": "Curry, one-man kitchen.", "id": "ChIJRYFleZjXUzUR9_MM97l8DeI"}], "10|Breakfast in Kotohira": [{"n": "Papillon (パピヨン)", "h": "Sat 08:00–12:00", "note": "¥500 local breakfast, right by the machiya.", "id": "ChIJ1f0Ha1vWUzURC5UCeQf7uLk"}, {"n": "Cafe Mori to Yama", "h": "Sat 08:00–22:00", "note": "", "id": "ChIJnTzpquvXUzURGmG15uCIQfs"}, {"n": "La cachette de mémé", "h": "Sat 09:00–17:00", "note": "¥550 breakfast in a garden café.", "id": "ChIJv6DZs-jXUzUREXu5Zx-7OW8"}], "10|Lunch at the base": [{"n": "Nakano Udon Gakko", "h": "Sat 09:30–16:30", "note": "Udon, or join a noodle-making class.", "id": "ChIJF4X5vmfXUzUR0Fxa7s5N32U"}, {"n": "Udon Yoshida-ya", "h": "Sat 09:00–16:00", "note": "Closest udon to the shrine steps.", "id": "ChIJGfZqLgDXUzURUq8OmOxo1lc"}, {"n": "Tsurudaya", "h": "Sat 09:00–17:00", "note": "Sudachi udon, tucked down stairs off the approach.", "id": "ChIJm7aFSmjWUzURhe8lSrTNuxY"}, {"n": "Udon Inoue", "h": "Sat 10:00–14:00", "note": "Tiny old-style shop down an alley, cash only.", "id": "ChIJbXMaflvWUzURl_FnQORdUDw"}], "10|Check in, bayside dinner": [{"n": "Mametora (Outlets 2F)", "h": "Sat 11:00–21:00", "note": "Tempura and udon. Eat before the outlets close.", "id": "ChIJaxWkbPy3AGARxFPC-9Y_60k"}, {"n": "IKI-IKI Sushi (Outlets 2F)", "h": "Sat 11:00–20:00", "note": "Conveyor-belt sushi.", "id": "ChIJgbCTDQC3AGARfd7RPE5o9nc"}], "11|Outlets & lunch": [{"n": "Rinku Food Park", "h": "Sun 10:00–20:00", "note": "Big food hall.", "id": "ChIJXRfP_xG3AGARGQl_ABEuPhQ"}, {"n": "World Gourmet Junction", "h": "Sun 11:00–20:00", "note": "Food court inside the outlets.", "id": "ChIJaxWkbPy3AGARbTHeU0lcAeg"}, {"n": "Mametora", "h": "Sun 11:00–21:00", "note": "Sit-down tempura.", "id": "ChIJaxWkbPy3AGARxFPC-9Y_60k"}]};

const SHOPS = {"2|Mont-bell Tokushima": [{"n": "mont-bell Tokushima", "h": "Fri 10:00–20:00", "note": "In Ōjin, ~15 min north of the centre, not downtown. Large store with Tokushima/Shikoku-only tees (Awa Odori designs). Tight on arrival: go straight from Naruto.", "id": "ChIJKzO_18JzUzURzTolfokUfxQ", "tag": "Mont-bell"}], "4|Drive to Kochi City": [{"n": "Montbell Outdoor Village Motoyama", "h": "Sun 09:00–20:00", "note": "Optional ~15 min detour off the Kochi Expwy near Ōtoyo. Closed Wednesdays.", "id": "ChIJk9KX9ErlUTURsnhytg_HtkM", "tag": "Mont-bell"}, {"n": "Waki Seichaba (脇製茶場), Shingu", "h": "Sun 09:00–17:00", "note": "The one real Shikoku matcha stop. Pesticide-free Shingu tea; the shop sells powdered matcha alongside sencha, with free tastings. Detour: Otoyo IC → Shingu IC (~40 min from Oboke), then back down the Kochi Expwy. Adds ~1 h 15 incl. the stop, so leave Oboke by 15:30.", "id": "ChIJVUQqPXyNUTURxIfS26KfH5Q", "tag": "Matcha"}, {"n": "Kirinomori (霧の森), Shingu", "h": "Sun 10:00–17:00", "note": "1 km away. Tea-tasting corner and the famous matcha daifuku made with Shingu kabuse matcha. Closed Mondays.", "id": "ChIJj4WiooGNUTURhOMkuo0UZho", "tag": "Matcha"}], "7|Check in, evening in Matsuyama": [{"n": "Mont-bell Matsuyama", "h": "Wed 10:00–20:00", "note": "Best Mont-bell stop: big store, Shikoku Henro special-edition items, free parking. You have ~4 h after arriving.", "id": "ChIJ5cutYnPvTzURaov-hdKL4CM", "tag": "Mont-bell"}, {"n": "EDION Matsuyama", "h": "Wed 10:00–20:00", "note": "Backup for the Fitbit Air. Call first to check stock: +81 89-933-2311.", "id": "ChIJZcGfpVvvTzURj18r7FWEf5E", "tag": "Fitbit"}, {"n": "Ocha no Shibataen (お茶の柴田園)", "h": "Wed 10:00–18:00", "note": "Tea and tea-ceremony supplies specialist, 3 min from Matsuyama City Station. Good for Ehime tea and utensils; ask what matcha they stock (抹茶).", "id": "ChIJ00fLoozlTzURudWp_DhoSmI", "tag": "Matcha"}], "10|Rinku Premium Outlets": [{"n": "Yamada Denki Tecc.Land Osaka Rinku", "h": "Sat 10:00–21:00", "note": "Best bet for the Fitbit Air. Next to the outlets, tax-free counter, reviewers say prices beat other stores.", "id": "ChIJh1lg4v23AGARAXv6piyszIk", "tag": "Fitbit"}, {"n": "Super Center TRIAL Rinku-Town", "h": "Open 24 hours", "note": "Cheap cooking-grade matcha powder. Tax-free over ¥5,500.", "id": "ChIJxxSR0gHIAGARYB4XVN2mnrg", "tag": "Matcha"}], "11|Check in at KIX": [{"n": "Fukujuen, KIX Terminal 1", "h": "Daily 06:30–00:55", "note": "Best bet for matcha: Kyoto Uji tea house, tastings, airport-exclusive sets. Airside after security in T1, so check your flight leaves from T1.", "id": "ChIJkzdJaem5AGARGuRMkgOBgMk", "tag": "Matcha"}], "4|Check in, Hirome Market dinner": [{"n": "Tosa-cha Morikisuikoen", "h": "Sun 11:00–19:30", "note": "Family tea shop right beside Hirome. Owner roasts his own light hojicha; takeaway matcha, tastings. Closed Wednesdays.", "id": "ChIJg2MfIzoZTjURziLterydDKI", "tag": "Matcha"}], "5|Kochi Castle": [{"n": "Chaho Wakakusaen (茶舗 若草園)", "h": "Mon 10:00–18:00", "note": "Best matcha in Kochi: café at the back serves matcha sets, plus tea caddies and handmade tea bowls. 10 min walk from the castle. Closed Wednesdays.", "id": "ChIJJZAbRyMZTjURVHYO3-803hg", "tag": "Matcha"}], "5|Lunch at Hirome Market": [{"n": "Tosa-cha Morikisuikoen", "h": "Mon 11:00–19:30", "note": "If you missed it Sunday. Try the house-roasted Tosa hojicha.", "id": "ChIJg2MfIzoZTjURziLterydDKI", "tag": "Matcha"}], "6|Blue Brews taproom": [], "6|Nakatsu Gorge hike": [{"n": "Ikegawa Cha-en Cafe", "h": "Closed Tuesdays", "note": "Tea farm café on your route in Doi, famous for tea sweets. Unfortunately shut on 6 Oct.", "id": "ChIJOc2IY8jMTzURsG6TjItqj-k", "tag": "Matcha"}], "8|Lunch on Okaido arcade": [{"n": "Kirinomori Kashikobo, Matsuyama", "h": "Thu 09:30–17:30", "note": "City branch of the Shingu confectioner. Matcha daifuku made with Shingu matcha, a fallback if you skip the Shingu detour.", "id": "ChIJGUq2COzlTzURqyE110GEY-k", "tag": "Matcha"}], "10|Lunch at the base": [{"n": "Takase no Chanoki (高瀬の茶の木)", "h": "Sat 09:00–18:00", "note": "Kagawa's main tea district, ~25 min west. Tastings and friendly advice; mostly sencha. Optional, adds ~1 h before the long drive.", "id": "ChIJCxU2a9F-UTURYZLJAmxjhDg", "tag": "Matcha"}]};

const WEATHER = {"2": {"i": "⛅", "c": "Sunny spells, some cloud", "hi": 26, "lo": 19, "r": 40, "w": "Tokushima", "n": "Pleasant arrival day. Osaka side looks sunny."}, "3": {"i": "⛅", "c": "Mostly sunny", "hi": 25, "lo": 18, "r": 30, "w": "Tokushima / Kochi", "n": "Good day for Mt Tsurugi. The 1,955 m summit runs roughly 12 °C cooler than the lowlands (my estimate), so expect low teens and wind: bring the fleece."}, "4": {"i": "🌧", "c": "Cloudy, rain later", "hi": 25, "lo": 18, "r": 80, "w": "Kochi (Tokushima 90%)", "n": "Wettest day of the trip. Vine-bridge planks get slippery, so do Kazurabashi early and wear grippy shoes. Iyaonsen's riverside bath is a good rainy-day stop; Oboke walks and the Shingu detour are the easiest things to cut."}, "5": {"i": "⛅", "c": "Cloudy with sunny breaks", "hi": 27, "lo": 20, "r": 40, "w": "Kochi", "n": "Possible lingering showers. Keep an umbrella for Godaisan."}, "6": {"i": "⛅", "c": "Sunny with some cloud", "hi": 28, "lo": 20, "r": 40, "w": "Kochi → Ozu (Matsuyama 20%)", "n": "Rivers may run a little cloudier after Sunday's rain, which can dull the Niyodo blue."}, "7": {"i": "☀️", "c": "Sunny", "hi": 26, "lo": 18, "r": 10, "w": "Matsuyama", "n": "Clear day for the coast road and Shimonada Station."}, "8": {"i": "☀️", "c": "Sunny", "hi": 25, "lo": 17, "r": 20, "w": "Matsuyama", "n": ""}, "9": {"i": "⛅", "c": "Sunny, some cloud", "hi": 26, "lo": 16, "r": 40, "w": "Matsuyama (Takamatsu 10%)", "n": "Looks OK for Ishizuchi, but recheck the night before. At ~1,980 m expect roughly 12 °C cooler than town (my estimate), colder with wind on the ridge. Skip the chains and Tengudake if it's wet."}, "10": {"i": "☀️", "c": "Sunny", "hi": 26, "lo": 17, "r": 20, "w": "Takamatsu (Osaka 40%)", "n": ""}, "11": {"i": "☀️", "c": "Sunny", "hi": 26, "lo": 16, "r": 20, "w": "Osaka", "n": "Low-confidence forecast this far out."}};

const STAYS = {
 tokushima:{addr:"3-101 Saiwaichō, Tokushima 770-0847", tel:"+81 90-8695-5060", verify:"Matched to Earth Velo Nakasu Ichiba. Check it matches your booking.", name:"EarthVelo", place:"Tokushima", nights:"Fri 2 Oct, 1 night", style:"Entire house", jpy:"¥29,568", sgd:239.35, payer:"Ben", pax:"4 pax", status:"ok"},
 iya:{addr:"69 Higashiiya Ochiai, Miyoshi, Tokushima", tel:"", verify:"", name:"Inner Valley House (Airbnb)", place:"Iya Valley", nights:"Sat 3 Oct, 1 night", style:"Entire mountain house", jpy:"", sgd:292.09, payer:"Jem", pax:"booked for 3", status:"check"},
 kochi:{addr:"2-1-13 Honmachi, Kochi 780-0870", tel:"+81 88-821-0345", verify:"Kochi has more than one Toyoko Inn. Check this matches your booking.", name:"Toyoko Inn Kochi", place:"Kochi City", nights:"Sun 4 – Mon 5 Oct, 2 nights", style:"3 double rooms, breakfast included", jpy:"¥42,382", sgd:351.65, payer:"Cheese", pax:"booked for 3", status:"todo"},
 ozu:{addr:"", tel:"", verify:"Airbnb address not in the doc. Copy it from the Airbnb app.", name:"Ozu Heritage Stay (Airbnb)", place:"Ozu", nights:"Tue 6 Oct, 1 night", style:"Entire traditional house", jpy:"", sgd:320.73, payer:"Jem", pax:"4 pax", status:"ok"},
 matsuyama:{addr:"3-3-5 Ichibanchō, Matsuyama, Ehime 790-0001", tel:"+81 89-934-0202", verify:"", name:"Hotel Vista Matsuyama", place:"Matsuyama", nights:"Wed 7 – Thu 8 Oct, 2 nights", style:"3 single rooms, no breakfast", jpy:"¥48,990", sgd:406.48, payer:"Cheese", pax:"booked for 3", status:"todo"},
 kotohira:{addr:"852-4 Enai, Kotohira, Kagawa 766-0004", tel:"+81 877-85-3533", verify:"Konpira Machiya has more than one house. Check the address in your booking.", name:"Konpira Machiya", place:"Kotohira", nights:"Fri 9 Oct, 1 night", style:"Entire machiya townhouse", jpy:"¥36,000", sgd:292, payer:"Ben", pax:"4 pax", status:"ok"},
 rinku:{addr:"5-3 Wakamiyachō, Izumisano, Osaka 598-0055", tel:"+81 72-489-6020", verify:"", name:"R Hotel Kansai Airport", place:"Rinku Town", nights:"Sat 10 Oct, 1 night", style:"4 single rooms", jpy:"¥28,778", sgd:230, payer:"Ben", pax:"4 pax", status:"ok"}
};

const DEFAULT_TODO = [
 ["Add a 4th room at Toyoko Inn Kochi and top up","Cheese"],
 ["Add a 4th room at Hotel Vista Matsuyama and top up","Cheese"],
 ["Confirm the Iya Airbnb is set for 4 guests","Jem"],
 ["International Driving Permit valid","All drivers"],
 ["Physical driver's licence","All drivers"],
 ["Passport","Everyone"],
 ["Physical credit card in the primary driver's name","Primary driver"],
 ["Toyota reservation no. saved offline (99909430100)","Everyone"],
 ["Ask for an ETC card at pickup","At pickup"],
 ["Decide: pick up at 16:30 as booked, or ask for 16:15","Group"],
 ["Buy Oct 3 dinner supplies before entering the valley","Group"],
 ["Yen cash for bridges, parking and market stalls","Everyone"],
 ["Hiking shoes, rain shell, warm layer for Tsurugi and Ishizuchi","Everyone"],
 ["Check Ishizuchi Skyline gate hours","Group"],
 ["Sort parking at Hotel Vista Matsuyama (2 nights)","Cheese"]
];

/* Getting from Kansai Airport to the car rental shop: [step title, detail] */
const CAR_DIRECTIONS = [
 ["Walk to Kansai Airport Station","Follow the train signs from Terminal 1 arrivals (a few minutes). From Terminal 2, take the free shuttle bus to Terminal 1 first."],
 ["Ride one stop to Rinku Town (りんくうタウン)","Nankai Airport Line (every ~15 min, all trains incl. Rapi:t stop) or JR Kansai Airport Line (every ~20 min). About 6 min, a few hundred yen; IC cards (ICOCA, Suica) work. Board towards Namba / Tennoji, away from the airport."],
 ["Leave by Exit 2 (2番出口)","The shop is about a minute's walk, on the 1F of Rinku Pleasure Town Seacle, the mall with the big Ferris wheel."],
 ["At the counter","Show passports, physical licences and IDPs for every driver, plus the main driver's physical credit card. Ask for an ETC card for tolls."]
];
const CAR_TIMING = "You land 14:35. Allow 45–60 min for immigration, bags and customs, then ~20 min to the shop, so you'll arrive around 15:45–16:00. Pickup is booked for 16:30: call the shop to ask about collecting early. Shop hours 08:00–20:00 daily; no airport shuttle.";

/* Places to fetch live weather for, per day of October: [name, lat, lon] */
const WX_SPOTS = {
 2:[["Tokushima",34.07,134.55]],
 3:[["Iya Valley",33.87,133.83],["Mt Tsurugi summit",33.854,134.094]],
 4:[["Iya Gorge",33.88,133.76],["Kochi",33.56,133.53]],
 5:[["Kochi",33.56,133.53]],
 6:[["Niyodo River",33.55,133.13],["Ozu",33.51,132.54]],
 7:[["Matsuyama",33.84,132.77]],
 8:[["Matsuyama",33.84,132.77]],
 9:[["Mt Ishizuchi summit",33.768,133.115],["Kotohira",34.19,133.82]],
 10:[["Kotohira",34.19,133.82],["Rinku",34.41,135.30]],
 11:[["Rinku",34.41,135.30]]
};

/* Expenses sheet the Money tab reads (must be shared as "Anyone with the link can view") */
const SHEET_ID = "1onBN9bL7FD7nDCSwgh7FLyzwicHGUzXBRr-NDgy3sls";

/* Packing: [category, [[item, note, quantity], ...]]. Quantities are per person unless marked "· group" or "· car". */
const PACK_DEFAULT = [
 ["Documents & money",[
  ["Passport","Needed for car pickup and every tax-free purchase","1"],
  ["Physical driver's licence + International Driving Permit","All drivers","1 each"],
  ["Physical credit card in the primary driver's name","For the rental deposit","1"],
  ["Yen cash + coin purse","Vine bridges, parking, rural shops and udon places are often cash only","1 purse"],
  ["Toyota reservation no. saved offline","99909430100"],
  ["Travel insurance details","Covering driving and hiking","1"]]],
 ["Clothes for October",[
  ["Underwear","","7"],
  ["T-shirts / quick-dry tops","Lowlands are mild, roughly low-to-mid 20s °C","6"],
  ["Warm mid-layer (fleece or light down)","Tsurugi (1,955 m) and Ishizuchi (1,982 m) summits can be near single digits and windy","1"],
  ["Waterproof shell jacket","Mountain weather changes fast; early October can still bring rain","1"],
  ["Hiking pants or shorts + a pair of long pants","","2 + 1"],
  ["Clean socks without holes","Shoes come off at Kochi Castle, Ozu Castle, Matsuyama Castle and some restaurants","7 pairs"],
  ["Something smart-casual for dinners","","1 outfit"],
  ["Sleepwear","","2"]]],
 ["Shoes",[
  ["Hiking shoes with good grip","Ishizuchi chains, Nikobuchi ladders, wet stones at Nakatsu Gorge","1 pair"],
  ["Slip-on shoes or sandals","Easy on/off at castles, onsen and ryokan","1 pair"]]],
 ["Hiking day kit",[
  ["Daypack (15–25 L)","","1"],
  ["Grippy gloves","For the Ishizuchi kusari chains","1 pair"],
  ["Water bottle (1 L+) and snacks","Few shops up the mountains","1 bottle"],
  ["Sunscreen, sunglasses and a cap","","1 each"],
  ["Headlamp or small torch","Dark narrow roads in Iya and early starts","1"],
  ["Blister plasters and basic first aid","","1 kit · group"]]],
 ["Onsen & toiletries",[
  ["Small towel (tenugui)","For Iyaonsen, Dogo Onsen and hotel baths","2"],
  ["Tattoo cover patches (if needed)","Some onsen refuse visible tattoos","as needed"],
  ["Toiletries and any meds","Bring prescriptions in original packaging","1 bag"],
  ["Motion-sickness tablets","Iya and Route 439 are long winding drives","~10 tablets"],
  ["Insect repellent","Gorges and riverside stops","1 · group"]]],
 ["Tech & car",[
  ["Plug adapter: Type A","Japan uses 2 flat pins at 100 V; Singapore's 3-pin Type G won't fit","2"],
  ["Phone car mount + USB-C car charger","","1 set · car"],
  ["Power bank","Carry-on only on the flight","1"],
  ["eSIM or pocket Wi-Fi","Signal drops in the valleys; download offline Google Maps for Shikoku","1"],
  ["Charging cables","","1 per device"]]],
 ["Group & misc",[
  ["Foldable shopping bag / extra luggage space","Mont-bell, matcha, outlets","1"],
  ["Small trash bags","Few public bins in Japan","~10 · group"],
  ["Wet wipes and tissues","Some rural toilets lack paper towels","2 packs · group"],
  ["Reusable cutlery / chopsticks","For convenience store dinners in Iya","1 set"]]]
];

/* Shopping: [item, advice, [[when, where, note], ...]] */
const SHOP_GROUPS = [
 ["Fitbit Air","¥16,800 retail in Japan (launched 26 May 2026). Tax-free knocks off 10% if you spend ¥5,000+ in one store with your passport. Compare against the Singapore price, and check warranty terms for a Japan-bought unit.",[
   ["Sat 10 Oct, 17:30–21:00","Yamada Denki Rinku (best bet)","Right after the car return, next to the outlets. Backup: Sun 11 Oct from 10:00."],
   ["Wed 7 Oct, evening","EDION Matsuyama","Regional stores may not stock it. Call ahead."]]],
 ["Mont-bell shirts","Tax-free with your passport; one store review mentions needing their app for it, so ask at the counter.",[
   ["Wed 7 Oct, 16:00–20:00","Mont-bell Matsuyama (best bet)","Big store, Shikoku Henro editions, easy parking, no rush."],
   ["Fri 2 Oct, until 20:00","mont-bell Tokushima","Tokushima-only designs, but it's out in Ōjin and you'd arrive around closing."],
   ["Sun 4 Oct, en route","Montbell Outdoor Village Motoyama","Small detour off the Kochi Expwy."]]],
 ["Matcha","Shikoku grows mostly sencha, hojicha and rare fermented teas; true local matcha is rare. Shingu in Ehime is the exception. For classic Uji matcha, the airport is your best source.",[
   ["Sun 4 Oct, by 17:00","Waki Seichaba, Shingu (best artisanal pick)","Pesticide-free Shingu tea, powdered matcha on sale, free tastings. ~1 h 15 detour from Oboke via the Kochi Expwy."],
   ["Mon 5 Oct, 10:00–18:00","Chaho Wakakusaen, Kochi","Matcha café, tea caddies and handmade tea bowls. Near the castle."],
   ["Sun 4 / Mon 5 Oct, 11:00–19:30","Tosa-cha Morikisuikoen, Kochi","Family shop by Hirome Market, house-roasted Tosa hojicha, takeaway matcha."],
   ["Wed 7 Oct, until 18:00","Ocha no Shibataen, Matsuyama","Tea and tea-ceremony utensil specialist."],
   ["Sun 11 Oct, airside","Fukujuen, KIX Terminal 1","Uji matcha with tastings, open late. Check your flight leaves from T1."],
   ["Skip","Ikegawa Cha-en Cafe, Niyodogawa","On your 6 Oct route, but closed Tuesdays."]]]
];

/* Heads-up: [title, detail] */
const HEADS_UP = [
 ["Car return is 10 Oct, not 11 Oct","The Oct 11 notes talk about refuelling and returning the car, but the booking returns it on Sat 10 Oct at 17:30. The 11th is train-only."],
 ["Pickup time vs plan","Booking says 16:30 pickup; the plan leaves at 16:15."],
 ["Naruto after dark","You reach Senjojiki around 18:15, about half an hour after sunset."],
 ["Two rooms short","Kochi (2 nights) and Matsuyama (2 nights) are booked for 3. Iya was also paid for 3."],
 ["Late Uchiko lunch","Arriving 14:30; a few spots in your notes close at 14:00–14:15."],
 ["Ishizuchi route","The Skyline starts at Omogo Gorge on the Kumakogen side. Check gate hours."],
 ["Tight return window","Oct 10 has you arriving 16:30 for a 17:30 return after 260 km on a Saturday."],
 ["Blue Brew is shut on Tuesdays","Google Maps lists it as closed Tue, so 6 Oct won't work. So is Ponte at Nakatsu Gorge. CAFE and BEEF karu nearby is open 11:00–14:00."],
 ["Cafés from your notes on the wrong day","Mephistopheles opens 09:00 on weekdays, too late for the 08:00 start on 6 Oct. Biltmore Coffee is closed Wed and Thu."],
 ["Rain on Sun 4 Oct","Forecast is 80–90% rain for the Iya → Oboke → Kochi day. Do the vine bridge early and keep the Oboke walks and Shingu detour as optional."],
 ["Meal hours are from Google Maps","Checked 30 Sep 2026. Small places close without notice, so confirm on the day for anything critical."]
];
