function setAlarm(event) {
    let minutes = parseFloat(event.target.value);
    chrome.action.setBadgeText({text: 'ON'});
    chrome.alarms.create({delayInMinutes: minutes});
    chrome.storage.sync.set({minutes: minutes});
    window.close();
  }
  
  function clearAlarm() {
    chrome.action.setBadgeText({text: ''});
    chrome.alarms.clearAll();
    window.close();
  }
  
  //An Alarm delay of less than the minimum 1 minute will fire
  // in approximately 1 minute increments if released
  document.getElementById('sampleMinute').addEventListener('click', setAlarm);
  document.getElementById('min15').addEventListener('click', setAlarm);
  document.getElementById('min30').addEventListener('click', setAlarm);
  document.getElementById('cancelAlarm').addEventListener('click', clearAlarm);
  












// //create a div, append it to the body of current web page (top right corner) 
// //in that div we need an image and a button
// //the button will close the image
// //if you don't click the button, the image disappears after a few seconds
// function reminder(reminderImage) {

//     const body = document.querySelector(body);
//     const div = document.createElement('div');
//     body.appendChild(div);
//     const picture = document.createElement('img');
//     picture.setAttribute("src", reminderImage);
//     div.appendChild(picture);

//     div.style.position = 'absolute';
//     div.style.top = '20px';
//     div.style.right = '20px';

//     setTimeout(function(){
//         $('div').remove();
//       }, 5000);

//     // const button = document.createElement('button');
//     // div.appendChild(button);
//     // picture.addEventListener('click', () => {
//     //     //close image and reset timer
//     //     div.innerHTML = '';
    
//     // })
// }

// //get a random reminder


// console.log(randomReminder());
// let reminderImage = randomReminder();

// // setInterval(reminder, 0, reminderImage)

// reminder(reminderImage);

// //going on in the background
// // chrome.alarms.onAlarm.addListener(() => {
// //     //do something
// // });


