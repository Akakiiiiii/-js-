function queueWatcher (watcher) {
  var id = watcher.id;
  console.log('watcherId='+ id + 'exporession=' + watcher.expression);
  if (has[id] == null) {
    //console.log('watcherId='+ id + 'exporession=' + watcher.expression);
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else { 
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}