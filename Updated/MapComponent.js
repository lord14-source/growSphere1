

import { GoogleMap, Marker, MarkerF, OverlayView, PolygonF, Polyline, useJsApiLoader } from '@react-google-maps/api';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import cart1 from './img/amit.jpeg';
import code2 from './img/code.png';
import market from './img/market.png';
import office from './img/office.png';
import cart from './img/photo.jpeg';
import cart2 from './img/rohit.jpeg';







const containerStyle = {
  width: '100%',
  height: '600px',
};

// Center point set to Jharkhand level
const center = {
  lat: 23.6102,  // Latitude of Jharkhand
  lng: 85.2799,  // Longitude of Jharkhand
};
const position = {
  lat: 23.481411, // 23°28'53.08"N
  lng: 85.447336, // 85°26'50.41"E
};
const position11 = {
  lat: 23.5301, // 23°28'53.08"N
  lng:  85.4392, // 85°26'50.41"E
};
const position12 = {
  lat: 23.52466, // 23°28'53.08"N
  lng: 85.43665, // 85°26'50.41"E
};
const position1 = {
  lat: 23.442283,  // 23°26'32.18"N
    lng: 85.460815,// 85°26'50.41"E
};
const position2 = {
  lat:  23.452764714147097,  // 23°26'35.06"N
  lng: 85.43991014232856,  // 85°27'34.65"E
 

};
const position3 = {
  lat:23.442158,  // 23°26'36.65"N
  lng: 85.460053,  // 85°27'31.00"E
};
const position4 = {
  lat: 23.444347,  // 23°26'39.65"N
  lng: 85.460347,  // 85°27'37.25"E
};

