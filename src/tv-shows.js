import * as React from 'react';
import { Component } from 'react-simplified';

import { tvService } from './service';

export class TVList extends Component {
  shows = [];
  ratings = [];
  render() {
    return (
      <div>
        <h4>TV Shows:</h4>
        <hr></hr>
        <div>
          {this.shows.map((show) => (
            <div key={show.id}>
              <h4>{show.title}</h4>
              <div>Description: {show.description}</div>
              <div>
                {' '}
                Average rating:
                {this.ratings
                  .filter((showRating) => showRating.showId == show.id)
                  .reduce(
                    (average, showRating, _index, showRatings) =>
                      average + showRating.rating / showRatings.length,
                    0
                  )}
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    );
  }
  mounted() {
    tvService.getTVShows((shows) => {
      this.shows = shows;
    });
    tvService.getRatings((ratings) => {
      this.ratings = ratings;
    });
  }
}
