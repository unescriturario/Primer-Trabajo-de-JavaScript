//Creador de Nombres de Bandas Aleatorios: Escribe una función que genere nombres de bandas aleatorios
//y únicos cada vez que se llama. Puedes combinar palabras inusuales,
//colores extravagantes y animales exóticos para hacerlos sonar realmente
//interesantes.

function elementosBandasRock(elementos) {
    return elementos[Math.floor(Math.random() * elementos.length)] }

var bandasAleatorias = ["The Beatles", "Led Zeppelin", "Pink Floyd", "Queen", "The Rolling Stones",
"The Who", "U2", "Nirvana", "AC/DC", "Guns N' Roses", "Metallica", "The Eagles",
"Radiohead", "The Doors", "Pearl Jam", "Foo Fighters", "Black Sabbath",
"Deep Purple", "The Clash", "Ramones", "Green Day", "Red Hot Chili Peppers",
"Linkin Park", "Coldplay", "The Killers", "Oasis", "R.E.M.", "Blur", "The Cure",
"Aerosmith", "Bon Jovi", "Def Leppard", "Journey", "Kiss", "Scorpions", "Van Halen",
"Rush", "Yes", "Genesis", "The Police", "Sting", "Dire Straits", "ZZ Top",
"The Beach Boys", "Fleetwood Mac", "The Allman Brothers Band", "Lynyrd Skynyrd",
"The Jimi Hendrix Experience", "The Grateful Dead", "Cream", "The Byrds", "The Kinks",
"The Velvet Underground", "The Smashing Pumpkins", "Soundgarden", "Alice in Chains",
"Stone Temple Pilots", "Rage Against the Machine", "Muse", "The White Stripes",
"Arctic Monkeys", "The Strokes", "Interpol", "Radio Moscow", "Wolfmother",
"The Black Keys", "Cage the Elephant", "Imagine Dragons", "The Cranberries", "Placebo",
"Evanescence", "Panic! At The Disco", "My Chemical Romance", "Fall Out Boy", "Paramore",
"Twenty One Pilots", "Bring Me The Horizon", "Avenged Sevenfold", "System of a Down",
"Tool", "Nine Inch Nails", "Depeche Mode", "The Smiths", "Joy Division", "New Order",
"The Cure", "Siouxsie and the Banshees", "The Sisters of Mercy", "Echo & the Bunnymen",
"The Psychedelic Furs", "Talking Heads", "The B-52's", "Devo", "Blondie"] 
var bandasAleatoriasDEF = elementosBandasRock(bandasAleatorias)

var coloresbandas = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja", "Morado", "Rosa", "Marrón",
"Gris", "Blanco", "Negro", "Turquesa", "Celeste", "Violeta", "Cian", "Magenta",
"Ocre", "Lavanda", "Caqui", "Teal", "Coral", "Salmon", "Lila", "Ámbar",
"Oliva", "Aguamarina", "Beige", "Champán", "Carmesí", "Escarlata", "Índigo",
"Café", "Rosa claro", "Fucsia", "Amarillo limón", "Gris perla", "Esmeralda",
"Turmalina", "Rubí", "Zafiro", "Ámbar", "Topacio", "Ciruela", "Coral oscuro",
"Azul marino", "Malva", "Mostaza", "Chocolate", "Ámbar oscuro", "Ámbar claro",
"Turquesa oscuro", "Verde oscuro", "Rojo oscuro", "Púrpura oscuro", "Azul oscuro",
"Amarillo oscuro", "Marrón oscuro", "Gris oscuro", "Blanco antiguo", "Gris plata",
"Gris pizarra", "Gris acero", "Gris marengo", "Rosa palo", "Amarillo pálido"]
var coloresbandasDEF = elementosBandasRock(coloresbandas)

var animalesbandas = ["Axolotl", "Quokka", "Okapi", "Narval", "Coatí", "Quetzal", "Fennec", "Aye Aye",
"Tarsier", "Kakapo", "Blobfish", "Nudibranquio", "Takin", "Loris Pigmeo", "Cuscús",
"Numbat", "Irrawaddy", "Vaquita Marina", "Jerbo", "Kiwi", "Pudu", "Sifaka", "Tapir",
"Wallaby", "Uakari", "Binturong", "Xoloitzcuintli", "X-Ray Tetra", "Zorse",
"Zonkey", "Zebroid", "Zorse", "Zorse", "Bongo", "Chinchilla", "Dhole", "Echidna",
"Fossa", "Galago", "Hoopoe", "Ibex", "Jackalope", "Kinkajou", "Lynx", "Manatee",
"Nudibranch", "Ocelot", "Pangolin", "Quoll", "Red Panda", "Serval", "Thylacine",
"Uguisu", "Vicuña", "Wallaroo", "Xenopus", "Yak", "Zebu", "Alpaca", "Bongo",
"Capybara", "Dik-Dik", "Elephant Shrew", "Ferret-Badger", "Gaur", "Hyrax", "Iguana",
"Javan Rhino", "Kouprey", "Lyrebird", "Markhor", "Nudibranch", "Okapi", "Pangolin",
"Quokka", "Raccoon Dog", "Sloth Bear", "Tarsier", "Uakari", "Vaquita", "Wallaroo",
"X-Ray Tetra", "Yellow-Eyed Penguin", "Zebra Duiker", "Axolotl", "Yak", "Zorse",
"Uguisu", "Vicuña", "Wallaroo", "Xenopus", "Yak", "Zebu", "Alpaca", "Bongo",
"Capybara", "Dik-Dik", "Elephant Shrew", "Ferret-Badger", "Gaur", "Hyrax", "Iguana",
"Javan Rhino", "Kouprey", "Lyrebird", "Markhor", "Nudibranch", "Okapi", "Pangolin",
"Quokka", "Raccoon Dog", "Sloth Bear", "Tarsier", "Uakari", "Vaquita", "Wallaroo",
"X-Ray Tetra", "Yellow-Eyed Penguin", "Zebra Duiker"]

var animalesbandasDEF = elementosBandasRock(animalesbandas)

var bandasexoticas = `Banda exotica unica en el planeta de tipo animalistica: ${bandasAleatoriasDEF} ${coloresbandasDEF} ${animalesbandasDEF}`

console.log (bandasexoticas)


//Conversor de Emociones a Emoji: Instrucciones: Crea una función que tome una cadena de texto que exprese
//emociones (como "feliz", "triste", "sorprendido") y la convierta en un emoji
//correspondiente. ¡Añade una dosis de humor a tus emociones!


function emojy (emocion) { 
if (emocion < 0 ||emocion > 0 || emocion === 0){console.log("El programa no acepta numeros. Por favor ingrese una palabra que contenga una emocion. Ej: Tristeza") }
else if ((emocion === "Triste") || (emocion === "triste") || (emocion === "Melancolico") || (emocion === "melancolico") || (emocion === "Desanimado") || (emocion === "desanimado") || (emocion === "Deprimido") || 
(emocion === "deprimido") || (emocion === "Abatido") || (emocion === "abatido") || (emocion === "Acongojado") || (emocion === "acongojado") || (emocion === "Desesperanzado") || (emocion === "desesperanzado") || 
(emocion === "Angustiado") || (emocion === "angustiado") || (emocion === "Desilusionado") || (emocion === "desilusionado") || (emocion === "Inquieto") || (emocion === "inquieto") || (emocion === "Nervioso") || 
(emocion === "nervioso") || (emocion === "Preocupado") || (emocion === "preocupado") || (emocion === "Ansioso") || (emocion === "ansioso") || (emocion === "Estresado") || (emocion === "estresado") || 
(emocion === "Aterrado") || (emocion === "aterrado") || (emocion === "Asustado") || (emocion === "asustado") || (emocion === "Temeroso") || (emocion === "temeroso") || (emocion === "Inseguro") || 
(emocion === "inseguro") || (emocion === "Avergonzado") || (emocion === "avergonzado") || (emocion === "Culpable") || (emocion === "culpable") || (emocion === "Arrepentido") || (emocion === "arrepentido") || 
(emocion === "Agobiado") || (emocion === "agobiado") || (emocion === "Desconcertado") || (emocion === "desconcertado") || (emocion === "Desesperado") || (emocion === "desesperado") || (emocion === "Perdido") || 
(emocion === "perdido") || (emocion === "Confundido") || (emocion === "confundido") || (emocion === "Aburrido") || (emocion === "aburrido") || (emocion === "Desinteresado") || (emocion === "desinteresado") || 
(emocion === "Indiferente") || (emocion === "indiferente") || (emocion === "Insatisfecho") || (emocion === "insatisfecho") || (emocion === "Insipido") || (emocion === "insipido") || (emocion === "Cansado") || 
(emocion === "cansado") || (emocion === "Fatigado") || (emocion === "fatigado") || (emocion === "Exhausto") || (emocion === "exhausto") || (emocion === "Hartado") || (emocion === "hartado") || 
(emocion === "Irritado") || (emocion === "irritado") || (emocion === "Enojado") || (emocion === "enojado") || (emocion === "Furioso") || (emocion === "furioso") || (emocion === "Hostil") || 
(emocion === "hostil") || (emocion === "Agresivo") || (emocion === "agresivo") || (emocion === "Amargado") || (emocion === "amargado") || (emocion === "Resentido") || (emocion === "resentido") || 
(emocion === "Ofendido") || (emocion === "ofendido") || (emocion === "Herido") || (emocion === "herido") || (emocion === "Rechazado") || (emocion === "rechazado") || (emocion === "Abandonado") || 
(emocion === "abandonado") || (emocion === "Solitario") || (emocion === "solitario") || (emocion === "Desamparado") || (emocion === "desamparado") || (emocion === "Vulnerable") || (emocion === "vulnerable") || 
(emocion === "Desconfiado") || (emocion === "desconfiado") || (emocion === "Pesimista") || (emocion === "pesimista") || (emocion === "Negativo") || (emocion === "negativo") || (emocion === "Descontento") || 
(emocion === "descontento") || (emocion === "Insatisfaccion") || (emocion === "insatisfaccion") || (emocion === "Frustrado") || (emocion === "frustrado") || (emocion === "Estancado") || 
(emocion === "estancado") || (emocion === "Incapaz") || (emocion === "incapaz") || (emocion === "Inutil") || (emocion === "inutil") || (emocion === "Desalentado") || (emocion === "desalentado") || 
(emocion === "Desmotivado") || (emocion === "desmotivado") || (emocion === "Indignado") || (emocion === "indignado") || (emocion === "Afligido") || (emocion === "afligido") || (emocion === "Lamentable") || 
(emocion === "lamentable") || (emocion === "Abatido") || (emocion === "abatido") || (emocion === "Desconcertado") || (emocion === "desconcertado") || (emocion === "Desilusionado") || 
(emocion === "desilusionado") || (emocion === "Desesperanzado") || (emocion === "desesperanzado") || (emocion === "Incomprendido") || (emocion === "incomprendido") || 
(emocion === "Despreciado") || (emocion === "despreciado"))
{ console.log('😥')}

else if ((emocion === "Feliz") || (emocion === "feliz") || (emocion === "Alegre") || (emocion === "alegre") || (emocion === "Optimista") || (emocion === "optimista") || (emocion === "Entusiasta") || (emocion === "entusiasta") || 
(emocion === "Animado") || (emocion === "animado") || (emocion === "Vibrante") || (emocion === "vibrante") || (emocion === "Esperanzado") || (emocion === "esperanzado") || (emocion === "Gratificado") || 
(emocion === "gratificado") || (emocion === "Satisfecho") || (emocion === "satisfecho") || (emocion === "Contento") || (emocion === "contento") || (emocion === "Motivado") || (emocion === "motivado") || 
(emocion === "Confiado") || (emocion === "confiado") || (emocion === "Radiante") || (emocion === "radiante") || (emocion === "Fascinado") || (emocion === "fascinado") || (emocion === "Inspirado") || 
(emocion === "inspirado") || (emocion === "Encantado") || (emocion === "encantado") || (emocion === "Tranquilo") || (emocion === "tranquilo") || (emocion === "Sereno") || (emocion === "sereno") || 
(emocion === "Optimista") || (emocion === "optimista") || (emocion === "Firme") || (emocion === "firme") || (emocion === "Decidido") || (emocion === "decidido") || (emocion === "Dichoso") || (emocion === "dichoso") || 
(emocion === "Ecstatico") || (emocion === "ecstatico") || (emocion === "Euforico") || (emocion === "euforico") || (emocion === "Vivaz") || (emocion === "vivaz") || (emocion === "Jubiloso") || (emocion === "jubiloso") || 
(emocion === "Radiante") || (emocion === "radiante") || (emocion === "Satisfecho") || (emocion === "satisfecho") || (emocion === "Realizado") || (emocion === "realizado") || (emocion === "Triunfante") || 
(emocion === "triunfante") || (emocion === "Esplendido") || (emocion === "esplendido") || (emocion === "Maravillado") || (emocion === "maravillado") || (emocion === "Apasionado") || (emocion === "apasionado") || 
(emocion === "Agradecido") || (emocion === "agradecido") || (emocion === "Emocionado") || (emocion === "emocionado") || (emocion === "Estimulado") || (emocion === "estimulado") || (emocion === "Grato") || 
(emocion === "grato") || (emocion === "Fascinado") || (emocion === "fascinado") || (emocion === "Maravillado") || (emocion === "maravillado") || (emocion === "Agradecido") || (emocion === "agradecido") || 
(emocion === "Vital") || (emocion === "vital") || (emocion === "Radiante") || (emocion === "radiante") || (emocion === "Esperanzador") || (emocion === "esperanzador") || (emocion === "Conmovido") || 
(emocion === "conmovido") || (emocion === "Asombrado") || (emocion === "asombrado") || (emocion === "Pleno") || (emocion === "pleno") || (emocion === "Sereno") || (emocion === "sereno") || 
(emocion === "Triunfante") || (emocion === "triunfante") || (emocion === "Fascinante") || (emocion === "fascinante") || (emocion === "Agradecido") || (emocion === "agradecido") || (emocion === "Dinamico") || 
(emocion === "dinamico") || (emocion === "Festivo") || (emocion === "festivo") || (emocion === "Ilusionado") || (emocion === "ilusionado") || (emocion === "Entusiasmado") || (emocion === "entusiasmado") || 
(emocion === "Efervescente") || (emocion === "efervescente") || (emocion === "Empoderado") || (emocion === "empoderado") || (emocion === "Radiante") || (emocion === "radiante") || 
(emocion === "Esplendido") || (emocion === "esplendido") || (emocion === "Estimulante") || (emocion === "estimulante") || (emocion === "Sorprendido") || (emocion === "sorprendido") || 
(emocion === "Gratificante") || (emocion === "gratificante") || (emocion === "Aliviado") || (emocion === "aliviado") || (emocion === "Rejuvenecido") || (emocion === "rejuvenecido") || 
(emocion === "Confortable") || (emocion === "confortable") || (emocion === "Consolado") || (emocion === "consolado") || (emocion === "Esclarecido") || (emocion === "esclarecido") || 
(emocion === "Reconfortado") || (emocion === "reconfortado") || (emocion === "Reconocido") || (emocion === "reconocido") || (emocion === "Triunfador") || (emocion === "triunfador") || 
(emocion === "Resuelto") || (emocion === "resuelto") || (emocion === "Resplandeciente") || (emocion === "resplandeciente") || (emocion === "Rejuvenecido") || (emocion === "rejuvenecido") || 
(emocion === "Liberado") || (emocion === "liberado") || (emocion === "Convincente") || (emocion === "convincente") || (emocion === "Aclamado") || (emocion === "aclamado"))
{ console.log('😂')}

 else if ((emocion === "Indiferente") || (emocion === "indiferente") || (emocion === "Equilibrado") || (emocion === "equilibrado") || (emocion === "Neutro") || (emocion === "neutro") || 
 (emocion === "Tranquilo") || (emocion === "tranquilo") || (emocion === "Calmo") || (emocion === "calmo") || (emocion === "Impasible") || (emocion === "impasible") || 
 (emocion === "Imperturbable") || (emocion === "imperturbable") || (emocion === "Sereno") || (emocion === "sereno") || (emocion === "Inalterable") || (emocion === "inalterable") || 
 (emocion === "Objetivo") || (emocion === "objetivo") || (emocion === "Racional") || (emocion === "racional") || (emocion === "Analitico") || (emocion === "analitico") || 
 (emocion === "Imparcial") || (emocion === "imparcial") || (emocion === "Desapegado") || (emocion === "desapegado") || (emocion === "Equitativo") || (emocion === "equitativo") || 
 (emocion === "Inmutable") || (emocion === "inmutable") || (emocion === "Inocuo") || (emocion === "inocuo") || (emocion === "Placido") || (emocion === "placido") || 
 (emocion === "Desinteresado") || (emocion === "desinteresado") || (emocion === "Inexpresivo") || (emocion === "inexpresivo") || (emocion === "Insensible") || (emocion === "insensible") || 
 (emocion === "Imperturbable") || (emocion === "imperturbable") || (emocion === "Inalterado") || (emocion === "inalterado") || (emocion === "Pasivo") || (emocion === "pasivo") || 
 (emocion === "Desapasionado") || (emocion === "desapasionado") || (emocion === "Frio") || (emocion === "frio") || (emocion === "Distante") || (emocion === "distante") || 
 (emocion === "Aloof") || (emocion === "aloof") || (emocion === "Despreocupado") || (emocion === "despreocupado") || (emocion === "Desconectado") || (emocion === "desconectado") || 
 (emocion === "Neutral") || (emocion === "neutral") || (emocion === "Desinteresado") || (emocion === "desinteresado") || (emocion === "Impersonal") || (emocion === "impersonal") || 
 (emocion === "Inodoro") || (emocion === "inodoro") || (emocion === "Incoloro") || (emocion === "incoloro") || (emocion === "Insipido") || (emocion === "insipido") || 
 (emocion === "Inodoro") || (emocion === "inodoro") || (emocion === "Insipido") || (emocion === "insipido") || (emocion === "Deslucido") || (emocion === "deslucido") || 
 (emocion === "Desabrido") || (emocion === "desabrido") || (emocion === "Monotono") || (emocion === "monotono") || (emocion === "Inodoro") || (emocion === "inodoro") || 
 (emocion === "Sin Emocion") || (emocion === "sin emocion"))
 
 { console.log('😐')}

else {console.log("Me es dificil expresar en un emojy tu estado de animo") }

}

