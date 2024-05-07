import { API_URL } from '../../../util/constant';

interface MovieProps {
  params: { id: string };
}

async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function MovieDetail({ params: { id } }: MovieProps) {
  const movie = await getMovie(id);

  return <h1>{movie.title}</h1>;
}

export default MovieDetail;
