

function openDatabase()
{
    if (!window.indexedDB)
    {
        window.alert("Your browser doesn't support a stable version of IndexedDB.");
        document.getElementById('field_database_status').innerHTML = "Your browser doesn't support a stable version of IndexedDB.";
    }
    else
    {
        var request = window.indexedDB.open("BashboredTasksDB", 1);

        request.onerror = function(event)
        {
            // Do something with request.errorCode!
        };
        request.onsuccess = function(event)
        {
            // Do something with request.result!
            var eventDatabaseReady = document.createEvent('Event');
            eventDatabaseReady.initEvent('databaseReady', true, true);
            document.dispatchEvent(eventDatabaseReady);
        };
    }
};

function testDatabaseReady()
{
  window.alert("The database is ready.");
  document.getElementById('field_database_status').innerHTML = "The database is ready.";
};
