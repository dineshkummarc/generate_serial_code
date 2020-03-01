function generateSerial(){
	var n=7;
	var number = Math.floor(Math.random()*n)-1;

	switch(number){
		case 0:
			document.getElementById('serial1').value="tt55-RTJ0-6600-A0A2-08B0-AQS3";
			document.getElementById('serial2').value="763B-24DF-0943-0084-F778";
			break;
		case 1:
			document.getElementById('serial1').value="qwwe-RTJ0-6600-A0A2-08B0-FD32";
			document.getElementById('serial2').value="AF21-24D2-7CB0-00A4-4DDC";
			break;
		case 2:
			document.getElementById('serial1').value="1111-22TJ0-6600-A0A0-03B0-FCXS";
			document.getElementById('serial2').value="4444-24D2-79C2-00A4-0406";
			break;
		case 3:
			document.getElementById('serial1').value="444e-R830-6310-B0A2-0HBH-CDE4";
			document.getElementById('serial2').value="ffff-24D3-696E-00A4-5FCC";
			break;
		case 4:
			document.getElementById('serial1').value="zzzz-R528-ffre-B0f2-0HW0-FD3D";
			document.getElementById('serial2').value="5bb7-24DD-775C-0084-A2BE";
			break;
		case 5:
			document.getElementById('serial1').value="vvvv-bbbb-T3A0-TFF2-00B1-QGBD";
			document.getElementById('serial2').value="4bb8-24F2-5A0C-0082-64AF";
			break;
		case 6:
			document.getElementById('serial1').value="xxxb-ccc-c-A0ccA2-0FGG-GV94";
			document.getElementById('serial2').value="xxxx-cccc-1111-2422-F2E4D";
			break;	
	}
}
