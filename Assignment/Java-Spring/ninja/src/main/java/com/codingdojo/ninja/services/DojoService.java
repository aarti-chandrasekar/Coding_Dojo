
package com.codingdojo.ninja.services;

import com.codingdojo.ninja.models.Dojo;
import org.springframework.stereotype.Service;
import com.codingdojo.ninja.repositories.DojoRepository;
import java.util.List;

@Service
public class DojoService {
    private final DojoRepository dojoRepo;

    public DojoService(DojoRepository dojoRepo) {
        this.dojoRepo = dojoRepo;
    }

    public List<Dojo> getAll() {
        return dojoRepo.findAll();
    }

    public Dojo get(Long id) {
        return dojoRepo.findById(id).orElse(null);
    }

    public Dojo create(Dojo dojo) {
        return dojoRepo.save(dojo);
    }

    public Dojo update(Dojo dojo) {
        return (dojoRepo.findById(dojo.getId()).isPresent()) ? dojoRepo.save(dojo) : null;
    }

    public void delete(Long id) {
        dojoRepo.deleteById(id);
    }
}
