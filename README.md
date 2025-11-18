# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Play Button
This button is used to play the music from the code editor. There is no stop button because when you press play, the label will change to stop. Meaning that play button does both the job of stop and playing the music.

### Cpm textArea
This textArea is used to change the speed at which the current music is being played. If a letter is entered it will automatically set it to the default value with the label "Nan".

### Mute radio checkBox
These checkBox allows the instrument in my tunes to be muted and unmuted. Currently there are 3 instrument (main_apr,drums and drums2)By simply checking and unchecking the box, you can mute and unmute them.
This can help you create different variation of sound depending on what instrument you mute.

### Volume slider
This volume slider is used to change the volume output of the current music.

### Save text Area and save Button
This text area is where you input the name of the file you are currently using for when you save it. If no name is inputted, the file will be saved under the name "untitled".
If ever you save a filename which already exists, it will overwrite the previous file with the same name with the new content. It doesn't allow 2 files with same name to be stored.
A notification will pop up once a file was successfully saved and will disappear after 2 second.

### Load Button and drop down box.
This drop down box contains a list of all the files you have saved. 
By simply selecting one of the files and clicking on the button you will load the file with all the settings, that is the unchecked button, same as when you last used them.
As long as a file has not been selected, the load button will not be available.
A notification will pop up once a file was loaded and it will disappear after 2 second.

### Delete Button and drop down box.
You can select the file you want to delete using the drop down box. Upon pressing the button delete, you will be asked to confirm the deletion process.
If you press cancel, this will stop the deletion process. If you press yes, the selected file will be deleted.
As long as a file has not been selected, the delete button will be available.
A notification will pop up once a file was deleted and it will disappear after 2 second.

### Graph
This graph displays the gain of the music being played. As the speed is increased or certain instrument are muted, the gain will be affected and displayed on the graph.

### toggle Button
This button can be used to switch between light and dark mode.
