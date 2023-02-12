package com.codindojo.daikichi.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class DaikichiController {
    @RequestMapping("")
    public String home() {
        return "Welcome!";
    }

    @RequestMapping("/today")
    public String today() {
        return "Today you will find luck in all your endeavors!";
    }

    @RequestMapping("/tomorrow")
    public String tomorrow() {
        return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
    }

    @RequestMapping("/travel/{city}")
    public String travel(@PathVariable("city") String city) {
        return "Congratulations! You will soon travel to " + city;
    }

    @RequestMapping("/lotto/{num}")
    public String lotto(@PathVariable("num") Integer num) {
        return switch (num % 2) {
            case 0 -> "You will take a grand journey in the near future, but be weary of tempting offers";
            case 1 -> "You have enjoyed the fruits of your labor but now is a great time to spend time with" +
                    " family and friends.";
            default -> "Not a valid path";
        };
    }
}
