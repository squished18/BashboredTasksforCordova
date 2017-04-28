

function openDatabase()
{
    if (!window.indexedDB)
    {
        window.alert("Your browser doesn't support a stable version of IndexedDB.");
        document.getElementById('field_database_status').innerHTML = "Your browser doesn't support a stable version of IndexedDB.";
    }
    else
    {
        var eventDatabaseReady = document.createEvent('Event');
        eventDatabaseReady.initEvent('databaseReady', true, true);
        document.dispatchEvent(eventDatabaseReady);
    }
};

function testDatabaseReady()
{
  window.alert("The database is ready.");
  document.getElementById('field_database_status').innerHTML = "The database is ready.";
};
