import MovieInfo from '../../../components/movie-info';
import MovieVideos from '../../../components/movie-videos';
import { Suspense } from 'react';

interface MovieProps {
  params: { id: string };
}

async function MovieDetail({ params: { id } }: MovieProps) {
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

export default MovieDetail;
