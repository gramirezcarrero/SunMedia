const target = document.getElementById("sunmedia");
const createVideoElement = (url) => {
  var sourceMP4 = document.createElement("source");
  sourceMP4.type = "video/mp4";
  sourceMP4.src = url;
  sourceMP4.type = "video/mp4";

  return sourceMP4;
};
const onInsertVideoWhenTargetIsVisible = (target, videoElm) => {
  const video = document.createElement("video");
  video.id = "video";
  video.autoplay = true;
  video.allow = "autoplay";
  video.controls = true;
  video.muted = "muted";
  video.appendChild(videoElm);
  target.appendChild(video);
  video.addEventListener(
    "ended",
    () => {
      document.getElementById("video").remove();
    },
    false
  );
};
/**
 *
 * @param {string} src The video media file url
 * @return {HTMLVideoElement}
 */
const videoElm = createVideoElement(
  "https://vod.addevweb.com/sunmedia/demos/v/normal.mp4"
);
/**
 * @param {HTMLDivElement} targetElm
 * @param {HTMLVideoElement} videoElm
 */
onInsertVideoWhenTargetIsVisible(target, videoElm);
