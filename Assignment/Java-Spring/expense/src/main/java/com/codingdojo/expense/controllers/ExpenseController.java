package com.codingdojo.expense.controllers;

import com.codingdojo.expense.models.Expense;
import com.codingdojo.expense.services.ExpenseService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
@RequestMapping("/expenses")
public class ExpenseController {
    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping("")
    public String homePage(Model model, HttpSession session) {
        model.addAttribute("expense", new Expense());
        session.setAttribute("expenseList", expenseService.getAll());

        return "index";
    }

    @PostMapping("")
    public String add(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
        if (result.hasErrors()) {
            return "index";
        } else {
            expenseService.create(expense);
            return "redirect:/expenses";
        }
    }

    @GetMapping("/{id}")
    public String viewPage(@PathVariable("id") Long id, Model model) {
        model.addAttribute("expense", expenseService.get(id));
        return "view";
    }

    @GetMapping("/edit/{id}")
    public String editPage(@PathVariable("id") Long id, Model model) {
        model.addAttribute("expense", expenseService.get(id));
        return "edit";
    }

    @PutMapping("/edit/{id}")
    public String edit(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
        if (result.hasErrors()) {
            return "edit";
        } else {
            expenseService.update(expense);
            return "redirect:/expenses";
        }
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Long id) {
        expenseService.delete(id);
        return "redirect:/expenses";
    }
}
