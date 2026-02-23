function playSound(file) {
    const audio = new Audio("/sounds/" + file);
    audio.play();
}
