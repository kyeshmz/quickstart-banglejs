import { TEST_CONST } from "./constants";

var on = false;
setInterval(function () {
	on = !on;
	console.log(TEST_CONST);
	digitalWrite(LED1, on);
}, 500);
