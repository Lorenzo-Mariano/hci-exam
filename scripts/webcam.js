const webcam = document.getElementById("webcam");
const statusMsg = document.getElementById("status");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
		webcam.srcObject = stream;
		webcam.play();
		statusMsg.innerHTML = "Webcam is on.";
	});
}

async function off_cam() {
	var msg = "Turning off camera";
	statusMsg.innerHTML = msg;

	await setTimeout(() => {
		var stream = webcam.srcObject;
		stream.getTracks().forEach(function (track) {
			track.stop();
		});

		webcam.srcObject = null;
		var msg = "Refresh and/or give this website permission to use the camera.";
		statusMsg.innerHTML = msg;
	}, 1200);
}
