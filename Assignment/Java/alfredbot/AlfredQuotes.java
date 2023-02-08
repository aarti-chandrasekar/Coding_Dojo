import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class AlfredQuotes {

    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }

    public String guestGreeting(String name) {
        return String.format("Hello, %s. Lovely to see you.", name);
    }

    public String guestGreeting(String name, String dayPeriod) {
        return String.format("Good %s, %s. Lovely to see you.", name, dayPeriod);
    }

    public String guestGreeting() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        int hr = cal.get(Calendar.HOUR_OF_DAY);
        String dayPeriod = "evening";
        if (hr > 4 && hr < 12) {
            dayPeriod = "morning";
        } else if (hr >= 12 && hr < 17) {
            dayPeriod = "afternoon";
        }
        return String.format("Good %s. Lovely to see you.", dayPeriod);
    }

    public String dateAnnouncement() {
        SimpleDateFormat sdf = new SimpleDateFormat("EEE MMM d H:mm:ss z YYYY");
        return String.format("It is currently %s", sdf.format(new Date()));
    }

    public String respondBeforeAlexis(String conversation) {
        String retString = "Right. And with that I shall retire.";
        if (conversation.indexOf("Alexis") != -1) {
            retString = "Right away, sir. She certainly isn't sophisticated enough for that.";
        } else if (conversation.indexOf("Alfred") != -1) {
            retString = "At your service. As you wish, naturally.";
        }
        return retString;
    }

    // NINJA BONUS
    // See the specs to overload the guessGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have
    // learned!
}
