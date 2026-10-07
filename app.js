/**
 * CHROMASYNC VR FILM FESTIVAL 2026 - Main Interactive Application
 * Vanilla JS, Zero-dependency, Offline/File-protocol compatible, Mobile-first.
 */

// Embedded fallback data in case browser blocks fetch() under file:/// protocol
const FESTIVAL_FALLBACK_DATA = {"festival": {"id": "chromasync-2026", "name": "CHROMASYNC VR FILM FESTIVAL", "edition": "4. ročník", "year": 2026, "dates": {"start": "2026-10-23", "end": "2026-10-25", "formatted": "23. – 25. října 2026"}, "location": {"city": "Praha", "venue": "Výstaviště Praha & Křižíkovy pavilony", "address": "Výstaviště 67, 170 00 Praha 7 - Holešovice", "coordinates": {"lat": 50.1062, "lng": 14.4308}}, "motto": "Za hranicemi plochého plátna: Vstupte do filmu, který vás obklopí.", "character": "Mezinárodní festival zaměřený na virtuální realitu, 360° imerzivní kinematografii, prostorové vyprávění (spatial storytelling) a interaktivní 6DOF zážitky. Barevný, hravý a technologicky progresivní festival propojující filmové umění, herní mechaniky a prostorový zvuk.", "genres_and_themes": ["Sci-Fi & Cyberpunk Spatial Worlds", "Imerzivní dokument a sociální empatie", "6DOF Interaktivní narrativní hry", "Generativní AI sny a fraktální 3D umění", "Animovaný VR film & rodinné světy", "Spatial Audio & virtuální koncerty"], "stats": {"days_count": 3, "stages_count": 4, "performers_count": 60, "program_items_count": 60, "headsets_available": 120, "expected_visitors": 4500}}, "stages": [{"id": "stage-dome-alpha", "name": "Dome Alpha: Spatial HoloCinema", "type": "Imerzivní 360° kopule a synchronizované 8K headset bary", "capacity": 80, "description": "Hlavní monumentální scéna pro společné sledování 360° filmů v synchronizovaném zobrazení. 8K projekční kopule doplňuje 40 sedadel s prémiovými headsety s prostorovým ozvučením Dolby Atmos.", "hardware": ["Meta Quest 3 Pro", "Spatial Audio Array", "360 Dome Projector 8K"], "location_hint": "Pavilon B – centrální dvorana"}, {"id": "stage-matrix-6dof", "name": "Matrix Arena: 6DOF Interactive Lab", "type": "Volný pohyb po prostoru (Room-scale 6DOF) & haptické vesty", "capacity": 30, "description": "Zóna pro volný pohyb v reálném prostoru s optickým trackingem a haptickými vestami bBHaptics. Divák zde není jen pozorovatelem, ale aktivním protagonistou filmového děje.", "hardware": ["HTC Vive Focus 3", "bHaptics TactSuit X40", "Subpac M2X"], "location_hint": "Pavilon C – severní křídlo"}, {"id": "stage-neon-creators", "name": "Neon Stage: Creators & Masterclasses", "type": "Přednáškový sál, živé diskuse, live VR performance", "capacity": 120, "description": "Živá scéna s velkoplošným LED pódiem, kde režiséři, 3D vývojáři a zvukaři prezentují své postupy, vedou debaty s publikem a demonstrují live-coding a tvorbu ve VR v reálném čase.", "hardware": ["OptiTrack Live Broadcast", "LED Wall 4K", "Spatial Audio Rig"], "location_hint": "Pavilon A – konferenční sál"}, {"id": "stage-oasis-chill", "name": "Oasis Hub: Ambient & Sensory VR", "type": "Meditativní a experimentální zóna s lehkými headsety", "capacity": 45, "description": "Klidová relaxační oáza s ergonomickými sedacími vaky, ambientním generativním osvětlením a ultra-lehkými headsety zaměřená na meditativní, poetické a snové VR projekty.", "hardware": ["Bigscreen Beyond", "Apple Vision Pro", "Aromaterapeutické trysky"], "location_hint": "Pavilon D – chillout zóna a mezipatro"}], "performers": [{"id": "perf-01", "name": "Elena Rostova", "role": "Režisérka a VR scenáristka", "country": "Německo", "bio": "Průkopnice narativního 6DOF filmu, absolventka Filmové akademie v Baden-Württembergu.", "tags": ["Sci-Fi", "6DOF", "Režie"], "website": "https://creators.chromasync.cz/perf-01", "avatar": "/assets/performers/perf-01.webp"}, {"id": "perf-02", "name": "Kenji Takahashi", "role": "Lead 3D Worldbuilder & VFX Artist", "country": "Japonsko", "bio": "Bývalý designér Square Enix, zaměřující se na neoklasický cyberpunk a fotorealistická virtuální města.", "tags": ["Cyberpunk", "3D Art", "Unreal Engine"], "website": "https://creators.chromasync.cz/perf-02", "avatar": "/assets/performers/perf-02.webp"}, {"id": "perf-03", "name": "Mateo Silva", "role": "Imerzivní dokumentarista", "country": "Španělsko", "bio": "Držitel ocenění z festivalu v Benátkách za VR dokument o klimatických uprchlících.", "tags": ["Dokument", "360° Video", "Sociální"], "website": "https://creators.chromasync.cz/perf-03", "avatar": "/assets/performers/perf-03.webp"}, {"id": "perf-04", "name": "Aria Vance", "role": "Kreativní ředitelka studia NeonVoyage", "country": "USA", "bio": "Specialistka na interaktivní hand-tracking vyprávění bez ovladačů pro Apple Vision Pro.", "tags": ["Hand Tracking", "Interaktivní", "VisionOS"], "website": "https://creators.chromasync.cz/perf-04", "avatar": "/assets/performers/perf-04.webp"}, {"id": "perf-05", "name": "Lukáš Dvořák", "role": "Český VR režisér a scénograf", "country": "Česko", "bio": "Zakladatel pražského studia VoidScape, propojující českou loutkovou tradici s virtuální realitou.", "tags": ["Česká tvorba", "Animace", "Scénografie"], "website": "https://creators.chromasync.cz/perf-05", "avatar": "/assets/performers/perf-05.webp"}, {"id": "perf-06", "name": "Chloe Dupont", "role": "Animátorka a výtvarnice", "country": "Francie", "bio": "Autorka oceňovaných malovaných VR pohádek vytvořených kompletně v Quill a Blenderu.", "tags": ["Quill", "Animace", "Poetika"], "website": "https://creators.chromasync.cz/perf-06", "avatar": "/assets/performers/perf-06.webp"}, {"id": "perf-07", "name": "Tariq Al-Mansoor", "role": "Spatial Audio Designer & skladatel", "country": "Spojené arabské emiráty", "bio": "Mistr ambisonického 3D zvuku, který skládá adaptivní hudbu reagující na směr pohledu diváka.", "tags": ["Spatial Audio", "Hudba", "Dolby Atmos"], "website": "https://creators.chromasync.cz/perf-07", "avatar": "/assets/performers/perf-07.webp"}, {"id": "perf-08", "name": "Yuki Morita", "role": "Generativní AI a shader umělec", "country": "Japonsko", "bio": "Experimentuje s neurálními sítěmi a fraktální matematikou vykreslovanou v 90 FPS ve virtuální realitě.", "tags": ["AI Art", "Generativní", "Shadery"], "website": "https://creators.chromasync.cz/perf-08", "avatar": "/assets/performers/perf-08.webp"}, {"id": "perf-09", "name": "Sarah Jenkins", "role": "Haptická inženýrka a designérka zážitků", "country": "Velká Británie", "bio": "Vědkyně a umělkyně zkoumající iluzi doteku a fyzikální zpětné vazby v imerzivním filmu.", "tags": ["Haptika", "Interakce", "Hardware"], "website": "https://creators.chromasync.cz/perf-09", "avatar": "/assets/performers/perf-09.webp"}, {"id": "perf-10", "name": "Jan Novotný", "role": "Technický ředitel a Unity architekt", "country": "Česko", "bio": "Specialista na optimalizaci mobilních VR procesorů a multi-user synchronizaci.", "tags": ["Unity", "Vývoj", "Technologie"], "website": "https://creators.chromasync.cz/perf-10", "avatar": "/assets/performers/perf-10.webp"}, {"id": "perf-11", "name": "Studio Atlas V", "role": "Imerzivní produkční studio", "country": "Francie", "bio": "Světoznámé francouzské studio stojící za VR hity jako Spheres, Battlescar a Madrid Noir.", "tags": ["Studio", "Produkce", "Festivaly"], "website": "https://creators.chromasync.cz/perf-11", "avatar": "/assets/performers/perf-11.webp"}, {"id": "perf-12", "name": "Felix & Paul Studios", "role": "Průkopníci 360° 3D kamery", "country": "Kanada", "bio": "Držitelé ceny Emmy, známí svými vesmírnými projekty natáčenými na palubě ISS.", "tags": ["360° 3D", "Vesmír", "Emmy"], "website": "https://creators.chromasync.cz/perf-12", "avatar": "/assets/performers/perf-12.webp"}, {"id": "perf-13", "name": "Baobab Studios", "role": "Animační VR velmoc", "country": "USA", "bio": "Špičkové animační studio vedené veterány z Pixar a DreamWorks.", "tags": ["Animace", "Rodinné", "Storytelling"], "website": "https://creators.chromasync.cz/perf-13", "avatar": "/assets/performers/perf-13.webp"}, {"id": "perf-14", "name": "Marshmallow Laser Feast", "role": "Immersive Experience Collective", "country": "Velká Británie", "bio": "Umělecký kolektiv bourající hranice mezi lidským tělem a přírodou skrze smyslové VR instalace.", "tags": ["Umění", "Příroda", "Smysly"], "website": "https://creators.chromasync.cz/perf-14", "avatar": "/assets/performers/perf-14.webp"}, {"id": "perf-15", "name": "Studio Brainz Immersive", "role": "České kreativní studio", "country": "Česko", "bio": "Přední české studio tvořící špičkové VR zážitky, kulturu a interaktivní expozice.", "tags": ["České studio", "Kultura", "Inovace"], "website": "https://creators.chromasync.cz/perf-15", "avatar": "/assets/performers/perf-15.webp"}, {"id": "perf-16", "name": "Mira Kováčová", "role": "VR choreografka a performerka", "country": "Slovensko", "bio": "Kombinuje motion capture tanec s živou transformací virtuálního avataru před očima diváka.", "tags": ["Tanec", "Motion Capture", "Performance"], "website": "https://creators.chromasync.cz/perf-16", "avatar": "/assets/performers/perf-16.webp"}, {"id": "perf-17", "name": "Göran Lindqvist", "role": "Severský herní a narativní designér", "country": "Švédsko", "bio": "Tvoří psychologické severské noirové příběhy pro imerzivní headsety.", "tags": ["Nordic Noir", "Narativ", "Psychologie"], "website": "https://creators.chromasync.cz/perf-17", "avatar": "/assets/performers/perf-17.webp"}, {"id": "perf-18", "name": "Li Wei", "role": "Výzkumník volumetrického videa", "country": "Čína / Singapur", "bio": "Specialista na photogrammetrii lidského těla a volumetrický záznam divadelních představení.", "tags": ["Volumetrie", "Fotogrammetrie", "Divadlo"], "website": "https://creators.chromasync.cz/perf-18", "avatar": "/assets/performers/perf-18.webp"}, {"id": "perf-19", "name": "Amara Okonkwo", "role": "Africká novomediální vizionářka", "country": "Nigérie", "bio": "Propagátorka afrofuturismu ve virtuální realitě a digitální paměti orální historie.", "tags": ["Afrofuturismus", "Kultura", "Mytologie"], "website": "https://creators.chromasync.cz/perf-19", "avatar": "/assets/performers/perf-19.webp"}, {"id": "perf-20", "name": "Zdeněk Kříž", "role": "Zvukový mistr a hudební producent", "country": "Česko", "bio": "Vytváří binaurální zvukové stopy pro české i mezinárodní imerzivní snímky.", "tags": ["Binaurální zvuk", "Zvukový design", "Hudba"], "website": "https://creators.chromasync.cz/perf-20", "avatar": "/assets/performers/perf-20.webp"}, {"id": "perf-21", "name": "Nina Bergström", "role": "Režisérka ekologických VR esejí", "country": "Norsko", "bio": "Zachycuje tající arktické ledovce z pohledu planktonu a velryb.", "tags": ["Ekologie", "Esej", "Oceány"], "website": "https://creators.chromasync.cz/perf-21", "avatar": "/assets/performers/perf-21.webp"}, {"id": "perf-22", "name": "Carlos Santana Jr.", "role": "VR herní scenárista", "country": "Mexiko", "bio": "Vnáší do VR videoher magický realismus a nelineární větvení příběhu.", "tags": ["Magický realismus", "Scénář", "Herní design"], "website": "https://creators.chromasync.cz/perf-22", "avatar": "/assets/performers/perf-22.webp"}, {"id": "perf-23", "name": "Hanna Weiss", "role": "Filozofka médií a kurátorka", "country": "Rakousko", "bio": "Zabývá se etikou identity a avatarů ve virtuálních společenských prostorech.", "tags": ["Etika", "Kurátorství", "Přednášky"], "website": "https://creators.chromasync.cz/perf-23", "avatar": "/assets/performers/perf-23.webp"}, {"id": "perf-24", "name": "David 'PixelWolf' Chen", "role": "VR Live Painter a sochař", "country": "Tchaj-wan", "bio": "Provádí živé malování ve virtuální realitě před zraky publika na obří LED stěně.", "tags": ["Live VR", "Malba", "TiltBrush"], "website": "https://creators.chromasync.cz/perf-24", "avatar": "/assets/performers/perf-24.webp"}, {"id": "perf-25", "name": "Petra Horáková", "role": "Dokumentaristka a novinářka", "country": "Česko", "bio": "Autorka reportážních VR filmů z krizových oblastí a sociálně vyloučených lokalit.", "tags": ["Reportáž", "Novinařina", "Dokument"], "website": "https://creators.chromasync.cz/perf-25", "avatar": "/assets/performers/perf-25.webp"}, {"id": "perf-26", "name": "Viktor Brandt", "role": "Hororový VR režisér", "country": "Dánsko", "bio": "Mistr psychologického napětí a manipulace s periferním viděním v brýlích.", "tags": ["Horor", "Napětí", "Psychologie"], "website": "https://creators.chromasync.cz/perf-26", "avatar": "/assets/performers/perf-26.webp"}, {"id": "perf-27", "name": "Sunita Rao", "role": "VR biofeedback vývojářka", "country": "Indie", "bio": "Propojuje tepové sensory s dynamickým tempem filmového střihu a barev.", "tags": ["Biofeedback", "Zdraví", "Interakce"], "website": "https://creators.chromasync.cz/perf-27", "avatar": "/assets/performers/perf-27.webp"}, {"id": "perf-28", "name": "Marc O'Connor", "role": "Režisér stereoskopických drone filmů", "country": "Irsko", "bio": "Specializuje se na 360° záběry z dálkově řízených koptér nad divokou krajinou.", "tags": ["Drony", "Krajina", "360°"], "website": "https://creators.chromasync.cz/perf-28", "avatar": "/assets/performers/perf-28.webp"}, {"id": "perf-29", "name": "Tereza Mašková", "role": "3D Animátorka postav", "country": "Česko", "bio": "Oživuje fantaskní stvoření v enginu Unreal Engine 5 s využitím MetaHuman.", "tags": ["MetaHuman", "Animace", "Unreal 5"], "website": "https://creators.chromasync.cz/perf-29", "avatar": "/assets/performers/perf-29.webp"}, {"id": "perf-30", "name": "Gabriel Mercier", "role": "Režisér poetických sci-fi vizí", "country": "Francie", "bio": "Jeho díla evokují poetiku Malého prince zasazenou do kyberprostorového vakua.", "tags": ["Poetika", "Sci-Fi", "Vesmír"], "website": "https://creators.chromasync.cz/perf-30", "avatar": "/assets/performers/perf-30.webp"}, {"id": "perf-31", "name": "Olga Sidorova", "role": "Experimentální glitch artist", "country": "Polsko", "bio": "Deformuje virtuální prostory chybami v paměti a digitálními artefakty.", "tags": ["Glitch Art", "Experiment", "Vizuály"], "website": "https://creators.chromasync.cz/perf-31", "avatar": "/assets/performers/perf-31.webp"}, {"id": "perf-32", "name": "Samira Khan", "role": "Designérka imerzivního vzdělávání", "country": "Pákistán", "bio": "Vytváří zážitkové simulace historických okamžiků pro mladou generaci.", "tags": ["Vzdělávání", "Historie", "Simulace"], "website": "https://creators.chromasync.cz/perf-32", "avatar": "/assets/performers/perf-32.webp"}, {"id": "perf-33", "name": "Filip Procházka", "role": "Indie VR herní vývojář", "country": "Česko", "bio": "Tvůrce atmosférických logických rébusů zasazených do surrealistických ruin.", "tags": ["Indie hry", "Hádanky", "Surrealismus"], "website": "https://creators.chromasync.cz/perf-33", "avatar": "/assets/performers/perf-33.webp"}, {"id": "perf-34", "name": "Beatriz Morales", "role": "Režisérka smyslových zážitků", "country": "Kolumbie", "bio": "Spojuje tropickou flóru, hmatové podněty a prostorový zvuk deštného pralesa.", "tags": ["Příroda", "Smysly", "Latinská Amerika"], "website": "https://creators.chromasync.cz/perf-34", "avatar": "/assets/performers/perf-34.webp"}, {"id": "perf-35", "name": "Jonas Lind", "role": "Spatial UI/UX designér", "country": "Finsko", "bio": "Tvoří revoluční rozhraní pro interakci očí a prstů ve spatial computingu.", "tags": ["UI/UX", "Spatial Computing", "Design"], "website": "https://creators.chromasync.cz/perf-35", "avatar": "/assets/performers/perf-35.webp"}, {"id": "perf-36", "name": "Klára Vrbová", "role": "Etnografka a VR kurátorka", "country": "Česko", "bio": "Dokumentuje mizející lidová řemesla pomocí fotogrammetrických skenů ve VR.", "tags": ["Etnografie", "Kulturní dědictví", "Skenování"], "website": "https://creators.chromasync.cz/perf-36", "avatar": "/assets/performers/perf-36.webp"}, {"id": "perf-37", "name": "Dmitri Volkov", "role": "Sci-fi spisovatel a VR dramaturg", "country": "Estonsko", "bio": "Spolupracuje na sci-fi scénářích pro německá a severská VR herní studia.", "tags": ["Dramaturgie", "Scénář", "Kybernetika"], "website": "https://creators.chromasync.cz/perf-37", "avatar": "/assets/performers/perf-37.webp"}, {"id": "perf-38", "name": "Aoi Tanaka", "role": "VR Manga a Anime režisérka", "country": "Japonsko", "bio": "Převádí tradiční estetiku japonského komiksu do 3D stereoskopického prostoru.", "tags": ["Anime", "Manga", "3D Kresba"], "website": "https://creators.chromasync.cz/perf-38", "avatar": "/assets/performers/perf-38.webp"}, {"id": "perf-39", "name": "Arthur Pendelton", "role": "VR Sound Architect", "country": "Velká Británie", "bio": "Pracoval na zvuku pro projekty BBC VR a experimentální rozhlasové hry.", "tags": ["Rozhlas", "Zvuk", "BBC"], "website": "https://creators.chromasync.cz/perf-39", "avatar": "/assets/performers/perf-39.webp"}, {"id": "perf-40", "name": "Simona Králová", "role": "Interaktivní kostýmní výtvarnice", "country": "Česko", "bio": "Navrhuje procedurální digitální látky reagující na virtuální vítr a doteky.", "tags": ["Digitální móda", "Textilie", "Avataři"], "website": "https://creators.chromasync.cz/perf-40", "avatar": "/assets/performers/perf-40.webp"}, {"id": "perf-41", "name": "Dr. Hendrik Visser", "role": "Neurolog a VR konzultant", "country": "Nizozemsko", "bio": "Zkoumá kinetózu (cyber sickness) a pocit tělesného ztělesnění (embodiment) ve VR.", "tags": ["Neurověda", "Kinetóza", "Přednášky"], "website": "https://creators.chromasync.cz/perf-41", "avatar": "/assets/performers/perf-41.webp"}, {"id": "perf-42", "name": "Clara Schmidt", "role": "Dětská ilustrátorka a VR tvůrkyně", "country": "Německo", "bio": "Vytváří kouzelné virtuální pop-up knihy, do kterých děti mohou vstoupit.", "tags": ["Děti", "Interaktivní kniha", "Pohádky"], "website": "https://creators.chromasync.cz/perf-42", "avatar": "/assets/performers/perf-42.webp"}, {"id": "perf-43", "name": "Jakub 'Kuba' Beneš", "role": "Motion Capture Director", "country": "Česko", "bio": "Zakladatel českého mocap studia pro filmové triky a virtuální produkci.", "tags": ["Mocap", "Filmové triky", "Technologie"], "website": "https://creators.chromasync.cz/perf-43", "avatar": "/assets/performers/perf-43.webp"}, {"id": "perf-44", "name": "Ines Belkacem", "role": "Alžírská filmová esejistka", "country": "Alžírsko / Francie", "bio": "Zkoumá koloniální paměť a rodinné archivy oživené v 3D projekcích.", "tags": ["Archiv", "Historie", "Esej"], "website": "https://creators.chromasync.cz/perf-44", "avatar": "/assets/performers/perf-44.webp"}, {"id": "perf-45", "name": "Tobias Møller", "role": "Architekt virtuálních světů", "country": "Dánsko", "bio": "Navrhuje utopická plovoucí města bez zemské gravitace v prostředí VR.", "tags": ["Architektura", "Beztíže", "Utopie"], "website": "https://creators.chromasync.cz/perf-45", "avatar": "/assets/performers/perf-45.webp"}, {"id": "perf-46", "name": "Michaela Černá", "role": "Kurátorka imerzivního umění", "country": "Česko", "bio": "Přední česká teoretička digitálních médií a lektorka na FAMU.", "tags": ["Kurátorství", "FAMU", "Teorie médií"], "website": "https://creators.chromasync.cz/perf-46", "avatar": "/assets/performers/perf-46.webp"}, {"id": "perf-47", "name": "Soren Kierk", "role": "Hororový sound designer", "country": "Dánsko", "bio": "Specializuje se na infrazvukové a psychoakustické efekty vyvolávající mrazení v zádech.", "tags": ["Psychoakustika", "Horor", "Zvuk"], "website": "https://creators.chromasync.cz/perf-47", "avatar": "/assets/performers/perf-47.webp"}, {"id": "perf-48", "name": "Leila Haddad", "role": "VR fotožurnalistka", "country": "Libanon", "bio": "Zachytila rekonstrukci bejrútského přístavu formou prostorových stereo fotografií.", "tags": ["Fotožurnalistika", "Blízký východ", "Paměť"], "website": "https://creators.chromasync.cz/perf-48", "avatar": "/assets/performers/perf-48.webp"}, {"id": "perf-49", "name": "Tomáš Růžička", "role": "3D skener a dronový operátor", "country": "Česko", "bio": "Vytvořil detailní fotogrammetrické dvojče gotických podzemních chodeb Prahy.", "tags": ["Praha", "Fotogrammetrie", "Historie"], "website": "https://creators.chromasync.cz/perf-49", "avatar": "/assets/performers/perf-49.webp"}, {"id": "perf-50", "name": "Yael Ben-David", "role": "VR choreografka a tanečnice", "country": "Izrael", "bio": "Vytváří intimní taneční duety, kdy divák vnímá tanečníka z bezprostřední blízkosti 10 centimetrů.", "tags": ["Tanec", "Intimita", "Pohyb"], "website": "https://creators.chromasync.cz/perf-50", "avatar": "/assets/performers/perf-50.webp"}, {"id": "perf-51", "name": "Krzysztof Wojcik", "role": "Sci-fi producent a herní kritik", "country": "Polsko", "bio": "Organizátor varšavských VR showcase a mezinárodní porotce.", "tags": ["Produkce", "Porota", "Kritika"], "website": "https://creators.chromasync.cz/perf-51", "avatar": "/assets/performers/perf-51.webp"}, {"id": "perf-52", "name": "Evelyn Reed", "role": "Spisovatelka a narativní koučka", "country": "USA", "bio": "Vede mezinárodní dílny psaní scénářů pro větvené 6DOF příběhy.", "tags": ["Workshopy", "Scénář", "Výuka"], "website": "https://creators.chromasync.cz/perf-52", "avatar": "/assets/performers/perf-52.webp"}, {"id": "perf-53", "name": "Matěj Kolář", "role": "Shader programátor a vizuální mág", "country": "Česko", "bio": "Tvoří vizuální efekty pro sci-fi VR tituly v reálném čase.", "tags": ["VFX", "Shadery", "Real-time"], "website": "https://creators.chromasync.cz/perf-53", "avatar": "/assets/performers/perf-53.webp"}, {"id": "perf-54", "name": "Valeria Rossi", "role": "Operní režisérka a VR inovátorka", "country": "Itálie", "bio": "Převádí klasickou italskou operu do 360° zážitku s pohledem dirigenta.", "tags": ["Opera", "Klasika", "360°"], "website": "https://creators.chromasync.cz/perf-54", "avatar": "/assets/performers/perf-54.webp"}, {"id": "perf-55", "name": "Hassan Touré", "role": "Hudební vizualizátor", "country": "Senegal", "bio": "Spojuje západoafrické rytmy s reaktivními barevnými 3D světelnými sochami.", "tags": ["Světlo", "Rytmus", "Hudba"], "website": "https://creators.chromasync.cz/perf-55", "avatar": "/assets/performers/perf-55.webp"}, {"id": "perf-56", "name": "Lenka Zemanová", "role": "Socioložka virtuálních komunit", "country": "Česko", "bio": "Přednáší o fenoménu sociálních vazeb a virtuálních rodin ve VRChat a Metaverse.", "tags": ["Sociologie", "Metaverse", "Komunity"], "website": "https://creators.chromasync.cz/perf-56", "avatar": "/assets/performers/perf-56.webp"}, {"id": "perf-57", "name": "Ramiro Costa", "role": "Režisér hlubokomořských VR expedic", "country": "Brazílie", "bio": "Spolupracuje s oceánografy na věrné simulaci Mariánského příkopu.", "tags": ["Oceán", "Expedice", "Hlubiny"], "website": "https://creators.chromasync.cz/perf-57", "avatar": "/assets/performers/perf-57.webp"}, {"id": "perf-58", "name": "Siddharth Verma", "role": "AI prompt inženýr a 3D NeRF specialista", "country": "Indie", "bio": "Používá technologii Gaussian Splatting pro převod vzpomínek do 3D.", "tags": ["Gaussian Splatting", "NeRF", "Inovace"], "website": "https://creators.chromasync.cz/perf-58", "avatar": "/assets/performers/perf-58.webp"}, {"id": "perf-59", "name": "Bára Veselá", "role": "Studentka FAMU / Multimédia", "country": "Česko", "bio": "Vítězka studentské soutěže s poetickou hříčkou o zapomenutých pražských kavárnách.", "tags": ["Studentská tvorba", "FAMU", "Debut"], "website": "https://creators.chromasync.cz/perf-59", "avatar": "/assets/performers/perf-59.webp"}, {"id": "perf-60", "name": "Marcus Sterling", "role": "VR festivalový ředitel a vizionář", "country": "Velká Británie", "bio": "Zakladatel evropské asociace XR kinematografie a prezident hlavní poroty.", "tags": ["Porota", "Asociace", "Průmysl"], "website": "https://creators.chromasync.cz/perf-60", "avatar": "/assets/performers/perf-60.webp"}], "program_items": [{"id": "prog-01", "title": "Slavnostní zahájení festivalu & Keynote: Budoucnost prostorového filmu", "original_title": "Grand Opening & Keynote: The Future of Spatial Cinema", "category": "Keynote & Zahájení", "day": 1, "date": "2026-10-23", "start_time": "10:00", "end_time": "11:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-60", "perf-11", "perf-05"], "description": "Oficiální start 4. ročníku CHROMASYNC 2026 s přehledem letošních technologických milníků, představením poroty a první exkluzivní ukázkou z celovečerního francouzského prostorového filmu.", "vr_hardware": "Hybridní prezentace na 4K LED stěně + headsety pro ukázky", "interaction_type": "Přednáška & Živá diskuse", "capacity": 120, "reservation_required": true, "age_recommendation": "12+"}, {"id": "prog-02", "title": "Kybernetické probuzení: Neo-Tokio 2099", "original_title": "Cybernetic Awakening: Neo-Tokyo 2099", "category": "Sci-Fi 360° Film", "day": 1, "date": "2026-10-23", "start_time": "10:30", "end_time": "11:00", "duration_minutes": 30, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-02"], "description": "Vizuálně opulentní 8K stereoskopický let nad deštěm smáčenými neonovými mrakodrapy s pulzujícím syntetickým soundtrackem.", "vr_hardware": "Meta Quest 3 Pro / 360 Dome Projector", "interaction_type": "Seated 360° Experience", "capacity": 80, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-03", "title": "Hlasy tajícího ledu: Arktická expedice", "original_title": "Voices of Melting Ice: Arctic Expedition", "category": "Imerzivní dokument", "day": 1, "date": "2026-10-23", "start_time": "11:15", "end_time": "11:55", "duration_minutes": 40, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-03", "perf-21"], "description": "Strhující dokumentární cesta do nitra ledovce se spatial audio záznamem praskání tisíciletého ledu.", "vr_hardware": "Meta Quest 3 Pro", "interaction_type": "Seated 360° Film", "capacity": 80, "reservation_required": true, "age_recommendation": "10+"}, {"id": "prog-04", "title": "V labyrintu stínů: Interaktivní noirová detektivka", "original_title": "In the Labyrinth of Shadows: Interactive Noir", "category": "6DOF Interaktivní narrativ", "day": 1, "date": "2026-10-23", "start_time": "11:00", "end_time": "11:45", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-01", "perf-17"], "description": "Návštěvník v roli detektiva prochází potemnělou kanceláří 40. let, sbírá důkazy vlastníma rukama a ovlivňuje výslech svědků.", "vr_hardware": "HTC Vive Focus 3 + haptická vesta", "interaction_type": "Room-scale 6DOF Hand Tracking", "capacity": 30, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-05", "title": "Meditace v beztíži: Snový fraktální oceán", "original_title": "Weightless Meditation: Fractal Ocean", "category": "Snový ambient & relaxace", "day": 1, "date": "2026-10-23", "start_time": "11:30", "end_time": "12:15", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-08", "perf-07"], "description": "Hluboce zklidňující generativní cesta do podmořských fraktálů za doprovodu laděných binaurálních tónů.", "vr_hardware": "Apple Vision Pro / Bigscreen Beyond", "interaction_type": "Seated Relax Lounge", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-06", "title": "Masterclass: Režie v prostoru 360° vs. 6DOF", "original_title": "Masterclass: Directing Space - 360° vs 6DOF", "category": "Masterclass & Přednáška", "day": 1, "date": "2026-10-23", "start_time": "12:00", "end_time": "13:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-01", "perf-11", "perf-52"], "description": "Jak vést divákovu pozornost bez střihu a rámu obrazu? Metody světelných a zvukových signálů od předních světových režisérů.", "vr_hardware": "Projektor + živá demonstrace v headsetu", "interaction_type": "Interaktivní přednáška", "capacity": 120, "reservation_required": false, "age_recommendation": "15+"}, {"id": "prog-07", "title": "Loutka v digitálním vesmíru: Česká loutkářská odysea", "original_title": "Puppet in Cyberspace: Czech Marionette Odyssey", "category": "Animovaný VR film", "day": 1, "date": "2026-10-23", "start_time": "12:30", "end_time": "13:00", "duration_minutes": 30, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-05", "perf-29"], "description": "Poetický příběh dřevěného Kašpárka putujícího opuštěným servery a transformujícího se v digitální kód.", "vr_hardware": "Meta Quest 3 Pro", "interaction_type": "Seated 360° 3D", "capacity": 80, "reservation_required": true, "age_recommendation": "8+"}, {"id": "prog-08", "title": "Bariéry doteku: Haptický horor v temném sanatoriu", "original_title": "Barriers of Touch: Haptic Horror Asylum", "category": "Haptický thriller & horor", "day": 1, "date": "2026-10-23", "start_time": "12:30", "end_time": "13:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-09", "perf-26", "perf-47"], "description": "Intenzivní psychologický zážitek, kde chlad a otřesy vnímáte na vlastním těle skrze haptický oblek bHaptics.", "vr_hardware": "HTC Vive Focus 3 + bHaptics Suit", "interaction_type": "Room-scale 6DOF Full Body Haptic", "capacity": 30, "reservation_required": true, "age_recommendation": "18+"}, {"id": "prog-09", "title": "Kouzelná zahrada origami: Dětský svět zázraků", "original_title": "Origami Magical Garden", "category": "Dětský a rodinný VR zážitek", "day": 1, "date": "2026-10-23", "start_time": "13:00", "end_time": "13:40", "duration_minutes": 40, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-06", "perf-42"], "description": "Půvabná animovaná zahrada, kde papírová zvířátka ožívají na dotek dlaní v jemném akvarelovém stylu.", "vr_hardware": "Apple Vision Pro Hand Tracking", "interaction_type": "Interaktivní hand-tracking", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-10", "title": "Panelová diskuse: AI jako spolutvůrce nebo hrozba pro scenáristy?", "original_title": "Panel: AI as Co-Creator vs Threat in XR Screenwriting", "category": "Diskusní panel", "day": 1, "date": "2026-10-23", "start_time": "14:00", "end_time": "15:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-23", "perf-37", "perf-58", "perf-51"], "description": "Otevřená debata s mezinárodními tvůrci o roli velkých jazykových a difuzních modelů v imerzivním vyprávění.", "vr_hardware": "Bez headsetu (konferenční sál)", "interaction_type": "Panel Q&A", "capacity": 120, "reservation_required": false, "age_recommendation": "12+"}, {"id": "prog-11", "title": "Vesmírná stanice ISS: Pohled z vnějšího pláště", "original_title": "Space Explorers: Outside ISS Spacewalk", "category": "Dokumentární 3D film", "day": 1, "date": "2026-10-23", "start_time": "14:00", "end_time": "14:40", "duration_minutes": 40, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-12"], "description": "Skutečné stereoskopické záběry pořízené astronauty NASA a Felix & Paul Studios během výstupu do otevřeného vesmíru.", "vr_hardware": "360 Dome & Meta Quest 3 Pro", "interaction_type": "Seated 360° 3D Cinema", "capacity": 80, "reservation_required": true, "age_recommendation": "8+"}, {"id": "prog-12", "title": "Tlukot deštného pralesa: Smyslová fúze", "original_title": "Heartbeat of the Rainforest: Sensory Immersion", "category": "Přírodní multi-senzorický film", "day": 1, "date": "2026-10-23", "start_time": "14:30", "end_time": "15:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-14", "perf-34"], "description": "Instalace kombinující VR headset, vonné esence amazonského pralesa a vibrační plošinu simulující pohyb zvěře.", "vr_hardware": "HTC Vive Focus 3 + vonný difuzér", "interaction_type": "Multi-sensory Room-scale", "capacity": 30, "reservation_required": true, "age_recommendation": "10+"}, {"id": "prog-13", "title": "Sonická rezonance: Immersive Spatial Sound Session", "original_title": "Sonic Resonance: Immersive Sound Session", "category": "Zvukový imerzivní experiment", "day": 1, "date": "2026-10-23", "start_time": "15:00", "end_time": "15:45", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-07", "perf-20", "perf-39"], "description": "Zavřete oči nebo mějte nasazené brýle s abstraktními světelnými vlnami a nechte se obklopit 64-kanálovým binaurálním koncertem.", "vr_hardware": "Spatial Audio Headphones + Bigscreen Beyond", "interaction_type": "Audio-first Visual VR", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-14", "title": "Live VR Painting: Zrození kybernetické bohyně v přímém přenosu", "original_title": "Live VR Painting: Cyber Goddess Born Live", "category": "Live Performance", "day": 1, "date": "2026-10-23", "start_time": "16:00", "end_time": "17:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-24", "perf-04"], "description": "Tchajwanský umělec maluje ve virtuálním prostoru přímo před publikem, zatímco kamera snímá jeho tahy štětcem v reálném 3D čase.", "vr_hardware": "Live 3D Broadcast + Vision Pro Mirroring", "interaction_type": "Živá umělecká show", "capacity": 120, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-15", "title": "Ztraceni v metru: Pražská podzemní fantazie", "original_title": "Lost in the Metro: Prague Underground Fantasy", "category": "Český interaktivní film", "day": 1, "date": "2026-10-23", "start_time": "16:00", "end_time": "16:40", "duration_minutes": 40, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-15", "perf-49"], "description": "Fotogrammetricky nasnímané historické stanice pražského metra, které se rozpadají v surrealistický sen o minulosti a budoucnosti.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Story", "capacity": 80, "reservation_required": true, "age_recommendation": "12+"}, {"id": "prog-16", "title": "Projekt Ikaros: Pád z orbitální výšky", "original_title": "Project Icarus: Freefall from Orbit", "category": "Adrenalinový 6DOF simulátor", "day": 1, "date": "2026-10-23", "start_time": "16:30", "end_time": "17:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-10", "perf-28"], "description": "Volný pád z termosféry na Zemi s reálným větrným generátorem a záchranným křídlem ovládaným rozpažením rukou.", "vr_hardware": "HTC Vive Focus 3 + větrný simulátor", "interaction_type": "Active Body Flight", "capacity": 30, "reservation_required": true, "age_recommendation": "12+"}, {"id": "prog-17", "title": "Doteky prázdnoty: Hlasy z utečeneckého tábora", "original_title": "Touches of Emptiness: Refugee Voices", "category": "Humanitární VR dokument", "day": 1, "date": "2026-10-23", "start_time": "17:00", "end_time": "17:40", "duration_minutes": 40, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-25", "perf-48"], "description": "Intimní 3D svědectví rodin v provizorních přístřešcích, postavené na hlubokém respektu a prostorových rozhovorech.", "vr_hardware": "Apple Vision Pro", "interaction_type": "Intimate Seated Experience", "capacity": 45, "reservation_required": false, "age_recommendation": "15+"}, {"id": "prog-18", "title": "Večerní soutěžní blok 1: Mezinárodní 360° soutěž", "original_title": "Evening Competition Block 1: International 360°", "category": "Hlavní festivalová soutěž", "day": 1, "date": "2026-10-23", "start_time": "18:00", "end_time": "19:30", "duration_minutes": 90, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-01", "perf-02", "perf-03", "perf-06"], "description": "Projekce čtyř nominovaných snímků soutěžících o Křišťálový foton za nejlepší imerzivní režii roku 2026.", "vr_hardware": "Synchronizovaný Headset Bar 8K", "interaction_type": "Soutěžní projekce s hlasováním diváků", "capacity": 80, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-19", "title": "Avataři a tělesnost: Jak tančit ve virtuální kůži", "original_title": "Avatars & Embodiment: Dancing in Virtual Skin", "category": "Taneční VR performance & debata", "day": 1, "date": "2026-10-23", "start_time": "18:00", "end_time": "19:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-16", "perf-50", "perf-41"], "description": "Živé předvedení tanečního duetu v reálném čase přenášeného do optického trackingu s diskusí o neurovědě tělesného ztělesnění.", "vr_hardware": "OptiTrack Mocap Suit + VR stream", "interaction_type": "Představení + diskuse", "capacity": 120, "reservation_required": false, "age_recommendation": "12+"}, {"id": "prog-20", "title": "Páteční noční VR Chillout & Ambient Synapse", "original_title": "Friday Night VR Chillout & Ambient Synapse", "category": "Noční imerzivní párty", "day": 1, "date": "2026-10-23", "start_time": "20:00", "end_time": "22:00", "duration_minutes": 120, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-07", "perf-31", "perf-55"], "description": "Audiovizuální noční seance pro odpočinek po celém dni. Generativní grafika, chillout beaty a volné zkoušení artových aplikací.", "vr_hardware": "Apple Vision Pro / Bigscreen Beyond", "interaction_type": "Social & Relax Night", "capacity": 45, "reservation_required": false, "age_recommendation": "18+"}, {"id": "prog-21", "title": "Ranní jóga v astrálních zahradách", "original_title": "Morning VR Yoga in Astral Gardens", "category": "Wellness & Meditace", "day": 2, "date": "2026-10-24", "start_time": "09:30", "end_time": "10:30", "duration_minutes": 60, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-27", "perf-08"], "description": "Nastartujte festivalovou sobotu vedenou meditací s lehkými brýlemi na hlavě v prostředí plovoucích lotosových chrámů.", "vr_hardware": "Bigscreen Beyond Featherweight", "interaction_type": "Wellness & Guided Motion", "capacity": 45, "reservation_required": true, "age_recommendation": "All ages"}, {"id": "prog-22", "title": "Kouzelníci z Baobabu: Proč VR miluje animaci", "original_title": "Baobab Magicians: Why VR Loves Animation", "category": "Masterclass", "day": 2, "date": "2026-10-24", "start_time": "10:00", "end_time": "11:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-13", "perf-06", "perf-43"], "description": "Zákulisí tvorby nezapomenutelných animovaných charakterů pro virtuální realitu od oceňovaných tvůrců Baobab Studios.", "vr_hardware": "Přednáškový sál", "interaction_type": "Přednáška & Behind-the-Scenes", "capacity": 120, "reservation_required": false, "age_recommendation": "8+"}, {"id": "prog-23", "title": "Expedice Hlubina: Tajemství Mariánského příkopu", "original_title": "Abyss Expedition: Mariana Trench Secrets", "category": "Vědecký 6DOF dokument", "day": 2, "date": "2026-10-24", "start_time": "10:30", "end_time": "11:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-57", "perf-18"], "description": "Ponor do hloubky 11 000 metrů v batyskafu. Divák rozsvěcí reflektory a zkoumá dosud neobjevené bioluminiscenční tvory.", "vr_hardware": "HTC Vive Focus 3 + Haptic Rumble", "interaction_type": "Interactive Underwater Exploration", "capacity": 30, "reservation_required": true, "age_recommendation": "10+"}, {"id": "prog-24", "title": "Afrofuturistické mýty: Cesta do dimenze Orisha", "original_title": "Afrofuturistic Myths: Journey to Orisha Dimension", "category": "Mytologický 360° epos", "day": 2, "date": "2026-10-24", "start_time": "10:45", "end_time": "11:30", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-19", "perf-55"], "description": "Vizuální exploze barev, digitálních masek a kmenových polyrytmů propojující západoafrickou mytologii s kosmonautikou.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Visual Ode", "capacity": 80, "reservation_required": true, "age_recommendation": "12+"}, {"id": "prog-25", "title": "Unreal Engine 5 pro VR filmaře: Nanite a Lumen v akci", "original_title": "Unreal Engine 5 for VR Filmmakers", "category": "Technický workshop", "day": 2, "date": "2026-10-24", "start_time": "11:45", "end_time": "13:15", "duration_minutes": 90, "stage_id": "stage-neon-creators", "performer_ids": ["perf-10", "perf-53", "perf-29"], "description": "Praktický workshop pro filmaře a vývojáře: jak dosáhnout filmového osvětlení v reálném čase při 90 snímcích za sekundu.", "vr_hardware": "Pracovní stanice + Headset preview", "interaction_type": "Hands-on Workshop", "capacity": 120, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-26", "title": "Papírové město: Interaktivní animace v Quillu", "original_title": "Paper Town: Interactive Quill World", "category": "Animovaný VR film", "day": 2, "date": "2026-10-24", "start_time": "11:45", "end_time": "12:15", "duration_minutes": 30, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-06"], "description": "Malebné ručně kreslené městečko z papíru, kde každá budova ukrývá malý animovaný mikropříběh probouzející se pohledem diváka.", "vr_hardware": "Vision Pro Eye Tracking", "interaction_type": "Gaze-activated Storytelling", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-27", "title": "Kybernetický únik: Úniková místnost s časovou smyčkou", "original_title": "Cyber Escape: Time Loop Room-Scale Mystery", "category": "Interaktivní rébus 6DOF", "day": 2, "date": "2026-10-24", "start_time": "12:00", "end_time": "12:45", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-33", "perf-17"], "description": "Společný zážitek pro dva návštěvníky: máte 20 minut na dešifrování anomálie v kvantovém reaktoru před zhroucením času.", "vr_hardware": "HTC Vive Focus 3 Co-location", "interaction_type": "Multiplayer 6DOF Room-scale", "capacity": 30, "reservation_required": true, "age_recommendation": "12+"}, {"id": "prog-28", "title": "Soutěžní blok 2: 6DOF a Interaktivní příběhy", "original_title": "Competition Block 2: 6DOF & Interactive Narratives", "category": "Hlavní festivalová soutěž", "day": 2, "date": "2026-10-24", "start_time": "12:00", "end_time": "13:30", "duration_minutes": 90, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-01", "perf-04", "perf-15", "perf-22"], "description": "Kurátorský výběr soutěžních děl, ve kterých divák zásadním způsobem určuje vývoj zápletky.", "vr_hardware": "Headset Bar", "interaction_type": "Soutěžní prezentace s hlasováním", "capacity": 80, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-29", "title": "Vzpomínky v cloudu: Plovoucí rodinné archivy v NeRF", "original_title": "Memories in Cloud: Gaussian Splatting Archives", "category": "Experimentální esej", "day": 2, "date": "2026-10-24", "start_time": "13:00", "end_time": "13:45", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-58", "perf-44"], "description": "Vstupte do trojrozměrně rekonstruovaných dětských pokojů ze 70. let složených ze statických fotografií technikou Gaussian Splatting.", "vr_hardware": "Apple Vision Pro", "interaction_type": "Spatial Photo-real Walkthrough", "capacity": 45, "reservation_required": false, "age_recommendation": "12+"}, {"id": "prog-30", "title": "Haptika v kině: Budoucnost dotykového vnímání filmů", "original_title": "Haptics in Cinema: Future of Touch Perception", "category": "Technologická prezentace", "day": 2, "date": "2026-10-24", "start_time": "13:45", "end_time": "15:00", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-09", "perf-41"], "description": "Představení revolučních haptických obleků, rukavic s mikro-pneumatickými vaky a ultrazvukových haptických polí ve vzduchu.", "vr_hardware": "Haptic Devices Demo", "interaction_type": "Prezentace s vyzkoušením na pódiu", "capacity": 120, "reservation_required": false, "age_recommendation": "12+"}, {"id": "prog-31", "title": "Mrazivý signál z Enceladu: Ledový měsíc Saturnu", "original_title": "Signal from Enceladus: Saturn's Frozen Moon", "category": "Sci-Fi 360° Thriller", "day": 2, "date": "2026-10-24", "start_time": "14:00", "end_time": "14:45", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-30", "perf-37"], "description": "Fiktivní mise k ledovým gejzírům Saturnova měsíce, kde posádka zachytí periodický signál neznámého původu z podledovcového oceánu.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Cinematic", "capacity": 80, "reservation_required": true, "age_recommendation": "12+"}, {"id": "prog-32", "title": "Mocenské hry: Politický simulátor v kůži diplomata", "original_title": "Power Plays: Political Summit VR Simulator", "category": "Interaktivní drama", "day": 2, "date": "2026-10-24", "start_time": "14:00", "end_time": "14:45", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-22", "perf-35"], "description": "Vyjednáváte mírovou dohodu u virtuálního kulatého stolu. Sledujte mikrovýrazy obličejů a zvolte správná slova před začátkem konfliktu.", "vr_hardware": "HTC Vive Focus 3 Eye-tracking", "interaction_type": "Branching Story RPG", "capacity": 30, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-33", "title": "Binaurální opera: Kavalír růží v 360° orchestřišti", "original_title": "Binaural Opera: Der Rosenkavalier in 360°", "category": "Klasická hudba v XR", "day": 2, "date": "2026-10-24", "start_time": "14:30", "end_time": "15:15", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-54", "perf-20"], "description": "Prožijte slavné operní scény z pohledu dirigenta uprostřed 90členného filharmonického orchestru v Teatro alla Scala.", "vr_hardware": "Spatial Audio + Apple Vision Pro", "interaction_type": "Symphonic VR Immersion", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-34", "title": "FAMU Next-Gen: Prezentace studentských XR projektů", "original_title": "FAMU Next-Gen: Czech Student XR Showcase", "category": "Studentská tvorba", "day": 2, "date": "2026-10-24", "start_time": "15:30", "end_time": "17:00", "duration_minutes": 90, "stage_id": "stage-neon-creators", "performer_ids": ["perf-59", "perf-46", "perf-05"], "description": "Mladé talenty z katedry multimédií a animace FAMU představují své diplomové a ročníkové virtuální experimenty s otevřenou diskusí.", "vr_hardware": "Kombinace pódia a zkušebních kójí", "interaction_type": "Pitch & Showcase", "capacity": 120, "reservation_required": false, "age_recommendation": "12+"}, {"id": "prog-35", "title": "Bitva u Lipan v 360°: Živá historie na dosah meče", "original_title": "Battle of Lipany 360°: Living History", "category": "Historický český dokument", "day": 2, "date": "2026-10-24", "start_time": "15:30", "end_time": "16:15", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-36", "perf-15"], "description": "Historická rekonstrukce husitského válečnictví založená na archeologických výzkumech a volumetrickém snímání šermířů.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Re-enactment", "capacity": 80, "reservation_required": true, "age_recommendation": "12+"}, {"id": "prog-36", "title": "Manga Dimension Shift: Vstupte do stránek komiksu", "original_title": "Manga Dimension Shift: Stepping into the Page", "category": "Animovaný VR komiks", "day": 2, "date": "2026-10-24", "start_time": "15:30", "end_time": "16:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-38", "perf-02"], "description": "Procházejte se mezi černobílými okénky mangy a oživujte postavy svým dotekem v unikátním 2.5D stylu.", "vr_hardware": "HTC Vive Focus 3", "interaction_type": "Room-scale 6DOF Comic", "capacity": 30, "reservation_required": true, "age_recommendation": "10+"}, {"id": "prog-37", "title": "Zvuková architektura prázdnoty: Katedrála z ozvěn", "original_title": "Sonic Void: Cathedral of Echoes", "category": "Experimentální ambient", "day": 2, "date": "2026-10-24", "start_time": "16:00", "end_time": "16:45", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-39", "perf-07"], "description": "Virtuální gotická katedrála postavená pouze ze zvukových odrazů a pulzujících světelných prachových částic.", "vr_hardware": "Apple Vision Pro", "interaction_type": "Relax & Listening", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-38", "title": "Velká sobota: Soutěžní blok 3 – Vizuální poezie & AI sny", "original_title": "Grand Saturday: Competition Block 3 - Visual Poetry & AI Dreams", "category": "Hlavní festivalová soutěž", "day": 2, "date": "2026-10-24", "start_time": "17:00", "end_time": "18:45", "duration_minutes": 105, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-08", "perf-31", "perf-19", "perf-30"], "description": "Čtyři odvážné vizionářské filmy pracující s generativním uměním, neurálními deformacemi a abstraktním vyprávěním.", "vr_hardware": "Headset Bar 8K", "interaction_type": "Soutěžní projekce s hodnocením", "capacity": 80, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-39", "title": "Spatial Audio Masterclass: Jak míchat 64 kanálů pro VR", "original_title": "Spatial Audio Masterclass: 64 Channels in VR", "category": "Zvukový workshop", "day": 2, "date": "2026-10-24", "start_time": "17:30", "end_time": "18:45", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-07", "perf-20"], "description": "Praktické tipy pro tvorbu ambisonického zvuku v Pro Tools a Reaperu. Jak přesvědčit mozek, že zvuk přichází ze stropu?", "vr_hardware": "Dolby Atmos Rig v sále", "interaction_type": "Technická přednáška", "capacity": 120, "reservation_required": false, "age_recommendation": "15+"}, {"id": "prog-40", "title": "Sobotní VR Rave & Generativní audiovizuální set", "original_title": "Saturday VR Rave: Synaptic Live AV Party", "category": "Hudební XR párty", "day": 2, "date": "2026-10-24", "start_time": "20:00", "end_time": "23:00", "duration_minutes": 180, "stage_id": "stage-neon-creators", "performer_ids": ["perf-24", "perf-55", "perf-08"], "description": "Legendární festivalová party: DJ hraje živý set, zatímco VR malíři a VJové deformují virtuální prostor promítaný v sále i v brýlích.", "vr_hardware": "Kombinace klubového zvuku a volných VR brýlí", "interaction_type": "Live Concert & Party", "capacity": 120, "reservation_required": false, "age_recommendation": "18+"}, {"id": "prog-41", "title": "Rodinné nedělní dopoledne: Ptačí let nad Amazonií", "original_title": "Family Sunday: Bird Flight over Amazon", "category": "Dětský a rodinný zážitek", "day": 3, "date": "2026-10-25", "start_time": "09:30", "end_time": "10:15", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-13", "perf-42"], "description": "Nádherná animovaná podívaná pro děti i rodiče. Staňte se papouškem ara a plachtěte nad korunami pralesa.", "vr_hardware": "Meta Quest 3 Kids Safe", "interaction_type": "Seated 360° Flight", "capacity": 80, "reservation_required": true, "age_recommendation": "6+"}, {"id": "prog-42", "title": "Symbióza lesních hub: Cesta podhoubím", "original_title": "Mycelium Symbiosis: Journey Beneath the Soil", "category": "Přírodovědný VR mikrosvět", "day": 3, "date": "2026-10-25", "start_time": "10:00", "end_time": "10:45", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-14", "perf-34"], "description": "Zmenšete se na velikost spory a prozkoumejte komunikační síť lesních hub přenášející živiny a elektrické signály mezi stromy.", "vr_hardware": "Apple Vision Pro", "interaction_type": "Ambient Exploration", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-43", "title": "Kinetóza a ergonomie: Jak točit VR filmy bez nevolnosti", "original_title": "Cybersickness & Ergonomics: Motion Sickness Free VR", "category": "Odborná přednáška", "day": 3, "date": "2026-10-25", "start_time": "10:30", "end_time": "11:45", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-41", "perf-35"], "description": "Neurologické příčiny kinetózy a pravidla pro kameramany: jak správně pracovat se zrychlením, horizonem a FOV.", "vr_hardware": "Přednáškový sál", "interaction_type": "Odborná přednáška & Q&A", "capacity": 120, "reservation_required": false, "age_recommendation": "12+"}, {"id": "prog-44", "title": "Záchranářský modul: Hasičský zásah v mrakodrapu", "original_title": "Rescue Module: Skyscraper Fire 6DOF Sim", "category": "Adrenalinový simulátor", "day": 3, "date": "2026-10-25", "start_time": "10:30", "end_time": "11:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-10", "perf-32"], "description": "Simulace evakuace hořícího technologického centra s tepelnými infrazářiči a reálnou hasičskou hadicí.", "vr_hardware": "HTC Vive Focus 3 + termální simulátory", "interaction_type": "Emergency Response 6DOF", "capacity": 30, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-45", "title": "Pražské kavárny 20. let: Ztracený svět bohémů", "original_title": "Prague Cafés in the 1920s: Lost Bohemian World", "category": "Historická rekonstrukce", "day": 3, "date": "2026-10-25", "start_time": "11:00", "end_time": "11:40", "duration_minutes": 40, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-59", "perf-36"], "description": "Poseďte u jednoho stolu s Franzem Kafkou a Karlem Čapkem v precizně rekonstruované kavárně Slavia s dobovým jazzem.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Historical Vignette", "capacity": 80, "reservation_required": true, "age_recommendation": "10+"}, {"id": "prog-46", "title": "Digitální šaty a virtuální identita v Metaversu", "original_title": "Digital Fashion & Virtual Identity in the Metaverse", "category": "Móda a design v XR", "day": 3, "date": "2026-10-25", "start_time": "11:30", "end_time": "12:15", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-40", "perf-56"], "description": "Vyzkoušejte si procedurální digitální šaty, které mění texturu podle rytmu vašeho dechu a barev okolí.", "vr_hardware": "Apple Vision Pro Mirroring", "interaction_type": "Virtual Fitting Experience", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-47", "title": "Záhady hlubokého vesmíru: Černé díry a horizont událostí", "original_title": "Deep Space Mysteries: Black Holes & Event Horizon", "category": "Astrofyzikální 360° film", "day": 3, "date": "2026-10-25", "start_time": "12:15", "end_time": "13:00", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-12", "perf-30"], "description": "Vědecky přesná simulace gravitace černé díry podle Einsteinovy teorie relativity vytvořená ve spolupráci s astrofyziky.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Educational Space", "capacity": 80, "reservation_required": true, "age_recommendation": "10+"}, {"id": "prog-48", "title": "Souboj stínů: Interaktivní bojové umění Wuxia", "original_title": "Duel of Shadows: Interactive Wuxia Martial Arts", "category": "Akční pohybový 6DOF film", "day": 3, "date": "2026-10-25", "start_time": "12:00", "end_time": "12:45", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-18", "perf-43"], "description": "Staňte se mistrem bojových umění ve starověkém bambusovém lese. Pohybujte se v prostoru a odrážejte šípy pomocí meče.", "vr_hardware": "HTC Vive Focus 3 Controllers", "interaction_type": "Action 6DOF Swordplay", "capacity": 30, "reservation_required": true, "age_recommendation": "12+"}, {"id": "prog-49", "title": "Inspirace pro mladé tvůrce: Jak financovat VR projekt v Evropě", "original_title": "Funding XR Projects in Europe: Creative Europe & Grants", "category": "Průmyslový panel", "day": 3, "date": "2026-10-25", "start_time": "12:15", "end_time": "13:30", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-60", "perf-51", "perf-46"], "description": "Jak získat podporu z fondů Creative Europe, Státního fondu kinematografie a privátních investorů na nákladnou VR produkci.", "vr_hardware": "Konferenční sál", "interaction_type": "Průmyslová panelová diskuse", "capacity": 120, "reservation_required": false, "age_recommendation": "15+"}, {"id": "prog-50", "title": "Bonsai a ticho: Japonská zenová zahrada", "original_title": "Bonsai & Silence: Japanese Zen Sanctuary", "category": "Meditativní ambient", "day": 3, "date": "2026-10-25", "start_time": "13:00", "end_time": "13:45", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-02", "perf-27"], "description": "Tvarujte virtuální bonsaje a naslouchejte zvuku kapek padajících na bambusové stonky v tiché kjótské zahradě.", "vr_hardware": "Apple Vision Pro Hand Tracking", "interaction_type": "Zen Relax Garden", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-51", "title": "Doteky války: Rekonstrukce měst po katastrofě", "original_title": "Scars of Conflict: Post-Disaster Rebuilding", "category": "Dokumentární fotogrammetrie", "day": 3, "date": "2026-10-25", "start_time": "13:30", "end_time": "14:15", "duration_minutes": 45, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-48", "perf-03"], "description": "Emotivní 3D skeny zničených historických památek a úsilí místních komunit o jejich obnovu a záchranu kulturní paměti.", "vr_hardware": "Meta Quest 3 Pro 8K", "interaction_type": "Seated 360° Documentary", "capacity": 80, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-52", "title": "Kvantový únik: Experimentální multiplayer labyrint", "original_title": "Quantum Escape: Experimental Multiplayer Maze", "category": "Kooperativní 6DOF", "day": 3, "date": "2026-10-25", "start_time": "13:30", "end_time": "14:15", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-33", "perf-10"], "description": "Dva návštěvníci se vidí jako energetické bytosti a musí synchronizovat své pohyby v prostoru k otevření portálů.", "vr_hardware": "HTC Vive Focus 3 Colocated", "interaction_type": "Co-op Spatial Puzzle", "capacity": 30, "reservation_required": true, "age_recommendation": "12+"}, {"id": "prog-53", "title": "Etika a avataři v sociálním VR: Kam směřuje VRChat?", "original_title": "Ethics & Avatars: Where is Social VR Heading?", "category": "Sociologická přednáška", "day": 3, "date": "2026-10-25", "start_time": "14:00", "end_time": "15:15", "duration_minutes": 75, "stage_id": "stage-neon-creators", "performer_ids": ["perf-56", "perf-23"], "description": "Jak anonymita a volba virtuální identity ovlivňuje mezilidské vztahy, duševní zdraví a budoucnost lidské komunikace.", "vr_hardware": "Konferenční sál", "interaction_type": "Přednáška & debata", "capacity": 120, "reservation_required": false, "age_recommendation": "15+"}, {"id": "prog-54", "title": "Symfonie pro světlo a mlhoviny: Vesmírné baroko", "original_title": "Symphony for Light & Nebulae: Cosmic Baroque", "category": "Audiovizuální báseň", "day": 3, "date": "2026-10-25", "start_time": "14:30", "end_time": "15:15", "duration_minutes": 45, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-30", "perf-20"], "description": "Barokní varhanní skladby spojené s generativními astronomickými daty z teleskopu Jamese Webba.", "vr_hardware": "Apple Vision Pro Spatial Audio", "interaction_type": "Seated Cosmic Relax", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}, {"id": "prog-55", "title": "Retrospektiva vítězných děl festivalu Benátky VR", "original_title": "Venice VR Highlights Retrospective", "category": "Kurátorská přehlídka", "day": 3, "date": "2026-10-25", "start_time": "15:00", "end_time": "16:30", "duration_minutes": 90, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-11", "perf-03", "perf-60"], "description": "Exkluzivní projekce tří nejlépe hodnocených filmů ze sekce Venice Immersive posledních tří let.", "vr_hardware": "Headset Bar 8K", "interaction_type": "Filmová retrospektiva", "capacity": 80, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-56", "title": "Interaktivní divadlo: Poslední den Pompejí", "original_title": "Interactive Theatre: The Last Day of Pompeii", "category": "Imerzivní divadelní drama", "day": 3, "date": "2026-10-25", "start_time": "15:00", "end_time": "15:45", "duration_minutes": 45, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-16", "perf-18"], "description": "Herci v motion capture oblecích hrají živě pro diváky v headsetech osudy pompejských měšťanů hodiny před erupcí Vesuvu.", "vr_hardware": "HTC Vive Focus 3 + Live Actors", "interaction_type": "Live Immersive Theatre", "capacity": 30, "reservation_required": true, "age_recommendation": "12+"}, {"id": "prog-57", "title": "Závěrečný ceremoniál & Předávání cen Křišťálový foton 2026", "original_title": "Closing Ceremony & Crystal Photon Awards 2026", "category": "Slavnostní zakončení", "day": 3, "date": "2026-10-25", "start_time": "17:00", "end_time": "18:30", "duration_minutes": 90, "stage_id": "stage-neon-creators", "performer_ids": ["perf-60", "perf-23", "perf-46", "perf-51"], "description": "Vyhlášení vítězů v kategoriích Nejlepší 360° film, Nejlepší 6DOF zážitek, Inovativní zvuk a Cena diváků CHROMASYNC 2026.", "vr_hardware": "Konferenční sál & Živý VR stream", "interaction_type": "Slavnostní gala večer", "capacity": 120, "reservation_required": true, "age_recommendation": "All ages"}, {"id": "prog-58", "title": "Projekce vítězných filmů CHROMASYNC 2026", "original_title": "Best of Fest: Winning Films Screening", "category": "Vítězné filmy", "day": 3, "date": "2026-10-25", "start_time": "19:00", "end_time": "20:30", "duration_minutes": 90, "stage_id": "stage-dome-alpha", "performer_ids": ["perf-01", "perf-04", "perf-08"], "description": "Repríza všech oceněných děl 4. ročníku pro ty, kteří nestihli hlavní soutěžní projekce během víkendu.", "vr_hardware": "Headset Bar 8K", "interaction_type": "Vítězné projekce", "capacity": 80, "reservation_required": true, "age_recommendation": "15+"}, {"id": "prog-59", "title": "Výběr návštěvníků: Open 6DOF Arena Showcase", "original_title": "Audience Choice: Open 6DOF Arena Showcase", "category": "Interaktivní přehlídka", "day": 3, "date": "2026-10-25", "start_time": "19:00", "end_time": "20:15", "duration_minutes": 75, "stage_id": "stage-matrix-6dof", "performer_ids": ["perf-05", "perf-33", "perf-28"], "description": "Volný přístup k nejpopulárnějším interaktivním instalacím víkendu s asistencí festivalových kurátorů.", "vr_hardware": "HTC Vive Focus 3", "interaction_type": "Open Interactive Showcase", "capacity": 30, "reservation_required": false, "age_recommendation": "12+"}, {"id": "prog-60", "title": "Závěrečná ambientní meditace & Rozloučení s festivalem", "original_title": "Closing Ambient Farewell & Astral Sunset", "category": "Závěrečný relax", "day": 3, "date": "2026-10-25", "start_time": "20:00", "end_time": "21:30", "duration_minutes": 90, "stage_id": "stage-oasis-chill", "performer_ids": ["perf-07", "perf-08", "perf-27"], "description": "Klidné zakončení festivalového maratonu. Vychutnejte si virtuální západ slunce nad nekonečným oceánem s ambientní harfou a prostorovým zvukem.", "vr_hardware": "Apple Vision Pro / Bigscreen Beyond", "interaction_type": "Farewell Ambient Lounge", "capacity": 45, "reservation_required": false, "age_recommendation": "All ages"}]};

let appData = FESTIVAL_FALLBACK_DATA;

// Application State
const state = {
  selectedDay: 'all',
  selectedStage: 'all',
  selectedTech: 'all',
  searchQuery: '',
  quickPill: null,
  creatorsSearchQuery: '',
  selectedCreatorRole: 'all',
  mySchedule: JSON.parse(localStorage.getItem('chromasync_schedule') || '[]'),
  reservations: JSON.parse(localStorage.getItem('chromasync_reservations') || '{}'),
  currentDetailItem: null,
  activeSimMode: '6dof'
};

// DOM Elements Cache
const DOM = {};

document.addEventListener('DOMContentLoaded', async () => {
  // Attempt to fetch live data.json; fallback to embedded data if CORS or file://
  try {
    const response = await fetch('./data.json');
    if (response.ok) {
      appData = await response.json();
    }
  } catch (e) {
    console.info('Using embedded fallback festival data (running via local file:// protocol).');
  }

  cacheDOMElements();
  initNavigation();
  initAmbientCanvas();
  initHeroInteractiveOrb();
  initFovSimulator();
  initProgramSection();
  initCreatorsSection();
  initStagesSection();
  initDialogs();
  initScheduleDrawer();
  initScenarioWalkthroughs();
  
  updateScheduleBadge();
  renderProgramItems();
  renderCreators();
  renderStages();
});

function cacheDOMElements() {
  DOM.programGrid = document.getElementById('program-items-grid');
  DOM.programEmptyState = document.getElementById('program-empty-state');
  DOM.resultsCountText = document.getElementById('results-count-text');
  DOM.programSearchInput = document.getElementById('program-search-input');
  DOM.btnClearSearch = document.getElementById('btn-clear-search');
  DOM.stageFilterSelect = document.getElementById('filter-stage-select');
  DOM.techFilterSelect = document.getElementById('filter-tech-select');
  DOM.dayTabs = document.querySelectorAll('.day-tab');
  DOM.quickPills = document.querySelectorAll('.quick-pill');
  DOM.btnResetFilters = document.getElementById('btn-reset-filters');
  DOM.btnEmptyReset = document.getElementById('btn-empty-reset');

  DOM.creatorsGrid = document.getElementById('creators-grid');
  DOM.creatorsSearchInput = document.getElementById('creators-search-input');
  DOM.rolePills = document.querySelectorAll('.role-pill');
  DOM.stagesGrid = document.getElementById('stages-grid');

  DOM.scheduleCounter = document.getElementById('schedule-counter');
  DOM.btnOpenScheduleDrawer = document.getElementById('btn-open-schedule-drawer');
  DOM.scheduleDrawer = document.getElementById('schedule-drawer');
  DOM.drawerOverlay = document.getElementById('drawer-overlay');
  DOM.btnCloseScheduleDrawer = document.getElementById('btn-close-schedule-drawer');
  DOM.drawerItemsContainer = document.getElementById('drawer-schedule-items-container');
  DOM.drawerCountInfo = document.getElementById('drawer-count-info');
  DOM.collisionAlertBox = document.getElementById('collision-alert-box');
  DOM.collisionAlertDesc = document.getElementById('collision-alert-desc');
  DOM.btnClearMySchedule = document.getElementById('btn-clear-my-schedule');
  DOM.btnExportSchedule = document.getElementById('btn-export-schedule');

  DOM.itemDetailDialog = document.getElementById('item-detail-dialog');
  DOM.creatorDetailDialog = document.getElementById('creator-detail-dialog');
  DOM.toastContainer = document.getElementById('toast-container');
}

/* --- NAVIGATION & SMOOTH SCROLLING --- */
function initNavigation() {
  const links = document.querySelectorAll('.nav-link, .mobile-nav-item');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  // Highlight navigation item on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll(`.nav-link[href="#${sectionId}"], .mobile-nav-item[href="#${sectionId}"]`).forEach(el => {
          document.querySelectorAll('.nav-link, .mobile-nav-item').forEach(l => l.classList.remove('active'));
          el.classList.add('active');
        });
      }
    });
  }, { passive: true });
}

