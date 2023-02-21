package com.codingdojo.expense.services;

import com.codingdojo.expense.models.Expense;
import com.codingdojo.expense.repositories.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepo;

    public ExpenseService(ExpenseRepository expenseRepo) {
        this.expenseRepo = expenseRepo;
    }

    public List<Expense> getAll() {
        return expenseRepo.findAllByOrderByAmountDesc();
    }

    public List<Expense> getAllByName(String searchKey) {
        return expenseRepo.findAllByNameContainingIgnoreCase(searchKey);
    }

    public Expense get(Long id) {
        return expenseRepo.findById(id).orElse(null);
    }

    public Expense create(Expense expense) {
        return expenseRepo.save(expense);
    }

    public Expense update(Expense expense) {
        return (expenseRepo.findById(expense.getId()).isPresent()) ? expenseRepo.save(expense) : null;
    }

    public void delete(Long id) {
        expenseRepo.deleteById(id);
    }
}
