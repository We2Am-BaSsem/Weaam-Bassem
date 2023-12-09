# Test Design 

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Module Name</th>
      <th>Test Scenario Name</th>
      <th>Test Case Name</th>
      <th>Expected Result</th>
      <th>Priority</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">1</td>
      <td rowspan="2">Register</td>
      <td rowspan="2">Check Register/Sign up Functionality</td>
    </tr>
    <tr>
      <td>User can register</td>
      <td>When user attempts to register with new email via Google/Facebook/Email he can register successfully.</td>
      <td>High</td>
    </tr>
    <tr>
      <td rowspan="6">2</td>
      <td rowspan="6">Login</td>
      <td rowspan="6">Check Login Functionality</td>
    </tr>
    <tr>
      <td>User can login with google</td>
      <td>Google accounts modal should appear. the user can login successfully with google account.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>User can login with Facebook</td>
      <td>The user should be redirected to browser or Facebook app to authenticate his facebook account. the user can login successfully with Facebook account.</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td>User can login with E-mail</td>
      <td>The user should be redirected to another screen tio enter his email and password</td>
      <td>High</td>
    </tr>
    <tr>
      <td>User enter invalid email</td>
      <td>The user should be able to submit the email.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>User enter un-registered email</td>
      <td>Name and password fields should appear so the user should be able to register.</td>
      <td>High</td>
    </tr>
    <tr>
      <td rowspan="4">3</td>
      <td rowspan="4">My Day</td>
      <td rowspan="4">Check My Day Screen</td>
    </tr>
    <tr>
      <td>Check when there's tasks on the current day</td>
      <td>The user should see the tasks of the current day.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Check when the day is done</td>
      <td>The day's tasks should disappear and the new day's tasks should be displayed on the screen.</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Check when there's no tasks on the current day</td>
      <td>A greeting message should appear to the user and there should be no tasks displayed.</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td rowspan="4">4</td>
      <td rowspan="4">My Lists</td>
      <td rowspan="4">Check My lists section on home Screen</td>
    </tr>
    <tr>
      <td>Check users' lists are displayed</td>
      <td>All user's list should be displayed on the home screen properly</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Check user creating new lists</td>
      <td>A modal should appear so the user can enter new list name and create it</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Check user creating new lists wit duplicate names</td>
      <td>The user shouldn't be able to create a list with duplicate name and an error message should appear</td>
      <td>Low</td>
    </tr>
    <tr>
      <td rowspan="4">5</td>
      <td rowspan="4">Workspace</td>
      <td rowspan="4">Check workspace section on home Screen</td>
    </tr>
    <tr>
      <td>Check users' workspaces are displayed</td>
      <td>All user's workspaces should be displayed on the home screen properly</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Check user creating new board on his workspace</td>
      <td>A modal should appear so the user can enter new board name and create it</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Check user creating new board wit duplicate names</td>
      <td>The user shouldn't be able to create a board with duplicate name and an error message should appear</td>
      <td>Low</td>
    </tr>
    <tr>
      <td rowspan="4">6</td>
      <td rowspan="4">Boards</td>
      <td rowspan="4">Check user can collaborate with other user on boards</td>
    </tr>
    <tr>
      <td>Check adding new users</td>
      <td>The new added users should have access on the board from home screen Workspace section</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Check adding tasks on board</td>
      <td>All users should be able to add tasks on the board</td>
      <td>High</td>
    </tr>
    <tr>
      <td>Check adding comments on board's tasks</td>
      <td>All users should be able to comment on any task and other users can see their comments</td>
      <td>Low</td>
    </tr>
    <tr>
      <td rowspan="4">7</td>
      <td rowspan="4"></td>
      <td rowspan="4"></td>
    </tr>
  </tbody>
</table> 

# Bug Reporting 



<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Reproducible Steps</th>
      <th>Attachments</th>
      <th>Affected Devices</th>
      <th>Network</th>
      <th>Severity</th>
      <th>Priority</th>
      <th>Impact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>user can't register</td>
      <td>
        <p> 1- Open the app <br> 2- Click on E-mail button <br> 3- Enter un-registered email <br> 4- Press Enter <br> 5- Add user name <br> 6- Add password <br> 7- Press on Create account button </p>
      </td>
      <td></td>
      <td>Xiaomi Redmi 9A, Android 10, 6.53" 720x1600 pixels <br>
      </td>
      <td>Wi-Fi and mobile data connections</td>
      <td>Moderate</td>
      <td>High</td>
      <td> - Potential loss of new user sign-ups, impacting user growth and engagement. <br> - Negative user experience leading to frustration and possible user abandonment. </td>
    </tr>
    <tr>
      <td>Misaligned Try It Free Button in home</td>
      <td>
        <p> 1- open the app <br> 2- login to the dashboard <br> 3- click on the Home button </p>
      </td>
      <td></td>
      <td>Xiaomi Redmi 9A, Android 10, 6.53" 720x1600 pixels <br>
      </td>
      <td>Wi-Fi and mobile data connections</td>
      <td>Low</td>
      <td>Medium</td>
      <td> - issue affecting the visual appeal and alignment of the workspace creation card. </td>
    </tr>
    <tr>
      <td>Incomplete Language Translation for Non-English Languages</td>
      <td>
        <p> 1- Open the app <br> 2- Login to the dashboard <br> 3- Access the app settings or profile section to change the language setting to Arabic (or any language other than English). <br> 4- Open home screen <br> 4- Select Next 7 days <br>
        </p>
      </td>
      <td></td>
      <td>Xiaomi Redmi 9A, Android 10, 6.53" 720x1600 pixels <br>
      </td>
      <td>Wi-Fi and mobile data connections</td>
      <td>Moderate</td>
      <td>High</td>
      <td>- May lead to confusion or frustration due to mixed language content, impacting user satisfaction and retention. </td>
    </tr>
    <tr>
      <td>Non-Clickable "+" Icon in Empty Task List Message</td>
      <td>
         <p> 
            1- Open the app <br> 
            2- Login to the dashboard <br>
            3- click on the Home button <br>
            4- Navigate to a task list that does not contain any tasks.
      </td>
      <td></td>
            <td>Xiaomi Redmi 9A, Android 10, 6.53" 720x1600 pixels <br>
        </td>
      <td>Wi-Fi and mobile data connections</td>
      <td>Low</td>
      <td>Medium</td>
      <td>
      - Frustration for users attempting to add tasks to an empty list by interacting with the non-responsive icon. <br>
      - Potential confusion or misunderstanding of the app's functionality due to the discrepancy between the instruction and the icon's behavior.
</td>
    </tr>
    <tr>
      <td>New Day's Tasks Not Appearing on "My Day" Screen</td>
      <td>
        <p> 
            1- wait till the day is done(the time is 12:00 AM and there should be tasks for the new day) <br> 
            2- Open the app <br> 
            3- Login to the dashboard <br>
            4- Open My Day screen <br>
        </p>
      </td>
      <td></td>
            <td>Xiaomi Redmi 9A, Android 10, 6.53" 720x1600 pixels <br>
        </td>
      <td>Wi-Fi and mobile data connections</td>
      <td>High</td>
      <td>High</td>
      <td>- Potential frustration for users reliant on the "My Day" feature to manage their tasks effectively.
</td>
    </tr>
  </tbody>
</table>