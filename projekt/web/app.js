/**
 * CHROMASYNC VR FILM FESTIVAL 2026 - PRODUCTION APPLICATION ENGINE
 * Mobile-First, Multi-Page, 100% Offline Compatible (file:// & http://).
 * Zero external dependencies.
 */

const FESTIVAL_DATA = { "festival": { "id": "chromasync-2026", "name": "CHROMASYNC VR FILM FESTIVAL", "edition": "4. ročník", "year": 2026, "dates": { "start": "2026-10-23", "end": "2026-10-25", "formatted": "23. – 25. října 2026" }, "location": { "city": "Praha", "venue": "Výstaviště Praha & Křižíkovy pavilony", "address": "Výstaviště 67, 170 00 Praha 7 - Holešovice", "coordinates": { "lat": 50.1062, "lng": 14.4308 } }, "motto": "Za hranicemi plochého plátna: Vstupte do filmu, který vás obklopí.", "character": "Mezinárodní festival zaměřený na virtuální realitu, 360° imerzivní kinematografii, prostorové vyprávění (spatial storytelling) a interaktivní 6DOF zážitky. Barevný, hravý a technologicky progresivní festival propojující filmové umění, herní mechaniky a prostorový zvuk.", "genres_and_themes": ["Sci-Fi & Cyberpunk Spatial Worlds", "Imerzivní dokument a sociální empatie", "6DOF Interaktivní narrativní hry", "Generativní AI sny a fraktální 3D umění", "Animovaný VR film & rodinné světy", "Spatial Audio & virtuální koncerty"], "stats": { "days_count": 3, "stages_count": 4, "performers_count": 60, "program_items_count": 60, "headsets_available": 120, "expected_visitors": 4500 } }, "stages": [{ "id": "stage-dome-alpha", "name": "Dome Alpha: Spatial HoloCinema", "type": "Imerzivní 360° kopule a synchronizované 8K headset bary", "capacity": 80, "description": "Hlavní monumentální scéna pro společné sledování 360° filmů v synchronizovaném zobrazení. 8K projekční kopule doplňuje 40 sedadel s prémiovými headsety s prostorovým ozvučením Dolby Atmos.", "hardware": ["Meta Quest 3 Pro", "Spatial Audio Array", "360 Dome Projector 8K"], "location_hint": "Pavilon B – centrální dvorana" }, { "id": "stage-matrix-6dof", "name": "Matrix Arena: 6DOF Interactive Lab", "type": "Volný pohyb po prostoru (Room-scale 6DOF) & haptické vesty", "capacity": 30, "description": "Zóna pro volný pohyb v reálném prostoru s optickým trackingem a haptickými vestami bBHaptics. Divák zde není jen pozorovatelem, ale aktivním protagonistou filmového děje.", "hardware": ["HTC Vive Focus 3", "bHaptics TactSuit X40", "Subpac M2X"], "location_hint": "Pavilon C – severní křídlo" }, { "id": "stage-neon-creators", "name": "Neon Stage: Creators & Masterclasses", "type": "Přednáškový sál, živé diskuse, live VR performance", "capacity": 120, "description": "Živá scéna s velkoplošným LED pódiem, kde režiséři, 3D vývojáři a zvukaři prezentují své postupy, vedou debaty s publikem a demonstrují live-coding a tvorbu ve VR v reálném čase.", "hardware": ["OptiTrack Live Broadcast", "LED Wall 4K", "Spatial Audio Rig"], "location_hint": "Pavilon A – konferenční sál" }, { "id": "stage-oasis-chill", "name": "Oasis Hub: Ambient & Sensory VR", "type": "Meditativní a experimentální zóna s lehkými headsety", "capacity": 45, "description": "Klidová relaxační oáza s ergonomickými sedacími vaky, ambientním generativním osvětlením a ultra-lehkými headsety zaměřená na meditativní, poetické a snové VR projekty.", "hardware": ["Bigscreen Beyond", "Apple Vision Pro", "Aromaterapeutické trysky"], "location_hint": "Pavilon D – chillout zóna a mezipatro" }], "performers": [{ "id": "perf-01", "name": "Elena Rostova", "role": "Režisérka a VR scenáristka", "country": "Německo", "bio": "Průkopnice narativního 6DOF filmu, absolventka Filmové akademie v Baden-Württembergu.", "tags": ["Sci-Fi", "6DOF", "Režie"], "website": "https://creators.chromasync.cz/perf-01", "avatar": "/assets/performers/perf-01.webp" }, { "id": "perf-02", "name": "Kenji Takahashi", "role": "Lead 3D Worldbuilder & VFX Artist", "country": "Japonsko", "bio": "Bývalý designér Square Enix, zaměřující se na neoklasický cyberpunk a fotorealistická virtuální města.", "tags": ["Cyberpunk", "3D Art", "Unreal Engine"], "website": "https://creators.chromasync.cz/perf-02", "avatar": "/assets/performers/perf-02.webp" }, { "id": "perf-03", "name": "Mateo Silva", "role": "Imerzivní dokumentarista", "country": "Španělsko", "bio": "Držitel ocenění z festivalu v Benátkách za VR dokument o klimatických uprchlících.", "tags": ["Dokument", "360° Video", "Sociální"], "website": "https://creators.chromasync.cz/perf-03", "avatar": "/assets/performers/perf-03.webp" }, { "id": "perf-04", "name": "Aria Vance", "role": "Kreativní ředitelka studia NeonVoyage", "country": "USA", "bio": "Specialistka na interaktivní hand-tracking vyprávění bez ovladačů pro Apple Vision Pro.", "tags": ["Hand Tracking", "Interaktivní", "VisionOS"], "website": "https://creators.chromasync.cz/perf-04", "avatar": "/assets/performers/perf-04.webp" }, { "id": "perf-05", "name": "Lukáš Dvořák", "role": "Český VR režisér a scénograf", "country": "Česko", "bio": "Zakladatel pražského studia VoidScape, propojující českou loutkovou tradici s virtuální realitou.", "tags": ["Česká tvorba", "Animace", "Scénografie"], "website": "https://creators.chromasync.cz/perf-05", "avatar": "/assets/performers/perf-05.webp" }, { "id": "perf-06", "name": "Chloe Dupont", "role": "Animátorka a výtvarnice", "country": "Francie", "bio": "Autorka oceňovaných malovaných VR pohádek vytvořených kompletně v Quill a Blenderu.", "tags": ["Quill", "Animace", "Poetika"], "website": "https://creators.chromasync.cz/perf-06", "avatar": "/assets/performers/perf-06.webp" }, { "id": "perf-07", "name": "Tariq Al-Mansoor", "role": "Spatial Audio Designer & skladatel", "country": "Spojené arabské emiráty", "bio": "Mistr ambisonického 3D zvuku, který skládá adaptivní hudbu reagující na směr pohledu diváka.", "tags": ["Spatial Audio", "Hudba", "Dolby Atmos"], "website": "https://creators.chromasync.cz/perf-07", "avatar": "/assets/performers/perf-07.webp" }, { "id": "perf-08", "name": "Yuki Morita", "role": "Generativní AI a shader umělec", "country": "Japonsko", "bio": "Experimentuje s neurálními sítěmi a fraktální matematikou vykreslovanou v 90 FPS ve virtuální realitě.", "tags": ["AI Art", "Generativní", "Shadery"], "website": "https://creators.chromasync.cz/perf-08", "avatar": "/assets/performers/perf-08.webp" }, { "id": "perf-09", "name": "Sarah Jenkins", "role": "Haptická inženýrka a designérka zážitků", "country": "Velká Británie", "bio": "Vědkyně a umělkyně zkoumající iluzi doteku a fyzikální zpětné vazby v imerzivním filmu.", "tags": ["Haptika", "Interakce", "Hardware"], "website": "https://creators.chromasync.cz/perf-09", "avatar": "/assets/performers/perf-09.webp" }, { "id": "perf-10", "name": "Jan Novotný", "role": "Technický ředitel a Unity architekt", "country": "Česko", "bio": "Specialista na optimalizaci mobilních VR procesorů a multi-user synchronizaci.", "tags": ["Unity", "Vývoj", "Technologie"], "website": "https://creators.chromasync.cz/perf-10", "avatar": "/assets/performers/perf-10.webp" }, { "id": "perf-11", "name": "Studio Atlas V", "role": "Imerzivní produkční studio", "country": "Francie", "bio": "Světoznámé francouzské studio stojící za VR hity jako Spheres, Battlescar a Madrid Noir.", "tags": ["Studio", "Produkce", "Festivaly"], "website": "https://creators.chromasync.cz/perf-11", "avatar": "/assets/performers/perf-11.webp" }, { "id": "perf-12", "name": "Felix & Paul Studios", "role": "Průkopníci 360° 3D kamery", "country": "Kanada", "bio": "Držitelé ceny Emmy, známí svými vesmírnými projekty natáčenými na palubě ISS.", "tags": ["360° 3D", "Vesmír", "Emmy"], "website": "https://creators.chromasync.cz/perf-12", "avatar": "/assets/performers/perf-12.webp" }, { "id": "perf-13", "name": "Baobab Studios", "role": "Animační VR velmoc", "country": "USA", "bio": "Špičkové animační studio vedené veterány z Pixar a DreamWorks.", "tags": ["Animace", "Rodinné", "Storytelling"], "website": "https://creators.chromasync.cz/perf-13", "avatar": "/assets/performers/perf-13.webp" }, { "id": "perf-14", "name": "Marshmallow Laser Feast", "role": "Immersive Experience Collective", "country": "Velká Británie", "bio": "Umělecký kolektiv bourající hranice mezi lidským tělem a přírodou skrze smyslové VR instalace.", "tags": ["Umění", "Příroda", "Smysly"], "website": "https://creators.chromasync.cz/perf-14", "avatar": "/assets/performers/perf-14.webp" }, { "id": "perf-15", "name": "Studio Brainz Immersive", "role": "České kreativní studio", "country": "Česko", "bio": "Přední české studio tvořící špičkové VR zážitky, kulturu a interaktivní expozice.", "tags": ["České studio", "Kultura", "Inovace"], "website": "https://creators.chromasync.cz/perf-15", "avatar": "/assets/performers/perf-15.webp" }, { "id": "perf-16", "name": "Mira Kováčová", "role": "VR choreografka a performerka", "country": "Slovensko", "bio": "Kombinuje motion capture tanec s živou transformací virtuálního avataru před očima diváka.", "tags": ["Tanec", "Motion Capture", "Performance"], "website": "https://creators.chromasync.cz/perf-16", "avatar": "/assets/performers/perf-16.webp" }, { "id": "perf-17", "name": "Göran Lindqvist", "role": "Severský herní a narativní designér", "country": "Švédsko", "bio": "Tvoří psychologické severské noirové příběhy pro imerzivní headsety.", "tags": ["Nordic Noir", "Narativ", "Psychologie"], "website": "https://creators.chromasync.cz/perf-17", "avatar": "/assets/performers/perf-17.webp" }, { "id": "perf-18", "name": "Li Wei", "role": "Výzkumník volumetrického videa", "country": "Čína / Singapur", "bio": "Specialista na photogrammetrii lidského těla a volumetrický záznam divadelních představení.", "tags": ["Volumetrie", "Fotogrammetrie", "Divadlo"], "website": "https://creators.chromasync.cz/perf-18", "avatar": "/assets/performers/perf-18.webp" }, { "id": "perf-19", "name": "Amara Okonkwo", "role": "Africká novomediální vizionářka", "country": "Nigérie", "bio": "Propagátorka afrofuturismu ve virtuální realitě a digitální paměti orální historie.", "tags": ["Afrofuturismus", "Kultura", "Mytologie"], "website": "https://creators.chromasync.cz/perf-19", "avatar": "/assets/performers/perf-19.webp" }, { "id": "perf-20", "name": "Zdeněk Kříž", "role": "Zvukový mistr a hudební producent", "country": "Česko", "bio": "Vytváří binaurální zvukové stopy pro české i mezinárodní imerzivní snímky.", "tags": ["Binaurální zvuk", "Zvukový design", "Hudba"], "website": "https://creators.chromasync.cz/perf-20", "avatar": "/assets/performers/perf-20.webp" }, { "id": "perf-21", "name": "Nina Bergström", "role": "Režisérka ekologických VR esejí", "country": "Norsko", "bio": "Zachycuje tající arktické ledovce z pohledu planktonu a velryb.", "tags": ["Ekologie", "Esej", "Oceány"], "website": "https://creators.chromasync.cz/perf-21", "avatar": "/assets/performers/perf-21.webp" }, { "id": "perf-22", "name": "Carlos Santana Jr.", "role": "VR herní scenárista", "country": "Mexiko", "bio": "Vnáší do VR videoher magický realismus a nelineární větvení příběhu.", "tags": ["Magický realismus", "Scénář", "Herní design"], "website": "https://creators.chromasync.cz/perf-22", "avatar": "/assets/performers/perf-22.webp" }, { "id": "perf-23", "name": "Hanna Weiss", "role": "Filozofka médií a kurátorka", "country": "Rakousko", "bio": "Zabývá se etikou identity a avatarů ve virtuálních společenských prostorech.", "tags": ["Etika", "Kurátorství", "Přednášky"], "website": "https://creators.chromasync.cz/perf-23", "avatar": "/assets/performers/perf-23.webp" }, { "id": "perf-24", "name": "David 'PixelWolf' Chen", "role": "VR Live Painter a sochař", "country": "Tchaj-wan", "bio": "Provádí živé malování ve virtuální realitě před zraky publika na obří LED stěně.", "tags": ["Live VR", "Malba", "TiltBrush"], "website": "https://creators.chromasync.cz/perf-24", "avatar": "/assets/performers/perf-24.webp" }, { "id": "perf-25", "name": "Petra Horáková", "role": "Dokumentaristka a novinářka", "country": "Česko", "bio": "Autorka reportážních VR filmů z krizových oblastí a sociálně vyloučených lokalit.", "tags": ["Reportáž", "Novinařina", "Dokument"], "website": "https://creators.chromasync.cz/perf-25", "avatar": "/assets/performers/perf-25.webp" }, { "id": "perf-26", "name": "Viktor Brandt", "role": "Hororový VR režisér", "country": "Dánsko", "bio": "Mistr psychologického napětí a manipulace s periferním viděním v brýlích.", "tags": ["Horor", "Napětí", "Psychologie"], "website": "https://creators.chromasync.cz/perf-26", "avatar": "/assets/performers/perf-26.webp" }, { "id": "perf-27", "name": "Sunita Rao", "role": "VR biofeedback vývojářka", "country": "Indie", "bio": "Propojuje tepové sensory s dynamickým tempem filmového střihu a barev.", "tags": ["Biofeedback", "Zdraví", "Interakce"], "website": "https://creators.chromasync.cz/perf-27", "avatar": "/assets/performers/perf-27.webp" }, { "id": "perf-28", "name": "Marc O'Connor", "role": "Režisér stereoskopických drone filmů", "country": "Irsko", "bio": "Specializuje se na 360° záběry z dálkově řízených koptér nad divokou krajinou.", "tags": ["Drony", "Krajina", "360°"], "website": "https://creators.chromasync.cz/perf-28", "avatar": "/assets/performers/perf-28.webp" }, { "id": "perf-29", "name": "Tereza Mašková", "role": "3D Animátorka postav", "country": "Česko", "bio": "Oživuje fantaskní stvoření v enginu Unreal Engine 5 s využitím MetaHuman.", "tags": ["MetaHuman", "Animace", "Unreal 5"], "website": "https://creators.chromasync.cz/perf-29", "avatar": "/assets/performers/perf-29.webp" }, { "id": "perf-30", "name": "Gabriel Mercier", "role": "Režisér poetických sci-fi vizí", "country": "Francie", "bio": "Jeho díla evokují poetiku Malého prince zasazenou do kyberprostorového vakua.", "tags": ["Poetika", "Sci-Fi", "Vesmír"], "website": "https://creators.chromasync.cz/perf-30", "avatar": "/assets/performers/perf-30.webp" }, { "id": "perf-31", "name": "Olga Sidorova", "role": "Experimentální glitch artist", "country": "Polsko", "bio": "Deformuje virtuální prostory chybami v paměti a digitálními artefakty.", "tags": ["Glitch Art", "Experiment", "Vizuály"], "website": "https://creators.chromasync.cz/perf-31", "avatar": "/assets/performers/perf-31.webp" }, { "id": "perf-32", "name": "Samira Khan", "role": "Designérka imerzivního vzdělávání", "country": "Pákistán", "bio": "Vytváří zážitkové simulace historických okamžiků pro mladou generaci.", "tags": ["Vzdělávání", "Historie", "Simulace"], "website": "https://creators.chromasync.cz/perf-32", "avatar": "/assets/performers/perf-32.webp" }, { "id": "perf-33", "name": "Filip Procházka", "role": "Indie VR herní vývojář", "country": "Česko", "bio": "Tvůrce atmosférických logických rébusů zasazených do surrealistických ruin.", "tags": ["Indie hry", "Hádanky", "Surrealismus"], "website": "https://creators.chromasync.cz/perf-33", "avatar": "/assets/performers/perf-33.webp" }, { "id": "perf-34", "name": "Beatriz Morales", "role": "Režisérka smyslových zážitků", "country": "Kolumbie", "bio": "Spojuje tropickou flóru, hmatové podněty a prostorový zvuk deštného pralesa.", "tags": ["Příroda", "Smysly", "Latinská Amerika"], "website": "https://creators.chromasync.cz/perf-34", "avatar": "/assets/performers/perf-34.webp" }, { "id": "perf-35", "name": "Jonas Lind", "role": "Spatial UI/UX designér", "country": "Finsko", "bio": "Tvoří revoluční rozhraní pro interakci očí a prstů ve spatial computingu.", "tags": ["UI/UX", "Spatial Computing", "Design"], "website": "https://creators.chromasync.cz/perf-35", "avatar": "/assets/performers/perf-35.webp" }, { "id": "perf-36", "name": "Klára Vrbová", "role": "Etnografka a VR kurátorka", "country": "Česko", "bio": "Dokumentuje mizející lidová řemesla pomocí fotogrammetrických skenů ve VR.", "tags": ["Etnografie", "Kulturní dědictví", "Skenování"], "website": "https://creators.chromasync.cz/perf-36", "avatar": "/assets/performers/perf-36.webp" }, { "id": "perf-37", "name": "Dmitri Volkov", "role": "Sci-fi spisovatel a VR dramaturg", "country": "Estonsko", "bio": "Spolupracuje na sci-fi scénářích pro německá a severská VR herní studia.", "tags": ["Dramaturgie", "Scénář", "Kybernetika"], "website": "https://creators.chromasync.cz/perf-37", "avatar": "/assets/performers/perf-37.webp" }, { "id": "perf-38", "name": "Aoi Tanaka", "role": "VR Manga a Anime režisérka", "country": "Japonsko", "bio": "Převádí tradiční estetiku japonského komiksu do 3D stereoskopického prostoru.", "tags": ["Anime", "Manga", "3D Kresba"], "website": "https://creators.chromasync.cz/perf-38", "avatar": "/assets/performers/perf-38.webp" }, { "id": "perf-39", "name": "Arthur Pendelton", "role": "VR Sound Architect", "country": "Velká Británie", "bio": "Pracoval na zvuku pro projekty BBC VR a experimentální rozhlasové hry.", "tags": ["Rozhlas", "Zvuk", "BBC"], "website": "https://creators.chromasync.cz/perf-39", "avatar": "/assets/performers/perf-39.webp" }, { "id": "perf-40", "name": "Simona Králová", "role": "Interaktivní kostýmní výtvarnice", "country": "Česko", "bio": "Navrhuje procedurální digitální látky reagující na virtuální vítr a doteky.", "tags": ["Digitální móda", "Textilie", "Avataři"], "website": "https://creators.chromasync.cz/perf-40", "avatar": "/assets/performers/perf-40.webp" }, { "id": "perf-41", "name": "Dr. Hendrik Visser", "role": "Neurolog a VR konzultant", "country": "Nizozemsko", "bio": "Zkoumá kinetózu (cyber sickness) a pocit tělesného ztělesnění (embodiment) ve VR.", "tags": ["Neurověda", "Kinetóza", "Přednášky"], "website": "https://creators.chromasync.cz/perf-41", "avatar": "/assets/performers/perf-41.webp" }, { "id": "perf-42", "name": "Clara Schmidt", "role": "Dětská ilustrátorka a VR tvůrkyně", "country": "Německo", "bio": "Vytváří kouzelné virtuální pop-up knihy, do kterých děti mohou vstoupit.", "tags": ["Děti", "Interaktivní kniha", "Pohádky"], "website": "https://creators.chromasync.cz/perf-42", "avatar": "/assets/performers/perf-42.webp" }, { "id": "perf-43", "name": "Jakub 'Kuba' Beneš", "role": "Motion Capture Director", "country": "Česko", "bio": "Zakladatel českého mocap studia pro filmové triky a virtuální produkci.", "tags": ["Mocap", "Filmové triky", "Technologie"], "website": "https://creators.chromasync.cz/perf-43", "avatar": "/assets/performers/perf-43.webp" }, { "id": "perf-44", "name": "Ines Belkacem", "role": "Alžírská filmová esejistka", "country": "Alžírsko / Francie", "bio": "Zkoumá koloniální paměť a rodinné archivy oživené v 3D projekcích.", "tags": ["Archiv", "Historie", "Esej"], "website": "https://creators.chromasync.cz/perf-44", "avatar": "/assets/performers/perf-44.webp" }, { "id": "perf-45", "name": "Tobias Møller", "role": "Architekt virtuálních světů", "country": "Dánsko", "bio": "Navrhuje utopická plovoucí města bez zemské gravitace v prostředí VR.", "tags": ["Architektura", "Beztíže", "Utopie"], "website": "https://creators.chromasync.cz/perf-45", "avatar": "/assets/performers/perf-45.webp" }, { "id": "perf-46", "name": "Michaela Černá", "role": "Kurátorka imerzivního umění", "country": "Česko", "bio": "Přední česká teoretička digitálních médií a lektorka na FAMU.", "tags": ["Kurátorství", "FAMU", "Teorie médií"], "website": "https://creators.chromasync.cz/perf-46", "avatar": "/assets/performers/perf-46.webp" }, { "id": "perf-47", "name": "Soren Kierk", "role": "Hororový sound designer", "country": "Dánsko", "bio": "Specializuje se na infrazvukové a psychoakustické efekty vyvolávající mrazení v zádech.", "tags": ["Psychoakustika", "Horor", "Zvuk"], "website": "https://creators.chromasync.cz/perf-47", "avatar": "/assets/performers/perf-47.webp" }, { "id": "perf-48", "name": "Leila Haddad", "role": "VR fotožurnalistka", "country": "Libanon", "bio": "Zachytila rekonstrukci bejrútského přístavu formou prostorových stereo fotografií.", "tags": ["Fotožurnalistika", "Blízký východ", "Paměť"], "website": "https://creators.chromasync.cz/perf-48", "avatar": "/assets/performers/perf-48.webp" }, { "id": "perf-49", "name": "Tomáš Růžička", "role": "3D skener a dronový operátor", "country": "Česko", "bio": "Vytvořil detailní fotogrammetrické dvojče gotických podzemních chodeb Prahy.", "tags": ["Praha", "Fotogrammetrie", "Historie"], "website": "https://creators.chromasync.cz/perf-49", "avatar": "/assets/performers/perf-49.webp" }, { "id": "perf-50", "name": "Yael Ben-David", "role": "VR choreografka a tanečnice", "country": "Izrael", "bio": "Vytváří intimní taneční duety, kdy divák vnímá tanečníka z bezprostřední blízkosti 10 centimetrů.", "tags": ["Tanec", "Intimita", "Pohyb"], "website": "https://creators.chromasync.cz/perf-50", "avatar": "/assets/performers/perf-50.webp" }, { "id": "perf-51", "name": "Krzysztof Wojcik", "role": "Sci-fi producent a herní kritik", "country": "Polsko", "bio": "Organizátor varšavských VR showcase a mezinárodní porotce.", "tags": ["Produkce", "Porota", "Kritika"], "website": "https://creators.chromasync.cz/perf-51", "avatar": "/assets/performers/perf-51.webp" }, { "id": "perf-52", "name": "Evelyn Reed", "role": "Spisovatelka a narativní koučka", "country": "USA", "bio": "Vede mezinárodní dílny psaní scénářů pro větvené 6DOF příběhy.", "tags": ["Workshopy", "Scénář", "Výuka"], "website": "https://creators.chromasync.cz/perf-52", "avatar": "/assets/performers/perf-52.webp" }, { "id": "perf-53", "name": "Matěj Kolář", "role": "Shader programátor a vizuální mág", "country": "Česko", "bio": "Tvoří vizuální efekty pro sci-fi VR tituly v reálném čase.", "tags": ["VFX", "Shadery", "Real-time"], "website": "https://creators.chromasync.cz/perf-53", "avatar": "/assets/performers/perf-53.webp" }, { "id": "perf-54", "name": "Valeria Rossi", "role": "Operní režisérka a VR inovátorka", "country": "Itálie", "bio": "Převádí klasickou italskou operu do 360° zážitku s pohledem dirigenta.", "tags": ["Opera", "Klasika", "360°"], "website": "https://creators.chromasync.cz/perf-54", "avatar": "/assets/performers/perf-54.webp" }, { "id": "perf-55", "name": "Hassan Touré", "role": "Hudební vizualizátor", "country": "Senegal", "bio": "Spojuje západoafrické rytmy s reaktivními barevnými 3D světelnými sochami.", "tags": ["Světlo", "Rytmus", "Hudba"], "website": "https://creators.chromasync.cz/perf-55", "avatar": "/assets/performers/perf-55.webp" }, { "id": "perf-56", "name": "Lenka Zemanová", "role": "Socioložka virtuálních komunit", "country": "Česko", "bio": "Přednáší o fenoménu sociálních vazeb a virtuálních rodin ve VRChat a Metaverse.", "tags": ["Sociologie", "Metaverse", "Komunity"], "website": "https://creators.chromasync.cz/perf-56", "avatar": "/assets/performers/perf-56.webp" }, { "id": "perf-57", "name": "Ramiro Costa", "role": "Režisér hlubokomořských VR expedic", "country": "Brazílie", "bio": "Spolupracuje s oceánografy na věrné simulaci Mariánského příkopu.", "tags": ["Oceán", "Expedice", "Hlubiny"], "website": "https://creators.chromasync.cz/perf-57", "avatar": "/assets/performers/perf-57.webp" }, { "id": "perf-58", "name": "Siddharth Verma", "role": "AI prompt inženýr a 3D NeRF specialista", "country": "Indie", "bio": "Používá technologii Gaussian Splatting pro převod vzpomínek do 3D.", "tags": ["Gaussian Splatting", "NeRF", "Inovace"], "website": "https://creators.chromasync.cz/perf-58", "avatar": "/assets/performers/perf-58.webp" }, { "id": "perf-59", "name": "Bára Veselá", "role": "Studentka FAMU / Multimédia", "country": "Česko", "bio": "Vítězka studentské soutěže s poetickou hříčkou o zapomenutých pražských kavárnách.", "tags": ["Studentská tvorba", "FAMU", "Debut"], "website": "https://creators.chromasync.cz/perf-59", "avatar": "/assets/performers/perf-59.webp" }, { "id": "perf-60", "name": "Marcus Sterling", "role": "VR festivalový ředitel a vizionář", "country": "Velká Británie", "bio": "Zakladatel evropské asociace XR kinematografie a prezident hlavní poroty.", "tags": ["Porota", "Asociace", "Průmysl"], "website": "https://creators.chromasync.cz/perf-60", "avatar": "/assets/performers/perf-60.webp" }], "program_items": [{ "id": "prog-01", "title": "Slavnostní zahájení festivalu & Keynote: Budoucnost prostorového filmu", "original_title": "Grand Opening & Keynote: The Future of Spatial Cinema", "category": "Keynote & Zahájení", "day": 1, "date": "2026-10-23", "start_time": "10:00", "end_time": "11:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-60", "perf-11", "perf-05"], "description": "Oficiální start 4. ročníku CHROMASYNC 2026 s přehledem letošních technologických milníků, představením poroty a první exkluzivní ukázkou z celovečerního francouzského prostorového filmu.", "vr_hardware": "Hybridní prezentace na 4K LED stěně + headsety pro ukázky", "interaction_type": "Přednáška & Živá diskuse", "capacity": 120, "reservation_required": true, "age_recommendation": "12+" }, { "id": "prog-02", "title": "Kybernetické probuzení: Neo-Tokio 2099", "original_title": "Cybernetic Awakening: Neo-Tokyo 2099", "category": "Sci-Fi 360° Film", "day": 1, "date": "2026-10-23", "start_time": "10:30", "end_time": "11:00", "duration_minutes": 30, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-02"], "description": "Vizuálně opulentní 8K stereoskopický let nad deštěm smáčenými neonovými mrakodrapy s pulzujícím syntetickým soundtrackem.", "vr_hardware": "Meta Quest 3 Pro / 360 Dome Projector", "interaction_type": "Seated 360° Experience", "capacity": 80, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-03", "title": "Hlasy tajícího ledu: Arktická expedice", "original_title": "Voices of Melting Ice: Arctic Expedition", "category": "Imerzivní dokument", "day": 1, "date": "2026-10-23", "start_time": "11:15", "end_time": "11:55", "duration_minutes": 40, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-03", "perf-21"], "description": "Strhující dokumentární cesta do nitra ledovce se spatial audio záznamem praskání tisíciletého ledu.", "vr_hardware": "Meta Quest 3 Pro", "interaction_type": "Seated 360° Film", "capacity": 80, "reservation_required": true, "age_recommendation": "10+" }, { "id": "prog-04", "title": "V labyrintu stínů: Interaktivní noirová detektivka", "original_title": "In the Labyrinth of Shadows: Interactive Noir", "category": "6DOF Interaktivní narrativ", "day": 1, "date": "2026-10-23", "start_time": "11:00", "end_time": "11:45", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-01", "perf-17"], "description": "Návštěvník v roli detektiva prochází potemnělou kanceláří 40. let, sbírá důkazy vlastníma rukama a ovlivňuje výslech svědků.", "vr_hardware": "HTC Vive Focus 3 + haptická vesta", "interaction_type": "Room-scale 6DOF Hand Tracking", "capacity": 30, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-05", "title": "Meditace v beztíži: Snový fraktální oceán", "original_title": "Weightless Meditation: Fractal Ocean", "category": "Snový ambient & relaxace", "day": 1, "date": "2026-10-23", "start_time": "11:30", "end_time": "12:15", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-08", "perf-07"], "description": "Hluboce zklidňující generativní cesta do podmořských fraktálů za doprovodu laděných binaurálních tónů.", "vr_hardware": "Apple Vision Pro / Bigscreen Beyond", "interaction_type": "Seated Relax Lounge", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-06", "title": "Masterclass: Režie v prostoru 360° vs. 6DOF", "original_title": "Masterclass: Directing Space - 360° vs 6DOF", "category": "Masterclass & Přednáška", "day": 1, "date": "2026-10-23", "start_time": "12:00", "end_time": "13:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-01", "perf-11", "perf-52"], "description": "Jak vést divákovu pozornost bez střihu a rámu obrazu? Metody světelných a zvukových signálů od předních světových režisérů.", "vr_hardware": "Projektor + živá demonstrace v headsetu", "interaction_type": "Interaktivní přednáška", "capacity": 120, "reservation_required": false, "age_recommendation": "15+" }, { "id": "prog-07", "title": "Loutka v digitálním vesmíru: Česká loutkářská odysea", "original_title": "Puppet in Cyberspace: Czech Marionette Odyssey", "category": "Animovaný VR film", "day": 1, "date": "2026-10-23", "start_time": "12:30", "end_time": "13:00", "duration_minutes": 30, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-05", "perf-29"], "description": "Poetický příběh dřevěného Kašpárka putujícího opuštěným servery a transformujícího se v digitální kód.", "vr_hardware": "Meta Quest 3 Pro", "interaction_type": "Seated 360° 3D", "capacity": 80, "reservation_required": true, "age_recommendation": "8+" }, { "id": "prog-08", "title": "Bariéry doteku: Haptický horor v temném sanatoriu", "original_title": "Barriers of Touch: Haptic Horror Asylum", "category": "Haptický thriller & horor", "day": 1, "date": "2026-10-23", "start_time": "12:30", "end_time": "13:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-09", "perf-26", "perf-47"], "description": "Intenzivní psychologický zážitek, kde chlad a otřesy vnímáte na vlastním těle skrze haptický oblek bHaptics.", "vr_hardware": "HTC Vive Focus 3 + bHaptics Suit", "interaction_type": "Room-scale 6DOF Full Body Haptic", "capacity": 30, "reservation_required": true, "age_recommendation": "18+" }, { "id": "prog-09", "title": "Kouzelná zahrada origami: Dětský svět zázraků", "original_title": "Origami Magical Garden", "category": "Dětský a rodinný VR zážitek", "day": 1, "date": "2026-10-23", "start_time": "13:00", "end_time": "13:40", "duration_minutes": 40, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-06", "perf-42"], "description": "Půvabná animovaná zahrada, kde papírová zvířátka ožívají na dotek dlaní v jemném akvarelovém stylu.", "vr_hardware": "Apple Vision Pro Hand Tracking", "interaction_type": "Interaktivní hand-tracking", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-10", "title": "Panelová diskuse: AI jako spolutvůrce nebo hrozba pro scenáristy?", "original_title": "Panel: AI as Co-Creator vs Threat in XR Screenwriting", "category": "Diskusní panel", "day": 1, "date": "2026-10-23", "start_time": "14:00", "end_time": "15:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-23", "perf-37", "perf-58", "perf-51"], "description": "Otevřená debata s mezinárodními tvůrci o roli velkých jazykových a difuzních modelů v imerzivním vyprávění.", "vr_hardware": "Bez headsetu (konferenční sál)", "interaction_type": "Panel Q&A", "capacity": 120, "reservation_required": false, "age_recommendation": "12+" }, { "id": "prog-11", "title": "Vesmírná stanice ISS: Pohled z vnějšího pláště", "original_title": "Space Explorers: Outside ISS Spacewalk", "category": "Dokumentární 3D film", "day": 1, "date": "2026-10-23", "start_time": "14:00", "end_time": "14:40", "duration_minutes": 40, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-12"], "description": "Skutečné stereoskopické záběry pořízené astronauty NASA a Felix & Paul Studios během výstupu do otevřeného vesmíru.", "vr_hardware": "360 Dome & Meta Quest 3 Pro", "interaction_type": "Seated 360° 3D Cinema", "capacity": 80, "reservation_required": true, "age_recommendation": "8+" }, { "id": "prog-12", "title": "Tlukot deštného pralesa: Smyslová fúze", "original_title": "Heartbeat of the Rainforest: Sensory Immersion", "category": "Přírodní multi-senzorický film", "day": 1, "date": "2026-10-23", "start_time": "14:30", "end_time": "15:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-14", "perf-34"], "description": "Instalace kombinující VR headset, vonné esence amazonského pralesa a vibrační plošinu simulující pohyb zvěře.", "vr_hardware": "HTC Vive Focus 3 + vonný difuzér", "interaction_type": "Multi-sensory Room-scale", "capacity": 30, "reservation_required": true, "age_recommendation": "10+" }, { "id": "prog-13", "title": "Sonická rezonance: Immersive Spatial Sound Session", "original_title": "Sonic Resonance: Immersive Sound Session", "category": "Zvukový imerzivní experiment", "day": 1, "date": "2026-10-23", "start_time": "15:00", "end_time": "15:45", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-07", "perf-20", "perf-39"], "description": "Zavřete oči nebo mějte nasazené brýle s abstraktními světelnými vlnami a nechte se obklopit 64-kanálovým binaurálním koncertem.", "vr_hardware": "Spatial Audio Headphones + Bigscreen Beyond", "interaction_type": "Audio-first Visual VR", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-14", "title": "Live VR Painting: Zrození kybernetické bohyně v přímém přenosu", "original_title": "Live VR Painting: Cyber Goddess Born Live", "category": "Live Performance", "day": 1, "date": "2026-10-23", "start_time": "16:00", "end_time": "17:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-24", "perf-04"], "description": "Tchajwanský umělec maluje ve virtuálním prostoru přímo před publikem, zatímco kamera snímá jeho tahy štětcem v reálném 3D čase.", "vr_hardware": "Live 3D Broadcast + Vision Pro Mirroring", "interaction_type": "Živá umělecká show", "capacity": 120, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-15", "title": "Ztraceni v metru: Pražská podzemní fantazie", "original_title": "Lost in the Metro: Prague Underground Fantasy", "category": "Český interaktivní film", "day": 1, "date": "2026-10-23", "start_time": "16:00", "end_time": "16:40", "duration_minutes": 40, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-15", "perf-49"], "description": "Fotogrammetricky nasnímané historické stanice pražského metra, které se rozpadají v surrealistický sen o minulosti a budoucnosti.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Story", "capacity": 80, "reservation_required": true, "age_recommendation": "12+" }, { "id": "prog-16", "title": "Projekt Ikaros: Pád z orbitální výšky", "original_title": "Project Icarus: Freefall from Orbit", "category": "Adrenalinový 6DOF simulátor", "day": 1, "date": "2026-10-23", "start_time": "16:30", "end_time": "17:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-10", "perf-28"], "description": "Volný pád z termosféry na Zemi s reálným větrným generátorem a záchranným křídlem ovládaným rozpažením rukou.", "vr_hardware": "HTC Vive Focus 3 + větrný simulátor", "interaction_type": "Active Body Flight", "capacity": 30, "reservation_required": true, "age_recommendation": "12+" }, { "id": "prog-17", "title": "Doteky prázdnoty: Hlasy z utečeneckého tábora", "original_title": "Touches of Emptiness: Refugee Voices", "category": "Humanitární VR dokument", "day": 1, "date": "2026-10-23", "start_time": "17:00", "end_time": "17:40", "duration_minutes": 40, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-25", "perf-48"], "description": "Intimní 3D svědectví rodin v provizorních přístřešcích, postavené na hlubokém respektu a prostorových rozhovorech.", "vr_hardware": "Apple Vision Pro", "interaction_type": "Intimate Seated Experience", "capacity": 45, "reservation_required": false, "age_recommendation": "15+" }, { "id": "prog-18", "title": "Večerní soutěžní blok 1: Mezinárodní 360° soutěž", "original_title": "Evening Competition Block 1: International 360°", "category": "Hlavní festivalová soutěž", "day": 1, "date": "2026-10-23", "start_time": "18:00", "end_time": "19:30", "duration_minutes": 90, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-01", "perf-02", "perf-03", "perf-06"], "description": "Projekce čtyř nominovaných snímků soutěžících o Křišťálový foton za nejlepší imerzivní režii roku 2026.", "vr_hardware": "Synchronizovaný Headset Bar 8K", "interaction_type": "Soutěžní projekce s hlasováním diváků", "capacity": 80, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-19", "title": "Avataři a tělesnost: Jak tančit ve virtuální kůži", "original_title": "Avatars & Embodiment: Dancing in Virtual Skin", "category": "Taneční VR performance & debata", "day": 1, "date": "2026-10-23", "start_time": "18:00", "end_time": "19:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-16", "perf-50", "perf-41"], "description": "Živé předvedení tanečního duetu v reálném čase přenášeného do optického trackingu s diskusí o neurovědě tělesného ztělesnění.", "vr_hardware": "OptiTrack Mocap Suit + VR stream", "interaction_type": "Představení + diskuse", "capacity": 120, "reservation_required": false, "age_recommendation": "12+" }, { "id": "prog-20", "title": "Páteční noční VR Chillout & Ambient Synapse", "original_title": "Friday Night VR Chillout & Ambient Synapse", "category": "Noční imerzivní párty", "day": 1, "date": "2026-10-23", "start_time": "20:00", "end_time": "22:00", "duration_minutes": 120, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-07", "perf-31", "perf-55"], "description": "Audiovizuální noční seance pro odpočinek po celém dni. Generativní grafika, chillout beaty a volné zkoušení artových aplikací.", "vr_hardware": "Apple Vision Pro / Bigscreen Beyond", "interaction_type": "Social & Relax Night", "capacity": 45, "reservation_required": false, "age_recommendation": "18+" }, { "id": "prog-21", "title": "Ranní jóga v astrálních zahradách", "original_title": "Morning VR Yoga in Astral Gardens", "category": "Wellness & Meditace", "day": 2, "date": "2026-10-24", "start_time": "09:30", "end_time": "10:30", "duration_minutes": 60, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-27", "perf-08"], "description": "Nastartujte festivalovou sobotu vedenou meditací s lehkými brýlemi na hlavě v prostředí plovoucích lotosových chrámů.", "vr_hardware": "Bigscreen Beyond Featherweight", "interaction_type": "Wellness & Guided Motion", "capacity": 45, "reservation_required": true, "age_recommendation": "All ages" }, { "id": "prog-22", "title": "Kouzelníci z Baobabu: Proč VR miluje animaci", "original_title": "Baobab Magicians: Why VR Loves Animation", "category": "Masterclass", "day": 2, "date": "2026-10-24", "start_time": "10:00", "end_time": "11:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-13", "perf-06", "perf-43"], "description": "Zákulisí tvorby nezapomenutelných animovaných charakterů pro virtuální realitu od oceňovaných tvůrců Baobab Studios.", "vr_hardware": "Přednáškový sál", "interaction_type": "Přednáška & Behind-the-Scenes", "capacity": 120, "reservation_required": false, "age_recommendation": "8+" }, { "id": "prog-23", "title": "Expedice Hlubina: Tajemství Mariánského příkopu", "original_title": "Abyss Expedition: Mariana Trench Secrets", "category": "Vědecký 6DOF dokument", "day": 2, "date": "2026-10-24", "start_time": "10:30", "end_time": "11:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-57", "perf-18"], "description": "Ponor do hloubky 11 000 metrů v batyskafu. Divák rozsvěcí reflektory a zkoumá dosud neobjevené bioluminiscenční tvory.", "vr_hardware": "HTC Vive Focus 3 + Haptic Rumble", "interaction_type": "Interactive Underwater Exploration", "capacity": 30, "reservation_required": true, "age_recommendation": "10+" }, { "id": "prog-24", "title": "Afrofuturistické mýty: Cesta do dimenze Orisha", "original_title": "Afrofuturistic Myths: Journey to Orisha Dimension", "category": "Mytologický 360° epos", "day": 2, "date": "2026-10-24", "start_time": "10:45", "end_time": "11:30", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-19", "perf-55"], "description": "Vizuální exploze barev, digitálních masek a kmenových polyrytmů propojující západoafrickou mytologii s kosmonautikou.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Visual Ode", "capacity": 80, "reservation_required": true, "age_recommendation": "12+" }, { "id": "prog-25", "title": "Unreal Engine 5 pro VR filmaře: Nanite a Lumen v akci", "original_title": "Unreal Engine 5 for VR Filmmakers", "category": "Technický workshop", "day": 2, "date": "2026-10-24", "start_time": "11:45", "end_time": "13:15", "duration_minutes": 90, "stage_id": "stage-neon-creators", "performer_ids": ["perf-10", "perf-53", "perf-29"], "description": "Praktický workshop pro filmaře a vývojáře: jak dosáhnout filmového osvětlení v reálném čase při 90 snímcích za sekundu.", "vr_hardware": "Pracovní stanice + Headset preview", "interaction_type": "Hands-on Workshop", "capacity": 120, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-26", "title": "Papírové město: Interaktivní animace v Quillu", "original_title": "Paper Town: Interactive Quill World", "category": "Animovaný VR film", "day": 2, "date": "2026-10-24", "start_time": "11:45", "end_time": "12:15", "duration_minutes": 30, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-06", "perf-45"], "description": "Malebné ručně kreslené městečko z papíru, kde každá budova ukrývá malý animovaný mikropříběh probouzející se pohledem diváka. Architektura virtuálního světa vznikla ve spolupráci dánského designéra Tobiase Møllera.", "vr_hardware": "Vision Pro Eye Tracking", "interaction_type": "Gaze-activated Storytelling", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-27", "title": "Kybernetický únik: Úniková místnost s časovou smyčkou", "original_title": "Cyber Escape: Time Loop Room-Scale Mystery", "category": "Interaktivní rébus 6DOF", "day": 2, "date": "2026-10-24", "start_time": "12:00", "end_time": "12:45", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-33", "perf-17"], "description": "Společný zážitek pro dva návštěvníky: máte 20 minut na dešifrování anomálie v kvantovém reaktoru před zhroucením času.", "vr_hardware": "HTC Vive Focus 3 Co-location", "interaction_type": "Multiplayer 6DOF Room-scale", "capacity": 30, "reservation_required": true, "age_recommendation": "12+" }, { "id": "prog-28", "title": "Soutěžní blok 2: 6DOF a Interaktivní příběhy", "original_title": "Competition Block 2: 6DOF & Interactive Narratives", "category": "Hlavní festivalová soutěž", "day": 2, "date": "2026-10-24", "start_time": "12:00", "end_time": "13:30", "duration_minutes": 90, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-01", "perf-04", "perf-15", "perf-22"], "description": "Kurátorský výběr soutěžních děl, ve kterých divák zásadním způsobem určuje vývoj zápletky.", "vr_hardware": "Headset Bar", "interaction_type": "Soutěžní prezentace s hlasováním", "capacity": 80, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-29", "title": "Vzpomínky v cloudu: Plovoucí rodinné archivy v NeRF", "original_title": "Memories in Cloud: Gaussian Splatting Archives", "category": "Experimentální esej", "day": 2, "date": "2026-10-24", "start_time": "13:00", "end_time": "13:45", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-58", "perf-44"], "description": "Vstupte do trojrozměrně rekonstruovaných dětských pokojů ze 70. let složených ze statických fotografií technikou Gaussian Splatting.", "vr_hardware": "Apple Vision Pro", "interaction_type": "Spatial Photo-real Walkthrough", "capacity": 45, "reservation_required": false, "age_recommendation": "12+" }, { "id": "prog-30", "title": "Haptika v kině: Budoucnost dotykového vnímání filmů", "original_title": "Haptics in Cinema: Future of Touch Perception", "category": "Technologická prezentace", "day": 2, "date": "2026-10-24", "start_time": "13:45", "end_time": "15:00", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-09", "perf-41"], "description": "Představení revolučních haptických obleků, rukavic s mikro-pneumatickými vaky a ultrazvukových haptických polí ve vzduchu.", "vr_hardware": "Haptic Devices Demo", "interaction_type": "Prezentace s vyzkoušením na pódiu", "capacity": 120, "reservation_required": false, "age_recommendation": "12+" }, { "id": "prog-31", "title": "Mrazivý signál z Enceladu: Ledový měsíc Saturnu", "original_title": "Signal from Enceladus: Saturn's Frozen Moon", "category": "Sci-Fi 360° Thriller", "day": 2, "date": "2026-10-24", "start_time": "14:00", "end_time": "14:45", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-30", "perf-37"], "description": "Fiktivní mise k ledovým gejzírům Saturnova měsíce, kde posádka zachytí periodický signál neznámého původu z podledovcového oceánu.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Cinematic", "capacity": 80, "reservation_required": true, "age_recommendation": "12+" }, { "id": "prog-32", "title": "Mocenské hry: Politický simulátor v kůži diplomata", "original_title": "Power Plays: Political Summit VR Simulator", "category": "Interaktivní drama", "day": 2, "date": "2026-10-24", "start_time": "14:00", "end_time": "14:45", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-22", "perf-35"], "description": "Vyjednáváte mírovou dohodu u virtuálního kulatého stolu. Sledujte mikrovýrazy obličejů a zvolte správná slova před začátkem konfliktu.", "vr_hardware": "HTC Vive Focus 3 Eye-tracking", "interaction_type": "Branching Story RPG", "capacity": 30, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-33", "title": "Binaurální opera: Kavalír růží v 360° orchestřišti", "original_title": "Binaural Opera: Der Rosenkavalier in 360°", "category": "Klasická hudba v XR", "day": 2, "date": "2026-10-24", "start_time": "14:30", "end_time": "15:15", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-54", "perf-20"], "description": "Prožijte slavné operní scény z pohledu dirigenta uprostřed 90členného filharmonického orchestru v Teatro alla Scala.", "vr_hardware": "Spatial Audio + Apple Vision Pro", "interaction_type": "Symphonic VR Immersion", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-34", "title": "FAMU Next-Gen: Prezentace studentských XR projektů", "original_title": "FAMU Next-Gen: Czech Student XR Showcase", "category": "Studentská tvorba", "day": 2, "date": "2026-10-24", "start_time": "15:30", "end_time": "17:00", "duration_minutes": 90, "stage_id": "stage-neon-creators", "performer_ids": ["perf-59", "perf-46", "perf-05"], "description": "Mladé talenty z katedry multimédií a animace FAMU představují své diplomové a ročníkové virtuální experimenty s otevřenou diskusí.", "vr_hardware": "Kombinace pódia a zkušebních kójí", "interaction_type": "Pitch & Showcase", "capacity": 120, "reservation_required": false, "age_recommendation": "12+" }, { "id": "prog-35", "title": "Bitva u Lipan v 360°: Živá historie na dosah meče", "original_title": "Battle of Lipany 360°: Living History", "category": "Historický český dokument", "day": 2, "date": "2026-10-24", "start_time": "15:30", "end_time": "16:15", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-36", "perf-15"], "description": "Historická rekonstrukce husitského válečnictví založená na archeologických výzkumech a volumetrickém snímání šermířů.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Re-enactment", "capacity": 80, "reservation_required": true, "age_recommendation": "12+" }, { "id": "prog-36", "title": "Manga Dimension Shift: Vstupte do stránek komiksu", "original_title": "Manga Dimension Shift: Stepping into the Page", "category": "Animovaný VR komiks", "day": 2, "date": "2026-10-24", "start_time": "15:30", "end_time": "16:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-38", "perf-02"], "description": "Procházejte se mezi černobílými okénky mangy a oživujte postavy svým dotekem v unikátním 2.5D stylu.", "vr_hardware": "HTC Vive Focus 3", "interaction_type": "Room-scale 6DOF Comic", "capacity": 30, "reservation_required": true, "age_recommendation": "10+" }, { "id": "prog-37", "title": "Zvuková architektura prázdnoty: Katedrála z ozvěn", "original_title": "Sonic Void: Cathedral of Echoes", "category": "Experimentální ambient", "day": 2, "date": "2026-10-24", "start_time": "16:00", "end_time": "16:45", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-39", "perf-07"], "description": "Virtuální gotická katedrála postavená pouze ze zvukových odrazů a pulzujících světelných prachových částic.", "vr_hardware": "Apple Vision Pro", "interaction_type": "Relax & Listening", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-38", "title": "Velká sobota: Soutěžní blok 3 – Vizuální poezie & AI sny", "original_title": "Grand Saturday: Competition Block 3 - Visual Poetry & AI Dreams", "category": "Hlavní festivalová soutěž", "day": 2, "date": "2026-10-24", "start_time": "17:00", "end_time": "18:45", "duration_minutes": 105, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-08", "perf-31", "perf-19", "perf-30"], "description": "Čtyři odvážné vizionářské filmy pracující s generativním uměním, neurálními deformacemi a abstraktním vyprávěním.", "vr_hardware": "Headset Bar 8K", "interaction_type": "Soutěžní projekce s hodnocením", "capacity": 80, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-39", "title": "Spatial Audio Masterclass: Jak míchat 64 kanálů pro VR", "original_title": "Spatial Audio Masterclass: 64 Channels in VR", "category": "Zvukový workshop", "day": 2, "date": "2026-10-24", "start_time": "17:30", "end_time": "18:45", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-07", "perf-20"], "description": "Praktické tipy pro tvorbu ambisonického zvuku v Pro Tools a Reaperu. Jak přesvědčit mozek, že zvuk přichází ze stropu?", "vr_hardware": "Dolby Atmos Rig v sále", "interaction_type": "Technická přednáška", "capacity": 120, "reservation_required": false, "age_recommendation": "15+" }, { "id": "prog-40", "title": "Sobotní VR Rave & Generativní audiovizuální set", "original_title": "Saturday VR Rave: Synaptic Live AV Party", "category": "Hudební XR párty", "day": 2, "date": "2026-10-24", "start_time": "20:00", "end_time": "23:00", "duration_minutes": 180, "stage_id": "stage-neon-creators", "performer_ids": ["perf-24", "perf-55", "perf-08"], "description": "Legendární festivalová party: DJ hraje živý set, zatímco VR malíři a VJové deformují virtuální prostor promítaný v sále i v brýlích.", "vr_hardware": "Kombinace klubového zvuku a volných VR brýlí", "interaction_type": "Live Concert & Party", "capacity": 120, "reservation_required": false, "age_recommendation": "18+" }, { "id": "prog-41", "title": "Rodinné nedělní dopoledne: Ptačí let nad Amazonií", "original_title": "Family Sunday: Bird Flight over Amazon", "category": "Dětský a rodinný zážitek", "day": 3, "date": "2026-10-25", "start_time": "09:30", "end_time": "10:15", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-13", "perf-42"], "description": "Nádherná animovaná podívaná pro děti i rodiče. Staňte se papouškem ara a plachtěte nad korunami pralesa.", "vr_hardware": "Meta Quest 3 Kids Safe", "interaction_type": "Seated 360° Flight", "capacity": 80, "reservation_required": true, "age_recommendation": "6+" }, { "id": "prog-42", "title": "Symbióza lesních hub: Cesta podhoubím", "original_title": "Mycelium Symbiosis: Journey Beneath the Soil", "category": "Přírodovědný VR mikrosvět", "day": 3, "date": "2026-10-25", "start_time": "10:00", "end_time": "10:45", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-14", "perf-34"], "description": "Zmenšete se na velikost spory a prozkoumejte komunikační síť lesních hub přenášející živiny a elektrické signály mezi stromy.", "vr_hardware": "Apple Vision Pro", "interaction_type": "Ambient Exploration", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-43", "title": "Kinetóza a ergonomie: Jak točit VR filmy bez nevolnosti", "original_title": "Cybersickness & Ergonomics: Motion Sickness Free VR", "category": "Odborná přednáška", "day": 3, "date": "2026-10-25", "start_time": "10:30", "end_time": "11:45", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-41", "perf-35"], "description": "Neurologické příčiny kinetózy a pravidla pro kameramany: jak správně pracovat se zrychlením, horizonem a FOV.", "vr_hardware": "Přednáškový sál", "interaction_type": "Odborná přednáška & Q&A", "capacity": 120, "reservation_required": false, "age_recommendation": "12+" }, { "id": "prog-44", "title": "Záchranářský modul: Hasičský zásah v mrakodrapu", "original_title": "Rescue Module: Skyscraper Fire 6DOF Sim", "category": "Adrenalinový simulátor", "day": 3, "date": "2026-10-25", "start_time": "10:30", "end_time": "11:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-10", "perf-32"], "description": "Simulace evakuace hořícího technologického centra s tepelnými infrazářiči a reálnou hasičskou hadicí.", "vr_hardware": "HTC Vive Focus 3 + termální simulátory", "interaction_type": "Emergency Response 6DOF", "capacity": 30, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-45", "title": "Pražské kavárny 20. let: Ztracený svět bohémů", "original_title": "Prague Cafés in the 1920s: Lost Bohemian World", "category": "Historická rekonstrukce", "day": 3, "date": "2026-10-25", "start_time": "11:00", "end_time": "11:40", "duration_minutes": 40, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-59", "perf-36"], "description": "Poseďte u jednoho stolu s Franzem Kafkou a Karlem Čapkem v precizně rekonstruované kavárně Slavia s dobovým jazzem.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Historical Vignette", "capacity": 80, "reservation_required": true, "age_recommendation": "10+" }, { "id": "prog-46", "title": "Digitální šaty a virtuální identita v Metaversu", "original_title": "Digital Fashion & Virtual Identity in the Metaverse", "category": "Móda a design v XR", "day": 3, "date": "2026-10-25", "start_time": "11:30", "end_time": "12:15", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-40", "perf-56"], "description": "Vyzkoušejte si procedurální digitální šaty, které mění texturu podle rytmu vašeho dechu a barev okolí.", "vr_hardware": "Apple Vision Pro Mirroring", "interaction_type": "Virtual Fitting Experience", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-47", "title": "Záhady hlubokého vesmíru: Černé díry a horizont událostí", "original_title": "Deep Space Mysteries: Black Holes & Event Horizon", "category": "Astrofyzikální 360° film", "day": 3, "date": "2026-10-25", "start_time": "12:15", "end_time": "13:00", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-12", "perf-30"], "description": "Vědecky přesná simulace gravitace černé díry podle Einsteinovy teorie relativity vytvořená ve spolupráci s astrofyziky.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Educational Space", "capacity": 80, "reservation_required": true, "age_recommendation": "10+" }, { "id": "prog-48", "title": "Souboj stínů: Interaktivní bojové umění Wuxia", "original_title": "Duel of Shadows: Interactive Wuxia Martial Arts", "category": "Akční pohybový 6DOF film", "day": 3, "date": "2026-10-25", "start_time": "12:00", "end_time": "12:45", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-18", "perf-43"], "description": "Staňte se mistrem bojových umění ve starověkém bambusovém lese. Pohybujte se v prostoru a odrážejte šípy pomocí meče.", "vr_hardware": "HTC Vive Focus 3 Controllers", "interaction_type": "Action 6DOF Swordplay", "capacity": 30, "reservation_required": true, "age_recommendation": "12+" }, { "id": "prog-49", "title": "Inspirace pro mladé tvůrce: Jak financovat VR projekt v Evropě", "original_title": "Funding XR Projects in Europe: Creative Europe & Grants", "category": "Průmyslový panel", "day": 3, "date": "2026-10-25", "start_time": "12:15", "end_time": "13:30", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-60", "perf-51", "perf-46"], "description": "Jak získat podporu z fondů Creative Europe, Státního fondu kinematografie a privátních investorů na nákladnou VR produkci.", "vr_hardware": "Konferenční sál", "interaction_type": "Průmyslová panelová diskuse", "capacity": 120, "reservation_required": false, "age_recommendation": "15+" }, { "id": "prog-50", "title": "Bonsai a ticho: Japonská zenová zahrada", "original_title": "Bonsai & Silence: Japanese Zen Sanctuary", "category": "Meditativní ambient", "day": 3, "date": "2026-10-25", "start_time": "13:00", "end_time": "13:45", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-02", "perf-27"], "description": "Tvarujte virtuální bonsaje a naslouchejte zvuku kapek padajících na bambusové stonky v tiché kjótské zahradě.", "vr_hardware": "Apple Vision Pro Hand Tracking", "interaction_type": "Zen Relax Garden", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-51", "title": "Doteky války: Rekonstrukce měst po katastrofě", "original_title": "Scars of Conflict: Post-Disaster Rebuilding", "category": "Dokumentární fotogrammetrie", "day": 3, "date": "2026-10-25", "start_time": "13:30", "end_time": "14:15", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-48", "perf-03"], "description": "Emotivní 3D skeny zničených historických památek a úsilí místních komunit o jejich obnovu a záchranu kulturní paměti.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Documentary", "capacity": 80, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-52", "title": "Kvantový únik: Experimentální multiplayer labyrint", "original_title": "Quantum Escape: Experimental Multiplayer Maze", "category": "Kooperativní 6DOF", "day": 3, "date": "2026-10-25", "start_time": "13:30", "end_time": "14:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-33", "perf-10"], "description": "Dva návštěvníci se vidí jako energetické bytosti a musí synchronizovat své pohyby v prostoru k otevření portálů.", "vr_hardware": "HTC Vive Focus 3 Colocated", "interaction_type": "Co-op Spatial Puzzle", "capacity": 30, "reservation_required": true, "age_recommendation": "12+" }, { "id": "prog-53", "title": "Etika a avataři v sociálním VR: Kam směřuje VRChat?", "original_title": "Ethics & Avatars: Where is Social VR Heading?", "category": "Sociologická přednáška", "day": 3, "date": "2026-10-25", "start_time": "14:00", "end_time": "15:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-56", "perf-23"], "description": "Jak anonymita a volba virtuální identity ovlivňuje mezilidské vztahy, duševní zdraví a budoucnost lidské komunikace.", "vr_hardware": "Konferenční sál", "interaction_type": "Přednáška & debata", "capacity": 120, "reservation_required": false, "age_recommendation": "15+" }, { "id": "prog-54", "title": "Symfonie pro světlo a mlhoviny: Vesmírné baroko", "original_title": "Symphony for Light & Nebulae: Cosmic Baroque", "category": "Audiovizuální báseň", "day": 3, "date": "2026-10-25", "start_time": "14:30", "end_time": "15:15", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-30", "perf-20"], "description": "Barokní varhanní skladby spojené s generativními astronomickými daty z teleskopu Jamese Webba.", "vr_hardware": "Apple Vision Pro Spatial Audio", "interaction_type": "Seated Cosmic Relax", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }, { "id": "prog-55", "title": "Retrospektiva vítězných děl festivalu Benátky VR", "original_title": "Venice VR Highlights Retrospective", "category": "Kurátorská přehlídka", "day": 3, "date": "2026-10-25", "start_time": "15:00", "end_time": "16:30", "duration_minutes": 90, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-11", "perf-03", "perf-60"], "description": "Exkluzivní projekce tří nejlépe hodnocených filmů ze sekce Venice Immersive posledních tří let.", "vr_hardware": "Headset Bar 8K", "interaction_type": "Filmová retrospektiva", "capacity": 80, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-56", "title": "Interaktivní divadlo: Poslední den Pompejí", "original_title": "Interactive Theatre: The Last Day of Pompeii", "category": "Imerzivní divadelní drama", "day": 3, "date": "2026-10-25", "start_time": "15:00", "end_time": "15:45", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-16", "perf-18"], "description": "Herci v motion capture oblecích hrají živě pro diváky v headsetech osudy pompejských měšťanů hodiny před erupcí Vesuvu.", "vr_hardware": "HTC Vive Focus 3 + Live Actors", "interaction_type": "Live Immersive Theatre", "capacity": 30, "reservation_required": true, "age_recommendation": "12+" }, { "id": "prog-57", "title": "Závěrečný ceremoniál & Předávání cen Křišťálový foton 2026", "original_title": "Closing Ceremony & Crystal Photon Awards 2026", "category": "Slavnostní zakončení", "day": 3, "date": "2026-10-25", "start_time": "17:00", "end_time": "18:30", "duration_minutes": 90, "stage_id": "stage-neon-creators", "performer_ids": ["perf-60", "perf-23", "perf-46", "perf-51"], "description": "Vyhlášení vítězů v kategoriích Nejlepší 360° film, Nejlepší 6DOF zážitek, Inovativní zvuk a Cena diváků CHROMASYNC 2026.", "vr_hardware": "Konferenční sál & Živý VR stream", "interaction_type": "Slavnostní gala večer", "capacity": 120, "reservation_required": true, "age_recommendation": "All ages" }, { "id": "prog-58", "title": "Projekce vítězných filmů CHROMASYNC 2026", "original_title": "Best of Fest: Winning Films Screening", "category": "Vítězné filmy", "day": 3, "date": "2026-10-25", "start_time": "19:00", "end_time": "20:30", "duration_minutes": 90, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-01", "perf-04", "perf-08"], "description": "Repríza všech oceněných děl 4. ročníku pro ty, kteří nestihli hlavní soutěžní projekce během víkendu.", "vr_hardware": "Headset Bar 8K", "interaction_type": "Vítězné projekce", "capacity": 80, "reservation_required": true, "age_recommendation": "15+" }, { "id": "prog-59", "title": "Výběr návštěvníků: Open 6DOF Arena Showcase", "original_title": "Audience Choice: Open 6DOF Arena Showcase", "category": "Interaktivní přehlídka", "day": 3, "date": "2026-10-25", "start_time": "19:00", "end_time": "20:15", "duration_minutes": 75, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-05", "perf-33", "perf-28"], "description": "Volný přístup k nejpopulárnějším interaktivním instalacím víkendu s asistencí festivalových kurátorů.", "vr_hardware": "HTC Vive Focus 3", "interaction_type": "Open Interactive Showcase", "capacity": 30, "reservation_required": false, "age_recommendation": "12+" }, { "id": "prog-60", "title": "Závěrečná ambientní meditace & Rozloučení s festivalem", "original_title": "Closing Ambient Farewell & Astral Sunset", "category": "Závěrečný relax", "day": 3, "date": "2026-10-25", "start_time": "20:00", "end_time": "21:30", "duration_minutes": 90, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-07", "perf-08", "perf-27"], "description": "Klidné zakončení festivalového maratonu. Vychutnejte si virtuální západ slunce nad nekonečným oceánem s ambientní harfou a prostorovým zvukem.", "vr_hardware": "Apple Vision Pro / Bigscreen Beyond", "interaction_type": "Farewell Ambient Lounge", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages" }] };

let appData = FESTIVAL_DATA;

// Application State
const state = {
  selectedDay: 'all',
  selectedStage: 'all',
  selectedTech: 'all',
  searchQuery: '',
  quickPill: null,
  viewMode: 'grid', // 'grid' | 'timeline'
  selectedCreatorRole: 'all',
  creatorsSearchQuery: '',
  mySchedule: JSON.parse(
    localStorage.getItem('chromasync_schedule') ||
    localStorage.getItem('proto_chromasync_schedule') ||
    '[]'
  ),
  reservations: JSON.parse(
    localStorage.getItem('chromasync_reservations') ||
    localStorage.getItem('proto_chromasync_reservations') ||
    '{}'
  ),
  currentDetailItem: null,
  simMode: '6dof'
};

// DOM Cache
const DOM = {};

document.addEventListener('DOMContentLoaded', async () => {
  // Fetch shared dataset from projekt/data.json (fallback to embedded data for file://)
  try {
    const res = await fetch('../data.json');
    if (res.ok) {
      appData = await res.json();
    }
  } catch (e) {
    console.info('Running via file:// protocol; using embedded festival data.');
  }

  cacheDOMElements();
  initGlobalNavigation();
  initScheduleDrawer();
  initModals();
  initAmbientCanvas();

  // Page-specific modules
  if (DOM.festivalCountdown) initCountdownTimer();
  if (DOM.headsetOrb) initHeadsetOrb();
  if (DOM.fovCanvas) initFovSimulator();
  if (DOM.featuredGrid) renderFeaturedHighlights();
  if (DOM.stagesGrid) renderStages();
  if (DOM.programGrid) initProgramPage();
  if (DOM.creatorsGrid) initCreatorsPage();
  if (DOM.contactForm) initContactForm();
  if (DOM.showreelPlayer) initShowreelPlayer();

  updateScheduleBadge();
});

function cacheDOMElements() {
  DOM.siteHeader = document.getElementById('site-header');
  DOM.scheduleDrawer = document.getElementById('schedule-drawer');
  DOM.drawerBackdrop = document.getElementById('drawer-overlay');
  DOM.btnCloseScheduleDrawer = document.getElementById('btn-close-schedule-drawer');
  DOM.scheduleCounter = document.getElementById('schedule-counter');
  DOM.scheduleCounterMobile = document.getElementById('schedule-counter-mobile');
  DOM.drawerScheduleContainer = document.getElementById('drawer-schedule-items-container');
  DOM.drawerCountInfo = document.getElementById('drawer-count-info');
  DOM.collisionAlertBox = document.getElementById('collision-alert-box');
  DOM.collisionAlertDesc = document.getElementById('collision-alert-desc');
  DOM.btnClearMySchedule = document.getElementById('btn-clear-my-schedule');
  DOM.btnExportSchedule = document.getElementById('btn-export-schedule');
  DOM.toastContainer = document.getElementById('toast-container');

  // Modals
  DOM.itemDetailDialog = document.getElementById('item-detail-dialog');
  DOM.btnCloseDetailDialog = document.getElementById('btn-close-detail-dialog');
  DOM.btnDialogCloseBottom = document.getElementById('btn-dialog-close-bottom');
  DOM.btnDialogToggleSchedule = document.getElementById('btn-dialog-toggle-schedule');
  DOM.reservationForm = document.getElementById('reservation-form');
  DOM.reservationSuccessMsg = document.getElementById('reservation-success-msg');
  DOM.reservationConfirmationDetails = document.getElementById('reservation-confirmation-details');

  DOM.creatorDetailDialog = document.getElementById('creator-detail-dialog');
  DOM.btnCloseCreatorDialog = document.getElementById('btn-close-creator-dialog');
  DOM.btnCreatorCloseBottom = document.getElementById('btn-creator-close-bottom');

  // Homepage Elements
  DOM.festivalCountdown = document.getElementById('festival-countdown');
  DOM.headsetOrb = document.getElementById('headset-interactive-orb');
  DOM.featuredGrid = document.getElementById('featured-highlights-grid');
  DOM.stagesGrid = document.getElementById('stages-grid');
  DOM.fovCanvas = document.getElementById('fov-simulator-canvas');
  DOM.showreelPlayer = document.getElementById('showreel-player-box');

  // Program Page Elements
  DOM.programGrid = document.getElementById('program-items-grid');
  DOM.programTimeline = document.getElementById('program-timeline-view');
  DOM.dayTabs = document.querySelectorAll('.day-tab');
  DOM.stageFilterSelect = document.getElementById('filter-stage-select');
  DOM.techFilterSelect = document.getElementById('filter-tech-select');
  DOM.programSearchInput = document.getElementById('program-search-input');
  DOM.btnClearSearch = document.getElementById('btn-clear-search');
  DOM.quickPills = document.querySelectorAll('.quick-pill');
  DOM.resultsCountText = document.getElementById('results-count-text');
  DOM.btnResetFilters = document.getElementById('btn-reset-filters');
  DOM.programEmptyState = document.getElementById('program-empty-state');
  DOM.btnEmptyReset = document.getElementById('btn-empty-reset');
  DOM.btnViewGrid = document.getElementById('btn-view-grid');
  DOM.btnViewTimeline = document.getElementById('btn-view-timeline');

  // Creators Page Elements
  DOM.creatorsGrid = document.getElementById('creators-grid');
  DOM.creatorsSearchInput = document.getElementById('creators-search-input');
  DOM.rolePills = document.querySelectorAll('.role-pill');
  DOM.creatorsResultsCount = document.getElementById('creators-count-text');

  // Practical / Contact Form Elements
  DOM.contactForm = document.getElementById('festival-contact-form');
}

/* --- GLOBAL NAVIGATION & SCHEDULE BADGE --- */
function initGlobalNavigation() {
  const btnDrawer = document.getElementById('btn-open-schedule-drawer');
  if (btnDrawer) btnDrawer.addEventListener('click', openScheduleDrawer);

  // Hamburger Menu Elements
  const btnHamburger = document.getElementById('btn-hamburger');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');

  function openMobileMenu() {
    if (!mobileNavMenu) return;
    mobileNavMenu.classList.add('open');
    if (btnHamburger) {
      btnHamburger.classList.add('open');
      btnHamburger.setAttribute('aria-expanded', 'true');
    }
    mobileNavMenu.setAttribute('aria-hidden', 'false');
    if (mobileNavBackdrop) {
      mobileNavBackdrop.classList.add('open');
      mobileNavBackdrop.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileNavMenu) return;
    mobileNavMenu.classList.remove('open');
    if (btnHamburger) {
      btnHamburger.classList.remove('open');
      btnHamburger.setAttribute('aria-expanded', 'false');
    }
    mobileNavMenu.setAttribute('aria-hidden', 'true');
    if (mobileNavBackdrop) {
      mobileNavBackdrop.classList.remove('open');
      mobileNavBackdrop.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  function toggleMobileMenu() {
    if (!mobileNavMenu) return;
    if (mobileNavMenu.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  if (btnHamburger) {
    btnHamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu when clicking any nav link
  if (mobileNavMenu) {
    const navLinks = mobileNavMenu.querySelectorAll('.mobile-nav-link, .mobile-nav-tickets-btn');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  const btnDrawerMobile = document.getElementById('btn-open-schedule-drawer-mobile');
  if (btnDrawerMobile) btnDrawerMobile.addEventListener('click', (e) => {
    e.preventDefault();
    closeMobileMenu();
    openScheduleDrawer();
  });

  // Close mobile menu on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavMenu && mobileNavMenu.classList.contains('open')) {
      closeMobileMenu();
      if (btnHamburger) btnHamburger.focus();
    }
  });

  // Auto-close on resize to desktop viewport
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileNavMenu && mobileNavMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // URL query parameter routing (e.g. ?day=2 or ?stage=stage-matrix-6dof)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('day')) {
    state.selectedDay = urlParams.get('day');
  }
  if (urlParams.has('stage')) {
    state.selectedStage = urlParams.get('stage');
  }
  if (urlParams.has('tech')) {
    state.selectedTech = urlParams.get('tech');
  }
}

function updateScheduleBadge() {
  const count = state.mySchedule.length;
  if (DOM.scheduleCounter) DOM.scheduleCounter.textContent = count;
  if (DOM.scheduleCounterMobile) DOM.scheduleCounterMobile.textContent = count;
  localStorage.setItem('chromasync_schedule', JSON.stringify(state.mySchedule));
}

/* --- SCHEDULE DRAWER & COLLISION DETECTION ALGORITHM --- */
function initScheduleDrawer() {
  if (!DOM.scheduleDrawer) return;

  if (DOM.btnCloseScheduleDrawer) DOM.btnCloseScheduleDrawer.addEventListener('click', closeScheduleDrawer);
  if (DOM.drawerBackdrop) DOM.drawerBackdrop.addEventListener('click', closeScheduleDrawer);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DOM.scheduleDrawer.classList.contains('open')) {
      closeScheduleDrawer();
    }
  });

  if (DOM.btnClearMySchedule) {
    DOM.btnClearMySchedule.addEventListener('click', () => {
      if (state.mySchedule.length === 0) return;
      if (confirm('Opravdu chcete vyprázdnit celý svůj rozvrh?')) {
        state.mySchedule = [];
        updateScheduleBadge();
        renderScheduleDrawerItems();
        if (DOM.programGrid) renderProgramItems();
        showToast('Váš rozvrh byl vyprázdněn.');
      }
    });
  }

  if (DOM.btnExportSchedule) {
    DOM.btnExportSchedule.addEventListener('click', () => {
      if (state.mySchedule.length === 0) {
        showToast('Váš rozvrh je prázdný, nejprve přidejte položky z programu.');
        return;
      }
      window.print();
    });
  }
}

