import ajiacoImg from '../assets/img/ajiaco.jpg';
import ricePuddingImg from '../assets/img/ricePudding.jpg';
import bandejaPaisaImg from '../assets/img/bandejaPaisa.jpg';
import hogaoImg from '../assets/img/hogao.jpg';
import pancakeImg from '../assets/img/pancake.jpg';

export const RECIPES = [
        {
            id: '1',
            name: 'Ajiaco',
            category:'Plato fuerte',
            difficulty:'Difícil',
            image: ajiacoImg,
            prepTime: '60 min',
            benefits: 'Gran fuente de energía y calor; aporta carbohidratos complejos de las papas y del pollo.',
            ingredients: [
            '1 Pechuga de pollo (400g)',
            '125g de papa criolla', 
            '125g de papa pastusa', 
            '125g de papa sabanera',
            '13g Guascas',
            '3 Mazorcas partidas a la mitad (380g)',
            '60g Crema de leche y 20g alcaparras'
            ],
            steps: [
            'Cocinar el pollo con la mazorca sumergido en 1L de agua hirviendo.',
            'Agregarle sal al gusto',
            'Agregar los tres tipos de papas gradualmente.',
            'Cocinar a fuego lento hasta que espese.',
            'Añadir las guascas al final y servir con crema de leche.'
            ]
        },
        {
            id: '2',
            name: 'Arroz con Leche',
            category:'Postre',
            difficulty:'Dificultad media',
            image: ricePuddingImg,
            prepTime: '35 min',
            benefits: 'Postre clásico reconfortante; proporciona energía rápida y calcio.',
            ingredients: [
            '1 taza de Arroz blanco (250g)',
            '2 tazas de Agua (500ml)',
            '1 astilla de canela (5g)',
            '2 tazas de Leche (500ml)',
            '1 taza de Crema de leche (240g)',
            '1/2 taza de Leche condensada (140g)',
            ],
            steps: [
            'Cocinar el arroz en agua hasta que ablande.',
            'Agregar la leche y la leche condensada.',
            'Hervir con la astilla de canela hasta que esté cremoso.',
            'Enfriar o servir tibio según la preferencia.'
            ]
        },
        {
            id: '3',
            name: 'Bandeja Paisa',
            category:'Plato fuerte',
            difficulty:'Dificil',
            image: bandejaPaisaImg,
            prepTime: '90 min',
            benefits: 'Plato muy completo y saciante; alto contenido de proteína y hierro.',
            ingredients: [
            '1 1/2 cucharadas de aceite (21 g)',
            '2 tallos de cebolla larga finamente picada (30 g)',
            '2 tomates maduros sin piel y finamente picados (240 g)',
            '3 tazas de agua (750 ml)',
            '1/2 libra de fríjoles bola roja remojados desde la noche anterior (250 g)',
            '1 zanahoria mediana, entera y pelada (140 g)',
            '1/2 libra de arroz blanco cocinado (250 g)',
            '1/4 libra de carne molida magra (125 g)',
            '1/4 de libra de tocino crocante cortado en 4 porciones (125 g)',
            '4 huevos fritos (200 g)',
            '4 tajadas de plátano maduro fritas (80 g)',
            '1 aguacate partido en 4 porciones (110 g)'
            ],
            steps: [
            'Calienta en una olla a presión una cucharada de aceite por 3 minutos a fuego medio; añade la cebolla, el tomate y el DESMENUZADO y revuelve para integrar bien, finalmente cocina por 2 minutos o hasta que el tomate suelte sus jugos.',
            'Adiciona las tres tazas de agua, los fríjoles y la zanahoria entera. Tapa la olla y cocina por 30 minutos.',
            'Pasado el tiempo de cocción retira la olla del fuego, sácale el aire con cuidado antes de destapar.',
            'Agrega el licuado a la olla nuevamente para espesar, lleva a fuego bajo y revuelve de vez en cuando.',
            'Calienta en una sartén el aceite restante por 3 minutos a fuego medio. Agrega la carne y con una cuchara revuelve, debes dejar cocinar por 10 minutos o hasta que este bien cocinada.',
            'En una olla de fondo alto agrega 2 tazas de agua y el tocino cortado en trozos; tapa la olla y lleva al fuego medio por 20 minutos o hasta que el tocino esté bien cocinado y crocante. Retira del fuego y déjalos en papel absorbente para retirar el exceso de grasa.',
            'En una sartén pequeña adicionar dos cucharadas de agua y los chorizos. Lleva a fuego medio hasta que los chorizos estén bien dorados.',
            'En una parrilla o sartén a fuego medio debes poner las arepas y dorar por ambos lados.',
            'En 4 bandejas o 4 platos sirve arroz, fríjoles, carne molida, chicharrón, chorizo, huevo, aguacate, arepa y 1 tajada de plátano maduro, todo en porciones iguales.'
            ]
        },
        {
            id: '4',
            name: 'Hogao',
            category:'Entrada',
            difficulty:'Facíl',
            image: hogaoImg,
            prepTime: '15 min',
            benefits: 'Base esencial rica en antioxidantes por el tomate y la cebolla cocidos.',
            ingredients: [
            'Tomates maduros picados',
            '1 taza de cebolla larga picada',
            '3 cucharadas de aceite vegetal',
            '1 diente de ajo picado',
            'Sal, pimienta y comino al gusto'
            ],
            steps: [
            'Calentar el aceite en una sartén.',
            'Sofreír la cebolla hasta que esté transparente.',
            'Agregar el tomate y los condimentos.',
            'Cocinar a fuego bajo hasta que se forme una salsa espesa.',
            'Ajuste la sazón.'
            ]
        },
        {
            id: '5',
            name: 'Panquecas de Banana',
            category:'Postre',
            difficulty:'Dificultad media',
            image: pancakeImg,
            prepTime: '15 min',
            benefits: 'Desayuno saludable rico en potasio y fibra, sin harinas procesadas.',
            ingredients: [
            '2 Bananos maduros',
            '2 Huevos',
            'Avena en hojuelas o harina de avena',
            'Esencia de vainilla',
            '1/4 de taza de leche',
            '1/2 cucharadita polvo de hornear',
            'Pizca de sal'
            ],
            steps: [
            'Triturar los bananos en un recipiente.',
            'Mezclar con los huevos, la avena, la sal y la leche.',
            'Añadir la cucharadita de polvo de hornear y 4 gotas de esencia de vainilla',
            'Calentar una sartén antiadherente.',
            'Cocinar pequeñas porciones por ambos lados hasta dorar.'
            ]
        }
]

export default RECIPES