const VideoPlayer = () => {
  return (
    <video className="w-full" controls>
      <source src="/omega-3-nutrilite.mp4" type="video/mp4" />
      Tu navegador no es compatible con la etiqueta de vídeo.
    </video>
  );
};

export default VideoPlayer;
