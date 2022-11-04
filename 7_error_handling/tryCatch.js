try{
	console.log("awal try");
	errorCode;
	console.log("kedua try");

} catch(error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
}
