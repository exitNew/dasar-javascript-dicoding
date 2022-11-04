const {averageExams, isStudentPassExam} = require('../gradeCalculation');


describe("Grade Calculation", () => {
	test("1# it should be return exact average", () => {
		const listOfValueExams = [80, 100, 100, 80];
		expect(averageExams(listOfValueExams)).toEqual(90);
	});

	test("2# it should handle non-number", () => {
		const listOfValueExam = [80, 'a', '100', 80];
		expect(averageExams(listOfValueExams)).toThrow();
	});
	
	/*
	 *	Integration Testing
	 */

	test("3# it should be return exam passed status", () => {
		const listValueOfExam = [80, 100, 100, 80];
		expect(isStudentPassExam(listValueOfExam, 'Budi')).toEqual(true);
	});
	
	test("4# it should be return exam faild status", () => {
		const listValueOfExam = [50, 40, 70, 80];
		expect(isStudentPassExam(listValueOfExam, 'Budi')).toEqual(false);
	});
});



