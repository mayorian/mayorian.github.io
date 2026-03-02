var questionsBankArray = [
  {
    "category": "dum",
    "question": "What is a limitation when using record producers in ServiceNow?",
    "answers": {
      "a": "Record producers should not be used to create requested item records",
      "b": "Record producers cannot be used for tables in the same scope",
      "c": "Record producers cannot redirect users after record creation",
      "d": "Record producers must always call the update method on the current record"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?",
    "answers": {
      "a": "Process Automation > Workflow Editor",
      "b": "Process Automation > Active Flows",
      "c": "Process Automation > Process Flow",
      "d": "Process Automation > Flow Designer",
      "e": "Process Automation > Flow Administration"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "What are the three key tables in an enterprise CMDB?Choose 3 answers",
    "answers": {
      "a": "sn_cmdb_ci",
      "b": "cmdb",
      "c": "cmdb_bak",
      "d": "sn_cmdb",
      "e": "cmdb_rel_ci",
      "f": "cmdb_ci",
      "g": "sn_cmdb_bak"
    },
    "rightAnswers": "b,e,f"
  },
  {
    "category": "dum",
    "question": "What is a 'workflow context'?",
    "answers": {
      "a": "The business reason or process for which a workflow is designed",
      "b": "A checked-out workflow that is being edited",
      "c": "It is generated from a workflow version, executes activities, and follows transitions",
      "d": "The table for which a workflow is defined, plus any conditions such as 'Active is true'"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "What happens to the List view when a new field is added to an existing table?",
    "answers": {
      "a": "The new field is added at the end of the List",
      "b": "A new List View is created with the new field",
      "c": "The new field is added at the start of the List",
      "d": "The new field is not added to the List view"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "What is the ServiceNow App Repository?",
    "answers": {
      "a": "A Request table",
      "b": "Another name for update sets",
      "c": "A database containing ServiceNow apps",
      "d": "A collection of files in a Git database"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "Which role(s) are required to impersonate a user?Choose 2 answers",
    "answers": {
      "a": "security_admin",
      "b": "sys_admin",
      "c": "admin",
      "d": "sys_user",
      "e": "impersonator"
    },
    "rightAnswers": "c,e"
  },
  {
    "category": "dum",
    "question": "Which one of the following is true for GlideUser (g_user) methods?",
    "answers": {
      "a": "Can be used in Client Scripts and UI Policies only",
      "b": "Can be used in Business Rules only",
      "c": "Can be used in Client Scripts, UI Policies, and UI Actions",
      "d": "Can be used in Business Rules, and Scripts Includes"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "A graphical view of relationships among tables is a .",
    "answers": {
      "a": "Schema map",
      "b": "Dependency view",
      "c": "Graphical User Interface",
      "d": "Map source report"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "The task table is an example of which of the following?Choose 2 answers",
    "answers": {
      "a": "Legacy class",
      "b": "Child class",
      "c": "Base class",
      "d": "Parent class"
    },
    "rightAnswers": "c,d"
  },
  {
    "category": "dum",
    "question": "(How does the weight field value affect sending multiple notifications for the same record and recipients?)",
    "answers": {
      "a": "Notifications with the lowest weight value are sent.",
      "b": "Notifications with a weight value of zero are skipped.",
      "c": "Notifications with the highest weight value are always skipped.",
      "d": "Notifications with the highest weight value are sent."
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "When a custom table is created, which access control rules are automatically created?Choose 4 answers",
    "answers": {
      "a": "update",
      "b": "read",
      "c": "execute",
      "d": "create",
      "e": "delete",
      "f": "write"
    },
    "rightAnswers": "b,d,e,f"
  },
  {
    "category": "dum",
    "question": "Exportitem table is extended from Item table with the additional column of ItemCountry added. The Item table contains the columns ItemName and ItemQty.Which fields are available in the Exportitem table?",
    "answers": {
      "a": "ItemCountry, Number",
      "b": "Only ItemName, ItemQty",
      "c": "ItemName, ItemQty, and ItemCountry",
      "d": "Only ItemCountry"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "Which objects can be used in Inbound Action scripts?",
    "answers": {
      "a": "current and previous",
      "b": "current and email",
      "c": "current and event",
      "d": "current and producer"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "Which one of the following is NOT required to link a ServiceNow application to a Git repository?",
    "answers": {
      "a": "Password",
      "b": "URL",
      "c": "User name",
      "d": "Application name"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "Which of the following are configured in an Email Notification?a)Who will receive the notification.b)What content will be in the notification.c)When to send the notification.d)How to send the notification.",
    "answers": {
      "a": "a, b and c",
      "b": "a, b, and d",
      "c": "b, c and d",
      "d": "a, c and d"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "Why would you build a custom app?",
    "answers": {
      "a": "To fulfill is specific use case on internal processes.",
      "b": "To avoid using a code repository like GiotHub or GitLab",
      "c": "To create a custom integration for a 3rd party system",
      "d": "To replace servieNow base tables"
    },
    "rightAnswers": "a,c"
  },
  {
    "category": "dum",
    "question": "Identify the incorrect statement about Delegated Development in ServiceNow.",
    "answers": {
      "a": "Administrators can grant non-admin users the ability to develop global applications.",
      "b": "Administrators can specify which application file types the developer can access.",
      "c": "Administrators can grant the developer access to script fields.",
      "d": "Administrators can grant the developer access to security records."
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "If a knowledge base has no access details specified, what users are able to read articles in that knowledge base?",
    "answers": {
      "a": "itil users",
      "b": "Users with kb_user role",
      "c": "Any active user",
      "d": "No users",
      "e": "Any user with an article's permalink"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "To see what scripts, reports, and other application artifacts will be in a published application:",
    "answers": {
      "a": "Enter the name of the Application in the Global search field",
      "b": "Open the list of Update Sets for the instance",
      "c": "Examine the Application Files Related List in the application to be published",
      "d": "Open the artifact records individually to verify the value in the Application field"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "Which actions can a Business Rule take without scripting?",
    "answers": {
      "a": "Set field values and query the database",
      "b": "Set field values and add message",
      "c": "Set field values and write to the system log",
      "d": "Set field values and generate an event"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "(Which permissions can Administrators give to Delegated Developers? Choose 2 options.)",
    "answers": {
      "a": "Develop or deploy Global Applications",
      "b": "Define a coalesce field during a table import",
      "c": "Set up Access Controls (ACLs) for the application tables",
      "d": "Delete a scoped application"
    },
    "rightAnswers": "c,d"
  },
  {
    "category": "dum",
    "question": "Which one of the following is a benefit of creating an Application Properties page for each application you develop?",
    "answers": {
      "a": "An Application Properties page is a common landing page for an application.",
      "b": "Application users know to go to the Application Properties page to change the appearance of an application.",
      "c": "Application Properties allow a developer to override the application properties inherited from ServiceNow.",
      "d": "Application Properties allow a developer or admin to make changes to an application's behavior without modifying application artifacts."
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "The Report Designer contains different sections for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report.",
    "answers": {
      "a": "Data",
      "b": "Type",
      "c": "Sources",
      "d": "Properties",
      "e": "Configure"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "As an IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?",
    "answers": {
      "a": "Knowledge",
      "b": "SharePoml",
      "c": "Stack Overflow",
      "d": "ServiceNow Wiki",
      "e": "Knowledge NoW"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "How does ServiceNow match inbound email to existing records?",
    "answers": {
      "a": "Watermark",
      "b": "Record link",
      "c": "Subject line",
      "d": "sys_id"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "When crafting a scoped application that contains flow actions, what is the application called?",
    "answers": {
      "a": "Spoke",
      "b": "Flow",
      "c": "Bundle",
      "d": "Action"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "In a privately-scoped application, which methods are used for logging messages in server-side scripts? (Choose 2 answers)",
    "answers": {
      "a": "gs.info()",
      "b": "gs.debug()",
      "c": "gs.iog()",
      "d": "gs.error()",
      "e": "gs.logError()"
    },
    "rightAnswers": "a,d"
  },
  {
    "category": "dum",
    "question": "Which database operations can be controlled with Access Control?Choose 2 answers",
    "answers": {
      "a": "Execute",
      "b": "Create",
      "c": "Update",
      "d": "Query"
    },
    "rightAnswers": "b,c"
  },
  {
    "category": "dum",
    "question": "Identify characteristic(s) of a Record Producer. (Choose 3 answers)",
    "answers": {
      "a": "All records created using this strategy are inserted into the Requested Item [sc_req_item] table.",
      "b": "Graphics can be included on the user interface.",
      "c": "They must be scripted.",
      "d": "Each field prompts the user with a question rather than a field label.",
      "e": "You can script behaviors of fields in the user interface."
    },
    "rightAnswers": "b,d,e"
  },
  {
    "category": "dum",
    "question": "Application developers configure ServiceNow using industry standard JavaScript to…",
    "answers": {
      "a": "Enable the right-click to edit the context menus on applications in the navigator",
      "b": "Extend and add functionality",
      "c": "Customize the organization’s company logo and banner text",
      "d": "Configure the outgoing email display name"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "Which one of the following objects CANNOT be used in a Script Action script?",
    "answers": {
      "a": "previous",
      "b": "GlideRecord",
      "c": "event",
      "d": "current"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "How is access to Application Menus and Modules controlled?",
    "answers": {
      "a": "Access Controls",
      "b": "Application Rules",
      "c": "Client Scripts",
      "d": "Roles"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "While showing a customer their Incident form, they ask to change the Priority field title to display their internal terminology Value. How would you do that?Choose 2 answers",
    "answers": {
      "a": "Right click on Priority and select Configure Dictionary",
      "b": "Right click on Priority and select Configure Display Settings",
      "c": "Right click on Priority and select Configure Column",
      "d": "Right click on Priority and select Configure Label"
    },
    "rightAnswers": "a,d"
  },
  {
    "category": "dum",
    "question": "(Who can view a module when its Roles field is empty?)",
    "answers": {
      "a": "Users with the snc_internal role",
      "b": "Users with no attached roles on the user record",
      "c": "Users with roles that grant access to the application menu",
      "d": "All users"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "Which one of the following is NOT a purpose of application scoping?",
    "answers": {
      "a": "Provide a relationship between application artifacts",
      "b": "Provide a way of tracking the user who developed an application",
      "c": "Provide a namespace (prefix and scope name) to prevent cross application name collisions",
      "d": "Provide controls for how scripts from another scope can alter tables in a scoped application"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?",
    "answers": {
      "a": "ServiceNow Messenger",
      "b": "Knowledge Chat",
      "c": "Virtual Agent",
      "d": "Now Support",
      "e": "Agent Workspace"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "Which of the following is NOT a trigger type in Flow Designer?",
    "answers": {
      "a": "Outbound Email",
      "b": "Application",
      "c": "Record",
      "d": "Schedule"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "What does the \"Enforcing\" option in Runtime Access Tracking settings do?",
    "answers": {
      "a": "Logs and authorizes all access requests to cross-scope resources automatically",
      "b": "Logs access requests to cross scope resources and requires an administrator to authorize each request",
      "c": "Authorizes all access requests to cross-scope resources without logging them",
      "d": "Blocks all access requests to cross-scope resources"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "Which of the following objects does a Display Business Rule NOT have access to?",
    "answers": {
      "a": "previous",
      "b": "GlideSystem",
      "c": "g_scratchpad",
      "d": "current"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "What is the ServiceNow store?",
    "answers": {
      "a": "The source for ServiceNow Community created developer content",
      "b": "Marketplace for free and paid certified ServiceNow applications and integrations",
      "c": "Downloadable content ServiceNow script archive",
      "d": "Alternate name for the ServiceNow Developer Share site"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "Where can GlideUser (g_user) methods be utilized within ServiceNow?",
    "answers": {
      "a": "Client Scripts and UI Policies only",
      "b": "Business Rules only",
      "c": "Business Rules, and Script Includes",
      "d": "Client Scripts, UI Policies, and UI Actions"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "When configuring the content of an Email Notification, which syntax should be used to reference the properties of an event triggering the Notification?",
    "answers": {
      "a": "${event. }",
      "b": "${current. }",
      "c": "${property name>.getDisplayValue()}",
      "d": "${gs.}"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "Which of the following statements is true about Guided Application Creator?",
    "answers": {
      "a": "The global scope option is turned on by default",
      "b": "A scope application user role is automatically created",
      "c": "Default access controls are automatically created",
      "d": "The welcome screen appears every time a new application is created"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "(Which file type does ServiceNow Studio support for customizing system behavior through database actions?)",
    "answers": {
      "a": "Business Rules (sys_script)",
      "b": "Access Control (sys_security_acl)",
      "c": "UI Policies (sys_ui_policy)",
      "d": "Client Scripts"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "Why create Applications in ServiceNow?A) To replace outdated inadequate custom business applications and processesB) To extend service delivery and management to all enterprise departmentsC) To allow users full access to all ServiceNow tables, records and fieldsD) To extend the value of ServiceNow",
    "answers": {
      "a": "a b and c",
      "b": "a b c and d",
      "c": "b c and d",
      "d": "a b and d"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "While on an Incident record, how would you add a Tag for \"Special Handling\" to the record?",
    "answers": {
      "a": "Click on the More options (...) icon, click Add Tag, type Special Handling, press enter",
      "b": "On the Tag field, select Special Handling from the choice list",
      "c": "On the Special Handling field check the box",
      "d": "Click on the Context menu, select Add Tact, type Special Handling. press enter"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "The source control operation used to store local changes on an instance for later application is called a(n).",
    "answers": {
      "a": "Branch",
      "b": "Tag",
      "c": "Stash",
      "d": "Update set"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "(What is the primary purpose of an application scope?)",
    "answers": {
      "a": "To manage the data storage and backup for applications",
      "b": "To define the boundary that isolates an application's resources from others",
      "c": "To allow one application to automatically update another's resources without restrictions",
      "d": "To control the user interface design for an application"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "An administrator creates \"customer_table_adminH and \"customer_table_user\" roles for the newly created \"Customer Table\". Which ACL rule would grant access to all rows and all fields to both the customer_table_admin and customer_table_user roles?",
    "answers": {
      "a": "customer all",
      "b": "customer.field",
      "c": "customer.*",
      "d": "customer.none"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?",
    "answers": {
      "a": "Task Escalation Clock",
      "b": "Business Time Remaining",
      "c": "Inactivity Monitor",
      "d": "Service Level Agreements",
      "e": "Response Time Clock"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "What is a characteristic of Modules?",
    "answers": {
      "a": "Every Module must be part of an Application Menu",
      "b": "Modules cannot open forms or lists",
      "c": "Every Module must be associated with a table",
      "d": "Access to Modules is not controlled with roles"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "Which of the following statements is true for the Form Designer?a)To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form.b)To create a new field on a form’s table, drag the appropriate data type from the Field Types tab to the form and then configure the new field.c)To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button.d)To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form.",
    "answers": {
      "a": "a, b, c, and d",
      "b": "b, c, and d",
      "c": "a, b, and d",
      "d": "a, b, and c"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "What are some of the benefits of extending an existing table such as the Task table when creating a new application?a)You can repurpose existing fields by simply changing the label.b)Use existing fields with no modifications.c)Existing logic from the parent table will be automatically applied to the new table.d)All of the parent table records are copied to the new table.",
    "answers": {
      "a": "a, b, c, and d",
      "b": "a and b",
      "c": "b and c",
      "d": "a, b, and c"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "What is the best practice related to using the Default Update Set for moving customizations between instances?",
    "answers": {
      "a": "Submit Default update set to application repository",
      "b": "You should not use the Default Update sets for moving between instances",
      "c": "Keep Default update set to maximum of 20 records, for troubleshooting purposes",
      "d": "Merge Default update sets before moving between instances"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "Assume a table called table exists and contains 3 fields: field1, field2, field3. Examine the Access Control list for table:Which field or fields can a user with the itil role read?",
    "answers": {
      "a": "field3 only",
      "b": "filed1 and field3",
      "c": "All fields",
      "d": "All fields except field3"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "Which of the following is true about g_scratchpad?Choose 2 answers",
    "answers": {
      "a": "Has default properties passed by client-side scripts",
      "b": "Does not exist on the mobile platform",
      "c": "Used to push information from the server to the client",
      "d": "Has constructors and methods"
    },
    "rightAnswers": "c,d"
  },
  {
    "category": "dum",
    "question": "What records are used to track cross-scope applications or scripts that request access to an application, application resource, or event?",
    "answers": {
      "a": "Restricted caller access records",
      "b": "Caller tracking records",
      "c": "Access control level records",
      "d": "Cross-scope access records"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "On what part of the ServiceNow instance, would you find the option to Impersonate User?",
    "answers": {
      "a": "User Menu",
      "b": "Content Frame",
      "c": "Application Navigator",
      "d": "Module"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "Here is an example of the criteria set for a knowledge base:• Companies: ACME North America• Departments: HR• Groups: ACME Managers• Match All: YesIn this example, what users would have access to this knowledge base?",
    "answers": {
      "a": "Employees of ACME North America, who are members of HR Department or the ACME Managers group",
      "b": "Members of the ACME Manager group, who are also members of HR Department and part of ACME North America",
      "c": "Members of the ACME Managers group, and HR department, regardless of geography",
      "d": "Users which are members of either ACME North America, or HR Department or ACME Managers group"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "Which set of steps is used to import spreadsheet data into a ServiceNow table?",
    "answers": {
      "a": "Define Data Source, Select Transform Map, Run Transform Load Data.",
      "b": "Create Transform Map.",
      "c": "Run Transform Select Import Set, Select Transform Map.",
      "d": "Run Transform Select Data Source. Schedule Transform"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "Which allows the creation of a task-based record from Service Catalog?",
    "answers": {
      "a": "UI Builder",
      "b": "Flow Designer",
      "c": "Assignment Rule",
      "d": "Record Producers",
      "e": "Ul Actions"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "Which are reasons an application could be developed on the ServiceNow platform?Choose 3 answers",
    "answers": {
      "a": "It uses forms extensively to interact with data.",
      "b": "It needs workflow to manage processes.",
      "c": "It requires reporting capabilities.",
      "d": "It requires low-level programming libraries.",
      "e": "It uses multimedia features."
    },
    "rightAnswers": "a,b,c"
  },
  {
    "category": "dum",
    "question": "Which tab on the knowledge base record, would you use to identify the sets of users who are able to read articles in that knowledge base?",
    "answers": {
      "a": "Access List",
      "b": "Can Access",
      "c": "Accessible to",
      "d": "Can Read"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "Which one of the following client-side scripts apply to Record Producers?",
    "answers": {
      "a": "Catalog Client Scripts and Catalog UI Policies",
      "b": "UI Scripts and UI Actions",
      "c": "UI Scripts and Record Producer Scripts",
      "d": "Client Scripts and UI Policies"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "Which determines the relationships between field in an Import Set table to field in an existing ServiceNow table?",
    "answers": {
      "a": "Data Sources",
      "b": "Schema Map Relationship Builder",
      "c": "Business Service Management Map",
      "d": "Transform Map"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "Which server-side API debug log method is available for scoped applications?",
    "answers": {
      "a": "gs.log()",
      "b": "gs.print()",
      "c": "gs.info()",
      "d": "gs.debugLog()"
    },
    "rightAnswers": "c"
  },
  {
    "category": "dum",
    "question": "In a Business Rule, which one of the following returns true if the currently logged in user has the admin role?",
    "answers": {
      "a": "g_form.hasRoleExactly(‘admin’)",
      "b": "gs.hasRole(‘admin’)",
      "c": "g_form.hasRole(‘admin’)",
      "d": "gs.hasRoleExactly(‘admin’)"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "Which one of the following is true for a Script Include with a Protection Policy value of Protected?",
    "answers": {
      "a": "Any user with the protected_edit role can see and edit the Script Include",
      "b": "The Protection policy option can only be enabled by a user with the admin role",
      "c": "The Protection Policy is applied only if the glide.app.apply_protection system property value is true",
      "d": "The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "Which of the following methods is NOT part of the ServiceNow REST API?",
    "answers": {
      "a": "COPY",
      "b": "POST",
      "c": "GET",
      "d": "DELETE"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "In a Business Rule, which one of the following returns the sys_id of the currently logged in user?",
    "answers": {
      "a": "g_form getUserID()",
      "b": "g_form getUserSysy",
      "c": "gs.getUserSysID()",
      "d": "gs.getUserID()"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "(Which method can be used in a Business Rule to get the sys_id of the currently logged in user?)",
    "answers": {
      "a": "g_form.getUserSysID()",
      "b": "gs.getUserSysID()",
      "c": "g_form.getUserID()",
      "d": "gs.getUserID()"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "For Application Access, there is a configuration option called \"Allow access to this table via web services.\" Which one of the following statements is true when this option is selected?",
    "answers": {
      "a": "Even when not selected, users with the correct permissions can use web services to access the table's records.",
      "b": "The user performing the query via web services must have the correct permissions to access the table's records.",
      "c": "This option restricts access only to SOAP web services but does not apply to REST.",
      "d": "This option restricts the ability to delete records via web services, but records can always be read."
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "Which Report Type(s) can be created by right-clicking on a column header in a table’s list?",
    "answers": {
      "a": "Bar Chart, Pie Chart, Histogram, and Line",
      "b": "Bar Chart",
      "c": "Bar Chart, Pie Chart, and Histogram",
      "d": "Bar Chart and Pie Chart"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "Which one of the following is NOT a debugging strategy for client-side scripts?",
    "answers": {
      "a": "g_form.addInfoMessage()",
      "b": "Field Watcher",
      "c": "jslog()",
      "d": "gs.log()"
    },
    "rightAnswers": "d"
  },
  {
    "category": "dum",
    "question": "Many actions are included with flow designer what are some frequently used core actions?Choose 4 answers",
    "answers": {
      "a": "Look Up Record",
      "b": "Ask for Approval",
      "c": "Create Record",
      "d": "Look for Update",
      "e": "Wait for Condition",
      "f": "Wart for Match"
    },
    "rightAnswers": "a,b,c,e"
  },
  {
    "category": "dum",
    "question": "Which ATF Test step allows you to create a user with specified roles and groups for the test?",
    "answers": {
      "a": "Create a user",
      "b": "Create a role",
      "c": "Create a group",
      "d": "Impersonation"
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "What contains the configuration changes made in an instance (i.e. changes in a form) and helps to implement the changes from the Dev environment to another environment?",
    "answers": {
      "a": "Import sets",
      "b": "Update sets",
      "c": "Transform maps",
      "d": "System dictionaries"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "Which of the following statements is NOT true for the Form Designer?",
    "answers": {
      "a": "To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form.",
      "b": "To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form.",
      "c": "To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button.",
      "d": "To create a new field on a form’s table, drag the appropriate data type from the Field Types tab to the form and then configure the new field."
    },
    "rightAnswers": "a"
  },
  {
    "category": "dum",
    "question": "A new employee joins the IT department and needs to perform work assigned to Network and Hardware groups. How would you set up their access?Choose 3 answers",
    "answers": {
      "a": "Add User Account to Network group",
      "b": "Add User Account to Hardware group",
      "c": "Add User Account to IT Knowledgebase",
      "d": "Create User Account",
      "e": "Add User Account to ACL",
      "f": "Add User Account to itil group"
    },
    "rightAnswers": "a,b,d"
  },
  {
    "category": "dum",
    "question": "What is the purpose of the coalesce field when importing data?",
    "answers": {
      "a": "When a match is found, a new record is inserted",
      "b": "To determine if a record matches an existing record or is a new record",
      "c": "If a match is not found, the existing record is updated",
      "d": "To identify and merge duplicate records"
    },
    "rightAnswers": "b"
  },
  {
    "category": "dum",
    "question": "How can an application respond to an Event triggered by the gs.eventQueueO method?Choose 2 answers",
    "answers": {
      "a": "Ul Policy",
      "b": "Scheduled Script Execution (Scheduled Job)",
      "c": "Email Notification",
      "d": "Script Action",
      "e": "Client Script"
    },
    "rightAnswers": "c,d"
  }
];
