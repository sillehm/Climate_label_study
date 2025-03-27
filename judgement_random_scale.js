/************************************ 
 * Undersøgelse Af Klimamærket *
 ************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Undersøgelse af klimamærket';  // from the Builder filename that created this script
let expInfo = {
    'Deltager ID': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 5)}`,
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color('white'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const loadItemsLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loadItemsLoopLoopBegin(loadItemsLoopLoopScheduler));
flowScheduler.add(loadItemsLoopLoopScheduler);
flowScheduler.add(loadItemsLoopLoopEnd);


flowScheduler.add(consentRoutineBegin());
flowScheduler.add(consentRoutineEachFrame());
flowScheduler.add(consentRoutineEnd());
flowScheduler.add(backgroundRoutineRoutineBegin());
flowScheduler.add(backgroundRoutineRoutineEachFrame());
flowScheduler.add(backgroundRoutineRoutineEnd());
flowScheduler.add(instructionsRoutineRoutineBegin());
flowScheduler.add(instructionsRoutineRoutineEachFrame());
flowScheduler.add(instructionsRoutineRoutineEnd());
const testTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(testTrialsLoopBegin(testTrialsLoopScheduler));
flowScheduler.add(testTrialsLoopScheduler);
flowScheduler.add(testTrialsLoopEnd);



flowScheduler.add(beforeBaselineRoutineRoutineBegin());
flowScheduler.add(beforeBaselineRoutineRoutineEachFrame());
flowScheduler.add(beforeBaselineRoutineRoutineEnd());
const baselineLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(baselineLoopLoopBegin(baselineLoopLoopScheduler));
flowScheduler.add(baselineLoopLoopScheduler);
flowScheduler.add(baselineLoopLoopEnd);



const conditionAssignLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(conditionAssignLoopLoopBegin(conditionAssignLoopLoopScheduler));
flowScheduler.add(conditionAssignLoopLoopScheduler);
flowScheduler.add(conditionAssignLoopLoopEnd);


const experimentalLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(experimentalLoopLoopBegin(experimentalLoopLoopScheduler));
flowScheduler.add(experimentalLoopLoopScheduler);
flowScheduler.add(experimentalLoopLoopEnd);



flowScheduler.add(debriefRoutineRoutineBegin());
flowScheduler.add(debriefRoutineRoutineEachFrame());
flowScheduler.add(debriefRoutineRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'items.csv', 'path': 'items.csv'},
    {'name': 'images/peberfrugt.png', 'path': 'images/peberfrugt.png'},
    {'name': 'images/label_A.png', 'path': 'images/label_A.png'},
    {'name': 'images/flaaet_tomat.png', 'path': 'images/flaaet_tomat.png'},
    {'name': 'images/aeg.png', 'path': 'images/aeg.png'},
    {'name': 'images/banan.png', 'path': 'images/banan.png'},
    {'name': 'images/aeble.png', 'path': 'images/aeble.png'},
    {'name': 'images/letmaelk.png', 'path': 'images/letmaelk.png'},
    {'name': 'images/kartoffel.png', 'path': 'images/kartoffel.png'},
    {'name': 'images/loeg.png', 'path': 'images/loeg.png'},
    {'name': 'images/spidskaal.png', 'path': 'images/spidskaal.png'},
    {'name': 'images/champignon.png', 'path': 'images/champignon.png'},
    {'name': 'images/cornflakes.png', 'path': 'images/cornflakes.png'},
    {'name': 'images/label_B.png', 'path': 'images/label_B.png'},
    {'name': 'images/hindbaermarmelade.png', 'path': 'images/hindbaermarmelade.png'},
    {'name': 'images/ketchup.png', 'path': 'images/ketchup.png'},
    {'name': 'images/pasta.png', 'path': 'images/pasta.png'},
    {'name': 'images/havregryn.png', 'path': 'images/havregryn.png'},
    {'name': 'images/aeblejuice.png', 'path': 'images/aeblejuice.png'},
    {'name': 'images/aerter.png', 'path': 'images/aerter.png'},
    {'name': 'images/tortilla.png', 'path': 'images/tortilla.png'},
    {'name': 'images/salsa.png', 'path': 'images/salsa.png'},
    {'name': 'images/hytteost.png', 'path': 'images/hytteost.png'},
    {'name': 'images/pesto.png', 'path': 'images/pesto.png'},
    {'name': 'images/label_C.png', 'path': 'images/label_C.png'},
    {'name': 'images/floedeis.png', 'path': 'images/floedeis.png'},
    {'name': 'images/laks.png', 'path': 'images/laks.png'},
    {'name': 'images/myslibar.png', 'path': 'images/myslibar.png'},
    {'name': 'images/linser.png', 'path': 'images/linser.png'},
    {'name': 'images/tun.png', 'path': 'images/tun.png'},
    {'name': 'images/skinke.png', 'path': 'images/skinke.png'},
    {'name': 'images/chips.png', 'path': 'images/chips.png'},
    {'name': 'images/peanutbutter.png', 'path': 'images/peanutbutter.png'},
    {'name': 'images/leverpostej.png', 'path': 'images/leverpostej.png'},
    {'name': 'images/foraarsruller.png', 'path': 'images/foraarsruller.png'},
    {'name': 'images/label_D.png', 'path': 'images/label_D.png'},
    {'name': 'images/mozzarella.png', 'path': 'images/mozzarella.png'},
    {'name': 'images/ris.png', 'path': 'images/ris.png'},
    {'name': 'images/hakket_kyllingekoed.png', 'path': 'images/hakket_kyllingekoed.png'},
    {'name': 'images/olivenolie.png', 'path': 'images/olivenolie.png'},
    {'name': 'images/bacon.png', 'path': 'images/bacon.png'},
    {'name': 'images/chokolade.png', 'path': 'images/chokolade.png'},
    {'name': 'images/rejer.png', 'path': 'images/rejer.png'},
    {'name': 'images/danbo_ost.png', 'path': 'images/danbo_ost.png'},
    {'name': 'images/graeskarkerner.png', 'path': 'images/graeskarkerner.png'},
    {'name': 'images/kaffe.png', 'path': 'images/kaffe.png'},
    {'name': 'images/label_E.png', 'path': 'images/label_E.png'},
    {'name': 'images/kakaopulver.png', 'path': 'images/kakaopulver.png'},
    {'name': 'images/cashewnoedder.png', 'path': 'images/cashewnoedder.png'},
    {'name': 'images/biksemad.png', 'path': 'images/biksemad.png'},
    {'name': 'images/hakket_oksekoed.png', 'path': 'images/hakket_oksekoed.png'},
    {'name': 'images/marcipan.png', 'path': 'images/marcipan.png'},
    {'name': 'images/te.png', 'path': 'images/te.png'},
    {'name': 'images/lammekebab.png', 'path': 'images/lammekebab.png'},
    {'name': 'images/koedboller.png', 'path': 'images/koedboller.png'},
    {'name': 'images/lasagne.png', 'path': 'images/lasagne.png'},
    {'name': 'scaleCondition.csv', 'path': 'scaleCondition.csv'},
    {'name': 'scales/scale_labels.png', 'path': 'scales/scale_labels.png'},
    {'name': 'scales/scale_original.png', 'path': 'scales/scale_original.png'},
    {'name': 'scales/scale_linear.png', 'path': 'scales/scale_linear.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["Deltager ID"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var loadItemsRoutineClock;
var consentClock;
var consentText;
var nextButtonTextConsent;
var nextButtonRectConsent;
var mouseConsent;
var backgroundRoutineClock;
var text_2;
var nextButtonTextInstruct_2;
var nextButtonRectInstruct_2;
var mouseIntruct_2;
var instructionsRoutineClock;
var text;
var nextButtonTextInstruct;
var nextButtonRectInstruct;
var mouseIntruct;
var testTrialRoutineClock;
var instructionTextTrial_t;
var item1_img_t;
var item2_img_t;
var item3_img_t;
var item4_img_t;
var item5_img_t;
var item1_name_t;
var item2_name_t;
var item3_name_t;
var item4_name_t;
var item5_name_t;
var item1_weight_t;
var item2_weight_t;
var item3_weight_t;
var item4_weight_t;
var item5_weight_t;
var item1_price_t;
var item2_price_t;
var item3_price_t;
var item4_price_t;
var item5_price_t;
var item1_label_t;
var item2_label_t;
var item3_label_t;
var item4_label_t;
var item5_label_t;
var line_3;
var basketTitle_3;
var nextButtonText_answer_t;
var nextButton_t;
var buttonTextA_t;
var buttonTextB_t;
var buttonTextC_t;
var buttonTextD_t;
var buttonTextE_t;
var buttonA_t;
var buttonB_t;
var buttonC_t;
var buttonD_t;
var buttonE_t;
var mouse_answer_3;
var certaintyRoutineClock;
var text_3;
var certaintySlider;
var nextButtonText;
var nextButtonRectangle;
var mouse;
var beforeBaselineRoutineClock;
var text_5;
var nextButtonTextInstruct_3;
var nextButtonRectInstruct_3;
var mouseIntruct_3;
var baselineTrialRoutineClock;
var instructionTextTrial_b;
var item1_img_b;
var item2_img_b;
var item3_img_b;
var item4_img_b;
var item5_img_b;
var item1_name_b;
var item2_name_b;
var item3_name_b;
var item4_name_b;
var item5_name_b;
var item1_weight_b;
var item2_weight_b;
var item3_weight_b;
var item4_weight_b;
var item5_weight_b;
var item1_price_b;
var item2_price_b;
var item3_price_b;
var item4_price_b;
var item5_price_b;
var item1_label_b;
var item2_label_b;
var item3_label_b;
var item4_label_b;
var item5_label_b;
var line_2;
var basketTitle_2;
var nextButtonText_answer_b;
var nextButton_b;
var buttonTextA_b;
var buttonTextB_b;
var buttonTextC_b;
var buttonTextD_b;
var buttonTextE_b;
var buttonA_b;
var buttonB_b;
var buttonC_b;
var buttonD_b;
var buttonE_b;
var mouse_answer_2;
var assignConditionClock;
var experimentalTrialRoutineClock;
var instructionTextTrial;
var item1_img;
var item2_img;
var item3_img;
var item4_img;
var item5_img;
var item1_name;
var item2_name;
var item3_name;
var item4_name;
var item5_name;
var item1_weight;
var item2_weight;
var item3_weight;
var item4_weight;
var item5_weight;
var item1_price;
var item2_price;
var item3_price;
var item4_price;
var item5_price;
var item1_label;
var item2_label;
var item3_label;
var item4_label;
var item5_label;
var scale;
var line;
var basketTitle;
var nextButtonText_answer;
var nextButton;
var buttonTextA;
var buttonTextB;
var buttonTextC;
var buttonTextD;
var buttonTextE;
var buttonA;
var buttonB;
var buttonC;
var buttonD;
var buttonE;
var mouse_answer;
var debriefRoutineClock;
var debriefText;
var afslutButtonText;
var afslutButton;
var mouseDebrief;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "loadItemsRoutine"
  loadItemsRoutineClock = new util.Clock();
  // Run 'Begin Experiment' code from code_12
  // Define scale options
  //const scaleOptions = [
  //  { name: "labels", image: "scales/scale_labels.png" },
  //  { name: "original", image: "scales/scale_original.png" },
  //  { name: "linear", image: "scales/scale_linear.png" }
  //];
  
  // Randomly pick one condition
  //const picked = scaleOptions[Math.floor(Math.random() * scaleOptions.length)];
  
  // Store values globally
  //scale_condition = picked.name;
  //scaleImage = picked.image;
  
  // Log condition in data
  //psychoJS.experiment.addData("assignedCondition", scale_condition);
  // Initialize components for Routine "consent"
  consentClock = new util.Clock();
  consentText = new visual.TextStim({
    win: psychoJS.window,
    name: 'consentText',
    text: 'Du deltager i dette online studie, som er udarbejdet af Sille Hasselbalch Markussen i forbindelse med sit speciale i Cognitive Science. Studiet varer ca. XX minutter, og dine svar behandles anonymt og fortroligt i overensstemmelse med databeskyttelsesforordningen.\n\nHvis du har spørgsmål om studiet eller behandlingen af dine data, kan du kontakte Sille Hasselbalch Markussen, 202006969@post.au.dk.\nDin deltagelse er helt frivillig, og du kan til enhver tid trække dit samtykke tilbage uden konsekvenser.\n\nVed at fortsætte i eksperimentet bekræfter du, at du har læst og forstået denne erklæring, og at du giver dit samtykke til at deltage.\n\nHvis du ikke ønsker at samtykke, tryk da på escape, for at forlade eksperimentet. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  nextButtonTextConsent = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButtonTextConsent',
    text: 'Næste',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  nextButtonRectConsent = new visual.Rect ({
    win: psychoJS.window, name: 'nextButtonRectConsent', 
    width: [0.2, 0.05][0], height: [0.2, 0.05][1],
    ori: 0.0, 
    pos: [0, (- 0.35)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  mouseConsent = new core.Mouse({
    win: psychoJS.window,
  });
  mouseConsent.mouseClock = new util.Clock();
  // Initialize components for Routine "backgroundRoutine"
  backgroundRoutineClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Velkommen til undersøgelsen!\n\nI dette eksperiment vil du blive præsenteret for indkøbskurve med fem dagligvarer. Disse varer vil være mærket med et klimamærke, der viser den gennemsnitlige klimabelastning for de forskellige fødevarer. \n\nMærket går fra A (lav CO₂-udledning) til E (høj CO₂-udledning), baseret på hvor mange kg CO₂ der udledes pr. kg af varen.\n\nKlik på "Næste" for at komme til instruktionerne. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  nextButtonTextInstruct_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButtonTextInstruct_2',
    text: 'Næste',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  nextButtonRectInstruct_2 = new visual.Rect ({
    win: psychoJS.window, name: 'nextButtonRectInstruct_2', 
    width: [0.2, 0.05][0], height: [0.2, 0.05][1],
    ori: 0.0, 
    pos: [0, (- 0.35)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  mouseIntruct_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouseIntruct_2.mouseClock = new util.Clock();
  // Initialize components for Routine "instructionsRoutine"
  instructionsRoutineClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Din opgave er at vurdere, hvor stor en klimapåvirkning indholdet af kurven har i gennemsnit. Hver kurv består af 5 varer vist på skærmen – inkl. billede, navn, vægt og klimamærke.\nDu vil blive bedt om at angive kurvens gennemsnitlige klimapåvirkning ved at vælge det klimamærke der passer til din vurdering. \nDu skal altså klikke på den knap (A–E) du mener passer bedst.\n\nNår du har valgt, skal du klikke på "Næste" for at bekræfte dit valg.\n\nEfter hver vurdering vil du blive bedt om at vurdere, hvor sikker du er på dit svar, på en skala fra \n0 = Usikker → 7 = Sikker. \n\nDu vil først blive ført igennem 3 øvelsesrunder. Derefter starter undersøgelsen. \n\nKlik på næste, når du er klar til at starte. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  nextButtonTextInstruct = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButtonTextInstruct',
    text: 'Næste',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  nextButtonRectInstruct = new visual.Rect ({
    win: psychoJS.window, name: 'nextButtonRectInstruct', 
    width: [0.2, 0.05][0], height: [0.2, 0.05][1],
    ori: 0.0, 
    pos: [0, (- 0.35)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  mouseIntruct = new core.Mouse({
    win: psychoJS.window,
  });
  mouseIntruct.mouseClock = new util.Clock();
  // Initialize components for Routine "testTrialRoutine"
  testTrialRoutineClock = new util.Clock();
  instructionTextTrial_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructionTextTrial_t',
    text: 'Hvad er kurvens gennemsnitlige klimaaftryk? ',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.1], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  item1_img_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item1_img_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, 0.378], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  item2_img_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item2_img_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, 0.2455], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  item3_img_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item3_img_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, 0.113], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  item4_img_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item4_img_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, (- 0.0195)], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  item5_img_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item5_img_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, (- 0.152)], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  item1_name_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item1_name_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.37], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  item2_name_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item2_name_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.2375], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  item3_name_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item3_name_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.105], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  item4_name_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item4_name_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.0275)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  item5_name_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item5_name_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.16)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  item1_weight_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item1_weight_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.32], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  item2_weight_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item2_weight_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.1875], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -13.0 
  });
  
  item3_weight_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item3_weight_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.055], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -14.0 
  });
  
  item4_weight_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item4_weight_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.0775)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -15.0 
  });
  
  item5_weight_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item5_weight_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.21)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -16.0 
  });
  
  item1_price_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item1_price_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.152, 0.37], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -17.0 
  });
  
  item2_price_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item2_price_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.152, 0.2375], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -18.0 
  });
  
  item3_price_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item3_price_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.155, 0.105], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -19.0 
  });
  
  item4_price_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item4_price_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.155, (- 0.0275)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -20.0 
  });
  
  item5_price_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'item5_price_t',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.155, (- 0.16)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -21.0 
  });
  
  item1_label_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item1_label_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, 0.365], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -22.0 
  });
  item2_label_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item2_label_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, 0.2325], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -23.0 
  });
  item3_label_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item3_label_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, 0.112], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -24.0 
  });
  item4_label_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item4_label_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, (- 0.0345)], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -25.0 
  });
  item5_label_t = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item5_label_t', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, (- 0.167)], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -26.0 
  });
  line_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line_3', 
    vertices: [[-[0.45, 0.45][0]/2.0, 0], [+[0.45, 0.45][0]/2.0, 0]],
    ori: 90.0, 
    pos: [0.46, 0.41], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.5, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -27, 
    interpolate: true, 
  });
  
  basketTitle_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'basketTitle_3',
    text: 'Indkøbskurv',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, 0.45], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -28.0 
  });
  
  nextButtonText_answer_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButtonText_answer_t',
    text: 'Næste',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.15)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -29.0 
  });
  
  nextButton_t = new visual.Rect ({
    win: psychoJS.window, name: 'nextButton_t', 
    width: [0.2, 0.05][0], height: [0.2, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.4), (- 0.15)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -30, 
    interpolate: true, 
  });
  
  buttonTextA_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextA_t',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -31.0 
  });
  
  buttonTextB_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextB_t',
    text: 'B',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -32.0 
  });
  
  buttonTextC_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextC_t',
    text: 'C',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -33.0 
  });
  
  buttonTextD_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextD_t',
    text: 'D',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -34.0 
  });
  
  buttonTextE_t = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextE_t',
    text: 'E',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0.0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -35.0 
  });
  
  buttonA_t = new visual.Rect ({
    win: psychoJS.window, name: 'buttonA_t', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.6), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -36, 
    interpolate: true, 
  });
  
  buttonB_t = new visual.Rect ({
    win: psychoJS.window, name: 'buttonB_t', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.5), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -37, 
    interpolate: true, 
  });
  
  buttonC_t = new visual.Rect ({
    win: psychoJS.window, name: 'buttonC_t', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.4), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -38, 
    interpolate: true, 
  });
  
  buttonD_t = new visual.Rect ({
    win: psychoJS.window, name: 'buttonD_t', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.3), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -39, 
    interpolate: true, 
  });
  
  buttonE_t = new visual.Rect ({
    win: psychoJS.window, name: 'buttonE_t', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.2), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -40, 
    interpolate: true, 
  });
  
  mouse_answer_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_answer_3.mouseClock = new util.Clock();
  // Initialize components for Routine "certaintyRoutine"
  certaintyRoutineClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Hvor sikker er du på dit svar?\n\nAngiv dit svar ved at klikke på skalaen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  certaintySlider = new visual.Slider({
    win: psychoJS.window, name: 'certaintySlider',
    startValue: undefined,
    size: [0.7, 0.03], pos: [0, (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["Usikker", "", "", "", "", "", "Sikker"], fontSize: 0.025, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING", "TRIANGLE_MARKER"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('black'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  nextButtonText = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButtonText',
    text: 'Næste',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  nextButtonRectangle = new visual.Rect ({
    win: psychoJS.window, name: 'nextButtonRectangle', 
    width: [0.2, 0.05][0], height: [0.2, 0.05][1],
    ori: 0.0, 
    pos: [0, (- 0.35)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "beforeBaselineRoutine"
  beforeBaselineRoutineClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Du har nu udført øvelsesrunderne og skal nu til eksperimentet. \n\nKlik på "Næste", når du er klar til at starte eksperimentet. ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  nextButtonTextInstruct_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButtonTextInstruct_3',
    text: 'Næste',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  nextButtonRectInstruct_3 = new visual.Rect ({
    win: psychoJS.window, name: 'nextButtonRectInstruct_3', 
    width: [0.2, 0.05][0], height: [0.2, 0.05][1],
    ori: 0.0, 
    pos: [0, (- 0.35)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  mouseIntruct_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouseIntruct_3.mouseClock = new util.Clock();
  // Initialize components for Routine "baselineTrialRoutine"
  baselineTrialRoutineClock = new util.Clock();
  instructionTextTrial_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructionTextTrial_b',
    text: 'Hvad er kurvens gennemsnitlige klimaaftryk? ',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.1], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  item1_img_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item1_img_b', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, 0.378], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  item2_img_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item2_img_b', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, 0.2455], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  item3_img_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item3_img_b', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, 0.113], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  item4_img_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item4_img_b', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, (- 0.0195)], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  item5_img_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item5_img_b', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, (- 0.152)], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  item1_name_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item1_name_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.37], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  item2_name_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item2_name_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.2375], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  item3_name_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item3_name_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.105], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  item4_name_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item4_name_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.0275)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  item5_name_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item5_name_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.16)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  item1_weight_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item1_weight_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.32], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  item2_weight_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item2_weight_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.1875], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -13.0 
  });
  
  item3_weight_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item3_weight_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.055], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -14.0 
  });
  
  item4_weight_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item4_weight_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.0775)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -15.0 
  });
  
  item5_weight_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item5_weight_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.21)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -16.0 
  });
  
  item1_price_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item1_price_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.152, 0.37], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -17.0 
  });
  
  item2_price_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item2_price_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.152, 0.2375], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -18.0 
  });
  
  item3_price_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item3_price_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.155, 0.105], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -19.0 
  });
  
  item4_price_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item4_price_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.155, (- 0.0275)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -20.0 
  });
  
  item5_price_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'item5_price_b',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.155, (- 0.16)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -21.0 
  });
  
  item1_label_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item1_label_b', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, 0.365], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -22.0 
  });
  item2_label_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item2_label_b', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, 0.2325], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -23.0 
  });
  item3_label_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item3_label_b', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, 0.112], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -24.0 
  });
  item4_label_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item4_label_b', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, (- 0.0345)], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -25.0 
  });
  item5_label_b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item5_label_b', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, (- 0.167)], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -26.0 
  });
  line_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line_2', 
    vertices: [[-[0.45, 0.45][0]/2.0, 0], [+[0.45, 0.45][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0.46, 0.41], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.5, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -27, 
    interpolate: true, 
  });
  
  basketTitle_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'basketTitle_2',
    text: 'Indkøbskurv',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, 0.45], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -28.0 
  });
  
  nextButtonText_answer_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButtonText_answer_b',
    text: 'Næste',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.15)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -29.0 
  });
  
  nextButton_b = new visual.Rect ({
    win: psychoJS.window, name: 'nextButton_b', 
    width: [0.2, 0.05][0], height: [0.2, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.4), (- 0.15)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -30, 
    interpolate: true, 
  });
  
  buttonTextA_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextA_b',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -31.0 
  });
  
  buttonTextB_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextB_b',
    text: 'B',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -32.0 
  });
  
  buttonTextC_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextC_b',
    text: 'C',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -33.0 
  });
  
  buttonTextD_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextD_b',
    text: 'D',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -34.0 
  });
  
  buttonTextE_b = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextE_b',
    text: 'E',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0.0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -35.0 
  });
  
  buttonA_b = new visual.Rect ({
    win: psychoJS.window, name: 'buttonA_b', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.6), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -36, 
    interpolate: true, 
  });
  
  buttonB_b = new visual.Rect ({
    win: psychoJS.window, name: 'buttonB_b', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.5), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -37, 
    interpolate: true, 
  });
  
  buttonC_b = new visual.Rect ({
    win: psychoJS.window, name: 'buttonC_b', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.4), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -38, 
    interpolate: true, 
  });
  
  buttonD_b = new visual.Rect ({
    win: psychoJS.window, name: 'buttonD_b', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.3), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -39, 
    interpolate: true, 
  });
  
  buttonE_b = new visual.Rect ({
    win: psychoJS.window, name: 'buttonE_b', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.2), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -40, 
    interpolate: true, 
  });
  
  mouse_answer_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_answer_2.mouseClock = new util.Clock();
  // Initialize components for Routine "assignCondition"
  assignConditionClock = new util.Clock();
  // Initialize components for Routine "experimentalTrialRoutine"
  experimentalTrialRoutineClock = new util.Clock();
  instructionTextTrial = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructionTextTrial',
    text: 'Hvad er kurvens gennemsnitlige klimaaftryk? ',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.1], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  item1_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item1_img', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, 0.378], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  item2_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item2_img', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, 0.2455], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  item3_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item3_img', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, 0.113], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  item4_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item4_img', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, (- 0.0195)], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  item5_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item5_img', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'top-right',
    ori : 0.0, 
    pos : [0.215, (- 0.152)], 
    draggable: false,
    size : [0.08, 0.08],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  item1_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'item1_name',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.37], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -7.0 
  });
  
  item2_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'item2_name',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.2375], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  item3_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'item3_name',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.105], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  item4_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'item4_name',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.0275)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  item5_name = new visual.TextStim({
    win: psychoJS.window,
    name: 'item5_name',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.16)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  item1_weight = new visual.TextStim({
    win: psychoJS.window,
    name: 'item1_weight',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.32], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -12.0 
  });
  
  item2_weight = new visual.TextStim({
    win: psychoJS.window,
    name: 'item2_weight',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.1875], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -13.0 
  });
  
  item3_weight = new visual.TextStim({
    win: psychoJS.window,
    name: 'item3_weight',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, 0.055], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -14.0 
  });
  
  item4_weight = new visual.TextStim({
    win: psychoJS.window,
    name: 'item4_weight',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.0775)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -15.0 
  });
  
  item5_weight = new visual.TextStim({
    win: psychoJS.window,
    name: 'item5_weight',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.735, (- 0.21)], draggable: false, height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -16.0 
  });
  
  item1_price = new visual.TextStim({
    win: psychoJS.window,
    name: 'item1_price',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.152, 0.37], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -17.0 
  });
  
  item2_price = new visual.TextStim({
    win: psychoJS.window,
    name: 'item2_price',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.152, 0.2375], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -18.0 
  });
  
  item3_price = new visual.TextStim({
    win: psychoJS.window,
    name: 'item3_price',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.155, 0.105], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -19.0 
  });
  
  item4_price = new visual.TextStim({
    win: psychoJS.window,
    name: 'item4_price',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.155, (- 0.0275)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -20.0 
  });
  
  item5_price = new visual.TextStim({
    win: psychoJS.window,
    name: 'item5_price',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.155, (- 0.16)], draggable: false, height: 0.028,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -21.0 
  });
  
  item1_label = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item1_label', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, 0.365], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -22.0 
  });
  item2_label = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item2_label', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, 0.2325], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -23.0 
  });
  item3_label = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item3_label', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, 0.112], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -24.0 
  });
  item4_label = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item4_label', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, (- 0.0345)], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -25.0 
  });
  item5_label = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item5_label', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center-right',
    ori : 0.0, 
    pos : [0.775, (- 0.167)], 
    draggable: false,
    size : [0.08, 0.04],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -26.0 
  });
  scale = new visual.ImageStim({
    win : psychoJS.window,
    name : 'scale', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.4)], 
    draggable: false,
    size : [1.5, 0.16],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -27.0 
  });
  line = new visual.ShapeStim ({
    win: psychoJS.window, name: 'line', 
    vertices: [[-[0.45, 0.45][0]/2.0, 0], [+[0.45, 0.45][0]/2.0, 0]],
    ori: 0.0, 
    pos: [0.46, 0.41], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.5, 
    lineColor: new util.Color('black'), 
    fillColor: new util.Color('black'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -28, 
    interpolate: true, 
  });
  
  basketTitle = new visual.TextStim({
    win: psychoJS.window,
    name: 'basketTitle',
    text: 'Indkøbskurv',
    font: 'Arial',
    units: undefined, 
    pos: [0.45, 0.45], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -29.0 
  });
  
  nextButtonText_answer = new visual.TextStim({
    win: psychoJS.window,
    name: 'nextButtonText_answer',
    text: 'Næste',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), (- 0.15)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -30.0 
  });
  
  nextButton = new visual.Rect ({
    win: psychoJS.window, name: 'nextButton', 
    width: [0.2, 0.05][0], height: [0.2, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.4), (- 0.15)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -31, 
    interpolate: true, 
  });
  
  buttonTextA = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextA',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.6), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -32.0 
  });
  
  buttonTextB = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextB',
    text: 'B',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -33.0 
  });
  
  buttonTextC = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextC',
    text: 'C',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -34.0 
  });
  
  buttonTextD = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextD',
    text: 'D',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -35.0 
  });
  
  buttonTextE = new visual.TextStim({
    win: psychoJS.window,
    name: 'buttonTextE',
    text: 'E',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), 0.0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -36.0 
  });
  
  buttonA = new visual.Rect ({
    win: psychoJS.window, name: 'buttonA', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.6), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -37, 
    interpolate: true, 
  });
  
  buttonB = new visual.Rect ({
    win: psychoJS.window, name: 'buttonB', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.5), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -38, 
    interpolate: true, 
  });
  
  buttonC = new visual.Rect ({
    win: psychoJS.window, name: 'buttonC', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.4), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -39, 
    interpolate: true, 
  });
  
  buttonD = new visual.Rect ({
    win: psychoJS.window, name: 'buttonD', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.3), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -40, 
    interpolate: true, 
  });
  
  buttonE = new visual.Rect ({
    win: psychoJS.window, name: 'buttonE', 
    width: [0.05, 0.05][0], height: [0.05, 0.05][1],
    ori: 0.0, 
    pos: [(- 0.2), 0.0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -41, 
    interpolate: true, 
  });
  
  mouse_answer = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_answer.mouseClock = new util.Clock();
  // Initialize components for Routine "debriefRoutine"
  debriefRoutineClock = new util.Clock();
  debriefText = new visual.TextStim({
    win: psychoJS.window,
    name: 'debriefText',
    text: 'Tak for din deltagelse!\n\n\nDu har nu gennemført forsøget. Jeg takker dig for at have taget dig tid til at deltage – din indsats bidrager med vigtige indsigter i, hvordan forbrugere opfatter og forstår klimamærkning af fødevarer.\n\n\n\nHvis du har spørgsmål til forsøget eller formålet med undersøgelsen, er du velkommen til at kontakte mig. \n\n\n\nNår du er klar, kan du afslutte forsøget ved at klikke på knappen "Afslut".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  afslutButtonText = new visual.TextStim({
    win: psychoJS.window,
    name: 'afslutButtonText',
    text: 'Afslut',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], draggable: false, height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  afslutButton = new visual.Rect ({
    win: psychoJS.window, name: 'afslutButton', 
    width: [0.2, 0.05][0], height: [0.2, 0.05][1],
    ori: 0.0, 
    pos: [0, (- 0.35)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.9, 
    lineColor: new util.Color('grey'), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  mouseDebrief = new core.Mouse({
    win: psychoJS.window,
  });
  mouseDebrief.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var loadItemsLoop;
function loadItemsLoopLoopBegin(loadItemsLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loadItemsLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'items.csv',
      seed: undefined, name: 'loadItemsLoop'
    });
    psychoJS.experiment.addLoop(loadItemsLoop); // add the loop to the experiment
    currentLoop = loadItemsLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoadItemsLoop of loadItemsLoop) {
      snapshot = loadItemsLoop.getSnapshot();
      loadItemsLoopLoopScheduler.add(importConditions(snapshot));
      loadItemsLoopLoopScheduler.add(loadItemsRoutineRoutineBegin(snapshot));
      loadItemsLoopLoopScheduler.add(loadItemsRoutineRoutineEachFrame());
      loadItemsLoopLoopScheduler.add(loadItemsRoutineRoutineEnd(snapshot));
      loadItemsLoopLoopScheduler.add(loadItemsLoopLoopEndIteration(loadItemsLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loadItemsLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loadItemsLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loadItemsLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testTrials;
function testTrialsLoopBegin(testTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    testTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'testTrials'
    });
    psychoJS.experiment.addLoop(testTrials); // add the loop to the experiment
    currentLoop = testTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTestTrial of testTrials) {
      snapshot = testTrials.getSnapshot();
      testTrialsLoopScheduler.add(importConditions(snapshot));
      testTrialsLoopScheduler.add(testTrialRoutineRoutineBegin(snapshot));
      testTrialsLoopScheduler.add(testTrialRoutineRoutineEachFrame());
      testTrialsLoopScheduler.add(testTrialRoutineRoutineEnd(snapshot));
      testTrialsLoopScheduler.add(certaintyRoutineRoutineBegin(snapshot));
      testTrialsLoopScheduler.add(certaintyRoutineRoutineEachFrame());
      testTrialsLoopScheduler.add(certaintyRoutineRoutineEnd(snapshot));
      testTrialsLoopScheduler.add(testTrialsLoopEndIteration(testTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function testTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(testTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function testTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var baselineLoop;
function baselineLoopLoopBegin(baselineLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    baselineLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'baselineLoop'
    });
    psychoJS.experiment.addLoop(baselineLoop); // add the loop to the experiment
    currentLoop = baselineLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBaselineLoop of baselineLoop) {
      snapshot = baselineLoop.getSnapshot();
      baselineLoopLoopScheduler.add(importConditions(snapshot));
      baselineLoopLoopScheduler.add(baselineTrialRoutineRoutineBegin(snapshot));
      baselineLoopLoopScheduler.add(baselineTrialRoutineRoutineEachFrame());
      baselineLoopLoopScheduler.add(baselineTrialRoutineRoutineEnd(snapshot));
      baselineLoopLoopScheduler.add(certaintyRoutineRoutineBegin(snapshot));
      baselineLoopLoopScheduler.add(certaintyRoutineRoutineEachFrame());
      baselineLoopLoopScheduler.add(certaintyRoutineRoutineEnd(snapshot));
      baselineLoopLoopScheduler.add(baselineLoopLoopEndIteration(baselineLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function baselineLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(baselineLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function baselineLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var conditionAssignLoop;
function conditionAssignLoopLoopBegin(conditionAssignLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    conditionAssignLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'scaleCondition.csv',
      seed: undefined, name: 'conditionAssignLoop'
    });
    psychoJS.experiment.addLoop(conditionAssignLoop); // add the loop to the experiment
    currentLoop = conditionAssignLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisConditionAssignLoop of conditionAssignLoop) {
      snapshot = conditionAssignLoop.getSnapshot();
      conditionAssignLoopLoopScheduler.add(importConditions(snapshot));
      conditionAssignLoopLoopScheduler.add(assignConditionRoutineBegin(snapshot));
      conditionAssignLoopLoopScheduler.add(assignConditionRoutineEachFrame());
      conditionAssignLoopLoopScheduler.add(assignConditionRoutineEnd(snapshot));
      conditionAssignLoopLoopScheduler.add(conditionAssignLoopLoopEndIteration(conditionAssignLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function conditionAssignLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(conditionAssignLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function conditionAssignLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var experimentalLoop;
function experimentalLoopLoopBegin(experimentalLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    experimentalLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'experimentalLoop'
    });
    psychoJS.experiment.addLoop(experimentalLoop); // add the loop to the experiment
    currentLoop = experimentalLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExperimentalLoop of experimentalLoop) {
      snapshot = experimentalLoop.getSnapshot();
      experimentalLoopLoopScheduler.add(importConditions(snapshot));
      experimentalLoopLoopScheduler.add(experimentalTrialRoutineRoutineBegin(snapshot));
      experimentalLoopLoopScheduler.add(experimentalTrialRoutineRoutineEachFrame());
      experimentalLoopLoopScheduler.add(experimentalTrialRoutineRoutineEnd(snapshot));
      experimentalLoopLoopScheduler.add(certaintyRoutineRoutineBegin(snapshot));
      experimentalLoopLoopScheduler.add(certaintyRoutineRoutineEachFrame());
      experimentalLoopLoopScheduler.add(certaintyRoutineRoutineEnd(snapshot));
      experimentalLoopLoopScheduler.add(experimentalLoopLoopEndIteration(experimentalLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function experimentalLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(experimentalLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function experimentalLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var t;
var frameN;
var continueRoutine;
var loadItemsRoutineMaxDurationReached;
var all_items;
var loadItemsRoutineMaxDuration;
var loadItemsRoutineComponents;
function loadItemsRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'loadItemsRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    loadItemsRoutineClock.reset();
    routineTimer.reset();
    loadItemsRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_12
    all_items = loadItemsLoop.trialList.slice();  // copy the list so we can shuffle it
    
    psychoJS.experiment.addData('loadItemsRoutine.started', globalClock.getTime());
    loadItemsRoutineMaxDuration = null
    // keep track of which components have finished
    loadItemsRoutineComponents = [];
    
    for (const thisComponent of loadItemsRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function loadItemsRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'loadItemsRoutine' ---
    // get current time
    t = loadItemsRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of loadItemsRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loadItemsRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'loadItemsRoutine' ---
    for (const thisComponent of loadItemsRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('loadItemsRoutine.stopped', globalClock.getTime());
    // the Routine "loadItemsRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consentMaxDurationReached;
var gotValidClick;
var consentMaxDuration;
var consentComponents;
function consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'consent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    consentClock.reset();
    routineTimer.reset();
    consentMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    consentText.setAlignHoriz("left");
    
    // setup some python lists for storing info about the mouseConsent
    // current position of the mouse:
    mouseConsent.x = [];
    mouseConsent.y = [];
    mouseConsent.leftButton = [];
    mouseConsent.midButton = [];
    mouseConsent.rightButton = [];
    mouseConsent.time = [];
    mouseConsent.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('consent.started', globalClock.getTime());
    consentMaxDuration = null
    // keep track of which components have finished
    consentComponents = [];
    consentComponents.push(consentText);
    consentComponents.push(nextButtonTextConsent);
    consentComponents.push(nextButtonRectConsent);
    consentComponents.push(mouseConsent);
    
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'consent' ---
    // get current time
    t = consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consentText* updates
    if (t >= 0.0 && consentText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consentText.tStart = t;  // (not accounting for frame time here)
      consentText.frameNStart = frameN;  // exact frame index
      
      consentText.setAutoDraw(true);
    }
    
    
    // *nextButtonTextConsent* updates
    if (t >= 0.0 && nextButtonTextConsent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonTextConsent.tStart = t;  // (not accounting for frame time here)
      nextButtonTextConsent.frameNStart = frameN;  // exact frame index
      
      nextButtonTextConsent.setAutoDraw(true);
    }
    
    
    // *nextButtonRectConsent* updates
    if (t >= 0.0 && nextButtonRectConsent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonRectConsent.tStart = t;  // (not accounting for frame time here)
      nextButtonRectConsent.frameNStart = frameN;  // exact frame index
      
      nextButtonRectConsent.setAutoDraw(true);
    }
    
    // *mouseConsent* updates
    if (t >= 0.0 && mouseConsent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseConsent.tStart = t;  // (not accounting for frame time here)
      mouseConsent.frameNStart = frameN;  // exact frame index
      
      mouseConsent.status = PsychoJS.Status.STARTED;
      mouseConsent.mouseClock.reset();
      prevButtonState = mouseConsent.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseConsent.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseConsent.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouseConsent.clickableObjects = eval([nextButtonTextConsent, nextButtonRectConsent])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouseConsent.clickableObjects)) {
              mouseConsent.clickableObjects = [mouseConsent.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouseConsent.clickableObjects) {
              if (obj.contains(mouseConsent)) {
                  gotValidClick = true;
                  mouseConsent.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouseConsent.clicked_name.push(null);
          }
          _mouseXYs = mouseConsent.getPos();
          mouseConsent.x.push(_mouseXYs[0]);
          mouseConsent.y.push(_mouseXYs[1]);
          mouseConsent.leftButton.push(_mouseButtons[0]);
          mouseConsent.midButton.push(_mouseButtons[1]);
          mouseConsent.rightButton.push(_mouseButtons[2]);
          mouseConsent.time.push(mouseConsent.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'consent' ---
    for (const thisComponent of consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('consent.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouseConsent.x', mouseConsent.x);
    psychoJS.experiment.addData('mouseConsent.y', mouseConsent.y);
    psychoJS.experiment.addData('mouseConsent.leftButton', mouseConsent.leftButton);
    psychoJS.experiment.addData('mouseConsent.midButton', mouseConsent.midButton);
    psychoJS.experiment.addData('mouseConsent.rightButton', mouseConsent.rightButton);
    psychoJS.experiment.addData('mouseConsent.time', mouseConsent.time);
    psychoJS.experiment.addData('mouseConsent.clicked_name', mouseConsent.clicked_name);
    
    // the Routine "consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var backgroundRoutineMaxDurationReached;
var backgroundRoutineMaxDuration;
var backgroundRoutineComponents;
function backgroundRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'backgroundRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    backgroundRoutineClock.reset();
    routineTimer.reset();
    backgroundRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    text_2.textAlignHoriz("left");
    
    // setup some python lists for storing info about the mouseIntruct_2
    // current position of the mouse:
    mouseIntruct_2.x = [];
    mouseIntruct_2.y = [];
    mouseIntruct_2.leftButton = [];
    mouseIntruct_2.midButton = [];
    mouseIntruct_2.rightButton = [];
    mouseIntruct_2.time = [];
    mouseIntruct_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('backgroundRoutine.started', globalClock.getTime());
    backgroundRoutineMaxDuration = null
    // keep track of which components have finished
    backgroundRoutineComponents = [];
    backgroundRoutineComponents.push(text_2);
    backgroundRoutineComponents.push(nextButtonTextInstruct_2);
    backgroundRoutineComponents.push(nextButtonRectInstruct_2);
    backgroundRoutineComponents.push(mouseIntruct_2);
    
    for (const thisComponent of backgroundRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function backgroundRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'backgroundRoutine' ---
    // get current time
    t = backgroundRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *nextButtonTextInstruct_2* updates
    if (t >= 0.0 && nextButtonTextInstruct_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonTextInstruct_2.tStart = t;  // (not accounting for frame time here)
      nextButtonTextInstruct_2.frameNStart = frameN;  // exact frame index
      
      nextButtonTextInstruct_2.setAutoDraw(true);
    }
    
    
    // *nextButtonRectInstruct_2* updates
    if (t >= 0.0 && nextButtonRectInstruct_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonRectInstruct_2.tStart = t;  // (not accounting for frame time here)
      nextButtonRectInstruct_2.frameNStart = frameN;  // exact frame index
      
      nextButtonRectInstruct_2.setAutoDraw(true);
    }
    
    // *mouseIntruct_2* updates
    if (t >= 0.0 && mouseIntruct_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseIntruct_2.tStart = t;  // (not accounting for frame time here)
      mouseIntruct_2.frameNStart = frameN;  // exact frame index
      
      mouseIntruct_2.status = PsychoJS.Status.STARTED;
      mouseIntruct_2.mouseClock.reset();
      prevButtonState = mouseIntruct_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseIntruct_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseIntruct_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouseIntruct_2.clickableObjects = eval([nextButtonTextInstruct, nextButtonRectInstruct])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouseIntruct_2.clickableObjects)) {
              mouseIntruct_2.clickableObjects = [mouseIntruct_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouseIntruct_2.clickableObjects) {
              if (obj.contains(mouseIntruct_2)) {
                  gotValidClick = true;
                  mouseIntruct_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouseIntruct_2.clicked_name.push(null);
          }
          _mouseXYs = mouseIntruct_2.getPos();
          mouseIntruct_2.x.push(_mouseXYs[0]);
          mouseIntruct_2.y.push(_mouseXYs[1]);
          mouseIntruct_2.leftButton.push(_mouseButtons[0]);
          mouseIntruct_2.midButton.push(_mouseButtons[1]);
          mouseIntruct_2.rightButton.push(_mouseButtons[2]);
          mouseIntruct_2.time.push(mouseIntruct_2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of backgroundRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function backgroundRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'backgroundRoutine' ---
    for (const thisComponent of backgroundRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('backgroundRoutine.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouseIntruct_2.x', mouseIntruct_2.x);
    psychoJS.experiment.addData('mouseIntruct_2.y', mouseIntruct_2.y);
    psychoJS.experiment.addData('mouseIntruct_2.leftButton', mouseIntruct_2.leftButton);
    psychoJS.experiment.addData('mouseIntruct_2.midButton', mouseIntruct_2.midButton);
    psychoJS.experiment.addData('mouseIntruct_2.rightButton', mouseIntruct_2.rightButton);
    psychoJS.experiment.addData('mouseIntruct_2.time', mouseIntruct_2.time);
    psychoJS.experiment.addData('mouseIntruct_2.clicked_name', mouseIntruct_2.clicked_name);
    
    // the Routine "backgroundRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructionsRoutineMaxDurationReached;
var instructionsRoutineMaxDuration;
var instructionsRoutineComponents;
function instructionsRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructionsRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionsRoutineClock.reset();
    routineTimer.reset();
    instructionsRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    text.alignText = "left";
    
    // setup some python lists for storing info about the mouseIntruct
    // current position of the mouse:
    mouseIntruct.x = [];
    mouseIntruct.y = [];
    mouseIntruct.leftButton = [];
    mouseIntruct.midButton = [];
    mouseIntruct.rightButton = [];
    mouseIntruct.time = [];
    mouseIntruct.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instructionsRoutine.started', globalClock.getTime());
    instructionsRoutineMaxDuration = null
    // keep track of which components have finished
    instructionsRoutineComponents = [];
    instructionsRoutineComponents.push(text);
    instructionsRoutineComponents.push(nextButtonTextInstruct);
    instructionsRoutineComponents.push(nextButtonRectInstruct);
    instructionsRoutineComponents.push(mouseIntruct);
    
    for (const thisComponent of instructionsRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructionsRoutine' ---
    // get current time
    t = instructionsRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *nextButtonTextInstruct* updates
    if (t >= 0.0 && nextButtonTextInstruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonTextInstruct.tStart = t;  // (not accounting for frame time here)
      nextButtonTextInstruct.frameNStart = frameN;  // exact frame index
      
      nextButtonTextInstruct.setAutoDraw(true);
    }
    
    
    // *nextButtonRectInstruct* updates
    if (t >= 0.0 && nextButtonRectInstruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonRectInstruct.tStart = t;  // (not accounting for frame time here)
      nextButtonRectInstruct.frameNStart = frameN;  // exact frame index
      
      nextButtonRectInstruct.setAutoDraw(true);
    }
    
    // *mouseIntruct* updates
    if (t >= 0.0 && mouseIntruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseIntruct.tStart = t;  // (not accounting for frame time here)
      mouseIntruct.frameNStart = frameN;  // exact frame index
      
      mouseIntruct.status = PsychoJS.Status.STARTED;
      mouseIntruct.mouseClock.reset();
      prevButtonState = mouseIntruct.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseIntruct.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseIntruct.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouseIntruct.clickableObjects = eval([nextButtonTextInstruct, nextButtonRectInstruct])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouseIntruct.clickableObjects)) {
              mouseIntruct.clickableObjects = [mouseIntruct.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouseIntruct.clickableObjects) {
              if (obj.contains(mouseIntruct)) {
                  gotValidClick = true;
                  mouseIntruct.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouseIntruct.clicked_name.push(null);
          }
          _mouseXYs = mouseIntruct.getPos();
          mouseIntruct.x.push(_mouseXYs[0]);
          mouseIntruct.y.push(_mouseXYs[1]);
          mouseIntruct.leftButton.push(_mouseButtons[0]);
          mouseIntruct.midButton.push(_mouseButtons[1]);
          mouseIntruct.rightButton.push(_mouseButtons[2]);
          mouseIntruct.time.push(mouseIntruct.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructionsRoutine' ---
    for (const thisComponent of instructionsRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructionsRoutine.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouseIntruct.x', mouseIntruct.x);
    psychoJS.experiment.addData('mouseIntruct.y', mouseIntruct.y);
    psychoJS.experiment.addData('mouseIntruct.leftButton', mouseIntruct.leftButton);
    psychoJS.experiment.addData('mouseIntruct.midButton', mouseIntruct.midButton);
    psychoJS.experiment.addData('mouseIntruct.rightButton', mouseIntruct.rightButton);
    psychoJS.experiment.addData('mouseIntruct.time', mouseIntruct.time);
    psychoJS.experiment.addData('mouseIntruct.clicked_name', mouseIntruct.clicked_name);
    
    // the Routine "instructionsRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var testTrialRoutineMaxDurationReached;
var selected_items;
var itemImages;
var itemNames;
var itemWeightsText;
var itemPrices;
var itemWeights;
var itemCO2;
var itemLabelImages;
var total_weight;
var weighted_sum;
var weighted_average_co2;
var basket_label;
var selectedAnswer;
var buttons;
var responseClock;
var responseRT;
var testTrialRoutineMaxDuration;
var testTrialRoutineComponents;
function testTrialRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'testTrialRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    testTrialRoutineClock.reset();
    routineTimer.reset();
    testTrialRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_11
    selected_items = all_items
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 5);
    
    // Extract attributes
    itemImages = selected_items.map(item => item["itemImage"]);
    itemNames = selected_items.map(item => item["item"]);
    itemWeightsText = selected_items.map(item => item["itemWeight"]);
    itemPrices = selected_items.map(item => item["price"]);
    itemWeights = selected_items.map(item => parseFloat(item["weight"]));
    itemCO2 = selected_items.map(item => parseFloat(item["co2"]));
    itemLabelImages = selected_items.map(item => item["labelImage"]);
    
    // Compute CO₂ impact
    total_weight = 0;
    weighted_sum = 0;
    for (let i = 0; i < itemWeights.length; i++) {
        total_weight += itemWeights[i];
        weighted_sum += itemWeights[i] * itemCO2[i];
    }
    weighted_average_co2 = (total_weight > 0) ? (weighted_sum / total_weight) : 0;
    
    // Assign label
    if (weighted_average_co2 <= 1.1) {
        basket_label = "A";
    } else if (weighted_average_co2 <= 2.5) {
        basket_label = "B";
    } else if (weighted_average_co2 <= 5) {
        basket_label = "C";
    } else if (weighted_average_co2 <= 10) {
        basket_label = "D";
    } else {
        basket_label = "E";
    }
    
    // Align text
    // Align text (left for names & weights)
    [
        item1_name_t, item2_name_t, item3_name_t, item4_name_t, item5_name_t,
        item1_weight_t, item2_weight_t, item3_weight_t, item4_weight_t, item5_weight_t
    ].forEach(txt => {
        txt.setAlignHoriz("left");
    });
    
    // Align text (right for prices)
    [
        item1_price_t, item2_price_t, item3_price_t, item4_price_t, item5_price_t
    ].forEach(txt => {
        txt.setAlignHoriz("right");
    });
    
    // Reset button styles
    selectedAnswer = null;
    buttons = [buttonTextA_t, buttonTextB_t, buttonTextC_t, buttonTextD_t, buttonTextE_t];
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].color = "black";
    }
    
    // Start clock
    if (typeof responseClock === 'undefined') {
        responseClock = new util.Clock();
    } else {
        responseClock.reset();
    }
    responseRT = null;
    
    item1_img_t.setImage(itemImages[0]);
    item2_img_t.setImage(itemImages[1]);
    item3_img_t.setImage(itemImages[2]);
    item4_img_t.setImage(itemImages[3]);
    item5_img_t.setImage(itemImages[4]);
    item1_name_t.setText(itemNames[0]);
    item2_name_t.setText(itemNames[1]);
    item3_name_t.setText(itemNames[2]);
    item4_name_t.setText(itemNames[3]);
    item5_name_t.setText(itemNames[4]);
    item1_weight_t.setText(itemWeightsText[0]);
    item2_weight_t.setText(itemWeightsText[1]);
    item3_weight_t.setText(itemWeightsText[2]);
    item4_weight_t.setText(itemWeightsText[3]);
    item5_weight_t.setText(itemWeightsText[4]);
    item1_price_t.setText(itemPrices[0]);
    item2_price_t.setText(itemPrices[1]);
    item3_price_t.setText(itemPrices[2]);
    item4_price_t.setText(itemPrices[3]);
    item5_price_t.setText(itemPrices[4]);
    item1_label_t.setImage(itemLabelImages[0]);
    item2_label_t.setImage(itemLabelImages[1]);
    item3_label_t.setImage(itemLabelImages[2]);
    item4_label_t.setImage(itemLabelImages[3]);
    item5_label_t.setImage(itemLabelImages[4]);
    // setup some python lists for storing info about the mouse_answer_3
    // current position of the mouse:
    mouse_answer_3.x = [];
    mouse_answer_3.y = [];
    mouse_answer_3.leftButton = [];
    mouse_answer_3.midButton = [];
    mouse_answer_3.rightButton = [];
    mouse_answer_3.time = [];
    mouse_answer_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('testTrialRoutine.started', globalClock.getTime());
    testTrialRoutineMaxDuration = null
    // keep track of which components have finished
    testTrialRoutineComponents = [];
    testTrialRoutineComponents.push(instructionTextTrial_t);
    testTrialRoutineComponents.push(item1_img_t);
    testTrialRoutineComponents.push(item2_img_t);
    testTrialRoutineComponents.push(item3_img_t);
    testTrialRoutineComponents.push(item4_img_t);
    testTrialRoutineComponents.push(item5_img_t);
    testTrialRoutineComponents.push(item1_name_t);
    testTrialRoutineComponents.push(item2_name_t);
    testTrialRoutineComponents.push(item3_name_t);
    testTrialRoutineComponents.push(item4_name_t);
    testTrialRoutineComponents.push(item5_name_t);
    testTrialRoutineComponents.push(item1_weight_t);
    testTrialRoutineComponents.push(item2_weight_t);
    testTrialRoutineComponents.push(item3_weight_t);
    testTrialRoutineComponents.push(item4_weight_t);
    testTrialRoutineComponents.push(item5_weight_t);
    testTrialRoutineComponents.push(item1_price_t);
    testTrialRoutineComponents.push(item2_price_t);
    testTrialRoutineComponents.push(item3_price_t);
    testTrialRoutineComponents.push(item4_price_t);
    testTrialRoutineComponents.push(item5_price_t);
    testTrialRoutineComponents.push(item1_label_t);
    testTrialRoutineComponents.push(item2_label_t);
    testTrialRoutineComponents.push(item3_label_t);
    testTrialRoutineComponents.push(item4_label_t);
    testTrialRoutineComponents.push(item5_label_t);
    testTrialRoutineComponents.push(line_3);
    testTrialRoutineComponents.push(basketTitle_3);
    testTrialRoutineComponents.push(nextButtonText_answer_t);
    testTrialRoutineComponents.push(nextButton_t);
    testTrialRoutineComponents.push(buttonTextA_t);
    testTrialRoutineComponents.push(buttonTextB_t);
    testTrialRoutineComponents.push(buttonTextC_t);
    testTrialRoutineComponents.push(buttonTextD_t);
    testTrialRoutineComponents.push(buttonTextE_t);
    testTrialRoutineComponents.push(buttonA_t);
    testTrialRoutineComponents.push(buttonB_t);
    testTrialRoutineComponents.push(buttonC_t);
    testTrialRoutineComponents.push(buttonD_t);
    testTrialRoutineComponents.push(buttonE_t);
    testTrialRoutineComponents.push(mouse_answer_3);
    
    for (const thisComponent of testTrialRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var boxes;
var labels;
function testTrialRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'testTrialRoutine' ---
    // get current time
    t = testTrialRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_11
    boxes = [buttonA_t, buttonB_t, buttonC_t, buttonD_t, buttonE_t];
    buttons = [buttonTextA_t, buttonTextB_t, buttonTextC_t, buttonTextD_t, buttonTextE_t];
    labels = ["A", "B", "C", "D", "E"];
    for (var i, _pj_c = 0, _pj_a = util.range(buttons.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((mouse.isPressedIn(buttons[i]) || mouse.isPressedIn(boxes[i]))) {
            selectedAnswer = labels[i];
            for (var btn, _pj_f = 0, _pj_d = buttons, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                btn = _pj_d[_pj_f];
                btn.color = "black";
            }
            buttons[i].color = "#b30734";
        }
    }
    if ((selectedAnswer !== null)) {
        if (mouse.isPressedIn(nextButton_t)) {
            continueRoutine = false;
        }
    }
    
    if (selectedAnswer !== null && mouse.isPressedIn(nextButton)) {
        responseRT = responseClock.getTime();
        psychoJS.experiment.addData('responseRT', responseRT);
        continueRoutine = false;
    }
    
    
    // *instructionTextTrial_t* updates
    if (t >= 0.0 && instructionTextTrial_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructionTextTrial_t.tStart = t;  // (not accounting for frame time here)
      instructionTextTrial_t.frameNStart = frameN;  // exact frame index
      
      instructionTextTrial_t.setAutoDraw(true);
    }
    
    
    // *item1_img_t* updates
    if (t >= 0.0 && item1_img_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_img_t.tStart = t;  // (not accounting for frame time here)
      item1_img_t.frameNStart = frameN;  // exact frame index
      
      item1_img_t.setAutoDraw(true);
    }
    
    
    // *item2_img_t* updates
    if (t >= 0.0 && item2_img_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_img_t.tStart = t;  // (not accounting for frame time here)
      item2_img_t.frameNStart = frameN;  // exact frame index
      
      item2_img_t.setAutoDraw(true);
    }
    
    
    // *item3_img_t* updates
    if (t >= 0.0 && item3_img_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_img_t.tStart = t;  // (not accounting for frame time here)
      item3_img_t.frameNStart = frameN;  // exact frame index
      
      item3_img_t.setAutoDraw(true);
    }
    
    
    // *item4_img_t* updates
    if (t >= 0.0 && item4_img_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_img_t.tStart = t;  // (not accounting for frame time here)
      item4_img_t.frameNStart = frameN;  // exact frame index
      
      item4_img_t.setAutoDraw(true);
    }
    
    
    // *item5_img_t* updates
    if (t >= 0.0 && item5_img_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_img_t.tStart = t;  // (not accounting for frame time here)
      item5_img_t.frameNStart = frameN;  // exact frame index
      
      item5_img_t.setAutoDraw(true);
    }
    
    
    // *item1_name_t* updates
    if (t >= 0.0 && item1_name_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_name_t.tStart = t;  // (not accounting for frame time here)
      item1_name_t.frameNStart = frameN;  // exact frame index
      
      item1_name_t.setAutoDraw(true);
    }
    
    
    // *item2_name_t* updates
    if (t >= 0.0 && item2_name_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_name_t.tStart = t;  // (not accounting for frame time here)
      item2_name_t.frameNStart = frameN;  // exact frame index
      
      item2_name_t.setAutoDraw(true);
    }
    
    
    // *item3_name_t* updates
    if (t >= 0.0 && item3_name_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_name_t.tStart = t;  // (not accounting for frame time here)
      item3_name_t.frameNStart = frameN;  // exact frame index
      
      item3_name_t.setAutoDraw(true);
    }
    
    
    // *item4_name_t* updates
    if (t >= 0.0 && item4_name_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_name_t.tStart = t;  // (not accounting for frame time here)
      item4_name_t.frameNStart = frameN;  // exact frame index
      
      item4_name_t.setAutoDraw(true);
    }
    
    
    // *item5_name_t* updates
    if (t >= 0.0 && item5_name_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_name_t.tStart = t;  // (not accounting for frame time here)
      item5_name_t.frameNStart = frameN;  // exact frame index
      
      item5_name_t.setAutoDraw(true);
    }
    
    
    // *item1_weight_t* updates
    if (t >= 0.0 && item1_weight_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_weight_t.tStart = t;  // (not accounting for frame time here)
      item1_weight_t.frameNStart = frameN;  // exact frame index
      
      item1_weight_t.setAutoDraw(true);
    }
    
    
    // *item2_weight_t* updates
    if (t >= 0.0 && item2_weight_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_weight_t.tStart = t;  // (not accounting for frame time here)
      item2_weight_t.frameNStart = frameN;  // exact frame index
      
      item2_weight_t.setAutoDraw(true);
    }
    
    
    // *item3_weight_t* updates
    if (t >= 0.0 && item3_weight_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_weight_t.tStart = t;  // (not accounting for frame time here)
      item3_weight_t.frameNStart = frameN;  // exact frame index
      
      item3_weight_t.setAutoDraw(true);
    }
    
    
    // *item4_weight_t* updates
    if (t >= 0.0 && item4_weight_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_weight_t.tStart = t;  // (not accounting for frame time here)
      item4_weight_t.frameNStart = frameN;  // exact frame index
      
      item4_weight_t.setAutoDraw(true);
    }
    
    
    // *item5_weight_t* updates
    if (t >= 0.0 && item5_weight_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_weight_t.tStart = t;  // (not accounting for frame time here)
      item5_weight_t.frameNStart = frameN;  // exact frame index
      
      item5_weight_t.setAutoDraw(true);
    }
    
    
    // *item1_price_t* updates
    if (t >= 0.0 && item1_price_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_price_t.tStart = t;  // (not accounting for frame time here)
      item1_price_t.frameNStart = frameN;  // exact frame index
      
      item1_price_t.setAutoDraw(true);
    }
    
    
    // *item2_price_t* updates
    if (t >= 0.0 && item2_price_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_price_t.tStart = t;  // (not accounting for frame time here)
      item2_price_t.frameNStart = frameN;  // exact frame index
      
      item2_price_t.setAutoDraw(true);
    }
    
    
    // *item3_price_t* updates
    if (t >= 0.0 && item3_price_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_price_t.tStart = t;  // (not accounting for frame time here)
      item3_price_t.frameNStart = frameN;  // exact frame index
      
      item3_price_t.setAutoDraw(true);
    }
    
    
    // *item4_price_t* updates
    if (t >= 0.0 && item4_price_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_price_t.tStart = t;  // (not accounting for frame time here)
      item4_price_t.frameNStart = frameN;  // exact frame index
      
      item4_price_t.setAutoDraw(true);
    }
    
    
    // *item5_price_t* updates
    if (t >= 0.0 && item5_price_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_price_t.tStart = t;  // (not accounting for frame time here)
      item5_price_t.frameNStart = frameN;  // exact frame index
      
      item5_price_t.setAutoDraw(true);
    }
    
    
    // *item1_label_t* updates
    if (t >= 0.0 && item1_label_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_label_t.tStart = t;  // (not accounting for frame time here)
      item1_label_t.frameNStart = frameN;  // exact frame index
      
      item1_label_t.setAutoDraw(true);
    }
    
    
    // *item2_label_t* updates
    if (t >= 0.0 && item2_label_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_label_t.tStart = t;  // (not accounting for frame time here)
      item2_label_t.frameNStart = frameN;  // exact frame index
      
      item2_label_t.setAutoDraw(true);
    }
    
    
    // *item3_label_t* updates
    if (t >= 0.0 && item3_label_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_label_t.tStart = t;  // (not accounting for frame time here)
      item3_label_t.frameNStart = frameN;  // exact frame index
      
      item3_label_t.setAutoDraw(true);
    }
    
    
    // *item4_label_t* updates
    if (t >= 0.0 && item4_label_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_label_t.tStart = t;  // (not accounting for frame time here)
      item4_label_t.frameNStart = frameN;  // exact frame index
      
      item4_label_t.setAutoDraw(true);
    }
    
    
    // *item5_label_t* updates
    if (t >= 0.0 && item5_label_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_label_t.tStart = t;  // (not accounting for frame time here)
      item5_label_t.frameNStart = frameN;  // exact frame index
      
      item5_label_t.setAutoDraw(true);
    }
    
    
    // *line_3* updates
    if (t >= 0.0 && line_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_3.tStart = t;  // (not accounting for frame time here)
      line_3.frameNStart = frameN;  // exact frame index
      
      line_3.setAutoDraw(true);
    }
    
    
    // *basketTitle_3* updates
    if (t >= 0.0 && basketTitle_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      basketTitle_3.tStart = t;  // (not accounting for frame time here)
      basketTitle_3.frameNStart = frameN;  // exact frame index
      
      basketTitle_3.setAutoDraw(true);
    }
    
    
    // *nextButtonText_answer_t* updates
    if (t >= 0.0 && nextButtonText_answer_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonText_answer_t.tStart = t;  // (not accounting for frame time here)
      nextButtonText_answer_t.frameNStart = frameN;  // exact frame index
      
      nextButtonText_answer_t.setAutoDraw(true);
    }
    
    
    // *nextButton_t* updates
    if (t >= 0.0 && nextButton_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_t.tStart = t;  // (not accounting for frame time here)
      nextButton_t.frameNStart = frameN;  // exact frame index
      
      nextButton_t.setAutoDraw(true);
    }
    
    
    // *buttonTextA_t* updates
    if (t >= 0.0 && buttonTextA_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextA_t.tStart = t;  // (not accounting for frame time here)
      buttonTextA_t.frameNStart = frameN;  // exact frame index
      
      buttonTextA_t.setAutoDraw(true);
    }
    
    
    // *buttonTextB_t* updates
    if (t >= 0.0 && buttonTextB_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextB_t.tStart = t;  // (not accounting for frame time here)
      buttonTextB_t.frameNStart = frameN;  // exact frame index
      
      buttonTextB_t.setAutoDraw(true);
    }
    
    
    // *buttonTextC_t* updates
    if (t >= 0.0 && buttonTextC_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextC_t.tStart = t;  // (not accounting for frame time here)
      buttonTextC_t.frameNStart = frameN;  // exact frame index
      
      buttonTextC_t.setAutoDraw(true);
    }
    
    
    // *buttonTextD_t* updates
    if (t >= 0.0 && buttonTextD_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextD_t.tStart = t;  // (not accounting for frame time here)
      buttonTextD_t.frameNStart = frameN;  // exact frame index
      
      buttonTextD_t.setAutoDraw(true);
    }
    
    
    // *buttonTextE_t* updates
    if (t >= 0.0 && buttonTextE_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextE_t.tStart = t;  // (not accounting for frame time here)
      buttonTextE_t.frameNStart = frameN;  // exact frame index
      
      buttonTextE_t.setAutoDraw(true);
    }
    
    
    // *buttonA_t* updates
    if (t >= 0.0 && buttonA_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonA_t.tStart = t;  // (not accounting for frame time here)
      buttonA_t.frameNStart = frameN;  // exact frame index
      
      buttonA_t.setAutoDraw(true);
    }
    
    
    // *buttonB_t* updates
    if (t >= 0.0 && buttonB_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonB_t.tStart = t;  // (not accounting for frame time here)
      buttonB_t.frameNStart = frameN;  // exact frame index
      
      buttonB_t.setAutoDraw(true);
    }
    
    
    // *buttonC_t* updates
    if (t >= 0.0 && buttonC_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonC_t.tStart = t;  // (not accounting for frame time here)
      buttonC_t.frameNStart = frameN;  // exact frame index
      
      buttonC_t.setAutoDraw(true);
    }
    
    
    // *buttonD_t* updates
    if (t >= 0.0 && buttonD_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonD_t.tStart = t;  // (not accounting for frame time here)
      buttonD_t.frameNStart = frameN;  // exact frame index
      
      buttonD_t.setAutoDraw(true);
    }
    
    
    // *buttonE_t* updates
    if (t >= 0.0 && buttonE_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonE_t.tStart = t;  // (not accounting for frame time here)
      buttonE_t.frameNStart = frameN;  // exact frame index
      
      buttonE_t.setAutoDraw(true);
    }
    
    // *mouse_answer_3* updates
    if (t >= 0.0 && mouse_answer_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_answer_3.tStart = t;  // (not accounting for frame time here)
      mouse_answer_3.frameNStart = frameN;  // exact frame index
      
      mouse_answer_3.status = PsychoJS.Status.STARTED;
      mouse_answer_3.mouseClock.reset();
      prevButtonState = mouse_answer_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_answer_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_answer_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_answer_3.clickableObjects = eval([buttonA_t, buttonB_t, buttonC_t, buttonD_t, buttonE_t, nextButton_t])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_answer_3.clickableObjects)) {
              mouse_answer_3.clickableObjects = [mouse_answer_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_answer_3.clickableObjects) {
              if (obj.contains(mouse_answer_3)) {
                  gotValidClick = true;
                  mouse_answer_3.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_answer_3.clicked_name.push(null);
          }
          _mouseXYs = mouse_answer_3.getPos();
          mouse_answer_3.x.push(_mouseXYs[0]);
          mouse_answer_3.y.push(_mouseXYs[1]);
          mouse_answer_3.leftButton.push(_mouseButtons[0]);
          mouse_answer_3.midButton.push(_mouseButtons[1]);
          mouse_answer_3.rightButton.push(_mouseButtons[2]);
          mouse_answer_3.time.push(mouse_answer_3.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of testTrialRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var item_list;
var item_string;
var is_correct;
function testTrialRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'testTrialRoutine' ---
    for (const thisComponent of testTrialRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('testTrialRoutine.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_11
    item_list = function () {
        var _pj_a = [], _pj_b = selected_items;
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var item = _pj_b[_pj_c];
            _pj_a.push(item["item"]);
        }
        return _pj_a;
    }
    .call(this);
    item_string = item_list.join(", ");
    psychoJS.experiment.addData("items", item_string);
    psychoJS.experiment.addData("avg_co2", weighted_average_co2);
    psychoJS.experiment.addData("basketLabel", basket_label);
    psychoJS.experiment.addData("response", selectedAnswer);
    psychoJS.experiment.addData("responseRT", responseRT);
    is_correct = Number.parseInt((selectedAnswer === basket_label));
    psychoJS.experiment.addData("is_correct", is_correct);
    psychoJS.experiment.addData("trialType", "test");
    psychoJS.experiment.addData("scaleUsed", "");
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_answer_3.x', mouse_answer_3.x);
    psychoJS.experiment.addData('mouse_answer_3.y', mouse_answer_3.y);
    psychoJS.experiment.addData('mouse_answer_3.leftButton', mouse_answer_3.leftButton);
    psychoJS.experiment.addData('mouse_answer_3.midButton', mouse_answer_3.midButton);
    psychoJS.experiment.addData('mouse_answer_3.rightButton', mouse_answer_3.rightButton);
    psychoJS.experiment.addData('mouse_answer_3.time', mouse_answer_3.time);
    psychoJS.experiment.addData('mouse_answer_3.clicked_name', mouse_answer_3.clicked_name);
    
    // the Routine "testTrialRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var certaintyRoutineMaxDurationReached;
var certaintyRoutineMaxDuration;
var certaintyRoutineComponents;
function certaintyRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'certaintyRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    certaintyRoutineClock.reset();
    routineTimer.reset();
    certaintyRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    certaintySlider.reset()
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('certaintyRoutine.started', globalClock.getTime());
    certaintyRoutineMaxDuration = null
    // keep track of which components have finished
    certaintyRoutineComponents = [];
    certaintyRoutineComponents.push(text_3);
    certaintyRoutineComponents.push(certaintySlider);
    certaintyRoutineComponents.push(nextButtonText);
    certaintyRoutineComponents.push(nextButtonRectangle);
    certaintyRoutineComponents.push(mouse);
    
    for (const thisComponent of certaintyRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function certaintyRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'certaintyRoutine' ---
    // get current time
    t = certaintyRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_4
    if ((certaintySlider.getRating() !== null)) {
        if ((mouse.isPressedIn(nextButtonText) || mouse.isPressedIn(nextButtonRectangle))) {
            continueRoutine = false;
        }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *certaintySlider* updates
    if (t >= 0.0 && certaintySlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      certaintySlider.tStart = t;  // (not accounting for frame time here)
      certaintySlider.frameNStart = frameN;  // exact frame index
      
      certaintySlider.setAutoDraw(true);
    }
    
    
    // *nextButtonText* updates
    if (t >= 0.0 && nextButtonText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonText.tStart = t;  // (not accounting for frame time here)
      nextButtonText.frameNStart = frameN;  // exact frame index
      
      nextButtonText.setAutoDraw(true);
    }
    
    
    // *nextButtonRectangle* updates
    if (t >= 0.0 && nextButtonRectangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonRectangle.tStart = t;  // (not accounting for frame time here)
      nextButtonRectangle.frameNStart = frameN;  // exact frame index
      
      nextButtonRectangle.setAutoDraw(true);
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([nextButtonText, nextButtonRectangle])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of certaintyRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function certaintyRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'certaintyRoutine' ---
    for (const thisComponent of certaintyRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('certaintyRoutine.stopped', globalClock.getTime());
    psychoJS.experiment.addData('certaintySlider.response', certaintySlider.getRating());
    psychoJS.experiment.addData('certaintySlider.rt', certaintySlider.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "certaintyRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var beforeBaselineRoutineMaxDurationReached;
var beforeBaselineRoutineMaxDuration;
var beforeBaselineRoutineComponents;
function beforeBaselineRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'beforeBaselineRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    beforeBaselineRoutineClock.reset();
    routineTimer.reset();
    beforeBaselineRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_10
    text_5.alignText = "left";
    
    // setup some python lists for storing info about the mouseIntruct_3
    // current position of the mouse:
    mouseIntruct_3.x = [];
    mouseIntruct_3.y = [];
    mouseIntruct_3.leftButton = [];
    mouseIntruct_3.midButton = [];
    mouseIntruct_3.rightButton = [];
    mouseIntruct_3.time = [];
    mouseIntruct_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('beforeBaselineRoutine.started', globalClock.getTime());
    beforeBaselineRoutineMaxDuration = null
    // keep track of which components have finished
    beforeBaselineRoutineComponents = [];
    beforeBaselineRoutineComponents.push(text_5);
    beforeBaselineRoutineComponents.push(nextButtonTextInstruct_3);
    beforeBaselineRoutineComponents.push(nextButtonRectInstruct_3);
    beforeBaselineRoutineComponents.push(mouseIntruct_3);
    
    for (const thisComponent of beforeBaselineRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function beforeBaselineRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'beforeBaselineRoutine' ---
    // get current time
    t = beforeBaselineRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *nextButtonTextInstruct_3* updates
    if (t >= 0.0 && nextButtonTextInstruct_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonTextInstruct_3.tStart = t;  // (not accounting for frame time here)
      nextButtonTextInstruct_3.frameNStart = frameN;  // exact frame index
      
      nextButtonTextInstruct_3.setAutoDraw(true);
    }
    
    
    // *nextButtonRectInstruct_3* updates
    if (t >= 0.0 && nextButtonRectInstruct_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonRectInstruct_3.tStart = t;  // (not accounting for frame time here)
      nextButtonRectInstruct_3.frameNStart = frameN;  // exact frame index
      
      nextButtonRectInstruct_3.setAutoDraw(true);
    }
    
    // *mouseIntruct_3* updates
    if (t >= 0.0 && mouseIntruct_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseIntruct_3.tStart = t;  // (not accounting for frame time here)
      mouseIntruct_3.frameNStart = frameN;  // exact frame index
      
      mouseIntruct_3.status = PsychoJS.Status.STARTED;
      mouseIntruct_3.mouseClock.reset();
      prevButtonState = mouseIntruct_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseIntruct_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseIntruct_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouseIntruct_3.clickableObjects = eval([nextButtonTextInstruct_3, nextButtonRectInstruct_3])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouseIntruct_3.clickableObjects)) {
              mouseIntruct_3.clickableObjects = [mouseIntruct_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouseIntruct_3.clickableObjects) {
              if (obj.contains(mouseIntruct_3)) {
                  gotValidClick = true;
                  mouseIntruct_3.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouseIntruct_3.clicked_name.push(null);
          }
          _mouseXYs = mouseIntruct_3.getPos();
          mouseIntruct_3.x.push(_mouseXYs[0]);
          mouseIntruct_3.y.push(_mouseXYs[1]);
          mouseIntruct_3.leftButton.push(_mouseButtons[0]);
          mouseIntruct_3.midButton.push(_mouseButtons[1]);
          mouseIntruct_3.rightButton.push(_mouseButtons[2]);
          mouseIntruct_3.time.push(mouseIntruct_3.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of beforeBaselineRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beforeBaselineRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'beforeBaselineRoutine' ---
    for (const thisComponent of beforeBaselineRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('beforeBaselineRoutine.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouseIntruct_3.x', mouseIntruct_3.x);
    psychoJS.experiment.addData('mouseIntruct_3.y', mouseIntruct_3.y);
    psychoJS.experiment.addData('mouseIntruct_3.leftButton', mouseIntruct_3.leftButton);
    psychoJS.experiment.addData('mouseIntruct_3.midButton', mouseIntruct_3.midButton);
    psychoJS.experiment.addData('mouseIntruct_3.rightButton', mouseIntruct_3.rightButton);
    psychoJS.experiment.addData('mouseIntruct_3.time', mouseIntruct_3.time);
    psychoJS.experiment.addData('mouseIntruct_3.clicked_name', mouseIntruct_3.clicked_name);
    
    // the Routine "beforeBaselineRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var baselineTrialRoutineMaxDurationReached;
var baselineTrialRoutineMaxDuration;
var baselineTrialRoutineComponents;
function baselineTrialRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'baselineTrialRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    baselineTrialRoutineClock.reset();
    routineTimer.reset();
    baselineTrialRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_7
    selected_items = all_items
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 5);
    
    // Extract attributes
    itemImages = selected_items.map(item => item["itemImage"]);
    itemNames = selected_items.map(item => item["item"]);
    itemWeightsText = selected_items.map(item => item["itemWeight"]);
    itemPrices = selected_items.map(item => item["price"]);
    itemWeights = selected_items.map(item => parseFloat(item["weight"]));
    itemCO2 = selected_items.map(item => parseFloat(item["co2"]));
    itemLabelImages = selected_items.map(item => item["labelImage"]);
    
    // Compute weighted CO₂
    total_weight = 0;
    weighted_sum = 0;
    for (let i = 0; i < itemWeights.length; i++) {
        total_weight += itemWeights[i];
        weighted_sum += itemWeights[i] * itemCO2[i];
    }
    weighted_average_co2 = (total_weight > 0) ? (weighted_sum / total_weight) : 0;
    
    // Determine correct climate label
    if (weighted_average_co2 <= 1.1) {
        basket_label = "A";
    } else if (weighted_average_co2 <= 2.5) {
        basket_label = "B";
    } else if (weighted_average_co2 <= 5) {
        basket_label = "C";
    } else if (weighted_average_co2 <= 10) {
        basket_label = "D";
    } else {
        basket_label = "E";
    }
    
    // Align text: left
    let leftText = [item1_name_b, item2_name_b, item3_name_b, item4_name_b, item5_name_b,
                    item1_weight_b, item2_weight_b, item3_weight_b, item4_weight_b, item5_weight_b];
    for (let i = 0; i < leftText.length; i++) {
        leftText[i].alignText = "left";
    }
    
    // Align text: right
    let rightText = [item1_price_b, item2_price_b, item3_price_b, item4_price_b, item5_price_b];
    for (let i = 0; i < rightText.length; i++) {
        rightText[i].alignText = "right";
    }
    
    // Reset button styles
    selectedAnswer = null;
    buttons = [buttonTextA_b, buttonTextB_b, buttonTextC_b, buttonTextD_b, buttonTextE_b];
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].color = "black";
    }
    
    // Start clock
    if (typeof responseClock === 'undefined') {
        responseClock = new util.Clock();
    } else {
        responseClock.reset();
    }
    responseRT = null;
    
    
    item1_img_b.setImage(itemImages[0]);
    item2_img_b.setImage(itemImages[1]);
    item3_img_b.setImage(itemImages[2]);
    item4_img_b.setImage(itemImages[3]);
    item5_img_b.setImage(itemImages[4]);
    item1_name_b.setText(itemNames[0]);
    item2_name_b.setText(itemNames[1]);
    item3_name_b.setText(itemNames[2]);
    item4_name_b.setText(itemNames[3]);
    item5_name_b.setText(itemNames[4]);
    item1_weight_b.setText(itemWeightsText[0]);
    item2_weight_b.setText(itemWeightsText[1]);
    item3_weight_b.setText(itemWeightsText[2]);
    item4_weight_b.setText(itemWeightsText[3]);
    item5_weight_b.setText(itemWeightsText[4]);
    item1_price_b.setText(itemPrices[0]);
    item2_price_b.setText(itemPrices[1]);
    item3_price_b.setText(itemPrices[2]);
    item4_price_b.setText(itemPrices[3]);
    item5_price_b.setText(itemPrices[4]);
    item1_label_b.setImage(itemLabelImages[0]);
    item2_label_b.setImage(itemLabelImages[1]);
    item3_label_b.setImage(itemLabelImages[2]);
    item4_label_b.setImage(itemLabelImages[3]);
    item5_label_b.setImage(itemLabelImages[4]);
    // setup some python lists for storing info about the mouse_answer_2
    // current position of the mouse:
    mouse_answer_2.x = [];
    mouse_answer_2.y = [];
    mouse_answer_2.leftButton = [];
    mouse_answer_2.midButton = [];
    mouse_answer_2.rightButton = [];
    mouse_answer_2.time = [];
    mouse_answer_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('baselineTrialRoutine.started', globalClock.getTime());
    baselineTrialRoutineMaxDuration = null
    // keep track of which components have finished
    baselineTrialRoutineComponents = [];
    baselineTrialRoutineComponents.push(instructionTextTrial_b);
    baselineTrialRoutineComponents.push(item1_img_b);
    baselineTrialRoutineComponents.push(item2_img_b);
    baselineTrialRoutineComponents.push(item3_img_b);
    baselineTrialRoutineComponents.push(item4_img_b);
    baselineTrialRoutineComponents.push(item5_img_b);
    baselineTrialRoutineComponents.push(item1_name_b);
    baselineTrialRoutineComponents.push(item2_name_b);
    baselineTrialRoutineComponents.push(item3_name_b);
    baselineTrialRoutineComponents.push(item4_name_b);
    baselineTrialRoutineComponents.push(item5_name_b);
    baselineTrialRoutineComponents.push(item1_weight_b);
    baselineTrialRoutineComponents.push(item2_weight_b);
    baselineTrialRoutineComponents.push(item3_weight_b);
    baselineTrialRoutineComponents.push(item4_weight_b);
    baselineTrialRoutineComponents.push(item5_weight_b);
    baselineTrialRoutineComponents.push(item1_price_b);
    baselineTrialRoutineComponents.push(item2_price_b);
    baselineTrialRoutineComponents.push(item3_price_b);
    baselineTrialRoutineComponents.push(item4_price_b);
    baselineTrialRoutineComponents.push(item5_price_b);
    baselineTrialRoutineComponents.push(item1_label_b);
    baselineTrialRoutineComponents.push(item2_label_b);
    baselineTrialRoutineComponents.push(item3_label_b);
    baselineTrialRoutineComponents.push(item4_label_b);
    baselineTrialRoutineComponents.push(item5_label_b);
    baselineTrialRoutineComponents.push(line_2);
    baselineTrialRoutineComponents.push(basketTitle_2);
    baselineTrialRoutineComponents.push(nextButtonText_answer_b);
    baselineTrialRoutineComponents.push(nextButton_b);
    baselineTrialRoutineComponents.push(buttonTextA_b);
    baselineTrialRoutineComponents.push(buttonTextB_b);
    baselineTrialRoutineComponents.push(buttonTextC_b);
    baselineTrialRoutineComponents.push(buttonTextD_b);
    baselineTrialRoutineComponents.push(buttonTextE_b);
    baselineTrialRoutineComponents.push(buttonA_b);
    baselineTrialRoutineComponents.push(buttonB_b);
    baselineTrialRoutineComponents.push(buttonC_b);
    baselineTrialRoutineComponents.push(buttonD_b);
    baselineTrialRoutineComponents.push(buttonE_b);
    baselineTrialRoutineComponents.push(mouse_answer_2);
    
    for (const thisComponent of baselineTrialRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function baselineTrialRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'baselineTrialRoutine' ---
    // get current time
    t = baselineTrialRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_7
    boxes = [buttonA_b, buttonB_b, buttonC_b, buttonD_b, buttonE_b];
    buttons = [buttonTextA_b, buttonTextB_b, buttonTextC_b, buttonTextD_b, buttonTextE_b];
    labels = ["A", "B", "C", "D", "E"];
    for (var i, _pj_c = 0, _pj_a = util.range(buttons.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((mouse.isPressedIn(buttons[i]) || mouse.isPressedIn(boxes[i]))) {
            selectedAnswer = labels[i];
            for (var btn, _pj_f = 0, _pj_d = buttons, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                btn = _pj_d[_pj_f];
                btn.color = "black";
            }
            buttons[i].color = "#b30734";
        }
    }
    if ((selectedAnswer !== null)) {
        if (mouse.isPressedIn(nextButton_b)) {
            continueRoutine = false;
        }
    }
    
    if (selectedAnswer !== null && mouse.isPressedIn(nextButton)) {
        responseRT = responseClock.getTime();
        psychoJS.experiment.addData('responseRT', responseRT);
        continueRoutine = false;
    }
    
    
    
    // *instructionTextTrial_b* updates
    if (t >= 0.0 && instructionTextTrial_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructionTextTrial_b.tStart = t;  // (not accounting for frame time here)
      instructionTextTrial_b.frameNStart = frameN;  // exact frame index
      
      instructionTextTrial_b.setAutoDraw(true);
    }
    
    
    // *item1_img_b* updates
    if (t >= 0.0 && item1_img_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_img_b.tStart = t;  // (not accounting for frame time here)
      item1_img_b.frameNStart = frameN;  // exact frame index
      
      item1_img_b.setAutoDraw(true);
    }
    
    
    // *item2_img_b* updates
    if (t >= 0.0 && item2_img_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_img_b.tStart = t;  // (not accounting for frame time here)
      item2_img_b.frameNStart = frameN;  // exact frame index
      
      item2_img_b.setAutoDraw(true);
    }
    
    
    // *item3_img_b* updates
    if (t >= 0.0 && item3_img_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_img_b.tStart = t;  // (not accounting for frame time here)
      item3_img_b.frameNStart = frameN;  // exact frame index
      
      item3_img_b.setAutoDraw(true);
    }
    
    
    // *item4_img_b* updates
    if (t >= 0.0 && item4_img_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_img_b.tStart = t;  // (not accounting for frame time here)
      item4_img_b.frameNStart = frameN;  // exact frame index
      
      item4_img_b.setAutoDraw(true);
    }
    
    
    // *item5_img_b* updates
    if (t >= 0.0 && item5_img_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_img_b.tStart = t;  // (not accounting for frame time here)
      item5_img_b.frameNStart = frameN;  // exact frame index
      
      item5_img_b.setAutoDraw(true);
    }
    
    
    // *item1_name_b* updates
    if (t >= 0.0 && item1_name_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_name_b.tStart = t;  // (not accounting for frame time here)
      item1_name_b.frameNStart = frameN;  // exact frame index
      
      item1_name_b.setAutoDraw(true);
    }
    
    
    // *item2_name_b* updates
    if (t >= 0.0 && item2_name_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_name_b.tStart = t;  // (not accounting for frame time here)
      item2_name_b.frameNStart = frameN;  // exact frame index
      
      item2_name_b.setAutoDraw(true);
    }
    
    
    // *item3_name_b* updates
    if (t >= 0.0 && item3_name_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_name_b.tStart = t;  // (not accounting for frame time here)
      item3_name_b.frameNStart = frameN;  // exact frame index
      
      item3_name_b.setAutoDraw(true);
    }
    
    
    // *item4_name_b* updates
    if (t >= 0.0 && item4_name_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_name_b.tStart = t;  // (not accounting for frame time here)
      item4_name_b.frameNStart = frameN;  // exact frame index
      
      item4_name_b.setAutoDraw(true);
    }
    
    
    // *item5_name_b* updates
    if (t >= 0.0 && item5_name_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_name_b.tStart = t;  // (not accounting for frame time here)
      item5_name_b.frameNStart = frameN;  // exact frame index
      
      item5_name_b.setAutoDraw(true);
    }
    
    
    // *item1_weight_b* updates
    if (t >= 0.0 && item1_weight_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_weight_b.tStart = t;  // (not accounting for frame time here)
      item1_weight_b.frameNStart = frameN;  // exact frame index
      
      item1_weight_b.setAutoDraw(true);
    }
    
    
    // *item2_weight_b* updates
    if (t >= 0.0 && item2_weight_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_weight_b.tStart = t;  // (not accounting for frame time here)
      item2_weight_b.frameNStart = frameN;  // exact frame index
      
      item2_weight_b.setAutoDraw(true);
    }
    
    
    // *item3_weight_b* updates
    if (t >= 0.0 && item3_weight_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_weight_b.tStart = t;  // (not accounting for frame time here)
      item3_weight_b.frameNStart = frameN;  // exact frame index
      
      item3_weight_b.setAutoDraw(true);
    }
    
    
    // *item4_weight_b* updates
    if (t >= 0.0 && item4_weight_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_weight_b.tStart = t;  // (not accounting for frame time here)
      item4_weight_b.frameNStart = frameN;  // exact frame index
      
      item4_weight_b.setAutoDraw(true);
    }
    
    
    // *item5_weight_b* updates
    if (t >= 0.0 && item5_weight_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_weight_b.tStart = t;  // (not accounting for frame time here)
      item5_weight_b.frameNStart = frameN;  // exact frame index
      
      item5_weight_b.setAutoDraw(true);
    }
    
    
    // *item1_price_b* updates
    if (t >= 0.0 && item1_price_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_price_b.tStart = t;  // (not accounting for frame time here)
      item1_price_b.frameNStart = frameN;  // exact frame index
      
      item1_price_b.setAutoDraw(true);
    }
    
    
    // *item2_price_b* updates
    if (t >= 0.0 && item2_price_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_price_b.tStart = t;  // (not accounting for frame time here)
      item2_price_b.frameNStart = frameN;  // exact frame index
      
      item2_price_b.setAutoDraw(true);
    }
    
    
    // *item3_price_b* updates
    if (t >= 0.0 && item3_price_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_price_b.tStart = t;  // (not accounting for frame time here)
      item3_price_b.frameNStart = frameN;  // exact frame index
      
      item3_price_b.setAutoDraw(true);
    }
    
    
    // *item4_price_b* updates
    if (t >= 0.0 && item4_price_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_price_b.tStart = t;  // (not accounting for frame time here)
      item4_price_b.frameNStart = frameN;  // exact frame index
      
      item4_price_b.setAutoDraw(true);
    }
    
    
    // *item5_price_b* updates
    if (t >= 0.0 && item5_price_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_price_b.tStart = t;  // (not accounting for frame time here)
      item5_price_b.frameNStart = frameN;  // exact frame index
      
      item5_price_b.setAutoDraw(true);
    }
    
    
    // *item1_label_b* updates
    if (t >= 0.0 && item1_label_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_label_b.tStart = t;  // (not accounting for frame time here)
      item1_label_b.frameNStart = frameN;  // exact frame index
      
      item1_label_b.setAutoDraw(true);
    }
    
    
    // *item2_label_b* updates
    if (t >= 0.0 && item2_label_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_label_b.tStart = t;  // (not accounting for frame time here)
      item2_label_b.frameNStart = frameN;  // exact frame index
      
      item2_label_b.setAutoDraw(true);
    }
    
    
    // *item3_label_b* updates
    if (t >= 0.0 && item3_label_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_label_b.tStart = t;  // (not accounting for frame time here)
      item3_label_b.frameNStart = frameN;  // exact frame index
      
      item3_label_b.setAutoDraw(true);
    }
    
    
    // *item4_label_b* updates
    if (t >= 0.0 && item4_label_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_label_b.tStart = t;  // (not accounting for frame time here)
      item4_label_b.frameNStart = frameN;  // exact frame index
      
      item4_label_b.setAutoDraw(true);
    }
    
    
    // *item5_label_b* updates
    if (t >= 0.0 && item5_label_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_label_b.tStart = t;  // (not accounting for frame time here)
      item5_label_b.frameNStart = frameN;  // exact frame index
      
      item5_label_b.setAutoDraw(true);
    }
    
    
    // *line_2* updates
    if (t >= 0.0 && line_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line_2.tStart = t;  // (not accounting for frame time here)
      line_2.frameNStart = frameN;  // exact frame index
      
      line_2.setAutoDraw(true);
    }
    
    
    // *basketTitle_2* updates
    if (t >= 0.0 && basketTitle_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      basketTitle_2.tStart = t;  // (not accounting for frame time here)
      basketTitle_2.frameNStart = frameN;  // exact frame index
      
      basketTitle_2.setAutoDraw(true);
    }
    
    
    // *nextButtonText_answer_b* updates
    if (t >= 0.0 && nextButtonText_answer_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonText_answer_b.tStart = t;  // (not accounting for frame time here)
      nextButtonText_answer_b.frameNStart = frameN;  // exact frame index
      
      nextButtonText_answer_b.setAutoDraw(true);
    }
    
    
    // *nextButton_b* updates
    if (t >= 0.0 && nextButton_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_b.tStart = t;  // (not accounting for frame time here)
      nextButton_b.frameNStart = frameN;  // exact frame index
      
      nextButton_b.setAutoDraw(true);
    }
    
    
    // *buttonTextA_b* updates
    if (t >= 0.0 && buttonTextA_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextA_b.tStart = t;  // (not accounting for frame time here)
      buttonTextA_b.frameNStart = frameN;  // exact frame index
      
      buttonTextA_b.setAutoDraw(true);
    }
    
    
    // *buttonTextB_b* updates
    if (t >= 0.0 && buttonTextB_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextB_b.tStart = t;  // (not accounting for frame time here)
      buttonTextB_b.frameNStart = frameN;  // exact frame index
      
      buttonTextB_b.setAutoDraw(true);
    }
    
    
    // *buttonTextC_b* updates
    if (t >= 0.0 && buttonTextC_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextC_b.tStart = t;  // (not accounting for frame time here)
      buttonTextC_b.frameNStart = frameN;  // exact frame index
      
      buttonTextC_b.setAutoDraw(true);
    }
    
    
    // *buttonTextD_b* updates
    if (t >= 0.0 && buttonTextD_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextD_b.tStart = t;  // (not accounting for frame time here)
      buttonTextD_b.frameNStart = frameN;  // exact frame index
      
      buttonTextD_b.setAutoDraw(true);
    }
    
    
    // *buttonTextE_b* updates
    if (t >= 0.0 && buttonTextE_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextE_b.tStart = t;  // (not accounting for frame time here)
      buttonTextE_b.frameNStart = frameN;  // exact frame index
      
      buttonTextE_b.setAutoDraw(true);
    }
    
    
    // *buttonA_b* updates
    if (t >= 0.0 && buttonA_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonA_b.tStart = t;  // (not accounting for frame time here)
      buttonA_b.frameNStart = frameN;  // exact frame index
      
      buttonA_b.setAutoDraw(true);
    }
    
    
    // *buttonB_b* updates
    if (t >= 0.0 && buttonB_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonB_b.tStart = t;  // (not accounting for frame time here)
      buttonB_b.frameNStart = frameN;  // exact frame index
      
      buttonB_b.setAutoDraw(true);
    }
    
    
    // *buttonC_b* updates
    if (t >= 0.0 && buttonC_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonC_b.tStart = t;  // (not accounting for frame time here)
      buttonC_b.frameNStart = frameN;  // exact frame index
      
      buttonC_b.setAutoDraw(true);
    }
    
    
    // *buttonD_b* updates
    if (t >= 0.0 && buttonD_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonD_b.tStart = t;  // (not accounting for frame time here)
      buttonD_b.frameNStart = frameN;  // exact frame index
      
      buttonD_b.setAutoDraw(true);
    }
    
    
    // *buttonE_b* updates
    if (t >= 0.0 && buttonE_b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonE_b.tStart = t;  // (not accounting for frame time here)
      buttonE_b.frameNStart = frameN;  // exact frame index
      
      buttonE_b.setAutoDraw(true);
    }
    
    // *mouse_answer_2* updates
    if (t >= 0.0 && mouse_answer_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_answer_2.tStart = t;  // (not accounting for frame time here)
      mouse_answer_2.frameNStart = frameN;  // exact frame index
      
      mouse_answer_2.status = PsychoJS.Status.STARTED;
      mouse_answer_2.mouseClock.reset();
      prevButtonState = mouse_answer_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_answer_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_answer_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_answer_2.clickableObjects = eval([buttonA, buttonB, buttonC, buttonD, buttonE, nextButton])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_answer_2.clickableObjects)) {
              mouse_answer_2.clickableObjects = [mouse_answer_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_answer_2.clickableObjects) {
              if (obj.contains(mouse_answer_2)) {
                  gotValidClick = true;
                  mouse_answer_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_answer_2.clicked_name.push(null);
          }
          _mouseXYs = mouse_answer_2.getPos();
          mouse_answer_2.x.push(_mouseXYs[0]);
          mouse_answer_2.y.push(_mouseXYs[1]);
          mouse_answer_2.leftButton.push(_mouseButtons[0]);
          mouse_answer_2.midButton.push(_mouseButtons[1]);
          mouse_answer_2.rightButton.push(_mouseButtons[2]);
          mouse_answer_2.time.push(mouse_answer_2.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of baselineTrialRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function baselineTrialRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'baselineTrialRoutine' ---
    for (const thisComponent of baselineTrialRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('baselineTrialRoutine.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_7
    item_list = function () {
        var _pj_a = [], _pj_b = selected_items;
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var item = _pj_b[_pj_c];
            _pj_a.push(item["item"]);
        }
        return _pj_a;
    }
    .call(this);
    item_string = item_list.join(", ");
    psychoJS.experiment.addData("items", item_string);
    psychoJS.experiment.addData("avg_co2", weighted_average_co2);
    psychoJS.experiment.addData("basketLabel", basket_label);
    psychoJS.experiment.addData("response", selectedAnswer);
    psychoJS.experiment.addData("responseRT", responseRT);
    is_correct = Number.parseInt((selectedAnswer === basket_label));
    psychoJS.experiment.addData("is_correct", is_correct);
    psychoJS.experiment.addData("trialType", "baseline");
    psychoJS.experiment.addData("scaleUsed", "");
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_answer_2.x', mouse_answer_2.x);
    psychoJS.experiment.addData('mouse_answer_2.y', mouse_answer_2.y);
    psychoJS.experiment.addData('mouse_answer_2.leftButton', mouse_answer_2.leftButton);
    psychoJS.experiment.addData('mouse_answer_2.midButton', mouse_answer_2.midButton);
    psychoJS.experiment.addData('mouse_answer_2.rightButton', mouse_answer_2.rightButton);
    psychoJS.experiment.addData('mouse_answer_2.time', mouse_answer_2.time);
    psychoJS.experiment.addData('mouse_answer_2.clicked_name', mouse_answer_2.clicked_name);
    
    // the Routine "baselineTrialRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var assignConditionMaxDurationReached;
var assignConditionMaxDuration;
var assignConditionComponents;
function assignConditionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'assignCondition' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    assignConditionClock.reset();
    routineTimer.reset();
    assignConditionMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('assignCondition.started', globalClock.getTime());
    assignConditionMaxDuration = null
    // keep track of which components have finished
    assignConditionComponents = [];
    
    for (const thisComponent of assignConditionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function assignConditionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'assignCondition' ---
    // get current time
    t = assignConditionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of assignConditionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function assignConditionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'assignCondition' ---
    for (const thisComponent of assignConditionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('assignCondition.stopped', globalClock.getTime());
    // the Routine "assignCondition" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var experimentalTrialRoutineMaxDurationReached;
var itemLabels;
var experimentalTrialRoutineMaxDuration;
var experimentalTrialRoutineComponents;
function experimentalTrialRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'experimentalTrialRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    experimentalTrialRoutineClock.reset();
    routineTimer.reset();
    experimentalTrialRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    selected_items = all_items
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      .slice(0, 5);
    
    // Extract item attributes
    itemImages = selected_items.map(item => item.itemImage);
    itemNames = selected_items.map(item => item.item);
    itemWeightsText = selected_items.map(item => item.itemWeight);
    itemPrices = selected_items.map(item => item.price);
    itemWeights = selected_items.map(item => parseFloat(item.weight));
    itemCO2 = selected_items.map(item => parseFloat(item.co2));
    itemLabels = selected_items.map(item => item.label);
    itemLabelImages = selected_items.map(item => item.labelImage);
    
    // Compute weighted CO₂ impact
    let total_weight = itemWeights.reduce((a, b) => a + b, 0);
    let weighted_sum = 0;
    for (let i = 0; i < itemWeights.length; i++) {
        weighted_sum += itemWeights[i] * itemCO2[i];
    }
    weighted_average_co2 = (total_weight > 0) ? (weighted_sum / total_weight) : 0;
    
    // Determine basket label
    if (weighted_average_co2 <= 1.1) {
        basket_label = "A";
    } else if (weighted_average_co2 <= 2.5) {
        basket_label = "B";
    } else if (weighted_average_co2 <= 5) {
        basket_label = "C";
    } else if (weighted_average_co2 <= 10) {
        basket_label = "D";
    } else {
        basket_label = "E";
    }
    
    // Show scale image
    //scale.setImage(scaleImage);
    
    // Align text (left for names/weights, right for prices)
    [item1_name, item2_name, item3_name, item4_name, item5_name,
     item1_weight, item2_weight, item3_weight, item4_weight, item5_weight].forEach(comp => {
        comp.alignText = "left";
    });
    
    [item1_price, item2_price, item3_price, item4_price, item5_price].forEach(comp => {
        comp.alignText = "right";
    });
    
    // Reset button selection
    selectedAnswer = null;
    buttons = [buttonTextA, buttonTextB, buttonTextC, buttonTextD, buttonTextE];
    buttons.forEach(btn => {
        btn.color = "black";
    });
    
    // Start clock
    if (typeof responseClock === 'undefined') {
        responseClock = new util.Clock();
    } else {
     responseClock.reset();
    }
    responseRT = null;
    
    item1_img.setImage(itemImages[0]);
    item2_img.setImage(itemImages[1]);
    item3_img.setImage(itemImages[2]);
    item4_img.setImage(itemImages[3]);
    item5_img.setImage(itemImages[4]);
    item1_name.setText(itemNames[0]);
    item2_name.setText(itemNames[1]);
    item3_name.setText(itemNames[2]);
    item4_name.setText(itemNames[3]);
    item5_name.setText(itemNames[4]);
    item1_weight.setText(itemWeightsText[0]);
    item2_weight.setText(itemWeightsText[1]);
    item3_weight.setText(itemWeightsText[2]);
    item4_weight.setText(itemWeightsText[3]);
    item5_weight.setText(itemWeightsText[4]);
    item1_price.setText(itemPrices[0]);
    item2_price.setText(itemPrices[1]);
    item3_price.setText(itemPrices[2]);
    item4_price.setText(itemPrices[3]);
    item5_price.setText(itemPrices[4]);
    item1_label.setImage(itemLabelImages[0]);
    item2_label.setImage(itemLabelImages[1]);
    item3_label.setImage(itemLabelImages[2]);
    item4_label.setImage(itemLabelImages[3]);
    item5_label.setImage(itemLabelImages[4]);
    scale.setImage(scaleImage);
    // setup some python lists for storing info about the mouse_answer
    // current position of the mouse:
    mouse_answer.x = [];
    mouse_answer.y = [];
    mouse_answer.leftButton = [];
    mouse_answer.midButton = [];
    mouse_answer.rightButton = [];
    mouse_answer.time = [];
    mouse_answer.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('experimentalTrialRoutine.started', globalClock.getTime());
    experimentalTrialRoutineMaxDuration = null
    // keep track of which components have finished
    experimentalTrialRoutineComponents = [];
    experimentalTrialRoutineComponents.push(instructionTextTrial);
    experimentalTrialRoutineComponents.push(item1_img);
    experimentalTrialRoutineComponents.push(item2_img);
    experimentalTrialRoutineComponents.push(item3_img);
    experimentalTrialRoutineComponents.push(item4_img);
    experimentalTrialRoutineComponents.push(item5_img);
    experimentalTrialRoutineComponents.push(item1_name);
    experimentalTrialRoutineComponents.push(item2_name);
    experimentalTrialRoutineComponents.push(item3_name);
    experimentalTrialRoutineComponents.push(item4_name);
    experimentalTrialRoutineComponents.push(item5_name);
    experimentalTrialRoutineComponents.push(item1_weight);
    experimentalTrialRoutineComponents.push(item2_weight);
    experimentalTrialRoutineComponents.push(item3_weight);
    experimentalTrialRoutineComponents.push(item4_weight);
    experimentalTrialRoutineComponents.push(item5_weight);
    experimentalTrialRoutineComponents.push(item1_price);
    experimentalTrialRoutineComponents.push(item2_price);
    experimentalTrialRoutineComponents.push(item3_price);
    experimentalTrialRoutineComponents.push(item4_price);
    experimentalTrialRoutineComponents.push(item5_price);
    experimentalTrialRoutineComponents.push(item1_label);
    experimentalTrialRoutineComponents.push(item2_label);
    experimentalTrialRoutineComponents.push(item3_label);
    experimentalTrialRoutineComponents.push(item4_label);
    experimentalTrialRoutineComponents.push(item5_label);
    experimentalTrialRoutineComponents.push(scale);
    experimentalTrialRoutineComponents.push(line);
    experimentalTrialRoutineComponents.push(basketTitle);
    experimentalTrialRoutineComponents.push(nextButtonText_answer);
    experimentalTrialRoutineComponents.push(nextButton);
    experimentalTrialRoutineComponents.push(buttonTextA);
    experimentalTrialRoutineComponents.push(buttonTextB);
    experimentalTrialRoutineComponents.push(buttonTextC);
    experimentalTrialRoutineComponents.push(buttonTextD);
    experimentalTrialRoutineComponents.push(buttonTextE);
    experimentalTrialRoutineComponents.push(buttonA);
    experimentalTrialRoutineComponents.push(buttonB);
    experimentalTrialRoutineComponents.push(buttonC);
    experimentalTrialRoutineComponents.push(buttonD);
    experimentalTrialRoutineComponents.push(buttonE);
    experimentalTrialRoutineComponents.push(mouse_answer);
    
    for (const thisComponent of experimentalTrialRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function experimentalTrialRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'experimentalTrialRoutine' ---
    // get current time
    t = experimentalTrialRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    boxes = [buttonA, buttonB, buttonC, buttonD, buttonE];
    buttons = [buttonTextA, buttonTextB, buttonTextC, buttonTextD, buttonTextE];
    labels = ["A", "B", "C", "D", "E"];
    for (var i, _pj_c = 0, _pj_a = util.range(buttons.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if ((mouse.isPressedIn(buttons[i]) || mouse.isPressedIn(boxes[i]))) {
            selectedAnswer = labels[i];
            for (var btn, _pj_f = 0, _pj_d = buttons, _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
                btn = _pj_d[_pj_f];
                btn.color = "black";
            }
            buttons[i].color = "#b30734";
        }
    }
    if ((selectedAnswer !== null)) {
        if (mouse.isPressedIn(nextButton)) {
            continueRoutine = false;
        }
    }
    
    if (selectedAnswer !== null && mouse.isPressedIn(nextButton)) {
        responseRT = responseClock.getTime();
        psychoJS.experiment.addData('responseRT', responseRT);
        continueRoutine = false;
    }
    
    
    
    
    // *instructionTextTrial* updates
    if (t >= 0.0 && instructionTextTrial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructionTextTrial.tStart = t;  // (not accounting for frame time here)
      instructionTextTrial.frameNStart = frameN;  // exact frame index
      
      instructionTextTrial.setAutoDraw(true);
    }
    
    
    // *item1_img* updates
    if (t >= 0.0 && item1_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_img.tStart = t;  // (not accounting for frame time here)
      item1_img.frameNStart = frameN;  // exact frame index
      
      item1_img.setAutoDraw(true);
    }
    
    
    // *item2_img* updates
    if (t >= 0.0 && item2_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_img.tStart = t;  // (not accounting for frame time here)
      item2_img.frameNStart = frameN;  // exact frame index
      
      item2_img.setAutoDraw(true);
    }
    
    
    // *item3_img* updates
    if (t >= 0.0 && item3_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_img.tStart = t;  // (not accounting for frame time here)
      item3_img.frameNStart = frameN;  // exact frame index
      
      item3_img.setAutoDraw(true);
    }
    
    
    // *item4_img* updates
    if (t >= 0.0 && item4_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_img.tStart = t;  // (not accounting for frame time here)
      item4_img.frameNStart = frameN;  // exact frame index
      
      item4_img.setAutoDraw(true);
    }
    
    
    // *item5_img* updates
    if (t >= 0.0 && item5_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_img.tStart = t;  // (not accounting for frame time here)
      item5_img.frameNStart = frameN;  // exact frame index
      
      item5_img.setAutoDraw(true);
    }
    
    
    // *item1_name* updates
    if (t >= 0.0 && item1_name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_name.tStart = t;  // (not accounting for frame time here)
      item1_name.frameNStart = frameN;  // exact frame index
      
      item1_name.setAutoDraw(true);
    }
    
    
    // *item2_name* updates
    if (t >= 0.0 && item2_name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_name.tStart = t;  // (not accounting for frame time here)
      item2_name.frameNStart = frameN;  // exact frame index
      
      item2_name.setAutoDraw(true);
    }
    
    
    // *item3_name* updates
    if (t >= 0.0 && item3_name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_name.tStart = t;  // (not accounting for frame time here)
      item3_name.frameNStart = frameN;  // exact frame index
      
      item3_name.setAutoDraw(true);
    }
    
    
    // *item4_name* updates
    if (t >= 0.0 && item4_name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_name.tStart = t;  // (not accounting for frame time here)
      item4_name.frameNStart = frameN;  // exact frame index
      
      item4_name.setAutoDraw(true);
    }
    
    
    // *item5_name* updates
    if (t >= 0.0 && item5_name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_name.tStart = t;  // (not accounting for frame time here)
      item5_name.frameNStart = frameN;  // exact frame index
      
      item5_name.setAutoDraw(true);
    }
    
    
    // *item1_weight* updates
    if (t >= 0.0 && item1_weight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_weight.tStart = t;  // (not accounting for frame time here)
      item1_weight.frameNStart = frameN;  // exact frame index
      
      item1_weight.setAutoDraw(true);
    }
    
    
    // *item2_weight* updates
    if (t >= 0.0 && item2_weight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_weight.tStart = t;  // (not accounting for frame time here)
      item2_weight.frameNStart = frameN;  // exact frame index
      
      item2_weight.setAutoDraw(true);
    }
    
    
    // *item3_weight* updates
    if (t >= 0.0 && item3_weight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_weight.tStart = t;  // (not accounting for frame time here)
      item3_weight.frameNStart = frameN;  // exact frame index
      
      item3_weight.setAutoDraw(true);
    }
    
    
    // *item4_weight* updates
    if (t >= 0.0 && item4_weight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_weight.tStart = t;  // (not accounting for frame time here)
      item4_weight.frameNStart = frameN;  // exact frame index
      
      item4_weight.setAutoDraw(true);
    }
    
    
    // *item5_weight* updates
    if (t >= 0.0 && item5_weight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_weight.tStart = t;  // (not accounting for frame time here)
      item5_weight.frameNStart = frameN;  // exact frame index
      
      item5_weight.setAutoDraw(true);
    }
    
    
    // *item1_price* updates
    if (t >= 0.0 && item1_price.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_price.tStart = t;  // (not accounting for frame time here)
      item1_price.frameNStart = frameN;  // exact frame index
      
      item1_price.setAutoDraw(true);
    }
    
    
    // *item2_price* updates
    if (t >= 0.0 && item2_price.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_price.tStart = t;  // (not accounting for frame time here)
      item2_price.frameNStart = frameN;  // exact frame index
      
      item2_price.setAutoDraw(true);
    }
    
    
    // *item3_price* updates
    if (t >= 0.0 && item3_price.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_price.tStart = t;  // (not accounting for frame time here)
      item3_price.frameNStart = frameN;  // exact frame index
      
      item3_price.setAutoDraw(true);
    }
    
    
    // *item4_price* updates
    if (t >= 0.0 && item4_price.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_price.tStart = t;  // (not accounting for frame time here)
      item4_price.frameNStart = frameN;  // exact frame index
      
      item4_price.setAutoDraw(true);
    }
    
    
    // *item5_price* updates
    if (t >= 0.0 && item5_price.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_price.tStart = t;  // (not accounting for frame time here)
      item5_price.frameNStart = frameN;  // exact frame index
      
      item5_price.setAutoDraw(true);
    }
    
    
    // *item1_label* updates
    if (t >= 0.0 && item1_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item1_label.tStart = t;  // (not accounting for frame time here)
      item1_label.frameNStart = frameN;  // exact frame index
      
      item1_label.setAutoDraw(true);
    }
    
    
    // *item2_label* updates
    if (t >= 0.0 && item2_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item2_label.tStart = t;  // (not accounting for frame time here)
      item2_label.frameNStart = frameN;  // exact frame index
      
      item2_label.setAutoDraw(true);
    }
    
    
    // *item3_label* updates
    if (t >= 0.0 && item3_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item3_label.tStart = t;  // (not accounting for frame time here)
      item3_label.frameNStart = frameN;  // exact frame index
      
      item3_label.setAutoDraw(true);
    }
    
    
    // *item4_label* updates
    if (t >= 0.0 && item4_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item4_label.tStart = t;  // (not accounting for frame time here)
      item4_label.frameNStart = frameN;  // exact frame index
      
      item4_label.setAutoDraw(true);
    }
    
    
    // *item5_label* updates
    if (t >= 0.0 && item5_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item5_label.tStart = t;  // (not accounting for frame time here)
      item5_label.frameNStart = frameN;  // exact frame index
      
      item5_label.setAutoDraw(true);
    }
    
    
    // *scale* updates
    if (t >= 0.0 && scale.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scale.tStart = t;  // (not accounting for frame time here)
      scale.frameNStart = frameN;  // exact frame index
      
      scale.setAutoDraw(true);
    }
    
    
    // *line* updates
    if (t >= 0.0 && line.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      line.tStart = t;  // (not accounting for frame time here)
      line.frameNStart = frameN;  // exact frame index
      
      line.setAutoDraw(true);
    }
    
    
    // *basketTitle* updates
    if (t >= 0.0 && basketTitle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      basketTitle.tStart = t;  // (not accounting for frame time here)
      basketTitle.frameNStart = frameN;  // exact frame index
      
      basketTitle.setAutoDraw(true);
    }
    
    
    // *nextButtonText_answer* updates
    if (t >= 0.0 && nextButtonText_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButtonText_answer.tStart = t;  // (not accounting for frame time here)
      nextButtonText_answer.frameNStart = frameN;  // exact frame index
      
      nextButtonText_answer.setAutoDraw(true);
    }
    
    
    // *nextButton* updates
    if (t >= 0.0 && nextButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton.tStart = t;  // (not accounting for frame time here)
      nextButton.frameNStart = frameN;  // exact frame index
      
      nextButton.setAutoDraw(true);
    }
    
    
    // *buttonTextA* updates
    if (t >= 0.0 && buttonTextA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextA.tStart = t;  // (not accounting for frame time here)
      buttonTextA.frameNStart = frameN;  // exact frame index
      
      buttonTextA.setAutoDraw(true);
    }
    
    
    // *buttonTextB* updates
    if (t >= 0.0 && buttonTextB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextB.tStart = t;  // (not accounting for frame time here)
      buttonTextB.frameNStart = frameN;  // exact frame index
      
      buttonTextB.setAutoDraw(true);
    }
    
    
    // *buttonTextC* updates
    if (t >= 0.0 && buttonTextC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextC.tStart = t;  // (not accounting for frame time here)
      buttonTextC.frameNStart = frameN;  // exact frame index
      
      buttonTextC.setAutoDraw(true);
    }
    
    
    // *buttonTextD* updates
    if (t >= 0.0 && buttonTextD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextD.tStart = t;  // (not accounting for frame time here)
      buttonTextD.frameNStart = frameN;  // exact frame index
      
      buttonTextD.setAutoDraw(true);
    }
    
    
    // *buttonTextE* updates
    if (t >= 0.0 && buttonTextE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonTextE.tStart = t;  // (not accounting for frame time here)
      buttonTextE.frameNStart = frameN;  // exact frame index
      
      buttonTextE.setAutoDraw(true);
    }
    
    
    // *buttonA* updates
    if (t >= 0.0 && buttonA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonA.tStart = t;  // (not accounting for frame time here)
      buttonA.frameNStart = frameN;  // exact frame index
      
      buttonA.setAutoDraw(true);
    }
    
    
    // *buttonB* updates
    if (t >= 0.0 && buttonB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonB.tStart = t;  // (not accounting for frame time here)
      buttonB.frameNStart = frameN;  // exact frame index
      
      buttonB.setAutoDraw(true);
    }
    
    
    // *buttonC* updates
    if (t >= 0.0 && buttonC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonC.tStart = t;  // (not accounting for frame time here)
      buttonC.frameNStart = frameN;  // exact frame index
      
      buttonC.setAutoDraw(true);
    }
    
    
    // *buttonD* updates
    if (t >= 0.0 && buttonD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonD.tStart = t;  // (not accounting for frame time here)
      buttonD.frameNStart = frameN;  // exact frame index
      
      buttonD.setAutoDraw(true);
    }
    
    
    // *buttonE* updates
    if (t >= 0.0 && buttonE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonE.tStart = t;  // (not accounting for frame time here)
      buttonE.frameNStart = frameN;  // exact frame index
      
      buttonE.setAutoDraw(true);
    }
    
    // *mouse_answer* updates
    if (t >= 0.0 && mouse_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_answer.tStart = t;  // (not accounting for frame time here)
      mouse_answer.frameNStart = frameN;  // exact frame index
      
      mouse_answer.status = PsychoJS.Status.STARTED;
      mouse_answer.mouseClock.reset();
      prevButtonState = mouse_answer.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_answer.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_answer.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_answer.clickableObjects = eval([buttonA, buttonB, buttonC, buttonD, buttonE, nextButton])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_answer.clickableObjects)) {
              mouse_answer.clickableObjects = [mouse_answer.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_answer.clickableObjects) {
              if (obj.contains(mouse_answer)) {
                  gotValidClick = true;
                  mouse_answer.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_answer.clicked_name.push(null);
          }
          _mouseXYs = mouse_answer.getPos();
          mouse_answer.x.push(_mouseXYs[0]);
          mouse_answer.y.push(_mouseXYs[1]);
          mouse_answer.leftButton.push(_mouseButtons[0]);
          mouse_answer.midButton.push(_mouseButtons[1]);
          mouse_answer.rightButton.push(_mouseButtons[2]);
          mouse_answer.time.push(mouse_answer.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of experimentalTrialRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function experimentalTrialRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'experimentalTrialRoutine' ---
    for (const thisComponent of experimentalTrialRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('experimentalTrialRoutine.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    item_list = function () {
        var _pj_a = [], _pj_b = selected_items;
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var item = _pj_b[_pj_c];
            _pj_a.push(item["item"]);
        }
        return _pj_a;
    }
    .call(this);
    item_string = item_list.join(", ");
    psychoJS.experiment.addData("items", item_string);
    psychoJS.experiment.addData("avg_co2", weighted_average_co2);
    psychoJS.experiment.addData("basketLabel", basket_label);
    psychoJS.experiment.addData("response", selectedAnswer);
    psychoJS.experiment.addData("responseRT", responseRT);
    is_correct = Number.parseInt((selectedAnswer === basket_label));
    psychoJS.experiment.addData("is_correct", is_correct);
    psychoJS.experiment.addData("trialType", "experimental");
    psychoJS.experiment.addData("scaleUsed", scale_condition);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_answer.x', mouse_answer.x);
    psychoJS.experiment.addData('mouse_answer.y', mouse_answer.y);
    psychoJS.experiment.addData('mouse_answer.leftButton', mouse_answer.leftButton);
    psychoJS.experiment.addData('mouse_answer.midButton', mouse_answer.midButton);
    psychoJS.experiment.addData('mouse_answer.rightButton', mouse_answer.rightButton);
    psychoJS.experiment.addData('mouse_answer.time', mouse_answer.time);
    psychoJS.experiment.addData('mouse_answer.clicked_name', mouse_answer.clicked_name);
    
    // the Routine "experimentalTrialRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var debriefRoutineMaxDurationReached;
var debriefRoutineMaxDuration;
var debriefRoutineComponents;
function debriefRoutineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debriefRoutine' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    debriefRoutineClock.reset();
    routineTimer.reset();
    debriefRoutineMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_9
    debriefText.alignText = "left";
    
    // setup some python lists for storing info about the mouseDebrief
    // current position of the mouse:
    mouseDebrief.x = [];
    mouseDebrief.y = [];
    mouseDebrief.leftButton = [];
    mouseDebrief.midButton = [];
    mouseDebrief.rightButton = [];
    mouseDebrief.time = [];
    mouseDebrief.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('debriefRoutine.started', globalClock.getTime());
    debriefRoutineMaxDuration = null
    // keep track of which components have finished
    debriefRoutineComponents = [];
    debriefRoutineComponents.push(debriefText);
    debriefRoutineComponents.push(afslutButtonText);
    debriefRoutineComponents.push(afslutButton);
    debriefRoutineComponents.push(mouseDebrief);
    
    for (const thisComponent of debriefRoutineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function debriefRoutineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debriefRoutine' ---
    // get current time
    t = debriefRoutineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debriefText* updates
    if (t >= 0.0 && debriefText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debriefText.tStart = t;  // (not accounting for frame time here)
      debriefText.frameNStart = frameN;  // exact frame index
      
      debriefText.setAutoDraw(true);
    }
    
    
    // *afslutButtonText* updates
    if (t >= 0.0 && afslutButtonText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      afslutButtonText.tStart = t;  // (not accounting for frame time here)
      afslutButtonText.frameNStart = frameN;  // exact frame index
      
      afslutButtonText.setAutoDraw(true);
    }
    
    
    // *afslutButton* updates
    if (t >= 0.0 && afslutButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      afslutButton.tStart = t;  // (not accounting for frame time here)
      afslutButton.frameNStart = frameN;  // exact frame index
      
      afslutButton.setAutoDraw(true);
    }
    
    // *mouseDebrief* updates
    if (t >= 0.0 && mouseDebrief.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseDebrief.tStart = t;  // (not accounting for frame time here)
      mouseDebrief.frameNStart = frameN;  // exact frame index
      
      mouseDebrief.status = PsychoJS.Status.STARTED;
      mouseDebrief.mouseClock.reset();
      prevButtonState = mouseDebrief.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseDebrief.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseDebrief.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouseDebrief.clickableObjects = eval([afslutButtonText, afslutButton])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouseDebrief.clickableObjects)) {
              mouseDebrief.clickableObjects = [mouseDebrief.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouseDebrief.clickableObjects) {
              if (obj.contains(mouseDebrief)) {
                  gotValidClick = true;
                  mouseDebrief.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouseDebrief.clicked_name.push(null);
          }
          _mouseXYs = mouseDebrief.getPos();
          mouseDebrief.x.push(_mouseXYs[0]);
          mouseDebrief.y.push(_mouseXYs[1]);
          mouseDebrief.leftButton.push(_mouseButtons[0]);
          mouseDebrief.midButton.push(_mouseButtons[1]);
          mouseDebrief.rightButton.push(_mouseButtons[2]);
          mouseDebrief.time.push(mouseDebrief.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of debriefRoutineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debriefRoutineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debriefRoutine' ---
    for (const thisComponent of debriefRoutineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('debriefRoutine.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouseDebrief.x', mouseDebrief.x);
    psychoJS.experiment.addData('mouseDebrief.y', mouseDebrief.y);
    psychoJS.experiment.addData('mouseDebrief.leftButton', mouseDebrief.leftButton);
    psychoJS.experiment.addData('mouseDebrief.midButton', mouseDebrief.midButton);
    psychoJS.experiment.addData('mouseDebrief.rightButton', mouseDebrief.rightButton);
    psychoJS.experiment.addData('mouseDebrief.time', mouseDebrief.time);
    psychoJS.experiment.addData('mouseDebrief.clicked_name', mouseDebrief.clicked_name);
    
    // the Routine "debriefRoutine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
