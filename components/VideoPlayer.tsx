const VideoPlayer = () => {
  return (
    <video className="w-full" controls>
      <source src="/PastaDentalGlister.mp4" type="video/mp4" />
      Seu navegador não suporta a tag de vídeo.
    </video>
  );
};

export default VideoPlayer;