function openScheduleDrawer() {
  if (!DOM.scheduleDrawer) return;
  renderScheduleDrawerItems();
  DOM.scheduleDrawer.classList.add('open');
  DOM.scheduleDrawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeScheduleDrawer() {
  if (!DOM.scheduleDrawer) return;
  DOM.scheduleDrawer.classList.remove('open');
  DOM.scheduleDrawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderScheduleDrawerItems() {
  if (!DOM.drawerScheduleContainer) return;
  DOM.drawerScheduleContainer.innerHTML = '';

  const items = (appData.program_items || []).filter(item => state.mySchedule.includes(item.id));

  // Chronological sort: by day, then start_time
  items.sort((a, b) => {
    if (a.day !== b.day) return a.day - b.day;
    return a.start_time.localeCompare(b.start_time);
  });

  if (DOM.drawerCountInfo) {
    DOM.drawerCountInfo.textContent = `${items.length} ${getNounDeclension(items.length, 'položka', 'položky', 'položek')}`;
  }

  if (items.length === 0) {
    DOM.drawerScheduleContainer.innerHTML = `
      <div class="empty-schedule-box">
        <span class="empty-icon">🔖</span>
        <h4>Váš rozvrh je zatím prázdný</h4>
        <p>V programu klikněte na „+ Do rozvrhu“ u vybraných filmů či vystoupení.</p>
        <a href="program.html" class="btn btn-primary" style="margin-top:1rem;">Otevřít program</a>
      </div>
    `;
    if (DOM.collisionAlertBox) DOM.collisionAlertBox.classList.add('hidden');
    return;
  }

  // Detect Collisions
  const collisions = detectScheduleCollisions(items);
  if (DOM.collisionAlertBox) {
    if (collisions.length > 0) {
      DOM.collisionAlertBox.classList.remove('hidden');
      DOM.collisionAlertDesc.innerHTML = `Následující položky se časově překrývají:<br><strong>${collisions.join('<br>')}</strong>`;
    } else {
      DOM.collisionAlertBox.classList.add('hidden');
    }
  }

  items.forEach(it => {
    const stage = (appData.stages || []).find(s => s.id === it.stage_id) || { name: it.stage_id };
    const hasReservation = Boolean(state.reservations[it.id]);
    const reservationCode = state.reservations[it.id]?.code;

    const el = document.createElement('article');
    el.className = 'drawer-schedule-item';
    el.innerHTML = `
      <div class="item-head">
        <span class="item-time">Den ${it.day} | ${it.start_time} – ${it.end_time}</span>
        <button class="btn-remove-item" data-id="${it.id}" aria-label="Odstranit ${it.title} z rozvrhu" title="Odebrat z rozvrhu">✕</button>
      </div>
      <h3 class="item-title">${it.title}</h3>
      <div class="item-stage">📍 ${stage.name}</div>
      <div class="item-meta-row">
        <span class="item-spec">${it.vr_hardware}</span>
        ${hasReservation ? `<span class="res-tag">✓ Rezervováno (${reservationCode})</span>` : ''}
      </div>
    `;

    el.querySelector('.btn-remove-item').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleScheduleItem(it.id);
      renderScheduleDrawerItems();
      if (DOM.programGrid) renderProgramItems();
    });

    el.addEventListener('click', () => {
      closeScheduleDrawer();
      openItemDetail(it.id);
    });

    DOM.drawerScheduleContainer.appendChild(el);
  });
}