/* --- AMBIENT CANVAS BACKGROUND --- */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 35; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(0, 240, 255, ' : 'rgba(255, 0, 122, ',
      alpha: Math.random() * 0.4 + 0.1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

/* --- HERO INTERACTIVE 3D ORB --- */
function initHeroInteractiveOrb() {
  const orb = document.getElementById('headset-interactive-orb');
  const core = orb ? orb.querySelector('.orb-core') : null;
  if (!orb || !core) return;

  orb.addEventListener('mousemove', (e) => {
    const rect = orb.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / rect.width) * 45;
    const rotateX = -(y / rect.height) * 45;
    core.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  orb.addEventListener('mouseleave', () => {
    core.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });

  orb.addEventListener('click', () => {
    showToast('✨ HMD Hologram aktivován: Spatial Audio + 6DOF zapojeno!');
  });
}

/* --- INTERACTIVE 3D FOV SIMULATOR --- */
function initFovSimulator() {
  const canvas = document.getElementById('fov-simulator-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const hudMode = document.getElementById('hud-mode-display');
  const hudFps = document.getElementById('hud-fps-display');
  const btnTestHaptic = document.getElementById('btn-test-haptic');
  const hapticMsg = document.getElementById('haptic-feedback-msg');

  let mouseX = canvas.width / 2;
  let mouseY = canvas.height / 2;
  let time = 0;

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
    mouseY = (e.clientY - rect.top) * (canvas.height / rect.height);
  });

  // Mode buttons
  document.querySelectorAll('.btn-mode').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-mode').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeSimMode = btn.dataset.mode;
      if (hudMode) {
        if (state.activeSimMode === '6dof') hudMode.textContent = 'Mód: 6DOF Room-scale (Pohyb v prostoru)';
        if (state.activeSimMode === '3dof') hudMode.textContent = 'Mód: 3DOF 360° (Pouze rotace)';
        if (state.activeSimMode === 'ambient') hudMode.textContent = 'Mód: Ambient Spatial Audio (64 kanálů)';
      }
    });
  });

  if (btnTestHaptic) {
    btnTestHaptic.addEventListener('click', () => {
      if (navigator.vibrate) navigator.vibrate([100, 50, 200]);
      if (hapticMsg) {
        hapticMsg.textContent = '⚡ Haptický pulz bHaptics potvrzen!';
        setTimeout(() => { hapticMsg.textContent = ''; }, 2500);
      }
      canvas.classList.add('haptic-shake');
      setTimeout(() => canvas.classList.remove('haptic-shake'), 400);
    });
  }

  function drawSimulation() {
    ctx.fillStyle = '#02040c';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    time += 0.02;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    if (state.activeSimMode === '6dof') {
      // 3D Perspective Grid with depth reacting to mouse
      const depthOffset = (mouseX - cx) * 0.35;
      const pitchOffset = (mouseY - cy) * 0.35;

      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, canvas.height);
        ctx.lineTo(cx + depthOffset, cy + pitchOffset);
        ctx.stroke();
      }

      // Floating 3D Cubes
      for (let i = 0; i < 5; i++) {
        const z = ((time * 20 + i * 60) % 300);
        const scale = (300 - z) / 100;
        const x = cx + Math.sin(time + i) * 120 + depthOffset * (scale * 0.5);
        const y = cy + Math.cos(time + i) * 60 + pitchOffset * (scale * 0.5);
        
        ctx.fillStyle = i % 2 === 0 ? 'rgba(0, 240, 255, 0.6)' : 'rgba(255, 0, 122, 0.6)';
        ctx.fillRect(x - 8 * scale, y - 8 * scale, 16 * scale, 16 * scale);
      }

      // Gaze pointer
      ctx.strokeStyle = '#00f0ff';
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 14, 0, Math.PI * 2);
      ctx.stroke();

    } else if (state.activeSimMode === '3dof') {
      // Cylindrical 360 panorama wireframe (fixed pivot)
      ctx.strokeStyle = 'rgba(121, 40, 202, 0.3)';
      for (let r = 30; r < 200; r += 25) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, r * 1.4, r * 0.6, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      // Fixed seated observer marker
      ctx.fillStyle = '#ff007a';
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fill();

      // Gaze Ray constrained to angular rotation
      const angle = Math.atan2(mouseY - cy, mouseX - cx);
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * 160, cy + Math.sin(angle) * 160);
      ctx.stroke();

    } else if (state.activeSimMode === 'ambient') {
      // Spatial Audio expanding ripples
      for (let i = 1; i <= 6; i++) {
        const radius = ((time * 40 + i * 40) % 240);
        const alpha = 1 - radius / 240;
        ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.7})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.fillStyle = '#ffb800';
      ctx.font = '12px JetBrains Mono';
      ctx.fillText('Dolby Atmos Spatial Node: ACTIVE', 20, canvas.height - 25);
    }

    requestAnimationFrame(drawSimulation);
  }
  drawSimulation();
}