emojy("feliz")
emojy (0)
emojy("ffffff")


//Generador de Historias Absurdas: Instrucciones: Desarrolla una función que genere historias absurdas
//combinando elementos inesperados, como pingüinos que hablan francés,
//robots enamorados de plantas y astronautas perdidos en el espacio con una
//mascota alienígena

function elementosHistorias(lista) {
    return lista[Math.floor(Math.random() * lista.length)] }

var pingüinos = ["Pingüino parlante", "Pingüino vestido de gala", "Pingüino con sombrero"];
var pinguinosDEF = elementosHistorias(pingüinos)
var idiomas = ["francés", "español", "alemán", "italiano"];
var idiomasDEF = elementosHistorias(idiomas)
var robots = ["Robot enamorado", "Robot bailarín", "Robot chef"];
var robotsDEF = elementosHistorias(robots)
var plantas = ["Planta bailarina", "Planta cantante", "Planta filósofa"];
var plantasDEF = elementosHistorias(plantas)
var astronautas = ["Astronautas despistados", "Astronautas músicos", "Astronautas chefs"];
var astronautasDEF = elementosHistorias(astronautas)
var espacio = ["Seres humanos", "Reptilianos", "Gatitos"];
var espacioDEF = elementosHistorias(espacio)
var mascotasAlienígenas = ["Mascota alienígena peluda", "Mascota alienígena con antenas", "Mascota con tres ojos"];
var mascotasAlienígenasDEF = elementosHistorias(mascotasAlienígenas)

