//question bank 
var questionsBankArray = [
  {
    "category": "Scripting Overview",
    "question": "Where do Client Scripts execute in ServiceNow?",
    "answers": {
      "a": "Database server",
      "b": "Browser",
      "c": "MID Server",
      "d": "Flow Engine only"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scripting Overview",
    "question": "Which actions are typical client-side behaviors? (Select all that apply)",
    "answers": {
      "a": "Auto-populate a field based on another field",
      "b": "Show or hide form sections",
      "c": "Directly update database records",
      "d": "Run scheduled jobs"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Scripting Overview",
    "question": "Server-side scripts are primarily used to:",
    "answers": {
      "a": "Change CSS themes",
      "b": "Modify database records",
      "c": "Play notification sounds",
      "d": "Adjust browser zoom"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scripting Overview",
    "question": "What can a server-side script trigger in ServiceNow?",
    "answers": {
      "a": "Flow Designer process",
      "b": "Browser refresh animation",
      "c": "User keyboard input",
      "d": "Local file download"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Scripting Overview",
    "question": "Scripts that integrate with third-party applications run on:",
    "answers": {
      "a": "Client browser",
      "b": "MID Server",
      "c": "Mobile device",
      "d": "Theme editor"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scripting Overview",
    "question": "Which of the following are server-side scripting components? (Select all that apply)",
    "answers": {
      "a": "Business Rules",
      "b": "Script Includes",
      "c": "GlideRecord",
      "d": "g_form"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Scripting Overview",
    "question": "Which feature enforces logic automatically when a record is inserted or updated?",
    "answers": {
      "a": "Client Script",
      "b": "Business Rule",
      "c": "Theme",
      "d": "Dashboard"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scripting Overview",
    "question": "Which object is a core server-side API in ServiceNow?",
    "answers": {
      "a": "g_form",
      "b": "GlideRecord",
      "c": "window",
      "d": "document"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scripting Overview",
    "question": "Which module allows workflow-like automation without traditional workflow scripting?",
    "answers": {
      "a": "Flow Designer",
      "b": "Theme Builder",
      "c": "Knowledge Base",
      "d": "Service Portal Designer"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Scripting Overview",
    "question": "Who can manage all features, applications, and data on the platform?",
    "answers": {
      "a": "Application Administrator",
      "b": "System Administrator",
      "c": "End User",
      "d": "ITIL User"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scripting Overview",
    "question": "Which role can manage specific system definition components like Business Rules?",
    "answers": {
      "a": "System Definition Administrator",
      "b": "Service Desk Agent",
      "c": "Knowledge Contributor",
      "d": "Requester"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Scripting Overview",
    "question": "An Application Administrator typically manages:",
    "answers": {
      "a": "Entire platform configuration",
      "b": "Operating system patches",
      "c": "Features and data of a specific application",
      "d": "Network firewall rules"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Scripting Overview",
    "question": "Which are examples of granular administrative roles? (Select all that apply)",
    "answers": {
      "a": "business_rule_admin",
      "b": "client_script_admin",
      "c": "ui_policy_admin",
      "d": "theme_color_admin"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Scripting Overview",
    "question": "UI Policies belong to which scripting area?",
    "answers": {
      "a": "Client-side behavior",
      "b": "Database indexing",
      "c": "Network routing",
      "d": "Hardware configuration"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Locate Scripts",
    "question": "How can you quickly save a record for later access in ServiceNow?",
    "answers": {
      "a": "Export the record to XML",
      "b": "Create Favorite from the record context menu",
      "c": "Restart the instance",
      "d": "Add to Update Set"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Locate Scripts",
    "question": "Dragging a record into the favorites area will:",
    "answers": {
      "a": "Delete the record",
      "b": "Create a bookmark/favorite",
      "c": "Clone the record",
      "d": "Create a new table"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Locate Scripts",
    "question": "If you forget to create a favorite for a record, where can you find it quickly?",
    "answers": {
      "a": "System Logs",
      "b": "Your History",
      "c": "Update Sets",
      "d": "Plugins"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Locate Scripts",
    "question": "Adding the 'Updated' column to a list helps you:",
    "answers": {
      "a": "Delete scripts faster",
      "b": "Sort by most recently edited scripts",
      "c": "Restart services",
      "d": "Change user roles"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Locate Scripts",
    "question": "Adding the 'Updated by' column allows you to:",
    "answers": {
      "a": "Track who modified a script",
      "b": "Change system admin password",
      "c": "View server logs",
      "d": "Activate plugins"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Locate Scripts",
    "question": "What does searching 'mySearchString' (no special characters) do in the Application Navigator filter?",
    "answers": {
      "a": "Exact match only",
      "b": "Contains search",
      "c": "Ends with search",
      "d": "Starts with search"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Locate Scripts",
    "question": "What does searching '*mySearchString' return?",
    "answers": {
      "a": "No results",
      "b": "Starts with results",
      "c": "Ends with results",
      "d": "Contains results"
    },
    "rightAnswers": "d"
  },
  {
    "category": "Locate Scripts",
    "question": "What does searching 'mySearchString%' return?",
    "answers": {
      "a": "Exact match only",
      "b": "Ends with results",
      "c": "Starts with results",
      "d": "Case-sensitive search only"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Locate Scripts",
    "question": "What does searching '%mySearchString' perform?",
    "answers": {
      "a": "Contains search",
      "b": "Starts with search",
      "c": "Ends with search",
      "d": "Table-only search"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Locate Scripts",
    "question": "Which Application Navigator command opens a table list view in the content page?",
    "answers": {
      "a": "<table_name>.form",
      "b": "<table_name>.list",
      "c": "<table_name>.config",
      "d": "<table_name>.workflow"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Locate Scripts",
    "question": "Which command opens a list view in a new tab or window?",
    "answers": {
      "a": "<table_name>.LIST",
      "b": "<table_name>.list",
      "c": "<table_name>.form",
      "d": "<table_name>.config"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Locate Scripts",
    "question": "Which command opens a form view in the content pane?",
    "answers": {
      "a": "<table_name>.form",
      "b": "<table_name>.FORM",
      "c": "<table_name>.LIST",
      "d": "<table_name>.CONFIG"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Locate Scripts",
    "question": "Which command opens a form view in a new tab?",
    "answers": {
      "a": "<table_name>.form",
      "b": "<table_name>.FORM",
      "c": "<table_name>.list",
      "d": "<table_name>.workflow"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Locate Scripts",
    "question": "Which navigator command opens the table configuration view in a new window?",
    "answers": {
      "a": "<table_name>.CONFIG",
      "b": "<table_name>.FORM",
      "c": "<table_name>.list",
      "d": "<table_name>.record"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Application scope",
    "question": "Which statements about Delegated Development in scoped applications are correct? (Select all that apply)",
    "answers": {
      "a": "Allows non-administrators to develop, deploy, and delete applications",
      "b": "Provides application-specific permissions",
      "c": "Delegated access can be granted only to scoped applications",
      "d": "Requires all users to have the admin role",
      "e": "Administrators use ServiceNow Studio to manage delegated developers and the content they access" 
    },
    "rightAnswers": "a,b,c,e"
  },
  {
    "category": "Application scope",
    "question": "Which capabilities are advantages of Scoped Applications? (Select all that apply)",
    "answers": {
      "a": "Separate namespace",
      "b": "Delegated development",
      "c": "Publish to application repository",
      "d": "Everything exists in Global scope",
      "e": "Easy file management"
    },
    "rightAnswers": "a,b,c,e"
  },
  {
    "category": "Application scope",
    "question": "Which statements correctly describe Global Applications? (Select all that apply)",
    "answers": {
      "a": "Everything is in Global",
      "b": "No delegated development",
      "c": "Can publish to app repository",
      "d": "Uses a separate namespace",
      "e": "Easy file management"
    },
    "rightAnswers": "a,b,c,e"
  },
  {
    "category": "Application Scope",
    "question": "Every application has a ________.",
    "answers": {
      "a": "Update Set",
      "b": "Scope",
      "c": "Domain",
      "d": "Theme"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application Scope",
    "question": "Application scope determines:",
    "answers": {
      "a": "Which of its resources are available to other applications",
      "b": "Which UI themes users can select",
      "c": "Which plugins are installed",
      "d": "Which browser is supported"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Application Scope",
    "question": "Once scope is assigned to an application, it:",
    "answers": {
      "a": "Can be changed at any time",
      "b": "Cannot be changed",
      "c": "Is removed when you publish",
      "d": "Automatically becomes Global"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application Scope",
    "question": "Baseline applications provided by ServiceNow (for example, Incident, Service Catalog, Service Portal) are implemented in the:",
    "answers": {
      "a": "Global scope",
      "b": "Scoped Development",
      "c": "Personal scope",
      "d": "MID Server scope"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Application Scope",
    "question": "Why is it difficult to protect/isolate application data in the Global scope?",
    "answers": {
      "a": "Because scripts are disabled in Global",
      "b": "Because everything is in the global scope and isolation is limited",
      "c": "Because tables cannot be created in Global",
      "d": "Because only MID Servers can access Global"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application Scope",
    "question": "Scope protects an application and its artifacts from damage to or from other applications.",
    "answers": {
      "a": "True",
      "b": "False",
      "c": "Only in Global scope",
      "d": "Only for baseline apps"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Application Scope",
    "question": "For an application to share its resources with other applications, ________ must be granted.",
    "answers": {
      "a": "A theme",
      "b": "Explicit permission",
      "c": "A new instance",
      "d": "A browser setting"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application Scope",
    "question": "Application developers specify an application scope when they create a new application.",
    "answers": {
      "a": "True",
      "b": "False",
      "c": "Only for baseline apps",
      "d": "Only for Global scope"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Application Scope",
    "question": "Developers can specify what parts of an application are accessible to other applications from: (Select all that apply)",
    "answers": {
      "a": "The Custom application record",
      "b": "Each application Table record",
      "c": "The System Logs module",
      "d": "The MID Server record"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Application Scope",
    "question": "By default, other applications in the platform can access and change another application's tables and business logic.",
    "answers": {
      "a": "True",
      "b": "False, they cannot unless granted explicit permission",
      "c": "True, but only in Scoped Development",
      "d": "True, but only in Global scope"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application Scope",
    "question": "Application scope ensures: (Select all that apply)",
    "answers": {
      "a": "The application does not interrupt core business services",
      "b": "Other applications do not interfere with its normal functioning",
      "c": "All scripts run client-side",
      "d": "All data is stored in Global scope"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Application Scope",
    "question": "Artifacts are the application files in an application. Which are listed as examples of artifacts? (Select all that apply)",
    "answers": {
      "a": "Table data",
      "b": "Access Controls",
      "c": "Client Scripts",
      "d": "Business Rules",
      "e": "Table Definitions",
      "f": "Workflows",
      "g": "Access controls"
    },
    "rightAnswers": "b,c,d,e,f,g"
  },
  {
    "category": "Application Scope",
    "question": "Scoped application artifacts (including scripts) automatically begin with a:",
    "answers": {
      "a": "Namespace identifier",
      "b": "Role identifier",
      "c": "Theme identifier",
      "d": "MID identifier"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Application Scope",
    "question": "The scope namespace identifier prefix can be changed or removed.",
    "answers": {
      "a": "True",
      "b": "False (it cannot be changed or removed)",
      "c": "True, but only by admin",
      "d": "True, but only in Global"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application Scope",
    "question": "In the namespace identifier syntax, the Vendor Prefix is:",
    "answers": {
      "a": "Set when the application is first created",
      "b": "Unique ServiceNow-generated prefix for each customer",
      "c": "The unique script name",
      "d": "The application ID"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application Scope",
    "question": "In the namespace identifier syntax, the Application ID is:",
    "answers": {
      "a": "Unique ServiceNow-generated prefix for each customer",
      "b": "Set when the application is first created",
      "c": "The unique script name",
      "d": "Always 'global'"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application Scope",
    "question": "In the namespace identifier syntax, the Script name is the:",
    "answers": {
      "a": "Unique script name",
      "b": "Vendor prefix",
      "c": "Application ID",
      "d": "Scope record name"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Application Scope",
    "question": "Which example best matches the slide's namespace identifier format?",
    "answers": {
      "a": "glide.travel.ExpenseReqBy",
      "b": "x_cld_travel_ExpenseReqBy",
      "c": "sys_script.ExpenseReqBy",
      "d": "travel:ExpenseReqBy"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application Scope",
    "question": "Out-of-scope scripts are:",
    "answers": {
      "a": "Deleted automatically",
      "b": "Read-only",
      "c": "Converted to Global",
      "d": "Editable only by admin"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Client scripts",
    "question": "Client Scripts manage the behavior of which elements in real time? (Select all that apply)",
    "answers": {
      "a": "Forms",
      "b": "Fields",
      "c": "Lists",
      "d": "Database tables directly"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Client scripts",
    "question": "Which actions can Client Scripts perform? (Select all that apply)",
    "answers": {
      "a": "Make fields mandatory",
      "b": "Hide/Show form sections",
      "c": "Directly update database records",
      "d": "Modify choice list options"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client scripts",
    "question": "Client Scripts execute:",
    "answers": {
      "a": "Client-side (web browser)",
      "b": "On the database server",
      "c": "On MID Server",
      "d": "On user device interface"
    },
    "rightAnswers": "a,d"
  },
  {
    "category": "Client scripts",
    "question": "Which tasks are typical uses of Client Scripts? (Select all that apply)",
    "answers": {
      "a": "Display an alert",
      "b": "Create database indexes",
      "c": "Hide fields",
      "d": "Prohibit list editing"
    },
    "rightAnswers": "a,c,d"
  },
  {
    "category": "Client scripts",
    "question": "Which Client Script types determine when the script runs? (Select all that apply)",
    "answers": {
      "a": "onInsert",
      "b": "onChange",
      "c": "onSubmit",
      "d": "onLoad"
    },
    "rightAnswers": "b,c,d"
  },
  {
    "category": "Client scripts",
    "question": "An onLoad() Client Script runs: (Select all that apply)",
    "answers": {
      "a": "When a form loads",
      "b": "Before control is given to the user",
      "c": "After record is saved",
      "d": "When form's fields are validating"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Client scripts",
    "question": "An onSubmit() Client Script is typically used for: (Select all that apply)",
    "answers": {
      "a": "Field validation",
      "b": "Preventing database write",
      "c": "Running when form is saved/updated/submitted",
      "d": "When a form loads"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Client scripts",
    "question": "An onChange() Client Script runs when: (Select all that apply)",
    "answers": {
      "a": "A particular field value changes",
      "b": "Responding to field values of interest",
      "c": "Running when form is saved/updated/submitted",
      "d": "Modifying one field in response to another",
      "e": "The instance restarts"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client scripts",
    "question": "onCellEdit() Client Script is used to: (Select all that apply)",
    "answers": {
      "a": "Control list editing behavior",
      "b": "Ensure data in list fields is controlled",
      "c": "Run on dashboards list widgets",
      "d": "React to cell value change in lists"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client scripts",
    "question": "Which parameters are automatically passed to an onCellEdit() Client Script? (Select all that apply)",
    "answers": {
      "a": "sysIDs",
      "b": "table",
      "c": "oldValues",
      "d": "callback",
      "e": "type",
      "f": "newValue",
    },
    "rightAnswers": "a,b,c,d,f"
  },
  {
    "category": "Client scripts",
    "question": "The callback parameter in onCellEdit(): (Select all that apply)",
    "answers": {
      "a": "Continues execution of related cell edit scripts",
      "b": "Deletes record when false",
      "c": "Commits change when true",
      "d": "Must return true or false"
    },
    "rightAnswers": "a,c,d"
  },
  {
    "category": "Client scripts",
    "question": "Client Script form fields include: (Select all that apply)",
    "answers": {
      "a": "Name",
      "b": "Table",
      "c": "UI Type",
      "d": "Type"
    },
    "rightAnswers": "a,b,c,d"
  },
  {
    "category": "Client scripts",
    "question": "In Catalog client scripts the UI Type field determines: (Select all that apply)",
    "answers": {
      "a": "Desktop execution",
      "b": "Mobile/Service Portal",
      "c": "Database schema",
      "d": "Or both Desktop execution and Mobile/Service Portal"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client scripts",
    "question": "In Catalog client scripts the Variable Name Type field determines: (Select all that apply)",
    "answers": {
      "a": "Identify which field to watch for chabges when onSubmit is selected as the Type.",
      "b": "Identify which field to watch for chabges when onChange is selected as the Type.",
      "a": "Identify which field to watch for chabges when onOload is selected as the Type.",
      "d": "Identify which field to watch for chabges when Before Async is selected as the Type."
    },
    "rightAnswers": "b"
  },
  {
    "category": "Client scripts",
    "question": "The Active checkbox in a Client Script means: (Select all that apply)",
    "answers": {
      "a": "Script executes in runtime environment",
      "b": "Script is enabled",
      "c": "Script deletes itself",
      "d": "Script will run when conditions are met"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client scripts",
    "question": "In client scripts the Global checkbox indicates: (Select all that apply)",
    "answers": {
      "a": "Script applies to all Views",
      "b": "No View must be specified",
      "c": "Script becomes server-side",
      "d": "Script applies to entire platform"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Client scripts",
    "question": "The View field in Client Scripts is not applied for: (Select all that apply)",
    "answers": {
      "a": "Specifies the form view wi wchich the script applies.",
      "b": "Visible only when Global is not selected.",
      "c": "Limits script to selected form view.",
      "d": "Identifies the scope of the script."
    },
    "rightAnswers": "d"
  },
  {
    "category": "Client scripts",
    "question": "Catalog Client Scripts run when: (Select all that apply)",
    "answers": {
      "a": "User orders an item",
      "b": "Variables are displayed",
      "c": "Database scheduled job executes",
      "d": "Variable sets are displayed "
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client scripts",
    "question": "Catalog Client Script configuration includes: (Select all that apply)",
    "answers": {
      "a": "Applies to a Catalog Itemview",
      "b": "Variable name",
      "c": "UI Type",
      "d": "Global",
      "e": "Script",
    },
    "rightAnswers": "a,b,c,e"
  },
  {
    "category": "Client scripts",
    "question": "Catalog Client Script run in the situations when: (Select all that apply)",
    "answers": {
      "a": "User orders an item from the service catalog.",
      "b": "When variables or variable sets for a catalog item are deleted from a form wiev.",
      "c": "When variables or variable sets for a catalog item are displayed when a user requests that item.",
      "d": "User refuses an item from the service catalog."
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Client scripts",
    "question": "Client Scripts are typically used to set one field in response to another field and modify user interface behavior in real time.",
    "answers": {
      "a": "True",
      "b": "False",
      "c": "Only in Global scope",
      "d": "Only in Business Rules"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Client side API",
    "question": "Which predefined client-side objects are commonly available in a Client Script? (Select all that apply)",
    "answers": {
      "a": "g_form",
      "b": "GlideRecord",
      "c": "g_scratchpad",
      "d": "g_user",
      "e": "GlideSystem"
    },
    "rightAnswers": "a,c,d"
  },
  {
    "category": "Client side API",
    "question": "The g_form object is used to: (Select all that apply)",
    "answers": {
      "a": "Manage the form's fields",
      "b": "Retrieve field values",
      "c": "Directly query database tables",
      "d": "Change field values",
      "e": "Manage events OnSubmit and OnChange"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client side API",
    "question": "The g_user object provides: (Select all that apply)",
    "answers": {
      "a": "Cliers a field's value",
      "b": "User session details about the current user logged in tho platform.",
      "c": "Adds an option to the end of a Choice list",
      "d": "User role information",
      "e": "Information about the logged-in user"
    },
    "rightAnswers": "b,d,e"
  },
  {
    "category": "Client side API",
    "question": "The g_scratchpad object: (Select all that apply)",
    "answers": {
      "a":"Object modified by a Client Script sent to a server-side script know as a Display business rule.",
      "b":"Object refused from a Client Script to a server-side script know as a Display business rule.",
      "c":"Object passed to a Client Script from a server-side script know as a Display business rule.",
      "d":"All answers above are false.",
    },
    "rightAnswers": "c"
  },
  {
    "category": "Client side API",
    "question": "Which g_form methods modify a field value? (Select all that apply)",
    "answers": {
      "a": "setValue()",
      "b": "getValue()",
      "c": "clearValue()",
      "d": "addInfoMessage()"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Client side API",
    "question": "Which g_form methods display messages to users? (Select all that apply)",
    "answers": {
      "a": "getSections()",
      "b": "clearMessages()",
      "c": "addInfoMessage()",
      "d": "showFieldMsg()"
    },
    "rightAnswers": "c,d"
  },
  {
    "category": "Client side API",
    "question": "Which g_form methods work with choice lists? (Select all that apply)",
    "answers": {
      "a": "addOption()",
      "b": "setValue()",
      "c": "getValue()",
      "d": "clearOptions()"
    },
    "rightAnswers": "a,d"
  },
  {
    "category": "Client side API",
    "question": "Which g_form methods retrieve information rather than modify it? (Select all that apply)",
    "answers": {
      "a": "getValue()",
      "b": "getSections()",
      "c": "flash()",
      "d": "isNewRecord()",
      "e": "addOption()"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client side API",
    "question": "GlideForm (g_form) methods are:",
    "answers": {
      "a": "Used in Business Rules", 
      "b": "Only used server-side",
      "c": "Only used client-side",
      "d": "Used in Script Includes"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Client side API",
    "question": "Which g_user methods evaluate roles? (Select all that apply)",
    "answers": {
      "a": "hasMainRole()",
      "b": "hasRole()",
      "c": "hasRoleExactly()",
      "d": "hasRoles()",
      "e": "hasMainRoleExactly()",
    },
    "rightAnswers": "b,c,d"
  },
  {
    "category": "Client side API",
    "question": "Which g_user properties are available? (Select all that apply)",
    "answers": {
      "a": "tableName",
      "b": "lastName",
      "c": "userID",
      "d": "firstName",
      "e": "previousName"
    },
    "rightAnswers": "b,c,d"
  },
  {
    "category": "Client side API",
    "question": "Which g_user methods return true if the user has at least one role? (Select all that apply)",
    "answers": {
      "a": "hasRoles()",
      "b": "hasRole()",
      "c": "hasSystemRole()",
      "d": "hasRoleFromList()",
      "e": "hasAdminRole()",
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client side API",
    "question": "Why should g_user NOT be relied upon for security? (Select all that apply)",
    "answers": {
      "a": "Server Database can delete platform artifacts",
      "b": "Browser developer tools can manipulate it",
      "c": "It runs server-side",
      "d": "Server-side ACLs are required",
      "e": "Client-side security can be bypassed",
    },
    "rightAnswers": "b,d,e"
  },
  {
    "category": "Client side API",
    "question": "Which debugging approaches are valid for client scripts? (Select all that apply)",
    "answers": {
      "a": "addInfoMessage()",
      "b": "gs.log()",
      "c": "addErrorMessage()",
      "d": "Browser JavaScript console",
      "e": "gs.info()",
      "f": "ServiceNow built in vielnt side debuuging tools",
      "g": "using try/catch",
      "h": "alert()"
    },
    "rightAnswers": "a,c,d,f,g,h"
  },
  {
    "category": "Client side API",
    "question": "ServiceNow built-in client-side debugging tools include: (Select all that apply)",
    "answers": {
      "a": "Script debug messages",
      "b": "Workflow Context",
      "c": "Response Time Indicator",
      "d": "JavaScript console"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Client side API",
    "question": "JavaScript debugging techniques in client scripts include: (Select all that apply)",
    "answers": {
      "a": "alert()",
      "b": "try/catch",
      "c": "GlideAggregate",
      "d": "Web console"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client side API",
    "question": "Client-side scripts have access to:",
    "answers": {
      "a": "Entire database",
      "b": "Data on the form only",
      "c": "Server memory",
      "d": "System tables"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Client side API",
    "question": "Reference object true statemets are:",
    "answers": {
      "a": "Exist on a different table",
      "b": "Are fully loaded into the form",
      "c": "Require server trip to retrieve fields",
      "d": "Are stored as sys_id on the form"
    },
    "rightAnswers": "a,c,d"
  },
  {
    "category": "Client side API",
    "question": "Reference fields in a form store:",
    "answers": {
      "a": "sys_id",
      "b": "Entire referenced record",
      "c": "Display value only",
      "d": "Foreign database connection"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Client side API",
    "question": "Why should you minimize server trips when retrieving reference data? (Select all that apply)",
    "answers": {
      "a": "Server trips take time",
      "b": "It improves performance",
      "c": "Client scripts cannot run otherwise",
      "d": "Network latency affects user experience"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Client side API",
    "question": "Which g_form method highlights a field label?",
    "answers": {
      "a": "setValue()",
      "b": "getValue()",
      "c": "flash()",
      "d": "getSections()"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Client side API",
    "question": "Which methods determine if a record has never been saved?",
    "answers": {
      "a": "isNewRecord()",
      "b": "getSections()",
      "c": "getValue()",
      "d": "clearValue()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Client side API",
    "question": "Which object improves user experience by controlling how the platform looks and behaves in the browser? (Select all that apply)",
    "answers": {
      "a": "g_form",
      "b": "g_user",
      "c": "Client-side APIs",
      "d": "Display Business Rule server execution"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Client side API",
    "question": "The g_user.getFullName() method returns:",
    "answers": {
      "a": "User sys_id",
      "b": "Username",
      "c": "only logged user's first name",
      "d": "logged user's first and last name separated by a space"
    },
    "rightAnswers": "d"
  },
  {
    "category": "Client side API",
    "question": "Which statement about reference objects is correct? (Select all that apply)",
    "answers": {
      "a": "Fields cannot be directly referenced in Client Scripts",
      "b": "Retrieving them requires server communication",
      "c": "Form only store the reference object sys_id",
      "d": "All the reference object data is loaded into form",
      "e": "They belong to another table"
    },
    "rightAnswers": "a,b,c,e"
  },
  {
    "category": "UI Policies",
    "question": "A UI Policy defines which field behaviors? (Select all that apply)",
    "answers": {
      "a": "Mandatory",
      "b": "Visible",
      "c": "Read-only",
      "d": "Editable-only"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "UI Policies",
    "question": "When does a UI Policy execute?",
    "answers": {
      "a": "Only on server restart",
      "b": "When its condition evaluates to true",
      "c": "Before Business Rules"
    },
    "rightAnswers": "b"
  },
  {
    "category": "UI Policies",
    "question": "In the basic case, UI Policies:",
    "answers": {
      "a": "Require JavaScript",
      "b": "Do not require scripting",
      "c": "Must use GlideRecord",
      "d": "Always require a Script Include"
    },
    "rightAnswers": "b"
  },
  {
    "category": "UI Policies",
    "question": "UI Policy scripts execute:",
    "answers": {
      "a": "Server-side",
      "b": "On MID Server",
      "c": "Client-side",
      "d": "In database only"
    },
    "rightAnswers": "b"
  },
  {
    "category": "UI Policies",
    "question": "Which fields are part of configuring a UI Policy trigger? (Select all that apply)",
    "answers": {
      "a": "Table",
      "b": "Application",
      "c": "Active",
      "d": "Short description"
    },
    "rightAnswers": "a,b,c,d"
  },
  {
    "category": "UI Policies",
    "question": "The Order field in a UI Policy determines:",
    "answers": {
      "a": "Script execution priority on server",
      "b": "Database table order",
      "c": "Form layout order",
      "d": "Execution sequence among multiple UI Policies"
    },
    "rightAnswers": "d"
  },
  {
    "category": "UI Policies",
    "question": "UI Policy Actions can control which field states? (Select all that apply)",
    "answers": {
      "a": "Mandatory",
      "b": "Visible",
      "c": "Reference qualifier",
      "d": "Read-only"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "UI Policies",
    "question": "If the 'When to Apply' condition is left blank:",
    "answers": {
      "a": "The UI Policy never runs",
      "b": "The UI Policy always executes",
      "c": "The UI Policy runs only on submit",
      "d": "The UI Policy runs server-side"
    },
    "rightAnswers": "b"
  },
  {
    "category": "UI Policies",
    "question": "Does Ui policy contain a Name field?",
    "answers": {
      "a": "Yes it contains Name field.",
      "b": "It contains based on the view.",
      "c": "No it does not contains Name field.",
    },
    "rightAnswers": "c"
  },
  {
    "category": "UI Policies",
    "question": "The Condition Builder is:",
    "answers": {
      "a": "Unique to UI Policies",
      "b": "Used across the platform",
      "c": "Server-side only",
      "d": "Required for scripting"
    },
    "rightAnswers": "b"
  },
  {
    "category": "UI Policies",
    "question": "The Global checkbox on a UI Policy means:",
    "answers": {
      "a": "Applies to all form views",
      "b": "Applies only to default view",
      "c": "Overrides Client Scripts",
      "d": "Runs on all tables"
    },
    "rightAnswers": "a"
  },
  {
    "category": "UI Policies",
    "question": "The View field is visible when:",
    "answers": {
      "a": "Global is selected",
      "b": "Global is not selected",
      "c": "Application is Global",
      "d": "Run scripts is checked"
    },
    "rightAnswers": "b"
  },
  {
    "category": "UI Policies",
    "question": "Reverse if false means: (Select all that apply)",
    "answers": {
      "a": "UI Policy actions are reversed when conditions evaluate to false",
      "b": "Execute if false script runs",
      "c": "The record is deleted",
      "d": "The policy is disabled"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "UI Policies",
    "question": "On load option causes the UI Policy to:",
    "answers": {
      "a": "Execute on form load",
      "b": "Execute on form change",
      "c": "Execute on server update",
      "d": "Run Business Rules"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "UI Policies",
    "question": "Inherit option means:",
    "answers": {
      "a": "Applies to extended tables",
      "b": "Applies only to parent table",
      "c": "Copies policy to all applications",
      "d": "Forces server execution"
    },
    "rightAnswers": "a"
  },
  {
    "category": "UI Policies",
    "question": "Conditions are re-evaluated when:",
    "answers": {
      "a": "Form reloads",
      "b": "System updates the field automatically",
      "c": "User manually changes a field",
      "d": "User logs in"
    },
    "rightAnswers": "c"
  },
  {
    "category": "UI Policies",
    "question": "Which feature should be used to enforce mandatory or read-only states for records not changed on a form?",
    "answers": {
      "a": "Client Script",
      "b": "Data Policy",
      "c": "Business Rule",
      "d": "UI Action"
    },
    "rightAnswers": "b"
  },
  {
    "category": "UI Policies",
    "question": "Run scripts in UI Type determines:",
    "answers": {
      "a": "Desktop only",
      "b": "Mobile/Service Portal only",
      "d": "Database scope"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "UI Policies",
    "question": "Execute if true script runs when:",
    "answers": {
      "a": "Condition evaluates to true",
      "b": "Condition evaluates to false",
      "c": "Form is deleted",
      "d": "Server restarts"
    },
    "rightAnswers": "a"
  },
  {
    "category": "UI Policies",
    "question": "Execute if false script runs when:",
    "answers": {
      "a": "Condition evaluates to true",
      "b": "Condition evaluates to false",
      "c": "Client Script fails",
      "d": "Data Policy fails"
    },
    "rightAnswers": "b"
  },
  {
    "category": "UI Policies",
    "question": "The onCondition() function is automatically called when:",
    "answers": {
      "a": "Condition returns true",
      "b": "Condition returns false",
      "c": "Form saves",
      "d": "Script Include executes"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "UI Policies",
    "question": "A UI Policy can evaluate:",
    "answers": {
      "a": "Any field in the record",
      "b": "Only visible fields",
      "c": "Only mandatory fields",
      "d": "Only reference fields"
    },
    "rightAnswers": "a"
  },
  {
    "category": "UI Policies",
    "question": "UI Policies can be created:",
    "answers": {
      "a": "for tables accross various scoper",
      "b": "for tables only in a global scope",
      "c": "for tables in the same scope",
      "d": "all of the below answers are true"
    },
    "rightAnswers": "c"
  },
  {
    "category": "UI Policies",
    "question": "A field specified in a UI Policy Action must:",
    "answers": {
      "a": "Exist on the form",
      "b": "Be server-side",
      "c": "Be reference type",
      "d": "Be mandatory already"
    },
    "rightAnswers": "a"
  },
  {
    "category": "UI Policies",
    "question": "Which data is available inside a UI Policy script? (Select all that apply)",
    "answers": {
      "a": "GlideSystem",
      "b": "g_user",
      "c": "g_scratchpad",
      "d": "GlideRecord",
      "e": "g_form",
    },
    "rightAnswers": "b,c,e"
  },
  {
    "category": "UI Policies",
    "question": "UI Policies can:",
    "answers": {
      "a": "Execute on form load",
      "b": "Execute on field value change",
      "c": "Execute on form submit",
      "d": "Execute after Client Scripts"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "UI Policies",
    "question": "Compared to Client Scripts, UI Policies:",
    "answers": {
      "a": "Do not always require scripting",
      "b": "Execute after Client Scripts",
      "c": "Cannot execute on form load",
      "d": "Have access only to prior field values"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "UI Policies",
    "question": "Which step is NOT part of creating a UI Policy?",
    "answers": {
      "a": "Configure UI Policy trigger",
      "b": "Configure When to Apply conditions",
      "c": "Create GlideRecord query",
      "d": "Configure UI Policy Actions"
    },
    "rightAnswers": "c"
  },
  {
    "category": "UI Policies",
    "question": "UI Policies do NOT have a:",
    "answers": {
      "a": "Name field",
      "b": "Short description field",
      "c": "Application field",
      "d": "Table field"
    },
    "rightAnswers": "a"
  },
  {
    "category": "UI Policies",
    "question": "Policy scripting allows you to: (Select all that apply)",
    "answers": {
      "a": "Script complex conditions",
      "b": "Execute advanced behavior",
      "c": "Show/Hide sections",
      "d": "Directly update database records"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "UI Policies",
    "question": "Which statement is true regarding execution order?",
    "answers": {
      "a": "UI Policies execute before Client Scripts",
      "b": "UI Policies execute after Client Scripts",
      "c": "Client Scripts execute after UI Policies",
      "d": "Both execute server-side"
    },
    "rightAnswers": "b"
  },
  {
    "category": "UI Policies",
    "question": "Which best describes UI Policy Actions?",
    "answers": {
      "a": "They define what to execute",
      "b": "They define when to execute",
      "c": "They modify field states",
      "d": "They create database triggers"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Business Rules",
    "question": "Business Rules run when which events occur? (Select all that apply)",
    "answers": {
      "a": "Record is inserted",
      "b": "Record is updated",
      "c": "Record is deleted",
      "d": "User moves a form section"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Business Rules",
    "question": "Business Rules execute:",
    "answers": {
      "a": "Client-side",
      "b": "Server-side",
      "c": "MID Server only",
      "d": "Browser UI thread"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Business Rules",
    "question": "Business Rules can be triggered when: (Select all that apply)",
    "answers": {
      "a": "A table is queried",
      "b": "A record is displayed",
      "c": "A record is updated",
      "d": "A dashboard widget loads"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Business Rules",
    "question": "Business Rules are typically used to:",
    "answers": {
      "a": "Change field values when conditions are met",
      "b": "Control form layout",
      "c": "Modify CSS",
      "d": "Animate UI elements"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Business Rules",
    "question": "Business Rules do NOT monitor:",
    "answers": {
      "a": "Forms",
      "b": "Lists",
      "c": "Database operations",
      "d": "Record access"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Business Rules",
    "question": "Which configuration fields define a Business Rule trigger? (Select all that apply)",
    "answers": {
      "a": "Name",
      "b": "Application",
      "c": "Table",
      "d": "Trigger",
      "e": "Active",
    },
    "rightAnswers": "a,b,c,e"
  },
  {
    "category": "Business Rules",
    "question": "The Advanced checkbox in a Business Rule:",
    "answers": {
      "a": "Creates a UI Policy",
      "b": "Deletes records automatically",
      "c": "Enables scripting options",
      "d": "Runs client scripts"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Business Rules",
    "question": "Business Rules can execute on which operations? (Select all that apply)",
    "answers": {
      "a": "Insert",
      "b": "Update",
      "c": "Delete",
      "d": "Query",
      "e": "nSubmit()"
    },
    "rightAnswers": "a,b,c,d"
  },
  {
    "category": "Business Rules",
    "question": "Filter Conditions in a Business Rule:",
    "answers": {
      "a": "Must evaluate to true to run",
      "b": "Are optional",
      "c": "Only apply to UI",
      "d": "Only apply to Client Scripts"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Business Rules",
    "question": "Role conditions:",
    "answers": {
      "a": "Control database indexing",
      "b": "Change ACLs",
      "c": "Restrict execution to specific roles",
      "d": "Define UI Policy behavior"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Business Rules",
    "question": "The 'When' field determines:",
    "answers": {
      "a": "Timing relative to database access",
      "b": "Table relationships",
      "c": "Form layout",
      "d": "Client-side behavior"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Business Rules",
    "question": "Before Business Rules execute:",
    "answers": {
      "a": "Before record is onloaded in form",
      "b": "Before record is written to database",
      "c": "After client script",
      "d": "After async rules"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Business Rules",
    "question": "After Business Rules execute:",
    "answers": {
      "a": "After form load",
      "b": "Before database update",
      "c": "After database update",
      "d": "Before query"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Business Rules",
    "question": "Display Business Rules:",
    "answers": {
      "a": "Populate g_scratchpad",
      "b": "Run before form is presented",
      "c": "Run client-side",
      "d": "Only update records"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Business Rules",
    "question": "Before Query Business Rules:",
    "answers": {
      "a": "Execute before query sent to DB",
      "b": "Control data visibility",
      "c": "Run asynchronously",
      "d": "Run after display"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Business Rules",
    "question": "Async Business Rules:",
    "answers": {
      "a": "Run using scheduler",
      "b": "Do not delay user transaction",
      "c": "Have access to previous record",
      "d": "Run synchronously"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Business Rules",
    "question": "The previous object:",
    "answers": {
      "a": "Contains objects's values before change",
      "b": "Available in Async rules",
      "c": "Contains object's original values",
      "d": "Represents UI form"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Business Rules",
    "question": "The current object:",
    "answers": {
      "a": "Contains previous field values",
      "b": "Contains latest field values",
      "c": "Client-side only",
      "d": "Stores form layout"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Business Rules",
    "question": "g_scratchpad in Business Rules:",
    "answers": {
      "a": "Used in Display Business Rules",
      "b": "Stores previous values",
      "c": "Passes data to Client Scripts",
      "d": "Only works in Async rules"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Business Rules",
    "question": "To view Async Business Rules queued for execution, navigate to:",
    "answers": {
      "a": "System Scheduler > Scheduled Jobs",
      "b": "System Logs",
      "c": "UI Policies",
      "d": "Update Sets"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Business Rules",
    "question": "Business Rule Actions allow you to: (Select all that apply)",
    "answers": {
      "a": "Set field values",
      "b": "Add messages",
      "c": "Abort action",
      "d": "Modify ACLs"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Business Rules",
    "question": "Abort Action:",
    "answers": {
      "a": "Stops database transaction",
      "b": "Allows message display",
      "c": "Deletes table",
      "d": "Creates UI Action"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Business Rules",
    "question": "Script field on Advanced tab:",
    "answers": {
      "a": "Runs when conditions true",
      "b": "Runs server-side",
      "c": "Runs client-side",
      "d": "Runs always"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Business Rules",
    "question": "Both conditions required for script execution:",
    "answers": {
      "a": "Are client Script enabled",
      "b": "Advanced condition is true",
      "c": "UI Policy active",
      "d": "When to run conditions true"
    },
    "rightAnswers": "b,d"
  },
  {
    "category": "Business Rules",
    "question": "Server-side global variables include:",
    "answers": {
      "a": "current",
      "b": "previous",
      "c": "g_form",
      "d": "g_scratchpad"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Business Rules",
    "question": "Logging methods include: (Select all that apply)",
    "answers": {
      "a": "gs.info()",
      "b": "gs.error()",
      "c": "gs.warn()",
      "d": "gs.debug()",
      "e": "jsLog()"
    },
    "rightAnswers": "a,b,c,d"
  },
  {
    "category": "Business Rules",
    "question": "gs.log():",
    "answers": {
      "a": "Legacy logging method",
      "b": "Not usable in scoped apps",
      "c": "Preferred in scoped apps",
      "d": "Client-side method"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Business Rules",
    "question": "System logs can be viewed via:",
    "answers": {
      "a": "System Logs module",
      "b": "Reports",
      "c": "System Logs module",
      "d": "Dashboards only"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Business Rules",
    "question": "Business Rules defined on database views - when table is queried in the database:",
    "answers": {
      "a": "Run only on Query",
      "b": "Cannot run on Insert",
      "c": "Cannot run on Query",
      "d": "Cannot run on Update",
      "e": "Cannot run on Delete"
    },
    "rightAnswers": "a,b,d,e"
  },
  {
    "category": "Business Rules",
    "question": "Order field:",
    "answers": {
      "a": "Determines execution sequence",
      "b": "Changes database schema",
      "c": "Defines table order",
      "d": "Runs lowest to highest"
    },
    "rightAnswers": "a,d"
  },
  {
    "category": "Business Rules",
    "question": "Async Business Rules are useful for:",
    "answers": {
      "a": "Notifications",
      "b": "Heavy processing",
      "c": "Immediate UI response"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Business Rules",
    "question": "Business Rules respond to:",
    "answers": {
      "a": "Database record access",
      "b": "Form styling",
      "c": "Client UI animation",
      "d": "Browser events"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Business Rules",
    "question": "Display Business Rule primary purpose:",
    "answers": {
      "a": "Provide client scripts access to server data",
      "b": "Modify CSS",
      "c": "Send email",
      "d": "Create tables"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Business Rules",
    "question": "Synchronous Business Rules:",
    "answers": {
      "a": "Must finish before next rule runs",
      "b": "Run immediately",
      "c": "Queued by scheduler",
      "d": "Skip database"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Business Rules",
    "question": "Async rules do not have access to:",
    "answers": {
      "a": "table name",
      "b": "current record",
      "c": "previous record",
      "d": "gs object"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Business Rules",
    "question": "Business Rules are faster than client scripts because:",
    "answers": {
      "a": "They execute server-side",
      "b": "They bypass database",
      "c": "They always run async",
      "d": "They avoid browser processing"
    },
    "rightAnswers": "a,d"
  },
   {
    "category": "ServiceNow Studio",
    "question": "In ServiceNow Studio, developers can open and edit applications in which scopes?",
    "answers": {
      "a": "Only Global scope",
      "b": "Only Custom scope",
      "c": "Any scope including Global or Custom",
      "d": "Only Scoped applications downloaded from the store"
    },
    "rightAnswers": "c"
  },
  {
    "category": "ServiceNow Studio",
    "question": "Which feature allows developers to quickly locate scripts and configuration files within ServiceNow Studio?",
    "answers": {
      "a": "Code search",
      "b": "Update sets",
      "c": "Application navigator",
      "d": "Workflow editor"
    },
    "rightAnswers": "a"
  },
  {
    "category": "ServiceNow Studio",
    "question": "How can applications be deployed directly from ServiceNow Studio?",
    "answers": {
      "a": "Only through external Git repositories",
      "b": "Through update sets or the internal application repository",
      "c": "Through the CMDB",
      "d": "Through Business Rules"
    },
    "rightAnswers": "b"
  },
  {
    "category": "ServiceNow Studio",
    "question": "Which testing capability can be launched directly from ServiceNow Studio?",
    "answers": {
      "a": "Performance Analytics",
      "b": "Script Debugger",
      "c": "Automated Test Framework",
      "d": "Service Portal Designer"
    },
    "rightAnswers": "c"
  },
  {
    "category": "ServiceNow Studio",
    "question": "ServiceNow Studio does NOT provide which of the following capabilities?",
    "answers": {
      "a": "Global application files management",
      "b": "Ability to push to external source control",
      "c": "Quick creation of scripts and files",
      "d": "Code search"
    },
    "rightAnswers": "b"
  },
  {
    "category": "ServiceNow Studio",
    "question": "Which environment style does ServiceNow Studio provide for application development?",
    "answers": {
      "a": "Single-page command line interface",
      "b": "Navigation and tabbed environment",
      "c": "Mobile-only development interface",
      "d": "External desktop IDE environment"
    },
    "rightAnswers": "b"
  },
  {
    "category": "ServiceNow Studio",
    "question": "What can developers quickly create using ServiceNow Studio?",
    "answers": {
      "a": "Database servers",
      "b": "Scripts and files",
      "c": "External APIs",
      "d": "Network devices"
    },
    "rightAnswers": "b"
  },
  {
    "category": "ServiceNow Studio",
    "question": "Which feature allows development across different application scopes in ServiceNow Studio?",
    "answers": {
      "a": "Cross-scope development environment",
      "b": "CMDB relationship manager",
      "c": "Flow Designer",
      "d": "Import set transformer"
    },
    "rightAnswers": "a"
  },
  {
    "category": "ServiceNow Studio",
    "question": "If ServiceNow Studio cannot push directly to external source control, what should developers use instead?",
    "answers": {
      "a": "Business Rules",
      "b": "Update sets",
      "c": "Service Portal",
      "d": "Transform Maps"
    },
    "rightAnswers": "b"
  },
  {
    "category": "ServiceNow Studio",
    "question": "What should be used to manage script intellectual property protection instead of ServiceNow Studio?",
    "answers": {
      "a": "Data Policies",
      "b": "ACL rules",
      "c": "Manage project access",
      "d": "Client Scripts"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Glide Record",
    "question": "Which method must be called before iterating through records returned by GlideRecord?",
    "answers": {
      "a": "next()",
      "b": "initialize()",
      "c": "query()",
      "d": "insert()"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Glide Record",
    "question": "Which GlideRecord method moves to the next record in the result set?",
    "answers": {
      "a": "query()",
      "b": "get()",
      "c": "next()",
      "d": "update()"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Glide Record",
    "question": "Which methods can be used to retrieve a single record using GlideRecord?",
    "answers": {
      "a": "get(sys_id)",
      "b": "addQuery()",
      "c": "get(field, value)",
      "d": "initialize()"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Glide Record",
    "question": "What is the purpose of the initialize() method in GlideRecord?",
    "answers": {
      "a": "Executes the database query",
      "b": "Creates a new empty record in memory",
      "c": "Deletes a record",
      "d": "Commits the record to the database"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide Record",
    "question": "Which method writes a new record to the database?",
    "answers": {
      "a": "update()",
      "b": "insert()",
      "c": "addQuery()",
      "d": "query()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide Record",
    "question": "Which GlideRecord method updates an existing record in the database?",
    "answers": {
      "a": "save()",
      "b": "write()",
      "c": "update()",
      "d": "commit()"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Glide Record",
    "question": "Which of the following are valid ways to filter records in GlideRecord?",
    "answers": {
      "a": "addQuery()",
      "b": "addEncodedQuery()",
      "c": "setLimit()",
      "d": "addFilterCondition()"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Glide Record",
    "question": "What happens if next() is never called after query()?",
    "answers": {
      "a": "The query will fail",
      "b": "No records will be accessed",
      "c": "All records are automatically processed",
      "d": "The first record is automatically returned"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide Record",
    "question": "Which statements about GlideRecord are true?",
    "answers": {
      "a": "GlideRecord can be used in Business Rules",
      "b": "GlideRecord can be used in Client Scripts",
      "c": "GlideRecord interacts with database tables",
      "d": "GlideRecord only works in Flow Designer"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Glide Record",
    "question": "Which GlideRecord method deletes the current record from the database?",
    "answers": {
      "a": "remove()",
      "b": "deleteRecord()",
      "c": "delete()",
      "d": "eraseRecord()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide Record",
    "question": "Given the code below, what does it do?\n\nvar gr = new GlideRecord('incident');\ngr.get('active', true);\n\ngs.info(gr.number);",
    "answers": {
      "a": "Logs the number of the first active incident found (if any)",
      "b": "Logs the number of all active incidents",
      "c": "Throws an error because get() cannot be used with a boolean value",
      "d": "Always logs a blank value because query() was not called"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide Record",
    "question": "What is the issue with the following code?\n\nvar gr = new GlideRecord('incident');\ngr.query();\nwhile (gr.next()) {\n  if (gr.active) {\n    gs.info(gr.number);\n  }\n}",
    "answers": {
      "a": "It queries all incidents and filters in memory instead of in the database",
      "b": "It will not return any records because addQuery() was not used",
      "c": "It will only return inactive incidents due to a logic error",
      "d": "It will throw an error because active is not a valid field on incident"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide Record",
    "question": "Which code correctly limits the result set to 5 records?\n\n(Assume 'gr' is a valid GlideRecord for the incident table.)",
    "answers": {
      "a": "gr.setLimit(5); gr.query();",
      "b": "gr.query(); gr.setLimit(5);",
      "c": "gr.addQuery('LIMIT', 5); gr.query();",
      "d": "gr.limit(5).query();"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide Record",
    "question": "What will the following code do?\n\nvar gr = new GlideRecord('incident');\ngr.initialize();\ngr.short_description = 'Test';\ngr.update();",
    "answers": {
      "a": "Creates a new incident record",
      "b": "Fails because update() requires an existing record (sys_id)",
      "c": "Updates all incident records setting short_description to 'Test'",
      "d": "Creates a new incident record only if autoSysFields is false"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide Record",
    "question": "Which code correctly creates a new Incident record?\n\n(Assume this runs server-side with proper permissions.)",
    "answers": {
      "a": "var gr = new GlideRecord('incident'); gr.initialize(); gr.short_description='Test'; gr.insert();",
      "b": "var gr = new GlideRecord('incident'); gr.query(); gr.short_description='Test'; gr.insert();",
      "c": "var gr = new GlideRecord('incident'); gr.newRecord(); gr.query(); gr.insert();",
      "d": "var gr = new GlideRecord('incident'); gr.get('sys_id','-1'); gr.short_description='Test'; gr.update();"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide Record",
    "question": "Given the code below, what is the best explanation of what it returns?\n\nvar gr = new GlideRecord('incident');\ngr.addQuery('priority', '1');\ngr.orderByDesc('sys_created_on');\ngr.setLimit(1);\ngr.query();\nif (gr.next()) {\n  gs.info(gr.number);\n}",
    "answers": {
      "a": "The oldest priority 1 incident",
      "b": "The most recently created priority 1 incident",
      "c": "All priority 1 incidents sorted by newest first",
      "d": "A random priority 1 incident"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide Record",
    "question": "Which statements are true about the following code?\n\nvar gr = new GlideRecord('incident');\ngr.addEncodedQuery('active=true^priority=2');\ngr.query();",
    "answers": {
      "a": "It filters records at the database level",
      "b": "It filters records only after all incidents are retrieved",
      "c": "It returns active incidents with priority 2",
      "d": "It will fail unless setLimit() is also used"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Glide Record",
    "question": "What does the following code do?\n\nvar gr = new GlideRecord('incident');\nif (gr.get('sys_id', someSysId)) {\n  gr.active = false;\n  gr.update();\n}",
    "answers": {
      "a": "Deactivates exactly one incident if the sys_id exists",
      "b": "Deactivates all incidents with the same sys_id value",
      "c": "Creates a new incident if sys_id is not found",
      "d": "Throws an error because sys_id cannot be used in get()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide Record",
    "question": "Which code correctly checks whether a GlideRecord query returned any rows?\n\n(Assume 'gr' is a valid GlideRecord and query() has already been called.)",
    "answers": {
      "a": "if (gr.hasNext()) { /* rows exist */ }",
      "b": "if (gr.hasResults()) { /* rows exist */ }",
      "c": "if (gr.next()) { /* rows exist */ }",
      "d": "if (gr.getRowCount() > 0) { /* rows exist */ }"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Glide Record",
    "question": "Which code is the best practice to update multiple records efficiently?\n\nGoal: Set active=false for all incidents where priority=4.",
    "answers": {
      "a": "Use GlideRecord with addQuery('priority', 4) and loop with next() calling update() each time",
      "b": "Use GlideRecord with addQuery('priority', 4) and call updateMultiple() after setting the field value",
      "c": "Use GlideRecord without a query and loop through all incidents, updating those with priority=4",
      "d": "Use gr.update() once after query() to update all matching records automatically"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide System",
    "question": "Which GlideSystem method writes a message to the System Log (All)?",
    "answers": {
      "a": "gs.print()",
      "b": "gs.log()",
      "c": "gs.info()",
      "d": "gs.message()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide System",
    "question": "Which GlideSystem methods are available in scoped applications?",
    "answers": {
      "a": "gs.info()",
      "b": "gs.warn()",
      "c": "gs.error()",
      "d": "gs.log()"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Glide System",
    "question": "What does gs.getUserID() return?",
    "answers": {
      "a": "The username of the current user",
      "b": "The sys_id of the current user",
      "c": "The display name of the current user",
      "d": "The email of the current user"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide System",
    "question": "Which method retrieves the current user's display name?",
    "answers": {
      "a": "gs.getUserName()",
      "b": "gs.getUserDisplayName()",
      "c": "gs.getDisplayValue()",
      "d": "gs.getUser().getDisplayName()"
    },
    "rightAnswers": "d"
  },
  {
    "category": "Glide System",
    "question": "Which GlideSystem method checks if a value is empty, null, or undefined?",
    "answers": {
      "a": "gs.empty()",
      "b": "gs.nil()",
      "c": "gs.isNull()",
      "d": "gs.hasValue()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide System",
    "question": "What is the purpose of gs.addInfoMessage()?",
    "answers": {
      "a": "Adds a message to the system log",
      "b": "Displays a message to the user in the UI",
      "c": "Sends an email notification",
      "d": "Creates a work note"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide System",
    "question": "Which method queues an event in ServiceNow?",
    "answers": {
      "a": "gs.addEvent()",
      "b": "gs.queueEvent()",
      "c": "gs.eventQueue()",
      "d": "gs.triggerEvent()"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Glide System",
    "question": "Which GlideSystem method retrieves a system property?",
    "answers": {
      "a": "gs.getProperty()",
      "b": "gs.property()",
      "c": "gs.getSystemProperty()",
      "d": "gs.readProperty()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide System",
    "question": "Which GlideSystem method can pause execution of a script (Global scope only)?",
    "answers": {
      "a": "gs.wait()",
      "b": "gs.sleep()",
      "c": "gs.pause()",
      "d": "gs.delay()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide System",
    "question": "Which statement about gs.log() is true?",
    "answers": {
      "a": "It is recommended for scoped applications",
      "b": "It is only available in global scope",
      "c": "It sends a message to the end user",
      "d": "It writes to work notes"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide System",
    "question": "Which methods can be used to determine if a user has a role?",
    "answers": {
      "a": "gs.hasRole()",
      "b": "gs.userHasRole()",
      "c": "gs.getUser().hasRole()",
      "d": "gs.hasUserRole()"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Glide System",
    "question": "What does gs.getUserName() return?",
    "answers": {
      "a": "User sys_id",
      "b": "User display name",
      "c": "Login name (username)",
      "d": "User email"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Glide System",
    "question": "Which GlideSystem method is used to generate an error message in the UI?",
    "answers": {
      "a": "gs.addErrorMessage()",
      "b": "gs.error()",
      "c": "gs.throwError()",
      "d": "gs.uiError()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide System",
    "question": "Which GlideSystem method returns the name of the current application scope?",
    "answers": {
      "a": "gs.getCurrentScopeName()",
      "b": "gs.getScopeName()",
      "c": "gs.getApplicationName()",
      "d": "gs.getAppScope()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide System",
    "question": "Which statements about GlideSystem are correct?",
    "answers": {
      "a": "It is only available server-side",
      "b": "It can be used in Client Scripts",
      "c": "It provides logging, user, and system utility functions",
      "d": "It directly modifies database records"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Glide System",
    "question": "A developer wants to show a confirmation message to the user after a record is successfully updated in a Business Rule. Which method should be used?",
    "answers": {
      "a": "gs.info('Record updated')",
      "b": "gs.addInfoMessage('Record updated')",
      "c": "gs.log('Record updated')",
      "d": "gs.print('Record updated')"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Glide System",
    "question": "A developer needs to check if the logged-in user has the 'itil' role before allowing logic to run in a Script Include. Which approach is correct?",
    "answers": {
      "a": "gs.getUserID() == 'itil'",
      "b": "gs.hasRole('itil')",
      "c": "gs.getUser().hasRole('itil')",
      "d": "current.user.hasRole('itil')"
    },
    "rightAnswers": "b,c"
  },
  {
    "category": "Glide System",
    "question": "A developer wants to log debugging information in a scoped application. Which methods are appropriate?",
    "answers": {
      "a": "gs.log('debug message')",
      "b": "gs.info('debug message')",
      "c": "gs.warn('debug message')",
      "d": "gs.error('debug message')"
    },
    "rightAnswers": "b,c,d"
  },
  {
    "category": "Glide System",
    "question": "A Business Rule must stop execution and display an error message to the user if a required field is empty. What should the developer use?",
    "answers": {
      "a": "gs.addErrorMessage('Field is required')",
      "b": "gs.error('Field is required')",
      "c": "gs.nil(current.short_description)",
      "d": "current.setAbortAction(true)"
    },
    "rightAnswers": "a,c,d"
  },
  {
    "category": "Glide System",
    "question": "A developer wants to retrieve a value from a system property called 'company.default.priority'. Which method should be used?",
    "answers": {
      "a": "gs.getProperty('company.default.priority')",
      "b": "gs.property('company.default.priority')",
      "c": "gs.getSystemProperty('company.default.priority')",
      "d": "gs.readProperty('company.default.priority')"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide System",
    "question": "A developer needs to trigger a notification event after an incident is created. Which method should be used?",
    "answers": {
      "a": "gs.eventQueue('incident.created', current, current.sys_id, gs.getUserID())",
      "b": "gs.triggerEvent('incident.created')",
      "c": "gs.queueEvent('incident.created')",
      "d": "gs.fireEvent('incident.created')"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide System",
    "question": "A developer wants to know the sys_id of the currently logged-in user in a Script Include. Which method should be used?",
    "answers": {
      "a": "gs.getUserName()",
      "b": "gs.getUserID()",
      "c": "gs.getUser().getID()",
      "d": "gs.getUserDisplayName()"
    },
    "rightAnswers": "b,c"
  },
  {
    "category": "Glide System",
    "question": "A developer needs to verify whether a variable contains a null or empty value before processing it. Which method should be used?",
    "answers": {
      "a": "gs.nil(value)",
      "b": "value == NULL",
      "c": "value.isEmpty()",
      "d": "gs.isNull(value)"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide System",
    "question": "A developer wants to write a warning to the system log when invalid data is detected in a scoped application. Which method should be used?",
    "answers": {
      "a": "gs.warn('Invalid data detected')",
      "b": "gs.log('Invalid data detected')",
      "c": "gs.addInfoMessage('Invalid data detected')",
      "d": "gs.error('Invalid data detected')"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Glide System",
    "question": "A developer needs to retrieve the username (login name) of the currently logged-in user. Which method should be used?",
    "answers": {
      "a": "gs.getUserName()",
      "b": "gs.getUserID()",
      "c": "gs.getUser().getDisplayName()",
      "d": "gs.getUserDisplayName()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Control Access",
    "question": "What is ESS in ServiceNow?",
    "answers": {
      "a": "An employee-facing portal for accessing services and information",
      "b": "A database replication feature",
      "c": "A security debugging tool",
      "d": "A server monitoring dashboard"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Control Access",
    "question": "What does the abbreviation ESS stand for in ServiceNow?",
    "answers": {
      "a": "Enterprise Support System",
      "b": "Employee Self Service",
      "c": "External Service Script",
      "d": "Event Scheduling Service"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Control Access",
    "question": "ESS is primarily used for:",
    "answers": {
      "a": "Employees submitting requests and viewing tickets",
      "b": "Developers writing business rules",
      "c": "Administrators editing database tables",
      "d": "Monitoring server CPU usage"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Control Access",
    "question": "In ServiceNow, access can be restricted to which of the following? (Select all that apply)",
    "answers": {
      "a": "Application Menus",
      "b": "Fields",
      "c": "UI Policies",
      "d": "Records",
      "e": "Modules"
    },
    "rightAnswers": "a,b,d,e"
  },
  {
    "category": "Control Access",
    "question": "To prevent users from seeing a Navigator module and its parent menu, where can you enforce role requirements? (Select all that apply)",
    "answers": {
      "a": "Business Rules",
      "b": "Application Menus",
      "c": "Modules",
      "d": "Update Sets",
      "e": "Client Scripts"
    },
    "rightAnswers": "b,c"
  },
  {
  "category": "Control Access",
  "question": "To which elements can access to be restricted in ServiceNow? (Select all that apply)",
  "answers": {
    "a": "Application Menus",
    "b": "Modules",
    "c": "Records",
    "d": "Fields",
    "e": "Dashboards"
  },
  "rightAnswers": "a,b,c,d"
},
   {
    "category": "Control Access",
    "question": "Control access configuration in ServiceNow tables is evaluated on what basis?",
    "answers": {
      "a": "Per user",
      "b": "Per role group",
      "c": "Table-by-table",
      "d": "Instance-wide",
      "e": "Per update set"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Control Access",
    "question": "Control Access determines which runtime activities? (Select all that apply)",
    "answers": {
      "a": "Permissions to interact with table data (CRUD)",
      "b": "Access through the web services API",
      "c": "Access by scripts",
      "d": "User password policies",
      "e": "Email notifications"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Control Access",
    "question": "Which permissions are part of CRUD operations in ServiceNow? (Select all that apply)",
    "answers": {
      "a": "Create",
      "b": "Read",
      "c": "Upload",
      "d": "Update",
      "e": "Delete"
    },
    "rightAnswers": "a,b,d,e"
  },
  {
    "category": "Control Access",
    "question": "Which configuration option allows external systems to interact with a table via APIs?",
    "answers": {
      "a": "Allow configuration",
      "b": "Caller Access",
      "c": "Allow access to this table via web services",
      "d": "Client Script access",
      "e": "Update Set permissions"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Control Access",
    "question": "What is required to edit record and field permissions in ServiceNow?",
    "answers": {
      "a": "itil role",
      "b": "security_admin role with elevated privileges",
      "c": "admin role only",
      "d": "catalog_admin role",
      "e": "sn_developer role"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Control Access",
    "question": "Which statements about Record and field Access permissions are true? (Select all that apply)",
    "answers": {
      "a": "Access is denied by default",
      "b": "Access is granted by default",
      "c": "Access Controls can be created automatically when adding tables to an application",
      "d": "Access Controls apply only to forms",
      "e": "Access Controls apply only to reports"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "Control Access",
    "question": "When does an Access Control allow access to a record or field in ServiceNow?",
    "answers": {
      "a": "When any one condition is true",
      "b": "Only when all configured conditions evaluate to true",
      "c": "Only when the user is an admin",
      "d": "When a business rule runs",
      "e": "When the table is active"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Control Access",
    "question": "What does the Requires Role setting in an Access Control check?",
    "answers": {
      "a": "If the user belongs to a group",
      "b": "If the user has one of the roles specified in the Role list",
      "c": "If the user created the record",
       "b": "If the user has at least 3 the roles specified in the Role list",
      "e": "If the table is public"
    },
    "rightAnswers": "b"
  },
  {
  "category": "Control Access",
  "question": "Which elements are evaluated in a ServiceNow Access Control to determine whether access can be granted? (Select all that apply)",
  "answers": {
    "a": "Requires Role",
    "b": "Security Attribute Condition",
    "c": "Data Condition",
    "d": "Script Condition",
    "e": "UI Policy Condition"
  },
  "rightAnswers": "a,b,c,d"
},
  {
    "category": "Control Access",
    "question": "In what order are Record ACL rules processed when a session requests data?",
    "answers": {
      "a": "Field ACLs first, then Table ACLs",
      "b": "Table ACLs first, then Field ACLs",
      "c": "Script conditions first, then Roles",
      "d": "UI Policies first, then ACLs",
      "e": "Random order"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Control Access",
    "question": "What must a user pass in order to access a record object? (Select all that apply)",
    "answers": {
      "a": "Table ACL rules",
      "b": "Field ACL rules",
      "c": "UI Policy rules",
      "d": "Business Rules",
      "e": "Client Scripts"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Control Access",
    "question": "How do you enable debugging for Access Control in ServiceNow?",
    "answers": {
      "a": "System Logs > Debug Rules",
      "b": "System Security > Debugging > Debug Security Rules",
      "c": "System Security > ACL Debug",
      "d": "System Securityn > Security Debug",
      "e": "Reports > Security Logs"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Control Access",
    "question": "Where do you navigate to enable ACL rule debugging?",
    "answers": {
      "a": "System Security > Debug Security Rules",
      "b": "System Logs > ACL Monitor",
      "c": "System Definition > Tables",
      "d": "Security Center > Access Analyzer",
      "e": "System Security > Debug Mode"
    },
    "rightAnswers": "a"
  },
  {
  "category": "Control Access",
  "question": "Why must user roles be assigned in the main ServiceNow window instead of ServiceNow Studio?",
  "answers": {
    "a": "Studio cannot access the Users table",
    "b": "Studio is used for managing application artifacts, not user data",
    "c": "Roles can only be created by scripts",
    "d": "Studio only works for administrators",
    "e": "The platform automatically deletes roles created in Studio"
  },
  "rightAnswers": "b"
},
  {
    "category": "Control Access",
    "question": "Which GlideRecord methods are used to check table permissions? (Select all that apply)",
    "answers": {
      "a": "canCreate()",
      "b": "canRead()",
      "c": "canWrite()",
      "d": "canDelete()",
      "e": "canUpdate()"
    },
    "rightAnswers": "a,b,c,d"
  },
  {
    "category": "Control Access",
    "question": "Which GlideSystem method is commonly used to verify whether the current user has a specific role?",
    "answers": {
      "a": "getUserDisplayName()",
      "b": "userID()",
      "c": "hasRole()",
      "d": "getUserNameByUserID()",
      "e": "canRead()"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Control Access",
    "question": "What does current.canRead() check in a server-side script?",
    "answers": {
      "a": "If the record exists",
      "b": "If the user has permission to read the record",
      "c": "If the field is mandatory",
      "d": "If the script is valid",
      "e": "If the user is logged in"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Control Access",
    "question": "Which GlideSystem methods provide information about the current user? (Select all that apply)",
    "answers": {
      "a": "getUser()",
      "b": "getUserDisplayName()",
      "c": "getUserNameByUserID()",
      "d": "hasRole()",
      "e": "canDelete()"
    },
    "rightAnswers": "a,b,c,d"
  },
  {
    "category": "Flow Automation",
    "question": "What ServiceNow feature is used to automate processes without writing code?",
    "answers": {
      "a": "Flow Designer",
      "b": "Business Rules",
      "c": "Script Includes",
      "d": "Client Scripts",
      "e": "Transform Maps"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Flow Automation",
    "question": "Which components are part of a Flow in Flow Designer? (Select all that apply)",
    "answers": {
      "a": "Trigger",
      "b": "Actions",
      "c": "Conditions",
      "d": "Tables",
      "e": "Update Sets"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Flow Automation",
    "question": "What is a Trigger in Flow Designer?",
    "answers": {
      "a": "A scheduled report",
      "b": "An event that starts the flow",
      "c": "A user role assignment",
      "d": "A database backup",
      "e": "A UI Policy"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Flow Automation",
    "question": "Which of the following can initiate a Flow? (Select all that apply)",
    "answers": {
      "a": "Record created or updated",
      "b": "A scheduled time",
      "c": "Application installation",
      "d": "Service Catalog request",
      "e": "Email notification being read"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Flow Automation",
    "question": "What is the purpose of an Action in Flow Designer?",
    "answers": {
      "a": "To define user interface layouts",
      "b": "To perform a task such as creating, updating, or approving records",
      "c": "To create database tables",
      "d": "To debug scripts",
      "e": "To manage user roles"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Flow Automation",
    "question": "How is a Flow best described in ServiceNow?",
    "answers": {
      "a": "A manual approval process",
      "b": "An automated sequence of actions",
      "c": "A database relationship",
      "d": "A reporting engine",
      "e": "A UI customization tool"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Flow Automation",
    "question": "Which element starts a Flow in Flow Designer?",
    "answers": {
      "a": "Action",
      "b": "Trigger",
      "c": "Properties",
      "d": "Update Set",
      "e": "Script Include"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Flow Automation",
    "question": "Which types of triggers can initiate a Flow? (Select all that apply)",
    "answers": {
      "a": "Application",
      "b": "Record",
      "c": "Schedule",
      "d": "Dashboard",
      "e": "Report"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Flow Automation",
    "question": "What is the purpose of Actions within a Flow?",
    "answers": {
      "a": "To define table relationships",
      "b": "To perform tasks and produce or collect data",
      "c": "To assign user roles",
      "d": "To configure system properties",
      "e": "To create update sets"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Integration Hub",
    "question": "What is the primary purpose of Integration Hub in ServiceNow?",
    "answers": {
      "a": "To design UI forms",
      "b": "To integrate Flow Designer with third-party systems",
      "c": "To manage user roles",
      "d": "To create database tables",
      "e": "To configure reports"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Integration Hub",
    "question": "Which are examples of Integration Hub spokes? (Select all that apply)",
    "answers": {
      "a": "Microsoft Teams",
      "b": "Microsoft Azure Active Directory (AD)",
      "c": "Slack",
      "d": "ServiceNow eBonding",
      "e": "Instagram Reels Engine",
      "f": "Microsoft Active Directory (AD)"
    },
    "rightAnswers": "a,b,c,d"
  },
  {
    "category": "Integration Hub",
    "question": "Which custom steps can be used with Integration Hub? (Select all that apply)",
    "answers": {
      "a": "REST web service request step",
      "b": "Script step",
      "c": "Business Rule step",
      "d": "Client Script step",
      "e": "Form Layout step"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Spokes",
    "question": "What is a spoke in ServiceNow?",
    "answers": {
      "a": "A database table",
      "b": "A scoped application containing Flow Designer actions for a specific application or record type",
      "c": "A global application containing Flow Designer actions for a specific application or record type",
      "d": "A scoped application containing only UI actions for a specific application or record type",
      "e": "A user role"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Spokes",
    "question": "Spokes are primarily used in which ServiceNow feature?",
    "answers": {
      "a": "Service Catalog",
      "b": "Flow Designer",
      "c": "Knowledge Base",
      "d": "Performance Analytics",
      "e": "Update Sets"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Spokes",
    "question": "When is a spoke activated?",
    "answers": {
      "a": "When a user logs in",
      "b": "When the parent application is activated",
      "c": "When a record is created",
      "d": "When a Business Rule runs",
      "e": "When an update set is committed"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Spokes",
    "question": "A spoke typically contains what type of functionality?",
    "answers": {
      "a": "Client-side UI formatting",
      "b": "Flow Designer actions for integration or automation",
      "c": "Database indexing",
      "d": "Report scheduling",
      "e": "User authentication settings"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application properties",
    "question": "What are Application Properties in ServiceNow primarily used for?",
    "answers": {
      "a": "Designing UI forms",
      "b": "Storing configurable application values",
      "c": "Managing user passwords",
      "d": "Creating database relationships",
      "e": "Scheduling reports"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application properties",
    "question": "Where can application values be configured?",
    "answers": {
      "a": "System Logs",
      "b": "Application properties page",
      "c": "Update Sets",
      "d": "Flow Designer",
      "e": "Service Catalog"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application properties",
    "question": "How are Application Properties commonly used by developers? (Select all that apply)",
    "answers": {
      "a": "Retrieved and used in scripts",
      "b": "Used as a single location for application configuration",
      "c": "Automatically assign user roles",
      "d": "Control configurable application behavior",
      "e": "Replace database tables"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "Application properties",
    "question": "Who can typically edit application property values?",
    "answers": {
      "a": "All users",
      "b": "Only application administrators",
      "c": "Only end users",
      "d": "Only ITIL users",
      "e": "Guests"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Application properties",
    "question": "Which statement about Application Properties is true?",
    "answers": {
      "a": "They can be created for reference fields",
      "b": "They provide a single location for all application configuration values",
      "c": "They only work in client scripts",
      "d": "They replace Access Control rules",
      "e": "They are automatically deleted after deployment"
    },
    "rightAnswers": "b"
  },
  {
  "category": "Application properties",
  "question": "Which option shows the correct order for creating application properties in ServiceNow?",
  "answers": {
    "a": "1. Create a System Property Category 2. Add Properties 3. Order Properties 4. Create Properties Module",
    "b": "1. Add Properties 2. Create a System Property Category 3. Create Properties Module 4. Order Properties",
    "c": "1. Create Properties Module 2. Order Properties 3. Add Properties 4. Create a System Property Category",
    "d": "1. Order Properties 2. Add Properties 3. Create a System Property Category 4. Create Properties Module"
  },
  "rightAnswers": "a"
},
  {
  "category": "System Properties",
  "question": "What is the purpose of a system property (sys_properties table) in ServiceNow?",
  "answers": {
    "a": "To store temporary session data",
    "b": "To store configuration values that rarely change and avoid hard-coding in scripts",
    "c": "To store configuration values that often change and avoid hard-coding in scripts",
    "d": "To store configuration values that do not change anymore and avoid hard-coding in scripts",
    "e": "To provide simple access to configuration items CITM"
  },
  "rightAnswers": "b"
},
  {
    "category": "System Properties",
    "question": "Who typically configures property values in ServiceNow?",
    "answers": {
      "a": "End users",
      "b": "Application administrators",
      "c": "Guests",
      "d": "Module administrators",
      "e": "Knowledge administrators",
    },
    "rightAnswers": "b"
  },
  {
    "category": "System Properties",
    "question": "Why should the 'Ignore cache' checkbox be selected when working with properties?",
    "answers": {
      "a": "To ensure the application uses the previous property value instead of a current value",
      "b": "To ensure the application uses the current property value instead of a cached value",
      "c": "To speed up reporting",
      "d": "To ensure the application uses the cached property value instead of a cached current",
      "e": "To disable scripts"
    },
    "rightAnswers": "b"
  },
  {
    "category": "System Properties",
    "question": "What does the system_properties_ui.do module primarily provide?",
    "answers": {
      "a": "Access to user roles",
      "b": "Access to the system property form",
      "c": "Database backup",
      "d": "Workflow approvals",
      "e": "Incident management"
    },
    "rightAnswers": "b"
  },
  {
    "category": "System Properties",
    "question": "What does '%20' represent in the Arguments field of a system properties module?",
    "answers": {
      "a": "A required separator",
      "b": "A space character",
      "c": "A line break",
      "d": "A tab character",
      "e": "A role name"
    },
    "rightAnswers": "b"
  },
  {
    "category": "System Properties",
    "question": "What happens if a Separator module does not have a title?",
    "answers": {
      "a": "The module is hidden",
      "b": "A line appears in the Application Navigator instead of a title",
      "c": "The module deletes itself",
      "d": "The system throws an error",
      "e": "Users cannot access the application"
    },
    "rightAnswers": "b"
  },
   {
    "category": "Scheduled Script Execution",
    "question": "What is a Scheduled Script Execution in ServiceNow?",
    "answers": {
      "a": "A client-side UI customization",
      "b": "An automated logic that runs at a specific time or on a recurring basis",
      "c": "A manual workflow approval",
      "d": "An automated logic that runs randomly or on a recurring basis",
      "e": "A database relationship"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "Which tasks are examples of periodic database queries? (Select all that apply)",
    "answers": {
      "a": "Finding overdue requests",
      "b": "Retrieving all requests from a specific user",
      "c": "Changing form layouts",
      "d": "Checking records resolved for too long",
      "e": "Assigning user roles"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "Which actions are examples of periodic record modifications? (Select all that apply)",
    "answers": {
      "a": "Setting state to Closed Complete after a fixed time",
      "b": "Assigning unassigned records to a user",
      "c": "Deleting records created by a user",
      "d": "Creating UI policies",
      "e": "Adding form sections"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "When can a Scheduled Script Execution run?",
    "answers": {
      "a": "Only when a user logs in",
      "b": "Only when a record is created",
      "c": "At a specific time and/or on a recurring schedule",
      "d": "Only during system upgrades",
      "e": "Only when an admin clicks a button"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "Which use case best fits a Scheduled Script Execution?",
    "answers": {
      "a": "Showing a field on a form",
      "b": "Automatically closing old resolved records",
      "c": "Creating a catalog item",
      "d": "Changing a user's password",
      "e": "Displaying notifications in the UI"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "What type of processing does Scheduled Script Execution typically perform?",
    "answers": {
      "a": "Client-side browser processing",
      "b": "Server-side background processing",
      "c": "Mobile app rendering",
      "d": "Email formatting",
      "e": "Dashboard filtering"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "What does the Run field determine when configuring a Scheduled Script Execution?",
    "answers": {
      "a": "The user who runs the job",
      "b": "The periodicity of the job",
      "c": "The table being queried",
      "d": "The script language version",
      "e": "The approval workflow"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "How should the run time be specified when configuring a Scheduled Script Execution?",
    "answers": {
      "a": "Using a 12-hour clock format",
      "b": "Using a 24-hour clock format",
      "c": "Using UTC only",
      "d": "Using milliseconds",
      "e": "Using the browser time"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "Which scheduling options can be selected in the Run field? (Select all that apply)",
    "answers": {
      "a": "Daily",
      "b": "Weekly",
      "c": "Each morning",
      "d": "Once",
      "e": "Tomorrow",
      "f": "Monthly"
    },
    "rightAnswers": "a,b,d,f"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "What happens if no time zone is selected for the Scheduled Script Execution?",
    "answers": {
      "a": "The job will not run",
      "b": "The job runs based on the system default GMT time",
      "c": "The job runs based on the time zone of the user who scheduled it",
      "d": "The job runs randomly",
      "e": "The job must be manually triggered"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "If 'Use System Time Zone' is selected, when will the job run?",
    "answers": {
      "a": "Based on the browser time zone",
      "b": "Based on the instance time zone executing the job",
      "c": "Based on the admin's time zone",
      "d": "Based on UTC only",
      "e": "It will not run automatically"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "What is an Event in ServiceNow?",
    "answers": {
      "a": "A user interface action",
      "b": "An entry in the Event Queue indicating something notable has occurred",
      "c": "An entry in the Event Policy Rule indicating something notable has occurred",
      "d": "An entry in the Event Business Rule indicating something notable has occurred",
      "e": "A workflow approval"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "What can be triggered by events? (Select all that apply)",
    "answers": {
      "a": "Email Notifications",
      "b": "Form Layouts",
      "c": "Flows",
      "d": "Script Actions",
      "e": "UI Policies"
    },
    "rightAnswers": "a,d"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "Where are events stored after they are generated and triggered?",
    "answers": {
      "a": "System Logs",
      "b": "Update Sets",
      "c": "Event Queue",
      "d": "User Preferences",
      "e": "Import Sets"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "How can events be generated in ServiceNow? (Select all that apply)",
    "answers": {
      "a": "Server-side scripts",
      "b": "Workflows and flows",
      "c": "ServiceNow processes",
      "d": "User policies",
      "e": "Client-side scripts",
      "f": "User actions"
    },
    "rightAnswers": "a,b,c,f"
  },
   {
    "category": "Scheduled Script Execution",
    "question": "From which ones the events can be triggered? (Select all that apply)",
    "answers": {
      "a": "Server-side scripts",
      "b": "Workflows and flows",
      "c": "ServiceNow processes",
      "d": "User actions",
      "e": "Client scripts"
    },
    "rightAnswers": "a,b,c,d"
  },
  {
  "category": "Scheduled Script Execution",
  "question": "Which option shows the correct order for working with Events in ServiceNow?",
  "answers": {
    "a": "1. Generate Event 2. Add Event to Event Registry 3. Create logic to respond to Event",
    "b": "1. Add Event to Event Registry 2. Generate Event 3. Create logic to respond to Event",
    "c": "1. Create logic to respond to Event 2. Generate Event 3. Add Event to Event Registry",
    "d": "1. Generate Event 2. Create logic to respond to Event 3. Add Event to Event Registry"
  },
  "rightAnswers": "b"
},
  {
  "category": "Scheduled Script Execution",
  "question": "Why must events be registered in ServiceNow? (Select all that apply)",
  "answers": {
    "a": "So ServiceNow can create database tables",
    "b": "So ServiceNow can react to the event",
    "c": "To automatically assign user roles",
    "d": "So ServiceNow processes can recognize the event",
    "e": "To modify form layouts"
  },
  "rightAnswers": "b,d"
},
  {
    "category": "Scheduled Script Execution",
    "question": "Which GlideSystem method is used to generate an event in a script?",
    "answers": {
      "a": "gs.addEvent()",
      "b": "gs.eventQueue()",
      "c": "gs.triggerEvent()",
      "d": "gs.runEvent()",
      "e": "gs.createEvent()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "What can be passed as parameters (parm1 and parm2) in gs.eventQueue()? (Select all that apply)",
    "answers": {
      "a": "Strings",
      "b": "Field values or properties",
      "c": "Variables",
      "d": "Methods such as gs.getUserID()",
      "e": "Queries to tables"
    },
    "rightAnswers": "a,b,c,d"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "What does the 'object' parameter represent in gs.eventQueue(\"event_name\", object, parm1, parm2)?",
    "answers": {
      "a": "A UI action",
      "b": "A record object such as current, previous, or a GlideRecord",
      "c": "A scheduled job",
      "d": "A record object such as current, previous, or a GlideFormField",
      "e": "A user role"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "What is typically passed as parm1 or parm2 if you do not need custom values?",
    "answers": {
      "a": "gs.getUserID() or gs.getUserName()",
      "b": "The table name",
      "c": "A Business Rule name",
      "d": "An update set ID",
      "e": "A client script"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Scheduled Script Execution",
    "question": "What must exist before gs.eventQueue() can successfully trigger an event?",
    "answers": {
      "a": "A UI Policy",
      "b": "An UI Action registered in the Event Registry",
      "c": "A scheduled report",
      "d": "An event registered in the Event Registry",
      "e": "A Protected Policy Action registered in the Event Registry",
    },
    "rightAnswers": "b"
  },
  {
    "category": "Outbound Email",
    "question": "When can ServiceNow automatically send outbound emails? (Select all that apply)",
    "answers": {
      "a": "Record insert or update",
      "b": "Database backup",
      "c": "System startup",
      "d": "Event generation",
      "e": "User login only"
    },
    "rightAnswers": "a,d"
  },
  {
    "category": "Outbound Email",
    "question": "Which workflow activity can also be used to send emails?",
    "answers": {
      "a": "Approval activity",
      "b": "Notification activity",
      "c": "Timer activity",
      "d": "Script activity",
      "e": "Condition activity"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Outbound Email",
    "question": "What triggers a notification email in ServiceNow?",
    "answers": {
      "a": "Only manual admin action",
      "b": "Record changes and event generation",
      "c": "Creating UI policies",
      "d": "Editing dashboards",
      "e": "Modifying update sets"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Outbound Email",
    "question": "Which components must be configured for a notification? (Select all that apply)",
    "answers": {
      "a": "What to send",
      "b": "When to send",
      "c": "To whom it should be sent",
      "d": "From where to sent",
      "e": "How to sent"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Outbound Email",
    "question": "What is the relationship between events and outbound email?",
    "answers": {
      "a": "Events can trigger notifications that send emails",
      "b": "Emails trigger database tables",
      "c": "Emails create update sets",
      "d": "Events replace workflows",
      "e": "Emails disable business rules"
    },
    "rightAnswers": "a"
  },
  {
  "category": "Outbound Email",
  "question": "Which conditions can be selected in the 'Send when' field for a notification? (Select all that apply)",
  "answers": {
    "a": "Record inserted or updated",
    "b": "Event is fired",
    "c": "System reboot",
    "d": "User logs in",
    "e": "Triggered",
  },
  "rightAnswers": "a,b,e"
},
  {
    "category": "Outbound Email",
    "question": "What is the purpose of the weight field in a ServiceNow notification?",
    "answers": {
      "a": "To control email formatting",
      "b": "To determine which notifications are sent or skipped when multiple notifications trigger",
      "c": "To set email priority in the inbox",
      "d": "To determine which notifications are sent or skipped based on email attachments ",
      "e": "To schedule reports"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Outbound Email",
    "question": "Which notification is sent when multiple notifications are triggered for the same record and recipients?",
    "answers": {
      "a": "The one with the lowest weight",
      "b": "The one created first",
      "c": "The one with the highest weight",
      "d": "The one with the longest subject",
      "e": "All notifications are skipped"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Outbound Email",
    "question": "What happens if multiple notifications have the same highest non-zero weight value?",
    "answers": {
      "a": "Only one notification is sent",
      "b": "All notifications with that highest value are sent",
      "c": "All notifications are skipped",
      "d": "The system throws an error",
      "e": "They are delayed"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Outbound Email",
    "question": "How are notifications with a weight value of zero handled?",
    "answers": {
      "a": "Always skipped",
      "b": "Sent only to admins",
      "c": "Always sent",
      "d": "Sent only once per day",
      "e": "Require manual approval"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Outbound Email",
    "question": "The notification weight comparison applies when notifications are triggered for what? (Select all that apply)",
    "answers": {
      "a": "The same record",
      "b": "The same recipients",
      "c": "Different tables",
      "d": "Different instances",
      "e": "Different update sets"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "Outbound Email",
    "question": "How can recipients be configured for a ServiceNow notification? (Select all that apply)",
    "answers": {
      "a": "Individual users",
      "b": "Groups",
      "c": "Fields referencing a user record",
      "d": "Only system administrators",
      "e": "Only the record creator"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Outbound Email",
    "question": "Which statements about notification recipients are true? (Select all that apply)",
    "answers": {
      "a": "Recipients can be static",
      "b": "Recipients must always be ServiceNow users",
      "c": "Recipients must have a valid email address",
      "d": "Recipients can be dynamic",
      "e": "Recipients do not have to be ServiceNow users"
    },
    "rightAnswers": "a,c,d,e"
  },
  {
    "category": "Outbound Email",
    "question": "Which statement best describes static recipients in ServiceNow notifications?",
    "answers": {
      "a": "Explicitly selecting specific users, groups, or email addresses directly in the notification configuration",
      "b": "Providing recipients through event parameters using Parm1 or Parm2 values",
      "c": "Adding recipients dynamically with an email script using email.addAddress()",
      "d": "Passing recipients through Flow Designer Send Email action inputs",
      "e": "Automatically reading recipients from record fields at runtime"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Outbound Email",
    "question": "Which options represent dynamic recipients in ServiceNow notifications? (Select all that apply)",
    "answers": {
      "a": "Passing recipient sys_ids or emails in event parameters and enabling 'Event parm contains recipient'",
      "b": "Adding recipients in a notification email script using email.addAddress()",
      "c": "Using Flow Designer Send Email action with dynamic input values",
      "d": "Selecting fixed users and groups directly in the notification form",
      "e": "Manually typing the same email addresses for every notification"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "Outbound Email",
    "question": "What is the result of using ${URI} inside a ServiceNow email notification?",
    "answers": {
      "a": "Displays the record number as plain text",
      "b": "Creates a hyperlink labeled \"LINK\" that opens the triggering record",
      "c": "Sends the record as an attachment",
      "d": "Opens the related caller record"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Outbound Email",
    "question": "What does ${URI_REF} display in an email notification?",
    "answers": {
      "a": "The sys_id of the record",
      "b": "The full URL of the record",
      "c": "The record’s display value (e.g., INC0010001) as a clickable link",
      "d": "The short description"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Outbound Email",
    "question": "Which variable creates a clickable link to a related record using the word \"LINK\"?",
    "answers": {
      "a": "${caller_id}",
      "b": "${caller_id.URI}",
      "c": "${URI_REF}",
      "d": "${caller_id.display_value}"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Outbound Email",
    "question": "Which variable will show the related user's display name (for example \"Fred Luddy\") as a clickable link?",
    "answers": {
      "a": "${caller_id}",
      "b": "${caller_id.URI}",
      "c": "${caller_id.URI_REF}",
      "d": "${URI}"
    },
    "rightAnswers": "c"
  },
  {
  "category": "Script Includes",
  "question": "In what correct order is a ServiceNow Script Include created and used?",
  "answers": {
    "a": "Call the method → Call the class → Create prototype → Create the class",
    "b": "Create the class → Create prototype → Call the class → Call the method",
    "c": "Create prototype → Call the method → Create the class → Call the class",
    "d": "Create the class → Call the method → Create prototype → Call the class"
  },
  "rightAnswers": "b"
},
  {
    "category": "Script Includes",
    "question": "A company wants to centralize reusable logic that validates whether an Incident can be closed based on custom conditions. This logic must be reusable by multiple Business Rules and UI Actions. What is the best solution?",
    "answers": {
      "a": "Create a Client Script",
      "b": "Create a Script Include with validation methods",
      "c": "Create a UI Policy",
      "d": "Create a Dictionary Override"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Script Includes",
    "question": "A developer created a Script Include named 'UserUtils' with a method getManager(userSysId). How should this method be called from a Business Rule?",
    "answers": {
      "a": "UserUtils.getManager(current.sys_id);",
      "b": "new UserUtils().getManager(current.sys_id);",
      "c": "call UserUtils.getManager(current.sys_id);",
      "d": "current.UserUtils.getManager();"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Script Includes",
    "question": "A Script Include needs to be accessible from a Client Script using GlideAjax. What must be configured?",
    "answers": {
      "a": "Set the Script Include to 'Client Callable' and extend AbstractAjaxProcessor",
      "b": "Set the Script Include to 'Accessible from all application scopes'",
      "c": "Enable ECMAScript 2021 mode",
      "d": "Mark the Script Include as 'Public API'"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Script Includes",
    "question": "In a ServiceNow Script Include, what contains the prototype definition?",
    "answers": {
      "a": "The Class.create() statement",
      "b": "The prototype object (ClassName.prototype)",
      "c": "The initialize() function only",
      "d": "The type property"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Script Includes",
    "question": "What is the purpose of the class prototype object in a Script Include?",
    "answers": {
      "a": "It stores records from the database",
      "b": "It defines properties and methods shared by all instances of the class",
      "c": "It executes automatically when the instance loads",
      "d": "It restricts access to the Script Include"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Script Includes",
    "question": "When is the initialize() function executed in a ServiceNow Script Include?",
    "answers": {
      "a": "When the Script Include record is saved",
      "b": "When the class is instantiated using the new keyword",
      "c": "When the instance is deleted",
      "d": "Only when called manually from a Business Rule"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Script Includes",
    "question": "What is the purpose of the initialize() function in a Script Include class?",
    "answers": {
      "a": "To define ACL permissions for the Script Include",
      "b": "To automatically send notifications",
      "c": "To set up variables and properties accessible to all object instances",
      "d": "To query the database by default"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Importing Data",
    "question": "Before performing a data import into ServiceNow, what should an administrator do first?",
    "answers": {
      "a": "Create a Business Rule",
      "b": "Understand what data is being copyed and where it should be copied",
      "c": "Run a scheduled job",
      "d": "Understand what data is being imported and where it should be stored",
    },
    "rightAnswers": "d"
  },
  {
    "category": "Importing Data",
    "question": "Why should data be verified prior to running an import set?",
    "answers": {
      "a": "To speed up the instance performance",
      "b": "To automatically create transform maps",
      "c": "To identify and correct inaccurate or undesired data",
      "d": "To grant users additional roles"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Importing Data",
    "question": "Which action is considered a best practice when preparing source data for import?",
    "answers": {
      "a": "Delete all records from the source file and prevet them to be written in the stage table",
      "b": "Disable email notifications",
      "c": "Delete unwanted or incorrect records from the source file",
      "d": "Convert all users into administrators"
    },
    "rightAnswers": "c"
  },
  {
  "category": "Importing Data",
  "question": "In ServiceNow, what is a staging table (Import Set table)?",
  "answers": {
    "a": "A table where transformed records are permanently stored for users",
    "b": "A temporary table that holds records before it is transformed into target tables",
    "c": "A temporary table that holds imported data before it is transformed into target tables",
    "d": "A table that replaces the target table during import"
  },
  "rightAnswers": "c"
},
  {
    "category": "Importing Data",
    "question": "What is the purpose of an Import Set in ServiceNow?",
    "answers": {
      "a": "To directly insert records into the target table",
      "b": "To temporarily store imported source data before transformation",
      "c": "To permanently archive external system records",
      "d": "To replace existing tables during upgrades"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Importing Data",
    "question": "What does a Transform Map define during an import process?",
    "answers": {
      "a": "Relationships between fields in the import set and the target table",
      "b": "User permissions for accessing imported records",
      "c": "Scheduled times when imports must run",
      "d": "The database engine used by ServiceNow"
    },
    "rightAnswers": "a"
  },
  {
    "category": "Importing Data",
    "question": "After a transform is executed, where is the data finally stored?",
    "answers": {
      "a": "In the source file on the external system",
      "b": "In the stage table containing mapped records",
      "c": "In the target table containing mapped records",
      "d": "Inside the transform history module"
    },
    "rightAnswers": "c"
  },
  {
    "category": "Importing Data",
    "question": "What is another name for an Import Set table?",
    "answers": {
      "a": "Archive table",
      "b": "Staging table",
      "c": "History table",
      "d": "Backup table"
    },
    "rightAnswers": "b"
  },
  {
    "category": "Importing Data",
    "question": "What happens when the imported record already matches an existing record in ServiceNow?",
    "answers": {
      "a": "The import automatically deletes the record",
      "b": "The system shuts down the transform",
      "c": "The import process skips identical records",
      "d": "A new duplicate record is always created"
    },
    "rightAnswers": "c"
  },
  {
    "category": "ATF",
    "question": "What is the primary purpose of the Automated Test Framework (ATF) in ServiceNow?",
    "answers": {
      "a": "To automate functional and regression testing within the platform",
      "b": "To monitor real-time performance metrics",
      "c": "To replace update sets",
      "d": "To enforce ACL security rules"
    },
    "rightAnswers": "a"
  },
  {
    "category": "ATF",
    "question": "Which components are required to execute automated testing in ATF?",
    "answers": {
      "a": "Test",
      "b": "Test Step",
      "c": "Test Suite",
      "d": "Update Set"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "ATF",
    "question": "What is the purpose of a Test Suite in ATF?",
    "answers": {
      "a": "To group multiple tests for sequential execution",
      "b": "To define reusable test steps",
      "c": "To manage production deployments",
      "d": "To execute regression testing batches"
    },
    "rightAnswers": "a,d"
  },
  {
    "category": "ATF",
    "question": "Why should ATF tests avoid hardcoding sys_id values?",
    "answers": {
      "a": "sys_id values differ between instances",
      "b": "Hardcoding improves execution speed",
      "c": "It reduces portability between environments",
      "d": "ATF does not support sys_id references"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "ATF",
    "question": "Which test step is used to create a new record during a test?",
    "answers": {
      "a": "Create Record",
      "b": "Open Form",
      "c": "Set Field Values",
      "d": "Insert Row"
    },
    "rightAnswers": "a"
  },
  {
    "category": "ATF",
    "question": "What is the benefit of using Output Variables in ATF?",
    "answers": {
      "a": "To pass dynamic values between test steps",
      "b": "To permanently store values in the database",
      "c": "To reuse generated record sys_ids",
      "d": "To configure system properties"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "ATF",
    "question": "Which step validates that a record exists in the database after execution?",
    "answers": {
      "a": "Assert Record",
      "b": "Form Validation",
      "c": "UI Action Assertion",
      "d": "Open Module"
    },
    "rightAnswers": "a"
  },
  {
    "category": "ATF",
    "question": "What is the purpose of impersonation within an ATF test?",
    "answers": {
      "a": "To validate role-based access and behavior",
      "b": "To bypass ACLs",
      "c": "To simulate user experience",
      "d": "To increase test execution speed"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "ATF",
    "question": "If a test step fails during execution, what is the default behavior?",
    "answers": {
      "a": "The test execution stops",
      "b": "The remaining steps are skipped",
      "c": "The instance rolls back changes automatically",
      "d": "The test continues regardless"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "ATF",
    "question": "Which types of platform logic can be validated using ATF?",
    "answers": {
      "a": "Business Rules",
      "b": "Client Scripts",
      "c": "UI Policies",
      "d": "Database indexes"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "ATF",
    "question": "Why is test data cleanup considered a best practice in ATF?",
    "answers": {
      "a": "To prevent interference with future test runs",
      "b": "To maintain consistent and repeatable results",
      "c": "To improve system memory allocation",
      "d": "To avoid polluting application data"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "ATF",
    "question": "Which step is appropriate to validate that a field becomes mandatory after a client script runs?",
    "answers": {
      "a": "Form Field Validation",
      "b": "Assert Record",
      "c": "UI Action Assertion",
      "d": "Server Script Validation"
    },
    "rightAnswers": "a"
  },
  {
    "category": "ATF",
    "question": "What is the difference between client-side and server-side test steps?",
    "answers": {
      "a": "Client-side steps validate UI behavior",
      "b": "Server-side steps validate database logic",
      "c": "Server-side steps require Service Portal",
      "d": "Client-side steps run without a browser context"
    },
    "rightAnswers": "a,b"
  },
  {
    "category": "ATF",
    "question": "In which environments is it recommended to execute ATF tests?",
    "answers": {
      "a": "Development",
      "b": "Sub-production",
      "c": "Production",
      "d": "Test environments before deployment"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "ATF",
    "question": "What does the 'Open Form' step allow you to do?",
    "answers": {
      "a": "Load a specific record into the UI",
      "b": "Validate form-level UI behavior",
      "c": "Create database indexes",
      "d": "Prepare fields for interaction"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "ATF",
    "question": "How does ATF support CI/CD processes?",
    "answers": {
      "a": "By enabling automated regression testing after deployments",
      "b": "By integrating with pipeline automation",
      "c": "By replacing source control",
      "d": "By validating application stability automatically"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "ATF",
    "question": "What information is captured in ATF test results?",
    "answers": {
      "a": "Pass/fail status of each step",
      "b": "Execution duration",
      "c": "Step-level output values",
      "d": "System backup snapshots"
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "ATF",
    "question": "Which scenario best demonstrates regression testing with ATF?",
    "answers": {
      "a": "Running existing tests after promoting an update set",
      "b": "Manually reviewing scripts",
      "c": "Testing new hardware integration",
      "d": "Validating unchanged features after upgrades"
    },
    "rightAnswers": "a,d"
  },
  {
    "category": "ATF",
    "question": "Why should tests create their own data rather than rely on existing records?",
    "answers": {
      "a": "To ensure isolation",
      "b": "To guarantee predictable outcomes",
      "c": "To reduce instance storage",
      "d": "To avoid dependency on environment-specific data"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "ATF",
    "question": "Which ATF capability allows validation of UI Action visibility based on record state?",
    "answers": {
      "a": "UI Action Assertion",
      "b": "Form Validation",
      "c": "Server Script Execution",
      "d": "ACL Debug"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "What is GlideRecord primarily used for in ServiceNow?",
    "answers": {
      "a": "Manipulating UI forms",
      "b": "Querying, inserting, updating, and deleting database records",
      "c": "Calling REST APIs from the client",
      "d": "Managing attachments only"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Which GlideRecord method executes the database query?",
    "answers": {
      "a": "execute()",
      "b": "run()",
      "c": "query()",
      "d": "next()"
    },
    "rightAnswers": "c"
  },
  {
    "category": "GlideAPI",
    "question": "What does gs (GlideSystem) provide?",
    "answers": {
      "a": "Client-side DOM manipulation",
      "b": "System logging and user/session information",
      "c": "Attachment encryption",
      "d": "Database indexing"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Which gs method checks if a user has a role?",
    "answers": {
      "a": "gs.getProperty()",
      "b": "gs.hasRole()",
      "c": "gs.print()",
      "d": "gs.getMessage()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "g_form is available in which context?",
    "answers": {
      "a": "Server-side Business Rules",
      "b": "Client Scripts and UI Policies",
      "c": "Scheduled Jobs",
      "d": "Script Includes"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Which g_form method sets a field value?",
    "answers": {
      "a": "setValue()",
      "b": "getValue()",
      "c": "setMandatory()",
      "d": "setLabel()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "What is g_user used for?",
    "answers": {
      "a": "Query database",
      "b": "Retrieve current user info on client",
      "c": "Send events",
      "d": "Create records"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Which API allows client scripts to call server-side code asynchronously?",
    "answers": {
      "a": "GlideForm",
      "b": "GlideAjax",
      "c": "GlideAggregate",
      "d": "GlideFilter"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Why is GlideAjax preferred instead of GlideRecord in client scripts?",
    "answers": {
      "a": "Better UI design",
      "b": "Client cannot directly access DB securely",
      "c": "It loads forms faster",
      "d": "Required by UI Policy"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Client-side scripts run where?",
    "answers": {
      "a": "Database server",
      "b": "ServiceNow backend",
      "c": "User browser",
      "d": "MID Server"
    },
    "rightAnswers": "c"
  },
  {
    "category": "GlideAPI",
    "question": "Which is a limitation of client scripts?",
    "answers": {
      "a": "Cannot read form values",
      "b": "Cannot securely query database",
      "c": "Cannot show messages",
      "d": "Cannot set mandatory fields"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Best practice for counting records?",
    "answers": {
      "a": "GlideRecord loop",
      "b": "GlideAggregate COUNT",
      "c": "Client Script",
      "d": "UI Policy"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "GlideAggregate is mainly used for?",
    "answers": {
      "a": "UI changes",
      "b": "Statistics and calculations",
      "c": "File attachments",
      "d": "Notifications"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "GlideQuery provides what benefit?",
    "answers": {
      "a": "UI rendering",
      "b": "Safer modern querying",
      "c": "Attachment upload",
      "d": "Catalog items"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "GlideRecord vs GlideAggregate main difference?",
    "answers": {
      "a": "Both same",
      "b": "GR records, GA calculations",
      "c": "GA updates records",
      "d": "GR client side"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Which scope can access everything?",
    "answers": {
      "a": "Scoped",
      "b": "Global",
      "c": "Client",
      "d": "Private"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Benefit of Scoped Applications?",
    "answers": {
      "a": "Isolation",
      "b": "Remove ACL",
      "c": "Disable scripts",
      "d": "Faster UI"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Which object represents current user on client?",
    "answers": {
      "a": "gs",
      "b": "current",
      "c": "g_user",
      "d": "GlideUser"
    },
    "rightAnswers": "c"
  },
  {
    "category": "GlideAPI",
    "question": "Best practice in client scripts?",
    "answers": {
      "a": "Use GlideRecord",
      "b": "Minimize server calls",
      "c": "Reload form",
      "d": "Delete fields"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "What does GlideRecord next() do?",
    "answers": {
      "a": "Run query",
      "b": "Move to next record",
      "c": "Delete",
      "d": "Insert"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Which method inserts a new record using GlideRecord?",
    "answers": {
      "a": "initialize()",
      "b": "insert()",
      "c": "update()",
      "d": "query()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Which g_form method makes a field read only?",
    "answers": {
      "a": "setReadOnly()",
      "b": "setMandatory()",
      "c": "setDisplay()",
      "d": "clearValue()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Which gs method logs info messages?",
    "answers": {
      "a": "gs.error()",
      "b": "gs.info()",
      "c": "gs.logError()",
      "d": "gs.warn()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "GlideAjax communicates with?",
    "answers": {
      "a": "Business Rule",
      "b": "Script Include",
      "c": "Client Script",
      "d": "UI Policy"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Server scripts run where?",
    "answers": {
      "a": "Browser",
      "b": "Database server",
      "c": "ServiceNow server",
      "d": "Client device"
    },
    "rightAnswers": "c"
  },
  {
    "category": "GlideAPI",
    "question": "Which object is available in Business Rule?",
    "answers": {
      "a": "g_form",
      "b": "current",
      "c": "g_user",
      "d": "window"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "What is 'current' in Business Rules?",
    "answers": {
      "a": "Form object",
      "b": "Current record",
      "c": "User object",
      "d": "Client script"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Which method deletes record?",
    "answers": {
      "a": "remove()",
      "b": "deleteRecord()",
      "c": "erase()",
      "d": "drop()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Which g_form method hides field?",
    "answers": {
      "a": "setDisplay()",
      "b": "setValue()",
      "c": "setMandatory()",
      "d": "getValue()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "GlideRecord should be avoided in?",
    "answers": {
      "a": "Business Rule",
      "b": "Client Script",
      "c": "Script Include",
      "d": "Scheduled Job"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "GlideAggregate groupBy does what?",
    "answers": {
      "a": "Sorts records",
      "b": "Groups results",
      "c": "Deletes duplicates",
      "d": "Adds fields"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "gs.getUserID() returns?",
    "answers": {
      "a": "Username",
      "b": "Sys_id",
      "c": "Email",
      "d": "Role"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "Which returns display value?",
    "answers": {
      "a": "getValue()",
      "b": "getDisplayValue()",
      "c": "getLabel()",
      "d": "getName()"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "GlideAjax requires?",
    "answers": {
      "a": "Script Include client callable",
      "b": "Business Rule",
      "c": "ACL",
      "d": "UI Policy"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Scoped apps prevent?",
    "answers": {
      "a": "Conflicts",
      "b": "Logging",
      "c": "Queries",
      "d": "Roles"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Global scope scripts are?",
    "answers": {
      "a": "Isolated",
      "b": "Restricted",
      "c": "Accessible everywhere",
      "d": "Deprecated"
    },
    "rightAnswers": "c"
  },
  {
    "category": "GlideAPI",
    "question": "Which is asynchronous?",
    "answers": {
      "a": "GlideAjax",
      "b": "GlideRecord",
      "c": "g_form",
      "d": "gs"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Which method adds query condition?",
    "answers": {
      "a": "addQuery()",
      "b": "addCondition()",
      "c": "setQuery()",
      "d": "queryAdd()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Which retrieves property?",
    "answers": {
      "a": "gs.getProperty()",
      "b": "gs.getRole()",
      "c": "gs.getTable()",
      "d": "gs.getField()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Which g_user method checks role?",
    "answers": {
      "a": "hasRole()",
      "b": "getID()",
      "c": "getName()",
      "d": "setRole()"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Client-server architecture means?",
    "answers": {
      "a": "Both same",
      "b": "Separated processing layers",
      "c": "Database only",
      "d": "Browser only"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "What is best practice for performance?",
    "answers": {
      "a": "Many queries",
      "b": "Single optimized queries",
      "c": "Client loops",
      "d": "Reload page"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "GlideQuery is mainly for?",
    "answers": {
      "a": "Safer reads",
      "b": "UI design",
      "c": "Notifications",
      "d": "Attachments"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Which cannot run client side?",
    "answers": {
      "a": "gs",
      "b": "g_form",
      "c": "g_user",
      "d": "GlideAjax"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Which is server only?",
    "answers": {
      "a": "gs",
      "b": "g_form",
      "c": "window",
      "d": "document"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Which field type uses reference qualifier?",
    "answers": {
      "a": "Reference",
      "b": "Choice",
      "c": "String",
      "d": "Integer"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Why use ACLs?",
    "answers": {
      "a": "UI styling",
      "b": "Security",
      "c": "Performance",
      "d": "Logging"
    },
    "rightAnswers": "b"
  },
  {
    "category": "GlideAPI",
    "question": "What is encoded query?",
    "answers": {
      "a": "Query string filter",
      "b": "Java class",
      "c": "Client code",
      "d": "Property"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "Which table stores users?",
    "answers": {
      "a": "sys_user",
      "b": "task",
      "c": "incident",
      "d": "cmdb_ci"
    },
    "rightAnswers": "a"
  },
  {
    "category": "GlideAPI",
    "question": "GlideAggregate COUNT returns?",
    "answers": {
      "a": "Record list",
      "b": "Number",
      "c": "Boolean",
      "d": "String"
    },
    "rightAnswers": "b"
  },
  {
    "category": "ACL Evaluation",
    "question": "A table named 'project' has the following ACLs: project.--None-- (read) for admin and itil; project.* (read) for admin only; project.budget (read) for itil only. Which fields can a user with the itil role read?",
    "answers": {
      "a": "All fields",
      "b": "Budget only",
      "c": "All fields except budget",
      "d": "No fields"
    },
    "rightAnswers": "b"
  },
  {
    "category": "ACL Evaluation",
    "question": "A table named 'asset' has these ACLs: asset.--None-- (read) for admin only; asset.* (read) for itil; asset.serial_number (read) for itil. What can a user with the itil role read?",
    "answers": {
      "a": "All fields",
      "b": "Serial number only",
      "c": "No fields",
      "d": "All fields except serial number"
    },
    "rightAnswers": "c"
  },
  {
    "category": "ACL Evaluation",
    "question": "A table named 'case' has the following ACLs: case.--None-- (read) for admin and itil; case.* (read) for itil; case.internal_notes (read) for admin only. Which fields can a user with the itil role read?",
    "answers": {
      "a": "All fields",
      "b": "Internal notes only",
      "c": "All fields except internal_notes",
      "d": "No fields"
    },
    "rightAnswers": "c"
  },
  {
    "category": "ACL Evaluation",
    "question": "A table named 'request' has these ACLs: request.--None-- (read) for itil; request.* (read) for admin only; no field-specific ACLs exist. What can a user with the itil role read?",
    "answers": {
      "a": "All fields",
      "b": "No fields",
      "c": "Only fields explicitly granted",
      "d": "All fields except restricted ones"
    },
    "rightAnswers": "b"
  },
  {
    "category": "ACL Evaluation",
    "question": "A table named 'contract' has the following ACLs: contract.--None-- (read) for admin and itil; contract.amount (read) for admin only; no contract.* ACL exists. What can a user with the itil role read?",
    "answers": {
      "a": "All fields except amount",
      "b": "Amount only",
      "c": "All fields",
      "d": "No fields"
    },
    "rightAnswers": "a"
  },
  {
    "category": "ACL Evaluation",
    "question": "A table named 'incident' extends 'task'. The ACLs are: incident.--None-- (read) for itil; task.* (read) for admin only; no incident.* ACL exists. What can a user with the itil role read?",
    "answers": {
      "a": "All fields",
      "b": "No fields",
      "c": "Only inherited fields",
      "d": "All fields except task fields"
    },
    "rightAnswers": "b"
  },
  {
    "category": "ACL Evaluation",
    "question": "A table named 'change' has the following ACLs: change.--None-- (read) for admin and itil; change.* (read) for itil; change.risk (read) for admin only. Which fields can a user with the itil role read?",
    "answers": {
      "a": "All fields",
      "b": "Risk only",
      "c": "All fields except risk",
      "d": "No fields"
    },
    "rightAnswers": "c"
  },
  {
    "category": "ACL Evaluation",
    "question": "A table named 'problem' has these ACLs: problem.--None-- (read) for admin and itil; problem.* (read) for admin only; problem.description (read) for itil. What can a user with the itil role read?",
    "answers": {
      "a": "Description only",
      "b": "All fields",
      "c": "All fields except description",
      "d": "No fields"
    },
    "rightAnswers": "a"
  },
  {
    "category": "ACL Evaluation",
    "question": "A table named 'task' has the following ACLs: task.--None-- (read) for admin and itil; task.* (read) for itil; task.comments (read) for itil; task.work_notes (read) for admin only. Which fields can a user with the itil role read?",
    "answers": {
      "a": "All fields",
      "b": "Comments only",
      "c": "All fields except work_notes",
      "d": "No fields"
    },
    "rightAnswers": "c"
  },
  {
    "category": "ACL Evaluation",
    "question": "A table named 'u_vehicle' extends 'task'. The ACLs are: u_vehicle.--None-- (read) for itil; task.* (read) for itil; u_vehicle.secret_code (read) for admin only. What can a user with the itil role read?",
    "answers": {
      "a": "All fields",
      "b": "All fields except secret_code",
      "c": "Secret_code only",
      "d": "No fields"
    },
    "rightAnswers": "b"
  }
];