const position5 = {
  lat: 23.443017,  // 23°26'34.86"N
  lng: 85.457525,  // 85°27'27.09"E
};
const position6 = {
  lat: 23.443765,  // 23°26'37.57"N
  lng: 85.457386,  // 85°27'28.19"E
};
const position7 = {
  lat: 23.444861,  // 23°26'41.51"N
  lng: 85.458711,  // 85°27'31.36"E
};
const position8 = {
  lat: 23.440477,  // 23°26'41.51"N
  lng:  85.459139,  // 85°27'31.36"E
};
const zoomLevel = 5;  // Initial zoom level for a broader view
const label = "OR-001 1.5 A"; 
// Coordinates for the Jharkhand polygon
const jharkhandCoords = [
  { lat: 24.48623150879691, lng: 83.47396970257535 },
{ lat: 24.46410920939513, lng: 83.41168774233471 },
{ lat: 24.3856295616306, lng: 83.38929801994963 },
{ lat: 24.26467754025446, lng: 83.38311702970319 },
{ lat: 24.10831289566599, lng: 83.39297870152488 },
{ lat: 24.03802131973457, lng: 83.45628426673504 },
{ lat: 23.95375933409299, lng: 83.54303918967788 },
{ lat: 23.82707339556849, lng: 83.66123428947841 },
{ lat: 23.75686252590038, lng: 83.74751285996309 },
{ lat: 23.67196187438844, lng: 83.80274174812527 },
{ lat: 23.60864658391675, lng: 83.88099609208939 },
{ lat: 23.58060961060254, lng: 83.92782379622236 },
{ lat: 23.54564635874184, lng: 83.99796553936125 },
{ lat: 23.43142882261908, lng: 83.99889484066162 },
{ lat: 23.34607291946323, lng: 84.03833316347242 },
{ lat: 23.41189144522013, lng: 84.20835263945534 },
{ lat: 23.31854702182158, lng: 84.15477569700504 },
{ lat: 23.26078469080568, lng: 84.09321982790681 },
{ lat: 23.17454124738476, lng: 84.05513076339402 },
{ lat: 23.06767562398619, lng: 84.1178433715383 },
{ lat: 23.00349632067168, lng: 84.15698196230548 },
{ lat: 23.01163406046414, lng: 84.27297599195853 },
{ lat: 22.9834604528841, lng: 84.34276599257669 },
{ lat: 22.94077823251206, lng: 84.39715387657782 },
{ lat: 22.8756783534008, lng: 84.32795769444202 },
{ lat: 22.7887790270553, lng: 84.24345921017073 },
{ lat: 22.68737121435733, lng: 84.16681134337777 },
{ lat: 22.49827285902155, lng: 84.0057577944837 },
{ lat: 22.54223799001775, lng: 84.06728962745562 },
{ lat: 22.45643466603815, lng: 84.15282167554912 },
{ lat: 22.37807141016749, lng: 84.2845713755558 },
{ lat: 22.43724832869452, lng: 84.47723927607537 },
{ lat: 22.4523451708808, lng: 84.60067447375043 },
{ lat: 22.49654022044235, lng: 84.88612322176596 },
{ lat: 22.51108243357764, lng: 85.01734977334402 },
{ lat: 22.48217571028156, lng: 85.09470350356216 },
{ lat: 22.41716227529362, lng: 85.07178321445411 },
{ lat: 22.3086483422608, lng: 85.0567721370559 },
{ lat: 22.17818541753647, lng: 85.04187133177096 },
{ lat: 22.09100031295943, lng: 85.1039809244318 },
{ lat: 22.09070480338038, lng: 85.25065527191916 },
{ lat: 22.11196550586719, lng: 85.3973194333222 },
{ lat: 22.10366196964451, lng: 85.58283430853369 },
{ lat: 22.07402413434823, lng: 85.66026226343115 },
{ lat: 22.1170373509356, lng: 85.73749121063356 },
{ lat: 22.00703857219342, lng: 85.83070382851152 },
{ lat: 22.02090496222072, lng: 85.90034731199708 },
{ lat: 22.04928042576864, lng: 85.96998507832873 },
{ lat: 22.16514988509444, lng: 86.01619003890713 },
{ lat: 22.28739014926273, lng: 86.01405831335614 },
{ lat: 22.34272828275158, lng: 86.01017903466163 },
{ lat: 22.40918575012196, lng: 85.99047176147184 },
{ lat: 22.45343914092298, lng: 85.97865992612562 },
{ lat: 22.51584161487376, lng: 85.99464013741803 },
{ lat: 22.54111645421306, lng: 86.05418605476351 },
{ lat: 22.4659976856972, lng: 86.22865776231153 },
{ lat: 22.41716531704861, lng: 86.31992360505123 },
{ lat: 22.34988147788881, lng: 86.39928136099721 },
{ lat: 22.34160470167811, lng: 86.47088916886375 },
{ lat: 22.31116511572828, lng: 86.53851170266948 },
{ lat: 22.29137954247885, lng: 86.63014155048445 },
{ lat: 22.26070015457833, lng: 86.70188483750206 },
{ lat: 22.24049452984143, lng: 86.80570059619453 },
{ lat: 22.24628820145168, lng: 86.89773424545059 },
{ lat: 22.33996599323111, lng: 86.82999678892332 },
{ lat: 22.37348965905637, lng: 86.81411355450015 },
{ lat: 22.46641302913803, lng: 86.77447787200616 },
{ lat: 22.4801538742811, lng: 86.8385355922406 },
{ lat: 22.55150049621475, lng: 86.75485005895115 },
{ lat: 22.60106771754707, lng: 86.63522507350395 },
{ lat: 22.67473268962253, lng: 86.62757857203781 },
{ lat: 22.69764821567835, lng: 86.55984179164031 },
{ lat: 22.69808578092647, lng: 86.52394782566635 },
{ lat: 22.74266956662789, lng: 86.48029587948707 },
{ lat: 22.77990406372504, lng: 86.43264296542037 },
{ lat: 22.86042377577004, lng: 86.44897212578526 },
{ lat: 22.93360255876451, lng: 86.46131786334243 },
{ lat: 22.99516013446389, lng: 86.52951181138341 },
{ lat: 22.98826105716376, lng: 86.48955318743096 },
{ lat: 22.9856457530303, lng: 86.38584177354041 },
{ lat: 22.98631581152014, lng: 86.31412414748344 },
{ lat: 23.01288181311809, lng: 86.20277959058838 },
{ lat: 23.05731951570507, lng: 86.13136511937351 },
{ lat: 23.13827819434155, lng: 86.05216739191872 },
{ lat: 23.13878255545649, lng: 85.96868024526216 },
{ lat: 23.18299581873072, lng: 85.89730760349813 },
{ lat: 23.23800697221863, lng: 85.84583768460912 },
{ lat: 23.30729741806508, lng: 85.85800067019194 },
{ lat: 23.37655095138379, lng: 85.87416372519615 },
{ lat: 23.45685236623369, lng: 85.86254095121255 },
{ lat: 23.47126809972077, lng: 85.90240192784542 },
{ lat: 23.48896445686492, lng: 86.01399490038591 },
{ lat: 23.50694800397911, lng: 86.06191219189202 },
{ lat: 23.55454324161819, lng: 86.03027943987814 },
{ lat: 23.59083203120752, lng: 86.06637014226587 },
{ lat: 23.58333926786653, lng: 86.10222826814038 },
{ lat: 23.53170626265977, lng: 86.19368484231138 },
{ lat: 23.41788459709818, lng: 86.28873111803182 },
{ lat: 23.50500977041682, lng: 86.3572496578106 },
{ lat: 23.54858356526588, lng: 86.38957041921987 },
{ lat: 23.57739264458725, lng: 86.44181850052063 },
{ lat: 23.63906631311949, lng: 86.49441998456479 },
{ lat: 23.64943034740797, lng: 86.5666737227281 },
{ lat: 23.67022248932751, lng: 86.69534314182731 },
{ lat: 23.69505904788761, lng: 86.77603452673827 },
{ lat: 23.78621927711402, lng: 86.80530615786149 },
{ lat: 23.8440286932636, lng: 86.88264425025874 },
{ lat: 23.80861680104808, lng: 87.1206052567461 },
{ lat: 23.86308440418564, lng: 87.16602268648585 },
{ lat: 23.91712292384361, lng: 87.25214760806954 },
{ lat: 23.9895774478581, lng: 87.33478314964664 },
{ lat: 23.99884204254976, lng: 87.48586163816833 },
{ lat: 24.07499419194031, lng: 87.57332905259746 },
{ lat: 24.15868222118824, lng: 87.65310132429137 },
{ lat: 24.24284610186048, lng: 87.70030055749088 },
{ lat: 24.31586149417642, lng: 87.76390087405552 },
{ lat: 24.43716924190371, lng: 87.80840042299775 },
{ lat: 24.53681198725385, lng: 87.81946324443008 },
{ lat: 24.56587449420685, lng: 87.87414575003896 },
{ lat: 24.65818724569443, lng: 87.89767272060915 },
{ lat: 24.75857018872508, lng: 87.85512696171426 },
{ lat: 24.8472478507229, lng: 87.89953908437562 },
{ lat: 24.89144061183487, lng: 87.95099274711461 },
{ lat: 24.98449824854584, lng: 87.93334736308201 },
{ lat: 25.07431701897787, lng: 87.84474533000437 },
{ lat: 25.18636148272727, lng: 87.78196895457054 },
{ lat: 25.26106876608343, lng: 87.75124830719913 },
{ lat: 25.3097710682978, lng: 87.6987884062311 },
{ lat: 25.31001738909645, lng: 87.62388047303234 },
{ lat: 25.3362752074891, lng: 87.57903370490786 },
{ lat: 25.29916385977878, lng: 87.51968591913352 },
{ lat: 25.18766004880675, lng: 87.46647967985464 },
{ lat: 25.22478049342555, lng: 87.48831841559488 },
{ lat: 25.19924036661748, lng: 87.35110132244913 },
{ lat: 25.09538079423089, lng: 87.32341861450848 },
{ lat: 25.09199348169744, lng: 87.24509812297789 },
{ lat: 24.98489560474829, lng: 87.17250846015453 },
{ lat: 24.86673891428025, lng: 87.14506841771372 },
{ lat: 24.79685438935717, lng: 87.09846198249377 },
{ lat: 24.72685188488938, lng: 87.08874795117674 },
{ lat: 24.61647349606084, lng: 87.0700864325694 },
{ lat: 24.6391450712516, lng: 86.97275255891975 },
{ lat: 24.55863885749378, lng: 86.90613440184485 },
{ lat: 24.55153262139332, lng: 86.86538122826424 },
{ lat: 24.52985140330071, lng: 86.80412310030852 },
{ lat: 24.59233867824138, lng: 86.79708293251343 },
{ lat: 24.59255753282647, lng: 86.75651153784703 },
{ lat: 24.56710690306759, lng: 86.70743843283115 },
{ lat: 24.58964402388771, lng: 86.60653767931503 },
{ lat: 24.53491166420186, lng: 86.5410149794743 },
{ lat: 24.45078331280122, lng: 86.49947059762268 },
{ lat: 24.38117614467653, lng: 86.49856156347708 },
{ lat: 24.38508489239666, lng: 86.45022134270981 },
{ lat: 24.41814417827353, lng: 86.43047164176004 },
{ lat: 24.44430663646054, lng: 86.31391056990229 },
{ lat: 24.50662724946841, lng: 86.30252535959595 },
{ lat: 24.59099258229016, lng: 86.28736218881883 },
{ lat: 24.60613446567885, lng: 86.14643177020852 },
{ lat: 24.67590575672694, lng: 86.11488228276569 },
{ lat: 24.75311961421165, lng: 86.05917680572851 },
{ lat: 24.74972164308508, lng: 85.93820652334045 },
{ lat: 24.78286007727881, lng: 85.88607507009671 },
{ lat: 24.81232509783648, lng: 85.83389517493863 },
{ lat: 24.81243623764847, lng: 85.76136568295919 },
{ lat: 24.79414079851209, lng: 85.71695473729292 },
{ lat: 24.72081385013023, lng: 85.67633152858937 },
{ lat: 24.64014875403906, lng: 85.69202698419824 },
{ lat: 24.59993765732149, lng: 85.63157900351511 },
{ lat: 24.57438713991693, lng: 85.56322122396531 },
{ lat: 24.51951773866213, lng: 85.53495978488874 },
{ lat: 24.53058288811607, lng: 85.42266241858073 },
{ lat: 24.51599067746609, lng: 85.29029347021006 },
{ lat: 24.47574915663001, lng: 85.21011484391268 },
{ lat: 24.42821037517481, lng: 85.18610721332807 },
{ lat: 24.39529722422991, lng: 85.14608441306429 },
{ lat: 24.37333772638311, lng: 85.09405375963759 },
{ lat: 24.42448589123927, lng: 85.06991556849378 },
{ lat: 24.39157934721657, lng: 85.05796881040646 },
{ lat: 24.3696087310429, lng: 85.0139623996409 },
{ lat: 24.38414708909545, lng: 84.94982349254455 },
{ lat: 24.41698125388582, lng: 84.90562070520123 },
{ lat: 24.4608174006142, lng: 84.87737384495112 },
{ lat: 24.51197534197415, lng: 84.84103286914454 },
{ lat: 24.53020458060083, lng: 84.80079762151678 },
{ lat: 24.47517207893834, lng: 84.72884012225502 },
{ lat: 24.40914060478236, lng: 84.64898078115728 },
{ lat: 24.39800470946991, lng: 84.58885301272161 },
{ lat: 24.36862955904418, lng: 84.54892884266935 },
{ lat: 24.31004357133102, lng: 84.52128189460667 },
{ lat: 24.3171882245853, lng: 84.47306622703866 },
{ lat: 24.36101004362085, lng: 84.45664001646847 },
{ lat: 24.37906546920414, lng: 84.39219422860073 },
{ lat: 24.40818491262543, lng: 84.35171151478838 },
{ lat: 24.45564830889711, lng: 84.31904729891977 },
{ lat: 24.46281486130363, lng: 84.27871105672405 },
{ lat: 24.49965323655974, lng: 84.33469771233511 },
{ lat: 24.54712047093326, lng: 84.28988086055476 },
{ lat: 24.56147686192835, lng: 84.20907273141751 },
{ lat: 24.5210395750433, lng: 84.18132182816221 },
{ lat: 24.48784674047472, lng: 84.13332371016223 },
{ lat: 24.50610020086866, lng: 84.11695451543328 },
{ lat: 24.53897060810661, lng: 84.08826966095275 },
{ lat: 24.5681686831719, lng: 84.05555864803432 },
{ lat: 24.61950680644775, lng: 84.04676061171665 },
{ lat: 24.62667264991762, lng: 84.00620701748618 },
{ lat: 24.5972507674913, lng: 83.99449790755956 },
{ lat: 24.54174845300106, lng: 83.90225559218294 },
{ lat: 24.54499177963706, lng: 83.82120492284119 },
{ lat: 24.51521191045056, lng: 83.74873090067152 },
{ lat: 24.51110383104312, lng: 83.67577108949359 },
{ lat: 24.52534206497082, lng: 83.60239655645393 },
{ lat: 24.52113909888234, lng: 83.52113054075762 },
{ lat: 24.48623150879691, lng: 83.47396970257535 }






  




];