/* --- PROGRAM SECTION (FILTERING & SEARCH LOGIC) --- */
function initProgramSection() {
  // Day tab switching
  DOM.dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      DOM.dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.selectedDay = tab.dataset.day;
      renderProgramItems();
    });
  });

  // Search input
  DOM.programSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    DOM.btnClearSearch.classList.toggle('visible', state.searchQuery.length > 0);
    renderProgramItems();
  });

  DOM.btnClearSearch.addEventListener('click', () => {
    DOM.programSearchInput.value = '';
    state.searchQuery = '';
    DOM.btnClearSearch.classList.remove('visible');
    renderProgramItems();
  });

  // Stage select
  DOM.stageFilterSelect.addEventListener('change', (e) => {
    state.selectedStage = e.target.value;
    renderProgramItems();
  });

  // Tech select
  DOM.techFilterSelect.addEventListener('change', (e) => {
    state.selectedTech = e.target.value;
    renderProgramItems();
  });

  // Quick pills
  DOM.quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const targetPill = pill.dataset.pill;
      if (state.quickPill === targetPill) {
        state.quickPill = null;
        pill.classList.remove('active');
      } else {
        DOM.quickPills.forEach(p => p.classList.remove('active'));
        state.quickPill = targetPill;
        pill.classList.add('active');
      }
      renderProgramItems();
    });
  });

  // Reset buttons
  DOM.btnResetFilters.addEventListener('click', resetAllFilters);
  DOM.btnEmptyReset.addEventListener('click', resetAllFilters);
}

