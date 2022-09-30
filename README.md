# Scrapy

https://scrapy-47.herokuapp.com

A simple web scraper for the [ECO codes](https://www.chessgames.com/chessecohelp.html) web page which is a repository of the most important or the top 100 chess opening moves compiled by an organization called Chess Informant

## Features

Scrape data from given link: https://www.chessgames.com/chessecohelp.html

- A `GET` request to `/` returns all the data as it is 
- A `GET` request to `/CODE` return all the moves associated with that code in the ECO table
- A `GET` request to `/CODE/move` returns next move for every path

## Example 

- `/C87` Returns
  <h5>Ruy Lopez</h5>
  
  1 e4 e5 2 Nf3 Nc6 Bb5 a6 4 Ba4 Nf6 6 O-O Be7 6 Re1 d6
  
- `/C87/e4/e5/Nf3/Nc6/Bb5/a6/Ba4` Returns
  
  Nf6
