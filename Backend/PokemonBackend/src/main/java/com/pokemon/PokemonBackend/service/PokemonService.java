package com.pokemon.PokemonBackend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@Service
public class PokemonService {

    private static final Logger log = LoggerFactory.getLogger(PokemonService.class);
    
    // TODO: Consider injecting RestTemplate as a bean instead of instantiating it directly
    private final RestTemplate restTemplate = new RestTemplate();

    @Cacheable(value = "pokemon", key = "#name.toLowerCase()")
    public Object fetchPokemonDetails(String name) {
        log.info("Fetching data from external PokeAPI for pokemon: {}", name);
        String targetUrl = String.format("https://pokeapi.co/api/v2/pokemon/%s", name.toLowerCase());
        
        try {
            return restTemplate.getForObject(targetUrl, Object.class);
        } catch (HttpClientErrorException.NotFound e) {
            log.warn("Pokemon '{}' was not found on the external API.", name);
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Pokemon not found: " + name);
        } catch (Exception e) {
            log.error("Unexpected error occurred while fetching details for {}", name, e);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error fetching pokemon details", e);
        }
    }
}
