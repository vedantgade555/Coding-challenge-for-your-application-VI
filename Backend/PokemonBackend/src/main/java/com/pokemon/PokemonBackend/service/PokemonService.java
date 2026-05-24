package com.pokemon.PokemonBackend.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Slf4j
public class PokemonService {

    private final RestTemplate restTemplate = new RestTemplate();

    @Cacheable(value = "pokemon", key = "#name.toLowerCase()")
    public Object fetchPokemon(String name) {

        String url =
                "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase();

        log.info("Fetching from API: {}", name);

        return restTemplate.getForObject(url, Object.class);
    }
}