/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const enterDate = document.getElementById("journalDate");
const enterConcepts = document.getElementById("conceptsCovered");
const enterJournal = document.getElementById("journalEntry");
const enterMood = document.getElementById("moodForTheDay");
const submitButton = document.getElementById("buttonEntry");
let enterAll = [];



// let myJournalEntry = {
//     date: enterDate,
//     title: enterConcepts,
//     entry: enterJournal,
//     mood: enterMood
// };

// const input = () => {
//     myJournalEntry.date = enterDate.value;
//     myJournalEntry.title = enterConcepts.value;
//     myJournalEntry.mood = enterMood.value;
//     enterAll.push(myJournalEntry);
// };




let firstJournal = {
  date: "3.14.2019",
  title: "Objects",
  entry: "I need to catch up!",
  mood: "Anxious"
};

let secondJournal = {
  date: "3.15.2019",
  title: "Stuff",
  entry: "I'm going to get this",
  mood: "Tired"
};

enterAll.push(firstJournal);
enterAll.push(secondJournal);

console.log(enterAll);


