package com.pokemon.PokemonBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class PokemonBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PokemonBackendApplication.class, args);
	}

}