function resetAllFilters() {
  state.selectedDay = 'all';
  state.selectedStage = 'all';
  state.selectedTech = 'all';
  state.searchQuery = '';
  state.quickPill = null;

  DOM.dayTabs.forEach(t => t.classList.toggle('active', t.dataset.day === 'all'));
  DOM.programSearchInput.value = '';
  DOM.btnClearSearch.classList.remove('visible');
  DOM.stageFilterSelect.value = 'all';
  DOM.techFilterSelect.value = 'all';
  DOM.quickPills.forEach(p => p.classList.remove('active'));

  renderProgramItems();
  showToast('Filtry programu byly resetovány.');
}

function renderProgramItems() {
  const items = appData.program_items || [];
  const stagesById = Object.fromEntries((appData.stages || []).map(s => [s.id, s]));

  const filtered = items.filter(item => {
    // 1. Day filter
    if (state.selectedDay !== 'all' && item.day.toString() !== state.selectedDay) {
      return false;
    }
    // 2. Stage filter
    if (state.selectedStage !== 'all' && item.stage_id !== state.selectedStage) {
      return false;
    }
    // 3. Tech filter
    if (state.selectedTech !== 'all') {
      const hw = (item.vr_hardware || '').toLowerCase();
      const inter = (item.interaction_type || '').toLowerCase();
      const cat = (item.category || '').toLowerCase();
      if (state.selectedTech === '6dof' && !inter.includes('6dof')) return false;
      if (state.selectedTech === 'haptic' && !hw.includes('haptic') && !inter.includes('haptic')) return false;
      if (state.selectedTech === '360' && !inter.includes('360')) return false;
      if (state.selectedTech === 'visionpro' && !hw.includes('vision pro')) return false;
      if (state.selectedTech === 'talk' && !inter.includes('přednáška') && !cat.includes('masterclass')) return false;
    }
    // 4. Quick pills
    if (state.quickPill) {
      const text = `${item.title} ${item.category} ${item.description} ${item.vr_hardware} ${item.interaction_type}`.toLowerCase();
      if (state.quickPill === 'haptic' && !text.includes('haptic') && !text.includes('vesta')) return false;
      if (state.quickPill === '6dof' && !text.includes('6dof')) return false;
      if (state.quickPill === 'sci-fi' && !text.includes('sci-fi') && !text.includes('vesmír')) return false;
      if (state.quickPill === 'kids' && !text.includes('dětský') && !text.includes('rodinn')) return false;
      if (state.quickPill === 'cz' && !text.includes('česk') && !text.includes('pražsk') && !text.includes('famu')) return false;
    }
    // 5. Fulltext search
    if (state.searchQuery) {
      const q = state.searchQuery;
      const combined = `${item.title} ${item.original_title} ${item.category} ${item.description} ${item.vr_hardware} ${item.interaction_type}`.toLowerCase();
      if (!combined.includes(q)) return false;
    }
    return true;
  });

  DOM.resultsCountText.textContent = `Zobrazeno ${filtered.length} z celkem ${items.length} programových položek`;
  DOM.programEmptyState.classList.toggle('hidden', filtered.length > 0);
  DOM.programGrid.innerHTML = '';

  filtered.forEach(item => {
    const stage = stagesById[item.stage_id] || { name: 'Scéna' };
    const isSaved = state.mySchedule.includes(item.id);

    const card = document.createElement('article');
    card.className = 'program-card';
    card.id = `card-${item.id}`;

    card.innerHTML = `
      <div class="card-top-row">
        <span class="card-time-badge">Den ${item.day} | ${item.start_time} - ${item.end_time}</span>
        <span class="card-stage-pill">🏛️ ${stage.name.split(':')[0]}</span>
      </div>
      <h3 class="card-title" data-item-id="${item.id}">${item.title}</h3>
      <div class="card-category-tag">${item.category}</div>
      <p class="card-description">${item.description}</p>
      
      <div class="card-tags-row">
        <span class="spec-badge">${item.duration_minutes} min</span>
        <span class="spec-badge highlight">${item.interaction_type.split(' ')[0]}</span>
        <span class="spec-badge">${item.age_recommendation}</span>
        ${item.vr_hardware.includes('haptic') || item.vr_hardware.includes('Haptic') ? '<span class="spec-badge highlight">🦺 Haptika</span>' : ''}
      </div>

      <div class="card-footer">
        <button class="btn-card-detail" data-item-id="${item.id}">
          Detail & rezervace slotu →
        </button>
        <button class="btn-bookmark-item ${isSaved ? 'saved' : ''}" data-item-id="${item.id}" title="${isSaved ? 'Odebrat z rozvrhu' : 'Uložit do mého rozvrhu'}" aria-label="${isSaved ? 'Odebrat z rozvrhu' : 'Uložit do rozvrhu'}">
          ${isSaved ? '★' : '☆'}
        </button>
      </div>
    `;

    // Event listeners on card elements
    card.querySelector('.card-title').addEventListener('click', () => openItemDetail(item.id));
    card.querySelector('.btn-card-detail').addEventListener('click', () => openItemDetail(item.id));
    card.querySelector('.btn-bookmark-item').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleScheduleItem(item.id);
    });

    DOM.programGrid.appendChild(card);
  });
}

