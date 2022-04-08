const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


  //GET for all genres
  router.get('/', (req, res) => {

    const query = `SELECT * FROM "genres" ORDER BY "name" ASC`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all genres', err);
        res.sendStatus(500)
      })
  });
  
  //GET for single movie genres
  router.get('/:id', (req, res) => {
  
    const query = `SELECT * FROM "movies"
    JOIN "movies_genres"
    ON "movies"."id" = "movies_genres"."movie_id"
    JOIN "genres"
    ON "genres"."id" = "movies_genres"."genre_id"
    WHERE "movies"."id" = $1`;
    pool.query(query, [req.params.id])
      .then( result => {
        console.log(result);
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get movie genres', err);
        res.sendStatus(500)
      })
  });

module.exports = router;