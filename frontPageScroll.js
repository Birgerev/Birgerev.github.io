// Function to handle scroll event
function handleScroll() {
  window.removeEventListener('scroll', handleScroll);

  // Get the next section element
  const nextSection = document.querySelector("#worksShowcase");

  // Calculate the distance to scroll
  const offset = nextSection.offsetTop - window.pageYOffset;

  // Adjust the scroll speed
  const scrollSpeed = 40; // Adjust this value (higher value = faster scroll)

  // Calculate the number of frames needed for the scroll animation
  const frames = Math.abs(offset) / scrollSpeed;

  // Calculate the distance to scroll on each frame
  const distancePerFrame = offset / frames;

  // Perform the scroll animation
  let currentOffset = window.pageYOffset;
  const scrollInterval = setInterval(() => {
    currentOffset += distancePerFrame;
    window.scrollTo(0, currentOffset);

    // Stop the animation when reached the target position
    if (Math.abs(window.pageYOffset - nextSection.offsetTop) <= Math.abs(distancePerFrame)) {
      clearInterval(scrollInterval);
    }
  }, 16); // 60 frames per second (1000ms / 60fps = 16.67ms)
}

console.log("init");
// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll);