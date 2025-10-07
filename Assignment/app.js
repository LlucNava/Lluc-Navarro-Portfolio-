// ===== Referencias UI =====
const visualizer = document.getElementById("visualizer");
const algoToggle = document.getElementById("algoToggle");
const shuffleBtn = document.getElementById("shuffleBtn");
const speedInput = document.getElementById("speed");
const sizeInput  = document.getElementById("size");
const muteBtn    = document.getElementById("muteBtn");

// "bubble" | "insertion"
let currentAlgo = "bubble";
let currentArray = [];
let animating = false;

// ===== Sonido =====
let isMuted = false;

// Carga de samples (usa tus .mp3 en /assets)
const samples = {
  swap: makeSample("Assignment/assets/tick.mp3.wav"), // suena en cada swap
  //tick: makeSample("Assignment/assets/tick.mp3.wav"), // opcional, al barajar//No me gustava
  done: makeSample("Assignment/assets/done.mp3.wav"), // al terminar
};

function makeSample(src){
  const a = new Audio();
  a.src = src;
  a.preload = "auto";
  a.volume = 0.35; // volumen base
  a.preservesPitch = false;
  a.mozPreservesPitch = false;
  a.webkitPreservesPitch = false;
  return a;
}

function playSample(sample, { rate = 1, volume = 1 } = {}){
  if (isMuted || !sample || !sample.src) return;
  try{
    const n = sample.cloneNode(true);
    n.playbackRate = rate;
    n.volume = Math.min(1, Math.max(0, sample.volume * volume));
    n.currentTime = 0;
    n.play().catch(()=>{});
  }catch(_e){}
}

// ===== Init =====
init();

function init(){
  regen();
  wireUI();
}

function wireUI(){
  algoToggle.addEventListener("click", () => {
    if (animating) return;
    currentAlgo = currentAlgo === "bubble" ? "insertion" : "bubble";
    const pressed = currentAlgo === "insertion";
    algoToggle.setAttribute("aria-pressed", String(pressed));
    algoToggle.textContent = "Modo: " + (pressed ? "Insertion Sort" : "Bubble Sort");
    run();
  });
  
  

  shuffleBtn.addEventListener("click", () => {
    if (animating) return;
    regen();
  });

  speedInput.addEventListener("input", () => {
    // afecta a próximos frames (no reiniciamos)
  });

  sizeInput.addEventListener("input", () => {
    if (animating) return;
    regen();
  });

  visualizer.addEventListener("click", () => { if (!animating) run(); });

  muteBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    muteBtn.setAttribute("aria-pressed", String(isMuted));
    muteBtn.textContent = isMuted ? "🔇 Silenciado" : "🔊 Sonido";
  });
}

function regen(){
  const n = parseInt(sizeInput.value, 10);
  currentArray = generateRandomArray(n);
  visualizer.style.setProperty("--n-bars", n);
  resetBars(currentArray, visualizer);

  // sonido al barajar (si existe)
  try { playSample(samples.tick, { rate: 1 }); } catch(_) {}
}

function run(){
  // limpiar estilos de estado
  for (const bar of visualizer.children){ bar.classList.remove("sorted"); bar.classList.remove("highlight"); }

  const arrCopy = currentArray.slice();
  const swaps = (currentAlgo === "bubble") ? bubbleSort(arrCopy) : insertionSortViaAdjacentSwaps(arrCopy);

  animate(swaps, () => {
    // colorear todas en verde al final
    for (const bar of visualizer.children){ bar.classList.add("sorted"); }
    playSample(samples.done, { rate: 1 });
  });
}

//El qe es Veu
function swapChildren([left, right], container) {
  
  const children = container.children;
  const barLeft = children[left];
  const barRight = children[right];
  
  const h = parseFloat(barRight.style.height) || 50; // "xx%"
  const rate = 0.5 + (h / 100) * 1.5; // 0.5 → 2.0
  playSample(samples.swap, { rate, volume: 1 });

  barLeft.classList.add("highlight");
  barRight.classList.add("highlight");

  // swap vsual usando insertBefore
  container.insertBefore(barRight, barLeft);

  // treure highlight tras un momento
  requestAnimationFrame(() => {
    setTimeout(() => {
      barLeft.classList.remove("highlight");
      barRight.classList.remove("highlight");
    }, 90);
  });
}

function animate(swaps, onDone){
  if (!swaps || swaps.length === 0){
    onDone && onDone();
    return;
  }
  animating = true;

  const fps = clamp(parseInt(speedInput.value,10), 5, 120);
  const frameDelay = 1000 / fps;

  function step(){
    if (swaps.length === 0){
      animating = false;
      onDone && onDone();
      return;
    }
    const indices = swaps.shift();
    swapChildren(indices, visualizer);
    setTimeout(step, frameDelay);
  }

  step();
}

// et reTORnen el [i, i+1])
function bubbleSort(array){
  const swaps = [];
  let changed;
  do {
    changed = false;
    for (let i = 1; i < array.length; i++){
      if (array[i-1] > array[i]){
        [array[i-1], array[i]] = [array[i], array[i-1]];
        swaps.push([i-1, i]); // estrictamente adyacente
        changed = true;
      }
    }
  } while (changed);
  return swaps;
}

/*para dEsplazar el "key" hacia la iquierda.
 */
function insertionSortViaAdjacentSwaps(array){
  const swaps = [];
  for (let i = 1; i < array.length; i++){
    let j = i;
    while (j > 0 && array[j-1] > array[j]){
      [array[j-1], array[j]] = [array[j], array[j-1]];
      swaps.push([j-1, j]);   // importante: left->right
      j--;
    }
  }
  return swaps;
}

// ===== Utilidades =====
function generateRandomArray(size){
  const arr = new Array(size);
  for (let i = 0; i < size; i++){
    arr[i] = Math.random(); 
  }
  return arr;
}

function resetBars(array, container){
  container.innerHTML = "";
  for (let i = 0; i < array.length; i++){
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = (array[i] * 100) + "%";
    container.appendChild(bar);
  }
}

function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }
