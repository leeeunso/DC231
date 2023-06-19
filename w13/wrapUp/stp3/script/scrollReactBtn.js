const observingTargets =
  document.querySelectorAll("main section");
// console.log(observingTargets);

const toggleTargets =
  document.querySelectorAll("aside>ol>a");
// console.log(toggleTargets);

const pageBtnMap = new Map();
const setPageBtnMap = () => {
  observingTargets.forEach((eachTargets, idx) => {
    pageBtnMap.set(
      eachTargets,
      toggleTargets[idx]
    );
  });
};
setPageBtnMap();
// console.log(pageBtnMap);

let lastBtn;

const margin = ["0px", "-90%"];

const visualizingMargin = () => {
  let topMargin = document.createElement("div");
  topMargin.style.cssText =
    "position: fixed; top: " +
    margin[0].substring(1) +
    "; left: 0; right: 0; height: 1px; background-color: red; z-index:999;";
  let bottomMargin =
    document.createElement("div");
  bottomMargin.style.cssText =
    "position: fixed; bottom: " +
    margin[1].substring(1) +
    "; left: 0; right: 0; height: 1px; background-color: green; z-index:999;";
  document.body.append(topMargin);
  document.body.append(bottomMargin);
};
