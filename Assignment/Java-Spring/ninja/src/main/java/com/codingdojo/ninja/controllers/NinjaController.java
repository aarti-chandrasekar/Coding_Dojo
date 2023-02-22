
package com.codingdojo.ninja.controllers;

import com.codingdojo.ninja.models.Dojo;
import com.codingdojo.ninja.models.Ninja;
import com.codingdojo.ninja.services.DojoService;
import com.codingdojo.ninja.services.NinjaService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;

@Controller
@RequestMapping("/ninjas")
public class NinjaController {
    private final NinjaService ninjaService;
    private final DojoService dojoService;

    public NinjaController(NinjaService ninjaService, DojoService dojoService) {
        this.ninjaService = ninjaService;
        this.dojoService = dojoService;
    }

    @ModelAttribute("dojoList")
    public List<Dojo> getAllDojos(){
        return dojoService.getAll();
    }

    @GetMapping("/new")
//    public String addPage(Model model) {
//        model.addAttribute("ninja", new Ninja());
    public String addPage(@ModelAttribute("ninja") Ninja ninja){
        return "addNinja";
    }

    @PostMapping("/new")
    public String add(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result) {
        if (result.hasErrors()) {
            return "addNinja";
        } else {
            ninjaService.create(ninja);
            return "redirect:/dojos/" + ninja.getDojo().getId();
        }
    }
}
