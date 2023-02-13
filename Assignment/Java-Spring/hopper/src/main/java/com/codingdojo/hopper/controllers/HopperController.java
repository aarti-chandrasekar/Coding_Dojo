package com.codingdojo.hopper.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
public class HopperController {
    @RequestMapping("/")
    public String index(Model model) {
        String name = "Grace Hopper";
        String itemName = "Copper wire";
        double price = 5.25;
        String description = "Metal strips, also an illustration of nanoseconds.";
        String vendor = "Little Things Corner Store";

        Map<String, Object> map = Map.of("name", name, "itemName", itemName, "price", price,
                "description", description, "vendor", vendor);
        model.addAllAttributes(map);
        System.out.println(map);
        return "index.jsp";
    }
}
