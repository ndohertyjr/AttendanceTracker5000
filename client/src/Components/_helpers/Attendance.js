/*
    Helper functions to calculate the attendance percentage for a student
*/


// calculate the attendance rate given the start of class, total attended days, and frequency of class
function attendanceCalculator(classStartDate, daysInClass, classesPerWeek) {

    var daysOfClass = numOfClassDays(classStartDate, classesPerWeek)
    console.log(daysOfClass)
    var attendancePercentage = daysInClass / daysOfClass;
    
    return Math.round(attendancePercentage * 100)

}

// Calculate the number of classes since the start date
function numOfClassDays(start, classesPerWeek) {
    const currDate = new Date();
    var tempStartDate = new Date(start);

    var diffOfDatesTime = currDate.getTime() - tempStartDate.getTime();
    var diffOfDatesDays = diffOfDatesTime / (1000 * 3600 * 24);

    var weeksOfClass = Math.floor(diffOfDatesDays / 7);
    var totalClasses = weeksOfClass * classesPerWeek

    return totalClasses;

}

// Calculates the class average for attendance by using data from 
function totalAttendanceAverage(classAttendanceRates) {

    console.log("CLASS ATTENDANCE: " + classAttendanceRates)
    let totalAttendancePercentages = 0;
    let numOfStudents = classAttendanceRates.length
    for (var i = 0; i < numOfStudents; i++) {
        
        totalAttendancePercentages += classAttendanceRates[i];
    }
    console.log("totalAttendance% " + totalAttendancePercentages)
    return totalAttendancePercentages / numOfStudents

}

export  {attendanceCalculator, totalAttendanceAverage}