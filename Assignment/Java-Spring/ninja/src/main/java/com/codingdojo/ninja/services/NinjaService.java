
package com.codingdojo.ninja.services;

import com.codingdojo.ninja.models.Ninja;
import com.codingdojo.ninja.repositories.NinjaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NinjaService {
    private final NinjaRepository ninjaRepo;

    public NinjaService(NinjaRepository ninjaRepo) {
        this.ninjaRepo = ninjaRepo;
    }

    public List<Ninja> getAllNinjasByDojoId(Long id) {
        return ninjaRepo.findAllByDojoId(id);
    }

    public Ninja get(Long id) {
        return ninjaRepo.findById(id).orElse(null);
    }

    public Ninja create(Ninja ninja) {
        return ninjaRepo.save(ninja);
    }

    public Ninja update(Ninja ninja) {
        return (ninjaRepo.findById(ninja.getId()).isPresent()) ? ninjaRepo.save(ninja) : null;
    }

    public void delete(Long id) {
        ninjaRepo.deleteById(id);
    }
}