function detectScheduleCollisions(sortedItems) {
  const collisions = [];

  for (let i = 0; i < sortedItems.length; i++) {
    for (let j = i + 1; j < sortedItems.length; j++) {
      const itemA = sortedItems[i];
      const itemB = sortedItems[j];

      if (itemA.day === itemB.day) {
        const startA = timeToMinutes(itemA.start_time);
        const endA = timeToMinutes(itemA.end_time);
        const startB = timeToMinutes(itemB.start_time);
        const endB = timeToMinutes(itemB.end_time);

        // Interval overlap: startA < endB and startB < endA
        if (startA < endB && startB < endA) {
          collisions.push(`⚠️ Den ${itemA.day}: „${itemA.title}“ (${itemA.start_time}–${itemA.end_time}) × „${itemB.title}“ (${itemB.start_time}–${itemB.end_time})`);
        }
      }
    }
  }

  return collisions;
}

function timeToMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function toggleScheduleItem(itemId) {
  const index = state.mySchedule.indexOf(itemId);
  const item = (appData.program_items || []).find(i => i.id === itemId);
  const title = item ? item.title : 'Položka';

  if (index >= 0) {
    state.mySchedule.splice(index, 1);
    showToast(`Odebráno z rozvrhu: „${title}“`);
  } else {
    state.mySchedule.push(itemId);
    showToast(`Přidáno do rozvrhu: „${title}“`);
  }

  updateScheduleBadge();
}

