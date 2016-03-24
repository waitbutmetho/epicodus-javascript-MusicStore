import { Pipe, PipeTransform } from 'angular2/core';
import { CD                  } from './cd.model';

@Pipe({
  name: "artist",
  pure: false
})
export class ArtistPipe implements PipeTransform {
  transform(input: CD[], args) {
    var desiredArtistState = args[0];
    if(desiredArtistState === "none") {
      return input;
    } else {
      return input.filter((cd) => {
        return (cd.artist === args[0]);
      });
    }
  }
}
