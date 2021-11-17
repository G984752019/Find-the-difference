const q = [
  ['高', '髙'],
  ['吉', '𠮷'],
  ['酒', '洒'],
  ['人', '入'],
  ['昴', '昂'],
  ['鳴', '嗚'],
  ['倶', '惧'],
  ['師', '帥'],
  ['狭', '挟'],
  ['壁', '璧']
];
const cells = document.getElementById("cells");
const score = document.getElementById("time");
const level = document.getElementById('level');
const prevScore = document.getElementById("prevTime");
const prevlevel = document.getElementById("prevLevel");
let start;
let now;
const correct = new Audio('sound/correct.mp3');
const wrong = new Audio('sound/wrong.mp3');
const MAX = 4;
let count = 0;
let size = 5;
let levelCt = 2;