// Coordinates for the Ranchi polygon (updated)
const ranchiCoords = [
  
  { lat: 23.79920043891375, lng: 84.80514660574408 },
  { lat: 23.77428676704722, lng: 84.81248948488594 },
  { lat: 23.73181560633788, lng: 84.82226954516166 },
  { lat: 23.7072339752749, lng: 84.82366218426222 },
  { lat: 23.67402960373414, lng: 84.83342486510942 },
  { lat: 23.62838842914657, lng: 84.83165770177496 },
  { lat: 23.57316986275648, lng: 84.83580498311005 },
  { lat: 23.5517794096063, lng: 84.84868592465119 },
  { lat: 23.52974380679333, lng: 84.87340788643567 },
  { lat: 23.5201589497429, lng: 84.88942373253366 },
  { lat: 23.44065729347281, lng: 84.92934446492637 },
  { lat: 23.417006628697, lng: 84.96340620139561 },
  { lat: 23.39176430875845, lng: 84.98666125430395 },
  { lat: 23.37321198274659, lng: 85.01687758330631 },
  { lat: 23.33421071621555, lng: 85.05223969592166 },
  { lat: 23.29649433322513, lng: 85.0740281636876 },
  { lat: 23.24757461983729, lng: 85.10097969899644 },
  { lat: 23.23412445019358, lng: 85.11726405974755 },
  { lat: 23.20942992990917, lng: 85.15886153897635 },
  { lat: 23.17160841019193, lng: 85.20074350663702 },
  { lat: 23.14597717121111, lng: 85.21974283203794 },
  { lat: 23.13277407474896, lng: 85.25024241772269 },
  { lat: 23.12401046412101, lng: 85.28874066909532 },
  { lat: 23.11629542054771, lng: 85.29947027383983 },
  { lat: 23.07556896790893, lng: 85.32394572081665 },
  { lat: 23.03304212118545, lng: 85.38797381583268 },
  { lat: 23.03115148170811, lng: 85.44766749786119 },
  { lat: 23.01934229748854, lng: 85.49899336168657 },
  { lat: 23.02950802690849, lng: 85.56606211958488 },
  { lat: 23.03351642452318, lng: 85.59004889199765 },
  { lat: 23.06161633314458, lng: 85.64891230865055 },
  { lat: 23.01925733617136, lng: 85.7415125567488 },
  { lat: 23.02784108900541, lng: 85.78782402836887 },
  { lat: 23.03827151710054, lng: 85.80458478246048 },
  { lat: 23.05320348137726, lng: 85.81928727077165 },
  { lat: 23.08052247808796, lng: 85.84555726184588 },
  { lat: 23.1032293039927, lng: 85.84952365125775 },
  { lat: 23.13718231172097, lng: 85.84833831679266 },
  { lat: 23.15162065302644, lng: 85.84459691554278 },
  { lat: 23.17288997032819, lng: 85.82766453637842 },
  { lat: 23.21546160680601, lng: 85.86277550137467 },
  { lat: 23.23239206426466, lng: 85.8276981342913 },
  { lat: 23.25281709305742, lng: 85.83271043534984 },
  { lat: 23.27303612596435, lng: 85.82343898398028 },
  { lat: 23.33081421618204, lng: 85.83289634360825 },
  { lat: 23.38016791342565, lng: 85.8548670332097 },
  { lat: 23.41375500320339, lng: 85.84953731156483 },
  { lat: 23.41289396691505, lng: 85.83697613959056 },
  { lat: 23.44257407717736, lng: 85.79744645379773 },
  { lat: 23.4442288446834, lng: 85.83267727650015 },
  { lat: 23.45436625676904, lng: 85.80067105059274 },
  { lat: 23.4866307867548, lng: 85.7988194082068 },
  { lat: 23.51078508573824, lng: 85.76901086599958 },
  { lat: 23.53788388127114, lng: 85.72632584079302 },
  { lat: 23.54892363991247, lng: 85.69677550572743 },
  { lat: 23.56537833323724, lng: 85.66761407694896 },
  { lat: 23.57404411579746, lng: 85.65930955267459 },
  { lat: 23.59146819751694, lng: 85.56779020092323 },
  { lat: 23.58749760085258, lng: 85.53363275646544 },
  { lat: 23.60794098849065, lng: 85.52853046182123 },
  { lat: 23.62211568121768, lng: 85.50040131545376 },
  { lat: 23.62737976843316, lng: 85.46629962691927 },
  { lat: 23.6387464046934, lng: 85.42073948927455 },
  { lat: 23.64661287810837, lng: 85.36958869633168 },
  { lat: 23.65472912549597, lng: 85.33271454563905 },
  { lat: 23.63027474331957, lng: 85.30370792687003 },
  { lat: 23.61415032433586, lng: 85.26221457350732 },
  { lat: 23.60560942728202, lng: 85.24025147972392 },
  { lat: 23.60089388099036, lng: 85.21795651417342 },
  { lat: 23.58946781355863, lng: 85.1987720530887 },
  { lat: 23.57739631399355, lng: 85.1813282513702 },
  { lat: 23.56403728707425, lng: 85.16736291689735 },
  { lat: 23.56765894808103, lng: 85.12247606712745 },
  { lat: 23.58782277088436, lng: 85.09294246495728 },
  { lat: 23.59966226400446, lng: 85.07591197101517 },
  { lat: 23.6587885271242, lng: 85.02100793214224 },
  { lat: 23.66012368108138, lng: 84.98720576194829 },
  { lat: 23.67614405848414, lng: 84.94365415880156 },
  { lat: 23.71350280850645, lng: 84.92765614695544 },
  { lat: 23.75117970392775, lng: 84.91583004140075 },
  { lat: 23.76334089266808, lng: 84.89280374392389 },
  { lat: 23.77964657104907, lng: 84.8736102993526 },
  { lat: 23.79920043891375, lng: 84.80514660574408 }
  ];
  


// Coordinates for the Ormanjhi
const newPolygonCoords = [
  // { lat: 23.54296029942101, lng: 85.52636109716603 },
  // { lat: 23.54779161548517, lng: 85.51919075314856 },
  // { lat: 23.55229976762472, lng: 85.50650008066773 },
  // { lat: 23.55318266084125, lng: 85.50422180227505 },
  // { lat: 23.55174658194745, lng: 85.49416101524703 },
  // { lat: 23.5543162337356, lng: 85.49176521006754 },
  // { lat: 23.55424769605381, lng: 85.48770567364139 },
  // { lat: 23.56070118957422, lng: 85.48799496075915 },
  // { lat: 23.56461950733814, lng: 85.47682103868097 },
  // { lat: 23.56927299882021, lng: 85.46374702559245 },
  // { lat: 23.56691353988688, lng: 85.45818420694246 },
  // { lat: 23.56496494533318, lng: 85.44520199747272 },
  // { lat: 23.55223619199777, lng: 85.43039049560059 },
  // { lat: 23.53211799245021, lng: 85.41665577877137 },
  // { lat: 23.50468197497965, lng: 85.40805721174617 },
  // { lat: 23.47869339587426, lng: 85.40102045376567 },
  // { lat: 23.4695667911735, lng: 85.39634968868492 },
  // { lat: 23.46251097906705, lng: 85.39378248647783 },
  // { lat: 23.45197646014737, lng: 85.39434075316433 },
  // { lat: 23.44615476366905, lng: 85.39818875510299 },
  // { lat: 23.4354052413733, lng: 85.40517046795574 },
  // { lat: 23.42628559398269, lng: 85.41807317933501 },
  // { lat: 23.42440734872867, lng: 85.43092898653501 },
  // { lat: 23.42139339896021, lng: 85.4563085377844 },
  // { lat: 23.42005531051907, lng: 85.4784128950273 },
  // { lat: 23.43253856422179, lng: 85.49787688362025 },
  // { lat: 23.44665363489468, lng: 85.51472256608024 },
  // { lat: 23.46303406658998, lng: 85.52518901550418 },
  // { lat: 23.48651637383889, lng: 85.52744915818089 },
  // { lat: 23.50928990843974, lng: 85.54965571004868 },
  // { lat: 23.53009231841875, lng: 85.55564661878509 },
  // { lat: 23.54296029942101, lng: 85.52636109716603 }
  { lat: 23.43830144946704, lng: 85.39408614397881 },
  { lat: 23.41655994392517, lng: 85.50010468476997 },
  { lat: 23.49849690122426, lng: 85.51550372758071 },
  { lat: 23.51911893626583, lng: 85.3507933837888 },
  { lat: 23.43830144946704, lng: 85.39408614397881 } // Closing the loop
];

