var questionsBankArray = [
{
  "category": "TI",
  "question": "A new developer opens the Classic Workflow Editor and wants to start building a workflow. They drag a 'Run Script' activity onto the canvas and try to connect it to the 'Begin' activity. What must the developer create between the two activities to establish the connection?",
  "answers": {
    "a": "A transition line that links the two activities together",
    "b": "A transition event that triggers the flow from one activity to the next one",
    "c": "A scratchpad variable that passes execution context between the two activities",
    "d": "A condition script that evaluates the relationship between both activities"
  },
  "rightAnswers": "a"
},
  {
  "category": "TI",
  "question": "A developer creates a 'Maintenance Task' table that extends the Task table. They want the 'Priority' field to default to '3 - Moderate' only on the Maintenance Task table, while the Task table keeps its original default of '4 - Low'. Where should the developer navigate to accomplish this?",
  "answers": {
    "a": "Navigate to the Task table's dictionary entries and modify the default value of the Priority field to apply conditionally",
    "b": "Navigate to the Maintenance Task table's dictionary entries and create a dictionary override for the Priority field",
    "c": "Navigate to the Maintenance Task table's form layout and configure the Priority field's default through the form designer",
    "d": "Navigate to the Maintenance Task table's dictionary entries and create a new dictionary entry for the Priority field"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "A developer wants to restrict a catalog item so only users in the 'Finance' department with the 'catalog_admin' role can see it. They create one User Criteria record with both Department = 'Finance' and Role = 'catalog_admin', then associate it as 'Available For.' A user named Alex has the 'catalog_admin' role but is in the 'Sales' department. Will Alex see the catalog item?",
  "answers": {
    "a": "No, because conditions within a single User Criteria record are evaluated using AND logic, and Alex does not meet both conditions",
    "b": "Yes, because conditions within a single User Criteria record are evaluated using OR logic, and Alex meets the role condition",
    "c": "Yes, because the 'catalog_admin' role grants universal access to all catalog items regardless of department-based criteria settings",
    "d": "No, because the role field is only evaluated when the script field is also populated in the User Criteria record"
  },
  "rightAnswers": "a"
},
  {
  "category": "TI",
  "question": "A developer is building an onLoad client script for a Service Catalog item. The script needs to hide the 'Justification' field when the form loads and also make it visible later based on user input. The developer writes: g_form.setVisible('justification', false); in the onLoad script. Later, in an onChange script, they want to show the field again. Which g_form method call should the onChange script use to reveal the hidden field?",
  "answers": {
    "a": "g_form.setDisplay('justification', true) to toggle the field's display rendering state",
    "b": "g_form.setVisible('justification', true) to toggle the field back to a visible state",
    "c": "g_form.setReadOnly('justification', false) to toggle the field back to an editable and visible state",
    "d": "g_form.showFieldMsg('justification', 'Visible', 'info') to restore the field on the form"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "A developer has a 'Meeting' table with a reference field called 'Organizer' pointing to the 'sys_user' table. When users fill out a new meeting form, they should only see active users who belong to the 'Event Planning' group. How should the developer configure this filtering?",
  "answers": {
    "a": "Create a dictionary override on the Organizer field that limits the referenced table to only show users with the Event Planning role",
    "b": "Add a reference qualifier to the Organizer field that encodes a condition for active=true and group membership",
    "c": "Add a reference qualifier to the Organizer field that encodes a condition for the user's department matching Event Planning",
    "d": "Set the display value attribute on the Organizer field to filter results based on active status and group name"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "In ServiceNow, what happens to existing target table records when a Data Source import set is processed with the 'Truncate table' option enabled on the Import Set?",
  "answers": {
    "a": "All existing records in the import set table are archived to a history table before loading",
    "b": "All existing records in the import set table are deleted before new data is loaded",
    "c": "All existing records in the target table are deleted before the transform map runs",
    "d": "All existing records in both the import set table and target table are cleared before processing"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "In ServiceNow Client Scripts, what is the default behavior when an onSubmit function does not explicitly return a value?",
  "answers": {
    "a": "The form submission proceeds but triggers a validation warning to the user first",
    "b": "The form submission is paused until a callback confirms the action",
    "c": "The form submission proceeds normally as if the function returned true",
    "d": "The form submission is cancelled as if the function returned false"
  },
  "rightAnswers": "c"
},
  {
  "category": "TI",
  "question": "A team imports project records using a transform map with 'project_code' as the coalesce field. The staging table contains three rows: Row 1 has project_code 'P100' with status 'Planning', Row 2 has project_code 'P200' with status 'Active', and Row 3 has project_code 'P100' with status 'Closed'. No existing records match 'P100' or 'P200' in the target table. After the import completes, what is the total number of records in the target table?",
  "answers": {
    "a": "Two records exist: one for 'P100' with status 'Closed' and one for 'P200' with status 'Active'",
    "b": "One record exists: only the last processed row is kept because coalesce fields consolidate all rows into a single record",
    "c": "Two records exist: one for 'P100' with status 'Planning' and one for 'P200' with status 'Active', retaining the first match",
    "d": "Three records exist: one for each row processed, since each staging row creates a separate target record during import"
  },
  "rightAnswers": "a"
},
  {
  "category": "TI",
  "question": "A developer receives Code Review results for their scoped application. The report contains three recommendations related to GlideRecord query efficiency and one mandatory finding about a missing ACL on a sensitive table. The team has a tight deadline to publish the application. How should the developer sequence their remediation work?",
  "answers": {
    "a": "Resolve the mandatory ACL finding and resubmit for review right away, then plan to address the query efficiency recommendations in a subsequent application update version",
    "b": "Resolve the mandatory ACL finding first to ensure the application can pass review, then address the query efficiency recommendations to improve overall quality before resubmission",
    "c": "Bundle the ACL finding and all three query recommendations into a single remediation effort, then resubmit so the reviewer can validate all fixes together in one consolidated pass",
    "d": "Address all query efficiency recommendations first since performance issues affect more users, then resolve the ACL finding and resubmit the application for another review cycle"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "A developer needs to create a custom table to track software licenses. Each license record must support attachments, journaling, and number generation. The developer also wants to ensure the table appears in navigation menus and can leverage role-based access control. When creating this table, which approach ensures all these capabilities are available with minimal additional configuration?",
  "answers": {
    "a": "Extend the CMDB base table, which provides built-in support for number generation, journaling, attachments, and relationship mapping",
    "b": "Extend the Task table, which provides built-in support for number generation, journaling, attachments, and ACL integration",
    "c": "Create a standalone table and manually add dictionary entries for number generation, journaling, attachments, and ACL support fields",
    "d": "Extend the Application table, which inherits number generation, journaling, attachment handling, and navigation menu registration"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "A developer builds a parent flow that calls a subflow, which in turn calls a custom action. During testing, the action completes successfully, but the parent flow does not receive the expected output value from the subflow. The subflow's internal logic correctly assigns the action's output to a variable. What is the most likely reason the parent flow lacks the expected data?",
  "answers": {
    "a": "The subflow's output variable was mapped correctly, but the action's output data type conflicts with the subflow's declared output schema type",
    "b": "The subflow's output variable was assigned properly, but the parent flow's trigger condition filters out the returned value before it can be processed",
    "c": "The subflow's output variable was not mapped to an output in the subflow's properties, so the result is not passed back to the calling flow",
    "d": "The subflow's output variable was configured as an input rather than an output, causing the data to be passed into the subflow instead of returned to the parent flow"
  },
  "rightAnswers": "c"
},{
  "category": "TI",
  "question": "A team builds a Record Producer targeting the Problem table. They need to automatically set the 'Priority' field to '1 - Critical' and the 'Assignment group' to a specific group whenever the user selects 'Security Breach' from a custom 'Issue Type' variable. The variable name does not match any field on the Problem table. Where should this conditional logic be implemented to ensure the values are set on the newly created record?",
  "answers": {
    "a": "In the Record Producer's Script field, use conditional logic to check the 'Issue Type' variable value and set the appropriate fields on the current record object",
    "b": "In a Before Insert business rule on the Problem table, check the 'Issue Type' variable from the submitted catalog item and conditionally set the Priority and Assignment group values",
    "c": "In the Record Producer's Script field, use a GlideRecord query to retrieve the submitted record after creation and then update the Priority and Assignment group fields",
    "d": "In a Catalog Client Script attached to the Record Producer, use g_form.setValue() to conditionally populate the Priority and Assignment group fields on submission"
  },
  "rightAnswers": "a"
},
  {
  "category": "TI",
  "question": "In the Classic Workflow Editor, what is the primary purpose of the 'Begin' and 'End' activities that appear on every workflow canvas?",
  "answers": {
    "a": "They establish the start and stop triggers that control when the workflow is invoked",
    "b": "They define the entry and exit points of the workflow execution path",
    "c": "They mark the boundaries where workflow versioning checkpoints are automatically created",
    "d": "They initialize and finalize the scratchpad variables used throughout the workflow"
  },
  "rightAnswers": "b"
},{
  "category": "TI",
  "question": "A team develops a scoped application across two development instances linked to the same Application Repository account. A developer on Instance A pushes version 3.0 of the application. Meanwhile, a developer on Instance B has been building changes locally and attempts to push version 3.0 from Instance B. What is the expected result of the push attempt from Instance B?",
  "answers": {
    "a": "The repository accepts the push from Instance B and stores both versions as 3.0-A and 3.0-B to preserve the changes from each source instance",
    "b": "The push from Instance B overwrites version 3.0 in the repository since both instances share the same application sys_id and version number",
    "c": "The repository merges the changes from both instances into a consolidated version 3.0 entry using conflict resolution logic",
    "d": "The repository rejects the push from Instance B because a version 3.0 artifact already exists and version numbers must be unique per application"
  },
  "rightAnswers": "d"
},
  {
  "category": "TI",
  "question": "A team creates a Script Include called 'IncidentHelper' that extends another Script Include called 'TaskHelper'. Both use Class.create() with prototype patterns. 'TaskHelper' defines a method called 'getAssignmentGroup' in its prototype. 'IncidentHelper' also defines 'getAssignmentGroup' in its prototype but calls 'TaskHelper.prototype.getAssignmentGroup.call(this)' at the end. A Business Rule instantiates 'IncidentHelper' and calls 'getAssignmentGroup'. During execution, 'IncidentHelper's method runs but throws an error on the parent call. The 'TaskHelper' method expects 'this.tableName' which is only set in 'TaskHelper's initialize. What is the most appropriate resolution?",
  "answers": {
    "a": "Ensure IncidentHelper's getAssignmentGroup method passes this.tableName as a function parameter to TaskHelper.prototype.getAssignmentGroup.call(this, this.tableName) to bind the context",
    "b": "Ensure IncidentHelper defines this.tableName as a static property on the Class.create() declaration before the prototype block so it is inherited through the prototype chain automatically",
    "c": "Ensure IncidentHelper's initialize method calls the parent's initialize using TaskHelper.prototype.initialize.call(this) so that this.tableName is properly set before the method executes",
    "d": "Ensure IncidentHelper sets this.tableName in its own prototype getAssignmentGroup method before invoking the parent call so that the property is available during the parent method execution"
  },
  "rightAnswers": "c"
},
  {
  "category": "TI",
  "question": "A developer is using the Script Debugger to troubleshoot a Business Rule that triggers on incident updates. After setting a breakpoint and updating an incident, the debugger pauses execution as expected. However, the developer notices that other users in the instance are experiencing significant delays when updating incidents during the debugging session. What is the most likely explanation for this behavior?",
  "answers": {
    "a": "The Script Debugger pauses server-side execution at the breakpoint, which holds the transaction open and blocks other users' transactions on the same table until the debugger resumes.",
    "b": "The Script Debugger locks the Business Rule record itself during active debugging, which prevents the rule from firing for other users until the session is released.",
    "c": "The Script Debugger spawns a separate debugging thread that competes for database resources, slowing down queries related to the incident table for all active user sessions.",
    "d": "The Script Debugger consumes excessive memory during breakpoint evaluation, causing the instance to throttle all concurrent transactions across every table in the system."
  },
  "rightAnswers": "a"
},
  {
  "category": "TI",
  "question": "When merging update sets in ServiceNow, what happens to customer update records that exist in both the source and target update sets?",
  "answers": {
    "a": "The records from the target update set are preserved and the source duplicates are marked as skipped",
    "b": "The records from the source update set replace the matching records in the target update set",
    "c": "The records from both update sets are combined into new composite entries in the target update set",
    "d": "The system generates collision records for each duplicate and queues them for manual resolution"
  },
  "rightAnswers": "d"
},
  {
  "category": "TI",
  "question": "An administrator creates a UI Policy on the Incident form with a Run Script set to true. The script uses g_form.setValue('priority', '1') inside the onCondition function. However, users report that when the UI Policy condition is met, the priority field changes but then triggers another UI Policy that sets priority back to '3'. Both policies have the same order value of 100. What is the most effective approach to resolve this cascading behavior?",
  "answers": {
    "a": "Set the 'Reverse if false' option to true on both UI Policies so that each policy properly resets its changes when conditions are no longer met, preventing the cascade loop",
    "b": "Add a condition to the scripted UI Policy that checks the current priority value using g_form.getValue before calling setValue, and wrap both policies in a mutual exclusion group",
    "c": "Adjust the order values so the policy setting priority to '1' has a higher order number, ensuring it executes after the other policy and its value takes precedence",
    "d": "Adjust the order values so the policy setting priority to '1' has a lower order number, ensuring it executes first and establishes the baseline value for subsequent policies"
  },
  "rightAnswers": "c"
},
  {
  "category": "TI",
  "question": "A developer is creating a custom table to track office supply requests. The table must support assignment groups, approval workflows, and SLA tracking. Another team later wants to create a 'Priority Supply Requests' child table. During design, the developer notices the 'Extensible' checkbox is unchecked by default. What should the developer do to satisfy both current and future requirements?",
  "answers": {
    "a": "Extend the Task table and create a separate M2M relationship table so the other team can link their priority records to it later",
    "b": "Create a standalone table with the Extensible attribute enabled and manually add assignment, approval, and SLA fields",
    "c": "Extend the Task table and enable the Extensible attribute on the new custom table to allow future child tables",
    "d": "Extend the Task table and keep the Extensible attribute unchecked since child tables can still be created from any Task descendant"
  },
  "rightAnswers": "c"
},
  {
  "category": "TI",
  "question": "When a form section is configured with a 'split' layout, how does ServiceNow determine the placement of fields across the resulting columns?",
  "answers": {
    "a": "Fields are arranged sequentially from left to right across columns based on their defined order within the section",
    "b": "Fields are placed into columns according to their data type, with reference fields in the first column and string fields in the second",
    "c": "Fields are assigned to columns based on their dictionary attribute weight values and the section's priority configuration settings",
    "d": "Fields are distributed evenly across columns using an automatic load-balancing algorithm based on field type and label length"
  },
  "rightAnswers": "a"
},
  {
  "category": "TI",
  "question": "In ServiceNow, which authentication method transmits a username and password encoded in Base64 with each HTTP request?",
  "answers": {
    "a": "OAuth 2.0 token-based authentication",
    "b": "Mutual SSL certificate authentication",
    "c": "Basic Authentication",
    "d": "API key header-based authentication"
  },
  "rightAnswers": "c"
},
  {
  "category": "TI",
  "question": "A developer creates an ACL rule on a custom table with a role, a condition, and a script. A user who lacks the required role attempts to access a record. The developer wants to confirm this by adding a gs.log() statement inside the ACL script. After testing, no log output appears. What does this indicate about how the ACL was processed?",
  "answers": {
    "a": "The script was evaluated but the gs.log() function is not supported inside ACL scripts",
    "b": "The condition check failed first, so the script and role were never evaluated",
    "c": "The role check failed first, so the condition and script were never evaluated",
    "d": "All three components were evaluated but the log output was suppressed by the failed role check"
  },
  "rightAnswers": "c"
},
  {
  "category": "TI",
  "question": "What type of field map allows you to use a script to determine the value assigned to a target field, rather than selecting a source field from the import set?",
  "answers": {
    "a": "Reference lookup field map",
    "b": "Mapping assist field map",
    "c": "Scripted value transform field map",
    "d": "Source script field map"
  },
  "rightAnswers": "c"
},
  {
  "category": "TI",
  "question": "In Tuckman's model, which stage was added later to the original four stages of team development?",
  "answers": {
    "a": "Adjourning, which addresses team dissolution and project closure",
    "b": "Performing, which addresses achieving peak productivity and collaboration",
    "c": "Norming, which addresses establishing team rules and shared expectations",
    "d": "Reforming, which addresses restructuring roles after significant changes"
  },
  "rightAnswers": "a"
},
  {
  "category": "TI",
  "question": "A new developer needs to display the current user's name in an alert message when a form loads. They write the following client script: alert('Welcome, ' + g_user.getName()); The alert shows the user's full name successfully. The developer now wants to also show the user's unique identifier. Which approach retrieves the current user's sys_id?",
  "answers": {
    "a": "Call the g_user.getClientData('sys_id') method to get the value",
    "b": "Access the g_user.userID property to get the sys_id value",
    "c": "Access the g_user.sysID property to retrieve the user sys_id value",
    "d": "Call the g_user.getSysID() method to get the sys_id value"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "A developer needs to make a field mandatory only when a user changes the 'Priority' field to '1 - Critical' on the Incident form. Which Client Script type and approach should the developer use?",
  "answers": {
    "a": "Use an onLoad Client Script that checks the Priority field value and calls g_form.setMandatory() when the form renders",
    "b": "Use an onChange Client Script on the Priority field that calls g_form.setMandatory() based on the new value",
    "c": "Use an onSubmit Client Script that validates the Priority field and calls g_form.setMandatory() before saving the record",
    "d": "Use an onChange Client Script on the Priority field that calls g_form.setRequired() through a GlideAjax callback"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "A developer has a scoped application in ServiceNow Studio linked to a Git repository. They made several local changes but now need to pull the latest updates from the remote branch before committing. However, they are concerned about losing their local modifications. What should the developer do before pulling remote changes?",
  "answers": {
    "a": "Use the Tag operation to mark the current local state for reference, then pull the remote updates",
    "b": "Use the Commit operation to save local changes to the repository, then pull the remote updates",
    "c": "Use the Switch Branch operation to create a backup branch, then pull the remote updates",
    "d": "Use the Stash operation to save local changes temporarily, then pull the remote updates"
  },
  "rightAnswers": "d"
},
  {
  "category": "TI",
  "question": "What is the primary purpose of an Outbound REST Message record in ServiceNow?",
  "answers": {
    "a": "It defines a reusable REST endpoint configuration and its associated HTTP Methods for receiving inbound API requests",
    "b": "It defines a reusable SOAP endpoint configuration and its associated HTTP Methods for calling external services",
    "c": "It defines a reusable REST endpoint configuration and its associated HTTP Methods for calling external APIs",
    "d": "It stores the response data returned from external REST API calls in a structured table format"
  },
  "rightAnswers": "c"
},
  {
  "category": "TI",
  "question": "A developer is customizing a form for a 'Travel Request' table. After adding several fields using Form Designer, the developer notices that dragging a field from one section to another causes the field to appear duplicated on the form temporarily. The developer refreshes the page, but the duplicate persists in the layout configuration. What is the most likely explanation for this behavior?",
  "answers": {
    "a": "The Form Designer cache is out of sync with the server-side layout, requiring the developer to clear the browser cache and reload",
    "b": "The same field was added to multiple sections in the form layout, since Form Designer allows a field to exist in more than one section",
    "c": "The field was inherited from a parent table's form layout and is being displayed alongside the child table's version of the same field",
    "d": "A UI policy on the form is dynamically cloning the field into the target section based on a condition that evaluates to true"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "What type of record is automatically generated when a committed update set modifies a configuration that was also changed locally on the target instance?",
  "answers": {
    "a": "A dependency record that links the two conflicting update set entries together",
    "b": "A merge record that combines both versions into a single unified entry",
    "c": "A collision record that flags the conflict for manual review",
    "d": "A collision record that automatically applies the remote version as the resolution"
  },
  "rightAnswers": "c"
},
  {
  "category": "TI",
  "question": "A new developer is building their first client script in ServiceNow. They need to show the logged-in user's name in a form info message when the form loads. Which approach correctly retrieves the user's name using the g_user object?",
  "answers": {
    "a": "Use g_user.getFullName() method to return the first and last name as a single string",
    "b": "Use g_user.userName property to retrieve the full display name of the current user",
    "c": "Use g_user.firstName and g_user.lastName properties to get the name values",
    "d": "Use g_user.getClientData('user_name') to fetch the name stored in the user session"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "A team wants to make the 'Description' field mandatory on the Problem table whenever the 'Priority' is set to 1. They have never worked with Data Policies before. Where should they navigate to create a new Data Policy in ServiceNow?",
  "answers": {
    "a": "System Definition > Data Policies",
    "b": "System Policy > UI Policies",
    "c": "System Definition > Business Rules",
    "d": "System Policy > Data Policies"
  },
  "rightAnswers": "d"
},
  {
  "category": "TI",
  "question": "A team wants users to submit new entries into the Incident table through the Service Catalog. They create a catalog item and add variables for short description, category, and urgency. However, when users submit the form, no Incident records are created — only catalog requests appear. What is the most likely reason for this behavior?",
  "answers": {
    "a": "They created a standard Catalog Item and need to add a script to populate the Incident table fields",
    "b": "They created a Record Producer but forgot to set the Map to field attribute on each variable",
    "c": "They created a Record Producer but did not add a catalog category to make it visible",
    "d": "They created a standard Catalog Item instead of a Record Producer"
  },
  "rightAnswers": "d"
},
  {
  "category": "TI",
  "question": "In ServiceNow import set transforms, what object is passed to the onBefore and onAfter transform scripts to manage row-level error handling?",
  "answers": {
    "a": "The transform_map object",
    "b": "The import_set_row object",
    "c": "The error_handler object",
    "d": "The error object"
  },
  "rightAnswers": "d"
},
  {
  "category": "TI",
  "question": "In ServiceNow, which field type stores its value as a comma-separated list of sys_ids in a single database column?",
  "answers": {
    "a": "Reference field type stores multiple sys_ids as comma-separated values in one column",
    "b": "Glide List field type stores multiple sys_ids as comma-separated values in one column",
    "c": "List field type stores multiple sys_ids in a separate many-to-many relationship table",
    "d": "Glide List field type stores display values as comma-separated strings in one database column"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "A team needs the 'Description' field on the Problem table to be mandatory when records are created through both the form and inbound email processing. Which ServiceNow feature should they use to accomplish this?",
  "answers": {
    "a": "A Data Policy, since it enforces field attributes only on form-based client interactions",
    "b": "A UI Policy, since it enforces field attributes on both client and server interactions",
    "c": "A Business Rule, since it enforces field attributes on both client and server interactions natively",
    "d": "A Data Policy, since it enforces field attributes on both client and server interactions"
  },
  "rightAnswers": "d"
},
  {
  "category": "TI",
  "question": "A team needs to track which Employees work at which Office Locations. An employee can work at multiple offices, and each office has multiple employees. A junior developer asks: 'What type of table do we need to create to connect these two tables together?' What is the correct answer?",
  "answers": {
    "a": "A reference field on the Employee table that allows selecting multiple Office Location records from a list",
    "b": "A junction table that contains a single reference field pointing to a combined Employee-Office Location key value",
    "c": "A junction table that contains two reference fields, one pointing to the Employee table and one pointing to the Office Location table",
    "d": "A junction table that contains two reference fields, both pointing to the Employee table to link employees across offices"
  },
  "rightAnswers": "c"
},
  {
  "category": "TI",
  "question": "A new developer wants to add fields to a form in ServiceNow. They navigate to a form and see fields grouped under labeled headers like 'General' and 'Notes.' The developer wants to know where these groupings are managed. What are these groupings called, and where can the developer find the option to configure them?",
  "answers": {
    "a": "They are called sections, and the developer can configure them by creating UI Policies that define the section structure through the System UI module",
    "b": "They are called sections, and the developer can configure them using the Form Design or Form Layout tools accessible from the form's context menu",
    "c": "They are called sections, and the developer can configure them by editing the table's dictionary entries in the System Definition module",
    "d": "They are called field groups, and the developer can configure them using the Form Design or Form Layout tools accessible from the form's context menu"
  },
  "rightAnswers": "b"
},
  {
  "category": "TI",
  "question": "A developer receives a CSV file containing employee records and needs to load them into the User [sys_user] table. After uploading the CSV file, what should the developer do next to move the data from the staging table into the target table?",
  "answers": {
    "a": "Create a Transform Map and run the transform",
    "b": "Create a Data Policy and run the data validation",
    "c": "Create a Transform Map and run the scheduled job",
    "d": "Create a Field Map and run the import set cleanup"
  },
  "rightAnswers": "a"
},
  {
  "category": "TI",
  "question": "A team wants to create a reusable Script Include called 'DateHelper' that provides utility methods for date formatting. Which step is essential when setting up this Script Include?",
  "answers": {
    "a": "Ensure the class name inside the script matches the Application scope prefix",
    "b": "Ensure the class name inside the script matches the Name field value 'DateHelper'",
    "c": "Ensure the Client callable checkbox is selected so server scripts can use it",
    "d": "Ensure the class name inside the script matches the table name where it will be called from"
  },
  "rightAnswers": "b"
}
];
