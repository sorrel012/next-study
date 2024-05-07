import { API_URL } from '../../../util/constant';

interface MovieProps {
  params: { id: string };
}

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

async function MovieDetail({ params: { id } }: MovieProps) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
}

export default MovieDetail;