// Coordinates for the cluster1 polygon
const additionalPolygonCoords = [
  { lat: 23.44370858861537, lng: 85.45941114742203 },
  { lat: 23.44303419987083, lng: 85.45903457300538 },
  { lat: 23.44217323053496, lng: 85.4585371554558 },
  { lat: 23.44124794491384, lng: 85.45878646996067 },
  { lat: 23.4406901023684, lng: 85.45948430201854 },
  { lat: 23.4400094636269, lng: 85.46059017562224 },
  { lat: 23.44068373946408, lng: 85.46123645912141 },
  { lat: 23.44023319796077, lng: 85.46201010383501 },
  { lat: 23.44058929362508, lng: 85.46233577640538 },
  { lat: 23.44113985237272, lng: 85.46262567483447 },
  { lat: 23.44153787512705, lng: 85.46278641482267 },
  { lat: 23.44188823552388, lng: 85.46287309196805 },
  { lat: 23.44228284092832, lng: 85.46192763517753 },
  { lat: 23.44243313332113, lng: 85.46207596055827 },
  { lat: 23.44267571056698, lng: 85.46225074426221 },
  { lat: 23.44303647990829, lng: 85.4624353308749 },
  { lat: 23.44330644465878, lng: 85.46199995147552 },
  { lat: 23.44355228065071, lng: 85.46151130917544 },
  { lat: 23.44369753632571, lng: 85.46118627889163 },
  { lat: 23.44387371176819, lng: 85.46081278806199 },
  { lat: 23.44403553046925, lng: 85.46055396869011 },
  { lat: 23.44422953782564, lng: 85.46024706830457 },
  { lat: 23.44443185965268, lng: 85.45985136155826 },
  { lat: 23.44370858861537, lng: 85.45941114742203 }

];

// Coordinates for the feild1 polygon (the one you requested)
const newPolygonCoords2 = [
  {lat: 23.4436008862071, lng: 85.45940798415077},
  {lat: 23.44297265335412, lng: 85.45906466644934},
  {lat: 23.4425794607305, lng: 85.45950910429806},
  {lat: 23.44327849476294, lng: 85.46000229880522},
  {lat: 23.4436008862071, lng: 85.45940798415077}
  
    // 23°26'36"N 85°27'33"E
];
// feild 2
const newPolygonCoords3 = [
  {lat: 23.44224372797374, lng: 85.45857014827321},
  {lat: 23.44199341526183, lng: 85.45927513999196},
  {lat: 23.44255798637839, lng: 85.45947816865956},
  {lat: 23.44295116650949, lng: 85.45904142104465},
  {lat: 23.44224372797374, lng: 85.45857014827321}
  

];
//feild 3
const newPolygonCoords4 = [
  {lat: 23.44220806446697, lng: 85.45853920757287},
  {lat: 23.44128844091964, lng: 85.4587662063504},
  {lat: 23.44197910766288, lng: 85.45927508730929},
  {lat: 23.44220806446697, lng: 85.45853920757287}
  
   // 23°26'35"N 85°27'35"E
];
//feild 4
const newPolygonCoords5 = [
  {lat: 23.44130259347494, lng: 85.45880484902628},
  {lat: 23.44074352785897, lng: 85.45950184646263},
  {lat: 23.44157185994861, lng: 85.46000759255182},
  {lat: 23.44199342662392, lng: 85.4593219221982},
  {lat: 23.44130259347494, lng: 85.45880484902628}
  
   // 23°26'35"N 85°27'35"E
];
// feild 5
const newPolygonCoords6 = [
  {lat: 23.4425365989235, lng: 85.45954016868856},
  {lat: 23.44226493173527, lng: 85.46038856124501},
  {lat: 23.44282582536205, lng: 85.46077034418563},
  {lat: 23.44323548389995, lng: 85.46004136732078},
  {lat: 23.4425365989235, lng: 85.45954016868856}
  
   // 23°26'35"N 85°27'35"E
];

//feild 6
const newPolygonCoords7 = [
  {lat: 23.44164340968677, lng: 85.46001548700602},
{lat: 23.44221485280544, lng: 85.46039643157521},
{lat: 23.44247939885103, lng: 85.45951705162834},
{lat: 23.44202202842522, lng: 85.45931420444403},
{lat: 23.44164340968677, lng: 85.46001548700602}

];
const newPolygonCoords18 = [
  {lat: 23.52755460222675, lng: 85.44054680032015},
  {lat: 23.52781361947089, lng: 85.44083618415911},
  {lat: 23.52801560274051, lng: 85.44056920671908},
  {lat: 23.5277577334614, lng: 85.44029523267508},
  {lat: 23.52755460222675, lng: 85.44054680032015}

];
const newPolygonCoords19 = [
  {lat: 23.52819074061959, lng: 85.43972574980467},
  {lat: 23.52805658231174, lng: 85.44012915160522},
  {lat: 23.5283551480645, lng: 85.44035247573676},
  {lat: 23.52861781393831, lng: 85.43995051285786},
  {lat: 23.52819074061959, lng: 85.43972574980467}

];
const newPolygonCoords20 = [
  {lat: 23.52734632384071, lng: 85.43998723597788},
    {lat: 23.52758905171376, lng: 85.44037316478304},
    {lat: 23.52803081885092, lng: 85.44000565430287},
    {lat: 23.5276510548972, lng: 85.43979747835195},
    {lat: 23.52734632384071, lng: 85.43998723597788}

];
const newPolygonCoords21 = [
  {lat: 23.52804315737338, lng: 85.44017990798274},
  {lat: 23.52780140477173, lng: 85.44030167040818},
  {lat: 23.52807500838689, lng: 85.44057425123884},
  {lat: 23.52827864364762, lng: 85.44039666986578},
  {lat: 23.52804315737338, lng: 85.44017990798274}

];
const newPolygonCoords22 = [
  {lat: 23.52804315737338, lng: 85.44017990798274},
  {lat: 23.52780140477173, lng: 85.44030167040818},
  {lat: 23.52807500838689, lng: 85.44057425123884},
  {lat: 23.52827864364762, lng: 85.44039666986578},
  {lat: 23.52804315737338, lng: 85.44017990798274}

];
const newPolygonCoords23 = [
  { lat: 23.52804315737338, lng: 85.44017990798274 },
  { lat: 23.52780140477173, lng: 85.44030167040818 },
  { lat: 23.52807500838689, lng: 85.44057425123884 },
  { lat: 23.52827864364762, lng: 85.44039666986578 },
  { lat: 23.52804315737338, lng: 85.44017990798274 }

];
const newPolygonCoords24 = [
  { lat: 23.52804315737338, lng: 85.44017990798274 },
  { lat: 23.52780140477173, lng: 85.44030167040818 },
  { lat: 23.52807500838689, lng: 85.44057425123884 },
  { lat: 23.52827864364762, lng: 85.44039666986578 },
  { lat: 23.52804315737338, lng: 85.44017990798274 }

];
const newPolygonCoords25 = [
  { lat: 23.52681702537276, lng: 85.43988779688821 },
    { lat: 23.52697658627157, lng: 85.44013806212624 },
    { lat: 23.5275271421269, lng: 85.43980666887292 },
    { lat: 23.52716191161934, lng: 85.43966803247551 },
    { lat: 23.52681702537276, lng: 85.43988779688821 }

];
const newPolygonCoords26 = [
  { lat: 23.52681702537276, lng: 85.43988779688821 },
    { lat: 23.52697658627157, lng: 85.44013806212624 },
    { lat: 23.5275271421269, lng: 85.43980666887292 },
    { lat: 23.52716191161934, lng: 85.43966803247551 },
    { lat: 23.52681702537276, lng: 85.43988779688821 }

];
const newPolygonCoords27 = [
  { lat: 23.52754499642407, lng: 85.44037424747006 },
  { lat: 23.52727014223357, lng: 85.44000979545015 },
  { lat: 23.52693132663491, lng: 85.44026845427433 },
  { lat: 23.52722626603408, lng: 85.4405889194331 },
  { lat: 23.52754499642407, lng: 85.44037424747006 }

];
const newPolygonCoords28 = [
  { lat: 23.52754499642407, lng: 85.44037424747006 },
  { lat: 23.52727014223357, lng: 85.44000979545015 },
  { lat: 23.52693132663491, lng: 85.44026845427433 },
  { lat: 23.52722626603408, lng: 85.4405889194331 },
  { lat: 23.52754499642407, lng: 85.44037424747006 }

];
//feild 7
const newPolygonCoords8 = [
  {lat: 23.4425302723415, lng: 85.46062193695269},
{lat: 23.44215046731529, lng: 85.46040426892642},
{lat: 23.44153794629511, lng: 85.46158586441727},
{lat: 23.44229329904419, lng: 85.46185323006979},
{lat: 23.44279692691854, lng: 85.46084093753544},
{lat: 23.4425302723415, lng: 85.46062193695269}

  

];
//feild 8
const newPolygonCoords9 = [
  {lat: 23.44163614668305, lng: 85.46006208262054},
{lat: 23.44076430399821, lng: 85.46125567561616},
{lat: 23.44148765332247, lng: 85.46160148822878},
{lat: 23.44212901738941, lng: 85.4603887062527},
{lat: 23.44163614668305, lng: 85.46006208262054}


];

