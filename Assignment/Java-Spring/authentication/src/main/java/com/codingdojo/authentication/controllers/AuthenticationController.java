
package com.codingdojo.authentication.controllers;

import com.codingdojo.authentication.models.LoginUser;
import com.codingdojo.authentication.models.User;
import com.codingdojo.authentication.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;


    @GetMapping("/")
    public String loginRegPage(@ModelAttribute("regUser") User regUser,
                               @ModelAttribute("loginUser") LoginUser loginUser) {
        return "loginReg";
    }

    @GetMapping("/home")
    public String homePage(HttpSession session) {
        if (session.getAttribute("loggedinUser") == null) {
            session.invalidate();
            return "redirect:/";
        }
        return "home";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("regUser") User regUser,
                           BindingResult result, HttpSession session, Model model) {
        if (result.hasErrors()) {
            System.out.println("Validation Errors");
            model.addAttribute("loginUser", new LoginUser());
            return "loginReg";
        }
        User user = authenticationService.register(regUser, result);
        if (result.hasErrors()) {
            System.out.println("Service Layer Errors");
            model.addAttribute("loginUser", new LoginUser());
            return "loginReg";
        }

        session.setAttribute("loggedinUser", user);
        return "redirect:/home";
    }

    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("loginUser") LoginUser loginUser,
                        BindingResult result, HttpSession session, Model model) {
        if (result.hasErrors()) {
            System.out.println("Validation Errors");
            model.addAttribute("regUser", new User());
            return "loginReg";
        }
        User user = authenticationService.login(loginUser, result);
        if (result.hasErrors()) {
            System.out.println("Service Layer Errors");
            model.addAttribute("regUser", new User());
            return "loginReg";
        }

        session.setAttribute("loggedinUser", user);
        return "redirect:/home";
    }
}



