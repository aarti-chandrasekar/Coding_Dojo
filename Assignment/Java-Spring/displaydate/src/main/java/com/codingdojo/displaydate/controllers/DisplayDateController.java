package com.codingdojo.displaydate.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DisplayDateController {
    @GetMapping("/")
    public String index() {
        return "index.jsp";
    }

    @GetMapping("/date")
    public String dateTemplate() {
        return "date.jsp";
    }

    @GetMapping("/time")
    public String timeTemplate() {
        return "time.jsp";
    }
}
