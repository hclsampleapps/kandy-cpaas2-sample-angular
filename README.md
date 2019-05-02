# kandy-cpaas2-sample-angular

### Kandy CPaaS2 sample in Angular

It is an audio/video chat application made using Angular 5 or above.

 - Try the [demo](https://hclsampleapps.github.io/kandy-cpaas2-sample-angular/dist/)
 - Get the [source code](https://github.com/hclsampleapps/kandy-cpaas2-sample-angular)

***Note**: It has been currently tested successfully with version 5 & 6.*

#### User manual 

1. Create an account on **AT&T** portal via [Register now for a free account](https://apimarket.att.com/signup).
2. Open 2 instances of `index.html` in the browser for *User1* and *User2*.
3. Enter the *server URL*, for e.g.,
	- For AT&T API Marketplace [apimarket.att.com](https://apimarket.att.com), enter `https://oauth-cpaas.att.com`
4. Choose to get accessToken by *Password Grant* flow or *Client Credentials* flow.
5. Login using two different users' credentials in both the browser windows.
6. For **Password Grant** flow, enter 
	- *clientId* 
	- *emailId* 
	- *password*  
7. For **Client Credentials Grant** flow, enter
	- *privateKey*
	- *privateSecret*   
8. Click ***Login***
9. After successful login you will get an *accessToken* for Project/User on both tabs.
10. Click ***Subscribe*** button in both the browser windows to create the webrtc channel.
11. Enter the *User2*'s User ID into the *User1*'s browser window in the input field under ***Make Call*** section; e.g., sip:janedoe@somedomain.com (sip:[userId]@[domain]) or you may also call the TN in the E164 format sip:+12223334444@domain
12. Select the *with video* check box to make video call or uncheck for voice call.
13. On *User2*'s window you will find an incoming call, now click on ***Answer Call*** button to answer the call or ***Reject Call*** button to reject the call.
14. After selecting ***Answer Call***, the call is started and the remote view and local view can be checked.
15. To end the conversation, you can click ***End Call*** button.

##### Notes

 - Existing user can confirm their account via [Log in to AT&T API Marketplace](https://apimarket.att.com/login)
 - You can download *kandy.js* from [Developer documentation - SDKs](https://apimarket.att.com/developer/sdks/javascript)

#### Development
You need to follow the pre-requisite, after which you would be ready for development stage and later on you can generate production build.

##### Pre-requisite
You need to install Angular CLI to run all `ng commands` using `npm` command.

- For *local* installation, run this command
 - `npm install @angular/cli@latest –save-dev`

- For *global* installation, run this command
 - `npm install -g @angular/cli@latest –save-dev`

##### Setup

To setup the project repository, run these commands

```
git clone https://github.com/hclsampleapps/kandy-cpaas2-sample-angular.git
cd kandy-cpaas2-sample-angular
npm install
```

##### Start server

- Using `ng`
 
  1. Run `ng serve` for a dev server. 
  2. Navigate to `http://localhost:4200/`. 
  3. The app will automatically reload if you change anything in source file.
 
- Without using `ng`

  1. Run `npm run start` directly if you are not using Angular CLI in case. 
  2. It will navigate to `http://localhost:4200/`.

##### Build

 - Run `ng build` or `npm run build` to build the project. 
 - The build artifacts will be stored in the `dist/` directory. 
 - Use the `-prod` flag for a production build.

#### Branching strategy

To learn about the branching strategy, contribution & coding conventions followed in the project, please refer [GitFlow based branching strategy for your project repository](https://gist.github.com/ribbon-abku/10d3fc1cff5c35a2df401196678e258a)

#### References

To get more help on the Angular CLI 

 - Run command, `ng help`, or 
 - Visit link, [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)