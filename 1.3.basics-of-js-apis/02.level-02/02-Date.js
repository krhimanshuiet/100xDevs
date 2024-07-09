function dateMethods(){
    const currentDate = new Date();
    console.log("Current Date",currentDate);

    // getting various components of the Date
    console.log("Date:",currentDate.getDate());
    console.log("Month:",currentDate.getMonth()+1); // months are zero indexed
    //adding 1
    console.log("Year",currentDate.getFullYear());
    console.log("Hours",currentDate.getHours());
    console.log("Minutes",currentDate.getMinutes());
    console.log("Seconds",currentDate.getSeconds());
    //setting compoents of the date

    currentDate.setFullYear("2022");
    console.log("after setfullyear:",currentDate)
    currentDate.setMonth(6);
    console.log("after setMonths:",currentDate);
    //getting and setting in milliseconds since 1970

    console.log("time in milliseconds",currentDate.getTime());
    const newDate = new Date(2023,8,15);
    console.log("new date",newDate)
}

dateMethods();