function randomReminder() {
    let rng = Math.ceil(Math.random() * 12)
    switch (rng) {
    case 1:
        image = 'assets/apple.png'
        message = 'Are you hungry for a delicious fruit?'
        title = 'Food Break'
        break;
    case 2:    
        image = 'assets/binoculars.png'
        message = 'Look at the horizon to refresh your eyes.'
        title = 'Eye Strain'
        break;
    case 3:
        image = 'assets/watermelon.png'
        message = 'Treat yourself to a yummy snack.'
        title = 'Food Break'
        break;
    case 4:
        image = 'assets/bottle.png'
        message = 'Remember to hydrate.'
        title = 'Hydration Reminder'
        break;
    case 5:
        image = 'assets/broccoli.png'
        message = 'Do you want a healthy snack?'
        title = 'Food Break'
        break;
    case 6:
        image = 'assets/cat.png'
        message = 'Consider spending some time with your kitten.'
        title = 'Pet Your Pet'
        break;
    case 7:
        image = 'assets/eyesup.png'
        message = 'Focus on something far away for a moment.'
        title = 'Eye Strain'
        break;
    case 8:
        image = 'assets/situpstraight.png'
        message = 'Are you sitting up straight?'
        title = 'Posture Check'
        break;
    case 9:
        image = 'assets/spine.png'
        message = 'Is your back straight?'
        title = 'Posture Check'
        break;
    case 10:
        image = 'assets/sun.png'
        message = 'Consider going outside for a few minutes.'
        title = 'Time for some Sun'
        break;
    case 11:
        image = 'assets/treepose.png'
        message = 'Stand up and take a stretch.'
        title = 'Stretch Break'
        break;
    case 12:
        image = 'assets/water.png'
        message = 'Take a sip of water.'
        title = 'Hydration Reminder'
        break;
    
}
    return [image, message, title]
}



function reminder(reminder) {

    const [image, message, title] = reminder

    const body = document.querySelector('body');

    const div = document.createElement('div');
    body.appendChild(div);
    div.style.textAlign = 'right';

    const picture = document.createElement('img');
    picture.src = chrome.runtime.getURL(image);
    div.appendChild(picture);
    
    const titleEl = document.createElement('h3');
    titleEl.innerHTML = title;
    div.appendChild(titleEl);
    
    const words = document.createElement('p');
    words.innerHTML = message;
    div.appendChild(words);

    div.style.position = 'absolute';
    div.style.top = '60px';
    div.style.right = '60px';
    div.style.zIndex = '1000';
    picture.style.width = '100px';
    picture.style.height = '100px';

    setTimeout(() => {
        div.remove();
      }, 5000);

    // const button = document.createElement('button');
    // div.appendChild(button);
    // picture.addEventListener('click', () => {
    //     //close image and reset timer
    //     div.innerHTML = '';
    
    // })
}

const notify = () => {
    let randomNotification = randomReminder();
    reminder(randomNotification);
};

setTimeout(notify, 1000);

//runs function every ten minutes
setInterval(notify, 60*10*1000);



// console.log(randomReminder());

// let reminderImage = randomReminder();

// // setInterval(reminder, 0, reminderImage)

// reminder(reminderImage);

// //going on in the background
// // chrome.alarms.onAlarm.addListener(() => {
// //     //do something
// // });
