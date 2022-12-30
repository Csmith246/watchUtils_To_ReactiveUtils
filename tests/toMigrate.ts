
// Scenario 1 ---- General Watch

import { watch } from "esri/core/reactiveUtils";

watch(() => foo?.some?.value, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

watch(() => this?.foo?.some?.value, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});


// Scenario 2 ---- Init

import { watch } from "esri/core/reactiveUtils";

watch(() => foo?.some?.value, (newValue, oldValue) => {
  console.log(newValue, oldValue);
}, {
  initial: true
});


// Scenario 3 ---- When

import { when } from "esri/core/reactiveUtils";

when(() => foo?.some?.value, () => console.log("Truthy"), {
  initial: true
});
when(() => this?.navBar || this?.contentArea, () => {
  this.scheduleRender();
}, {
  initial: true
}),
when(() => !foo?.some?.value, () => console.log("Not truthy"), {
  initial: true
});
when(() => foo?.some?.value === true, () => console.log("True"), {
  initial: true
});
when(() => foo?.some?.value === true, () => console.log("TrueOnce"), {
  once: true,
  initial: true
});
when(() => foo?.some?.value === false, () => console.log("False"), {
  initial: true
});
when(() => foo?.some?.value, () => console.log("FalseOnce"), {
  once: true,
  initial: true
});
when(() => foo?.some?.value !== undefined, () => console.log("Defined"), {
  initial: true
});
when(() => foo?.some?.value === undefined, () => console.log("Undefined"), {
  initial: true
});


// Scenario 4 ---- once

import { once } from "esri/core/reactiveUtils";

const handle = once(foo, "some.value");

handle.then(({ value }) => {
  console.log(value);
});

handle.remove(); // Stop watching and clean up


// Scenario 5 ---- whenOnce

import { when } from "esri/core/reactiveUtils";

const handleWhenOnce = when(() => foo?.some?.value, , {
  once: true,
  initial: true
});

handleWhenOnce.then(() => {
  console.log("Became truthy!");
});

handleWhenOnce.remove(); // Stop watching and clean up

