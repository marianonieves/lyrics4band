module.exports = function() { 

this.lyrics = [
"Baja desde el cielo en una nube con un trueno",
"Veo que desciende y no preciso nada más",
"No conozco a nadie q comprenda lo que siento",
"En un mundo etéreo llego siempre siempre a ese lugar",
"Miles de momentos me recuerdan que no estoy despierto",
"Cuando me doy cuenta el agua llena este lugar",
"Y entre tanto veo que el reloj allá sigue corriendo",
"Y que acá yo fluyendo tal vez te puedo atrapar",
"Baja por mí, me sumerjo al fin",
"Mientras desde un cuenco el tiempo vibra con un nuevo invierno",
"Infinitas ganas de volver a navegar",
"Entre fuertes olas veo gotas que mojan mí cuerpo",
"Y otra vez despierto y otra vez vuelvo a empezar",
"Y me voy hundiendo y otra vez vuelvo a empezar",
"Solo un paso doy para ver el sol",
"En el viento huelo un dira-di-da-dira-di-da",
"Y de nuevo estoy, Vuelvo y otra vez me voy",
"Caminando por el dira-di-di-dira-dirá",
"Sabes bien que será, Ya no sé qué hacer, Si seguir o ya volver, Estoy tan bien",
"Un ventilador, Una gota de calor",
"entre sueños veo un dirá-dida-dirá-dira",
"Voy pasando de estación, esperando un plan mejor",
"el mundo gira y dirá-dada-dirá-dira",
"Sabes dónde estará, Ya no sé quién quiero ser",
"¿Soy feliz o no estoy bien? Creo q estoy bien,",
"Todo está tan bien, Caminando por la rambla veo a la gente",
"Todo está muy bien Somos uno, somos 2, somos 100",
"Todo lo que soy y lo que intente, es dar lo mejor",
"Un acto de fe fue lo que te di",
"y vos para mi",
"Un rayo de sol reflejo en tu piel, casi romantico",
"Me mostre ante vos casi eterno, casi fiel, casi romantico",
"Todo lo que se es lo que aprendi de ayer",
"Todas las barreras ceden",
"Miro hacia el mar cada atardecer y se desaparecer",
"Lo arruine otra vez, aunque lo intenté, casi romantico",
"Si pido perdon no es para ser casi romantico",
"Las flores de un verano atrás",
"Los besos en algún lugar",
"Fumábamos Marlboro light",
"Recuerdos con olor a pan",
"Tirada sin querer pensar",
"La alfombra de hace años atrás",
"No sé qué decir cuando estoy con vos",
"Nos llevamos mal pero igual sin vos no quiero estar",
"Cada mirada te leo",
"Cada caricia que cae en el suelo",
"Mí cuerpo no siente deseo",
"No veo el camino que llega a tu fuego y me pierdo",
"Me pierdo acá adentro en un agujero negro",
"En cuatro paredes me encierro de nuevo después de mil años de caminar ciegos",
"Con fuego te leo, normal yo te veo tirado en el suelo pensando de nuevo",
"Entre tanta cosa siento que no puedo seguir este juego",
"Pensando qué mierda te digo de nuevo",
"Ella grita “perdón mi amor” se da vuelta y corre para el balcón",
"Sus amigos preguntarán ¿Cuándo fue que se partió en dos?",
"Otra persona va tomando fuerza en su interior",
"Si el mundo la deja ser: Para, Corre, salta, vuela",
"Flota y sube, como nubes en el mar",
"Ella no va a bajar cuando la quieran rescatar Ella va",
"Niega que fue por casualidad, La brisa nocturna se lo trago",
"En sus labios ya no está él susurrando que ella no puede ser",
"Una rutina de otro color cuando ya nada se siente igual",
"Si mis labios ya no saben que soy y tus manos ya no sienten más mi calor, es que viajando voy hacia lo eterno",
"Una foto que se pierde de hoy",
"Una sed de pensamiento donde no estoy",
"Porque viajando voy hacia lo eterno",
"Entre sombras las voces que asoman me dicen q todo termina acá",
"¿Y si este no es el final? ¿Y si todo vuelve a empezar?",
"En la piel, Es Babel, Ojos sedientos",
"Sin saber que esta vez Somos eternos",
"Amanece con las gotas de sol entre miles de partículas de calor",
"Me suspendo y voy hacia lo eterno y los otros siembran vida y color",
"Pero ya no formo parte de donde estoy, entre diamantes voy",
"Vi tus ojos recorrer el mar y descubrí otra vez que ya no sirve hablar",
"Y nos fuimos de la realidad sin preguntar por que, para no vernos mas",
"Libres en el cielo flotan hacia el mar",
"Tejen mundos nuevos en el más allá",
"y entre sí nunca se van a encontrar",
"Viaje eterno de eclipse total",
"Las mareas pasarán como rastros secos",
"Cargo con mis miedos los dejo llevar",
"Caen en el suelo, muerte ya no hay",
"Cae muerto, rueda y se vuelve a levantar",
"En sus dedos veo sus deseos explotar",
"Entre sombras paso a paso busca un lugar que las olas den a sus recuerdos un final",
"Armamos nuestro propio ser, rodeados de personas que no saben ver",
"Ahora todo vuelve a arder y nadie nos enseña a ser, ¿cómo se supone que tengo que hacer? ¿Cómo saber?",
"El aire sabe cuando soplar, El fuego sabe arder, El agua purifica Y nuestro amor se ve",
"Corremos para no volver a ser aquellos que una vez quisimos ser",
"Soñando que todo está bien pero siempre se vuelve a caer",
"De las llamas diamantes volvimos a ser",
"Esto fue el paraíso y hoy lo veo arder pero de las cenizas todo vuelve a crecer",
"Si el amor salva al mundo todo va a estar bien, Nuestro amor se ve"  
];

this.hashtags = " #LaFlorida #LAFLO #NeoSoul #NeoSoulLatino";

this.between = function(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

this.getRandomLyric = function() { 
  return this.lyrics[ this.between(0,(this.lyrics.length-1) ) ] + this.hashtags;
};

this.getLyricByIndex = function(index) { 
  var fixedIndex = index % this.lyrics.length;
  return this.lyrics[ fixedIndex ] + this.hashtags;
};

};