var historiaLoca = `Había una vez un ${pinguinosDEF} que hablaba ${idiomasDEF}. 
Este pingüino, junto con su amigo ${robotsDEF}, se enamoró perdidamente de una ${plantasDEF}. 
Decidieron embarcarse en una aventura espacial y se convirtieron en ${astronautasDEF}.
Mientras exploraban el espacio, se encontraron con un grupo de ${espacioDEF} y adoptaron como 
mascota a una curiosa ${mascotasAlienígenasDEF}.La tripulación peculiar continuó su viaje por la galaxia, viviendo las más extrañas y divertidas peripecias.`

console.log(historiaLoca)

//Creador de Recetas Culinarias del Futuro: Instrucciones: Escribe una función que genere recetas culinarias futuristas
//combinando ingredientes inusuales y técnicas de cocina avanzadas. ¡Haz
//que la comida del futuro sea emocionante y deliciosa!

function recetas(insumos) {
    return insumos[Math.floor(Math.random() * insumos.length)] }

var ingredientesprincipales = ["Polvo de estrellas","Cristales comestibles","Esferas de algas bioiluminiscentes","Gel de quinoa molecular",
"Néctar de flores siderales"]

var ingredientesprincipalesDEF = recetas(ingredientesprincipales)

var ingredientesinusuales = ["Perlas de agua lunar","Fungisintetizador","Espuma de nubes terrestres","Salsa de aurora boreal",
"Caviar de meteorito"]