/* --- PERSONAL SCHEDULE LOGIC (MŮJ ROZVRH) --- */
function initScheduleDrawer() {
  DOM.btnOpenScheduleDrawer.addEventListener('click', openScheduleDrawer);
  DOM.btnCloseScheduleDrawer.addEventListener('click', closeScheduleDrawer);
  DOM.drawerOverlay.addEventListener('click', closeScheduleDrawer);

  DOM.btnClearMySchedule.addEventListener('click', () => {
    if (state.mySchedule.length === 0) return;
    if (confirm('Opravdu chcete vyprázdnit svůj festivalový rozvrh?')) {
      state.mySchedule = [];
      saveSchedule();
      renderScheduleDrawer();
      renderProgramItems();
      showToast('Váš rozvrh byl vyprázdněn.');
    }
  });

  DOM.btnExportSchedule.addEventListener('click', () => {
    if (state.mySchedule.length === 0) {
      showToast('Váš rozvrh je prázdný, nejprve přidejte položky z programu.');
      return;
    }
    window.print();
  });
}

function openScheduleDrawer() {
  DOM.scheduleDrawer.classList.add('open');
  DOM.scheduleDrawer.setAttribute('aria-hidden', 'false');
  renderScheduleDrawer();
}

function closeScheduleDrawer() {
  DOM.scheduleDrawer.classList.remove('open');
  DOM.scheduleDrawer.setAttribute('aria-hidden', 'true');
}

function toggleScheduleItem(itemId) {
  const index = state.mySchedule.indexOf(itemId);
  const item = (appData.program_items || []).find(p => p.id === itemId);
  const title = item ? item.title : 'Položka';

  if (index === -1) {
    state.mySchedule.push(itemId);
    showToast(`✓ Přidáno do rozvrhu: ${title.slice(0, 32)}...`);
  } else {
    state.mySchedule.splice(index, 1);
    showToast(`✕ Odebráno z rozvrhu.`);
  }

  saveSchedule();
  updateScheduleBadge();
  renderProgramItems();
  if (DOM.scheduleDrawer.classList.contains('open')) {
    renderScheduleDrawer();
  }

  // Update dialog toggle button if open
  const btnDialogToggle = document.getElementById('btn-dialog-toggle-schedule');
  if (btnDialogToggle && state.currentDetailItem && state.currentDetailItem.id === itemId) {
    const isNowSaved = state.mySchedule.includes(itemId);
    btnDialogToggle.classList.toggle('saved', isNowSaved);
    btnDialogToggle.innerHTML = isNowSaved ? '<span class="icon">★</span> Uloženo v mém rozvrhu' : '<span class="icon">☆</span> Přidat do mého rozvrhu';
  }
}

function saveSchedule() {
  localStorage.setItem('chromasync_schedule', JSON.stringify(state.mySchedule));
  updateScheduleBadge();
}

