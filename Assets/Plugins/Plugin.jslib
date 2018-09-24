mergeInto(LibraryManager.library, {

    JS_BirdDied: function () {
        var body = document.getElementsByTagName('body')[0];
        body.style.transition = '1s all';
        body.style.backgroundColor = 'red';
    },

    JS_BirdSpawned: function () {
        var body = document.getElementsByTagName('body')[0];
        body.style.transition = '1s all';
        body.style.backgroundColor = 'white';
    }
});