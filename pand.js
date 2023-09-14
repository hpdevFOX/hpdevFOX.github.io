const nerd = {
	 Q: "О",
	 W: "Ш",
	 E: "Е",
	 R: "P",
	 T: "Т",
	 Y: "y",
	 U: "И",
	 I: "Л",
	 O: "О",
	 P: "Р",
	 A: "А",
	 S: "С",
	 D: "В",
	 F: "К",
	 G: "О",
	 H: "Н",
	 J: "Д",
	 K: "К",
	 L: "Ь",
	 Z: "З",
	 X: "Х",
	 C: "C",
	 V: "М",
	 B: "В",
	 N: "И",
	 M: "W",
	 й: "q",
	 q: "p",
	 w: "ш",
	 e: "e",
	 r: "P",
	 t: "T",
	 y: "у",
	 u: "и",
	 i: "л",
	 o: "о",
	 p: "р",
	 a: "а",
	 s: "с",
	 d: "ь",
	 f: "ф",
	 g: "п",
	 h: "п",
	 j: "л",
	 k: "к",
	 l: "л",
	 z: "з",
	 ч: "x",
	 x: "х",
	 с: "с",
	 v: "м",
	 b: "ь",
	 n: "и",
	 m: "м",
};

const inputBox = document.getElementById("inputBox");
const clearButton = document.getElementById("clearButton");
const convertButton = document.getElementById("convertButton");
const copyButton = document.getElementById("copyButton");
const outputBox = document.getElementById("outputBox");
const pasteButton = document.getElementById("pasteButton");

function ktoPyccknn(inputString) {
  const result = [];
  for (const char of inputString) {
    if (char in nerd) {
      result.push(nerd[char]);
    } else {
      result.push(char);
    }
  }
  return result.join("");
}

function updateOutput() {
  const inputText = inputBox.value;
  const outputText = ktoPyccknn(inputText);
  outputBox.value = outputText;
}

clearButton.addEventListener("click", function () {
  inputBox.value = "";
  outputBox.value = "";
});

inputBox.addEventListener("input", updateOutput);
convertButton.addEventListener("click", updateOutput);

copyButton.addEventListener("click", function () {
    outputBox.focus();
  navigator.clipboard
    .writeText(outputBox.value)
    .then(function () {
      console.log("Сука блять копировать нахуй");
    })
    .catch(function (err) {
      console.error("нахуй вышло:", err);
    });
});

pasteButton.addEventListener("click", function () {
  navigator.clipboard
    .readText()
    .then(function (clipboardText) {
      inputBox.value = clipboardText;
      updateOutput();
    })
    .catch(function (err) {
      console.error("сука блять дата нахуй: ", err);
    });
});