var ingredientesinusualesDEF = recetas(ingredientesinusuales)

var tecnicasprincipales = [ "Impresión 3D culinaria","Criococción al vacío","Fusión molecular","Cocción por inducción magnética",
"Desnaturalización cuántica"]

var tecnicasprincipalesDEF = recetas(tecnicasprincipales)

var tecnicasavanzadas = ["Emulsión cuántica","Desconstrucción cuántica","Infusión gravitacional","Vaporización fotónica",
"Teletransportación culinaria"]

var tecnicasavanzadasDEF = recetas(tecnicasavanzadas)

var recetanovedosa = `
**Receta Futurista: ${ingredientesprincipalesDEF} preparado a traves de ${tecnicasprincipalesDEF}**

Ingredientes:
    - ${ingredientesprincipalesDEF}
    - ${ingredientesinusualesDEF}
    
    Técnica culinaria:
    - ${tecnicasprincipalesDEF}
    - ${tecnicasavanzadasDEF}
    
    Instrucciones:
    1. Preparar ${ingredientesprincipalesDEF} utilizando la técnica de ${tecnicasprincipalesDEF}.
    2. Incorporar los demás ingredientes de manera innovadora.
    3. Experimentar con combinaciones únicas.
    4. ¡Listo para disfrutar de una experiencia culinaria del futuro!
  `;

console.log(recetanovedosa)

//Escribe una función que genere nombres y características únicas para planetas imaginarios. Combina elementos como colores,
//elementos químicos y fenómenos cósmicos para crear mundos asombrosos.

function planetasNuevos(caracteristicas) {
    return caracteristicas[Math.floor(Math.random() * caracteristicas.length)] }

var coloresplanetas = ["Rojo","Azul","Verde","Púrpura","Amarillo","Naranja","Plateado","Dorado","Cian","Magenta",]

var coloresplanetasDEF = planetasNuevos(coloresplanetas) 

var elementosQuimicos = ["Helio","Neón","Kriptón","Xenón","Titanio","Plutonio","Cesio","Rubidio","Iridio","Paladio"]

var elementosQuimicosDEF = planetasNuevos(elementosQuimicos) 

var fenomenosCosmicos = ["Nebulosa","Agujero de gusano","Supernova","Cúmulo estelar","Llamarada solar","Anillo astral","Vórtice cuántico",
"Pulsar","Estrella fugaz","Cinturón de asteroides",]

var fenomenosCosmicosDEF = planetasNuevos(fenomenosCosmicos)

var galaxias = ["Vía Láctea","Galaxia de Andrómeda (M31)","Galaxia del Triángulo (M33)","Galaxia del Sombrero (M104)",
"Gran Nube de Magallanes","Pequeña Nube de Magallanes","Galaxia del Molinete (M101)","Galaxia del Remolino (M51)",
"Galaxia del Escultor (NGC 253)","Galaxia del Cigarro (M82)"]

var galaxiasDEF = planetasNuevos(galaxias)

var caracteristicasplaneta =`
**Nombre del planeta: ${coloresplanetasDEF} - ${galaxiasDEF}**

Caracteristicas principales:
    - Galaxia: ${galaxiasDEF}
    - Elemento quimico principal: ${elementosQuimicosDEF}
    - Fenomeno cosmico principal: ${fenomenosCosmicosDEF}

`;

console.log (caracteristicasplaneta)



















