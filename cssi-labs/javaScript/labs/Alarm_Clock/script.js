-+// Copyright 2018 Google LLC
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

console.log("script is running...");

//1
function Basic_Alarm(alarmMessage)
{
  return alarmMessage;
}


console.log(Basic_Alarm("My alarm"));

function My_Alarm(alarmMessage)
{
  return alarmMessage;
}

console.log(My_Alarm("Hey, Chinedu, wake up it's 7:00am"));

//2
function Mom_Alarm(alarmMessage)
{
  return alarmMessage;
}
console.log(Mom_Alarm("Hey, Mom, wake up! it's 9:00pm"));

//3
function Family_Alarm(familyMem, time)
{
  return "Hey, " + familyMem + " , wake up! It’s " +  time;
}

console.log(Family_Alarm("Bill", "7am"));

//4
function important_Alarm(alarmMessage)
{
  return alarmMessage;
}

console.log(important_Alarm("WAKE UP, WAKE UP, WAKE UP!!"));

//5
function Snooze_Alarm(oriTime)
{
  let newTime = oriTime + 1
  return "The alarm for " + oriTime + " has changed to " + newTime;
}

console.log(Snooze_Alarm (3));
