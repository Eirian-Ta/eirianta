import React, { Component } from 'react';

const PortfolioSVG = () => {

  
  window.addEventListener("load",function() {
    const pathArray = [pathp1, pathp2, pathp3, pathp4, pathp5, pathp6, pathp7, pathp8]


    const lengthArray = pathArray.map(getLength)

    function getLength(path) {
      let length = path.getTotalLength();
      return length
      // console.log(path)
    }
    console.log('length of svgP:', lengthArray)


  })


  


  return (
   <svg 
     version="1.1" 
     id="Capa_1" 
     xmlns="http://www.w3.org/2000/svg" 
     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 496.006 496.006" 
     xmlSpace="preserve">
    <defs
       id="defs56" />

    <g
       id="layer1"
       fill="#5e00bd">
      <path id="pathp1" d="M369.499,336.15l-24.128-4.592c-0.832-2.192-1.752-4.4-2.76-6.592l13.824-20.336
        c2.16-3.176,1.76-7.44-0.96-10.16l-33.936-33.936c-2.72-2.72-6.984-3.12-10.16-0.96l-20.336,13.824
        c-2.104-0.96-4.192-1.768-6.272-2.56c-8.8,10.488-22,17.168-36.768,17.168c-14.768,0-27.968-6.68-36.776-17.176
        c-2.096,0.8-4.192,1.6-6.272,2.56l-20.336-13.824c-3.168-2.152-7.44-1.76-10.16,0.96l-33.936,33.936
        c-2.72,2.72-3.12,6.976-0.96,10.16l13.824,20.336c-1.008,2.192-1.928,4.4-2.76,6.592l-24.128,4.592
        c-3.768,0.72-6.496,4.024-6.496,7.864v48c0,3.84,2.728,7.144,6.496,7.856l24.128,4.592c0.832,2.192,1.752,4.4,2.76,6.592
        l-13.824,20.336c-2.16,3.176-1.76,7.448,0.96,10.16l33.936,33.936c2.72,2.72,6.984,3.12,10.16,0.96l20.336-13.824
        c2.192,1.008,4.4,1.928,6.592,2.76l4.592,24.128c0.72,3.776,4.024,6.504,7.864,6.504h48c3.84,0,7.144-2.728,7.856-6.496
        l4.592-24.128c2.192-0.832,4.4-1.752,6.592-2.76l20.336,13.824c3.168,2.168,7.448,1.768,10.16-0.96l33.936-33.936
        c2.72-2.712,3.12-6.976,0.96-10.16l-13.824-20.336c1.008-2.192,1.928-4.4,2.76-6.592l24.128-4.592
        c3.776-0.72,6.504-4.024,6.504-7.864v-48C376.003,340.166,373.275,336.862,369.499,336.15z M248.003,416.006
        c-26.512,0-48-21.488-48-48s21.488-48,48-48s48,21.488,48,48S274.515,416.006,248.003,416.006z"/>
      <circle id="pathp2" cx="248.003" cy="104.006" r="72"/>
    </g>
    <path stroke="#f3f3f3" fill="none" strokeWidth="4" id="pathp3" d="M248.003,312.006c-30.88,0-56,25.128-56,56s25.12,56,56,56s56-25.128,56-56S278.883,312.006,248.003,312.006z
   M248.003,408.006c-22.056,0-40-17.944-40-40s17.944-40,40-40s40,17.944,40,40S270.059,408.006,248.003,408.006z"/>
    <rect fill="#f3f3f3" id="pathp4" x="32.003" y="256.006" width="48" height="16"/>
    <rect fill="#f3f3f3" id="pathp5" x="32.003" y="288.006" width="48" height="16"/>
    <rect fill="#f3f3f3" id="pathp6" x="416.003" y="256.006" width="48" height="16"/>
    <rect fill="#f3f3f3" id="pathp7" x="416.003" y="288.006" width="48" height="16"/>
    <path stroke="#f3f3f3" fill="none"
       strokeWidth="4" id="pathp8" d="M448.003,144.006H343.811c4.24-10.096,6.808-20.888,7.68-32h104.512c22.056,0,40-17.944,40-40s-17.944-40-40-40h-133.12
      c-0.936-0.968-1.784-1.992-2.76-2.936C299.571,9.286,272.507-1.01,243.947,0.078c-27.224,1.048-52.112,13.216-70.248,31.928H70.555
      L12.691,53.702c-7.592,2.84-12.688,10.2-12.688,18.304S5.099,87.47,12.683,90.31l57.872,21.696h73.92
      c0.864,11.144,3.512,21.904,7.744,32H48.003v80h-48v112h112v-112h-48v-64h96v-1.072c8.064,12.888,18.8,24.16,32,32.616v8.456h-16v16
      h16v16h-16v16h16.64c3.904,27.088,27.208,48,55.36,48s51.456-20.912,55.36-48h16.64v-16h-16v-16h16v-16h-16v-8.464
      c13.168-8.44,23.92-19.744,32-32.68v1.144h96v64h-48v112h112v-112h-48V144.006z M96.003,320.006h-80v-80h80V320.006z
       M349.131,80.006h34.872v16h-32.4C351.195,90.566,350.363,85.23,349.131,80.006z M400.003,48.006h16v48h-16V48.006z M480.003,72.006
      c0,13.232-10.768,24-24,24h-24v-48h24C469.235,48.006,480.003,58.774,480.003,72.006z M384.003,48.006v16h-39.96
      c-2.32-5.568-5.2-10.896-8.48-16H384.003z M80.003,80.006h66.968c-1.28,5.208-2.104,10.552-2.536,16H80.003V80.006z M80.003,64.006
      v-16h80.944c-3.472,5.304-6.472,10.912-8.944,16.792v-0.792H80.003z M16.003,72.006c0-1.472,0.92-2.8,2.304-3.32L64.003,51.55
      v40.912L18.299,75.326C16.923,74.806,16.003,73.478,16.003,72.006z M248.003,280.006c-19.312,0-35.472-13.768-39.192-32h78.384
      C283.475,266.238,267.315,280.006,248.003,280.006z M288.003,232.006h-80v-16h80V232.006z M224.003,120.006h-16
      c-8.824,0-16-7.176-16-16s7.176-16,16-16s16,7.176,16,16V120.006z M256.003,200.006h-16v-64h16V200.006z M291.995,180.134
      l-3.992,2.312v17.56h-16v-64h16c17.648,0,32-14.352,32-32s-14.352-32-32-32s-32,14.352-32,32v16h-16v-16c0-17.648-14.352-32-32-32
      s-32,14.352-32,32s14.352,32,32,32h16v64h-16v-17.56l-3.992-2.312c-27.864-16.144-44.72-46.104-43.984-78.192
      c1.048-45.608,38.96-84.128,84.52-85.864c1.168-0.056,2.32-0.072,3.48-0.072c22.896,0,44.448,8.664,61,24.592
      c17.392,16.744,26.976,39.264,26.976,63.408C336.003,135.238,319.139,164.406,291.995,180.134z M272.003,120.006v-16
      c0-8.824,7.176-16,16-16s16,7.176,16,16s-7.176,16-16,16H272.003z M480.003,320.006h-80v-80h80V320.006z"/>

  </svg>
  )}

export default PortfolioSVG;