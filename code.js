$(document).ready(function ()
    {
        //Events
        $("input[name='dayOfWeek']").change(response)
        //Functions
        var selectionCounter = 0
        function response(event){
            event.preventDefault()
            var selectedRadioButton = $("input[name=dayOfWeek]:checked");
            var selectedDay = selectedRadioButton.data("day")
            var firstEvent
            var firstTime
            var secondEvent
            var secondTime
            var thirdEvent
            var thirdTime
            var fourthEvent
            var fourthTime
            switch(selectedDay){
                case "Monday":
                    firstEvent = "Breakfast"
                    firstTime = "9:30 AM - 10:30 AM"
                    secondEvent = "Goof Off"
                    secondTime = "10:30 AM - 6:00 PM"
                    thirdEvent = "Javascript Class"
                    thirdTime = "6:00 PM - 9:50 PM"
                    fourthEvent = "Wind Down"
                    fourthTime = "9:50 PM - 12:00 AM"
                    break;
                case "Tuesday":
                    firstEvent = "Breakfast"
                    firstTime = "9:30 AM - 10:30 AM"
                    secondEvent = "Goof Off"
                    secondTime = "10:30 AM - 6:00 PM"
                    thirdEvent = "Dinner"
                    thirdTime = "6:00 PM - 7:30 PM"
                    fourthEvent = "Wind Down"
                    fourthTime = "7:30 PM - 12:00 AM"
                    break;
                case "Wednesday":
                    firstEvent = "Breakfast"
                    firstTime = "9:30 AM - 10:30 AM"
                    secondEvent = "Goof Off"
                    secondTime = "10:30 AM - 6:00 PM"
                    thirdEvent = "Javascript Class"
                    thirdTime = "6:00 PM - 9:50 PM"
                    fourthEvent = "Wind Down"
                    fourthTime = "9:50 PM - 12:00 AM"
                    break;
                case "Thursday":
                    firstEvent = "Breakfast"
                    firstTime = "9:30 AM - 10:30 AM"
                    secondEvent = "Goof Off"
                    secondTime = "10:30 AM - 5:20 PM"
                    thirdEvent = "Data Analysis Class"
                    thirdTime = "6:00 PM - 9:50 PM"
                    fourthEvent = "Wind Down"
                    fourthTime = "9:50 PM - 12:00 AM"
                    break;
                case "Friday":
                    firstEvent = "Breakfast"
                    firstTime = "9:30 AM - 10:30 AM"
                    secondEvent = "Goof Off"
                    secondTime = "10:30 AM - 6:00 PM"
                    thirdEvent = "Dinner"
                    thirdTime = "6:00 PM - 7:30 PM"
                    fourthEvent = "Wind Down"
                    fourthTime = "7:30 PM - 12:00 AM"
                    break;
                case "Saturday":
                    firstEvent = "Breakfast"
                    firstTime = "9:30 AM - 10:30 AM"
                    secondEvent = "Goof Off"
                    secondTime = "10:30 AM - 6:00 PM"
                    thirdEvent = "Dinner"
                    thirdTime = "6:00 PM - 7:30 PM"
                    fourthEvent = "Wind Down"
                    fourthTime = "7:30 PM - 12:00 AM"
                    break;
                case "Sunday":
                    firstEvent = "Breakfast"
                    firstTime = "9:30 AM - 10:30 AM"
                    secondEvent = "Homework Bonanza"
                    secondTime = "10:30 AM - 6:00 PM"
                    thirdEvent = "Dinner"
                    thirdTime = "6:00 PM - 7:30 PM"
                    fourthEvent = "Wind Down or More Homework"
                    fourthTime = "7:30 PM - 12:00 AM"
                    break;
                default: break;
            }
            $("table").show();
            $("#firstEvent").text(firstEvent)
            $("#firstTime").text(firstTime)
            $("#secondEvent").text(secondEvent)
            $("#secondTime").text(secondTime)
            $("#thirdEvent").text(thirdEvent)
            $("#thirdTime").text(thirdTime)
            $("#fourthEvent").text(fourthEvent)
            $("#fourthTime").text(fourthTime)
            if(selectionCounter > 1){
                $("#theSecret").show()
            }
            selectionCounter++
        }
    }
)