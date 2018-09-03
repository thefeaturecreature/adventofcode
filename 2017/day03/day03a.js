const input = 289326

let plotter = target =>{
  const runner = Math.round(Math.sqrt(target));
  const lower = (runner * (runner - 1)) + 1;
  const higher = runner * (runner + 1);
  const ldiff = target - lower;
  const hdiff = higher - target;

  var x, y;
  if (runner % 2 == 0) {
    if (input <= (higher - runner)) {
      x = runner / 2;
      y = (runner / 2) - ldiff;
    } else {
      x = (0 - ((runner / 2) - 1)) + hdiff;
      y =  0 - (runner / 2);
    }
  } else {
    if (input <= (higher - runner)) {
      x = (0 - (runner - 1 )) / 2;
      y = (0 - (runner / 2)) + ldiff;
    } else {
      x = ((runner - 1 ) / 2) - hdiff;
      y = ((runner - 1 ) / 2) + 1;
    }
  }
  return [x, y];
}

let steps = plot =>{
  return Math.abs(plot[0]) + Math.abs(plot[1]);
}

console.log(steps(plotter(input)));