/* --- CONTEXTUAL DETAIL & VR SLOT RESERVATION (<dialog>) --- */
function initModals() {
  if (DOM.btnCloseDetailDialog) DOM.btnCloseDetailDialog.addEventListener('click', () => DOM.itemDetailDialog.close());
  if (DOM.btnDialogCloseBottom) DOM.btnDialogCloseBottom.addEventListener('click', () => DOM.itemDetailDialog.close());

  if (DOM.itemDetailDialog) {
    DOM.itemDetailDialog.addEventListener('click', (e) => {
      const rect = DOM.itemDetailDialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) DOM.itemDetailDialog.close();
    });
  }

  if (DOM.btnCloseCreatorDialog) DOM.btnCloseCreatorDialog.addEventListener('click', () => DOM.creatorDetailDialog.close());
  if (DOM.btnCreatorCloseBottom) DOM.btnCreatorCloseBottom.addEventListener('click', () => DOM.creatorDetailDialog.close());

  if (DOM.creatorDetailDialog) {
    DOM.creatorDetailDialog.addEventListener('click', (e) => {
      const rect = DOM.creatorDetailDialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) DOM.creatorDetailDialog.close();
    });
  }

  if (DOM.btnDialogToggleSchedule) {
    DOM.btnDialogToggleSchedule.addEventListener('click', () => {
      if (!state.currentDetailItem) return;
      toggleScheduleItem(state.currentDetailItem.id);
      updateDialogScheduleButton();
      if (DOM.programGrid) renderProgramItems();
    });
  }

  if (DOM.reservationForm) {
    DOM.reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!state.currentDetailItem) return;

      const nameInput = document.getElementById('reserve-user-name');
      const emailInput = document.getElementById('reserve-user-email');

      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        showToast('Vyplňte prosím své jméno a e-mail.');
        return;
      }

      const reservationCode = 'RES-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      state.reservations[state.currentDetailItem.id] = {
        code: reservationCode,
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        createdAt: new Date().toISOString()
      };

      localStorage.setItem('chromasync_reservations', JSON.stringify(state.reservations));

      if (!state.mySchedule.includes(state.currentDetailItem.id)) {
        state.mySchedule.push(state.currentDetailItem.id);
        updateScheduleBadge();
      }

      showReservationSuccess(reservationCode);
      if (DOM.programGrid) renderProgramItems();
      showToast(`Slot garantován! Váš kód: ${reservationCode}`);
    });
  }
}

