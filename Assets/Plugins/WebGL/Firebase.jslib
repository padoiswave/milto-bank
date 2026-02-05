mergeInto(LibraryManager.library, {
  InitFirebase: function () {
    if (window.InitFirebase) {
      window.InitFirebase();
    } else {
      console.error("InitFirebase not found");
    }
  }
});
