package com.pokemon.PokemonBackend.controller;

import com.pokemon.PokemonBackend.service.PokemonService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pokemon")
@CrossOrigin(origins = "*") // Allows React frontend to connect
public class PokemonController {

    private static final Logger log = LoggerFactory.getLogger(PokemonController.class);

    @Autowired
    private PokemonService pokeService;

    @GetMapping("/{name}")
    public ResponseEntity<Object> fetchPokemon(@PathVariable String name) {
        log.info("Received request to fetch pokemon data for: {}", name);
        return ResponseEntity.ok(pokeService.fetchPokemonDetails(name));
    }
}