function openItemDetail(itemId) {
  const item = (appData.program_items || []).find(i => i.id === itemId);
  if (!item || !DOM.itemDetailDialog) return;

  state.currentDetailItem = item;
  const stage = (appData.stages || []).find(s => s.id === item.stage_id) || { name: item.stage_id };

  document.getElementById('dialog-item-title').textContent = item.title;
  document.getElementById('dialog-item-original-title').textContent = item.original_title || '';
  document.getElementById('dialog-meta-time').textContent = `Den ${item.day} | ${item.start_time} – ${item.end_time} (${item.duration_minutes} min)`;
  document.getElementById('dialog-meta-stage').textContent = stage.name;
  document.getElementById('dialog-meta-hardware').textContent = item.vr_hardware || 'VR Headset';
  document.getElementById('dialog-meta-interaction').textContent = item.interaction_type || '6DOF / 360°';
  document.getElementById('dialog-item-description').textContent = item.description || 'Popis připravujeme.';

  const tagsContainer = document.getElementById('dialog-item-tags');
  tagsContainer.innerHTML = `
    <span class="spec-badge highlight">${item.category}</span>
    <span class="spec-badge">Věk: ${item.age_recommendation}</span>
    <span class="spec-badge">Kapacita: ${item.capacity} slotů</span>
  `;

  // Render creators in detail dialog
  const creatorsContainer = document.getElementById('dialog-creators-list');
  creatorsContainer.innerHTML = '';
  const creators = (appData.performers || []).filter(p => (item.performer_ids || []).includes(p.id));

  creators.forEach(c => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'creator-chip-btn';
    chip.innerHTML = `👤 <strong>${c.name}</strong> (${c.role}, ${c.country})`;
    chip.addEventListener('click', () => {
      DOM.itemDetailDialog.close();
      openCreatorDetail(c.id);
    });
    creatorsContainer.appendChild(chip);
  });

  // Reservation box status
  const resData = state.reservations[item.id];
  if (resData) {
    showReservationSuccess(resData.code);
  } else {
    DOM.reservationForm.classList.remove('hidden');
    DOM.reservationSuccessMsg.classList.add('hidden');
    DOM.reservationForm.reset();
  }

  updateDialogScheduleButton();
  DOM.itemDetailDialog.showModal();
}

