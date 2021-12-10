var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.22681687964808894,
        "pitch": -0.02355398234860928,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.03056570243892054,
          "pitch": -0.25417526772802823,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7702741909010236,
          "pitch": -0.03450422550893073,
          "title": "Faculty of Engineering",
          "text": "Welcome to the Faculty of Engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.20541182735011,
        "pitch": -0.1231446230615969,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.795278120185797,
          "pitch": -0.03202426128510183,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.1845803167422826,
          "pitch": 0.04463996682893345,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1950918031120832,
          "pitch": -0.10219122426724425,
          "title": "Faculty of Engineering",
          "text": "Welcome to the Faculty of Engineering"
        },
        {
          "yaw": 0.28468183889673604,
          "pitch": -0.06233986133173097,
          "title": "Engineering Auditorium",
          "text": "This is the engineering auditorium where lectures are held. There are seats outside for students to study as well as a cafe for a quick pick-me-up. Yum!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.9263673453995516,
        "pitch": -0.16725621385000977,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -3.1383952690916708,
          "pitch": -0.0194477450661239,
          "rotation": 3.9269908169872414,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.053244450821990696,
          "pitch": 0.2480093163772743,
          "title": "Engineering Atrium",
          "text": "The coffee is great and the place is air-conditioned!"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
