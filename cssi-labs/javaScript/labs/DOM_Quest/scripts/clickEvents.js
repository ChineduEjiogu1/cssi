// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("Running Click Events Script");

let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let test = document.querySelectorAll('#container1 .box');

console.log(test);

test.forEach(function(box){
  // get background color BEFORE addEventListener
  let bcolor = window.getComputedStyle(box)['background-color'];

  box.addEventListener('click',(e) =>{
     box1.style.backgroundColor = bcolor;
     box2.style.backgroundColor = bcolor;
     box3.style.backgroundColor = bcolor;
  })
})

let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');

box4.addEventListener('click',(e) =>{
   box4.classList.toggle('active');
})

box5.addEventListener('click',(e) =>{
   box5.classList.toggle('active');
})

let box6 = document.querySelector('#box6');
let box7 = document.querySelector('#rect');

function toggle(box)
{
  box.classlist.toggle("active");
}
function toggle2(box2)
{
  box2.classList.toggle("active");
}

function setColor(boxid1, boxid2, boxColor)
{
  let box =document.getElementById(boxid1);
  box.style.backgroundColor = boxColor;
  box =document.getElementById(boxid2);
  box.style.backgroundColor = boxColor;
}
//function toggle(boxid4,boxid5)
