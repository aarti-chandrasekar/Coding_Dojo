package com.fruity.loops.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;

import com.fruity.loops.models.Item;

@Controller
public class ItemController {
    @GetMapping("/")
    public String index(Model model) {
        ArrayList<Item> fruits = new ArrayList<Item>();
        fruits.add(new Item("Kiwi", 1.5));
        fruits.add(new Item("Mango", 2.0));
        fruits.add(new Item("Goji Berries", 4.0));
        fruits.add(new Item("Guava", .75));

        model.addAttribute("fruitList", fruits);
        return "index.jsp";
    }
}
