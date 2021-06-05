import { pool } from './mysql-pool';

class TVService {
  getTVShows(success) {
    pool.query('SELECT * FROM Shows', (error, results) => {
      if (error) return console.log(error);
      success(results);
    });
  }
  getRatings(success) {
    pool.query('SELECT * FROM ShowRatings', (error, results) => {
      if (error) return console.log(error);
      success(results);
    });
  }
  addTVShow(show, success) {
    pool.query(
      'INSERT INTO Shows (title, description) VALUES (?,?)',
      [show.title, show.description],
      (error, results) => {
        if (error) return console.log(error);
        success(results);
      }
    );
  }
}

export let tvService = new TVService();