//feild 9
const newPolygonCoords10 = [
  {lat: 23.44006732479024, lng: 85.46056792142473},
  {lat: 23.44070704142506, lng: 85.46124780908413},
  {lat: 23.44157174847316, lng: 85.46004641981965},
  {lat: 23.44071482945659, lng: 85.45953288905635},
  {lat: 23.44006732479024, lng: 85.46056792142473}
  
];
//feild 10
const newPolygonCoords11 = [
  {lat: 23.44322155213431, lng: 85.46016644061832},
  {lat: 23.44393489019958, lng: 85.46060549366607},
  {lat: 23.44442985919503, lng: 85.4598451327635},
  {lat: 23.44362269674928, lng: 85.45945468536844},
  {lat: 23.44322155213431, lng: 85.46016644061832}
  
  

];
//feild 11
const newPolygonCoords12 = [
  { lat: 23.44284021450202, lng: 85.46082524718942 },
  { lat: 23.44353455204063, lng: 85.46149382279995 },
  { lat: 23.44392074850944, lng: 85.46065254797111 },
  { lat: 23.44318562069886, lng: 85.46018209024251 },
  { lat: 23.44284021450202, lng: 85.46082524718942 }
  

];
//feild 12
const newPolygonCoords13 = [
  { lat: 23.44230049759334, lng: 85.46188463662334 },
  { lat: 23.44299348873417, lng: 85.46243049875447 },
  { lat: 23.44350579860391, lng: 85.46153322261526 },
  { lat: 23.44283295510958, lng: 85.46088014683315 },
  { lat: 23.44230049759334, lng: 85.46188463662334 }

];
//feild 14
const newPolygonCoords16 =[
  
  {lat: 23.53077952971072, lng: 85.38982737376807},
    {lat: 23.5111935593641, lng: 85.46151172762751},
    {lat: 23.5501235579252, lng: 85.47694837718612},
    {lat: 23.57203199655995, lng: 85.393549558584},
    {lat: 23.53077952971072, lng: 85.38982737376807}
  
  

];

//feild 13
const newPolygonCoords14 = [
  { lat: 23.44151630725344, lng: 85.4616486491613 },
  { lat: 23.44114830435699, lng: 85.46256768690932 },
  { lat: 23.44186698702624, lng: 85.46285634439684 },
  { lat: 23.44226449554491, lng: 85.46190034434183 },
  { lat: 23.44151630725344, lng: 85.4616486491613 }

];
const newPolygonCoords17 = [
  {lat: 23.52770655830679, lng: 85.43974083540218},
    {lat: 23.52805569427646, lng: 85.43996884351235},
    {lat: 23.5281468392985, lng: 85.43967228717332},
    {lat: 23.52793029952057, lng: 85.4394657346549},
    {lat: 23.52770655830679, lng: 85.43974083540218}

];
const dottedLinePath = [
  { lat: 23.481411, lng: 85.447336 },  // Start coordinate
  { lat: 23.452764714147097, lng: 85.43991014232856},  // End coordinate
];

const dottedLinePath1 = [
  { lat: 23.5301, lng:85.4392 },  // Start coordinate
  { lat: 23.52466, lng: 85.43665},  // End coordinate
];

// Styling options for the dotted polyline
const dottedLineOptions = {
  strokeOpacity: 0, // Hide default stroke
  icons: [
    {
      icon: {
        path: 'M 0,-1 0,1',
        strokeOpacity: 1,
        scale: 3,
      },
      offset: '0',
      repeat: '10px', // Distance between dots
    },
  ],
};


//feild 14
const newPolygonCoords15 = [
  { lat: 23.44022116356310, lng: 85.4620000001850 },
  { lat: 23.44109799157107, lng: 85.46259109856135 },
  { lat: 23.44146602749289, lng: 85.46165641355982 },
  { lat: 23.44074284710178, lng: 85.46130259692643 },
  // { lat: 23.44022197356311, lng: 85.46202068704856 }

];

// blink 
const styles = {
  '@keyframes blink': {
    '0%, 50%, 100%': { opacity: 1 },
    '25%, 75%': { opacity: 0 },
  },
  blinkingLabel: {
    animation: 'blink 1s infinite', // Adjust speed as needed
  },
};
const sampleCropInfo = {
  name: 'Raghav Mishra',
  crop: 'Tomato',
  shownDate: '2024-10-15',
  harvestDate: '2024-12-01',
  quantity: '200 kg',
  confScore: '95%',
 

};
const sampleCropInfo1 = {
  name: 'Amit Rai',
  crop: 'Potato',
  shownDate: '2024-09-25',
  harvestDate: '2024-12-01',
  quantity: '1200 kg',
  confScore: '90%',
   // URL to the crop photo

};
const sampleCropInfo2 = {
  name: 'Rohit Mondal',
  crop: 'Rice',
  shownDate: '2024-09-25',
  harvestDate: '2024-12-01',
  quantity: '1200 kg',
  confScore: '90%',
   // URL to the crop photo

};
const sampleCropInfo3 = {
  name: 'Dileshwer Mahto',
  crop: 'Peas',
  shownDate: '2024-09-25',
  harvestDate: '2024-12-01',
  quantity: '1 Tons',
  confScore: '92%',
   // URL to the crop photo

};
const sampleCropInfo4 = {
  name: 'Basudeo Mahto',
  crop: 'Onion',
  shownDate: '2024-09-25',
  harvestDate: '2024-12-01',
  quantity: '80 Kg',
  confScore: '94%',
   // URL to the crop photo

};
const calculateCentroid = (coords) => {
  let latSum = 0;
  let lngSum = 0;
  const total = coords.length;

  coords.forEach(coord => {
    latSum += coord.lat;
    lngSum += coord.lng;
  });

  return {
    lat: latSum / total,
    lng: lngSum / total,
  };
};




const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: " AIzaSyChN074R5gt4BfPTFox9UXnND0S8yyH6Dk",
  });
  
 // const [selectedMarker, setSelectedMarker] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null); // Define marker position state
  const [markerPosition1, setMarkerPosition1] = useState(null);
  const [labelVisible, setLabelVisible] = useState(false);
  const [labelPosition, setLabelPosition] = useState(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredPolygon12, setIsHoveredPolygon12] = useState(false);
