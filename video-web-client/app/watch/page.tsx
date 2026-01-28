export const dynamic = "force-dynamic";

export default function WatchPage({ searchParams }: { searchParams: { v?: string } }) {
  const videoPrefix = 'https://storage.googleapis.com/ms-videos-processed-videos/';
  const videoSrc = searchParams.v;

  return (
    <div>
      <h1>Watch Page</h1>
      {videoSrc && <video controls src={videoPrefix + videoSrc} />}
    </div>
  );
}
