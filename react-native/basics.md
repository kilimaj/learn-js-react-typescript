# Create new project

- To create a new project, you can use the following command:

'''npm
npx react-native@lates init ProjectName
'''

- The above is deprecated.

'''npm
npx @react-native-community/cli@latest init ProjectName
'''

- This will create a new project with the name "ProjectName" and install all the required dependencies

- Then cd into the project directory

'''node
npx react-native run-ios
'''
OR

'''node
npx react-native run-android
'''

OR

- Open AwesomeProject/ios/AwesomeProject.xcworkspace in Xcode or run "xed -b ios"
- Then Hit the Run button.

If encounter errors , try to run the following command:

''' npx
npx react-native start --reset-cache
'''

- Close metro bundler and run the command to run-android or run-ios

- If doesn't work open the clean-all-mac.sh and run the scripts

- make sure to add the following to the .eslintrc.js file

'''eslint
module.exports = {
..., 
//Add this section 
// --------
rules: {
'prettier/prettier': [
  'error',
  {
    endOfLine: 'auto',
  },
],
// --------
}
'''