const [cropInfo12, setCropInfo12] = useState({});
const [isHoveredPolygon11, setIsHoveredPolygon11] = useState(false);
const [cropInfo11, setCropInfo11] = useState({});
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [cropInfo, setCropInfo] = useState({}); // State to hold crop information

  const [selected, setSelected] = useState(null); 
  const mapRef = useRef(null);
  const [labelOpacity, setLabelOpacity] = useState(1);
  const [strokeColor, setStrokeColor] = useState("#ffc000"); // Initial stroke color
  const [strokeColor1, setStrokeColor1] = useState("green");
  const [strokeColor2, setStrokeColor2] = useState("pink");

  const onLoad = useCallback((mapInstance) => {
    console.log("Map loaded:", mapInstance);
    mapRef.current = mapInstance;
  }, []);

  const handlePolygonClick = useCallback((polygonCoords) => {
    const map = mapRef.current;
    if (!map) {
      console.log("Map instance not available.");
      return;
    }

    console.log("Polygon clicked, zooming in...");
    
    const bounds = new window.google.maps.LatLngBounds();
    polygonCoords.forEach(coord => bounds.extend(coord));

    map.fitBounds(bounds);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setLabelOpacity((prevOpacity) => (prevOpacity === 1 ? 0 : 1));
      setStrokeColor((prevColor) => (prevColor === "#ffc000" ? "#ff4500" : "#ffc000")); // Toggle colors for blinking effect
    }, 500); // Change every 500ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setLabelOpacity((prevOpacity) => (prevOpacity === 1 ? 0 : 1));
      setStrokeColor1((prevColor) => (prevColor === "green" ? "blue" : "green")); // Toggle colors for blinking effect
    }, 500); // Change every 500ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setLabelOpacity((prevOpacity) => (prevOpacity === 1 ? 0 : 1));
      setStrokeColor2((prevColor) => (prevColor === "pink" ? "red" : "pink")); // Toggle colors for blinking effect
    }, 500); // Change every 500ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return isLoaded ? (
    <div style={{ position: 'relative' }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoomLevel}
        onLoad={onLoad}
      >
       {/* Jharkhand Polygon */}
       <PolygonF
        paths={jharkhandCoords}
        options={{
          fillColor: "transparent",
          strokeColor: '#ffc000', // Use blinking stroke color
          fillOpacity: 0.35,
          strokeWeight: 3, // Adjust stroke weight if necessary
        }}
        onClick={() => {
          console.log("Jharkhand polygon clicked");
          // Handle your polygon click logic here
          handlePolygonClick(jharkhandCoords, 1);
        }}
      />
{/* Ranchi Polygon */}
<PolygonF
  paths={ranchiCoords}
  options={{
    fillColor: 'transparent',  // Light Sky Blue
    strokeColor: '#ffc000',  // Steel Blue
    fillOpacity: 0.32,
  }}
  onClick={() => {
    console.log("Ranchi polygon clicked");
    handlePolygonClick(ranchiCoords, 1);
  }}
/>

<Polyline path={dottedLinePath} options={dottedLineOptions} />
<Polyline path={dottedLinePath1} options={dottedLineOptions} />

{/* Ormanjhi */}
<PolygonF
  paths={newPolygonCoords}
  options={{
    fillColor: 'transparent',  // Pale Green
    strokeColor: '#ffc000',  // Dark Green
    fillOpacity: 0.1977,
  }}
  

onClick={() => {
    console.log("Additional polygon clicked");
    handlePolygonClick(newPolygonCoords); // Zoom in on polygon click
    setMarkerPosition(calculateCentroid(newPolygonCoords)); // Set marker at the centroid
    //setMarkerPosition1(calculateCentroid(newPolygonCoords));
  }}
/>

{/* Marker for Office */}
{markerPosition && (
   <Marker
   position={position2}
   onMouseOver={() => setSelected(markerPosition)} // Show info on marker hover
   onMouseOut={() => setSelected(null)} // Hide info when not hovering
   icon={{
    url: market, // Path to your custom image
    scaledSize: new window.google.maps.Size(40, 40), // Adjust size as needed
  }}
   label={selected === markerPosition ? {
     text: 'Market',
     color: 'red',
     fontSize: '10px',
     fontWeight: 'bold',
     className: 'blinking-label', // Apply blinking effect
   } : undefined} // Show text on hover
 />
)}
{/* Marker for Office */}
{markerPosition && (
  <MarkerF
    position={position1}
    onMouseOver={() => setSelected(position)} // Show info on marker hover
    onMouseOut={() => setSelected(null)} // Hide info when not hovering
    icon={{
      url: "",
      scaledSize: new window.google.maps.Size(30, 30), // Adjust size as needed
    }}
    label={selected === position ? {
      text: 'ORx-002',
      color: 'purple',
      fontSize: '10px', 
      fontWeight: 'bold',
    } : undefined} // Show text on hover
    label1={selected === position ? {
      text: 'OR-002',
      color: 'purple',
      fontSize: '10px',
      fontWeight: 'bold',
    } : undefined} // Show text on hover
    
  />
)}
{/* {markerPosition && (
  <MarkerF
    position={position3}
    onMouseOver={() => setSelected(position)} // Show info on marker hover
    onMouseOut={() => setSelected(null)} // Hide info when not hovering
    icon={{
      url: house,
      scaledSize: new window.google.maps.Size(30, 30), // Adjust size as needed
    }}
    label={selected === position ? {
      text: 'ORx-005',
      color: 'purple',
      fontSize: '10px', 
      fontWeight: 'bold',
    } : undefined} // Show text on hover
    label1={selected === position ? {
      text: 'OR-002',
      color: 'purple',
      fontSize: '10px',
      fontWeight: 'bold',
    } : undefined} // Show text on hover
    
  />
)} */}


{/* Marker for Office */}
{markerPosition && (
   <Marker
   position={position}
   onMouseOver={() => setSelected(markerPosition)} // Show info on marker hover
   onMouseOut={() => setSelected(null)} // Hide info when not hovering
   icon={{
    url: office, // Path to your custom image
    scaledSize: new window.google.maps.Size(40, 40), // Adjust size as needed
  }}
   label={selected === markerPosition ? {
     text: 'Ormanjhi Producer Farmers Producers Co. Ltd.',
     color: 'purple',
     fontSize: '10px',
     fontWeight: 'bold',
     className: 'blinking-label', // Apply blinking effect
   } : undefined} // Show text on hover
 />
)}

{/* New Office */}

{markerPosition && (
   <Marker
   position={position11}
   onMouseOver={() => setSelected(markerPosition)} // Show info on marker hover
   onMouseOut={() => setSelected(null)} // Hide info when not hovering
   icon={{
    url: office, // Path to your custom image
    scaledSize: new window.google.maps.Size(40, 40), // Adjust size as needed
  }}
   label={selected === markerPosition ? {
     text: 'Office',
     color: 'purple',
     fontSize: '10px',
     fontWeight: 'bold',
     className: 'blinking-label', // Apply blinking effect
   } : undefined} // Show text on hover
 />
)}
{/* New Market */}

{markerPosition && (
   <Marker
   position={position12}
   onMouseOver={() => setSelected(markerPosition)} // Show info on marker hover
   onMouseOut={() => setSelected(null)} // Hide info when not hovering
   icon={{
    url: market, // Path to your custom image
    scaledSize: new window.google.maps.Size(40, 40), // Adjust size as needed
  }}
   label={selected === markerPosition ? {
     text: 'Market',
     color: 'red',
     fontSize: '10px',
     fontWeight: 'bold',
     className: 'blinking-label', // Apply blinking effect
   } : undefined} // Show text on hover
 />
)}

{/* Marker for Office
  <MarkerF
        position={calculateCentroid(newPolygonCoords2)}
        icon={{
          url: cart,
          scaledSize: new window.google.maps.Size(30, 30), // Adjust size as needed
        }}
        label={{
          text: label, // e.g., "OR-001 1.5 A"
          color: "black",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      />  */}



<PolygonF
  paths={additionalPolygonCoords}
  options={{
    fillColor: 'Transparent',  // Gold
    strokeColor: 'transparent',  // Goldenrod
    fillOpacity: 10, // Adjusted to make the polygon more visible
    strokeWeight: 1,
    
  }}
  onClick={() => {
    console.log("Additional polygon clicked");
    handlePolygonClick(additionalPolygonCoords); // Zoom in on polygon click
    setMarkerPosition(calculateCentroid(additionalPolygonCoords)); // Set marker at the centroid
  }}
/>




<PolygonF
        paths={newPolygonCoords2}
        options={{
          fillColor: '#BC3F4A',  // Lavender
          strokeColor: strokeColor,  // Medium Purple
          fillOpacity: 0.5,
          strokeWeight: 1,
        }}
        onClick={() => {
          console.log("New Polygon 2 clicked");
          handlePolygonClick(newPolygonCoords2, 9);
        }}
      />
     
<PolygonF
  paths={newPolygonCoords3}
  options={{
    fillColor: '#BC3F4A',  // Lemon Chiffon
    strokeColor: strokeColor,  // Gold
    fillOpacity: 0.5,
    strokeWeight: 1,
  }}
  onClick={() => {
    console.log("New Polygon 3 clicked");
    handlePolygonClick(newPolygonCoords3);
  }}
/>

<PolygonF
  paths={newPolygonCoords4}
  options={{
    fillColor: '#958aae',  // Pale Turquoise
    strokeColor: '#ffc000',  // Turquoise
    fillOpacity: 0.5,
    strokeWeight: 1,
  }}
  onClick={() => {
    console.log("New Polygon 4 clicked");
    handlePolygonClick(newPolygonCoords4);
  }}
