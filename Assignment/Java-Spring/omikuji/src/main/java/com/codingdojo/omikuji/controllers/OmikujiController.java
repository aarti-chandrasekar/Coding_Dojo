
package com.codingdojo.omikuji.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/omikuji")
public class OmikujiController {
    @GetMapping("")
    public String index() {
        return "index.jsp";
    }
   @GetMapping("/show")
    public String show() {
        return "show.jsp";
    }

    @PostMapping("/send")
    public String send(HttpSession session, @RequestParam("numberPick") Integer numberPick,
                       @RequestParam("city") String city,
                       @RequestParam("person") String person,
                       @RequestParam("hobby") String hobby,
                       @RequestParam("thing") String thing,
                       @RequestParam("niceText") String niceText) {
        session.setAttribute("numberPick", numberPick);
        session.setAttribute("city", city);
        session.setAttribute("person", person);
        session.setAttribute("hobby", hobby);
        session.setAttribute("thing", thing);
        session.setAttribute("niceText", niceText);

        return "redirect:/omikuji/show";

    }
}
