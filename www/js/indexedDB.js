if (!window.indexedDB)
{
  window.alert("Your browser doesn't support a stable version of IndexedDB.");
}

function openDatabase()
{
  var eventDatabaseReady = document.createEvent('Event');
  eventDatabaseReady.initEvent('databaseReady', true, true);
  elem.dispatchEvent(eventDatabaseReady);
};

function testDatabaseReady()
{
  window.alert("The database is ready.");
};
