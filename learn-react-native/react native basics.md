# Create new project

- To create a new project, you can use the following command:

```zsh
npx react-native@latest init ProjectName
```

- The above is deprecated.

```zsh
npx @react-native-community/cli@latest init ProjectName
```

- This will create a new project with the name "ProjectName" and install all the required dependencies

- Then cd into the project directory

```zsh
npx react-native run-ios
```

OR

```zsh
npx react-native run-android
```

OR

- Open AwesomeProject/ios/AwesomeProject.xcworkspace in Xcode or run "xed -b ios"
- Then Hit the Run button.

If encounter errors , try to run the following command:

```zsh
npx react-native start --reset-cache
```

- Close metro bundler and run the command to run-android or run-ios

- If it doesn't work open the clean-all-mac.sh and run the scripts

```zsh
sudo chmod 777 ./clean-all-mac.sh
```

- make sure to add the following to the .eslintrc.js file
- First check prettier and eslint versions

```zsh
npx prettier --version
```

```zsh
npx eslint --version  
```

- If its new versions 3.x for prettier and 8.x for eslint then install plugins

```zsh
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
```
- If old versions 2.x for prettier then use 

```zsh
npm install --save-dev eslint-plugin-prettier@4.2.1 eslint-config-prettier@8.8.0         
```
- Then change contents of eslint to

```js
module.exports = {
    root: true,
    extends: ['@react-native', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};

```
