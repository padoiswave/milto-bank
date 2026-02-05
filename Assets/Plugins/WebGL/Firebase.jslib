mergeInto(LibraryManager.library, {
  TestFromUnity: function () {
    if (window.firebaseLoaded) {
      console.log("🔥 Firebase is ready!");
    } else {
      console.error("❌ Firebase not loaded");
    }
  }
});
