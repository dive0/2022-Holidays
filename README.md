# Web Development Project 5 - *2022 Holidays*

Submitted by: **Shi Wei Zheng**

This web app: **This app display various holidays in 2022 in the United States**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The list displays a list of data fetched using an API call**
- [x] **Data uses the useEffect React hook and async/await syntax**
- [x] **The app dashboard includes at least three summary statistics about the data such as**
  - [x] Total number of holidays
  - [x] The middle holiday of the year
  - [x] Range from the date of the first holiday to the last holiday
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='.\src\assets\brave_j4c5Kb8Dce.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ShareX
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
- One challenge I faced was trying to get the filter and search working. I had an idea of how to implement it. However, when trying to allow multiple filters to be applied simultaneously I ran into problems. The main problem is the conditions for if statements. I kept messing up what conditions to use to check the filters. After playing around for a while, I was able to figure out what I did wrong.
- Another challenge was that I was not able to directly get the object from the array of data. For example, I can't do something like list[0].name. I got an error saying name is undefined even though it is a key for the object. After trying around with different methods like using for loop, which doesn't work in React, I decided to use the map function to get the data that I needed.



## License

    Copyright [2023] [Shi Wei Zheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.