let initialState = {
  animal: {},
  animals: [{
    id: 1,
    name: 'León',
    description: 'De todos los felinos del planeta, son los únicos que viven en familia. Cuando llega el momento de buscar alimento las hembras adultas toman la iniciativa, y sólo si la presa es muy grande, el macho suspenderá repentimanente su descanso para sumarse a la cacería. Las crías aprenden poco a poco jugando entre ellas y empiezan a participar de la búsqueda de alimento cuando cumplen más de un año. Son verdaderos amantes del descanso, en cada familia por una hora de actividad se garantizan diez horas de pausa.',
    img: 'https://actioncoach.com.mx/mariainesmoran/wp-content/uploads/sites/3/2016/08/LEON-SERIO-.jpg'
  }, {
    id: 2,
    name: 'Zorro',
    description: 'Detrás de su amigable apariencia hay un astuto y recursivo animal que no se vara cuando de buscar alimento se trata. Si este abunda escoge sólo mejor, pero si escasea, no tiene problema en aventurarse a recorrer grandes distancias hasta encontrar el menú que saciará su hambre. Le encantan los roedores, los cangrejos, las ranas, los reptiles, las aves, las tortugas e incluso los insectos; pero si encuentra huevos, semillas o una que otra fruta silvestre, no dudará en hacerlo parte del almuerzo',
    img: 'https://www.nationalgeographic.com.es/medio/2018/02/27/zorro__1280x720_2.jpg'
  }, {
    id: 3,
    name: 'Avestruz',
    description: 'Es el ave más grande y pesada que habita por estos días el planeta, puede alcanzar incluso los 3 metros de altura y pesar el equivalente a 3 personas de peso promedio. Pone huevos supergigantes de 25 centímetros, que sirven de protección a polluelos que al nacer medirán lo mismo que una gallina mediana, pesarán cerca de un kilogramo y crecerán casi 1 centímetro por día durante los primeros meses. Si un avestruz corriera en la ciudad sería multada sin piedad, ya que puede alcanzar velocidades de 90 kilómetros por hora.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/aveztruzh.jpg'
  }, {
    id: 4,
    name: 'Tapir Amazónico',
    description: 'Es un verdadero tractor de la selva, el cuerpo macizo y compacto, la cabeza y cuello fuertes y robustos son sus mejores herramientas para abrir caminos a través del impenetrable follaje de las selvas tropicales. Los caminos que abre son aprovechados por muchos otros animales para desplazarse en busca de agua y alimento. A diferencia de los tractores mecánicos, los senderos de la danta vuelven a cerrarse en las semanas siguientes sin afectar el equilibrio del lugar.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/dantah.jpg'
  }, {
    id: 5,
    name: 'Nutria Gigante',
    description: 'En la mitología Makuna, las nutrias antes eran gente como nosotros, que aprendieron a vivir en grupos, a comunicarse y a cocinar los alimentos. Pero alguien les robó el fuego y se vieron obligadas a regresar a las aguas y comer peces crudos. Aunque perdieron el dominio de las brasas, aún guardan toda la sabiduría para cuidar la vida, en las selvas, ríos, lagos y lagunas de la Orinoquía y la Amazonía.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/nutriah.jpg'
  }, {
    id: 6,
    name: 'Llama',
    description: 'Cuenta la leyenda que el hijo de los fundadores del imperio inca, se enamoró perdidamente de su hermana, quien había nacido para ser una Virgen del Sol. Como era un amor imposible, huyeron al monte donde el dios Viracocha los convirtió en las primeras llamas. Sin embargo fueron descubiertos, capturados y sacrificados. Los espíritus de los enamorados emprendieron su viaje por la vía láctea, y cuentan que al llegar a su destino, recuperarán la forma humana y regresarán al mundo para fundar un nuevo reino con armonía entre los humanos. ',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/llamah.jpg'
  }, {
    id: 7,
    name: 'Caripiari',
    description: 'Son como celdas solares, están activos sólo en días cálidos y soleados. Les encanta tomar deliciosos baños de sol por largos períodos de tiempo. Pero en los días fríos, lluviosos o cuando las nubes insisten en tapar los rayos del astro mayor, estos friolentos lagartos prefieren desaparecer y refugirase en profundos túneles, buscando el calor que no encuentran en la superfice. Todo esto sucede porque no pueden regular por si mismos la temperatura del cuerpo, para ellos "el calor es vida".',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/lobopolleroh.jpg'
  }, {
    id: 8,
    name: 'Cusumbosolo',
    description: 'Aunque generalmente los veremos en manadas, estas sólo están compuestas por hembras y jóvenes machos. Los machos adultos prefieren vivir en solitario, como ermitaños del bosque, sin las complicaciones de la vida en grupo. Eso sí, cuando llega el momento de reproducirse olvidan su gusto por la soledad y se acercan a las manadas con la intensión de conquistar una hembra en celo que quiera convertirse en madre de sus hijos. Pero una vez cumplido el encargo regresan a su soltería dejando las labores de crianza a quien alguna vez les entregó su afecto.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/cusumboh.jpg'
  }, {
    id: 9,
    name: 'Garzon Soldado',
    description: 'Esta cigueña de América impone respeto no sólo por su extraordinario tamaño sino por el largo, pesado y oscuro pico que usa con habilidad para muchas labores: como arma de defenza personal, como lanza para capturar peces y crustáceos, como pinza para atrapar ranas y serpientes, o como herramienta de construcción para elaborar sus nidos gigantescos en las copas de árboles y palmas. Y como no emite sonidos ni cantos, usa su pico también para comunicarse a través fuertes golpeteos y castañeos.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/garzonsoldadoh.jpg'
  }, {
    id: 10,
    name: 'Pitón Birmana',
    description: 'Algunos insensatos insisten en comerciar ilegalmente con la fauna silvestre, creando grandes problemas en el equilibrio vital del planeta. La pitón es una de las más codiciadas. El necio que la compra sólo se da cuenta de su error cuando esta belleza natural no para de crecer, demanda más alimento y se convierte en un riesgo. Decide entonces abandonarla, sin percatarse que además de ser cómplice de un negocio ilegal, pone en riesgo la fauna local, que no tiene cómo enfrentar al depredador desconocido.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/pitonh.jpg'
  }, {
    id: 11,
    name: 'Jaguar',
    description: 'El diseño hidrodinámico de su cuerpo es una maravilla natural, al igual que los torpedos, es alargado, compacto y cilíndrico. La poderosa cola es ancha en la base y achatada al final cumpliendo la tarea de potente motor y timón de precisión. Las velocidades que alcanza son extraordinarias y la destreza de sus giros asombrosa. Como si fuera poco, esta experta nadadora cuenta con una cabeza redondeada, orejas pequeñas y pelos supersensibles en su hocico, que le permiten detectar las más pequeñas vibraciones que generen sus presas bajo el agua.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/jaguarh.jpg'
  }, {
    id: 12,
    name: 'Venado de cola blanca',
    description: 'Saben que su supervivencia depende de la habilidad para encontrar alimento y detectar a tiempo algún depredador que aceche en las cercanías. Cuando identifican un peligro, activan tres señales de alarma: resoplan vigorozamente, golpean fuertemente el suelo con sus poderosas patas y levantan la cola mostrando y batiendo la mancha blanca que la cubre y que, durante la huída, servirá de guía a los otros miembros del grupo que siguen al listo venado que alertó del inminente peligro.',
    img: 'https://www.zoologicodecali.com.co/cache/mod_roksprocket/34bfe9d406188d80dc93bf0e1bbda542_150_250.jpg'
  }, {
    id: 13,
    name: 'Tatabro',
    description: 'De repente el silencio del bosque se opaca con el estruendo de mil castañuelas... son los tatabros que seguramente han detectado alguna amenaza e intentan asustar a su deprerador. Han aprendido que su fortaleza está en el grupo, por eso se cuidan de no abandonar la manada. Un tatabro solitario es presa facil para cualquier hambriento jaguar, sin embargo cualquier depredador lo pensará dos veces antes de enfrentarlos cuando la pandilla está reunida.',
    img: 'https://www.zoologicodecali.com.co/cache/mod_roksprocket/bc4f2bc0ed4064482a5868bd4093d42a_150_250.jpg'
  }, {
    id: 14,
    name: 'Cebra',
    description: 'Pocos animales tienen un pelaje tan característico como el de la cebra. Las rayas de cada una son únicas como nuestras huellas dactilares y por más que nos esforcemos no encontraremos dos iguales. Pero además de hacerlas únicas, las rayas les sirven para camuflarse entre la hierba alta, para confundir a los osados depredadores, que cuando acechan la manada no logran distinguir dónde empieza un animal y donde termina otro.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/cebrash.jpg'
  }, {
    id: 15,
    name: 'Oso Pardo',
    description: 'Este gigante peludo ha desarrollado un finísimo sentido del olfato, nada ni nadie se escapa de su poderosa nariz. Puede detectar a kilómetros cualquier fruto o animal que le sirva de alimento, e incluso una que otra hembra coqueta que se encuentre en celo. Cuando llega el invierno suelen entrar en cuevas para "desconectarse" del mundo y dormir plácidamente, alimentados únicamente por las extraordinarias reservas de grasa que guardan bajo la piel.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/osopardoh.jpg'
  }, {
    id: 16,
    name: 'Cóndor',
    description: 'Los Incas creían, que gracias a su fuerza y tamaño, elevaba el sol sobre las montañas andinas para dar inicio a cada día. Nadie como él es capaz de dominar con destreza las corrientes de aire y superar sin aparente esfuerzo las montañas más altas del continente. El cóndor, al igual que otros parientes cercanos, como los gallinazos y las gualas, hace parte del equipo de limpiadores de la naturaleza, se alimentan de animales muertos con extraordinaria rapidez eliminando cualquier fuente de enfermedad o contaminación.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/condorh.jpg'
  }, {
    id: 17,
    name: 'Emú',
    description: 'El Emú macho es el ejemplo vivo de lo que significa ser un papá dedicado. Si bien la mamá es la que pone los huevos en el nido, que con esmero hizo el macho, es él quién se encargará de protegerlos y cuidar las crías cuando nazcan. Es tal su compromiso, que durante el cuidado del nido no comerá, no se alejará y por nada del mundo abandonará su nido durante las 8 largas semanas de incubación, incluso a costa de perder hasta un tercio de su peso.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/emuh.jpg'
  }, {
    id: 18,
    name: 'Anaconda',
    description: 'Es la reina de los grandes ríos y humedales de las llanuras del Orinoco y las selvas del gran Amazonas, y la serpiente que mayor peso alcanza de todas las que habitan el planeta. Su gran tamaño no es excusa para ser la más veloz y ágil nadadora de las aguas que frecuenta. Trata de evitar los ríos correntosos, y le apasionan las aguas quietas y lentas, donde permanece la mayor parte del tiempo sumergida, asomando sólo la nariz y los ojos, para pasar desapercibida sin importar sus dimensiones. Como no es venenosa, cuando busca alimento debe hacer uso del abrazo más poderoso que se conoce en la selva, después de algunos minutos hasta el más fuerte se rinde ante el dominio de esta mega serpiente.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/anacondah.jpg'
  }, {
    id: 19,
    name: 'Babilla',
    description: 'Las hembras son dedicadas mamás que antes de poner sus huevos preparan grandes nidos con hojas en descomposición y ramas para mantener un ambiente cálido. La temperatura es tan importante que de ella depende el sexo de las babillas bebés, si es cercana a los 30° nacerán hembras y si se acerca a los 34° nacerán machos. Cuando llega el momento de abandonar el nido, la madre transporta cuidadosamente las crías en su boca hasta la fuente de agua dulce más cercana.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/babilla.jpg'
  }, {
    id: 20,
    name: 'Antílope Negro',
    description: 'El macho dominante, destacado por su pelaje más oscuro y sus torneados e imponentes cuernos, es el señor de la manada. Siempre está rodeado de hembras con sus hijos, que además de acompañarlo lo cuidan con esmero. Cuando alguna amenaza se acerca,una de las hembras mayores avisa del peligro con un extraordinario salto y es entonces cuando la manada corre a gran velocidad sin respetar los límites del camino.',
    img: 'https://www.zoologicodecali.com.co/images/zooanimalesapp/antilopeh.jpg'
  }

  ]
};

const animalReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_ANIMAL':
      return {
        ...state,
        animal: action.payload.animal
      };

    case 'SET_ANIMALDidMount':
      const n = state.animals.filter(animal => {return animal.name === action.payload.animal} )[0]
      console.log(n);
      return{
        ...state,
        animal: n
      };
    default:
      return state;
  }
}

export default animalReducer;