package com.codingdojo.book.services;

import com.codingdojo.book.models.Book;
import com.codingdojo.book.repositories.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    private final BookRepository bookRepo;

    public BookService(BookRepository bookRepo) {
        this.bookRepo = bookRepo;
    }

    public List<Book> getAll() {
        return bookRepo.findAll();
    }

    public Book get(Long id) {
        return bookRepo.findById(id).orElse(null);
    }

    public Book create(String title, String desc, String lang, Integer numOfPages) {
        Book book = new Book(title, desc, lang, numOfPages);
        return bookRepo.save(book);
    }

    public Book update(Long id, String title, String desc, String lang, Integer numOfPages) {
        Book book = bookRepo.findById(id).orElse(new Book());
        if (book.getId() != null) {
            if (title != null) {
                book.setTitle(title);
            }
            if (desc != null) {
                book.setDescription(desc);
            }
            if (lang != null) {
                book.setLanguage(lang);
            }
            if (numOfPages != null) {
                book.setNumberOfPages(numOfPages);
            }

            return bookRepo.save(book);
        }
        return book;
    }

    public void delete(Long id) {
        bookRepo.deleteById(id);
    }

}
