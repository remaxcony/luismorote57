var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.289724167914279
      },
      "linkHotspots": [
        {
          "yaw": -1.682957638095525,
          "pitch": 0.01843850769778399,
          "rotation": 0,
          "target": "1-bao"
        },
        {
          "yaw": -0.2741716575048798,
          "pitch": 0.08458304327556831,
          "rotation": 5.497787143782138,
          "target": "2-dormitorio"
        },
        {
          "yaw": -0.045607509761666165,
          "pitch": -0.04908315818454767,
          "rotation": 0,
          "target": "3-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7779536310429656,
        "pitch": 0.11612796054889785,
        "fov": 1.289724167914279
      },
      "linkHotspots": [
        {
          "yaw": 1.7424701752745344,
          "pitch": 0.07891183060498896,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dormitorio",
      "name": "Dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5768838938163583,
        "pitch": 0.0506711285989887,
        "fov": 1.289724167914279
      },
      "linkHotspots": [
        {
          "yaw": -3.130498758713941,
          "pitch": -0.11123958085291896,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -2.998776584699282,
          "pitch": 0.07391016486628921,
          "rotation": 0.7853981633974483,
          "target": "1-bao"
        },
        {
          "yaw": -0.11368769546537294,
          "pitch": 0.14707138874768333,
          "rotation": 5.497787143782138,
          "target": "3-cocina"
        },
        {
          "yaw": 0.016548520541654455,
          "pitch": -0.11377911969912802,
          "rotation": 0,
          "target": "4-saln"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8472774448938694,
        "pitch": 0.001616590920672678,
        "fov": 1.289724167914279
      },
      "linkHotspots": [
        {
          "yaw": -3.095711547273458,
          "pitch": 0.22933753381406063,
          "rotation": 0.7853981633974483,
          "target": "2-dormitorio"
        },
        {
          "yaw": -3.1408687204071413,
          "pitch": -0.04364338567761017,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -0.07283960139816159,
          "pitch": 0.1385147132318192,
          "rotation": 0,
          "target": "4-saln"
        },
        {
          "yaw": -0.37949832952803675,
          "pitch": -0.12996602285273795,
          "rotation": 0,
          "target": "5-terraza"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-saln",
      "name": "Salón",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.1374085154632763,
        "pitch": 0.19133863504858617,
        "fov": 1.289724167914279
      },
      "linkHotspots": [
        {
          "yaw": -3.0124379498353964,
          "pitch": -0.015913260399480933,
          "rotation": 3.141592653589793,
          "target": "3-cocina"
        },
        {
          "yaw": 2.745017673285247,
          "pitch": 0.08538413754154028,
          "rotation": 0,
          "target": "2-dormitorio"
        },
        {
          "yaw": -0.36620467829469483,
          "pitch": 0.13703741337763375,
          "rotation": 0,
          "target": "5-terraza"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-terraza",
      "name": "Terraza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.999634460144069,
        "pitch": -0.029521122817239842,
        "fov": 1.289724167914279
      },
      "linkHotspots": [
        {
          "yaw": -2.104580471380059,
          "pitch": 0.07484260576207191,
          "rotation": 0,
          "target": "4-saln"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3302386638753578,
          "pitch": -0.031434853456259404,
          "title": "Playa de Las Canteras",
          "text": "La playa urbana principal de la ciudad de Las Palmas de Gran Canaria y una de las playas más importantes de Canarias.<br><img src=\"https://cf.bstatic.com/xdata/images/hotel/max200/206670560.jpg?k=ecd4129c4bfe8477af9719f4a6af78680de5f58eea9e9aa1612ad791c436baf5&amp;o=&amp;hp=1\" alt=\"Canteras Paradise, Las Palmas de Gran Canaria (precios actualizados 2024)\"><br>"
        }
      ]
    }
  ],
  "name": "luismorote57",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
