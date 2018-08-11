var clip = new ClipboardJS('.btn');

clip.on('success', function(e) {
    alert('copy')
});