function updateScheduleBadge() {
  DOM.scheduleCounter.textContent = state.mySchedule.length;
}

/* Collision Detection between saved schedule items */
function detectCollisions(savedItems) {
  const collisions = [];
  const toMinutes = (timeStr) => {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  };

  for (let i = 0; i < savedItems.length; i++) {
    for (let j = i + 1; j < savedItems.length; j++) {
      const a = savedItems[i];
      const b = savedItems[j];
      if (a.day === b.day) {
        const aStart = toMinutes(a.start_time);
        const aEnd = toMinutes(a.end_time);
        const bStart = toMinutes(b.start_time);
        const bEnd = toMinutes(b.end_time);

        if (aStart < bEnd && bStart < aEnd) {
          collisions.push({ itemA: a, itemB: b });
        }
      }
    }
  }
  return collisions;
}

function renderScheduleDrawer() {
  const allItems = appData.program_items || [];
  const savedItems = allItems.filter(item => state.mySchedule.includes(item.id));
  const stagesById = Object.fromEntries((appData.stages || []).map(s => [s.id, s]));

  // Sort chronologically by day and start time
  savedItems.sort((a, b) => {
    if (a.day !== b.day) return a.day - b.day;
    return a.start_time.localeCompare(b.start_time);
  });

  DOM.drawerCountInfo.textContent = `${savedItems.length} uložených položek`;
  DOM.drawerItemsContainer.innerHTML = '';

  const collisions = detectCollisions(savedItems);
  const collidingIds = new Set();
  collisions.forEach(c => {
    collidingIds.add(c.itemA.id);
    collidingIds.add(c.itemB.id);
  });

  if (collisions.length > 0) {
    DOM.collisionAlertBox.classList.remove('hidden');
    const firstCol = collisions[0];
    DOM.collisionAlertDesc.textContent = `Kolize v Den ${firstCol.itemA.day}: "${firstCol.itemA.title.slice(0, 24)}..." (${firstCol.itemA.start_time}) se překrývá s "${firstCol.itemB.title.slice(0, 24)}..." (${firstCol.itemB.start_time}).`;
  } else {
    DOM.collisionAlertBox.classList.add('hidden');
  }

  if (savedItems.length === 0) {
    DOM.drawerItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔖</div>
        <p>Zatím jste si neuložili žádné programové body.</p>
        <p style="font-size: 0.82rem; margin-top: 0.5rem;">Klikněte na hvězdičku nebo tlačítko u kteréhokoliv filmu v programu.</p>
      </div>
    `;
    return;
  }

  savedItems.forEach(item => {
    const stage = stagesById[item.stage_id] || { name: 'Scéna' };
    const isColliding = collidingIds.has(item.id);

    const div = document.createElement('div');
    div.className = `schedule-drawer-item ${isColliding ? 'collision-item' : ''}`;
    div.innerHTML = `
      <div class="drawer-item-title">${item.title}</div>
      <div class="drawer-item-meta">
        Den ${item.day} | ${item.start_time} - ${item.end_time} | ${stage.name.split(':')[0]}
        ${isColliding ? ' <span style="color:var(--neon-amber); font-weight:700;">⚠️ KOLIZE</span>' : ''}
      </div>
      <button class="btn-remove-from-drawer" data-item-id="${item.id}">Odebrat z rozvrhu</button>
    `;

    div.querySelector('.btn-remove-from-drawer').addEventListener('click', () => {
      toggleScheduleItem(item.id);
    });

    DOM.drawerItemsContainer.appendChild(div);
  });
}

/* --- CONTEXTUAL DETAIL & SLOT RESERVATION MODAL --- */
function initDialogs() {
  document.getElementById('btn-close-detail-dialog').addEventListener('click', () => {
    DOM.itemDetailDialog.close();
  });
  document.getElementById('btn-dialog-close-bottom').addEventListener('click', () => {
    DOM.itemDetailDialog.close();
  });

  document.getElementById('btn-close-creator-dialog').addEventListener('click', () => {
    DOM.creatorDetailDialog.close();
  });
  document.getElementById('btn-creator-close-bottom').addEventListener('click', () => {
    DOM.creatorDetailDialog.close();
  });

  // Close when clicking backdrop
  DOM.itemDetailDialog.addEventListener('click', (e) => {
    if (e.target === DOM.itemDetailDialog) DOM.itemDetailDialog.close();
  });
  DOM.creatorDetailDialog.addEventListener('click', (e) => {
    if (e.target === DOM.creatorDetailDialog) DOM.creatorDetailDialog.close();
  });

  // Reservation form submit
  const resForm = document.getElementById('reservation-form');
  resForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!state.currentDetailItem) return;
    const name = document.getElementById('reserve-user-name').value.trim();
    const email = document.getElementById('reserve-user-email').value.trim();

    const reservationId = 'RES-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    state.reservations[state.currentDetailItem.id] = { name, email, reservationId, date: new Date().toISOString() };
    localStorage.setItem('chromasync_reservations', JSON.stringify(state.reservations));

    // Show success
    document.getElementById('reservation-success-msg').classList.remove('hidden');
    document.getElementById('reservation-confirmation-details').textContent = 
      `Kód rezervace: ${reservationId} pro ${name} (${state.currentDetailItem.start_time} na scéně ${state.currentDetailItem.stage_id}).`;
    resForm.classList.add('hidden');
    showToast(`🎉 Slot na ${state.currentDetailItem.title.slice(0, 24)}... rezervován!`);
  });
}

function openItemDetail(itemId) {
  const item = (appData.program_items || []).find(p => p.id === itemId);
  if (!item) return;

  state.currentDetailItem = item;
  const stagesById = Object.fromEntries((appData.stages || []).map(s => [s.id, s]));
  const performersById = Object.fromEntries((appData.performers || []).map(p => [p.id, p]));
  const stage = stagesById[item.stage_id] || { name: 'Festivalová scéna' };

  document.getElementById('dialog-item-title').textContent = item.title;
  document.getElementById('dialog-item-original-title').textContent = item.original_title || '';
  document.getElementById('dialog-meta-time').textContent = `Den ${item.day} (${item.date}) | ${item.start_time} – ${item.end_time} (${item.duration_minutes} min)`;
  document.getElementById('dialog-meta-stage').textContent = stage.name;
  document.getElementById('dialog-meta-hardware').textContent = item.vr_hardware;
  document.getElementById('dialog-meta-interaction').textContent = item.interaction_type;
  document.getElementById('dialog-item-description').textContent = item.description;

  // Tags
  const tagsRow = document.getElementById('dialog-item-tags');
  tagsRow.innerHTML = `
    <span class="spec-badge highlight">${item.category}</span>
    <span class="spec-badge">Doporučeno: ${item.age_recommendation}</span>
    <span class="spec-badge">Kapacita scény: ${item.capacity}</span>
  `;

  // Creators list
  const creatorsContainer = document.getElementById('dialog-creators-list');
  creatorsContainer.innerHTML = '';
  (item.performer_ids || []).forEach(pid => {
    const performer = performersById[pid];
    if (performer) {
      const chip = document.createElement('button');
      chip.className = 'creator-chip';
      chip.innerHTML = `<span>👤</span> ${performer.name} <small>(${performer.role})</small>`;
      chip.addEventListener('click', () => {
        DOM.itemDetailDialog.close();
        openCreatorDetail(performer.id);
      });
      creatorsContainer.appendChild(chip);
    }
  });

  // Reservation box state
  const isReserved = state.reservations[item.id];
  const resForm = document.getElementById('reservation-form');
  const resSuccess = document.getElementById('reservation-success-msg');
  document.getElementById('reserve-item-id').value = item.id;

  if (isReserved) {
    resForm.classList.add('hidden');
    resSuccess.classList.remove('hidden');
    document.getElementById('reservation-confirmation-details').textContent = 
      `Kód rezervace: ${isReserved.reservationId} pro ${isReserved.name} (${item.start_time}).`;
  } else {
    resForm.classList.remove('hidden');
    resSuccess.classList.add('hidden');
    document.getElementById('reserve-user-name').value = '';
    document.getElementById('reserve-user-email').value = '';
  }

  // Add/remove schedule button inside dialog
  const btnToggleSchedule = document.getElementById('btn-dialog-toggle-schedule');
  const isSaved = state.mySchedule.includes(item.id);
  btnToggleSchedule.classList.toggle('saved', isSaved);
  btnToggleSchedule.innerHTML = isSaved ? '<span class="icon">★</span> Uloženo v mém rozvrhu' : '<span class="icon">☆</span> Přidat do mého rozvrhu';
  btnToggleSchedule.onclick = () => toggleScheduleItem(item.id);

  DOM.itemDetailDialog.showModal();
}

/* --- CREATORS / PERFORMERS LOGIC --- */
function initCreatorsSection() {
  DOM.creatorsSearchInput.addEventListener('input', (e) => {
    state.creatorsSearchQuery = e.target.value.trim().toLowerCase();
    renderCreators();
  });

  DOM.rolePills.forEach(pill => {
    pill.addEventListener('click', () => {
      DOM.rolePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.selectedCreatorRole = pill.dataset.role;
      renderCreators();
    });
  });
}

function renderCreators() {
  const performers = appData.performers || [];
  const filtered = performers.filter(p => {
    if (state.selectedCreatorRole !== 'all') {
      const roleStr = `${p.role} ${p.country} ${(p.tags || []).join(' ')}`.toLowerCase();
      if (!roleStr.includes(state.selectedCreatorRole.toLowerCase())) return false;
    }
    if (state.creatorsSearchQuery) {
      const q = state.creatorsSearchQuery;
      const combined = `${p.name} ${p.role} ${p.country} ${p.bio}`.toLowerCase();
      if (!combined.includes(q)) return false;
    }
    return true;
  });

  DOM.creatorsGrid.innerHTML = '';
  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'creator-card';
    card.id = `creator-card-${p.id}`;
    card.innerHTML = `
      <div class="creator-avatar">👤</div>
      <div class="creator-name">${p.name}</div>
      <div class="creator-role">${p.role}</div>
      <div class="creator-country">${p.country}</div>
    `;
    card.addEventListener('click', () => openCreatorDetail(p.id));
    DOM.creatorsGrid.appendChild(card);
  });
}

function openCreatorDetail(creatorId) {
  const performer = (appData.performers || []).find(p => p.id === creatorId);
  if (!performer) return;

  document.getElementById('creator-dialog-name').textContent = performer.name;
  document.getElementById('creator-dialog-role').textContent = `${performer.role} | ${performer.country}`;
  document.getElementById('creator-dialog-bio').textContent = performer.bio;

  const tagsRow = document.getElementById('creator-dialog-tags');
  tagsRow.innerHTML = (performer.tags || []).map(t => `<span class="spec-badge highlight">${t}</span>`).join(' ');

  // Find all festival events with this creator
  const events = (appData.program_items || []).filter(item => (item.performer_ids || []).includes(creatorId));
  const eventsContainer = document.getElementById('creator-dialog-events-list');
  eventsContainer.innerHTML = '';

  if (events.length === 0) {
    eventsContainer.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem;">Žádné vypsané události.</p>';
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
        <button class="btn btn-glass" style="padding:0.35rem 0.75rem; font-size:0.78rem;" id="btn-creator-event-${ev.id}">
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

/* --- STAGES / VENUES SECTION --- */
function renderStages() {
  const stages = appData.stages || [];
  DOM.stagesGrid.innerHTML = '';

  stages.forEach(st => {
    const card = document.createElement('div');
    card.className = 'stage-card';
    card.innerHTML = `
      <span class="stage-badge">Kapacita: ${st.capacity} osob</span>
      <h3 class="stage-title">${st.name}</h3>
      <div class="stage-type">${st.type}</div>
      <p class="stage-desc">${st.description}</p>
      <div class="stage-hw-list">
        ${(st.hardware || []).map(h => `<span class="spec-badge">${h}</span>`).join('')}
      </div>
    `;
    DOM.stagesGrid.appendChild(card);
  });
}

/* --- TOAST NOTIFICATIONS --- */
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

/* --- AUTOMATED WALKTHROUGHS FOR SCENARIOS 1 & 2 --- */
function initScenarioWalkthroughs() {
  const btnScen1 = document.getElementById('btn-run-scenario-1');
  const btnScen2 = document.getElementById('btn-run-scenario-2');
  const btnReset = document.getElementById('btn-reset-prototype');

  btnScen1.addEventListener('click', () => {
    // Scenario 1: Tomáš (Gamer) -> Day 2 -> Matrix Arena -> Haptika -> Kybernetický únik -> Detail & Rezervace
    resetAllFilters();
    
    // 1. Switch to Day 2
    state.selectedDay = '2';
    DOM.dayTabs.forEach(t => t.classList.toggle('active', t.dataset.day === '2'));

    // 2. Filter stage to Matrix Arena
    state.selectedStage = 'stage-matrix-6dof';
    DOM.stageFilterSelect.value = 'stage-matrix-6dof';

    // 3. Quick pill haptic
    state.quickPill = 'haptic';
    DOM.quickPills.forEach(p => p.classList.toggle('active', p.dataset.pill === 'haptic'));

    renderProgramItems();

    // 4. Scroll to program section
    document.getElementById('program-section').scrollIntoView({ behavior: 'smooth' });

    showToast('🧪 Scénář 1 aktivován: Den 2, Matrix Arena, Haptika. Otevírám položku Kybernetický únik...');

    setTimeout(() => {
      // Open detail of prog-27 (Kybernetický únik)
      openItemDetail('prog-27');
      // Autofill booking name
      document.getElementById('reserve-user-name').value = 'Tomáš Novák (Gamer)';
      document.getElementById('reserve-user-email').value = 'tomas.novak@example.cz';
    }, 900);
  });

  btnScen2.addEventListener('click', () => {
    // Scenario 2: Karolína (Cinefilka) -> Find Mateo Silva -> See films -> Add to schedule -> Check collisions
    resetAllFilters();

    // 1. Scroll to creators
    document.getElementById('creators-section').scrollIntoView({ behavior: 'smooth' });

    // 2. Search for Mateo Silva
    state.creatorsSearchQuery = 'mateo silva';
    DOM.creatorsSearchInput.value = 'Mateo Silva';
    renderCreators();

    showToast('🧪 Scénář 2 aktivován: Vyhledán španělský dokumentarista Mateo Silva. Otevírám jeho profil...');

    setTimeout(() => {
      // Open Mateo Silva's profile (perf-03)
      openCreatorDetail('perf-03');
    }, 800);
  });

  btnReset.addEventListener('click', () => {
    resetAllFilters();
    state.mySchedule = [];
    state.reservations = {};
    localStorage.removeItem('chromasync_schedule');
    localStorage.removeItem('chromasync_reservations');
    updateScheduleBadge();
    showToast('Prototyp byl kompletně resetován do výchozího stavu.');
  });
}
