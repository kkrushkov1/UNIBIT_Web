var bgcolorlist = new Array(
  "#FFFFFF",
  "#808080",
  "#80FF80",
  "#FFBF00",
  "#C9FFA8",
  "#6495ED",
  "#9FE2BF",
  "#40E0D0",
  "#DE3163",
  "#DFFF00"
);

document.body.style.background =
  bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)];
