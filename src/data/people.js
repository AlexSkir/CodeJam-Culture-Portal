import avatar_1 from '../img/person_1/avatar/ava.jpg';
import avatar_2 from '../img/person_2/avatar/ava.jpg';

import slide_1 from '../img/person_1/portfolio/work1.jpg';
import slide_2 from '../img/person_1/portfolio/work2.jpg';
import slide_3 from '../img/person_1/portfolio/work3.jpg';
import slide_4 from '../img/person_1/portfolio/work4.jpg';
import slide_5 from '../img/person_1/portfolio/work5.jpg';
import slide_6 from '../img/person_1/portfolio/work6.jpg';

import slide_7 from '../img/person_2/portfolio/work1.jpg';
import slide_8 from '../img/person_2/portfolio/work2.jpg';
import slide_9 from '../img/person_2/portfolio/work3.jpg';
import slide_10 from '../img/person_2/portfolio/work4.jpg';
import slide_11 from '../img/person_2/portfolio/work5.jpg';
import slide_12 from '../img/person_2/portfolio/work6.jpg';

import video_1 from '../video/video1.mp4';
import video_2 from '../video/video2.mp4';

export default [
    {
        id: 1,
        name: 'Михаил Владимирович Анемподистов',
        avatar: avatar_1,
        occupation: 'Белорусский художник, фотограф, дизайнер, поэт, культуролог, искусствовед',
        birthDate: '16.03.1964',
        birthPlace: 'г.Минск, БССР',
        deathDate: '24.01.2018',
        deathPlace: 'Минск',
        locationsCoords: {
            lat: '53.902496',
            lng: '27.561481'
        },        
        video : video_1,
        activity: [
            {
                date: '16.03.1964',
                place: 'Минск',
                description: 'Родился в г.Минске. В детстве мечтал стать биологом, путешественником. Рано начал рисовать — свои первые рисунки Михаил размещал в энциклопедиях о животных, которые делал сам.'
            },
            {
                date: '1975-1985',
                place: 'Минск',
                description: 'Учился в детской народной студии изобразительного искусства в Минске.'
            },
            {
                date: '1979-1983',
                place: 'Минск',
                description: 'Окончил Минское художественное училище, ныне - Минский государственный художественный колледж им. А.К. Глебова.'
            },
            {
                date: '1997',
                place: 'Минск',
                description: 'Стал членом Белорусского союза дизайнеров. Был дизайнером известных логотипов — в том числе, логотипа белорусской общественно-культурной кампании «Будем белорусами!», белорусского рок-фестиваля «Басовище».'
            },
            {
                date: '2011',
                place: 'Минск',
                description: 'Стал членом правления Белорусского союза дизайнеров.'
            },
            {
                date: '2011',
                place: 'Минск',
                description: 'Дебютировал как фотограф, презентовав фотавыставку «Under Ground»: в фотографиях сосредоточился на белорусских овощах, чтобы таким способом открыть более глубокое измерение белорусской культуры. Выбор своей тематики объяснил тем, что белорусы, как овощи, скрывают интересные вещи в себе, не показывают их вовне — нация заглубленных в себя людей: выглядят обычно, а внутри фантастические — под испачканной (от почвы) кожурой картофеля спрятано «золотое солнце».'
            },
            {
                date: '24.01.2018',
                place: 'Минск',
                description: 'Умер от инсульта в г.Минске.'
            }
        ],
        works: [
          slide_1,
          slide_2,
          slide_3,
          slide_4,
          slide_5,
          slide_6
        ]
    },

    {
        id: 2,
        name: 'Владимир Сергеевич Базан',
        avatar: avatar_2,
        occupation: 'Белорусский фотограф, фотожурналист',
        birthDate: '21.10.1953',
        birthPlace: 'г.Унеча, РСФСР',
        deathDate: null,
        deathPlace: null,
        locationsCoords: {
            lat: '55.183672',
            lng: '30.204791'
        },
        video : video_2,
        activity: [
            {
                date: '21.10.1953',
                place: 'Унеча',
                description: 'Родился в г.Унеча, Брянская область, РСФСР'
            },
            {
                date: '1978',
                place: 'Витебск',
                description: 'Окончил художественно-графический факультет Витебского педагогического института.'
            },
            {
                date: '1980-1990',
                place: 'Витебск',
                description: 'Работал фотографом, корреспондентом, ответственным секретарем в витебской многотиражной газете «Строитель».'
            },
            {
                date: '1990-2007',
                place: 'Витебск',
                description: 'Главный редактор, дизайнер и фотокорреспондент газеты «Витебский курьер». Главный редактор специального номера газеты, посвященного Первым Шагаловского дням в Витебске (1991). В середине 80-х возглавлял витебский фотоклуб «Витьба». Центральное место в творчестве занимает репортажная, публицистическая, жанровая фотография. Среди основных работ: серии «Думай, парень!» (1982-2005), «Праздник в православной церкви» (1988), «Армения. Декабрь. 1988 »,«Пионерский лагерь» (1989),«Приметы»(1989),«Чернобыльский натюрморт»(1996),«Париж! Париж! Я не хочу домой!»(2001-2007). На сегодняшний день проживает во Франции.'
            }
        ],
        works: [
          slide_7,
          slide_8,
          slide_9,
          slide_10,
          slide_11,
          slide_12
        ]
    }
];
