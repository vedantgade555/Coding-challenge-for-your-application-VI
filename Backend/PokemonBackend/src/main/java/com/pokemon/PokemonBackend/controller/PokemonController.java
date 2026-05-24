package com.pokemon.PokemonBackend.controller;

import com.pokemon.PokemonBackend.service.PokemonService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pokemon")
@RequiredArgsConstructor
@CrossOrigin("*")
public class PokemonController {

    private final PokemonService pokemonService;

    @GetMapping("/{name}")
    public Object getPokemon(@PathVariable String name) {
        return pokemonService.fetchPokemon(name);
    }
}