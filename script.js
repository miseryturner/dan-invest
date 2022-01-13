console.log('hello');

let mapMarker = document.getElementsByClassName('.map-circle-placemark');

console.log(mapMarker);

console.log($('.map_list_one')); 

$('.map_list_cards').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    autoplay: false,
    infinite: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 480,
            settings: "unslick"
        }
    ]
});

// var myMap;

// // Дождёмся загрузки API и готовности DOM.
// ymaps.ready(init);

// function init() {
//     var myMap = new ymaps.Map('map', {
//             center: [55.176316, 61.416506],
//             zoom: 15
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),
//         //myPlacemark = new ymaps.Placemark(myMap.getCenter());
//         myPlacemark = new ymaps.GeoObject({
//             // Описание геометрии.
//             geometry: {
//                 type: "Point",
//                 coordinates: [55.176316, 61.416506]
//             },
//             // Свойства.
//             properties: {
//                 // Контент метки.
//                 iconContent: '4',
//             }
//         }, {
//             // Опции.
//             // Иконка метки будет растягиваться под размер ее содержимого.
//             preset: 'islands#blackStretchyIcon',
//             width: 1000,
//             size: [100,100],
//             // Метку можно перемещать.
//             draggable: true
//         });

//     myMap.geoObjects.add(myPlacemark);

//     myPlacemark.events
//         .add('mouseenter', function (e) {
//             // Ссылку на объект, вызвавший событие,
//             // можно получить из поля 'target'.
//             e.get('target').options.set('preset', 'islands#greenIcon');
//         })
//         .add('mouseleave', function (e) {
//             e.get('target').options.unset('preset');
//         })
//         .add('click', function (e) {
//             console.log(e.get('target'));
//             console.log('test');
//         });
// }

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.176316, 61.416506],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([55.176316, 61.416506], {
            hintContent: 'Собственный значок метки с контентом',
            iconContent: '8'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map_ball.svg',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [14, 13],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myPlacemarkWithContent2 = new ymaps.Placemark([55.179561, 61.406545], {
            hintContent: 'Собственный значок метки с контентом',
            iconContent: '6'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map_ball.svg',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [14, 13],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        myPlacemarkWithContent3 = new ymaps.Placemark([55.179617, 61.417067], {
            hintContent: 'Собственный значок метки с контентом',
            iconContent: '4'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map_ball.svg',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [14, 13],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent)
        .add(myPlacemarkWithContent2)
        .add(myPlacemarkWithContent3);

    myPlacemarkWithContent.events.add('click', function (e) {
        openMapList(1);
    });

    myPlacemarkWithContent2.events.add('click', function (e) {
        openMapList(2);
    });

    myPlacemarkWithContent3.events.add('click', function (e) {
        openMapList(0);
    });
});

function openMapList(id) {
    let arrMapList = document.getElementsByClassName('map_list_cards');
    [...arrMapList].forEach((element, key) => {
        if(id == key) {
            element.style.visibility = 'visible';
            element.style.position = 'relative';
        } else {
            element.style.visibility = 'hidden';
            element.style.position = 'absolute';
        }
    });
}