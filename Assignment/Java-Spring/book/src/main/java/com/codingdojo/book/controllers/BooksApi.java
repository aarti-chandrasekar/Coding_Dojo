package com.codingdojo.book.controllers;// ..

import com.codingdojo.book.models.Book;
import com.codingdojo.book.services.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BooksApi {
    private final BookService bookService;

    public BooksApi(BookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping("/api/books")
    public List<Book> getAll() {
        return bookService.getAll();
    }

    @PostMapping (value = "/api/book")
    public Book create(@RequestParam(value="title") String title, @RequestParam(value="description") String desc,
                       @RequestParam(value="language") String lang, @RequestParam(value="pages") Integer numOfPages) {
        return bookService.create(title, desc, lang, numOfPages);
    }

    @RequestMapping("/api/book/{id}")
    public Book get(@PathVariable("id") Long id) {
        return bookService.get(id);
    }

    @PutMapping("/api/book/{id}")
    public Book update(@PathVariable("id") Long id,
                       @RequestParam(value="title", required = false) String title,
                       @RequestParam(value="description", required = false) String desc,
                       @RequestParam(value="language", required = false) String lang,
                       @RequestParam(value="pages", required = false) Integer numOfPages) {
        return bookService.update(id, title, desc, lang, numOfPages);
    }

    @DeleteMapping("/api/book/{id}")
    public void delete(@PathVariable("id") Long id) {
        bookService.delete(id);
    }


}
