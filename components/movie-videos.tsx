async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return response.json();
  throw new Error('something broke...');
}

async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
}

export default MovieVideos;