function updateDialogScheduleButton() {
  if (!state.currentDetailItem || !DOM.btnDialogToggleSchedule) return;
  const isSaved = state.mySchedule.includes(state.currentDetailItem.id);
  DOM.btnDialogToggleSchedule.innerHTML = isSaved
    ? `<span class="icon">★</span> Odebrat z mého rozvrhu`
    : `<span class="icon">🔖</span> Přidat do mého rozvrhu`;
  DOM.btnDialogToggleSchedule.classList.toggle('active', isSaved);
}

function showReservationSuccess(code) {
  if (!DOM.reservationForm || !DOM.reservationSuccessMsg) return;
  DOM.reservationForm.classList.add('hidden');
  DOM.reservationSuccessMsg.classList.remove('hidden');
  DOM.reservationConfirmationDetails.innerHTML = `
    Váš garantovaný rezervační kód: <strong style="color:var(--neon-cyan); font-family:var(--font-mono); font-size:1.1rem;">${code}</strong><br>
    Doražte prosím na scénu nejpozději 10 minut předem pro nasazení a kalibraci headsetu.
  `;
}

function openCreatorDetail(creatorId) {
  const performer = (appData.performers || []).find(p => p.id === creatorId);
  if (!performer || !DOM.creatorDetailDialog) return;

  document.getElementById('creator-dialog-name').textContent = performer.name;
  document.getElementById('creator-dialog-role').textContent = `${performer.role} | ${performer.country}`;
  document.getElementById('creator-dialog-bio').textContent = performer.bio || 'Biografie se připravuje.';

  const tagsRow = document.getElementById('creator-dialog-tags');
  tagsRow.innerHTML = (performer.tags || []).map(t => `<span class="spec-badge highlight">${t}</span>`).join(' ');

  const events = (appData.program_items || []).filter(item => (item.performer_ids || []).includes(creatorId));
  const eventsContainer = document.getElementById('creator-dialog-events-list');
  eventsContainer.innerHTML = '';

  if (events.length === 0) {
    eventsContainer.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem;">Žádné vypsané akce v programu.</p>';
  } else {
    events.forEach(ev => {
      const row = document.createElement('div');
      row.className = 'creator-event-row';
      const isSaved = state.mySchedule.includes(ev.id);
      row.innerHTML = `
        <div>
          <div style="font-weight:700; font-size:0.9rem;">${ev.title}</div>
          <div style="font-size:0.75rem; color:var(--neon-cyan); font-family:var(--font-mono);">Den ${ev.day} | ${ev.start_time} – ${ev.end_time} (${ev.stage_id})</div>
        </div>
        <button class="btn btn-glass" style="padding:0.4rem 0.85rem; font-size:0.8rem;" id="btn-creator-event-${ev.id}">
          ${isSaved ? '★ V rozvrhu' : '+ Přidat'}
        </button>
      `;
      row.querySelector(`#btn-creator-event-${ev.id}`).addEventListener('click', (e) => {
        e.stopPropagation();
        toggleScheduleItem(ev.id);
        row.querySelector(`#btn-creator-event-${ev.id}`).textContent = state.mySchedule.includes(ev.id) ? '★ V rozvrhu' : '+ Přidat';
      });
      eventsContainer.appendChild(row);
    });
  }

  DOM.creatorDetailDialog.showModal();
}

