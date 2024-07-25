import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore";

const productos = [
  {
    id: "123",
    categoria: "cuerda",
    nombre: "Fender Precision Bass",
    descripcion: "Fender Precision Bass American Professional II",
    stock: "10",
    precio: "300",
    imagen: "../img/cuerda/bajo1.jpg",
    descripcionLargo: `
    Experimenta la esencia del legendario sonido Fender con el Precision Bass American Professional II. Este bajo eléctrico icónico redefine la versatilidad y la comodidad para músicos de todos los estilos. Con un cuerpo de aliso o fresno, dependiendo del acabado elegido, y un mástil de arce en forma de "C" moderna con diapasón de palo de rosa o arce, este bajo no solo ofrece un diseño estéticamente clásico, sino también una ergonomía excepcional.

    El Precision Bass American Professional II está equipado con pastillas V-Mod II Precision Bass de bobina dividida, diseñadas para ofrecer un tono potente y claro que se adapta perfectamente a cualquier estilo musical. Con controles de volumen master, tono master y un interruptor de bypass pasivo/activo, este bajo te permite esculpir tu sonido con precisión, desde graves profundos y redondos hasta tonos brillantes y definidos.

    La construcción de alta calidad y la artesanía meticulosa aseguran que cada nota resuene con claridad y sustain. Ya sea que estés grabando en el estudio o tocando en vivo, el Precision Bass American Professional II es la elección definitiva para músicos exigentes que buscan un instrumento confiable, versátil y lleno de carácter.

    Características:
    - Cuerpo: Aliso o fresno, dependiendo del acabado
    - Mástil: Arce, forma de "C" moderna
    - Diapasón: Palo de rosa o arce, según el modelo
    - Pastillas: V-Mod II Precision Bass de bobina dividida
    - Controles: Volumen master, tono master, interruptor de bypass pasivo/activo
    - Puente: HiMass™ Vintage (cuerdas a través del cuerpo)

    Acabados Disponibles:
    - Olympic White
    - 3-Color Sunburst
    - Black
    - Antique Olive
    - Mercury

    Descubre por qué el Precision Bass American Professional II continúa siendo el estándar de oro en bajos eléctricos, ofreciendo tanto una estética clásica como un rendimiento moderno y confiable. Perfecto para músicos profesionales y aficionados por igual, este bajo captura la esencia del legado Fender con cada nota que tocas.
  `
  },

  {
    id: "45623",
    categoria: "cuerda",
    nombre: "Fender Jazz Bass",
    descripcion: "Fender Jazz Bass American Professional II",
    stock: "2",
    precio: "300",
    imagen: "../img/cuerda/bajo2.jpg",
    descripcionLargo: `
    Sumérgete en la versatilidad legendaria del Fender Jazz Bass American Professional II. Este bajo icónico combina el diseño clásico con innovaciones modernas para ofrecer un instrumento que se adapta a cualquier estilo musical. Con un cuerpo de aliso o fresno, dependiendo del acabado elegido, y un mástil de arce en forma de "C" moderna con diapasón de palo de rosa o arce, el Jazz Bass no solo impresiona visualmente, sino que también proporciona una comodidad excepcional y un acceso sin restricciones a los trastes.

    Equipado con las nuevas pastillas V-Mod II Jazz Bass de bobina simple, este bajo ofrece un tono vibrante y definido que resalta en cualquier mezcla. Los controles de volumen master, tono master y un interruptor de bypass pasivo/activo permiten una personalización precisa del sonido, desde graves profundos y cálidos hasta agudos brillantes y expresivos.

    La construcción meticulosa y los detalles de alta calidad garantizan una ejecución suave y un sustain notable en cada nota. Ya sea en el escenario o en el estudio, el Jazz Bass American Professional II es la elección ideal para músicos que buscan un instrumento confiable y lleno de carácter.

    Características:
    - Cuerpo: Aliso o fresno, dependiendo del acabado
    - Mástil: Arce, forma de "C" moderna
    - Diapasón: Palo de rosa o arce, según el modelo
    - Pastillas: V-Mod II Jazz Bass de bobina simple
    - Controles: Volumen master, tono master, interruptor de bypass pasivo/activo
    - Puente: HiMass™ Vintage (cuerdas a través del cuerpo)

    Acabados Disponibles:
    - Olympic White
    - 3-Color Sunburst
    - Black
    - Antique Olive
    - Mercury

    Descubre por qué el Jazz Bass American Professional II continúa siendo la elección de músicos profesionales y aficionados por igual, capturando la esencia del sonido Fender con cada nota que tocas.
  `
  },

  {
    id: "5448",
    categoria: "cuerda",
    nombre: "Fender CC-60S",
    descripcion: "Fender Classical Guitar CC-60S",
    stock: "3",
    precio: "300",
    imagen: "../img/cuerda/guitarra1.jpg",
    descripcionLargo: `
    Descubre la elegancia y el sonido distintivo de la Fender Classical Guitar CC-60S. Este instrumento combina la artesanía tradicional con características modernas para ofrecer una experiencia musical excepcional tanto para principiantes como para músicos experimentados. Con una tapa de abeto sólido y un fondo y aros de caoba, la CC-60S proyecta un tono cálido y resonante con una respuesta equilibrada en todo el espectro tonal.

    El mástil de caoba con perfil fácil de tocar y el diapasón de nogal ofrecen una sensación cómoda y natural, ideal para largas sesiones de práctica y presentaciones en vivo. Equipada con cuerdas de nylon que proporcionan un toque suave y una respuesta dinámica, esta guitarra clásica responde con claridad a cada pulsación.

    Diseñada para ser versátil, la CC-60S es perfecta tanto para interpretaciones clásicas como para explorar géneros contemporáneos. Ya sea que estés aprendiendo tus primeros acordes o refinando tu técnica, la Fender CC-60S te inspirará con su sonido rico y su construcción robusta.

    Características:
    - Tapa: Abeto sólido
    - Fondo y aros: Caoba
    - Mástil: Caoba, perfil fácil de tocar
    - Diapasón: Nogal
    - Cuerdas: Nylon
    - Puente: Nogal con selleta de hueso

    Con su diseño clásico y sonido excepcional, la Fender Classical Guitar CC-60S es la elección perfecta para cualquier guitarrista que busque calidad, confort y una voz distintiva que inspire cada nota.
  `
  },

  {
    id: "9556",
    categoria: "cuerda",
    nombre: "Fender CN-60S",
    descripcion: "Fender Classical Guitar CN-60S",
    stock: "130",
    precio: "300",
    imagen: "../img/cuerda/guitarra2.jpg",
    descripcionLargo: `
    Explora la belleza tonal y la artesanía excepcional de la Fender Classical Guitar CN-60S. Este instrumento representa la fusión perfecta entre tradición y modernidad, ofreciendo un sonido rico y resonante junto con un toque cómodo y una ejecución fluida. Con una tapa de abeto sólido y un cuerpo de caoba laminada, la CN-60S proyecta un tono cálido y equilibrado que responde con claridad y expresividad.

    El mástil de caoba con perfil delgado y el diapasón de nogal proporcionan una experiencia de juego suave y confortable, ideal para explorar una amplia gama de estilos musicales. Equipada con cuerdas de nylon que ofrecen una respuesta dinámica y una excelente proyección tonal, esta guitarra clásica garantiza una interpretación inspiradora en cualquier entorno.

    Diseñada para músicos exigentes, la CN-60S combina una estética clásica con características modernas que la convierten en una elección versátil para estudiantes y profesionales por igual. Desde interpretaciones íntimas hasta presentaciones en escenarios, la Fender CN-60S asegura un rendimiento excepcional en cada actuación.

    Características:
    - Tapa: Abeto sólido
    - Fondo y aros: Caoba laminada
    - Mástil: Caoba, perfil delgado
    - Diapasón: Nogal
    - Cuerdas: Nylon
    - Puente: Nogal con selleta de hueso

    Descubre por qué la Fender Classical Guitar CN-60S es la elección preferida de los guitarristas que valoran la calidad, la versatilidad y el sonido clásico que solo Fender puede ofrecer.
  `
  },

  {
    id: "3656",
    categoria: "cuerda",
    nombre: "Fender CC-60SCE",
    descripcion: "Fender Classical Guitar CC-60SCE",
    stock: "1",
    precio: "300",
    imagen: "../img/cuerda/guitarra3.jpg",
    descripcionLargo: `
    Sumérgete en el mundo del sonido clásico con la Fender Classical Guitar CC-60SCE. Esta guitarra combina la elegancia tradicional con las características modernas necesarias para músicos exigentes. Con una tapa de abeto sólido y un cuerpo de caoba, la CC-60SCE ofrece un tono cálido y resonante con una proyección excepcional.

    Equipada con un sistema de pastillas Fishman CD preamp con afinador incorporado, esta guitarra no solo suena bien acústicamente, sino que también ofrece versatilidad para amplificar su sonido en escenarios y estudios. El mástil de caoba con perfil delgado y el diapasón de nogal proporcionan una experiencia de juego cómoda y ágil, ideal para músicos que buscan expresar su creatividad con facilidad.

    Ya sea que estés tocando en casa, en el escenario o grabando en el estudio, la CC-60SCE asegura un rendimiento consistente y confiable. Con su diseño clásico y características modernas, esta guitarra clásica es la elección perfecta para músicos que valoran tanto el estilo como el rendimiento.

    Características:
    - Tapa: Abeto sólido
    - Fondo y aros: Caoba
    - Mástil: Caoba, perfil delgado
    - Diapasón: Nogal
    - Sistema de pastillas: Fishman CD preamp con afinador incorporado
    - Puente: Nogal con selleta de hueso

    Descubre por qué la Fender Classical Guitar CC-60SCE es la preferida de músicos que buscan una guitarra clásica con sonido auténtico y prestaciones modernas.
  `
  },

  {
    id: "96565",
    categoria: "cuerda",
    nombre: "Memphis MG32",
    descripcion: "Memphis MG32",
    stock: "5",
    precio: "300",
    imagen: "../img/cuerda/guitarraelectrica1.jpg",
    descripcionLargo: `
    Experimenta el poder y la versatilidad de la guitarra eléctrica Memphis MG32. Diseñada para músicos que buscan un sonido potente y una estética atractiva, la MG32 combina elementos clásicos con características modernas para ofrecer una experiencia de juego excepcional.

    Con un cuerpo de aliso que proporciona un tono equilibrado y resonante, la Memphis MG32 está equipada con pastillas humbucker dobles que ofrecen un sonido robusto y lleno de riqueza armónica. Desde tonos limpios y brillantes hasta distorsiones potentes, esta guitarra te permite explorar una amplia gama de estilos musicales con facilidad.

    El mástil de arce con perfil delgado y el diapasón de palo de rosa ofrecen una sensación cómoda y ágil, ideal para técnicas rápidas y precisas. Equipada con un puente trémolo estándar y afinadores de alta calidad, la MG32 asegura una estabilidad de afinación excepcional y una ejecución suave en cualquier situación.

    Diseñada tanto para principiantes como para músicos experimentados, la Memphis MG32 es la elección perfecta para aquellos que buscan una guitarra eléctrica confiable y llena de carácter.

    Características:
    - Cuerpo: Aliso
    - Pastillas: Humbucker dobles
    - Mástil: Arce, perfil delgado
    - Diapasón: Palo de rosa
    - Puente: Trémolo estándar

    Descubre por qué la guitarra eléctrica Memphis MG32 es una opción popular entre músicos que valoran el rendimiento y la estética en igual medida.
  `
  },

  {
    id: "3268",
    categoria: "cuerda",
    nombre: "Memphis MG100",
    descripcion: "Memphis MG100",
    stock: "9",
    precio: "300",
    imagen: "../img/cuerda/guitarraelectrica2.jpg",
    descripcionLargo: `
    Sumérgete en el mundo del rock con la guitarra eléctrica Memphis MG100. Este instrumento combina potencia, estilo y versatilidad para satisfacer las demandas de músicos en todos los niveles. Con un cuerpo de tilo que ofrece un tono cálido y resonante, la MG100 está equipada con dos pastillas humbucker dobles que proporcionan un sonido potente y lleno de matices.

    Desde riffs contundentes hasta solos expresivos, la MG100 te permite explorar una amplia variedad de géneros musicales con facilidad. El mástil de arce con perfil delgado y el diapasón de palo de rosa ofrecen una acción suave y cómoda, ideal para técnicas rápidas y precisas en el mástil.

    Equipada con un puente trémolo flotante y afinadores de alta calidad, la MG100 asegura una estabilidad de afinación excepcional y una ejecución fluida en cualquier situación. Ya sea en el escenario o en el estudio, esta guitarra eléctrica te inspirará a alcanzar nuevos niveles de creatividad musical.

    Características:
    - Cuerpo: Tilo
    - Pastillas: Dos humbuckers dobles
    - Mástil: Arce, perfil delgado
    - Diapasón: Palo de rosa
    - Puente: Trémolo flotante

    Descubre por qué la guitarra eléctrica Memphis MG100 es la elección preferida de guitarristas que buscan potencia, versatilidad y estilo en un solo instrumento.
  `
  },

  {
    id: "95456",
    categoria: "cuerda",
    nombre: "Violín Profesional",
    descripcion: "Violín Acústico Profesional",
    stock: "7",
    precio: "300",
    imagen: "../img/cuerda/violin1.jpg",
    descripcionLargo: `
    Descubre la belleza y la expresividad del violín acústico profesional. Este instrumento combina artesanía tradicional con materiales de alta calidad para ofrecer un sonido rico y una experiencia musical excepcional. Con una tapa de abeto sólido, fondo y aros de arce flameado, y un acabado brillante que resalta la belleza natural de la madera, este violín no solo es un placer visual, sino también auditivo.

    Equipado con cuerdas de alta calidad que proporcionan una respuesta dinámica y un tono cálido, el violín acústico te permite expresarte con precisión y emotividad en cada interpretación. El mástil de arce con diapasón de ébano ofrece una sensación cómoda y una ejecución ágil, ideal para músicos que buscan técnica y expresión musical.

    Diseñado para satisfacer las demandas de músicos profesionales, el violín acústico profesional es la elección perfecta para presentaciones en solitario, música de cámara y grabaciones en estudio. Con su sonido característico y su estética elegante, este violín te inspirará a explorar nuevas fronteras musicales.

    Características:
    - Tapa: Abeto sólido
    - Fondo y aros: Arce flameado
    - Mástil: Arce, diapasón de ébano
    - Cuerdas: Alta calidad
    - Acabado: Brillante

    Descubre por qué el violín acústico profesional es una opción preferida entre violinistas que valoran la calidad, la expresividad y la belleza artística en un instrumento.
  `
  },

  {
    id: "2154",
    categoria: "cuerda",
    nombre: "Violín 4/4",
    descripcion: "Violín Eléctrico 4/4",
    stock: "22",
    precio: "300",
    imagen: "../img/cuerda/violin2.jpg",
    descripcionLargo: `
    Experimenta la versatilidad y la innovación con el violín eléctrico 4/4. Este instrumento combina la elegancia clásica de un violín acústico con las características modernas necesarias para amplificar y explorar nuevos sonidos. Con una construcción cuidadosamente diseñada que incluye una tapa de abeto sólido y un cuerpo de arce, el violín eléctrico 4/4 ofrece un sonido rico y equilibrado tanto acústicamente como amplificado.

    Equipado con un sistema de pastillas activas y preamplificador incorporado, este violín te permite conectar directamente a un amplificador o sistema de sonido sin comprometer la calidad del tono. El mástil de arce con diapasón de ébano ofrece una sensación cómoda y una acción suave, ideal para técnicas avanzadas y interpretaciones dinámicas.

    Diseñado tanto para actuaciones en vivo como para grabaciones en estudio, el violín eléctrico 4/4 es la elección perfecta para músicos que buscan un instrumento que combine tradición con innovación. Con su capacidad para explorar nuevos sonidos y estilos musicales, este violín te inspirará a expandir tus horizontes musicales.

    Características:
    - Tapa: Abeto sólido
    - Fondo y aros: Arce
    - Mástil: Arce, diapasón de ébano
    - Sistema de pastillas: Activas con preamplificador incorporado
    - Acabado: Natural brillante

    Descubre por qué el violín eléctrico 4/4 es una opción popular entre violinistas que buscan versatilidad, calidad de sonido y una estética elegante en un instrumento moderno.
  `
  },

  {
    id: "63262",
    categoria: "cuerda",
    nombre: "Violín Amateur",
    descripcion: "Violín Acústico para Principiantes",
    stock: "56",
    precio: "300",
    imagen: "../img/cuerda/violin2.jpg",
    descripcionLargo: `
    Sumérgete en el mundo de la música con el violín acústico para principiantes. Este instrumento está diseñado para ofrecer una introducción accesible y asequible al arte del violín, ideal para estudiantes y músicos amateur. Con una construcción robusta que incluye una tapa de abeto laminado y un cuerpo de arce, el violín ofrece un tono claro y resonante que facilita el aprendizaje y la práctica.

    Equipado con cuerdas de calidad estándar que ofrecen una respuesta equilibrada y un sonido agradable, este violín proporciona una experiencia de juego cómoda y gratificante. El mástil de arce con diapasón de madera dura ofrece una acción suave y facilita el desarrollo de habilidades técnicas básicas.

    Ideal para estudiantes y músicos que están comenzando su viaje musical, el violín acústico para principiantes es la elección perfecta para explorar el mundo del violín sin comprometer la calidad ni la experiencia musical. Con su diseño accesible y sonido agradable, este violín te inspirará a descubrir tu potencial musical.

    Características:
    - Tapa: Abeto laminado
    - Fondo y aros: Arce
    - Mástil: Arce, diapasón de madera dura
    - Cuerdas: Estándar
    - Acabado: Natural

    Descubre por qué el violín acústico para principiantes es una opción popular entre aquellos que buscan comenzar su viaje musical con un instrumento accesible y de calidad.
  `
  },

  {
    id: "75454",
    categoria: "percusion",
    nombre: "Pearl Export",
    descripcion: "Pearl Export EXX725S/C",
    stock: "3",
    precio: "300",
    imagen: "../img/cuerda/bateria1.jpg",
    descripcionLargo: `
    Experimenta el poder y la calidad legendaria con la batería Pearl Export EXX725S/C. Diseñada para satisfacer las demandas de músicos de todos los niveles, esta batería ofrece un sonido dinámico y una construcción robusta que garantiza un rendimiento excepcional en cualquier situación musical.

    La configuración de cinco piezas incluye tambores de alta calidad fabricados con álamo y caoba, que proporcionan un tono resonante y definido. El bombo de 22" ofrece graves profundos y potentes, mientras que los toms de diferentes tamaños permiten una versatilidad tonal óptima. Los platillos incluidos complementan perfectamente el conjunto, proporcionando brillo y respuesta dinámica.

    Equipada con hardware resistente y duradero, la Pearl Export EXX725S/C asegura una estabilidad excepcional y una durabilidad a largo plazo. Los soportes de platillos y de tom están diseñados para facilitar ajustes precisos y rápidos durante las actuaciones en vivo.

    Ya sea que estés tocando en el escenario, grabando en el estudio o practicando en casa, la batería Pearl Export EXX725S/C te proporcionará la inspiración y el rendimiento que necesitas para destacar en cualquier situación musical.

    Características:
    - Configuración: 22"x18" bombo, 10"x7" y 12"x8" toms, 16"x16" floor tom, 14"x5.5" caja
    - Material de los tambores: Álamo y caoba
    - Incluye platillos y hardware resistente
    - Acabado: Satin Chrome
    - Color: Sólido

    Descubre por qué la batería Pearl Export EXX725S/C es una elección preferida entre bateristas que buscan calidad, versatilidad y fiabilidad en un kit de batería.
  `
  },

  {
    id: "9563264",
    categoria: "percusion",
    nombre: "Pearl Roadshow",
    descripcion: "Pearl Roadshow RS525SC/C",
    stock: "2",
    precio: "300",
    imagen: "../img/cuerda/bateria2.jpg",
    descripcionLargo: `
    Sumérgete en el mundo de la percusión con la batería Pearl Roadshow RS525SC/C. Diseñada para principiantes y músicos que buscan calidad a un precio asequible, esta batería ofrece un sonido excepcional y una construcción robusta que garantiza una experiencia de juego gratificante.

    La configuración de cinco piezas incluye tambores fabricados con madera de álamo y capas de álamo, que proporcionan un tono equilibrado y resonante. El bombo de 22" ofrece graves profundos y potentes, mientras que los toms y la caja aseguran una respuesta clara y definida. Los platillos incluidos complementan el conjunto con su brillo y dinámica.

    Equipada con hardware resistente y fácil de ajustar, la Pearl Roadshow RS525SC/C asegura una configuración estable y duradera. Los soportes de platillos y de tom están diseñados para facilitar el montaje y ajuste durante las actuaciones en vivo o sesiones de práctica.

    Ya sea que estés comenzando tu viaje musical o busques un kit confiable para ensayar y actuar, la batería Pearl Roadshow RS525SC/C te proporcionará la calidad y versatilidad que necesitas sin comprometer tu presupuesto.

    Características:
    - Configuración: 22"x16" bombo, 10"x8" y 12"x9" toms, 16"x16" floor tom, 14"x5.5" caja
    - Material de los tambores: Álamo y capas de álamo
    - Incluye platillos y hardware resistente
    - Acabado: Chrome

    Descubre por qué la batería Pearl Roadshow RS525SC/C es una opción popular entre músicos que buscan calidad y confiabilidad a un precio accesible.
  `
  },

  {
    id: "521445",
    categoria: "percusion",
    nombre: "Batería Alesis Nitro Mesh Kit",
    descripcion: "Alesis Nitro Mesh Kit",
    stock: "2",
    precio: "300",
    imagen: "../img/cuerda/bateriaelectrica.jpg",
    descripcionLargo: `
    Descubre la versatilidad y la potencia de la batería electrónica Alesis Nitro Mesh Kit. Diseñada para ofrecer una experiencia de percusión inmersiva y realista, esta batería es perfecta para músicos de todos los niveles que buscan practicar, grabar o actuar con un kit versátil y de alta calidad.

    Equipada con parches de malla que proporcionan una sensación natural y una respuesta precisa, la Alesis Nitro Mesh Kit ofrece una experiencia de juego cómoda y silenciosa, ideal para practicar en cualquier entorno. La configuración incluye pads de batería de malla de 8" y 10", un pad de caja de malla de doble zona y tres pads de platillos con choke, que ofrecen una respuesta realista y dinámica.

    El módulo de sonido incluido ofrece una biblioteca de más de 350 sonidos de percusión de alta calidad, junto con 60 pistas de acompañamiento y funciones educativas para mejorar tus habilidades musicales. Con conectividad USB-MIDI, puedes conectar la batería electrónica a tu computadora para grabar directamente en tu DAW favorito o utilizar software de edición de sonido.

    Diseñada para ser fácil de montar y ajustar, la Alesis Nitro Mesh Kit es perfecta para sesiones de práctica intensivas, grabaciones en estudio o actuaciones en vivo. Con su calidad de construcción robusta y características avanzadas, esta batería electrónica te inspirará a explorar nuevos sonidos y estilos musicales.

    Características:
    - Parches de malla para una sensación natural
    - Módulo de sonido con más de 350 sonidos y 60 pistas de acompañamiento
    - Conectividad USB-MIDI para grabación y control de software
    - Incluye rack de montaje y hardware resistente

    Descubre por qué la batería electrónica Alesis Nitro Mesh Kit es la elección preferida entre músicos que buscan calidad, versatilidad y realismo en una batería electrónica accesible.
  `
  },

  {
    id: "311151",
    categoria: "percusion",
    nombre: "Cajón Peruano",
    descripcion: "Cajón Flamenco Peruano",
    stock: "5",
    precio: "300",
    imagen: "../img/cuerda/cajonperuano.jpg",
    descripcionLargo: `
    Sumérgete en los ritmos vibrantes de la cultura peruana con el cajón flamenco peruano. Este instrumento esencial en la música folclórica y flamenca ofrece un sonido distintivo y una construcción artesanal que captura la esencia y la tradición del cajón peruano.

    Fabricado con madera de alta calidad, el cajón flamenco peruano produce bajos profundos y agudos nítidos que se combinan perfectamente para crear patrones rítmicos complejos y expresivos. La tapa frontal de abedul proporciona una superficie de juego sensible y resonante, ideal para ejecuciones dinámicas y expresivas.

    Diseñado para músicos de todos los niveles, desde principiantes hasta profesionales, el cajón flamenco peruano es versátil y se adapta a una variedad de estilos musicales. Ya sea que estés tocando música tradicional peruana, flamenco o explorando nuevos ritmos, este instrumento te inspirará a crear música con pasión y autenticidad.

    Características:
    - Material: Madera de alta calidad
    - Tapa frontal: Abedul
    - Sonido distintivo con bajos profundos y agudos nítidos
    - Ideal para música folclórica peruana y flamenco
    - Acabado: Natural

    Descubre por qué el cajón flamenco peruano es un instrumento imprescindible para músicos que buscan calidad de sonido y tradición en cada interpretación.
  `
  },

  {
    id: "9569653",
    categoria: "viento",
    nombre: "Hohner Special 20",
    descripcion: "Hohner Special 20",
    stock: "5",
    precio: "300",
    imagen: "../img/cuerda/armonica.jpg",
    descripcionLargo: `
    Explora el mundo del blues y la música folk con la armónica Hohner Special 20. Este instrumento icónico es conocido por su tono brillante y su respuesta suave, ideal para músicos de todos los niveles que buscan expresarse con un sonido distintivo y lleno de carácter.

    Fabricada con materiales de alta calidad, la Hohner Special 20 presenta peines de plástico con ranuras de precisión y lengüetas de bronce con recubrimiento de plata, que aseguran una durabilidad excepcional y una respuesta precisa en cada nota. El diseño ergonómico del cuerpo facilita la ejecución cómoda y permite técnicas avanzadas como bends y overblows con facilidad.

    Ideal para actuaciones en solitario, sesiones de grabación o jams improvisadas, la Hohner Special 20 ofrece un rango tonal versátil que se adapta a una variedad de estilos musicales. Desde melodías dulces hasta solos enérgicos, esta armónica te inspirará a explorar nuevas posibilidades musicales y a destacar en cualquier situación.

    Características:
    - Material del peine: Plástico
    - Lengüetas: Bronce con recubrimiento de plata
    - Diseño ergonómico para ejecución cómoda
    - Ideal para blues, folk y otros estilos musicales
    - Disponible en diferentes tonalidades

    Descubre por qué la Hohner Special 20 es la elección preferida entre armonicistas que buscan calidad de sonido, durabilidad y versatilidad en un instrumento clásico.
  `
  },

  {
    id: "365652",
    categoria: "viento",
    nombre: "Yamaha YTR-2330",
    descripcion: "Yamaha YTR-2330",
    stock: "7",
    precio: "300",
    imagen: "../img/cuerda/trompeta.jpg",
    descripcionLargo: `
    Sumérgete en el mundo del jazz, la música clásica y más con la trompeta Yamaha YTR-2330. Este instrumento es conocido por su calidad de construcción, su facilidad de ejecución y su sonido brillante y claro, ideal para músicos principiantes y aficionados que buscan una trompeta confiable y versátil.

    Fabricada con materiales duraderos y componentes de alta calidad, la Yamaha YTR-2330 ofrece un tono rico y equilibrado en todo el rango de la trompeta. El pistón de acción rápida y suave asegura una respuesta precisa y una ejecución cómoda, mientras que el campana de latón amarillo contribuye a un sonido cálido y resonante.

    Diseñada para ser fácil de tocar y mantener, la Yamaha YTR-2330 es la elección perfecta para estudiantes y músicos que buscan desarrollar sus habilidades técnicas y musicales. Con su diseño ergonómico y su acabado plateado brillante, esta trompeta te inspirará a explorar nuevos estilos y expresiones musicales.

    Características:
    - Material: Latón amarillo
    - Pistones: Acero inoxidable, acción rápida
    - Campana: 123 mm (4-7/8")
    - Acabado: Plateado
    - Incluye estuche ligero y boquilla

    Descubre por qué la trompeta Yamaha YTR-2330 es una opción popular entre músicos que valoran calidad, facilidad de ejecución y sonido excepcional en un instrumento de viento.
  `
  },

  {
    id: "224525",
    categoria: "viento",
    nombre: "Yamaha YAS-280",
    descripcion: "Yamaha YAS-280",
    stock: "12",
    precio: "300",
    imagen: "../img/cuerda/saxo.jpg",
    descripcionLargo: `
    Sumérgete en el mundo del jazz, el blues y la música clásica con el saxofón Yamaha YAS-280. Este saxofón alto es ideal para estudiantes y músicos que buscan un instrumento de alta calidad, fácil de tocar y con un sonido característico y brillante.

    Fabricado con materiales duraderos y componentes de alta calidad, el Yamaha YAS-280 ofrece un tono cálido y equilibrado en todo el registro del saxofón. Los detalles ergonómicos, como las teclas ajustables y la acción suave de los pistones, facilitan una ejecución cómoda y precisa, ideal para desarrollar habilidades técnicas y expresivas.

    Diseñado con la experiencia de los saxofonistas profesionales de Yamaha, el YAS-280 es conocido por su fiabilidad y respuesta rápida, lo que lo convierte en una opción popular entre estudiantes y músicos aficionados por igual. El acabado lacado dorado proporciona una estética elegante y duradera que complementa su excepcional rendimiento musical.

    Características:
    - Material: Latón amarillo
    - Llaves: Tipo con bisagras de acero inoxidable
    - Campana: 123 mm (4-7/8")
    - Acabado: Lacado dorado
    - Incluye estuche ligero y boquilla

    Descubre por qué el saxofón Yamaha YAS-280 es una elección preferida entre saxofonistas que valoran calidad, facilidad de ejecución y sonido excepcional en un instrumento de viento.
  `
  },

  {
    id: "9656324",
    categoria: "audiopro",
    nombre: "Sony WH-1000XM4",
    descripcion: "Sony WH-1000XM4",
    stock: "32",
    precio: "300",
    imagen: "../img/cuerda/auriculares.jpg",
    descripcionLargo: `
    Sumérgete en una experiencia auditiva excepcional con los auriculares Sony WH-1000XM4. Diseñados para ofrecer calidad de sonido superior y comodidad durante horas, estos auriculares son ideales para audiófilos, profesionales de la música y viajeros frecuentes que valoran el rendimiento y la versatilidad.

    Equipados con tecnología de cancelación de ruido líder en la industria, los Sony WH-1000XM4 eliminan activamente el ruido ambiental para que puedas disfrutar de tu música con claridad en cualquier entorno. La calidad de audio de alta resolución reproduce cada detalle y matiz musical con precisión, mientras que los controladores de neodimio de 40 mm ofrecen un sonido potente y equilibrado.

    Los auriculares cuentan con controles táctiles intuitivos para gestionar llamadas, música y ajustes de sonido con facilidad. La conectividad Bluetooth multipunto permite conectar dos dispositivos simultáneamente, mientras que la batería de larga duración ofrece hasta 30 horas de reproducción con una sola carga.

    Diseñados para la máxima comodidad, los Sony WH-1000XM4 incluyen almohadillas suaves y una diadema ajustable que garantiza un ajuste seguro y cómodo durante horas de uso. Además, la función de detección de uso pausa automáticamente la música cuando te quitas los auriculares y la reanuda cuando te los vuelves a poner.

    Características:
    - Tecnología de cancelación de ruido activa
    - Calidad de audio de alta resolución
    - Control táctil para llamadas y música
    - Bluetooth multipunto y compatibilidad con asistentes de voz
    - Batería de larga duración: hasta 30 horas con ANC activado

    Descubre por qué los auriculares Sony WH-1000XM4 son la elección preferida entre audiófilos y profesionales que buscan calidad de sonido, comodidad y tecnología avanzada en unos auriculares inalámbricos.
  `
  },

  {
    id: "75421",
    categoria: "audiopro",
    nombre: "Focusrite Scarlett 2i2",
    descripcion: "Focusrite Scarlett 2i2 (3rd Gen)",
    stock: "8",
    precio: "300",
    imagen: "../img/cuerda/interfaz.jpg",
    descripcionLargo: `
    Mejora tu experiencia de grabación y producción musical con la interfaz de audio Focusrite Scarlett 2i2 (3rd Gen). Esta interfaz compacta y potente es ideal para músicos y productores que buscan calidad de sonido profesional y versatilidad en sus estudios caseros o portátiles.

    Equipada con preamplificadores de micrófono Scarlett de tercera generación, la Scarlett 2i2 ofrece un sonido limpio y natural con un rango dinámico mejorado y una respuesta de frecuencia extendida. La conversión AD/DA de 24 bits/192 kHz garantiza una captura y reproducción precisa de audio, ideal para grabaciones detalladas y mezclas precisas.

    La interfaz cuenta con dos entradas combinadas XLR/TRS para conectar micrófonos, instrumentos y otros dispositivos de audio, junto con dos salidas de línea balanceadas para monitores de estudio o equipos de audio externos. Conectividad USB-C asegura una conexión rápida y estable con computadoras modernas y dispositivos móviles compatibles.

    Compatible con una amplia gama de software de grabación y producción, la Scarlett 2i2 incluye un paquete de software creativo que ofrece herramientas esenciales para empezar a grabar y producir música de inmediato. Además, su construcción robusta y su diseño portátil la hacen ideal para músicos que necesitan flexibilidad y calidad en cualquier entorno de trabajo.

    Características:
    - Preamplificadores Scarlett de tercera generación
    - Conversión AD/DA de 24 bits/192 kHz
    - Dos entradas combinadas XLR/TRS
    - Dos salidas de línea balanceadas
    - Conectividad USB-C

    Descubre por qué la interfaz de audio Focusrite Scarlett 2i2 (3rd Gen) es la elección preferida entre músicos y productores que buscan calidad de sonido, facilidad de uso y fiabilidad en su estudio de grabación.
  `
  },

  {
    id: "45686",
    categoria: "audiopro",
    nombre: "Behringer Xenyx",
    descripcion: "Behringer Xenyx Q802USB",
    stock: "3",
    precio: "300",
    imagen: "../img/cuerda/mixer.jpg",
    descripcionLargo: `
    Potencia tu configuración de audio con el mixer Behringer Xenyx Q802USB. Este compacto mezclador es perfecto para músicos, podcasters y estudios caseros que buscan versatilidad, calidad de sonido y conectividad avanzada en una unidad fácil de usar.

    Equipado con preamplificadores de micrófono Xenyx, el Behringer Xenyx Q802USB ofrece un rendimiento de audio excepcional con bajo ruido y alto headroom. Los controles intuitivos y la calidad de construcción robusta garantizan una operación confiable y duradera en cualquier entorno de grabación o actuación.

    El mixer cuenta con dos entradas de micrófono con alimentación phantom, ideales para conectar micrófonos condensadores y dinámicos, así como dos entradas estéreo adicionales para conectar instrumentos, reproductores de audio o dispositivos externos. La interfaz USB integrada permite la conexión directa a computadoras y dispositivos móviles para grabación y reproducción de audio de alta calidad.

    Además de su funcionalidad como mezclador, el Behringer Xenyx Q802USB incluye una interfaz de audio USB con software de grabación gratuito para comenzar a grabar y editar música de inmediato. Su diseño compacto y portátil lo hace perfecto para grabaciones en casa, podcasting o actuaciones en vivo donde se requiere flexibilidad y calidad de sonido superior.

    Características:
    - Preamplificadores Xenyx de alta calidad
    - Dos entradas de micrófono con alimentación phantom
    - Dos entradas estéreo adicionales
    - Interfaz USB integrada para conexión a computadoras
    - Software de grabación gratuito incluido

    Descubre por qué el mixer Behringer Xenyx Q802USB es una opción popular entre músicos y podcasters que buscan versatilidad, calidad de sonido y facilidad de uso en su estudio o configuración de audio.
  `
  },

];

const seedProducts = () => {
  productos.map(( {id, ...rest} ) => {
    const productosRef = collection(db, "productos")
    addDoc(productosRef, rest)
  });
  return
}

seedProducts()