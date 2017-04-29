

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
        request.onupgradeneeded = function(event)
        {
            var db = event.target.result;

            // Create an objectStore for this database
            var objectStore = db.createObjectStore("table_projects", { keyPath: "project_id" });
            objectStore.transaction.oncomplete = function(event)
            {
                var transaction = db.transaction(["table_projects"], "readwrite");
                var transactionObjectStore = transaction.objectStore("table_projects");
                var request2 = transactionObjectStore.add({project_id : '001'});

                request2.onsuccess = function(event)
                {
                    document.getElementById('field_database_status').innerHTML = "Initial record created.";
                };
            };
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
