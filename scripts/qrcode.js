function generateQRCode() {
	const value = document.getElementById('qr-code-value').value; const options = {
		value: value,
		size: 400,
		level: 'H'
	};
	const qrCode = new QRious(options);
	const qrCodeImage = qrCode.toDataURL();
	console.log(qrCodeImage)
	document.getElementsByClassName('qr-code-image')[0].src = qrCodeImage;
}