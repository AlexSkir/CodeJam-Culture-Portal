import avatar1 from '../img/person_1/avatar/ava.jpg';
import avatar2 from '../img/person_2/avatar/ava.jpg';
import avatar3 from '../img/person_3/avatar/ava.jpg';
import avatar4 from '../img/person_4/avatar/ava.jpg';
import avatar5 from '../img/person_5/avatar/ava.jpg';
import avatar6 from '../img/person_6/avatar/ava.jpg';

import slide1 from '../img/person_1/portfolio/work1.jpg';
import slide2 from '../img/person_1/portfolio/work2.jpg';
import slide3 from '../img/person_1/portfolio/work3.jpg';
import slide4 from '../img/person_1/portfolio/work4.jpg';
import slide5 from '../img/person_1/portfolio/work5.jpg';
import slide6 from '../img/person_1/portfolio/work6.jpg';

import slide7 from '../img/person_2/portfolio/work1.jpg';
import slide8 from '../img/person_2/portfolio/work2.jpg';
import slide9 from '../img/person_2/portfolio/work3.jpg';
import slide10 from '../img/person_2/portfolio/work4.jpg';
import slide11 from '../img/person_2/portfolio/work5.jpg';
import slide12 from '../img/person_2/portfolio/work6.jpg';

import slide13 from '../img/person_3/portfolio/work1.jpg';
import slide14 from '../img/person_3/portfolio/work2.jpg';
import slide15 from '../img/person_3/portfolio/work3.jpg';
import slide16 from '../img/person_3/portfolio/work4.jpg';
import slide17 from '../img/person_3/portfolio/work5.jpg';
import slide18 from '../img/person_3/portfolio/work6.jpg';

import slide19 from '../img/person_4/portfolio/work1.jpg';
import slide20 from '../img/person_4/portfolio/work2.jpg';
import slide21 from '../img/person_4/portfolio/work3.jpg';
import slide22 from '../img/person_4/portfolio/work4.jpg';
import slide23 from '../img/person_4/portfolio/work5.jpg';
import slide24 from '../img/person_4/portfolio/work6.jpg';

import slide25 from '../img/person_5/portfolio/work1.jpg';
import slide26 from '../img/person_5/portfolio/work2.jpg';
import slide27 from '../img/person_5/portfolio/work3.jpg';
import slide28 from '../img/person_5/portfolio/work4.jpg';
import slide29 from '../img/person_5/portfolio/work5.jpg';
import slide30 from '../img/person_5/portfolio/work6.jpg';
import slide31 from '../img/person_5/portfolio/work7.jpg';
import slide32 from '../img/person_5/portfolio/work8.jpg';
import slide33 from '../img/person_5/portfolio/work9.jpg';

import slide34 from '../img/person_6/portfolio/work1.jpg';
import slide35 from '../img/person_6/portfolio/work2.jpg';
import slide36 from '../img/person_6/portfolio/work3.jpg';
import slide37 from '../img/person_6/portfolio/work4.jpg';
import slide38 from '../img/person_6/portfolio/work5.jpg';
import slide39 from '../img/person_6/portfolio/work6.jpg';


import video1 from '../video/video1.mp4';
import video2 from '../video/video2.mp4';
import video3 from '../video/video3.mp4';
import video4 from '../video/video4.mp4';
import video5 from '../video/video5.mp4';
import video6 from '../video/video6.mp4';

