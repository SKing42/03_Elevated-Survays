TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772",
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772_t.jpg"
   }
  ],
  "hfov": 360,
  "label": "PANO0001 Panorama",
  "partial": false,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772_t.jpg",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 11562.73,
    "y": 1843.16,
    "class": "PanoramaMapLocation",
    "angle": 352.1,
    "map": {
     "minimumZoomFactor": 1,
     "maximumZoomFactor": 1,
     "class": "Map",
     "initialZoomFactor": 1,
     "width": 14348,
     "id": "map_25014467_3533_F7D3_41B7_DA07754D80D6",
     "overlays": [
      {
       "image": {
        "x": 10762.73,
        "y": 1043.16,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 129,
           "width": 129,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_0.png"
          }
         ]
        },
        "width": 1600,
        "height": 1600
       },
       "id": "overlay_3AABBA8D_352E_5357_41C3_5BF898FD2403",
       "map": {
        "height": 1600,
        "x": 10764.04,
        "offsetY": 0,
        "width": 1600,
        "y": 1044.72,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_0_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)",
         "toolTip": "1"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "image": {
        "x": 705.27,
        "y": 6766.65,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 129,
           "width": 129,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_1.png"
          }
         ]
        },
        "width": 1600,
        "height": 1600
       },
       "id": "overlay_3AE49DD6_3552_30F5_41B4_2CC3F47813F5",
       "map": {
        "height": 1600,
        "x": 706.09,
        "offsetY": 0,
        "width": 1600,
        "y": 6767.82,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_1_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "toolTip": "2"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "image": {
        "x": 3380.79,
        "y": 11169.74,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 137,
           "width": 129,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_2.png"
          }
         ]
        },
        "width": 1600,
        "height": 1693.22
       },
       "id": "overlay_2575764A_3552_F3DD_419A_0DC9C4AB557B",
       "map": {
        "height": 1693.22,
        "x": 3381.44,
        "offsetY": 0,
        "width": 1600,
        "y": 11170.2,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 16,
           "width": 16,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_2_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "toolTip": "3"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "image": {
        "x": 3210.97,
        "y": 14451.69,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 139,
           "width": 129,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_3.png"
          }
         ]
        },
        "width": 1600,
        "height": 1727
       },
       "id": "overlay_25081429_3552_D75F_4183_2080434574CF",
       "map": {
        "height": 1727,
        "x": 3212.11,
        "offsetY": 0,
        "width": 1600,
        "y": 14453.37,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 17,
           "width": 16,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_3_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "toolTip": "4"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "image": {
        "height": 1727.62,
        "x": 10932.55,
        "width": 1252.85,
        "y": 975.58,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 139,
           "width": 101,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_4.png"
          }
         ]
        }
       },
       "id": "overlay_3CF8CD25_37C7_4D49_41AB_60AECF2C4FC2",
       "map": {
        "height": 1727.09,
        "x": 10933.36,
        "offsetY": 0,
        "width": 1253.01,
        "y": 976.99,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 69,
           "width": 50,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_4_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true
      },
      {
       "image": {
        "height": 1828.12,
        "x": 840.43,
        "width": 1287.51,
        "y": 6666.15,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 148,
           "width": 104,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_5.png"
          }
         ]
        }
       },
       "id": "overlay_3C3549F9_37C4_B4B9_41AE_00E1CD74192B",
       "map": {
        "height": 1828.68,
        "x": 841.55,
        "offsetY": 0,
        "width": 1286.88,
        "y": 6666.23,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 74,
           "width": 52,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_5_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true
      },
      {
       "image": {
        "height": 1692.96,
        "x": 3583.53,
        "width": 1252.85,
        "y": 11169.74,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 137,
           "width": 101,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_6.png"
          }
         ]
        }
       },
       "id": "overlay_3C72AE0B_37C3_4F59_41C7_7024D6B551AE",
       "map": {
        "height": 1693.22,
        "x": 3584.63,
        "offsetY": 0,
        "width": 1253.01,
        "y": 11170.2,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 68,
           "width": 50,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_6_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true
      },
      {
       "image": {
        "height": 1897.43,
        "x": 3380.79,
        "width": 1285.77,
        "y": 14283.61,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 153,
           "width": 104,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_7.png"
          }
         ]
        }
       },
       "id": "overlay_3C6AE30E_37C3_555A_418A_80D0F8DA43E4",
       "map": {
        "height": 1896.41,
        "x": 3381.44,
        "offsetY": 0,
        "width": 1286.88,
        "y": 14285.74,
        "class": "HotspotMapOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 76,
           "width": 52,
           "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_HS_7_map.gif"
          }
         ]
        },
        "offsetX": 0
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000"
        }
       ],
       "class": "AreaHotspotMapOverlay",
       "rollOverDisplay": true,
       "useHandCursor": true
      }
     ],
     "height": 19743,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayInsideOpacity": 0.4,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "class": "ImageResourceLevel",
        "height": 1600,
        "width": 1162,
        "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6.jpeg"
       },
       {
        "class": "ImageResourceLevel",
        "height": 800,
        "grayscale": true,
        "width": 581,
        "url": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_lq.jpeg"
       }
      ]
     },
     "label": "Aerial Image 2",
     "fieldOfViewOverlayRadiusScale": 0.24,
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_25014467_3533_F7D3_41B7_DA07754D80D6_t.jpg",
     "fieldOfViewOverlayInsideColor": "#FFFFFF"
    }
   }
  ]
 },
 {
  "touchControlMode": "drag_rotation",
  "buttonCardboardView": {
   "toolTipTextShadowOpacity": 0,
   "minHeight": 1,
   "toolTipShadowOpacity": 1,
   "verticalAlign": "middle",
   "toolTipOpacity": 1,
   "paddingLeft": 0,
   "width": 52,
   "paddingRight": 0,
   "height": 45,
   "mode": "push",
   "toolTipFontWeight": "normal",
   "minWidth": 1,
   "iconURL": "skin/IconButton_3B1D9A4D_3773_CF0B_41CA_D4EF0E45F3BB.png",
   "toolTipFontSize": 12,
   "borderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipFontColor": "#606060",
   "toolTipPaddingBottom": 4,
   "horizontalAlign": "center",
   "backgroundOpacity": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowColor": "#333333",
   "shadow": false,
   "toolTipFontFamily": "Arial",
   "toolTip": "VR",
   "class": "IconButton",
   "paddingBottom": 0,
   "id": "IconButton_3B1D9A4D_3773_CF0B_41CA_D4EF0E45F3BB",
   "toolTipShadowBlurRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "toolTipBorderSize": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowVerticalLength": 0,
   "maxHeight": 54,
   "maxWidth": 55,
   "paddingTop": 0,
   "toolTipShadowSpread": 0,
   "toolTipPaddingLeft": 6,
   "borderRadius": 0,
   "transparencyActive": true,
   "cursor": "hand",
   "toolTipFontStyle": "normal",
   "toolTipShadowHorizontalLength": 0,
   "toolTipBorderRadius": 3,
   "toolTipPaddingTop": 4
  },
  "buttonZoomIn": {
   "toolTipTextShadowOpacity": 0,
   "pressedIconURL": "skin/Button_3B059DA1_3775_C53B_41B7_561826CEA40F_pressed.png",
   "minHeight": 0,
   "toolTipShadowOpacity": 1,
   "rollOverBackgroundOpacity": 0,
   "verticalAlign": "middle",
   "toolTipOpacity": 1,
   "iconHeight": 32,
   "fontSize": 12,
   "paddingLeft": 0,
   "width": 32,
   "paddingRight": 0,
   "height": 32,
   "mode": "push",
   "toolTipFontWeight": "normal",
   "pressedIconHeight": 32,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "minWidth": 0,
   "iconURL": "skin/Button_3B059DA1_3775_C53B_41B7_561826CEA40F.png",
   "textDecoration": "none",
   "toolTipFontSize": 12,
   "fontFamily": "Arial",
   "borderSize": 0,
   "iconWidth": 32,
   "fontStyle": "normal",
   "toolTipPaddingRight": 6,
   "backgroundColorDirection": "vertical",
   "gap": 0,
   "toolTipFontColor": "#606060",
   "toolTipPaddingBottom": 4,
   "horizontalAlign": "center",
   "backgroundColorRatios": [
    0,
    1
   ],
   "backgroundOpacity": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "pressedIconWidth": 32,
   "borderColor": "#000000",
   "fontWeight": "normal",
   "cursor": "hand",
   "toolTipShadowColor": "#333333",
   "shadow": false,
   "pressedBackgroundOpacity": 0,
   "toolTipFontFamily": "Arial",
   "toolTip": "Zoom In",
   "class": "Button",
   "paddingBottom": 0,
   "rollOverIconHeight": 32,
   "id": "Button_3B059DA1_3775_C53B_41B7_561826CEA40F",
   "toolTipShadowBlurRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "toolTipBorderSize": 1,
   "layout": "horizontal",
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowVerticalLength": 0,
   "shadowColor": "#000000",
   "paddingTop": 0,
   "toolTipShadowSpread": 0,
   "toolTipPaddingLeft": 6,
   "borderRadius": 0,
   "shadowSpread": 1,
   "toolTipFontStyle": "normal",
   "shadowBlurRadius": 6,
   "rollOverIconURL": "skin/Button_3B059DA1_3775_C53B_41B7_561826CEA40F_rollover.png",
   "toolTipShadowHorizontalLength": 0,
   "toolTipBorderRadius": 3,
   "fontColor": "#FFFFFF",
   "toolTipPaddingTop": 4,
   "rollOverIconWidth": 32,
   "iconBeforeLabel": true
  },
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "buttonZoomOut": {
   "toolTipTextShadowOpacity": 0,
   "pressedIconURL": "skin/Button_268C3FC2_3792_4579_41A1_4B15123E3EDE_pressed.png",
   "minHeight": 0,
   "toolTipShadowOpacity": 1,
   "rollOverBackgroundOpacity": 0,
   "verticalAlign": "middle",
   "toolTipOpacity": 1,
   "iconHeight": 32,
   "fontSize": 12,
   "paddingLeft": 0,
   "width": 32,
   "paddingRight": 0,
   "height": 32,
   "mode": "push",
   "toolTipFontWeight": "normal",
   "pressedIconHeight": 32,
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "minWidth": 0,
   "iconURL": "skin/Button_268C3FC2_3792_4579_41A1_4B15123E3EDE.png",
   "textDecoration": "none",
   "toolTipFontSize": 12,
   "fontFamily": "Arial",
   "borderSize": 0,
   "iconWidth": 32,
   "fontStyle": "normal",
   "toolTipPaddingRight": 6,
   "backgroundColorDirection": "vertical",
   "gap": 0,
   "toolTipFontColor": "#606060",
   "toolTipPaddingBottom": 4,
   "horizontalAlign": "center",
   "backgroundColorRatios": [
    0,
    1
   ],
   "backgroundOpacity": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "pressedIconWidth": 32,
   "borderColor": "#000000",
   "fontWeight": "normal",
   "cursor": "hand",
   "toolTipShadowColor": "#333333",
   "shadow": false,
   "pressedBackgroundOpacity": 0,
   "toolTipFontFamily": "Arial",
   "toolTip": "Zoom Out",
   "class": "Button",
   "paddingBottom": 0,
   "rollOverIconHeight": 32,
   "id": "Button_268C3FC2_3792_4579_41A1_4B15123E3EDE",
   "toolTipShadowBlurRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "toolTipBorderSize": 1,
   "layout": "horizontal",
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowVerticalLength": 0,
   "shadowColor": "#000000",
   "paddingTop": 0,
   "toolTipShadowSpread": 0,
   "toolTipPaddingLeft": 6,
   "borderRadius": 0,
   "shadowSpread": 1,
   "toolTipFontStyle": "normal",
   "shadowBlurRadius": 6,
   "rollOverIconURL": "skin/Button_268C3FC2_3792_4579_41A1_4B15123E3EDE_rollover.png",
   "toolTipShadowHorizontalLength": 0,
   "toolTipBorderRadius": 3,
   "fontColor": "#FFFFFF",
   "toolTipPaddingTop": 4,
   "rollOverIconWidth": 32,
   "iconBeforeLabel": true
  },
  "mouseControlMode": "drag_rotation"
 },
 {
  "id": "MapViewerMapPlayer",
  "buttonZoomIn": "this.Button_3B059DA1_3775_C53B_41B7_561826CEA40F",
  "viewerArea": {
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "progressBottom": 2,
   "paddingLeft": 0,
   "playbackBarHeadBorderSize": 0,
   "paddingRight": 0,
   "progressRight": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipFontWeight": "normal",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadBorderRadius": 0,
   "toolTipPaddingRight": 6,
   "progressBarBorderRadius": 0,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "progressLeft": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBorderColor": "#000000",
   "playbackBarProgressOpacity": 1,
   "shadow": false,
   "class": "ViewerArea",
   "paddingBottom": 0,
   "progressHeight": 10,
   "playbackBarBottom": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "progressBorderSize": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowBlurRadius": 3,
   "progressBackgroundColorRatios": [
    0
   ],
   "paddingTop": 0,
   "playbackBarLeft": 0,
   "borderRadius": 0,
   "transitionMode": "blending",
   "playbackBarHeadHeight": 15,
   "playbackBarProgressBorderRadius": 0,
   "toolTipFontStyle": "normal",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarBorderRadius": 0,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadWidth": 6,
   "playbackBarRight": 0,
   "toolTipShadowVerticalLength": 0,
   "minHeight": 1,
   "toolTipOpacity": 1,
   "playbackBarHeadOpacity": 1,
   "width": "72.131%",
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "minWidth": 1,
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBorderRadius": 0,
   "toolTipFontSize": 12,
   "borderSize": 0,
   "playbackBarBorderSize": 0,
   "playbackBarHeadShadow": true,
   "playbackBarHeight": 10,
   "toolTipFontColor": "#606060",
   "toolTipPaddingBottom": 4,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBarBorderSize": 0,
   "playbackBarBackgroundOpacity": 1,
   "top": "17.88%",
   "playbackBarProgressBorderSize": 0,
   "toolTipShadowSpread": 0,
   "toolTipShadowColor": "#333333",
   "toolTipFontFamily": "Arial",
   "progressBackgroundOpacity": 1,
   "playbackBarHeadShadowHorizontalLength": 0,
   "bottom": "0.03%",
   "id": "MapViewer",
   "toolTipShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "toolTipBorderSize": 1,
   "progressOpacity": 1,
   "playbackBarOpacity": 1,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipPaddingLeft": 6,
   "left": "0%",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipPaddingTop": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressBarOpacity": 1,
   "playbackBarProgressBorderColor": "#000000",
   "toolTipBorderRadius": 3
  },
  "class": "MapPlayer",
  "movementMode": "constrained",
  "buttonZoomOut": "this.Button_268C3FC2_3792_4579_41A1_4B15123E3EDE"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 5.31,
     "yawDelta": 25.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 5.31,
     "yawDelta": 309
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 5.31,
     "yawDelta": 25.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "idleSequence": {
   "movements": [],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": 107.14,
   "pitch": -12.67
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772_camera",
  "timeToIdle": 5000,
  "class": "PanoramaCamera"
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE",
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE_t.jpg"
   }
  ],
  "hfov": 360,
  "label": "PANO0002 Panorama",
  "partial": false,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE_t.jpg",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 1505.27,
    "y": 7566.65,
    "class": "PanoramaMapLocation",
    "angle": 345.46,
    "map": "this.map_25014467_3533_F7D3_41B7_DA07754D80D6"
   }
  ]
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 5.31,
     "yawDelta": 25.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 5.31,
     "yawDelta": 309
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 5.31,
     "yawDelta": 25.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "idleSequence": {
   "movements": [],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": 64.54,
   "pitch": -17.27
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE_camera",
  "timeToIdle": 5000,
  "class": "PanoramaCamera"
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78",
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78_t.jpg"
   }
  ],
  "hfov": 360,
  "label": "PANO0003 Panorama",
  "partial": false,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78_t.jpg",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 4180.79,
    "y": 12016.35,
    "class": "PanoramaMapLocation",
    "angle": -1.16,
    "map": "this.map_25014467_3533_F7D3_41B7_DA07754D80D6"
   }
  ]
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 5.31,
     "yawDelta": 25.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 5.31,
     "yawDelta": 309
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 5.31,
     "yawDelta": 25.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "idleSequence": {
   "movements": [],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78_camera",
  "timeToIdle": 5000,
  "class": "PanoramaCamera"
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706",
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706_t.jpg"
   }
  ],
  "hfov": 360,
  "label": "PANO0004 Panorama",
  "partial": false,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706_t.jpg",
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 4010.97,
    "y": 15315.19,
    "class": "PanoramaMapLocation",
    "angle": 1.44,
    "map": "this.map_25014467_3533_F7D3_41B7_DA07754D80D6"
   }
  ]
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 5.31,
     "yawDelta": 25.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 5.31,
     "yawDelta": 309
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 5.31,
     "yawDelta": 25.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "idleSequence": {
   "movements": [],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 90,
   "yaw": 0,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706_camera",
  "timeToIdle": 5000,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_284F2768_3C62_EA62_41BB_0F20CB96EA52, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_284F2768_3C62_EA62_41BB_0F20CB96EA52",
    "media": "this.panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3C95BFF9_352E_30BF_41C5_BBCD4835C772_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_28404769_3C62_EA62_419A_C18EB6736091, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_28404769_3C62_EA62_419A_C18EB6736091",
    "media": "this.panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3C427DC6_352D_D0D5_41B3_F8B1A4A21CBE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2840276A_3C62_EA66_41BE_6259895496C7, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_2840276A_3C62_EA66_41BE_6259895496C7",
    "media": "this.panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3C5B9E26_3532_5355_41BA_B2CC6A9CBA78_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2840B76A_3C62_EA66_419D_D37D06E10234, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_2840B76A_3C62_EA66_419D_D37D06E10234",
    "media": "this.panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3C58D1CD_3536_50D7_4180_5A40A94CF706_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 0)"
   }
  ]
 },
 "this.map_25014467_3533_F7D3_41B7_DA07754D80D6",
 {
  "class": "PlayList",
  "id": "playList_284EF768_3C62_EA62_4196_F86CDB405D4E",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
    "media": "this.map_25014467_3533_F7D3_41B7_DA07754D80D6"
   }
  ]
 },
 {
  "class": "FadeInEffect",
  "easing": "linear",
  "id": "effect_27DBB233_3796_7F1F_41C7_1F835DC4C767",
  "duration": 1000
 },
 {
  "class": "FadeOutEffect",
  "easing": "linear",
  "id": "effect_27D89234_3796_7F19_41B5_FB058F4A0322",
  "duration": 1000
 },
 {
  "class": "SlideOutEffect",
  "easing": "linear",
  "to": "bottom",
  "id": "effect_24752652_3792_4719_41C1_4C335A15F366",
  "duration": 1000
 },
 {
  "class": "SlideInEffect",
  "easing": "linear",
  "id": "effect_22B65321_37B6_3D3B_41CB_A54C16FC1919",
  "duration": 1000,
  "from": "bottom"
 }
], "children": [
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "progressBottom": 0,
  "paddingLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "paddingRight": 0,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingRight": 6,
  "progressBarBorderRadius": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "shadow": false,
  "class": "ViewerArea",
  "paddingBottom": 0,
  "progressHeight": 10,
  "playbackBarBottom": 5,
  "toolTipTextShadowColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipBorderColor": "#767676",
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "playbackBarLeft": 0,
  "borderRadius": 0,
  "transitionMode": "blending",
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "toolTipShadowVerticalLength": 0,
  "minHeight": 50,
  "toolTipOpacity": 1,
  "width": "100%",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "height": "100%",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "minWidth": 100,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "toolTipFontSize": 12,
  "borderSize": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeight": 10,
  "toolTipFontColor": "#606060",
  "toolTipPaddingBottom": 4,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "top": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipFontFamily": "Arial",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBorderSize": 1,
  "id": "MainViewer",
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "progressOpacity": 1,
  "playbackBarOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingLeft": 6,
  "left": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingTop": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBarOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipBorderRadius": 3
 },
 {
  "children": [
   {
    "children": [
     {
      "minHeight": 1,
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "width": "100%",
      "paddingRight": 0,
      "height": "100%",
      "minWidth": 1,
      "borderSize": 0,
      "url": "skin/Image_23CFF8FB_3576_50B3_41A8_350BF0ACD7E7.png",
      "scaleMode": "fit_inside",
      "horizontalAlign": "left",
      "backgroundOpacity": 0,
      "top": "0%",
      "shadow": false,
      "class": "Image",
      "paddingBottom": 0,
      "id": "Image_23CFF8FB_3576_50B3_41A8_350BF0ACD7E7",
      "maxHeight": 715,
      "maxWidth": 1676,
      "paddingTop": 0,
      "borderRadius": 0,
      "left": "0%"
     }
    ],
    "minHeight": 1,
    "verticalAlign": "top",
    "contentOpaque": false,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "width": "50%",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "minWidth": 1,
    "gap": 10,
    "borderSize": 0,
    "overflow": "scroll",
    "horizontalAlign": "left",
    "backgroundOpacity": 0,
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "layout": "absolute",
    "id": "Container_23DAE7B9_3572_30BF_41C8_02EC1343BB7B",
    "paddingTop": 0,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000"
   },
   {
    "minHeight": 1,
    "verticalAlign": "top",
    "contentOpaque": false,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "width": "50%",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "minWidth": 1,
    "gap": 10,
    "borderSize": 0,
    "overflow": "scroll",
    "horizontalAlign": "left",
    "backgroundOpacity": 0,
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "layout": "absolute",
    "id": "Container_23AB191F_3572_D173_41BD_D7234DF51758",
    "paddingTop": 0,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000"
   }
  ],
  "minHeight": 1,
  "verticalAlign": "middle",
  "contentOpaque": false,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "width": "100%",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "height": "10%",
  "minWidth": 1,
  "gap": 10,
  "borderSize": 0,
  "overflow": "scroll",
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "top": "0%",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "layout": "horizontal",
  "id": "Container_23261B0A_3572_715D_41B8_046FB2DF7782",
  "paddingTop": 0,
  "borderRadius": 0,
  "left": "0%",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000"
 },
 {
  "children": [
   {
    "minHeight": 1,
    "verticalAlign": "top",
    "contentOpaque": false,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "width": "15%",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "minWidth": 1,
    "gap": 10,
    "borderSize": 0,
    "overflow": "scroll",
    "horizontalAlign": "left",
    "backgroundOpacity": 0,
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "layout": "absolute",
    "id": "Container_37F56088_3C62_A6A3_41CB_CA731C54B594",
    "paddingTop": 0,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000"
   },
   {
    "minHeight": 1,
    "verticalAlign": "middle",
    "contentOpaque": false,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "width": "20%",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "minWidth": 1,
    "gap": 10,
    "borderSize": 0,
    "overflow": "scroll",
    "horizontalAlign": "center",
    "backgroundOpacity": 0,
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "layout": "horizontal",
    "id": "Container_23206529_3572_515F_41AC_56D25490180A",
    "paddingTop": 0,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000"
   },
   {
    "scrollBarWidth": 15,
    "children": [
     {
      "toolTipTextShadowOpacity": 0,
      "pressedIconURL": "skin/IconButton_3B165513_377E_451F_41CA_205B4F125433_pressed.png",
      "minHeight": 1,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "toolTipOpacity": 1,
      "paddingLeft": 0,
      "width": 40.05,
      "paddingRight": 0,
      "height": 44,
      "mode": "toggle",
      "toolTipFontWeight": "normal",
      "minWidth": 1,
      "iconURL": "skin/IconButton_3B165513_377E_451F_41CA_205B4F125433.png",
      "toolTipFontSize": 12,
      "borderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipFontColor": "#606060",
      "toolTipPaddingBottom": 4,
      "horizontalAlign": "center",
      "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, this.effect_27DBB233_3796_7F1F_41C7_1F835DC4C767, 'showEffect', false) } else if(this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, false, 0, this.effect_27D89234_3796_7F19_41B5_FB058F4A0322, 'hideEffect', false) }",
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowColor": "#333333",
      "shadow": false,
      "toolTipFontFamily": "Arial",
      "toolTip": "Show/Hide Map",
      "class": "IconButton",
      "paddingBottom": 0,
      "id": "IconButton_3B165513_377E_451F_41CA_205B4F125433",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBorderColor": "#767676",
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowVerticalLength": 0,
      "maxHeight": 500,
      "maxWidth": 500,
      "paddingTop": 0,
      "toolTipShadowSpread": 0,
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "transparencyActive": true,
      "cursor": "hand",
      "toolTipFontStyle": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "toolTipPaddingTop": 4
     },
     "this.Button_3B059DA1_3775_C53B_41B7_561826CEA40F",
     "this.Button_268C3FC2_3792_4579_41A1_4B15123E3EDE",
     {
      "toolTipTextShadowOpacity": 0,
      "pressedIconURL": "skin/Button_3B0B2BF2_3775_CD1E_41BA_31392E452177_pressed.png",
      "minHeight": 0,
      "toolTipShadowOpacity": 1,
      "rollOverBackgroundOpacity": 0,
      "verticalAlign": "middle",
      "toolTipOpacity": 1,
      "iconHeight": 32,
      "fontSize": 12,
      "paddingLeft": 0,
      "width": 32,
      "paddingRight": 0,
      "height": 32,
      "mode": "push",
      "toolTipFontWeight": "normal",
      "pressedIconHeight": 32,
      "backgroundColor": [
       "#5794FE",
       "#0065CD"
      ],
      "minWidth": 0,
      "iconURL": "skin/Button_3B0B2BF2_3775_CD1E_41BA_31392E452177.png",
      "textDecoration": "none",
      "toolTipFontSize": 12,
      "fontFamily": "Arial",
      "borderSize": 0,
      "iconWidth": 32,
      "fontStyle": "normal",
      "toolTipPaddingRight": 6,
      "backgroundColorDirection": "vertical",
      "gap": 0,
      "toolTipFontColor": "#606060",
      "click": "this.setComponentVisibility(this.Container_227DB25C_3573_D3F5_41B8_F6ABE2E5BF9D, false, 0, this.effect_24752652_3792_4719_41C1_4C335A15F366, 'hideEffect', false)",
      "toolTipPaddingBottom": 4,
      "horizontalAlign": "center",
      "backgroundColorRatios": [
       0,
       1
      ],
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "pressedIconWidth": 32,
      "borderColor": "#000000",
      "fontWeight": "normal",
      "cursor": "hand",
      "toolTipShadowColor": "#333333",
      "shadow": false,
      "pressedBackgroundOpacity": 0,
      "toolTipFontFamily": "Arial",
      "toolTip": "Hide",
      "class": "Button",
      "paddingBottom": 0,
      "rollOverIconHeight": 32,
      "id": "Button_3B0B2BF2_3775_CD1E_41BA_31392E452177",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBorderColor": "#767676",
      "toolTipBorderSize": 1,
      "layout": "horizontal",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowVerticalLength": 0,
      "shadowColor": "#000000",
      "paddingTop": 0,
      "toolTipShadowSpread": 0,
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "shadowSpread": 1,
      "toolTipFontStyle": "normal",
      "shadowBlurRadius": 6,
      "rollOverIconURL": "skin/Button_3B0B2BF2_3775_CD1E_41BA_31392E452177_rollover.png",
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "fontColor": "#FFFFFF",
      "toolTipPaddingTop": 4,
      "rollOverIconWidth": 32,
      "iconBeforeLabel": true
     },
     "this.IconButton_3B1D9A4D_3773_CF0B_41CA_D4EF0E45F3BB",
     {
      "toolTipTextShadowOpacity": 0,
      "minHeight": 1,
      "toolTipShadowOpacity": 1,
      "verticalAlign": "middle",
      "toolTipOpacity": 1,
      "paddingLeft": 0,
      "width": 56,
      "paddingRight": 0,
      "height": 34,
      "mode": "toggle",
      "toolTipFontWeight": "normal",
      "minWidth": 1,
      "iconURL": "skin/IconButton_3BC40366_3776_FD39_41A0_DA3004069E5D.png",
      "toolTipFontSize": 12,
      "borderSize": 0,
      "toolTipPaddingRight": 6,
      "toolTipFontColor": "#606060",
      "toolTipPaddingBottom": 4,
      "horizontalAlign": "center",
      "backgroundOpacity": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowColor": "#333333",
      "shadow": false,
      "toolTipFontFamily": "Arial",
      "toolTip": "Fullscreen",
      "class": "IconButton",
      "paddingBottom": 0,
      "id": "IconButton_3BC40366_3776_FD39_41A0_DA3004069E5D",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBorderColor": "#767676",
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowVerticalLength": 0,
      "maxHeight": 128,
      "maxWidth": 128,
      "paddingTop": 0,
      "toolTipShadowSpread": 0,
      "toolTipPaddingLeft": 6,
      "borderRadius": 0,
      "transparencyActive": true,
      "cursor": "hand",
      "toolTipFontStyle": "normal",
      "toolTipShadowHorizontalLength": 0,
      "toolTipBorderRadius": 3,
      "toolTipPaddingTop": 4
     }
    ],
    "minHeight": 1,
    "backgroundColor": [
     "#000000",
     "#000000",
     "#000000",
     "#666666"
    ],
    "contentOpaque": false,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "width": "30%",
    "minWidth": 1,
    "gap": 10,
    "borderSize": 6,
    "overflow": "scroll",
    "backgroundColorDirection": "vertical",
    "horizontalAlign": "center",
    "backgroundColorRatios": [
     0,
     0.08,
     0.16,
     1
    ],
    "backgroundOpacity": 0.3,
    "borderColor": "#000000",
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "layout": "horizontal",
    "id": "Container_227DB25C_3573_D3F5_41B8_F6ABE2E5BF9D",
    "paddingTop": 0,
    "borderRadius": 8,
    "scrollBarColor": "#000000"
   },
   {
    "children": [
     {
      "pressedIconURL": "skin/Button_3B29A431_3772_FB1B_41A9_381D602955B6_pressed.png",
      "minHeight": 0,
      "rollOverBackgroundOpacity": 0,
      "verticalAlign": "middle",
      "iconHeight": 32,
      "fontSize": 12,
      "paddingLeft": 0,
      "width": 32,
      "paddingRight": 0,
      "height": 32,
      "mode": "push",
      "pressedIconHeight": 32,
      "backgroundColor": [
       "#5794FE",
       "#0065CD"
      ],
      "minWidth": 0,
      "iconURL": "skin/Button_3B29A431_3772_FB1B_41A9_381D602955B6.png",
      "textDecoration": "none",
      "fontFamily": "Arial",
      "borderSize": 0,
      "iconWidth": 32,
      "fontStyle": "normal",
      "backgroundColorDirection": "vertical",
      "gap": 0,
      "click": "this.setComponentVisibility(this.Container_227DB25C_3573_D3F5_41B8_F6ABE2E5BF9D, true, 0, this.effect_22B65321_37B6_3D3B_41CB_A54C16FC1919, 'showEffect', false)",
      "horizontalAlign": "center",
      "backgroundColorRatios": [
       0,
       1
      ],
      "backgroundOpacity": 0,
      "pressedIconWidth": 32,
      "borderColor": "#000000",
      "fontWeight": "normal",
      "cursor": "hand",
      "shadow": false,
      "pressedBackgroundOpacity": 0,
      "class": "Button",
      "paddingBottom": 0,
      "rollOverIconHeight": 32,
      "id": "Button_3B29A431_3772_FB1B_41A9_381D602955B6",
      "layout": "horizontal",
      "shadowColor": "#000000",
      "paddingTop": 0,
      "borderRadius": 0,
      "shadowSpread": 1,
      "shadowBlurRadius": 6,
      "rollOverIconURL": "skin/Button_3B29A431_3772_FB1B_41A9_381D602955B6_rollover.png",
      "fontColor": "#FFFFFF",
      "rollOverIconWidth": 32,
      "iconBeforeLabel": true
     }
    ],
    "minHeight": 1,
    "verticalAlign": "middle",
    "contentOpaque": false,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "width": "20%",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "minWidth": 1,
    "gap": 10,
    "borderSize": 0,
    "overflow": "scroll",
    "horizontalAlign": "left",
    "backgroundOpacity": 0,
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "layout": "horizontal",
    "id": "Container_3CD85AB4_3772_4F19_41CB_4FEE9EA68F57",
    "paddingTop": 0,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000"
   },
   {
    "minHeight": 1,
    "verticalAlign": "top",
    "contentOpaque": false,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "width": "15%",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "100%",
    "minWidth": 1,
    "gap": 10,
    "borderSize": 0,
    "overflow": "scroll",
    "horizontalAlign": "left",
    "backgroundOpacity": 0,
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "layout": "absolute",
    "id": "Container_30467023_3C62_E5E5_41C5_F34A3FDA0673",
    "paddingTop": 0,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000"
   }
  ],
  "minHeight": 1,
  "verticalAlign": "middle",
  "contentOpaque": false,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "width": "100%",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "height": "10.033%",
  "minWidth": 1,
  "gap": 10,
  "borderSize": 0,
  "overflow": "scroll",
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "layout": "horizontal",
  "id": "Container_23F4B4D7_3572_70F3_41B9_3F6AC1C09673",
  "paddingTop": 0,
  "borderRadius": 0,
  "left": "0%",
  "scrollBarWidth": 10,
  "bottom": "0%",
  "scrollBarColor": "#000000"
 },
 {
  "children": [
   {
    "minHeight": 1,
    "verticalAlign": "top",
    "contentOpaque": false,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "50%",
    "minWidth": 1,
    "gap": 10,
    "borderSize": 0,
    "overflow": "scroll",
    "horizontalAlign": "left",
    "backgroundOpacity": 0,
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "layout": "absolute",
    "id": "Container_3164F6EF_3C49_830B_41AC_AE9225DAC308",
    "paddingTop": 0,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000"
   },
   {
    "children": [
     "this.MapViewer"
    ],
    "minHeight": 1,
    "verticalAlign": "top",
    "contentOpaque": false,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 0,
    "scrollBarOpacity": 0.5,
    "height": "50%",
    "minWidth": 1,
    "gap": 10,
    "borderSize": 0,
    "overflow": "scroll",
    "horizontalAlign": "left",
    "backgroundOpacity": 0,
    "class": "Container",
    "shadow": false,
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "layout": "absolute",
    "id": "Container_31FC27D0_3C49_8115_41B6_DF3EC234D24B",
    "paddingTop": 0,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "scrollBarColor": "#000000"
   }
  ],
  "minHeight": 1,
  "verticalAlign": "middle",
  "contentOpaque": false,
  "paddingLeft": 0,
  "scrollBarVisible": "rollOver",
  "width": "33.152%",
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "height": "100%",
  "minWidth": 1,
  "gap": 10,
  "borderSize": 0,
  "overflow": "scroll",
  "horizontalAlign": "center",
  "backgroundOpacity": 0,
  "top": "0%",
  "class": "Container",
  "shadow": false,
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "layout": "vertical",
  "id": "Container_31285C9E_3C48_870C_41C6_BCC15312B338",
  "paddingTop": 0,
  "borderRadius": 0,
  "left": "0%",
  "scrollBarWidth": 10,
  "scrollBarColor": "#000000"
 }
], 
 "scrollBarWidth": 10,
 "minHeight": 20,
 "vrPolyfillScale": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0); this.playList_284EF768_3C62_EA62_4196_F86CDB405D4E.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_3BC40366_3776_FD39_41A0_DA3004069E5D].forEach(function(component) { component.set('visible', false); }) }",
 "contentOpaque": false,
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "width": "100%",
 "minWidth": 20,
 "gap": 10,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_3BC40366_3776_FD39_41A0_DA3004069E5D",
 "scripts": {
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); }
 },
 "class": "Player",
 "shadow": false,
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "rootPlayer",
 "paddingTop": 0,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000"
})