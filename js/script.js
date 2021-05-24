// Copyright (c) 2021 haokai All rights reserved
//
// Created by: haokai
// Created on: May 2021
// This is the Age-and-Movie

"use strict"

function enterClicked() {
  //input
  const age = parseInt(document.getElementById("age").value)

  // process
  if (age >= 17) {
    //output that answer of R
    document.getElementById('answer').innerHTML = "You can see a R movie alone."
  } else if (age >= 13) {
    //output that answer of PG-13
    document.getElementById('answer').innerHTML = "You can see a PG-13 movie alone."
  } else if (age >= 5) {
    //output that answer of G or PG
    document.getElementById('answer').innerHTML = "You can see a G or PG movie alone."
  } else {
    //output that answer of too young
    document.getElementById('answer').innerHTML = "Uh, you are too young for most things."
  }
  document.getElementById('thanks').innerHTML = "Thanks for verifying  your age!"
}