export default [
  {
    id: 1,
    name: 'English Михаил Владимирович Анемподистов',
    avatar: avatar1,
    occupation:
      'Белорусский художник, фотограф, дизайнер, поэт, культуролог, искусствовед',
    birthDate: '16.03.1964',
    birthPlace: 'г.Минск, БССР',
    deathDate: '24.01.2018',
    deathPlace: 'Минск',
    locationsCoords: {
      lat: '53.902496',
      lng: '27.561481',
    },
    video: video1,
    activity: [
      {
        date: '16.03.1964',
        place: 'Минск',
        description:
          'Родился в г.Минске. В детстве мечтал стать биологом, путешественником. Рано начал рисовать — свои первые рисунки Михаил размещал в энциклопедиях о животных, которые делал сам.',
      },
      {
        date: '1975-1985',
        place: 'Минск',
        description:
          'Учился в детской народной студии изобразительного искусства в Минске.',
      },
      {
        date: '1979-1983',
        place: 'Минск',
        description:
          'Окончил Минское художественное училище, ныне - Минский государственный художественный колледж им. А.К. Глебова.',
      },
      {
        date: '1997',
        place: 'Минск',
        description:
          'Стал членом Белорусского союза дизайнеров. Был дизайнером известных логотипов — в том числе, логотипа белорусской общественно-культурной кампании «Будем белорусами!», белорусского рок-фестиваля «Басовище».',
      },
      {
        date: '2011',
        place: 'Минск',
        description: 'Стал членом правления Белорусского союза дизайнеров.',
      },
      {
        date: '2011',
        place: 'Минск',
        description:
          'Дебютировал как фотограф, презентовав фотавыставку «Under Ground»: в фотографиях сосредоточился на белорусских овощах, чтобы таким способом открыть более глубокое измерение белорусской культуры. Выбор своей тематики объяснил тем, что белорусы, как овощи, скрывают интересные вещи в себе, не показывают их вовне — нация заглубленных в себя людей: выглядят обычно, а внутри фантастические — под испачканной (от почвы) кожурой картофеля спрятано «золотое солнце».',
      },
      {
        date: '24.01.2018',
        place: 'Минск',
        description: 'Умер от инсульта в г.Минске.',
      },
    ],
    works: [slide1, slide2, slide3, slide4, slide5, slide6],
  },

  {
    id: 2,
    name: 'Владимир Сергеевич Базан',
    avatar: avatar2,
    occupation:
      'Белорусский фотограф, фотожурналист, мастер репортажной, публицистической, жанровой фотографии.',
    birthDate: '21.10.1953',
    birthPlace: 'г.Унеча, РСФСР',
    deathDate: null,
    deathPlace: null,
    locationsCoords: {
      lat: '55.183672',
      lng: '30.204791',
    },
    video: video2,
    activity: [
      {
        date: '21.10.1953',
        place: 'Унеча',
        description: 'Родился в г.Унеча, Брянская область, РСФСР',
      },
      {
        date: '1978',
        place: 'Витебск',
        description:
          'Окончил художественно-графический факультет Витебского педагогического института.',
      },
      {
        date: '1980-1990',
        place: 'Витебск',
        description:
          'Работал фотографом, корреспондентом, ответственным секретарем в витебской многотиражной газете «Строитель».',
      },
      {
        date: '1990-2007',
        place: 'Витебск',
        description:
          'Главный редактор, дизайнер и фотокорреспондент газеты «Витебский курьер». Главный редактор специального номера газеты, посвященного Первым Шагаловского дням в Витебске (1991). В середине 80-х возглавлял витебский фотоклуб «Витьба». Центральное место в творчестве занимает репортажная, публицистическая, жанровая фотография. Среди основных работ: серии «Думай, парень!» (1982-2005), «Праздник в православной церкви» (1988), «Армения. Декабрь. 1988 »,«Пионерский лагерь» (1989),«Приметы»(1989),«Чернобыльский натюрморт»(1996),«Париж! Париж! Я не хочу домой!»(2001-2007). На сегодняшний день проживает во Франции.',
      },
    ],
    works: [slide7, slide8, slide9, slide10, slide11, slide12],
  },
  {
    id: 3,
    name: 'Борис Генделевич Берман',
    avatar: avatar6,
    occupation: 'Хозяин скромной аптеки и фотоателье в Вилейке, снимал родной город и своих земляков',
    birthDate: '1881',
    birthPlace: 'г.Ивье, Российская империя',
    deathDate: '1940',
    deathPlace: 'неизвестно',
    locationsCoords: {
      lat: '54.491400',
      lng: '26.911100',
    },
    video: video6,
    activity: [
      {
        date: '1881',
        place: 'Ивье',
        description: 'Родился в местечке Ивье Лидского уезда. С детства был увлечён фотоделом. Со временем увлечение переросло в профессиональное занятие.',
      },
      {
        date: '1910-1912',
        place: 'Вилейка',
        description: 'Основал первое фотоателье в Вилейке. До 1925 года был единственным профессиональным фотографом в округе. ',
      },
      {
        date: '1916-1921',
        place: 'Вилейка',
        description: 'Организовал драматический кружок в Свире, Вилейке, где ставил постановки для бедных детей и голодающих.',
      },
      {
        date: '1969-1974',
        place: 'Вилейка',
        description: 'Фотографировал приезд президента II Речи Посполитой Игнатия Мастицкого во время посещения им Вилейского уезда.',
      },
      {
        date: '18 октября 1939',
        place: 'Вилейка',
        description: 'Был арестован органами НКВД и содержался под стражей в Вилейской тюрьме.',
      },
      {
        date: '10 августа 1940',
        place: 'Вилейка',
        description: 'Осужден как «социально-опасный элемент» и выслан в исправительно-трудовой лагерь «Темлаг». Дальнейшая судьба неизвестна.',
      },
      {
        date: '6 июня 1989',
        place: 'Минск',
        description: 'Реабилитирован.',
      },
    ],
    works: [slide34, slide35, slide36, slide37, slide38, slide39],
  },
  {
    id: 4,
    name: 'Михаил Григорьевич Борозна',
    avatar: avatar3,
    occupation: 'Белорусский искусствовед, художественный критик, фотограф.',
    birthDate: '20.11.1962',
    birthPlace: 'д.Ракушево, БССР',
    deathDate: null,
    deathPlace: null,
    locationsCoords: {
      lat: '53.902496',
      lng: '27.561481',
    },
    video: video3,
    activity: [
      {
        date: '20.11.1962',
        place: 'д.Ракушево, Могилёвской области',
        description:
          'Родился в д.Ракушево Круглянского района Могилёвской области.',
      },
      {
        date: '1985',
        place: 'Минск',
        description:
          'Окончил художественно-промышленный факультет Белорусского государственного театрально-художественного института.',
      },
      {
        date: '1986-1992',
        place: 'Минск',
        description: 'Художественный редактор издательства «Беларусь».',
      },
      {
        date: '1992',
        place: 'Минск',
        description:
          'Начал преподавать в Белорусской государственной академии искусств.',
      },
      {
        date: '1995',
        place: 'Витебск',
        description:
          'Участвовал в первой своей выставке «АРТУНОДИСКУС» в г.Витебске.',
      },
      {
        date: '1997',
        place: 'Минск',
        description:
          'Первая персональная выставка работ «Один в городе» в музее Белорусской государственной академии искусств в г.Минске.',
      },
      {
        date: 'с 2010',
        place: 'Минск',
        description:
          'Ректор Белорусской государственной академии искусств. Кандидат искусствоведения, профессор кафедры истории и теории искусств, доцент. Почётный член Российской академии художеств.',
      },
    ],
    works: [slide13, slide14, slide15, slide16, slide17, slide18],
  },

  {
    id: 5,
    name: 'Лев Урбанович Дашкевич',
    avatar: avatar4,
    occupation:
      'Белорусский фотограф, учёный, исследователь, публицист, педагог',
    birthDate: '12.02.1882',
    birthPlace: 'г.Минск, БССР',
    deathDate: '4.12.1957',
    deathPlace: 'г.Минск',
    locationsCoords: {
      lat: '53.902496',
      lng: '27.561481',
    },
    video: video4,
    activity: [
      {
        date: '12.02.1882',
        place: 'Минск',
        description:
          'Родился в г.Минске. Происходил из дворянского рода герба “Лелива”.',
      },
      {
        date: '1882-1896',
        place: 'Минск',
        description: 'Учился в Минской мужской гимназии.',
      },
      {
        date: '1903-1911',
        place: 'Варшава',
        description:
          'В 1903 поступил в Варшавский университет на медицинский факультет, однако в 1904 году на участие в студенческой забастовке был арестован и исключён из университета без права поступления в ВУЗы Российской империи. В 1906-1911 гг. учился во Франции на факультете филологии Университета Бургундии (Дижон). Параллельно в 1908-1909 гг. занимался на фотографическом отделении Высшей школы графических искусств в Париже. В 1911 начал публиковаться в научных изданиях.',
      },
      {
        date: '1911-1920',
        place: 'Ереван',
        description:
          'Жил в Закавказье, преподавал французский язык, физику и естествознание в гимназиях Еревана, Тифлис. В 1918 служил государственным фотографом правительства Азербайджанской республики.',
      },
      {
        date: '1920-1930',
        place: 'Минск',
        description:
          'В конце мая 1920 г. возвратился в Минск. Читал лекции по всемирной истории и фотографии в Минском институте народного образования. В 1923 участвовал в этнографической экспедиции в Игуменский и Борисовский поветы. В 1923-1924 - научный фотограф на медицинском факультете БГУ.',
      },
      {
        date: '21.07.1930',
        place: 'Минск',
        description:
          'Арестован ГПУ БССР 21 июля 19300 г. по делу «Союза освобождения Беларуси». Освобожден в сентябре 1930.',
      },
      {
        date: '1941-1944',
        place: 'Фрунза',
        description:
          'Жил в эвакуации в г. Фрунзе (ныне Бишкек, Кыргызстан), работал в медицинских учреждениях. В сентябре 1944 вернулся в Минск.',
      },
      {
        date: '4.12.1957',
        place: 'Минск',
        description: 'Умер в городе Минске',
      },
    ],
    works: [slide19, slide20, slide21, slide22, slide23, slide24],
  },
  {
    id: 6,
    name: 'Георгий Леонардович Лихтарович',
    avatar: avatar5,
    occupation: 'Белорусский фотограф, талантливый литератор, поэт, общественный деятель',
    birthDate: '06.12.1947',
    birthPlace: 'г.Минск, БССР',
    deathDate: null,
    deathPlace: null,
    locationsCoords: {
      lat: '53.902496',
      lng: '27.561481',
    },
    video: video5,
    activity: [
      {
        date: '06.12.1947',
        place: 'Минск',
        description: 'Родился в г. Минске, БССР.',
      },
      {
        date: '1965-1966',
        place: 'Минск',
        description: 'Работал ассистентом кинооператора в Минской студии научно-популярных и хроникально-документальный фильмов.',
      },
      {
        date: '1966-1968',
        place: 'Минск',
        description: 'Служил в войсках в п.Печи. Публиковался в периодических изданиях.',
      },
      {
        date: '1969-1974',
        place: 'Минск',
        description: 'Работал фотографом в Институте искусствоведения, этнографии и фольклора Академии наук. Иллюстрировал первые тома «Собрание памятников истории и культуры Беларуси». ',
      },
      {
        date: '1974-1992',
        place: 'Минск',
        description: 'В 1970-1974 гг. учился на архитектурном факультете БНТУ. С 1972 года преподавал фотографику в Театрально-художественном институте. Работал фотокорреспондентом газеты «Голос Родины».',
      },
      {
        date: '2000',
        place: 'Минск',
        description: 'В 2000 г. издаёт фотоальбом «Добрый день, Беларусь». В 2001-2006 принимает участие в фотографических и художественных выставках. С 2004 - член Союза Белорусского государственного объединения «Фотоискусство».',
      },
    ],
    works: [slide25, slide26, slide27, slide28, slide29, slide30, slide31, slide32, slide33],
  },

];