/* --- PROGRAM PAGE LOGIC --- */
function initProgramPage() {
  // Day selector tabs
  DOM.dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      DOM.dayTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.selectedDay = tab.dataset.day;
      renderProgramItems();
    });
  });

  // Stage & Tech filters
  if (DOM.stageFilterSelect) {
    DOM.stageFilterSelect.addEventListener('change', (e) => {
      state.selectedStage = e.target.value;
      renderProgramItems();
    });
    if (state.selectedStage !== 'all') DOM.stageFilterSelect.value = state.selectedStage;
  }

  if (DOM.techFilterSelect) {
    DOM.techFilterSelect.addEventListener('change', (e) => {
      state.selectedTech = e.target.value;
      renderProgramItems();
    });
    if (state.selectedTech !== 'all') DOM.techFilterSelect.value = state.selectedTech;
  }

  // Live Search with clear button
  if (DOM.programSearchInput) {
    DOM.programSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      if (DOM.btnClearSearch) DOM.btnClearSearch.classList.toggle('visible', state.searchQuery.length > 0);
      renderProgramItems();
    });
  }

  if (DOM.btnClearSearch) {
    DOM.btnClearSearch.addEventListener('click', () => {
      DOM.programSearchInput.value = '';
      state.searchQuery = '';
      DOM.btnClearSearch.classList.remove('visible');
      renderProgramItems();
      DOM.programSearchInput.focus();
    });
  }

  // Quick Pills
  DOM.quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const val = pill.dataset.pill;
      if (state.quickPill === val) {
        state.quickPill = null;
        pill.classList.remove('active');
      } else {
        DOM.quickPills.forEach(p => p.classList.remove('active'));
        state.quickPill = val;
        pill.classList.add('active');
      }
      renderProgramItems();
    });
  });

  // Reset Filters
  if (DOM.btnResetFilters) DOM.btnResetFilters.addEventListener('click', resetAllProgramFilters);
  if (DOM.btnEmptyReset) DOM.btnEmptyReset.addEventListener('click', resetAllProgramFilters);

  // View Mode Switcher: Cards Grid vs Timeline
  if (DOM.btnViewGrid) {
    DOM.btnViewGrid.addEventListener('click', () => {
      state.viewMode = 'grid';
      DOM.btnViewGrid.classList.add('active');
      if (DOM.btnViewTimeline) DOM.btnViewTimeline.classList.remove('active');
      if (DOM.programGrid) DOM.programGrid.classList.remove('hidden');
      if (DOM.programTimeline) DOM.programTimeline.classList.add('hidden');
      renderProgramItems();
    });
  }

  if (DOM.btnViewTimeline) {
    DOM.btnViewTimeline.addEventListener('click', () => {
      state.viewMode = 'timeline';
      DOM.btnViewTimeline.classList.add('active');
      if (DOM.btnViewGrid) DOM.btnViewGrid.classList.remove('active');
      if (DOM.programGrid) DOM.programGrid.classList.add('hidden');
      if (DOM.programTimeline) DOM.programTimeline.classList.remove('hidden');
      renderProgramItems();
    });
  }

  renderProgramItems();
}

function resetAllProgramFilters() {
  state.selectedDay = 'all';
  state.selectedStage = 'all';
  state.selectedTech = 'all';
  state.searchQuery = '';
  state.quickPill = null;

  DOM.dayTabs.forEach(t => {
    t.classList.toggle('active', t.dataset.day === 'all');
    t.setAttribute('aria-selected', t.dataset.day === 'all' ? 'true' : 'false');
  });

  if (DOM.stageFilterSelect) DOM.stageFilterSelect.value = 'all';
  if (DOM.techFilterSelect) DOM.techFilterSelect.value = 'all';
  if (DOM.programSearchInput) DOM.programSearchInput.value = '';
  if (DOM.btnClearSearch) DOM.btnClearSearch.classList.remove('visible');
  DOM.quickPills.forEach(p => p.classList.remove('active'));

  renderProgramItems();
  showToast('Filtry byly obnoveny.');
}

function getFilteredProgramItems() {
  const items = appData.program_items || [];

  return items.filter(item => {
    // 1. Day
    if (state.selectedDay !== 'all' && String(item.day) !== String(state.selectedDay)) return false;

    // 2. Stage
    if (state.selectedStage !== 'all' && item.stage_id !== state.selectedStage) return false;

    // 3. Tech filter
    if (state.selectedTech !== 'all') {
      const hw = (item.vr_hardware || '').toLowerCase();
      const inter = (item.interaction_type || '').toLowerCase();
      const cat = (item.category || '').toLowerCase();

      if (state.selectedTech === '6dof' && !inter.includes('6dof') && !hw.includes('vive')) return false;
      if (state.selectedTech === 'haptic' && !hw.includes('vesta') && !hw.includes('tactsuit') && !inter.includes('hapt')) return false;
      if (state.selectedTech === '360' && !inter.includes('360') && !cat.includes('360')) return false;
      if (state.selectedTech === 'visionpro' && !hw.includes('vision pro') && !inter.includes('hand-tracking')) return false;
      if (state.selectedTech === 'talk' && !cat.includes('masterclass') && !cat.includes('přednáška') && !cat.includes('panel')) return false;
    }

    // 4. Quick pills
    if (state.quickPill) {
      const fullText = `${item.title} ${item.original_title} ${item.description} ${item.vr_hardware} ${item.interaction_type} ${item.category}`.toLowerCase();
      if (state.quickPill === 'haptic' && !fullText.includes('hapt') && !fullText.includes('vest')) return false;
      if (state.quickPill === '6dof' && !fullText.includes('6dof') && !fullText.includes('prostor')) return false;
      if (state.quickPill === 'sci-fi' && !fullText.includes('sci-fi') && !fullText.includes('cyber') && !fullText.includes('vesmír')) return false;
      if (state.quickPill === 'kids' && item.age_recommendation !== 'All ages' && item.age_recommendation !== '6+') return false;
      if (state.quickPill === 'cz') {
        const performers = (appData.performers || []).filter(p => (item.performer_ids || []).includes(p.id));
        const hasCzPerformer = performers.some(p => p.country === 'Česko' || (p.tags || []).includes('Česko'));
        if (!hasCzPerformer && !fullText.includes('česk')) return false;
      }
    }

    // 5. Search query
    if (state.searchQuery) {
      const q = state.searchQuery;
      const titleMatch = (item.title || '').toLowerCase().includes(q);
      const origMatch = (item.original_title || '').toLowerCase().includes(q);
      const descMatch = (item.description || '').toLowerCase().includes(q);
      const catMatch = (item.category || '').toLowerCase().includes(q);

      const performers = (appData.performers || []).filter(p => (item.performer_ids || []).includes(p.id));
      const perfMatch = performers.some(p => p.name.toLowerCase().includes(q));

      if (!titleMatch && !origMatch && !descMatch && !catMatch && !perfMatch) return false;
    }

    return true;
  });
}

function renderProgramItems() {
  const filtered = getFilteredProgramItems();

  if (DOM.resultsCountText) {
    DOM.resultsCountText.textContent = `Zobrazeno ${filtered.length} ${getNounDeclension(filtered.length, 'programová položka', 'programové položky', 'programových položek')}`;
  }

  const isEmpty = filtered.length === 0;
  if (DOM.programEmptyState) DOM.programEmptyState.classList.toggle('hidden', !isEmpty);

  if (state.viewMode === 'timeline') {
    renderTimelineView(filtered);
  } else {
    renderGridView(filtered);
  }
}

function renderGridView(items) {
  if (!DOM.programGrid) return;
  DOM.programGrid.innerHTML = '';

  items.forEach(it => {
    const card = createProgramCardElement(it);
    DOM.programGrid.appendChild(card);
  });
}

