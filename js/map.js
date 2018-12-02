function initialize() {
    var styles = [{
        "stylers": [{
            "saturation": -100
        }, {
            "gamma": 1
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.place_of_worship",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "visibility": "on"
        }, {
            "saturation": 50
        }, {
            "gamma": 0
        }, {
            "hue": "#50a5d1"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#333333"
        }]
    }, {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [{
            "weight": 0.5
        }, {
            "color": "#333333"
        }]
    }, {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [{
            "gamma": 1
        }, {
            "saturation": 50
        }]
    }];
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });
    var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        draggable: false,
            scrollwheel: false,
        center: new google.maps.LatLng(49.3088313, 15.1839381),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(49.3088313, 15.1839381),
        title: "Veterina Piketa",
        map: map
    });




}

google.maps.event.addDomListener(window, 'load', initialize);
        google.maps.event.addDomListener(window, "resize", function() {
            var center = styledMap.getCenter();
            google.maps.event.trigger(styledMap, "resize");
            styledMap.setCenter(center);
        });
