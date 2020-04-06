window.parent.document.test.step_timeout(() => {
  document.write("PASS")
  document.close();
  window.parent.document.dispatchEvent(new CustomEvent("testTimeoutDone"));
}, 0);
