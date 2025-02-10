import { Component, onMount, onCleanup, createSignal } from 'solid-js';
import QrScanner from 'qr-scanner';

const App: Component = () => {
  let videoRef: HTMLVideoElement | undefined;
  const [QrData, setQrData] = createSignal<string | null>(null);
  let scanner: QrScanner | null = null;

  onMount(() => {
    if(videoRef) {
      scanner = new QrScanner(
        videoRef,
        (res) => setQrData(res)
      );
      scanner.start();
    }
  });

  onCleanup(() => {
    scanner?.stop();
  })

  return (
    <>
      <div class="w-full h-full max-w-md max-h-md aspect-square overflow-hidden">
        <video ref={videoRef} class="min-h-full min-w-full object-cover"></video>
      </div>
      <div>
        <h1>QR Code Scanner</h1>
        <p>QR Code Content: {QrData()}</p>
      </div>
    </>
  );
};

export default App;