/>
<PolygonF
  paths={newPolygonCoords5}
  options={{
    fillColor: '#b5aa60',  // Moccasin
    strokeColor: '#ffc000',  // Chocolate
    fillOpacity: .5,
    strokeWeight: 3,
  }}
  onClick={() => {
    console.log("New Polygon 5 clicked");
    handlePolygonClick(newPolygonCoords5);
  }}
/>
<PolygonF
  paths={newPolygonCoords6}
  options={{
    fillColor: '#958aae',  // Lavender Blush
    strokeColor: '#ffc000',  // Pale Violet Red
    fillOpacity: .5,
    strokeWeight: 3,
  }}
  onClick={() => {
    console.log("New Polygon 6 clicked");
    handlePolygonClick(newPolygonCoords6);
  }}
/>
<PolygonF
  paths={newPolygonCoords7}
  options={{
    fillColor: '#BC3F4A',  // Navajo White
    strokeColor: strokeColor,  // Peru
    fillOpacity: 0.5,
    strokeWeight: 3,
  }}
  onClick={() => {
    console.log("New Polygon 7 clicked");
    handlePolygonClick(newPolygonCoords7);
  }}
/>
<PolygonF
  paths={newPolygonCoords8}
  options={{
    fillColor: '#b5aa60',  // Light Cyan
    strokeColor: '#ffc000',  // Light Sea Green
    fillOpacity: 0.5,
    strokeWeight: 1,
  }}
  onClick={() => {
    console.log("New Polygon 8 clicked");
    handlePolygonClick(newPolygonCoords8);
  }}
/>

<PolygonF
  paths={newPolygonCoords9}
  options={{
    fillColor: '#b5aa60',  // Light Goldenrod Yellow
    strokeColor: '#ffc000',  // Dark Khaki
    fillOpacity: 0.5,
    strokeWeight: 1,
    style:{text:"dwqad"}
  }}
  onClick={() => {
    console.log("New Polygon 9 clicked");
    handlePolygonClick(newPolygonCoords9);
  }}
/>
{labelVisible && labelPosition && (
        <OverlayView
          position={labelPosition}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={() => new window.google.maps.Point(0, 0)}
        >
          <div style={{
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '3px',
            border: '1px solid black',
            fontSize: '14px',
            textAlign: 'center',
          }}>
            dwqad  {/* Your text label */}
          </div>
        </OverlayView>
      )}
<PolygonF
  paths={newPolygonCoords10}
  options={{
    fillColor: '#b5aa60',  // Light Blue
    strokeColor: '#ffc000',  // Steel Blue
    fillOpacity: 0.5,
    strokeWeight: 1,
  }}
  onClick={() => {
    console.log("New Polygon 10 clicked");
    handlePolygonClick(newPolygonCoords10);
  }}
/>
<PolygonF
  paths={newPolygonCoords11}
  options={{
    fillColor: '#b5aa60',  // Powder Blue
    strokeColor: '#ffc000',  // Steel Blue
    fillOpacity: 0.5,
    strokeWeight: 1,
  }}
  
  onMouseOver={() => {
    setIsHoveredPolygon11(true);
    setCropInfo11(sampleCropInfo2); // Set crop info for polygon 12 on hover
  }}
  onMouseOut={() => {
    setIsHoveredPolygon11(false);
    setCropInfo11({}); // Clear crop info for polygon 12 on mouse out
  }}
  onClick={() => {
    console.log("New Polygon 11 clicked");
    handlePolygonClick(newPolygonCoords11);
  }}
/>

{isHoveredPolygon11 && (
  <div
    style={{
      position: 'absolute',
      top: '70%',
      left: '75%',
      transform: 'translate(-50%, -100%)',
      padding: '10px',
      backgroundColor: 'white',
      borderRadius: '13%',
      background: 'smoke white',
      border: '1px solid black',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
      zIndex: 1000,
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <img
        src={cart2} // Change this to the correct image for polygon 12
        alt="Cart Icon"
        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%',marginLeft:'50px',marginRight:'30px' }}
      />
       <img
        src={code2} // Change this to the correct image for polygon 12
        alt="Cart Icon"
        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '10%'}}
      />
      <hr/>
    </div>
    <h5>Name: {cropInfo11.name}</h5>
    <h5>Crop: {cropInfo11.crop}</h5>
    <h5>Shown Date: {cropInfo11.shownDate}</h5>
    <h5>Harvest Date: {cropInfo11.harvestDate}</h5>
    <h5>Quantity: {cropInfo11.quantity}</h5>
    <h5>Conf. Score: {cropInfo11.confScore}</h5>
  </div>
)}

<PolygonF
  paths={newPolygonCoords12}
  options={{
    fillColor: '#88a561',  // Khaki
    strokeColor: '#ffc000',  // Dark Goldenrod
    fillOpacity: 0.5,
    strokeWeight: 1,
  }}
  onMouseOver={() => {
    setIsHoveredPolygon12(true);
    setCropInfo12(sampleCropInfo1); // Set crop info for polygon 12 on hover
  }}
  onMouseOut={() => {
    setIsHoveredPolygon12(false);
    setCropInfo12({}); // Clear crop info for polygon 12 on mouse out
  }}
  onClick={() => {
    console.log("New Polygon 12 clicked");
    handlePolygonClick(newPolygonCoords12);
  }}
/>

{isHoveredPolygon12 && (
  <div
    style={{
      position: 'absolute',
      top: '80%',
      left: '75%',
      transform: 'translate(-50%, -100%)',
      padding: '10px',
      backgroundColor: 'white',
      borderRadius: '13%',
      background: 'smoke white',
      border: '1px solid black',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
      zIndex: 1000,
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <img
        src={cart1} // Change this to the correct image for polygon 12
        alt="Cart Icon"
        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%',marginLeft:'50px',marginRight:'30px' }}
      />
       <img
        src={code2} // Change this to the correct image for polygon 12
        alt="Cart Icon"
        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '10%'  }}
      />
      <hr/>
    </div>
    <h5>Name: {cropInfo12.name}</h5>
    <h5>Crop: {cropInfo12.crop}</h5>
    <h5>Shown Date: {cropInfo12.shownDate}</h5>
    <h5>Harvest Date: {cropInfo12.harvestDate}</h5>
    <h5>Quantity: {cropInfo12.quantity}</h5>
    <h5>Conf. Score: {cropInfo12.confScore}</h5>
  </div>
)}

<PolygonF
  paths={newPolygonCoords13}
  options={{
    fillColor: '#88a561',  // Light Pink
    strokeColor: 'Golden',  // Hot Pink
    fillOpacity: 0.5,
    strokeWeight: 1,
  }}
  onMouseOver={() => {
    setIsHovered(true);
     // Set position to centroid
    setCropInfo(sampleCropInfo); // Set crop info on hover
  }}// Set to true on hover
  onMouseOut={() => {
    setIsHovered(false);
    setCropInfo({}); // Clear crop info on mouse out
  }}
  onClick={() => {
    console.log("New Polygon 13 clicked");
    handlePolygonClick(newPolygonCoords13);
  }}

/>
{isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '70%', // Adjust based on your map's coordinates
            left: '75%',
            transform: 'translate(-50%, -100%)', // Center the card above the polygon
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '13%' ,
            background:'smoke white',
            border: '1px solid black',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 1000, // Ensure it's above other elements
          }}
        >
          
          <div className='first' style={{ textAlign: 'center' }}>
      <img
        src={cart}
        alt="Cart Icon"
        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%',marginLeft:'50px',marginRight:'30px' }} // Adjust size as needed
      />
       <img
        src={code2} // Change this to the correct image for polygon 12
        alt="Cart Icon"
        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '10%',  }}
      />
    </div>
    <hr/>
   
         <h5>Name: {cropInfo.name} </h5>
         <h5>Crop: {cropInfo.crop} </h5>
         <h5>Shown Date:{cropInfo.shownDate} </h5>
         <h5>Harvest Date:{cropInfo.harvestDate} </h5>
         <h5>Quantity: {cropInfo.quantity} </h5>
         <h5>Conf. Score : {cropInfo.confScore}</h5>
        </div>
      )}
   

