const text = document.getElementById("text-container");

document.getElementById("colorchange").onclick = function () {
  const color = document.getElementById("colorbox").value;
  text.style.color = color;
};

document.getElementById("fontsize").oninput = function () {
  const size = this.value;
  text.style.fontSize = size + "px";
};

document.getElementById("italic").onclick = function () {
  text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
};

document.getElementById("underline").onclick = function () {
  text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
};

document.getElementById("bold").onclick = function () {
  text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
};

document.getElementById("list").onchange = function () {
  text.style.fontFamily = this.value;
};

document.getElementById("getstyle").onclick = function () {
  let styles = window.getComputedStyle(text);

  const cssText = `
    color: ${styles.color};
    font-size: ${styles.fontSize};
    font-family: ${styles.fontFamily.split(",")[0]};
    font-style: ${styles.fontStyle};
    font-weight: ${styles.fontWeight};
    text-decoration: ${styles.textDecorationLine};
  `;

  // clean and format output
  document.getElementById("css-props").innerText = cssText
    .trim()
    .split("\n")
    .map(line => line.trim())
    .join(" ");
};