# Viaplay Challenge 

## Action plan: 
- Run API on postman
- Fixture
- Write tests
    - Display 10 videos

You are challenged with the task of replicating a UI and test the UI with Cypress IO. It is a desktop-only web application listing TV series from Viaplay. 
You need to fork this repository and clone it down to your local computer. Implement the challenge in your forked repository, make sure to branch off and to open up a WIP pull request to this repository as soon as possible.

Make sure to commit often!

The presented UI looks like this:

![](https://github.com/CraftAcademyLabs/coach-guides/raw/master/miscellaneous/assessments/viaplay_challenge_ui.png)


You need to fetch the data from the Viaplay API and find the appropriate attributes that hold the information you need. 

The API is located at:

```
https://content.viaplay.se/pc-se/serier/samtliga
```
We have provided you with a fixure of the response that this request will yield. You can find the response here:
[Github Gist](https://gist.github.com/tochman/4b49fda022106423f8e9257e4435aa43#file-viaplay_response-json)

If you want to, you can also look at the response object in a browser.

The TV series listings can be found at: 
```js
yourDataObject._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
```

You can find a logo with a transparent background at: 
```
https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg
```

Displaying the shows in a row with the right formatting is a bit challenging. To help you, we've chosen to provide an example solution that is proven to yield good results. It is up to you if you want to use it though. The rest of the css needed to replicate the UI is up to you to define.

```css
.display-show {
    display: inline-block;
    width: 23%;
    width: calc(25% - ( ( 20px ) * 0.75 ) );
    margin-right: 20px;
    margin-bottom: 20px;
}

.display-show:nth-child(4n+4) {
    margin-right: 0;
}

.display-show img {
    width: 100%;
    height: auto;
}
```
The ```nth-child``` in CSS is probably something that you haven't seen before. The ```nth-child``` is a pseudo-class in CSS that matches elements based on their position in a group of siblings to a parent. You can read it as *n*th-child, so as an example: *four*th child and the *n* can be a number, a keyword or a formula.      
In the example above ```.display-show``` is the parent. 
The ```nth-child``` selector takes one argument which accesses the index of the child element and describes the pattern. Element indices are 1-based and doesn't start with 0.       
In this case when we are using this formula: ```(4n+4)```, where the first *4* represents a cycle size, *n* is a counter that starts at 0 and *4* is the offset value. So we access all child elements which index is a multiple of 4. 

**Good luck and Happy Coding.**
