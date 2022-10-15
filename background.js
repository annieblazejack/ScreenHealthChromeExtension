//getting access to the document
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

let randomNotification = randomReminder();

chrome.alarms.onAlarm.addListener(() => {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: randomNotification[0],
        message: randomNotification[1],
        title: randomNotification[2],
        buttons: [
          { title: 'More reminders, please.' }
        ],
        priority: 0
      });
});

chrome.notifications.onButtonClicked.addListener(async () => {
    const item = await chrome.storage.sync.get(['minutes']);
    chrome.action.setBadgeText({ text: 'ON' });
    chrome.alarms.create({ delayInMinutes: item.minutes });
  });