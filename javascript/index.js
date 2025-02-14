// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));

//getDirections(step, callback, errorCallback) {
//getInstruction(food, step, callback, errorCallback)


// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(err))

// Iteration 3 using async/await
async function makeBroccoli() {
  try { 
    let step = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    step = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");       
  } catch(err) {
    console.log(err)
  } 
  }
  makeBroccoli(); //always need to call the wrap function with async

// Bonus 2 - Promise all

// * SOLUTION 1 - FULL

// const p0 = obtainInstruction("brusselsSprouts", 0)
// const p1 = obtainInstruction("brusselsSprouts", 1)
// const p2 = obtainInstruction("brusselsSprouts", 2)
// const p3 = obtainInstruction("brusselsSprouts", 3)
// const p4 = obtainInstruction("brusselsSprouts", 4)
// const p5 = obtainInstruction("brusselsSprouts", 5)
// const p6 = obtainInstruction("brusselsSprouts", 6)

// Promise.all([p0, p1, p2, p3, p4, p5, p6])
//   .then((step) => {
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[0]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[1]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[2]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[3]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[4]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[5]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[6]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
//         document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//       })
//       .catch(error => console.log(error)); 

// * SOLUTION 2 - LOOP TO GET PROMISES

// let brusselsPromises = [];
// for (let i = 0; i < brusselsSprouts.length; i++) {
//   brusselsPromises.push(obtainInstruction("brusselsSprouts", i))  
// }
// console.log({brusselsPromises});

// Promise.all(brusselsPromises)
//     .then((step) => {
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[0]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[1]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[2]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[3]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[4]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[5]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[6]}</li>`;
//         document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
//         document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//       })
//       .catch(error => console.log(error)); 

// * SOLUTION 3 - LOOP TO GET PROMISES AND LOOP TO GET STEPS

let brusselsPromises = [];
for (let i = 0; i < brusselsSprouts.length; i++) {
  brusselsPromises.push(obtainInstruction("brusselsSprouts", i))  
}
console.log({brusselsPromises});

Promise.all(brusselsPromises)
    .then((step) => {
        step.forEach(step => {
          document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
        })
        document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
      })
      .catch(error => console.log(error));