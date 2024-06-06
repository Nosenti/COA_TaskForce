# COA_TaskForce

---

The Code of Africa TaskForce Challenge consists of the Interactive Photo Gallery and Challenges to asses algorithmic thinking using Javascript. 

## Interactive Photo Gallery

---

This Interactive photo gallery is designed to showcase wildlife photograph with enhanced user experience on differet kind of devices. 

### Features

- **Responsive Design**: The gallery is fully responsive, adjusting layout and interactive elements baded on the device screen size
- **Interactive Elements**: Hover effects on desktop reveal more information while the picture zooms in and change background for all sceen sizes on hover. 
- **Mobile Optimization**: On mobile devices, textual overlays are hidden to prioritize visual content

### Technologies Used

- HTML5
- CSS3
- Google Fonts

### Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Nosenti/COA_TaskForce.git
   ```
2. **Navigate to the directory of photo gallery**:

   ```bash
   cd COA_TaskForce/photo_gallery
   ```
3. **Open the project**:

   Open the \`index.html\` file in a web browser to view the project

### File Structure

- \`index.html\` - The main HTML document
- \`stylesheet.css\` - Contains all the styling for the project
- \`images/\` - Directory containing all images used in the gallery

## Challenges

---

### Challenge 1: Array Manipulation

### Problem Statement

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return `true` if such a subarray exists, otherwise return `false`.

### Implementation

The solution uses a sliding window technique to find a contiguous subarray that matches the target sum, achieving an optimal O(n) time complexity.

### Usage

To use the function, simply import it into your JavaScript environment or HTML file and call it with an array and a target sum as arguments. 

### Challenge 2: String Transformation

### Problem Statement

Transform a string based on its length properties:

- If the length is divisible by 3, reverse the string.
- If the length is divisible by 5, replace each character with its ASCII code.
- If the length is divisible by both 3 and 5, perform both operations.

### Implementation

The function `stringTransformation` applies different transformations to the string based on its length divisibility rules. The implementation ensures O(n) complexity where n is the length of the string.

### Usage

To use this function , import it into your JavaScript environment and call it with a string:

## Testing

For both challenges, the provided code includes simple test cases to verify the correctness of implementation. To tun these tests, you can execute the javascript file in a Node.js environment or any Javascript enabled browser console. 

Inside the Challenges folder, you can run it like this provided that you have node.js installed on your computer:

```javascript
node filename.js
```