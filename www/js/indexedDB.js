

function openDatabase()
{
    window.sqlitePlugin.echoTest(function () {
        document.getElementById('field_database_status').innerHTML = "sqlitePlugin works!";
    });

    var db = null;
    db = window.sqlitePlugin.openDatabase({name: 'BashboredTasksDB', location: 'default'});

    db.transaction(function(test_transaction)
    {
        test_transaction.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
        test_transaction.executeSql('INSERT INTO DemoTable VALUES (?, ?)', ['Alice', 101]);
        test_transaction.executeSql('INSERT INTO DemoTable VALUES (?, ?)', ['Bob', 202]);
    },
    function (error)
    {
        console.log('Transaction ERROR: ' + error.message);
    },
    function ()
    {
        console.log('Populated database OK.');
    });

};

function initDatabase()
{
    var db = event.target.result;

    // Create an objectStore for this database
    var objectStore = db.createObjectStore("table_projects", { keyPath: "project_id" });
    objectStore.transaction.oncomplete = function(event)
    {
        var transaction = db.transaction(["table_projects"], "readwrite");
        var transactionObjectStore = transaction.objectStore("table_projects");
        var request2 = transactionObjectStore.add({project_id : '001',
                                                  project_description : 'Sample project'});

        request2.onsuccess = function(event)
        {
            document.getElementById('field_database_status').innerHTML = "Initial record created.";
        };
    };
};

function testDatabaseReady()
{
  window.alert("The database is ready.");
  document.getElementById('field_database_status').innerHTML = "The database is ready.";
};