function renderTimelineView(items) {
  if (!DOM.programTimeline) return;
  DOM.programTimeline.innerHTML = '';

  // Sort items by day, then by time
  const sorted = [...items].sort((a, b) => {
    if (a.day !== b.day) return a.day - b.day;
    return a.start_time.localeCompare(b.start_time);
  });

  // Group by hour
  const groups = {};
  sorted.forEach(it => {
    const hour = it.start_time.split(':')[0] + ':00';
    const key = `Den ${it.day} – ${hour}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(it);
  });

  Object.entries(groups).forEach(([hourLabel, groupItems]) => {
    const groupEl = document.createElement('div');
    groupEl.className = 'timeline-hour-group';

    const label = document.createElement('h3');
    label.className = 'timeline-hour-label';
    label.textContent = hourLabel;
    groupEl.appendChild(label);

    const grid = document.createElement('div');
    grid.className = 'timeline-cards-grid';

    groupItems.forEach(it => {
      const card = createProgramCardElement(it);
      grid.appendChild(card);
    });

    groupEl.appendChild(grid);
    DOM.programTimeline.appendChild(groupEl);
  });
}

function createProgramCardElement(it) {
  const stage = (appData.stages || []).find(s => s.id === it.stage_id) || { name: it.stage_id };
  const isSaved = state.mySchedule.includes(it.id);
  const isReserved = Boolean(state.reservations[it.id]);

  const card = document.createElement('article');
  card.className = `program-card ${isSaved ? 'saved-in-schedule' : ''}`;
  card.innerHTML = `
    <div class="program-card-head">
      <span class="card-time-badge">Den ${it.day} | ${it.start_time} – ${it.end_time}</span>
      <span class="card-stage-name">${stage.name.split(':')[0]}</span>
    </div>

    <h3 class="program-card-title">${it.title}</h3>
    ${it.original_title ? `<div class="program-card-original-title">${it.original_title}</div>` : ''}

    <p class="program-card-desc">${it.description || ''}</p>

    <div class="card-specs-row">
      <span class="spec-badge highlight">${it.category}</span>
      <span class="spec-badge">${it.vr_hardware}</span>
      <span class="spec-badge">${it.age_recommendation}</span>
    </div>

    <div class="program-card-foot">
      <button type="button" class="btn-card-schedule ${isSaved ? 'active' : ''}" id="btn-toggle-sched-${it.id}" aria-label="${isSaved ? 'Odebrat z rozvrhu' : 'Přidat do mého rozvrhu'}">
        <span class="icon">${isSaved ? '★' : '🔖'}</span>
        <span class="txt">${isSaved ? 'V rozvrhu' : '+ Rozvrh'}</span>
      </button>

      <button type="button" class="btn-card-detail" id="btn-detail-${it.id}">
        ${isReserved ? '✓ Rezervováno' : 'Detail & Slot →'}
      </button>
    </div>
  `;

  card.querySelector(`#btn-toggle-sched-${it.id}`).addEventListener('click', (e) => {
    e.stopPropagation();
    toggleScheduleItem(it.id);
    renderProgramItems();
  });

  card.querySelector(`#btn-detail-${it.id}`).addEventListener('click', (e) => {
    e.stopPropagation();
    openItemDetail(it.id);
  });

  card.addEventListener('click', () => {
    openItemDetail(it.id);
  });

  return card;
}

/* --- HOMEPAGE FEATURED HIGHLIGHTS --- */
function renderFeaturedHighlights() {
  if (!DOM.featuredGrid) return;
  DOM.featuredGrid.innerHTML = '';

  const featuredIds = ['prog-27', 'prog-05', 'prog-23', 'prog-42'];
  const items = (appData.program_items || []).filter(i => featuredIds.includes(i.id));

  items.forEach(it => {
    const stage = (appData.stages || []).find(s => s.id === it.stage_id) || { name: it.stage_id };
    const isSaved = state.mySchedule.includes(it.id);

    const card = document.createElement('article');
    card.className = 'featured-card';
    card.innerHTML = `
      <span class="featured-card-badge">${stage.name.split(':')[0]}</span>
      <h3 class="featured-card-title">${it.title}</h3>
      <p class="featured-card-desc">${it.description}</p>
      <div class="card-specs-row" style="margin-bottom:1rem;">
        <span class="spec-badge highlight">Den ${it.day} | ${it.start_time}</span>
        <span class="spec-badge">${it.vr_hardware}</span>
      </div>
      <div class="featured-card-foot">
        <button type="button" class="btn btn-primary" style="flex:1; font-size:0.82rem;" id="btn-feat-detail-${it.id}">
          Detail & Rezervace
        </button>
        <button type="button" class="btn btn-glass" style="font-size:0.82rem; padding:0.5rem 0.8rem;" id="btn-feat-sched-${it.id}">
          ${isSaved ? '★' : '🔖'}
        </button>
      </div>
    `;

    card.querySelector(`#btn-feat-detail-${it.id}`).addEventListener('click', () => openItemDetail(it.id));
    card.querySelector(`#btn-feat-sched-${it.id}`).addEventListener('click', () => {
      toggleScheduleItem(it.id);
      renderFeaturedHighlights();
    });

    DOM.featuredGrid.appendChild(card);
  });
}

/* --- CREATORS PAGE LOGIC --- */
function initCreatorsPage() {
  DOM.rolePills.forEach(pill => {
    pill.addEventListener('click', () => {
      DOM.rolePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.selectedCreatorRole = pill.dataset.role;
      renderCreators();
    });
  });

  if (DOM.creatorsSearchInput) {
    DOM.creatorsSearchInput.addEventListener('input', (e) => {
      state.creatorsSearchQuery = e.target.value.toLowerCase().trim();
      renderCreators();
    });
  }

  renderCreators();
}

function renderCreators() {
  if (!DOM.creatorsGrid) return;
  DOM.creatorsGrid.innerHTML = '';

  const creators = (appData.performers || []).filter(c => {
    // Role filter
    if (state.selectedCreatorRole !== 'all') {
      if (state.selectedCreatorRole === 'Režisér' && !c.role.includes('Režis')) return false;
      if (state.selectedCreatorRole === 'Studio' && !c.role.includes('Studio')) return false;
      if (state.selectedCreatorRole === '3D' && !c.role.includes('3D') && !c.role.includes('VFX')) return false;
      if (state.selectedCreatorRole === 'Audio' && !c.role.includes('Zvuk') && !c.role.includes('Audio') && !c.role.includes('Hud')) return false;
      if (state.selectedCreatorRole === 'Česko' && c.country !== 'Česko') return false;
    }

    // Search query
    if (state.creatorsSearchQuery) {
      const q = state.creatorsSearchQuery;
      const matchName = c.name.toLowerCase().includes(q);
      const matchBio = (c.bio || '').toLowerCase().includes(q);
      const matchCountry = (c.country || '').toLowerCase().includes(q);
      const matchTags = (c.tags || []).some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchBio && !matchCountry && !matchTags) return false;
    }

    return true;
  });

  if (DOM.creatorsResultsCount) {
    DOM.creatorsResultsCount.textContent = `Zobrazeno ${creators.length} ${getNounDeclension(creators.length, 'tvůrce', 'tvůrci', 'tvůrců')}`;
  }

  creators.forEach(c => {
    const card = document.createElement('article');
    card.className = 'creator-card';

    // Deterministic accent hue so the 60 creator avatars feel varied.
    const hue = [...c.name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % 360;
    card.style.setProperty('--creator-hue', hue);

    card.innerHTML = `
      <div class="creator-card-head">
        <div class="creator-avatar" aria-hidden="true">👤</div>
        <div class="creator-headings">
          <h3 class="creator-name">${c.name}</h3>
          <div class="creator-role">${c.role}</div>
          <div class="creator-country">📍 ${c.country}</div>
        </div>
      </div>
      <p class="creator-bio-snippet">${c.bio || ''}</p>
      <div class="creator-tags">
        ${(c.tags || []).slice(0, 3).map(t => `<span class="spec-badge">${t}</span>`).join('')}
      </div>
      <div class="creator-card-foot">
        <span class="creator-cta">Zobrazit profil &amp; díla <span aria-hidden="true">→</span></span>
      </div>
      <button type="button" class="creator-card-hit" aria-label="Zobrazit profil: ${c.name}"></button>
    `;

    card.querySelector('.creator-card-hit').addEventListener('click', () => openCreatorDetail(c.id));
    DOM.creatorsGrid.appendChild(card);
  });
}

/* --- STAGES SECTION --- */
function renderStages() {
  if (!DOM.stagesGrid) return;
  const stages = appData.stages || [];
  DOM.stagesGrid.innerHTML = '';

  stages.forEach(st => {
    const card = document.createElement('article');
    card.className = 'stage-card';
    card.innerHTML = `
      <span class="stage-badge">Kapacita: ${st.capacity} osob</span>
      <h3 class="stage-title">${st.name}</h3>
      <div class="stage-type">${st.type}</div>
      <p class="stage-desc">${st.description}</p>
      <div class="stage-hw-list">
        ${(st.hardware || []).map(h => `<span class="spec-badge">${h}</span>`).join('')}
      </div>
      <a href="program.html?stage=${st.id}" class="btn btn-glass" style="margin-top:1rem; width:100%; font-size:0.85rem;">
        Zobrazit program této scény →
      </a>
    `;
    DOM.stagesGrid.appendChild(card);
  });
}

/* --- COUNTDOWN TIMER --- */
function initCountdownTimer() {
  const targetDate = new Date('2026-10-23T09:00:00+02:00').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      if (DOM.festivalCountdown) DOM.festivalCountdown.innerHTML = '<strong>Festival právě probíhá!</strong>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minsEl = document.getElementById('countdown-mins');
    const secsEl = document.getElementById('countdown-secs');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* --- HERO HEADSET ORB 3D TILT --- */
function initHeadsetOrb() {
  const orb = DOM.headsetOrb;
  if (!orb) return;

  const model = orb.querySelector('.orb-model');
  if (!model) return;

  orb.addEventListener('mousemove', (e) => {
    const rect = orb.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    model.style.transform = `rotateY(${x * 0.35}deg) rotateX(${-y * 0.35}deg)`;
  });

  orb.addEventListener('mouseleave', () => {
    model.style.transform = 'rotateY(0deg) rotateX(0deg)';
  });

  orb.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const rect = orb.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left - rect.width / 2;
      const y = e.touches[0].clientY - rect.top - rect.height / 2;
      model.style.transform = `rotateY(${x * 0.4}deg) rotateX(${-y * 0.4}deg)`;
    }
  }, { passive: true });
}

/* --- 3D CANVAS FOV & SENSORY SIMULATOR (Interaktivní funkce 5) --- */
function initFovSimulator() {
  const canvas = DOM.fovCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let mouseX = 0;
  let mouseY = 0;

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    mouseY = (e.clientY - rect.top) / rect.height - 0.5;
  });

  const btn6dof = document.getElementById('btn-mode-6dof');
  const btn3dof = document.getElementById('btn-mode-3dof');
  const btnAmbient = document.getElementById('btn-mode-ambient');
  const hudMode = document.getElementById('hud-mode-display');

  const setMode = (mode, label) => {
    state.simMode = mode;
    [btn6dof, btn3dof, btnAmbient].forEach(b => b?.classList.remove('active'));
    if (mode === '6dof') btn6dof?.classList.add('active');
    if (mode === '3dof') btn3dof?.classList.add('active');
    if (mode === 'ambient') btnAmbient?.classList.add('active');
    if (hudMode) hudMode.textContent = `Mód: ${label}`;
  };

  btn6dof?.addEventListener('click', () => setMode('6dof', '6DOF Room-scale'));
  btn3dof?.addEventListener('click', () => setMode('3dof', '3DOF 360° Cinema'));
  btnAmbient?.addEventListener('click', () => setMode('ambient', 'Ambient Spatial Audio'));

  // Haptic Button Simulation
  const btnHaptic = document.getElementById('btn-test-haptic');
  const hapticMsg = document.getElementById('haptic-feedback-msg');

  btnHaptic?.addEventListener('click', () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 150, 50, 250]);
    }
    if (hapticMsg) {
      hapticMsg.textContent = '⚡ Haptický pulz aktivován (TactSuit)';
      hapticMsg.style.color = 'var(--neon-magenta)';
      setTimeout(() => { hapticMsg.textContent = ''; }, 2500);
    }
    showToast('📳 Haptický test spuštěn: sekvence bHaptics TactSuit X40 simulována.');
  });

  // Particle Points
  const points = [];
  for (let i = 0; i < 48; i++) {
    points.push({
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 400,
      z: Math.random() * 800 + 100,
      baseColor: i % 2 === 0 ? '#00f0ff' : '#ff007a'
    });
  }

  function renderSim(time) {
    ctx.fillStyle = '#080914';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Grid Floor
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = -300; x <= 300; x += 50) {
      const offsetX = state.simMode === '6dof' ? mouseX * 80 : 0;
      ctx.moveTo(cx + x + offsetX, cy + 50);
      ctx.lineTo(cx + x * 2.5 + offsetX * 2, canvas.height);
    }
    ctx.stroke();

    // Render interactive nodes
    points.forEach(p => {
      let px = p.x;
      let py = p.y;
      let pz = p.z;

      if (state.simMode === '6dof') {
        px += mouseX * 140;
        py += mouseY * 90;
      } else if (state.simMode === '3dof') {
        const angle = mouseX * 1.5;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const rx = px * cos - pz * sin;
        const rz = px * sin + pz * cos;
        px = rx;
        pz = rz;
      } else if (state.simMode === 'ambient') {
        py += Math.sin(time * 0.003 + p.x) * 20;
      }

      if (pz > 10) {
        const scale = 250 / (pz + 250);
        const sx = cx + px * scale;
        const sy = cy + py * scale;
        const radius = Math.max(1.5, 5 * scale);

        ctx.fillStyle = p.baseColor;
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fill();

        if (state.simMode === 'ambient') {
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
          ctx.beginPath();
          ctx.arc(sx, sy, radius * 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(renderSim);
  }

  renderSim(0);
}

/* --- AMBIENT CANVAS BACKGROUND --- */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const stars = [];
  for (let i = 0; i < 40; i++) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.2 + 0.05
    });
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.y -= s.speed;
      if (s.y < 0) s.y = canvas.height;
      ctx.fillStyle = `rgba(0, 240, 255, ${s.alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

/* --- SHOWREEL PLAYER PREVIEW --- */
function initShowreelPlayer() {
  const box = DOM.showreelPlayer;
  if (!box) return;
  box.addEventListener('click', () => {
    showToast('🎬 Spouštím oficiální teaser festivalu CHROMASYNC 2026 (4K 60FPS Spatial Audio)...');
  });
}

/* --- PRACTICAL CONTACT FORM --- */
function initContactForm() {
  const form = DOM.contactForm;
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value;
    const msg = document.getElementById('contact-message').value.trim();

    if (!name || !email || !msg) {
      showToast('Vyplňte prosím všechna povinná pole.');
      return;
    }

    form.reset();
    showToast(`Děkujeme, ${name}! Vaše zpráva ohledně „${subject}“ byla odeslána.`);
  });
}

/* --- TOAST NOTIFICATIONS --- */
function showToast(message) {
  if (!DOM.toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

/* --- UTILITY: CZECH NOUN DECLENSION --- */
function getNounDeclension(n, one, few, many) {
  if (n === 1) return one;
  if (n >= 2 && n <= 4) return few;
  return many;
}
