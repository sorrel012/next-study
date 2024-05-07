interface MovieProps {
  params: { id: string };
}

function MovieDetail({ params: { id } }: MovieProps) {
  return <h1>{id}</h1>;
}

export default MovieDetail;
