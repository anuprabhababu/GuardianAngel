document.addEventListener('DOMContentLoaded', function () {
    const emergencyButton = document.getElementById('emergency-button');
    const emergencySection = document.getElementById('emergency-section');
    const sosButton = document.getElementById('sos-button');
    const shareLocationButton = document.getElementById('share-location-button');
    const fakeCallButton = document.getElementById('fake-call-button');
    const recordVideoButton = document.getElementById('record-video-button');
    const takePhotoButton = document.getElementById('take-photo-button');

    const callScreen = document.getElementById('call-screen');
    const attendCallButton = document.getElementById('attend-call-button');
    const cutCallButton = document.getElementById('cut-call-button');

    const ongoingCallScreen = document.getElementById('ongoing-call-screen');
    const callTimer = document.getElementById('call-timer');

    const endCallButton = document.getElementById('end-call-button');

    let timerInterval;
    let seconds = 0;

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            seconds++;
            callTimer.textContent = formatTime(seconds);
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    emergencyButton.addEventListener('click', function () {
        emergencySection.classList.toggle('hidden');
    });

    sosButton.addEventListener('click', function () {
        toggleSOS();
    });

    shareLocationButton.addEventListener('click', function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const locationMessage = `I need help! My location is: https://www.google.com/maps?q=${latitude},${longitude}`;
                alert(locationMessage);
                // You can integrate WhatsApp, Telegram, or SMS API here to send the message
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });

    fakeCallButton.addEventListener('click', function () {
        callScreen.classList.remove('hidden');
        emergencySection.classList.add('hidden');
    });

    attendCallButton.addEventListener('click', function () {
        callScreen.classList.add('hidden');
        ongoingCallScreen.classList.remove('hidden');
        startTimer();
    });

    cutCallButton.addEventListener('click', function () {
        callScreen.classList.add('hidden');
        emergencySection.classList.remove('hidden');
    });

    endCallButton.addEventListener('click', function () {
        ongoingCallScreen.classList.add('hidden');
        emergencySection.classList.remove('hidden');
        stopTimer();
        seconds = 0;
        callTimer.textContent = formatTime(seconds);
    });

    recordVideoButton.addEventListener('click', function () {
        alert('Record Video functionality not implemented.');
        // Implement video recording functionality here
    });

    takePhotoButton.addEventListener('click', function () {
        alert('Take Photo functionality not implemented.');
        // Implement photo capture functionality here
    });

    function toggleSOS() {
        if (sosButton.textContent === 'Activate SOS') {
            alert('SOS Activated');
            sosButton.textContent = 'Deactivate SOS';
        } else {
            alert('SOS Deactivated');
            sosButton.textContent = 'Activate SOS';
        }
    }
});