<PolygonF
  paths={newPolygonCoords14}
  options={{
    fillColor: '#958aae',  // Light Blue
    strokeColor: '#ffc000',  // Steel Blue
    fillOpacity: 0.5,
    strokeWeight: 1,
  }}
  onClick={() => {
    console.log("New Polygon 14 clicked");
    handlePolygonClick(newPolygonCoords14);
  }}
/>
<PolygonF
  paths={newPolygonCoords15}
  options={{
    fillColor: '#958aae',  // Light Blue
    strokeColor: '#ffc000',  // Steel Blue
    fillOpacity: 0.5,
    label:'This is the feiled1',
    strokeWeight: 1,
  }}
  onClick={() => {
    console.log("New Polygon 15 clicked");
    handlePolygonClick(newPolygonCoords15);
  }}
/>
<PolygonF
        paths={newPolygonCoords16}
        options={{
          fillColor: 'transparent',  // Pale Green
          strokeColor: '#ffc000',  // Dark Green
          fillOpacity: 0.1977,
        }}
        onClick={() => {
          console.log("New Polygon 2 clicked");
          handlePolygonClick(newPolygonCoords16, 9);
        }}
      />


<PolygonF
  paths={newPolygonCoords17}
  options={{
    fillColor: '#88a561',  // Light Pink
    strokeColor: 'Golden',  // Hot Pink
    fillOpacity: 0.5,
    strokeWeight: 1,
  }}
  onMouseOver={() => {
    setIsHovered(true);
     // Set position to centroid
    setCropInfo(sampleCropInfo3); // Set crop info on hover
  }}// Set to true on hover
  onMouseOut={() => {
    setIsHovered(false);
    setCropInfo({}); // Clear crop info on mouse out
  }}
  onClick={() => {
    console.log("New Polygon 17 clicked");
    handlePolygonClick(newPolygonCoords17);
  }}

/>
{isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '70%', // Adjust based on your map's coordinates
            left: '75%',
            transform: 'translate(-50%, -100%)', // Center the card above the polygon
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '13%' ,
            background:'smoke white',
            border: '1px solid black',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 1000, // Ensure it's above other elements
          }}
        >
          
          <div className='first' style={{ textAlign: 'center' }}>
      <img
        src={cart}
        alt="Cart Icon"
        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%',marginLeft:'50px',marginRight:'30px' }} // Adjust size as needed
      />
       <img
        src={code2} // Change this to the correct image for polygon 12
        alt="Cart Icon"
        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '10%',  }}
      />
    </div>
    <hr/>
   
         <h5>Name: {cropInfo.name} </h5>
         <h5>Crop: {cropInfo.crop} </h5>
         <h5>Shown Date:{cropInfo.shownDate} </h5>
         <h5>Harvest Date:{cropInfo.harvestDate} </h5>
         <h5>Quantity: {cropInfo.quantity} </h5>
         <h5>Conf. Score : {cropInfo.confScore}</h5>
        </div>
      )}
   

   <PolygonF
  paths={newPolygonCoords18}
  options={{
    fillColor: '#88a561',  // Light Pink
    strokeColor: 'Golden',  // Hot Pink
    fillOpacity: 0.5,
    strokeWeight: 1,
  }}
  onMouseOver={() => {
    setIsHovered(true);
     // Set position to centroid
    setCropInfo(sampleCropInfo4); // Set crop info on hover
  }}// Set to true on hover
  onMouseOut={() => {
    setIsHovered(false);
    setCropInfo({}); // Clear crop info on mouse out
  }}
  onClick={() => {
    console.log("New Polygon 13 clicked");
    handlePolygonClick(newPolygonCoords18);
  }}

/>
{isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '70%', // Adjust based on your map's coordinates
            left: '75%',
            transform: 'translate(-50%, -100%)', // Center the card above the polygon
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '13%' ,
            background:'smoke white',
            border: '1px solid black',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
            zIndex: 1000, // Ensure it's above other elements
          }}
        >
          
          <div className='first' style={{ textAlign: 'center' }}>
      <img
        src={cart}
        alt="Cart Icon"
        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%',marginLeft:'50px',marginRight:'30px' }} // Adjust size as needed
      />
       <img
        src={code2} // Change this to the correct image for polygon 12
        alt="Cart Icon"
        style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '10%',  }}
      />
    </div>
    <hr/>
   
         <h5>Name: {cropInfo.name} </h5>
         <h5>Crop: {cropInfo.crop} </h5>
         <h5>Shown Date:{cropInfo.shownDate} </h5>
         <h5>Harvest Date:{cropInfo.harvestDate} </h5>
         <h5>Quantity: {cropInfo.quantity} </h5>
         <h5>Conf. Score : {cropInfo.confScore}</h5>
        </div>
      )}
   




      
      
   <PolygonF
  paths={newPolygonCoords19}
  options={{
    fillColor: '#BC3F4A',  // Navajo White
    strokeColor: strokeColor,  // Peru
    fillOpacity: 0.5,
    strokeWeight: 3,
  }}
  onClick={() => {
    console.log("New Polygon 19 clicked");
    handlePolygonClick(newPolygonCoords19);
  }}
/>
<PolygonF
  paths={newPolygonCoords20}
  options={{
    fillColor: '#BC3F4A',  // Navajo White
    strokeColor: strokeColor,  // Peru
    fillOpacity: 0.5,
    strokeWeight: 3,
  }}
  onClick={() => {
    console.log("New Polygon 20 clicked");
    handlePolygonClick(newPolygonCoords20);
  }}
/>
<PolygonF
        paths={newPolygonCoords21}
        options={{
          fillColor: 'Green',  // Lavender
          strokeColor: "Green",  // Medium Purple
          fillOpacity: 0.5,
          strokeWeight: 1,
        }}
        onClick={() => {
          console.log("New Polygon 2 clicked");
          handlePolygonClick(newPolygonCoords21, 9);
        }}
      />
      <PolygonF
        paths={newPolygonCoords22}
        options={{
          fillColor: '#b5aa60',  // Powder Blue
    strokeColor: '#ffc000',
          fillOpacity: 0.5,
          strokeWeight: 1,
        }}
        onClick={() => {
          console.log("New Polygon 2 clicked");
          handlePolygonClick(newPolygonCoords22, 9);
        }}
      />
       <PolygonF
        paths={newPolygonCoords23}
        options={{
          fillColor: '#b5aa60',  // Powder Blue
    strokeColor: '#ffc000',
          fillOpacity: 0.5,
          strokeWeight: 1,
        }}
        onClick={() => {
          console.log("New Polygon 2 clicked");
          handlePolygonClick(newPolygonCoords23, 9);
        }}
      />
     <PolygonF
        paths={newPolygonCoords24}
        options={{
          fillColor: '#b5aa60',  // Powder Blue
    strokeColor: '#ffc000',
          fillOpacity: 0.5,
          strokeWeight: 1,
        }}
        onClick={() => {
          console.log("New Polygon 2 clicked");
          handlePolygonClick(newPolygonCoords24, 9);
        }}
      />
     <PolygonF
        paths={newPolygonCoords25}
        options={{
          fillColor: '#b5aa60',  // Powder Blue
    strokeColor: '#ffc000',
          fillOpacity: 0.5,
          strokeWeight: 1,
        }}
        onClick={() => {
          console.log("New Polygon 2 clicked");
          handlePolygonClick(newPolygonCoords25, 9);
        }}
      />
      <PolygonF
        paths={newPolygonCoords26}
        options={{
          fillColor: '#b5aa60',  // Powder Blue
    strokeColor: '#ffc000',
          fillOpacity: 0.5,
          strokeWeight: 1,
        }}
        onClick={() => {
          console.log("New Polygon 2 clicked");
          handlePolygonClick(newPolygonCoords26, 9);
        }}
      />
     <PolygonF
        paths={newPolygonCoords27}
        options={{
          fillColor: '#b5aa60',  // Powder Blue
    strokeColor: '#ffc000',
          fillOpacity: 0.5,
          strokeWeight: 1,
        }}
        onClick={() => {
          console.log("New Polygon 2 clicked");
          handlePolygonClick(newPolygonCoords27, 9);
        }}
      />
      <PolygonF
        paths={newPolygonCoords28}
        options={{
          fillColor: '#b5aa60',  // Powder Blue
    strokeColor: '#ffc000',
          fillOpacity: 0.5,
          strokeWeight: 1,
        }}
        onClick={() => {
          console.log("New Polygon 2 clicked");
          handlePolygonClick(newPolygonCoords28, 9);
        }}
      />
     



      </GoogleMap>
    </div>
  ) : <></>;
};

export default MapComponent;
