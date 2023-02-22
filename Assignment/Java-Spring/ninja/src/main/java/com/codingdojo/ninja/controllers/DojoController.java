
package com.codingdojo.ninja.controllers;

import com.codingdojo.ninja.models.Dojo;
import com.codingdojo.ninja.services.DojoService;
import com.codingdojo.ninja.services.NinjaService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping("/dojos")
public class DojoController {
    private final DojoService dojoService;
    private final NinjaService ninjaService;

    public DojoController(DojoService dojoService, NinjaService ninjaService) {
        this.dojoService = dojoService;
        this.ninjaService = ninjaService;
    }

    @GetMapping("")
    public String homePage(Model model, @ModelAttribute("dojo") Dojo dojo) {
        model.addAttribute("dojoList", dojoService.getAll());
        return "index";
    }

    @PostMapping("")
    public String add(Model model, @Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
        if (result.hasErrors()) {
            model.addAttribute("dojoList", dojoService.getAll());
            return "index";
        } else {
            dojoService.create(dojo);
            return "redirect:/dojos";
        }
    }

    @GetMapping("/{id}")
    public String ninjaListPage(@PathVariable("id") Long id, Model model) {
        Dojo dojo = dojoService.get(id);
        // if invalid Dojo ID
        if (dojo == null){
            return "redirect:/dojos";
        }

        model.addAttribute("dojoName", dojo.getName());
        model.addAttribute("ninjaList", ninjaService.getAllNinjasByDojoId(id));
        return "ninjaList";
    }
}
