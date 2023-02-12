package com.codindojo.human.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HumanController {
    @RequestMapping("")
    public String display(@RequestParam(required = false, value = "name") String name,
                          @RequestParam(required = false, value = "last_name") String lastName,
                          @RequestParam(required = false, value = "times") Integer times) {
        System.out.println(name + " " + lastName + " " + times);
        String retStr = " Hello ";
        retStr += (name == null) ? "Human " : name + " ";
        retStr += (lastName == null) ? "" : lastName + " ";

//        int noTimes = 1;
//        try {
//            noTimes = Integer.parseInt(times);
//        } catch (NumberFormatException e) {
////            e.printStackTrace();
//        }

        System.out.println("Output -->" + retStr);
        return retStr.repeat(times==null ? 1 : times);

    }
}
